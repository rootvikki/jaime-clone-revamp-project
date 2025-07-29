import React, { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Loader2, Play, Download, Sparkles } from 'lucide-react';

export const AIVideoGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [predictionId, setPredictionId] = useState<string | null>(null);
  const { toast } = useToast();

  const generateVideo = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Error",
        description: "Please enter a video prompt",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setGeneratedVideo(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-video', {
        body: { prompt }
      });

      if (error) {
        throw error;
      }

      if (data.output) {
        // If we get immediate output (unlikely for video generation)
        setGeneratedVideo(data.output);
        toast({
          title: "Video Generated!",
          description: "Your AI video has been created successfully.",
        });
      } else if (data.id) {
        // If we get a prediction ID, we need to poll for completion
        setPredictionId(data.id);
        pollForVideoCompletion(data.id);
      }

    } catch (error) {
      console.error('Video generation error:', error);
      toast({
        title: "Error",
        description: error.message || "Failed to generate video. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const pollForVideoCompletion = async (id: string) => {
    const maxAttempts = 60; // Poll for up to 5 minutes
    let attempts = 0;

    const poll = async () => {
      try {
        const { data, error } = await supabase.functions.invoke('generate-video', {
          body: { predictionId: id }
        });

        if (error) {
          throw error;
        }

        if (data.status === 'succeeded' && data.output) {
          setGeneratedVideo(Array.isArray(data.output) ? data.output[0] : data.output);
          setPredictionId(null);
          toast({
            title: "Video Generated!",
            description: "Your AI video has been created successfully.",
          });
          return;
        }

        if (data.status === 'failed') {
          throw new Error(data.error || 'Video generation failed');
        }

        if (data.status === 'processing' || data.status === 'starting') {
          attempts++;
          if (attempts < maxAttempts) {
            setTimeout(poll, 5000); // Poll every 5 seconds
          } else {
            throw new Error('Video generation timed out');
          }
        }

      } catch (error) {
        console.error('Polling error:', error);
        setPredictionId(null);
        toast({
          title: "Error",
          description: error.message || "Failed to generate video. Please try again.",
          variant: "destructive",
        });
      }
    };

    poll();
  };

  const downloadVideo = () => {
    if (generatedVideo) {
      const link = document.createElement('a');
      link.href = generatedVideo;
      link.download = `ai-generated-video-${Date.now()}.mp4`;
      link.click();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="flex items-center justify-center gap-2 text-2xl">
            <Sparkles className="text-primary" />
            AI Video Generator
          </CardTitle>
          <CardDescription>
            Create stunning solar energy videos using AI. Describe what you want to see and let AI bring it to life!
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="prompt">Video Description</Label>
            <Input
              id="prompt"
              placeholder="e.g., Solar panels on a rooftop during sunset with energy flowing, time-lapse of solar installation, solar farm in a green field..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={isGenerating}
            />
          </div>

          <Button 
            onClick={generateVideo} 
            disabled={isGenerating || !prompt.trim()}
            className="w-full"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generating Video...
              </>
            ) : (
              <>
                <Play className="mr-2 h-4 w-4" />
                Generate AI Video
              </>
            )}
          </Button>

          {predictionId && (
            <div className="text-center p-4 bg-muted rounded-lg">
              <Loader2 className="mx-auto h-8 w-8 animate-spin mb-2" />
              <p className="text-sm text-muted-foreground">
                Video is being generated... This may take 2-3 minutes.
              </p>
            </div>
          )}

          {generatedVideo && (
            <div className="space-y-4">
              <div className="relative rounded-lg overflow-hidden bg-black">
                <video
                  src={generatedVideo}
                  controls
                  className="w-full h-auto"
                  preload="metadata"
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              
              <div className="flex gap-2 justify-center">
                <Button onClick={downloadVideo} variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Download Video
                </Button>
              </div>
            </div>
          )}

          <div className="bg-muted/50 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Suggested Prompts:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
              <button 
                onClick={() => setPrompt("Solar panels on a modern house rooftop during golden hour sunset")}
                className="text-left p-2 rounded bg-background hover:bg-muted transition-colors"
              >
                "Solar panels on a modern house rooftop during golden hour sunset"
              </button>
              <button 
                onClick={() => setPrompt("Time-lapse of solar panel installation by professional workers")}
                className="text-left p-2 rounded bg-background hover:bg-muted transition-colors"
              >
                "Time-lapse of solar panel installation by professional workers"
              </button>
              <button 
                onClick={() => setPrompt("Large solar farm with rows of panels in green countryside")}
                className="text-left p-2 rounded bg-background hover:bg-muted transition-colors"
              >
                "Large solar farm with rows of panels in green countryside"
              </button>
              <button 
                onClick={() => setPrompt("Solar panels reflecting sunlight with energy visualization effects")}
                className="text-left p-2 rounded bg-background hover:bg-muted transition-colors"
              >
                "Solar panels reflecting sunlight with energy visualization effects"
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
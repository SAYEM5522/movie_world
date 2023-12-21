import React, { useEffect } from 'react';

const YouTubeVideo = ({ videoUrl }) => {
  useEffect(() => {
    // Extract video ID from the YouTube URL
    const videoIdMatch = videoUrl?.match(/(?:youtube\.com\/(?:[^/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?/ ]{11})/);
    const videoId = videoIdMatch ? videoIdMatch[1] : null;

    if (!videoId) {
      console.error('Invalid YouTube URL');
      return;
    }

    // Load the YouTube Iframe API script
    const script = document.createElement('script');
    script.src = 'https://www.youtube.com/iframe_api';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the YouTube player when the API script is loaded
      window.onYouTubeIframeAPIReady = () => {
        new window.YT.Player('youtubePlayer', {
          height: '400',
          width: '640',
          videoId: videoId,
          playerVars: {
            autoplay: 1, // Auto-play the video
          },
        });
      };
    };

    // Clean up the script tag when the component unmounts
    return () => {
      document.body.removeChild(script);
      delete window.onYouTubeIframeAPIReady;
    };
  }, [videoUrl]);

  return <div id="youtubePlayer"></div>;
};

export default YouTubeVideo;

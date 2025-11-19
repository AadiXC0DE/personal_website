
import React, { useEffect } from 'react';

interface TweetEmbedProps {
  id: string;
  size?: 'small' | 'medium';
}

const TweetEmbed: React.FC<TweetEmbedProps> = ({ id, size = 'medium' }) => {
  useEffect(() => {
    // Load Twitter widget script
    // Check if script already exists to prevent duplicate loading
    if (!document.getElementById('twitter-wjs')) {
      const script = document.createElement('script');
      script.id = 'twitter-wjs';
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      script.charset = "utf-8";
      document.body.appendChild(script);
    } else {
      // If script exists, try to re-render widgets (useful for route changes)
      // @ts-ignore
      if (window.twttr && window.twttr.widgets) {
        // @ts-ignore
        window.twttr.widgets.load();
      }
    }
  }, [id]);

  const maxWidth = size === 'small' ? 'max-w-[350px]' : 'max-w-[500px]';

  return (
    <div className={`flex justify-center w-full ${maxWidth} mx-auto`}>
      <div className="w-full overflow-hidden">
        <blockquote className="twitter-tweet" data-dnt="true" data-theme="light">
          <a href={`https://twitter.com/user/status/${id}`}>Loading Tweet...</a>
        </blockquote>
      </div>
    </div>
  );
};

export default TweetEmbed;

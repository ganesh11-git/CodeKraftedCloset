import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ChatBot = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if the current pathname is not '/coming-soon'
    if (location.pathname !== '/coming-soon') {
      const script = document.createElement('script');
      script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
      script.async = true;

      document.body.appendChild(script);

      script.onload = () => {
        window.botpressWebChat.init({
          "composerPlaceholder": "Chat with bot",
          "botConversationDescription": "",
          "botId": "17e2cf50-dee4-45c9-b07f-0e2894652aba",
          "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
          "messagingUrl": "https://messaging.botpress.cloud",
          "clientId": "17e2cf50-dee4-45c9-b07f-0e2894652aba",
          "webhookId": "9f787b51-8a46-41b6-b69b-cc2c52a0c300",
          "lazySocket": true,
          "themeName": "prism",
          "frontendVersion": "v1",
          "showPoweredBy": true,
          "theme": "prism",
          "themeColor": "#2563eb",
          "allowedOrigins": []
        });
      };

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [location.pathname]);

  // Render nothing if the pathname is '/coming-soon'
  if (location.pathname === '/coming-soon') {
    return null;
  }

  return (
    <div>
      <h2></h2>
      {/* Botpress web chat will be injected here */}
    </div>
  );
};

export default ChatBot;

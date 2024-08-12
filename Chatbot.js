import React, { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js';
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'ecdf3758-af0a-403f-a528-692e3bd1ccc1',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'ecdf3758-af0a-403f-a528-692e3bd1ccc1',
        lazySocket: true,
        useSessionStorage: true,
        enableConversationDeletion: true,
        botName: "EliteEvent",
      avatarUrl: "https://gravatar.com/avatar/ba5cb9cfaacffe5d8d86388203cab868?s=400&d=robohash&r=x",
      stylesheet: "https://webchat-styler-css.botpress.app/prod/9785b8c4-68d7-4701-8133-98da0f415416/v96749/style.css",
        themeName: "prism",
      frontendVersion: "v1",
      showConversationsButton: false,
      theme: "prism",
      themeColor: "#2563eb",
      });

      // Reset the chatbot session on each page refresh
    
    };

    
  }, []);

  return <div id="webchat" />;
};

export default Chatbot;

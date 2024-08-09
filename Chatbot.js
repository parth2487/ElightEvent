import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        botId: 'c34ab956-4a35-41f1-be7b-292d9ac5a16f',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: '575fdc73-3b02-4aee-8e83-4d47fd4910d2',
      })
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot

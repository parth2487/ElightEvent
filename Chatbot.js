import React, { useEffect } from 'react'

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://cdn.botpress.cloud/webchat/v1/inject.js'
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      window.botpressWebChat.init({
        botId: '246df6a2-6c29-4842-8cf1-db0a3992d323',
        hostUrl: 'https://cdn.botpress.cloud/webchat/v1',
        messagingUrl: 'https://messaging.botpress.cloud',
        clientId: 'c1cd772c-75f8-40a2-8ed5-50e3dceea663',
      })
    }
  }, [])

  return <div id="webchat" />
}

export default Chatbot



https://mediafiles.botpress.cloud/246df6a2-6c29-4842-8cf1-db0a3992d323/webchat/bot.html

<script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></script>
<script src="https://mediafiles.botpress.cloud/246df6a2-6c29-4842-8cf1-db0a3992d323/webchat/config.js" defer></script>

import "./style.css"
import theme from "./theme.json"

import { Webchat, WebchatProvider, useClient } from '@botpress/webchat'

const App = () => {
  const client = useClient({ clientId: '453254325-54325-435-345-345534253' })

  return (
    <WebchatProvider client={client} theme={theme}>
      <Webchat />
    </WebchatProvider>
  )
}


https://cdn.botpress.cloud/webchat/v2/shareable.html?botId=246df6a2-6c29-4842-8cf1-db0a3992d323

c1cd772c-75f8-40a2-8ed5-50e3dceea663

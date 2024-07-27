import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react'

posthog.init('phc_7zONH60zpT2Bzhpj1te8ktMpFlxMCW0NQ74Y4Vy64hG',
  {
    api_host: 'https://us.i.posthog.com',
    person_profiles: 'identified_only'
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <PostHogProvider client={posthog}>
      <App />
    </PostHogProvider>
  </React.StrictMode>,
)

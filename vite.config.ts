import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Google Analytics (gtag.js) — injected into index.html for the PRODUCTION
// build ONLY, so staging (aos-stg.injecting.ai) isn't tracked. This landing is
// built inside the dashboard app's Amplify pipeline
// (injecting-ai-web-agent-website/amplify.yml), which sets AWS_BRANCH=main only
// for the prod build (aos.injecting.ai); every other branch produces the
// staging build. Gate on that env var — staging/local builds never include it.
const GA_MEASUREMENT_ID = 'G-FSSTDGHPT0'
const isProdBuild = process.env.AWS_BRANCH === 'main'

function gtagProdOnly() {
  return {
    name: 'inject-gtag-prod',
    transformIndexHtml() {
      if (!isProdBuild) return
      return [
        {
          tag: 'script',
          attrs: { async: true, src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}` },
          injectTo: 'head' as const,
        },
        {
          tag: 'script',
          children:
            'window.dataLayer = window.dataLayer || [];\n' +
            'function gtag(){dataLayer.push(arguments);}\n' +
            "gtag('js', new Date());\n" +
            `gtag('config', '${GA_MEASUREMENT_ID}');`,
          injectTo: 'head' as const,
        },
      ]
    },
  }
}

export default defineConfig({
  plugins: [react(), gtagProdOnly()],
})

import 'tailwindcss/tailwind.css'
import { MDXProvider } from '@mdx-js/react'
import { appWithTranslation } from 'next-i18next'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    //  <MDXProvider components={components}>
    <Component {...pageProps} />
    //  </MDXProvider>
  )
}
export default appWithTranslation(App)

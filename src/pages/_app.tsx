import 'tailwindcss/tailwind.css'
import { MDXProvider } from '@mdx-js/react'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    //  <MDXProvider components={components}>
    <Component {...pageProps} />
    //  </MDXProvider>
  )
}
export default MyApp

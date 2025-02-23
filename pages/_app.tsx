import '~/styles/globals.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress color="#fff" />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default App;
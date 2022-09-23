import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Provider as AppContextProvider } from '../contexts/app'
import { Provider as AuthContextProvider } from '../contexts/auth'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

export default MyApp

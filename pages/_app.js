import '../styles/globals.css'
import ErrorBoundary from '../hocs/error'

function MyApp({ Component, pageProps }) {
  return (
    // Wrap the Component prop with ErrorBoundary component
      <ErrorBoundary fallback={<div>Error</div>}>
        <Component {...pageProps} />
      </ErrorBoundary>
  )

}

export default MyApp

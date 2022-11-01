import '../styles/main.css'
import NextNProgress from 'nextjs-progressbar';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#29D" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />

      <Component {...pageProps} />
      {/* <style jsx global>{`
        body {
          font-family: 'Roboto', sans-serif;
        }
      `}</style> */}
    </>
  )
}
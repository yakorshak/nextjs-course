import Head from "next/head";
import Link from "next/link";



export function MainLayout({ children, title = 'Next App' }) {
  return(
    <>       
      <Head>
        <title>{title} | Next Course</title>
        <meta name="keywords" content="next, javascript, react"></meta>
        <meta name="description" content="this is youtube course"></meta>
      </Head>
      <nav>
        <Link href={'/'} style={{ color: '#FFF', textDecoration: 'none'}}>Home</Link>
        <Link href={'/about'} style={{ color: '#FFF', textDecoration: 'none' }}>About</Link>
        <Link href={'posts'} style={{ color: '#FFF' , textDecoration: 'none'}}>Posts</Link>
      </nav>
      <main>
        {children}
      </main>
      <style jsx>{`
        nav {
          position: fixed;
          height: 60px;
          top: 0;
          left: 0;
          right: 0;
          background: darkblue;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        main {
          margin-top: 60px;
          padding: 1rem;
        }
      `}</style>
    </>
  )
}
import '../styles/app.sass';
import Nav from '../components/Nav';


export default function MyApp({ Component, pageProps }) {
  return <>
    <Nav />
    <main>
      <Component {...pageProps} />
    </main>
  </>;
}
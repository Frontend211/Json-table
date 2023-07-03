import '../styles/app.sass';
import Nav from '../components/Nav';


export default function MyApp({ Component, pageProps }) {
  return <>
    <Nav />
    <main>
      <Component {...pageProps} />
      <p>
        ⚠️Внимание!!!
        Неправильное поведение при переключении между страницами одной группы,
        оставлено намеренно, код не предназначен для слепого копирования!!!
      </p>
    </main>
  </>;
}
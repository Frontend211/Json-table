import WrapperUser from '../../components/Wrapper_jsonplaceholder';
import WrapperRickMorty from '../../components/Wrapper_RickMorty';


const apiList =
  [
    { site: 'json-place-holder-users', wrapper: WrapperUser, api: 'https://jsonplaceholder.typicode.com/users' },
    { site: 'rick-and-morty-characters', wrapper: WrapperRickMorty, api: 'https://rickandmortyapi.com/api/character/?page=1' }
  ];



export default function StaticUsersPage({ data, siteIndex }) {
  const Wrapper = apiList[siteIndex].wrapper;
  return <Wrapper data={data} />;
}

export async function getStaticProps({ params: { site } }) {
  const
    // eslint-disable-next-line prefer-destructuring
    siteIndex = apiList.findIndex(el => site === el.site),
    {api} = apiList[siteIndex],
    data = await (await fetch(api)).json();
  return {
    props: { data, siteIndex }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: apiList.map(el => ({ params: { site: el.site } })),
    fallback: false, // can also be true or 'blocking'
  };
}
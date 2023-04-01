import { getByPath, pathList, apiList } from '../../includes/api-list';
import SmartList from '../../components/SmartList';

export default function StaticUsersPage({ data, index }) {

  return <SmartList key={index} startData={data} columns={apiList[index].columns}/>;
}

export async function getStaticProps({ params: { site } }) {
  const
    { api, transform, index } = getByPath(site),
    data = transform(await (await fetch(api)).json());
  return {
    props: { data, index }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: pathList.map(site => ({ params: { site } })),
    fallback: false, // can also be true or 'blocking'
  };
}
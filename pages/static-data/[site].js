import { getByPath, pathList, apiList } from '../../includes/api-list';
import SmartList from '../../components/SmartList';
import { useState } from 'react';

export default function StaticUsersPage({ data, detailsData, index }) {
  const
    [detailsId, setDetailsId] = useState(null),
    {StaticDetailsComponent} = apiList[index];
  return <>
    <SmartList key={index} startData={data} columns={apiList[index].columns} detailsCallBack={StaticDetailsComponent ? id => setDetailsId(id) : null} />
    {detailsId && <>
      <StaticDetailsComponent user={data.find(user => user.id === detailsId)} />
      <SmartList key={detailsId} startData={detailsData.filter(post=>post.userId === detailsId)} columns={[{name:'id',getVal:post=>post.id},{name:'title',getVal: post=>post.title},{name:'body',getVal:post=>post.body}]} />
    </>}
  </>;
}

export async function getStaticProps({ params: { site } }) {
  const
    { api, transform, index, apiForStatic } = getByPath(site),
    chains = [api, apiForStatic].map(async url => url ? await (await fetch(url)).json() : Promise.resolve([])),
    [rawData, detailsData] = await Promise.all(chains),
    data = transform(rawData);
  return {
    props: { index, data, detailsData }, // will be passed to the page component as props
  };
}

export async function getStaticPaths() {
  return {
    paths: pathList.map(site => ({ params: { site } })),
    fallback: false, // can also be true or 'blocking'
  };
}
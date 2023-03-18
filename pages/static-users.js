import Email from '../components/Email';
import SmartList from '../components/SmartList';

const api = 'https://jsonplaceholder.typicode.com/users',
  columns = [
    {name:'Name',getEl: obj=>obj.name},
    {name:'Email',getEl: obj=>obj.email, comp:Email},
    {name:'Address city',getEl: obj=>obj.address.city},
  ];

export default function StaticUsersPage({data}){
  return <SmartList startData= {data} columns={columns} />;
}

export async function getStaticProps() {
  const data = await (await fetch(api)).json();
  return {
    props: {data}, // will be passed to the page component as props
  };
}
import SmartList from './SmartList';


const columns = [
  { name: 'Name', getVal: obj => obj.name },
  { name: 'Status', getVal: obj => obj.status },
  { name: 'Image', getVal: obj => obj.image },
];

export default function WrapperRickMorty({data}){
  return <SmartList startData={data.results} columns={columns} />;
}
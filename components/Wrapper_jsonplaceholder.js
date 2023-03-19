import SmartList from './SmartList';

import Email from '../components/Email';

const columns = [
  { name: 'Name', getVal: obj => obj.name },
  { name: 'Email', getVal: obj => obj.email, comp: Email },
  { name: 'Address city', getVal: obj => obj.address.city },
];

export default function WrapperUser({data}){
  return <SmartList startData={data} columns={columns} />;
}
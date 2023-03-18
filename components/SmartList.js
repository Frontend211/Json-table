import { useState } from 'react';
import TBody from '../components/TBody';
import THead from '../components/THead';

export default function SmartList({ startData, columns }) {
  const
    // eslint-disable-next-line no-unused-vars
    [data, setData] = useState(startData);
  return <>
    filter:<input type="text"></input>
    <table className="smart">
      <THead columns={columns} />
      <TBody data={data} columns={columns} />
    </table>
  </>;
}
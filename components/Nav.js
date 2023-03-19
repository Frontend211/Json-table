import Link from 'next/link';


export default function Nav(){
  return <nav><ul>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/static-data/json-place-holder-users">Static JPH</Link></li>
    <li><Link href="/static-data/rick-and-morty-characters">Static R&M</Link></li>
    <li><Link href="/on-click-load-data">Button Users</Link></li>
    <li><Link href="/">Home</Link></li>
  </ul>
  <hr/>
  </nav>;
}
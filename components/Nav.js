import Link from 'next/link';
import {apiList}  from '../includes/api-list';


export default function Nav(){
  return <nav><ul>
    <li><Link href="/">Home</Link></li>
    {apiList.map(({path,title})=>
      <li key={path}><Link href={'/static-data/'+path}>Static {title}</Link></li>
    )}
    {apiList.map(({path,title})=>
      <li key={path}><Link href={'/on-click-load-data/'+path}>Button {title}</Link></li>
    )}
    {apiList.map(({path,title})=>
      <li key={path}><Link href={'/on-mount-load-data/'+path}>Auto {title}</Link></li>
    )}
  </ul>
  <hr/>
  </nav>;
}
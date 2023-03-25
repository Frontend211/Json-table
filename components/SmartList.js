import { useState } from 'react';
// import TBody from '../components/TBody';
// import THead from '../components/THead';

export default function SmartList({ startData, columns }) {
  // console.log('SmartList columns=',columns);
  const    
    // eslint-disable-next-line no-unused-vars
    [data, setData] = useState(startData),
    [sortCol, setSortCol] = useState(0), //+1,+2,+3... : asc by 0,1,2-th col,   -1,-2,-3 : desc 0,1,2-th col 
    viewData = data.filter(_=>true).sort();
  console.log('SmartList sortCol=',sortCol);
  return <>
    filter:<input type="text"></input>
    <table className="smart">
      <thead>
        <tr onClick={evt=>{
          const index = evt.target.closest('th')?.cellIndex; 
          switch(true){
            case Math.abs(sortCol)-1 !== index: 
              setSortCol(index+1);
              return;
            case sortCol-1 === index:
              setSortCol(-sortCol);
              return;
            case -sortCol-1 === index:
              setSortCol(0);
              return;
          } }
        }>
          {columns?.map((el,i) => 
            <th key={el.name} className={(Math.abs(sortCol)-1 ===i ? 'sort ' : ' ')+(sortCol<0 ? ' desc':' ' )}>{el.name}</th>)
          }
        </tr>
      </thead>

      <tbody>
        {data.map(el => <tr key={el.id}>
          {columns.map(col => <td key={col.name}>{col.wrap ? <col.wrap value={col.getVal(el)} /> : col.getVal(el)}</td>)}
        </tr>)}
      </tbody>
    </table>
  </>;
}
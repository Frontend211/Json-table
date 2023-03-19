export default function TBody({ data, columns }) {
  // console.log('TBody',data);
  return <tbody>
    {data?.map(el => <tr key={el.id}>
      {columns?.map(col => <td key={col.name}>{col.comp? <col.comp value={col.getVal(el)} /> : col.getVal(el)}</td>)}
    </tr>)}
  </tbody>;
}
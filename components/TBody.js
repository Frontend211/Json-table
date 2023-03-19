export default function TBody({ data, columns }) {
  console.log('TBody',data);
  return <tbody>
    {data?.map(el => <tr key={el.id}>
      {columns?.map(col => <td key={col.name}>{col.getVal(el)}</td>)}
    </tr>)}
  </tbody>;
}
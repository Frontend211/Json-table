export default function THead({ columns }) {
  return <thead>
    <tr>
      {columns?.map(el => <th key={el.name}>{el.name}</th>)}
    </tr>
  </thead>;
}
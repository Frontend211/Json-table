export default function THead({columns}){
  return <thead>
    {columns?.map(el=><th key={el.name}>{el.name}</th>)}
  </thead>;
}
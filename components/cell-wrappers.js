export function Email({value}){
  return <a href={'mailto:'+value}>{value}</a>;
}

export function Img({value}){
  // eslint-disable-next-line @next/next/no-img-element
  return <img className="icon" src={value} alt={value}/>;
}

export function Status({ value }) {
  //Alex
  switch (value) {
    case 'Alive':
      return <span className="green">&#10003; {value}</span>;
    case 'Dead':
      return <span>&#8224; {value}</span>;
    case 'unknown':
      return <span className="red">&#63; &#63; &#63; {value}</span>;
  }
}

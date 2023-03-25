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
      return <span className="icon">{Img('https://luxe-host.ru/wp-content/uploads/4/a/d/4adb75862559033b671348128a6a4b94.png')}</span>;
    case 'Dead':
      return <span className="icon">{Img('https://static.vecteezy.com/system/resources/previews/000/680/125/original/coffin-with-skeleton-and-roses.jpg')}</span>;
    case 'unknown':
      return <span className="icon">{Img('http://kl9.cnppm.ru/wp-content/uploads/2021/11/unnamed.jpg')}</span>;
  }
}

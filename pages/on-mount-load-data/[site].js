import { getByPath } from '../../includes/api-list';
import SmartList from '../../components/SmartList';

import { useRouter } from 'next/router';
import { useState,useEffect } from 'react';

export default function FetchDataOnMountPage() {
  const
    // [loading, setLoading] = useState(false),
    [error, setError] = useState(null),
    [data, setData] = useState(null),
    router = useRouter(),
    { api, transform, columns } = getByPath(router.query.site),
    fetchData = _ => {   //async
      // если у компонента появятся пропсы которые могут изменяться - то тут необходимо будет сбрасывать ошибку
      fetch(api)                  // try {
        .then(res => res.json())
        .then(obj => setData(transform(obj)))  // setData (await (await fetch(api)).json())
        .catch(err => setError(err)); // } catch(err) {  setError(err) }
    };
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(fetchData,[router.query.site]);

  if (error) return <div className="error">{error.message}</div>;
  if (data) return <SmartList startData={data} columns={columns}/>;
  return <div className="spinner"></div>;
}
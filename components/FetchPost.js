import { useState, useEffect } from 'react';
import SmartList from './SmartList';

export default function FetchPost({ id }) {
  const [error, setError] = useState(null);
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setError(null);
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts');
        if (!res.ok) throw (new Error(res.status));
        const p = await res.json();
        setPosts(p);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, [id]); //// Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()

  if (error)
    return <div>Ошибка: {error.message}</div>;
  else if (posts)
    return <SmartList columns={[{name:'id',getVal:post=>post.id},{name:'title',getVal: post=>post.title},{name:'body',getVal:post=>post.body}]} startData={posts}/>;
  return <div className="spinner" />;
}

import { useState, useEffect } from 'react';
import OneUserAndShowPosts from './OneUser+posts';


export default function FetchUser({ id }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        setUser(null);
        setError(null);
        const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        if (!res.ok) throw (new Error(res.status));
        const u = await res.json();
        setUser(u);
      } catch (err) {
        setError(err);
      }
    }
    fetchData();
  }, [id]);

  if (error)
    return <div>Ошибка: {error.message}</div>;
  else if (user)
    return <OneUserAndShowPosts user={user} />;
  return <div className="spinner" />;
}

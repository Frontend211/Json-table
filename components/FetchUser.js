import { useState, useEffect } from 'react';
import OneUser from '../components/OneUser';


export default function FetchUser({ id }) {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
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
    return <OneUser user={user} />;
  return <div className="spinner" />;
}

import { useState } from "react";
import WrapperUser from "../components/Wrapper_jsonplaceholder";

export default function OnClickLoad() {
  const 
    [loading, setLoading] = useState(false),
    [error, setError] = useState(null),
    [data, setData] = useState(null),
    
    onClick =  _ => {   //async
      // если у компонента появятся пропсы которые могут изменяться - то тут необходимо будет сбрасывыть ошибку
      setLoading(true);
      fetch(api)                  // try {
        .then(res => res.json())  
        .then(obj=>setData(obj))  // setData (await (await fetch(api)).json())
        .catch(err=>setError(err)) // } catch(err) {  setError(err) }
        .finally(_=>setLoading(false)) //  } finally { ... }
    },
    api = 'https://jsonplaceholder.typicode.com/users';

  if (loading) return <div className="spinner"></div>;
  if (error) return <div className="error">{error.message}</div>;  
  if (data) return <WrapperUser data={data} />;
  return <button onClick={onClick}>Load Data</button>;
}
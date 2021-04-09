import React, {useEffect, useState} from 'react';
import ListRoutes from './components/ListRoutes';
import api from './service/api';

function App() {
  const [routes, setRoutes] = useState([])

  useEffect(() => {
    const handleApi = async () => {
      const res = await api()
      if (res != null) setRoutes(res)
    }
    handleApi()
  }, [])

  return (
    <div className="App" style={{display: "flex", flexDirection: "column"}}>
      <h1 style={css.title}>Desafio 02</h1>
      {(routes === []) ? <span/> : routes.map(route => {
        return <ListRoutes
          data={route}
        />
      })}
    </div>
  );
}

export default App;


const css = {
  title: {
    margin: "1.5rem",
    fontFamily: "Roboto",
    fontSize: "3.2rem",
    alignSelf: "center"
  }
}
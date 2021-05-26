import React, { useEffect, useState } from 'react';
import api from '../../services/api';

const Home = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const handleUser = async () => {
      await api.get('users/ricardodm89')
        .then((response) => {
          console.log(response.data)
          setData(response.data)
        })
    }
    handleUser();
  }, [])

  const troca = () => {
    setData({ ...data, name: 'guga' })
  }


  return (
    <div>
      <p><h3>Nome: {data?.name}</h3></p>
      <p><h3>Localização: {data?.location}</h3></p>
      <p><h3>Login: {data?.login}</h3></p>
      <button onClick={troca}>
        Click
      </button>
    </div>
  )
}

export default Home;
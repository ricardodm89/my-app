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
    if (data.name === 'Ricardo Martins') {
      setData({ ...data, name: 'guga' })
    } else {
      setData({ ...data, name: 'Ricardo Martins' })
    }
  }


  return (
    <div>
      <h3><p>Nome: {data?.name}</p></h3>
      <h3><p>Localização: {data?.location}</p></h3>
      <h3><p>Login: {data?.login}</p></h3>
      <button onClick={troca}>
        Click
      </button>
    </div>
  )
}

export default Home;
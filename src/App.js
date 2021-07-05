import React, { useEffect, useState } from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import ListadoNoticias from './components/ListadoNoticias';

const App = () => {
  //definir la categoria y noticias
  const [categoria, guardarCategoria] = useState('');
  const [noticias, setNoticias] = useState([]);
  // 
  useEffect(() => {
    const consultarApi = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=mx&category=${categoria}&apiKey=9634f5b79d9848eab8ec8cd1d6e4b4b0`;

      const respuesta = await fetch(url)

      const noticias = await respuesta.json();
      setNoticias(noticias.articles)
    }
    consultarApi();
  }, [categoria]);

  return (
    <>
      <Header titulo="Buscador de Noticias" />
      <div className="container-white">
        <Formulario guardarCategoria={guardarCategoria} />

        <ListadoNoticias noticias={noticias} />

      </div>
    </>
  )
}


export default App


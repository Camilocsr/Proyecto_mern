import React,{useState,useEffect} from "react";
import Loading from "./Loading";
import axios from 'axios';// dependencia que sirve para hacer peticiones a urls.

const baseUrl = `http://localhost:9999/v1`

async function getProducts(){
  try {
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'GET'
    })

    return response
  } catch (error) {
    console.log(error)
  }
}

const ListProducts = ()=>{
  const [isLoading,setIsLoading] = useState(true)
  const [products,setProducts] = useState([])

  useEffect(()=>{
    async function loadProducts(){
      const response = await getProducts()
      console.log(response)
      return response
    }

    loadProducts()
  })
  
  return (
    isLoading
    ? <Loading/>
    : `Mostrar Productos.`
  )
}

export default ListProducts;
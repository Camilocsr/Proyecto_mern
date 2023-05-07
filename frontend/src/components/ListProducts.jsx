import React,{useState,useEffect} from "react";
import Loading from "./Loading";
import getProducts from "../services";


const ListProducts = ()=>{
  const [isLoading,setIsLoading] = useState(true)
  const [products,setProducts] = useState([])

  useEffect(()=>{
    async function loadProducts(){
      const response = await getProducts()
      console.log(response)
    
      if (response.status === 200) {
        setProducts(response.data.products)
      } else {
        console.log(`care verga algo esta fallando...`)
      }
      setIsLoading(false)
    }

    loadProducts()

  },[])

  if (isLoading) {
    return <Loading/>
  }

  if (!products.length) {
    return `No tenes ni mirda mano`
  }
  
  return (
    `Mostrar Productos.`
  )
}

export default ListProducts;
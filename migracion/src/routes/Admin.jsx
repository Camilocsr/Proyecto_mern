import React from "react";
import { useState,useEffect } from "react";
import Foter from "../components/Foter";
import NavBar from '../components/navBar';
import ListProducts from "../components/ListProducts";
import Header from "../components/Header";
import Loading from "../components/Loading";
import getProducts from "../services";
import Error404 from "../components/Error404";

const Admin = ()=>{
  const [isLoading,setIsLoading] = useState(true)
  const [products,setProducts] = useState([])

  async function loadProducts(){
    const response = await getProducts()
  
    if (response.status === 200) {
      setProducts(response.data.products)
    }

    setIsLoading(false)
  }

  useEffect(()=>{


    loadProducts()

  },[])
  return (
    <>
    <NavBar/>
      <Header title="Productos." />

      {
        isLoading && <Loading/>
      }

      {
        !products.length
        ? <Error404/>
        : <ListProducts products={products}/>
      }
    <Foter/>
    </>
  )
}

export default Admin;
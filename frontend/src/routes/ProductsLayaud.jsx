import React from "react";
import Header from "../components/Header";
import AddButton from "../components/AddButton";
import ListProducts from "../components/ListProducts";
import NavBar from "../components/navBar";
const ProductLayout = ()=> {
    return (
    <>
        <NavBar/>
        <Header title="Productos."/>
        <AddButton/>
        <ListProducts/>
    </>
    )
}

export default ProductLayout;
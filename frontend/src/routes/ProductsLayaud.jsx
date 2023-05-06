import React,{useState} from "react";
import Header from "../components/Header";
import AddButton from "../components/AddButton";
import Loading from "../components/Loading";
const ProductLayout = ()=> {
    const [isLoading,setIsLoading] = useState(true)
    return (
    <>
        <Header title="Productos."/>
        <AddButton/>

        {
            isLoading
            ? <Loading/>
            : `Mostrar Productos.`
        }
    </>
    )
}

export default ProductLayout;
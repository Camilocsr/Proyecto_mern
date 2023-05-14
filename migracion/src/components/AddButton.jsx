import React from "react";
import { Container,Section,Button } from "react-bulma-components";

const AddButton = ({onClick})=>{
    return (
        <Section>
            <Container className="cont-add">
                <Button className="btn-add" onClick={onClick}>Agregar Producto</Button>
            </Container>
        </Section>
    )
}

export default AddButton;
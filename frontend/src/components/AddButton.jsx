import React from "react";
import { Container,Section,Button } from "react-bulma-components";

const AddButton = ()=>{
    return (
        <Section>
            <Container className="cont-add">
                <Button className="btn-add">Agregar Producto</Button>
            </Container>
        </Section>
    )
}

export default AddButton;
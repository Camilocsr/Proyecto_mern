import React from "react";
import { Container,Section,Button } from "react-bulma-components";

const AddButtonAdmins = ({onClick})=>{
    return (
        <Section>
            <Container className="cont-add">
                <Button className="btn-add" onClick={onClick}>Agregar Admins.</Button>
            </Container>
        </Section>
    )
}

export default AddButtonAdmins;
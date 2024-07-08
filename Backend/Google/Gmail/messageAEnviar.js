const mensajeAEnviar = (nombreCliente, numeroContacto, Email, Direccion, Descriptcion, NumerodeProductos, ListaDeproductos) => {
    const listaProductos = ListaDeproductos.map(producto => {
        return `
- Tipo: ${producto.tipo}
- Cantidad: ${producto.cantidad}
- Talla: ${producto.talla}
- Género: ${producto.Genero}
- Valor Unitario: ${producto.ValorUnitario}
- Suma de la Cantidad: ${producto.SumaDeLaCantidad}
        `;
    });

    const Message = `
        Hola,

Se ha agregado un nuevo producto para entrega:
- Cliente: ${nombreCliente}
- Contacto: ${numeroContacto}, ${Email}
- Dirección: ${Direccion}
- Descripción: ${Descriptcion}
- Número de productos: ${NumerodeProductos}
- Detalles de productos:
${listaProductos.join('\n')}
    `;

    return Message;
}

module.exports = mensajeAEnviar;
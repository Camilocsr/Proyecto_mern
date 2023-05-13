import axios from 'axios';// dependencia que sirve para hacer peticiones a urls.
const baseUrl = process.env.REACT_APP_BASE_URL || 'http://localhost:9999/v1';

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

export async function saveProducts(productData){
  try {
    console.log(productData)
    const formData = new FormData()

    formData.append('name', productData.name)
    formData.append('unitaryPrice', productData.priceUnitary)
    formData.append('size', productData.size)
    formData.append('description', productData.description)
    formData.append('image', productData.image)
    const response = await axios({
      url: `${baseUrl}/products`,
      method: 'POST',
      data: formData
    })

    // return response
  } catch (error) {
    console.log(error)
  }
}

export default getProducts;
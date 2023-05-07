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

export default getProducts;
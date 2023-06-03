import axios from 'axios';

const baseUrl = import.meta.env.VITE_REACT_APP_BASE_URL || 'http://localhost:9999/v1';

async function getAdmins() {
  try {
    const response = await axios({
      url: `${baseUrl}/Admins`,
      method: 'GET'
    });

    return response;
  } catch (error) {
    console.log(error);
  }
}


async function saveAdmins(productData) {
  try {
    console.log(productData);
    const response = await axios.post(`${baseUrl}/Admins`, productData);
    // return response;
  } catch (error) {
    console.log(error);
  }
}

export { getAdmins, saveAdmins };
import * as tokenService from './tokenService'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api`


async function getAllClients() {
  try {
    const res = await fetch(`${BASE_URL}/customers`, {
      method: 'GET',
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json()
  } catch (err) {
    throw new Error(err)
  }
}

async function getCustomerDetails(customerId){
  try {
    const res = await fetch(`${BASE_URL}/customers/${customerId}`, {
      method: 'GET',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`},
    })
    return await res.json()
  }catch(error){
    console.log(error.json)
  }
}

async function createNewCustomer(formData){
  console.log('I got to here')
  try {
    const res = await fetch(`${BASE_URL}/customers/create`, {
      method: 'POST',
      headers: {'Authorization': `Bearer ${tokenService.getToken()}`,
      "Content-Type": "application/json",},
      body: JSON.stringify(formData),
    })
    return await res.json()
  } catch (error) {
    console.log(error)
  }
}

export {
  getAllClients,
  getCustomerDetails,
  createNewCustomer
}

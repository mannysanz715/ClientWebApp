import { useState } from "react";
import * as customerService from '../../services/clientsService.js'
import { useNavigate } from "react-router-dom";

function NewCustomerForm(){
  const navigate = useNavigate()
  const [formData, setFormData] = useState({name: '', address: '', phoneNumber: '', permitNumber: '', dateOfBirth: '', instructor: '', certificate: ''})
  
  async function submitFrom(){
    let customer = await customerService.createNewCustomer(formData)
    console.log(customer)
    navigate('/')
  }

  function updateForm(e){
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }
  return(
    <>
      <form>
        <label>Customer Name</label>
        <input
          name="name"
          onChange={(e)=> updateForm(e)}
          />
        <label>Customer Address</label>
        <input 
          name="address"
          onChange={(e)=> updateForm(e)}
        />
        <label>Phone Number</label>
        <input 
          name="phoneNumber"
          onChange={(e)=> updateForm(e)}
        />
        <label>Permit Number</label>
        <input 
          name="permitNumber"
          onChange={(e)=> updateForm(e)}
        />
        <label>Date of Birth</label>
        <input 
          name="dateOfBirth"
          onChange={(e)=> updateForm(e)}
        />
        <label>Instructor</label>
        <input 
          name="instructor"
          onChange={(e)=> updateForm(e)}  
        />
        <label>Certificate Number</label>
        <input 
          name="certificate"
          onChange={(e)=> updateForm(e)}
        />
      </form>

      <button type="button" onClick={submitFrom}>Create</button>
    </>
  )
}

export default NewCustomerForm;

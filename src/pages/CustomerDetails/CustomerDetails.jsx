import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import * as customerService from '../../services/clientsService.js'
function CustomerDetails(){
  const { id } = useParams()
  const [customer, setCustomer] = useState()

  const navigate = useNavigate()

  useEffect(()=>{
    (async()=>{
      let customer = await customerService.getCustomerDetails(id)
      setCustomer(customer)
    })()
  },[])

  function goBack(){
    navigate('/')
  }


  if(customer){
    return(
      <>
        <h1>Customer Details Page</h1>
        <p>
          {customer.name}
        </p>
        <p>
          {customer.address}
        </p>
        <p>
          {customer.dateOfBirth}
        </p>
        <p>
          {customer.phoneNumber}
        </p>
        <p>
          {customer.permitNumber}
        </p>
        <p>
          {customer.instructor}
        </p>

        <button onClick={goBack}>Go Back</button>
      </>
    )
  }
  else{
    return(
      <p>{id}</p>
    )
    }
}

export default CustomerDetails;

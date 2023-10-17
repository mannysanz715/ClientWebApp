import NewCustomerForm from "../../components/NewCustomerForm/NewCustomerForm";
import { useNavigate } from "react-router-dom";
function CreateNewCustomer(){
  const navigate = useNavigate()
  function goBack(){
    navigate('/')
  }
  return(
    <>
    <h1>Enter Customer Details</h1>
    <button type="button" onClick={goBack}>Go Back</button>
      <NewCustomerForm />
    </>
  )
}

export default CreateNewCustomer;

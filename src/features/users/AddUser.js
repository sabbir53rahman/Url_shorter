import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from 'uuid';
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { addUser } from "./userSlice";
import useUserForms from "../../hooks/useUserForms";

const AddUser = () => {
  const {handleAddUser,values,setValues}=useUserForms()
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const [values, setValues] = useState({
  //   userUrl: '',
  //   shortedUrl: ''
  // });

  // const isUrlExists = useSelector(state =>
  //   state.users.some(user => user.userUrl === values.userUrl)
  // );

  // const generateUrl = (baseURL) => {
  //   // Generate a random ID
  //   const id = Math.random().toString(36).substring(2, 8); // Example of generating a 6-character random alphanumeric ID

  //   // Return the complete URL with the generated ID
  //   return `${baseURL}/${id}`;
  // }

  // const handleAddUser = () => {
  //   if (isUrlExists) {
  //     // If the URL already exists, display an error message
  //     alert('This URL already exists. Please enter a different URL.');
  //     return;
  //   }

  //   const localhostUrl = 'http://localhost:3000';
  //   const shortedUrl = generateUrl(localhostUrl);
  //   dispatch(addUser({
  //     id: uuidv4(),
  //     userUrl: values.userUrl,
  //     shortedUrl: shortedUrl
  //   }));
  //   setValues(prevValues => ({
  //     ...prevValues,
  //     userUrl: '',
  //     shortedUrl: shortedUrl
  //   }));
  //   navigate('/');
  // } 
  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="URL"
        value={values.userUrl}
        onChange={(e) => setValues({ ...values, userUrl: e.target.value })}
        inputProps={{ type: 'text', placeholder: 'Enter URL' }}
      />
      <br />
     
      <p>Shorted URL: {values.shortedUrl}</p>
      
      <Button onClick={handleAddUser}>Submit</Button>
    </div>
  );
}

export default AddUser;

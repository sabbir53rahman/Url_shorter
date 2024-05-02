import React, { useState } from 'react'
import { addUser } from '../features/users/userSlice';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
export default function useUserForms() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [values, setValues] = useState({
      userUrl: '',
      shortedUrl: ''
    });
  
    const isUrlExists = useSelector(state =>
      state.users.some(user => user.userUrl === values.userUrl)
    );
  
    const generateUrl = (baseURL) => {
      // Generate a random ID
      const id = Math.random().toString(36).substring(2, 8); // Example of generating a 6-character random alphanumeric ID
  
      // Return the complete URL with the generated ID
      return `${baseURL}/${id}`;
    }
  
    const handleAddUser = () => {
      if (isUrlExists) {
        // If the URL already exists, display an error message
        alert('This URL already exists. Please enter a different URL.');
        return;
      }
  
      const localhostUrl = 'http://localhost:3000';
      const shortedUrl = generateUrl(localhostUrl);
      dispatch(addUser({
        id: uuidv4(),
        userUrl: values.userUrl,
        shortedUrl: shortedUrl
      }));
      setValues(prevValues => ({
        ...prevValues,
        userUrl: '',
        shortedUrl: shortedUrl
      }));
      navigate('/');
    } 
  return (
    {
        values,
        handleAddUser,
        setValues
    }
  )
}

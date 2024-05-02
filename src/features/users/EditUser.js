import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import Button from "../../components/Button"
import TextField from "../../components/TextField"
import { editUser } from "./userSlice"

const EditUser = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const users = useSelector(store => store.users);
  const navigate = useNavigate();
  const existingUser = users.filter(user => user.id === params.id);
  const { userUrl, shortedUrl } = existingUser[0];
  const [values, setValues] = useState({
    userUrl,
    shortedUrl
  });

  const handleEditUser = () => {
    setValues({ userUrl: '', shortedUrl: '' });
    dispatch(editUser({
      id: params.id,
      userUrl: values.userUrl,
      shortedUrl: values.shortedUrl
    }));
    navigate('/');
  }

  return (
    <div className="mt-10 max-w-xl mx-auto">
      <TextField
        label="Your Url"
        value={values.userUrl}
        onChange={(e) => setValues({ ...values, userUrl: e.target.value })}
        inputProps={{ type: 'url', placeholder: 'Jhon Doe' }}
      />
      <br />
      <TextField
        label="Shorted Url"
        value={values.shortedUrl}
        onChange={(e) => setValues({ ...values, shortedUrl: e.target.value })}
        inputProps={{ type: 'url', placeholder: 'jhondoe@mail.com' }}
      />
      <Button onClick={handleEditUser}>Edit</Button>
    </div>
  )
}

export default EditUser
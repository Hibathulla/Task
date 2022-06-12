import classes from "./Button.module.css"

import { useDispatch } from "react-redux"
import axios from "axios"
import { userActions } from "../../store/store";

const Button = (props) => {

  const dispatch = useDispatch();

const fetchUser = () => {
  dispatch(userActions.loadingApi())
  axios.get(`https://reqres.in/api/users/${props.id}`)
  .then(res => {
    const singleUser = res.data
    dispatch(userActions.displayUser(singleUser))
  })
  .catch(err => {
    console.log(err);
  })
  dispatch(userActions.loadingApi())
}

  return (
    <button onClick={fetchUser} className={classes.btn}>User {props.id}</button>
  )
}

export default Button
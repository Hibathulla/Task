import CardRender from "./components/CardRender/CardRender";
import Buttons from "./components/Buttons/Buttons";

import { useEffect, Fragment, useCallback } from "react";
import axios from "axios"
import {userActions} from "./store/store"
import { useDispatch, useSelector } from "react-redux";

function App() {

  const dispatch = useDispatch();
  const showUser = useSelector(state => state.user.users)

  const getUsers = useCallback(() => {
    axios.get("https://reqres.in/api/users?page=2")
    .then(res => {
      console.log(res.data.data);
      const availableUser = res.data.data
      dispatch(userActions.addUser(availableUser))
    })
    .catch(err => {
      console.log(err);
    })
  }, [dispatch])

  useEffect(() => {
    getUsers()
  }, [getUsers])

  console.log(showUser);

  return (
    <Fragment>
      <CardRender />
      <Buttons />
    </Fragment>
  );
}

export default App;

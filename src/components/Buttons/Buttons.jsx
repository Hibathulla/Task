import classes from "./Buttons.module.css"
import Button from "../../UI/Button/Button"
import { useSelector } from "react-redux"

const Buttons = () => {
  const availUsers = useSelector(state => state.user.users)
  return (
    <div className={classes.buttons}>
       {availUsers[0]?.map(user => (
    <Button key={user.id} id={user.id} />
  ))}
    </div>
  )
}

export default Buttons
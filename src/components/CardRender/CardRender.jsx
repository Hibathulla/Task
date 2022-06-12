import classes from "./CardRender.module.css"

import SingleCard from "../SingleCard/SingleCard";
import { useSelector } from "react-redux";

const Card = () => {

  const singleUser = useSelector(state => state.user.singleUser)
  const loading = useSelector(state => state.user.loading)
  console.log(singleUser);

  const loadingScreen = <div className={classes.loading}></div>


  return <div className={classes.cardBox}>
    {loading && loadingScreen}
    {!singleUser[0] && <h1>Click on any Button to view User Details</h1>}
    {singleUser[0] && <SingleCard 
    firstName={singleUser[0].first_name} 
    email={singleUser[0].email} 
    lastName={singleUser[0].last_name} 
    avatar={singleUser[0].avatar}    
    />}
  </div>

}

export default Card;
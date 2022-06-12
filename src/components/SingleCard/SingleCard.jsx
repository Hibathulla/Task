import classes from './SingleCard.module.css'

const SingleCard = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.avatar}>
                <img className={classes.img} src={props.avatar} alt="/" />
            </div>
            <div className={classes.info}>
                <div className={classes.nameBox}>
                    <h2 className={classes.firstName}>{props.firstName} {props.lastName}</h2>
                </div>
                <p className={classes.email}>{props.email}</p>
            </div>
        </div>
    )
}

export default SingleCard;
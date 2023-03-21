import { Notification } from "../Notification/Notification";


export const Statistics  = ({good,neutral,bad,total,positivePercentage}) => {
    return(
        (!good && !neutral && !bad)
        ?
        (<Notification message="There is no feedback"/>)
        :
        (<div>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive percentage: {positivePercentage}%</p>
        </div>)
    )
}
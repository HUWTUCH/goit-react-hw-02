const FeedbackList = ({stateList, positivePercentage, total}) => {
    return(
        <div>
            <ul>
               <li>Good: {stateList[0]}</li>
                <li>Neutral: {stateList[1]}</li>
                <li>Bad: {stateList[2]}</li>
                <li>Total: {total}</li>
                <li>Positive: {positivePercentage}%</li>
            </ul>
        </div>
    );
}
export default FeedbackList;
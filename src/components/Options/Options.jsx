const OptionsBtn = ({feedbackClick, displayResetBtn, resetBtn}) => {
    return(
      <div>
          <button onClick={()=>{feedbackClick('good')}}>Good</button>
          <button onClick={()=>{feedbackClick('neutral')}}>Neutral</button>
          <button onClick={()=>{feedbackClick('bad')}}>Bad</button>
          {displayResetBtn && <button onClick={resetBtn}>Reset</button>}
      </div>
    );
}
export default OptionsBtn;
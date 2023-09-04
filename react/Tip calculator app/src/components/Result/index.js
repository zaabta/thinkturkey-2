import './Result.css'

export const Result = ({ res, reset }) => {
    const tip = (res.bill * res.selectTip / 100) / res.numberOfPeople
    const total = (res.bill / res.numberOfPeople) + tip
    return(
        <div className="result-container">
          <div className="result-tip">
            <div>
                <p className="text">Tip Amount</p>
                <span className="per">/ person</span>
            </div>
            <span className="amount" id="person-tip-amount">${tip && res.numberOfPeople ? tip.toFixed(2): 0}</span>
          </div>
          <div className="result-tip">
            <div>
                <p className="text">Total</p>
                <span className="per">/ person</span>
            </div>
            <span className="amount" id="total">${total && res.numberOfPeople ? total.toFixed(2): 0}</span>
          </div>
          <button  type="reset" id="reset" onClick={() => reset()} >Reset </button>
        </div>
    )
}
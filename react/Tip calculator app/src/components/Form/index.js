import "./Form.css";
import { useState } from "react";

export const Form = ({ inputs, handelOnChange }) => {
    const [isValidBill, setIsValidBill] = useState(true);
    const [isValidNumberOfPeople, setIsValidNumberOfPeople] = useState(true);
    return(
    <div className="form">
        <div>
            <label>Bill</label>
            {!isValidBill && <label style={{
                    marginLeft: 155,
                    color: "red",
                }}>Can't be Zero</label>}
        </div>
        <input 
            value={inputs.bill}
            type="number" 
            style={{
                border: !isValidBill ? "2px red solid": "none",
            }}
            onChange={(e) => {
                if(e.target.value <= 0) setIsValidBill(false)
                else setIsValidBill(true)
                handelOnChange((prev) =>({
                    ...prev,
                    bill: parseInt(e.target.value),
                }))}
            }/>
        <label>Select Tip</label>
        <div className="btns">
            <input 
                type="button" 
                value={"%5"}  
                onClick={() => handelOnChange((prev) =>({
                ...prev,
                selectTip: 5,
            }))}/>
            <input type="button" value={"%10"} onClick={() => handelOnChange((prev) =>({
                ...prev,
                selectTip: 10,
            }))}/>
            <input type="button" value={"%15"} onClick={() => handelOnChange((prev) =>({
                ...prev,
                selectTip: 15,
            }))}/>
            <input type="button" value={"%25"} onClick={() => handelOnChange((prev) =>({
                ...prev,
                selectTip: 25,
            }))}/>
            <input type="button" value={"%50"} onClick={() => handelOnChange((prev) =>({
                ...prev,
                selectTip: 50,
            }))}/>
            <input type="number" placeholder="Custom" 
                value={inputs.selectTip}
                onChange={(e) => handelOnChange((prev) =>({
                ...prev,
                selectTip: parseInt(e.target.value),
            }))}/>
        </div>
        <div>
            <label>Number of People</label>
            {
                !isValidNumberOfPeople && <label style={{
                    marginLeft: 35,
                    color: "red",
                }}>Can't be Zero</label>
            }
        </div>
        <input 
            value={inputs.numberOfPeople}
            type="number" 
            style={{
                border: !isValidNumberOfPeople ? "2px red solid": "none",
            }}
            onChange={(e) => {
                if(e.target.value <= 0) setIsValidNumberOfPeople(false)
                else setIsValidNumberOfPeople(true)
                handelOnChange((prev) =>({
                    ...prev,
                    numberOfPeople: e.target.value,
                }))
            }}/>
    </div>
    )
}
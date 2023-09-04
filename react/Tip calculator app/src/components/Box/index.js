import "./Box.css";
import { useState } from "react";
import { Form } from "../Form";
import { Result } from "../Result";

export const Box = () =>  {
    const [inputs, setInputs] = useState({
        bill: 0,
        selectTip: 0,
        numberOfPeople: 0,
    });
    return(
    <div className="box">
        <Form inputs={inputs} handelOnChange={setInputs} />
        <Result res={inputs} reset={() => setInputs({
             bill: 0,
             selectTip: 0,
             numberOfPeople: 0,
        })}/>
    </div>
)
}
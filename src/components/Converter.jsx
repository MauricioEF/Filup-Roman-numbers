import React from 'react';
import { useEffect, useState } from 'react';
import convert from '../converter';
import axios from 'axios';
import './Converter.css';
export default function SearchInput() {

    const url = "https://cors-anywhere.herokuapp.com/https://tranquil-spire-80509.herokuapp.com/uploadAnswer";
    const [decimalNumber, setDecimalNumber] = useState("");
    const [romanNumber, setRomanNumber] = useState("");
    const [error, setError] = useState("");
    function handleChange(e) {
        setDecimalNumber(e.target.value);
    }
    function submit() {
        if (/^[0-9]+$/.test(decimalNumber)) {
            setRomanNumber(convert(decimalNumber));
        } else {
            setError("El campo debe contener sólo valores numéricos");
        }
    }
    async function post() {
        try {
            let res = await axios({
                method: 'post',
                url: url,
                data: {
                    input: decimalNumber,
                    output: romanNumber,
                    name: "Mauricio Espinosa Flores"
                }
            })
            console.log(res);
        } catch (err) {
            console.log("Can't post the solution: " + err);
        }
    }
    useEffect(() => {
        if (romanNumber.length > 0) {
            post();
        }
    }, [romanNumber])
    return (<>
        <div className="converter">
            <div className="exercise">
                <input className="searchinput" onChange={handleChange} />
                <input type="submit" onClick={submit}></input>
                <span>El número romano es: {romanNumber}</span>
                <br></br>
                {error.length > 0 ? error : ""}
            </div>
        </div>
    </>)
}
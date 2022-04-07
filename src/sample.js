import React, { useState } from 'react'


function sample() {

    let a = [];
    const [selectType, setSelectType] = useState("");


    const selectUnit = () => {
        if(selectType === "cubicM")
        {
            const b = [
                {
                    label: "cm",
                    value: "cm"
                },
                {
                    label: "mili",
                    value: "mm"
                },
                {
                    label: "meter",
                    value: "meter"
                }
            ]
           
            a.concat(b);

        }
        if(selectType === "cubicF"){
            const b = [
                {
                    label: "feet",
                    value: "feet"
                },
                {
                    label: "yard",
                    value: "yard"
                },
                {
                    label: "inches",
                    value: "inches"
                }
            ]
            a.push(b);
            
        }

    }

    const selectionType = (e) => {
        console.log(e.target.value);
        setSelectType(e.target.value);

    }




    return (
        <div>
            <label>Select volume type</label>
            <select value= {selectType}  onChange = { selectionType }>
                <option value = "cubicM">Cubic Meter</option>
                <option value = "cubicF">Cubic Feet</option>
            </select>
            <br/>



        </div>

    );
}
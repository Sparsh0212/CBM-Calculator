import React, { useState } from 'react'


function sample() {

    const a = [];
    const [selectType, setSelectType] = useState("");


    const selectUnit = () => {
        if(selectType === "cubicM")
        {
            a = [
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

        }
        if(selectType === "cubicF"){
            a = [
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
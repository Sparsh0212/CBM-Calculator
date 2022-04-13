import React, { useState } from 'react'
import './App.css';

function App() {
  /**
  <button style = {styling} onClick={reset}>Reset</button> //keeping a buttons element for ref


      <input type="radio"  id = "cubicM" checked = {radio === "cubicM"} value="cubicM"  onChange = {e => setRadio(e.target.value)} />
      <label for= "cubicM">Cubic Meter </label>
      <br></br>
      <input type="radio" id= "cubicF" checked = {radio === "cubicF"} value="cubicF" onChange = {e => setRadio(e.target.value)} />
      <label for= "cubicF">Cubic Feet </label>
      <br></br>                            // for ref

  **/
  const [length, setLength] = useState(0);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const [cubicVolume, setCubicVolume] = useState(length * width * height);
  const [OptionValue, setOptionValue] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [cubicFeet, setCubicFeet] = useState(0);
  const [volumeWeightAirKG, setVolumeWeightAirKG] = useState(0);
  const [volumeWeightAirLB, setVolumeWeightAirLB] = useState(0);
  const [volumeWeightSeaKG, setVolumeWeightSeaKG] = useState(0);
  const [volumeWeightSeaLB, setVolumeWeightSeaLB] = useState(0);
  const [grossWeightValue, setGrossWeightValue] = useState(0);
  const [weightKG, setWeightKG] = useState(0);
  const [weightLB, setWeightLB] = useState(0);
  const [weightType, setWeightType] = useState("");

  const handleSelectionMeasurement = (e) => {
    reset();
    console.log(e.target.value);
    var a = e.target.value;
    setOptionValue(a);      //have to reset the quantity in order to calculate the weight


  }

  const handleSelectionWeight = (e) => {
    setQuantity(0);
    console.log(e.target.value);
    var a = e.target.value;
    setWeightType(a);



  }

  const reset = () => {
    setHeight(0);
    setLength(0);
    setWidth(0);
    setCubicVolume(0);
    setQuantity(0);
    setOptionValue("");
    setWeightKG(0);
    setWeightLB(0);
    setGrossWeightValue(0);
  }

  const styling = {
    width: '20%',
    height: '10px',
    padding: '12px',
    margin: '8px',
    boxSize: 'border-box',
    align: 'center',
    textAlign: 'center',
    backgroundColor: 'white'
  }



  const labelStyle = {
    fontWeight: 'normal',
    color: 'grey',
    fontFamily: "Times New Roman",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    textAlign: 'right',
    width: '400px',
    lineHeight: '26px',
    marginBottom: '10px'
  }


  const readInputStyle = {
    border: 'none',
    width: '20%',
    padding: '12px',
    margin: '8px',
    height: '20px',
    flex: '0 0 200px',
    marginLeft: '10px'

  }

  const calculate = () => {
    if (OptionValue === "mili") {
      let vol = length * width * height;
      let convertMeter = 0.001 * 0.001 * 0.001;
      let convertFeet = 0.0032 * 0.0032 * 0.0032;
      let convertCentimeter = 0.1 * 0.1 * 0.1;
      setCubicVolume(convertMeter * quantity * vol);
      console.log("Cubic Volume mili " + cubicVolume);
      setCubicFeet(Math.round(convertFeet * quantity * vol));
      setVolumeWeightAirKG((quantity * vol * convertCentimeter) / 6000);
      setVolumeWeightAirLB(((quantity * vol * convertCentimeter) / 6000) * 2.205);
      setVolumeWeightSeaKG((quantity * vol * convertCentimeter) / 1000);
      if (weightType === "kg") {
        setWeightKG(quantity * grossWeightValue);
        setWeightLB(quantity * grossWeightValue * 2.205);

      }
      if (weightType === "lb") {
        setWeightKG(quantity * grossWeightValue * 0.453);
        setWeightLB(quantity * grossWeightValue);

      }

    }
    if (OptionValue === "centi") {
      let vol = length * width * height;
      let convertMeter = 0.01 * 0.01 * 0.01;
      let convertFeet = 0.032 * 0.032 * 0.032;
      setCubicVolume(convertMeter * quantity * vol);
      console.log("Cubic Volume centi " + cubicVolume);
      setCubicFeet(Math.round(convertFeet * quantity * vol));
      setVolumeWeightAirKG((quantity * vol) / 6000);
      setVolumeWeightAirLB(((quantity * vol) / 6000) * 2.205);
      setVolumeWeightSeaKG((quantity * vol) / 1000);
      setVolumeWeightSeaLB(((quantity * vol) / 1000) * 2.205);
      if (weightType === "kg") {
        setWeightKG(quantity * grossWeightValue);
        setWeightLB(quantity * grossWeightValue * 2.205);

      }
      if (weightType === "lb") {
        setWeightKG(quantity * grossWeightValue * 0.453);
        setWeightLB(quantity * grossWeightValue);

      }
    }
    if (OptionValue === "meter") {
      console.log("Option Value selected is " + OptionValue);

      let vol = length * width * height;
      let convertCentimeter = 100 * 100 * 100;
      let convertFeet = 3.281 * 3.281 * 3.281;
      setCubicVolume(quantity * vol);
      console.log("Cubic Volume meter " + cubicVolume);
      setCubicFeet(Math.round(convertFeet * quantity * vol));
      setVolumeWeightAirKG((quantity * vol * convertCentimeter) / 6000);
      setVolumeWeightAirLB(((quantity * vol * convertCentimeter) / 6000) * 2.205);
      setVolumeWeightSeaKG((quantity * vol * convertCentimeter) / 1000);
      setVolumeWeightSeaLB(((quantity * vol * convertCentimeter) / 1000) * 2.205);
      if (weightType === "kg") {
        setWeightKG(quantity * grossWeightValue);
        setWeightLB(quantity * grossWeightValue * 2.205);

      }
      if (weightType === "lb") {
        setWeightKG(quantity * grossWeightValue * 0.453);
        setWeightLB(quantity * grossWeightValue);

      }




    }
    if (OptionValue === "inches") {
      let vol = length * width * height;
      let convertCentimeter = 2.54 * 2.54 * 2.54;
      let convertFeet = 0.08 * 0.08 * 0.08;
      let convertMeter = 0.025 * 0.025 * 0.025;
      setCubicVolume(quantity * vol * convertMeter);
      console.log("Cubic Volume meter " + cubicVolume);
      setCubicFeet(Math.round(convertFeet * quantity * vol));
      setVolumeWeightAirKG((quantity * vol * convertCentimeter) / 6000);
      setVolumeWeightAirLB(((quantity * vol * convertCentimeter) / 6000) * 2.205);
      setVolumeWeightSeaKG((quantity * vol * convertCentimeter) / 1000);
      setVolumeWeightSeaLB(((quantity * vol * convertCentimeter) / 1000) * 2.205);

      if (weightType === "kg") {
        setWeightKG(quantity * grossWeightValue);
        setWeightLB(quantity * grossWeightValue * 2.205);

      }
      if (weightType === "lb") {
        setWeightKG(quantity * grossWeightValue * 0.453);
        setWeightLB(quantity * grossWeightValue);

      }


    }
    if (OptionValue === "feet") {
      let vol = length * width * height;
      let convertCentimeter = 30.48 * 30.48 * 30.48;
      let convertMeter = 0.30 * 0.30 * 0.30;
      setCubicVolume(quantity * vol * convertMeter);
      console.log("Cubic Volume meter " + cubicVolume);
      setCubicFeet(Math.round(quantity * vol));
      setVolumeWeightAirKG((quantity * vol * convertCentimeter) / 6000);
      setVolumeWeightAirLB(((quantity * vol * convertCentimeter) / 6000) * 2.205);
      setVolumeWeightSeaKG((quantity * vol * convertCentimeter) / 1000);
      setVolumeWeightSeaLB(((quantity * vol * convertCentimeter) / 1000) * 2.205);

      if (weightType === "kg") {
        setWeightKG(quantity * grossWeightValue);
        setWeightLB(quantity * grossWeightValue * 2.205);

      }
      if (weightType === "lb") {
        setWeightKG(quantity * grossWeightValue * 0.453);
        setWeightLB(quantity * grossWeightValue);

      }


    }
    if (OptionValue === "yard") {
      let vol = length * width * height;
      let convertCentimeter = 91.44 * 91.44 * 91.44;
      let convertMeter = 0.91 * 0.91 * 0.91;
      let convertFeet = 3 * 3 * 3;
      setCubicVolume(quantity * vol * convertMeter);
      console.log("Cubic Volume meter " + cubicVolume);
      setCubicFeet(Math.round(quantity * vol * convertFeet));
      setVolumeWeightAirKG((quantity * vol * convertCentimeter) / 6000);
      setVolumeWeightAirLB(((quantity * vol * convertCentimeter) / 6000) * 2.205);
      setVolumeWeightSeaKG((quantity * vol * convertCentimeter) / 1000);
      setVolumeWeightSeaLB(((quantity * vol * convertCentimeter) / 1000) * 2.205);
      if (weightType === "kg") {
        setWeightKG(quantity * grossWeightValue);
        setWeightLB(quantity * grossWeightValue * 2.205);

      }
      if (weightType === "lb") {
        setWeightKG(quantity * grossWeightValue * 0.453);
        setWeightLB(quantity * grossWeightValue);

      }

    }

  }



  return (
    <div className="App">

      <h2>CBM Calculator</h2>


      <div className="row">
        <div className="column">
          <label  >Unit of measurement </label>
          <select value={OptionValue} onChange={e => { handleSelectionMeasurement(e); calculate() }} >
            <option value="" disabled>Select value</option>

            <option value="centi">cm</option>
            <option value="mili">mm</option>
            <option value="meter">meter</option>
            <option value="inches">inches</option>
            <option value="feet">feet</option>
            <option value="yard">yard</option>
          </select>

        </div>
        <div className="column">
          <div className="textOnInput">
            <label>Height </label>
            <input type="number" className="form-control" value={height} onChange={e => { setHeight(+e.target.value); calculate() }} onKeyUp={() => calculate()} />

          </div>
        </div>
        <div className="column">
          <div className="textOnInput">
            <label>Length</label>
            <input type="number" className="form-control" value={length} onChange={e => { setLength(+e.target.value); calculate() }} onKeyUp={() => calculate()} />

          </div>
        </div>

      </div>

      <div className="row">
        <div className="column">
          <div className="textOnInput">
            <label >Width</label>
            <input type="number" className="form-control" value={width} onChange={e => { setWidth(+e.target.value); calculate() }} onKeyUp={() => calculate()} />
            <br />
          </div>


        </div>
        <div className="column">
          <div className="textOnInput">
            <label >Gross Weight</label>
            <input type="number" className="form-control" value={grossWeightValue} onChange={e => { setGrossWeightValue(+e.target.value); calculate() }} onKeyUp={() => calculate()} />

          </div>
        </div>
        <div className="column">
          <div className="textOnInput">
            <label>Weight Type</label>
            <select value={weightType} onChange={e => { handleSelectionWeight(e); calculate() }} >
              <option value="" disabled>Select value Weight</option>

              <option value="kg">kg</option>
              <option value="lb">lb</option>

            </select>

          </div>
        </div>
        <div className="column">
          <div className="textOnInput">
            <label>Quantity </label>
            <input type="number" class="form-control" value={quantity} onChange={e => { setQuantity(+e.target.value); calculate() }} onKeyUp={() => calculate()} />

          </div>
        </div>
      </div>
      <fieldset>
        <div className="row">
          <div className="column">
            <label style={labelStyle}>Total Volume (Cubic Meter)  <input type="number" style={readInputStyle} value={cubicVolume} readOnly={true} />
            </label>
            <label style={labelStyle}>Total Weight (kg)  <input type="number" style={readInputStyle} value={weightKG} readOnly={true} />
            </label>
            <label style={labelStyle}> Volume Weight Air (kg) <input type="number" style={readInputStyle} value={volumeWeightAirKG} readOnly={true} />
            </label>
            <label style={labelStyle}> Volume Weight Sea (kg) <input type="number" style={readInputStyle} value={volumeWeightSeaKG} readOnly={true} />
            </label>
          </div>
          <div className="column">
            <label style={labelStyle}>Total Volume (Cubic Feet)  <input type="number" style={readInputStyle} value={cubicFeet} readOnly={true} />
            </label>
            <label style={labelStyle}>Total Weight (lb) <input type="number" style={readInputStyle} value={weightLB} readOnly={true} />
            </label>
            <label style={labelStyle}> Volume Weight Air (lb) <input type="number" style={readInputStyle} value={volumeWeightAirLB} readOnly={true} />
            </label>
            <label style={labelStyle}> Volume Weight Sea (lb) <input type="number" style={readInputStyle} value={volumeWeightSeaLB} readOnly={true} />
            </label>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default App;

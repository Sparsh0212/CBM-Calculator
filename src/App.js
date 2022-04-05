import React, {useState } from 'react'
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
  const [quantity, setQuantity] = useState(1);
  const [cubicFeet, setCubicFeet] = useState(0);
  const [volumeWeightAirKG, setVolumeWeightAirKG] = useState(0);
  const [volumeWeightAirLB, setVolumeWeightAirLB] = useState(0);
  const [volumeWeightSeaKG, setVolumeWeightSeaKG] = useState(0);
  const [volumeWeightSeaLB, setVolumeWeightSeaLB] = useState(0);
 // const [radio, setRadio] = useState("");
  const [grossWeightValue, setGrossWeightValue] = useState(0);
  const [weightKG, setWeightKG] = useState(0);
  const [weightLB, setWeightLB] = useState(0);
 

  const handleSelectionMeasurement = (e) => {
    reset();
    console.log(e.target.value);
    var a = e.target.value;
    setOptionValue(a);
   
  
  }
 
  const reset = () => {
    setHeight(0);
    setLength(0);
    setWidth(0);
    setCubicVolume(0);
    setQuantity(1);
    setOptionValue("");
    setWeightKG(0);
    setWeightLB(0);
    setGrossWeightValue(0);

  }

  const styling = {
    width: '20%',
    padding: '12px' ,
    margin: '8px' ,
    boxSize: 'border-box',
    align: 'center'
  }

  const calculate = () => {
    if (OptionValue === "mili") {
      let vol = length * width * height;
      let convertMeter = 0.001 * 0.001 * 0.001;
      let convertFeet = 0.0032*0.0032*0.0032;
      let convertCentimeter = 0.1*0.1*0.1;
      setCubicVolume(convertMeter * quantity * vol); 
      console.log("Cubic Volume mili "+cubicVolume);
      setCubicFeet(Math.round(convertFeet * quantity* vol));
      setVolumeWeightAirKG((quantity*vol*convertCentimeter)/6000);
      setVolumeWeightAirLB(((quantity*vol*convertCentimeter)/6000) *2.205);
      setVolumeWeightSeaKG((quantity * vol*convertCentimeter)/1000);
      setWeightKG(quantity*grossWeightValue);
      setWeightLB(quantity*grossWeightValue*2.205);

    }
    if (OptionValue === "centi") {
      let vol = length * width * height;
      let convertMeter = 0.01 * 0.01 * 0.01;
      let convertFeet = 0.032 * 0.032 * 0.032;
      setCubicVolume(convertMeter * quantity* vol);
      console.log("Cubic Volume centi "+cubicVolume);
      setCubicFeet(Math.round(convertFeet * quantity* vol ));
      setVolumeWeightAirKG((quantity*vol)/6000);
      setVolumeWeightAirLB(((quantity*vol)/6000) * 2.205);
      setVolumeWeightSeaKG((quantity* vol)/1000);
      setVolumeWeightSeaLB(((quantity* vol)/1000)*2.205);
      setWeightKG(quantity*grossWeightValue);
      setWeightLB(quantity*grossWeightValue*2.205);

    }
    if (OptionValue === "meter") {
      let vol = length * width * height;
      let convertCentimeter = 100*100*100;
      let convertFeet = 3.281*3.281*3.281;
      setCubicVolume(quantity * vol);
      console.log("Cubic Volume meter "+cubicVolume);
      setCubicFeet(Math.round(convertFeet*quantity * vol));
      setVolumeWeightAirKG((quantity*vol*convertCentimeter)/6000);
      setVolumeWeightAirLB(((quantity*vol*convertCentimeter)/6000) *2.205);
      setVolumeWeightSeaKG((quantity * vol*convertCentimeter)/1000);
      setVolumeWeightSeaLB(((quantity * vol*convertCentimeter)/1000) *2.205);
      setWeightKG(quantity*grossWeightValue);
      setWeightLB(quantity*grossWeightValue*2.205);
     

    }
    if (OptionValue === "inches") {
      let vol = length * width * height;
      let convertCentimeter = 2.54*2.54*2.54;
      let convertFeet = 0.08*0.08*0.08;
      let convertMeter = 0.025*0.025*0.025;
      setCubicVolume(quantity * vol *convertMeter);
      console.log("Cubic Volume meter "+cubicVolume);
      setCubicFeet(Math.round(convertFeet*quantity * vol));
      setVolumeWeightAirKG((quantity*vol*convertCentimeter)/6000);
      setVolumeWeightAirLB(((quantity*vol*convertCentimeter)/6000) *2.205);
      setVolumeWeightSeaKG((quantity * vol*convertCentimeter)/1000);
      setVolumeWeightSeaLB(((quantity * vol*convertCentimeter)/1000) *2.205);
      setWeightKG(quantity*grossWeightValue);
      setWeightLB(quantity*grossWeightValue*2.205);
      

    }
    if (OptionValue === "feet") {
      let vol = length * width * height;
      let convertCentimeter = 30.48*30.48*30.48;      
      let convertMeter = 0.30*0.30*0.30;
      setCubicVolume(quantity * vol *convertMeter);
      console.log("Cubic Volume meter "+cubicVolume);
      setCubicFeet(Math.round(quantity * vol));
      setVolumeWeightAirKG((quantity*vol*convertCentimeter)/6000);
      setVolumeWeightAirLB(((quantity*vol*convertCentimeter)/6000) *2.205);
      setVolumeWeightSeaKG((quantity * vol*convertCentimeter)/1000);
      setVolumeWeightSeaLB(((quantity * vol*convertCentimeter)/1000) *2.205);
      setWeightKG(quantity*grossWeightValue);
      setWeightLB(quantity*grossWeightValue*2.205);
      

    }
    if (OptionValue === "yard") {
      let vol = length * width * height;
      let convertCentimeter = 91.44*91.44*91.44;      
      let convertMeter = 0.91*0.91*0.91;
      let convertFeet = 3*3*3;
      setCubicVolume(quantity * vol *convertMeter);
      console.log("Cubic Volume meter "+cubicVolume);
      setCubicFeet(Math.round(quantity * vol*convertFeet));
      setVolumeWeightAirKG((quantity*vol*convertCentimeter)/6000);
      setVolumeWeightAirLB(((quantity*vol*convertCentimeter)/6000) *2.205);
      setVolumeWeightSeaKG((quantity * vol*convertCentimeter)/1000);
      setVolumeWeightSeaLB(((quantity * vol*convertCentimeter)/1000) *2.205);
      setWeightKG(quantity*grossWeightValue);
      setWeightLB(quantity*grossWeightValue*2.205);

    }

  }

  


  return (
    <div className="App">
    <label><h2>CBM Calculator</h2></label>
    

    <label>Unit of measurement</label>
    <select style= {styling} value = {OptionValue} onChange= { e => {handleSelectionMeasurement(e); calculate()} } >
    <option value = "" disabled>Select value</option>
     <option value = "centi">cm</option>
     <option value = "mili">mm</option>
     <option value = "meter">meter</option>
     <option value = "inches">inches</option>
     <option value = "feet">feet</option>
     <option value = "yard">yard</option>
    </select>

      <br/>
      <label>Length </label>
      <input type="number" style = {styling} value={length} onChange={e => setLength(+e.target.value)} onKeyUp = { () => calculate()}/>
      <br/>
      <label>Width </label>
      <input type="number" style = {styling} value={width} onChange={e => setWidth(+e.target.value)} onKeyUp = { () => calculate()}/>
      <br/>
      <label>Height </label>
      <input type="number" style = {styling} value={height} onChange={e => setHeight(+e.target.value)} onKeyUp = { () => calculate()}/>
      <br/>
      <label>Gross Weight (kg)</label>
      <input type="number" style = {styling} value={grossWeightValue} onChange={e => setGrossWeightValue(+e.target.value)} onKeyUp = { () => calculate()}/>
      <br/>
     

      <label>Quantity</label>
      <input type="number" style = {styling} value={quantity} onChange={e => setQuantity(+e.target.value)} onKeyUp = { () => calculate()}/>
      <br/>

      <label> Weight (kg) </label>
      <input type="number" style = {styling} value={weightKG} readOnly = {true}/>
      <br/>

      <label> Weight (lb) </label>
      <input type="number" style = {styling} value={weightLB} readOnly = {true}/>
      <br/>


      <label> Volume (Cubic Meter) </label>
      <input type="number" style = {styling} value={cubicVolume} readOnly={true} />
      <br/>
      
      <label> Volume (Cubic Feet) </label>
      <input type="number" style = {styling} value={cubicFeet} readOnly={true} />
      <br/>
      
      <label> Volume Weight Air (kg) </label>
      <input type="number" style = {styling} value={volumeWeightAirKG} readOnly={true} />
      <br>
      </br>
      <label> Volume Weight Air (lb) </label>
      <input type="number" style = {styling} value={volumeWeightAirLB} readOnly={true} />
      <br/>
     
      <label> Volume Weight Sea (kg) </label>
      <input type="number" style = {styling} value={volumeWeightSeaKG} readOnly={true} />
      <br/>
      <label> Volume Weight Sea (lb) </label>
      <input type="number" style = {styling} value={volumeWeightSeaLB} readOnly={true} />
      <br/>
    

    </div>
  );
}

export default App;

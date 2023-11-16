import React, { useState } from "react";
import Grid from "./components/Grid";
import { ColorPicker } from 'primereact/colorpicker';
import { Button } from 'primereact/button';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import "./App.css"

export default function App() {
  const [row, setRow] = useState(10);
  const [col, setCol] = useState(10);
  const [color1, setColor1] = useState('6466f1');
  const [color2, setColor2] = useState('ff5722');
  const [color3, setColor3] = useState('00bcd4');
  const [color4, setColor4] = useState('8bc34a');
  const [color5, setColor5] = useState('e91e63');
  const [color6, setColor6] = useState('795548');
  const [selectedColor, setSelectedColor] = useState(color1);

  const pickerStyle = { width: "50px", height: "50px", border: "none" };

  const handleClick = (color) => {
    setSelectedColor(color);
  };

  const addRow = () => {
    setRow(row + 1);
  };

  const addCol = () => {
    setCol(col + 1);
  };

  return (
    <>
      <Grid rows={row} columns={col} selectedColor={selectedColor} />
      <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: `repeat(6, 60px)`, marginTop: "3vh" }}>
        <div className="card" style={{ maxWidth: "50px" }} onClick={() => handleClick(color1)}>
          <ColorPicker value={color1} onChange={(e) => setColor1(e.value)} inputStyle={pickerStyle} />
        </div>
        <div className="card" style={{ maxWidth: "50px" }} onClick={() => handleClick(color2)}>
          <ColorPicker value={color2} onChange={(e) => setColor2(e.value)} inputStyle={pickerStyle} />
        </div>
        <div className="card" style={{ maxWidth: "50px" }} onClick={() => handleClick(color3)}>
          <ColorPicker value={color3} onChange={(e) => setColor3(e.value)} inputStyle={pickerStyle} />
        </div>
        <div className="card" style={{ maxWidth: "50px" }} onClick={() => handleClick(color4)}>
          <ColorPicker value={color4} onChange={(e) => setColor4(e.value)} inputStyle={pickerStyle} />
        </div>
        <div className="card" style={{ maxWidth: "50px" }} onClick={() => handleClick(color5)}>
          <ColorPicker value={color5} onChange={(e) => setColor5(e.value)} inputStyle={pickerStyle} />
        </div>
        <div className="card" style={{ maxWidth: "50px" }} onClick={() => handleClick(color6)}>
          <ColorPicker value={color6} onChange={(e) => setColor6(e.value)} inputStyle={pickerStyle} />
        </div>
        {/* <button className="add-button" onClick={addRow}>
          Add Row
        </button>
        <button className="add-button" onClick={addCol}>
          Add Column
        </button> */}
        <div className="flex flex-row gap-3">
          <Button label="Add Column" icon="pi pi-plus" onClick={addCol} className="addButton" />
          <Button label="Add Row" icon="pi pi-plus" onClick={addRow} className="addButton" />
        </div>

      </div>
    </>
  );
}

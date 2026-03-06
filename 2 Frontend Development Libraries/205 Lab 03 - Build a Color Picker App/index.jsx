const { useState } = React;

export const ColorPicker = () => {
  const [colVal, setColVal] = useState("#ffffff");

  const handleColorChange = () => {
    const colorInput = document.getElementById("color-input");
    setColVal(colorInput.value);
  }

  return (
    <div id="color-picker-container" style={{'background-color': colVal}}>
      <p class="stylep">Choose a color:</p>
      <input id="color-input" type="color" value={colVal} onChange={handleColorChange} />
    </div>
  );
};
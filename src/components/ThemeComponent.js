import React, {useState, useEffect} from 'react'

function ThemeComponent() {
  const [selectedColor, setSelectedColor] = useState("#2c2c2c");
  const rootElement = document.querySelector('html')

  useEffect(() => {
    rootElement.style.setProperty('--primary-color', selectedColor);
  }, [selectedColor, rootElement])

  return (
    <>
      <div className="theme-box"
        style={{ background: selectedColor }}
      >
        <input 
          style={{opacity: 0}}
          id="theme-box-input" 
          value={selectedColor} 
          type="color" 
          onChange={e => setSelectedColor(e.target.value)}
        />
      </div>

      {/* <div 
        htmlFor="themeColor"
        className="theme-box"
        style={{
          background: selectedColor
        }}
      >
      <input id="themeColor" style={{opacity: .4, zIndex: '-100'}} type="color" value={selectedColor} onChange={e => setSelectedColor(e.target.value)}/>
      </div> */}
    </>
  )
}

export default ThemeComponent

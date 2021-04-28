import React, {useState, useEffect} from 'react'

const ThemeComponent = () => {
  const [primaryColor, setPrimaryColor] = useState(localStorage.getItem('--primary-color') || "#2c2c2c")
  const [secondaryColor, setSecondaryColor] = useState(localStorage.getItem('--secondary-color') || "#ffffff")
  const rootElement = document.querySelector('html')

  useEffect(() => {
    rootElement.style.setProperty('--primary-color', primaryColor)
    rootElement.style.setProperty('--secondary-color', secondaryColor)
    localStorage.setItem('--primary-color', primaryColor)
    localStorage.setItem('--secondary-color', secondaryColor)
  }, [primaryColor, secondaryColor ,  rootElement])

  const toggleThemeHandler = () => {
    if(primaryColor === "#ffffff") {
      setPrimaryColor("#2c2c2c")
      setSecondaryColor("#ffffff")
      return
    }
    setPrimaryColor("#ffffff")
    setSecondaryColor("#2c2c2c")
  }

  return (
    <>
      <div className="theme-box" title="change theme"
        style={{ background: secondaryColor }}
      >
        <span 
          onClick={toggleThemeHandler}
          id="theme-box-input"
        >
          { primaryColor === "#ffffff" ? '🌜' : '🌞' }
        </span>
      </div>
    </>
  )
}

export default ThemeComponent

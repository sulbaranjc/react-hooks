import { useState } from 'react'
import Button from 'react-bootstrap/Button';

import Container from '../../node_modules/react-bootstrap/Container';

export const Header = () => {
  const [darkMode, setDarkMode] = useState(false)
  
    const handleClick = () => {
      if (darkMode){
        document.body.style.backgroundColor = "#050122"; 
      } else{
        document.body.style.backgroundColor = "white";
      }
      setDarkMode(!darkMode)
    }
  return (
    <Container className="p-3 dark">
      <Button className="primary" type="button" onClick={handleClick} >{darkMode ? "Dark Mode" : "Light Mode"}</Button>
    </Container>
  )
}
import {useState, useEffect } from 'react' 
const baseURL = "https://rickandmortyapi.com/api/character/"; 
export const Characters = () => { 
  const [employees, setEmployees] = useState([]) 
  const getEmployees = async () => { 
    const response = await fetch(baseURL); 
    const data = await response.json(); 
    setEmployees(data.results); 
  }; 
  useEffect(() => { 
    getEmployees(); 
  }, []); 
  return ( 
    <div className="Employees"> 
      {employees.map(employee =>( 
        <h2>{employee.name}</h2> 
      ))} 
    </div> 
  ) 
}
import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'
function App() {

  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [isInvalidPrinciple, setisInvalidPrinciple] = useState(false)
  const [isInvalidRate, setisInvalidRate] = useState(false)
  const [isInvalidYear, setisInvalidYear] = useState(false)
  const [interest,setInterest] = useState(false)
  
  
  console.log(interest);
  console.log(amount);
  console.log(rate);
  console.log(year);


  const validateInput = (tag) => {
    const { name, value } = tag

    console.log(name, value);

    if (value==""){
      if(name=='principle'){
        setAmount("")
      }
      else if(name == 'rates'){
        setRate("")
      }
      else{
        setYear("")
      }
    }
    else{

      if (!!value.match(/^[0-9]*.?[0-9]+$/)) {
        if (name == "principle") {
          setAmount(value)
          setisInvalidPrinciple(false)
        }
        else if (name == "rates") {
          setRate(value)
          setisInvalidRate(false)
  
        }
        else {
          setYear(value)
          setisInvalidYear(false)
        }
      }
      else {
        if (name == "principle") {
          setisInvalidPrinciple(true)
        }
        else if (name == "rates") {
          setisInvalidRate(true)
        }
        else {
          setisInvalidYear(true)
        }
      }
  
    }

    // console.log(!!value.match(/^[0-9]*.?[0-9]+$/));



  }

  const handleCalculate = (e) => {
    e.preventDefault()
    console.log("Button Clicked");

    if(amount && rate && year){
      setInterest (amount*rate*year/100)
    }
    else{
      alert('enter field completely')
    }

  }
    const handleReset=()=>{
      setAmount(0)
      setRate(0)
      setInterest(0)
      setYear(0)
      setisInvalidPrinciple(false)
      setisInvalidRate(false)
      setisInvalidYear(false)
    }
  


  return (
    <>
      <div className='container' style={{ backgroundColor: "beige", height: "610px", width: "450px" }}>
        <h2 style={{ fontFamily: "" }}>SIMPLE INTEREST CALCULATOR</h2>
        <p style={{ fontFamily: "fantasy" }}>Calculate your Simple Interest Easily</p>

        <div className='ms-2' style={{ height: "170px", width: "400px", backgroundColor: "rgb(225, 225, 12)" }}>
          <h1 style={{ fontSize: "80px" }}>₹<span>{interest}</span></h1>
          <p>Total Column Interest</p>

        </div>

        <form >
          <TextField value={amount} onChange={(e) => validateInput(e.target)} name='principle' className='mt-2 w-100' id="principle_amount" label="Principle Amount" variant="outlined" />
          {isInvalidPrinciple &&
            <div className='text-danger fw-bold mb-2'>Invalid Principle Amount</div>

          }
          <TextField value={rate} onChange={(e) => validateInput(e.target)} name='rates' className='mt-2 w-100' id="interest" label="Rate" variant="outlined" />
          {isInvalidRate &&
            <div className='text-danger fw-bold mb-2'>Invalid Interest Rate</div>

          }
          <TextField value={year} onChange={(e) => validateInput(e.target)} name='years' className='mt-2 w-100' id="year" label="Year" variant="outlined" />
          {isInvalidYear &&
            <div className='text-danger fw-bold mb-2'>Invalid Year</div>

          }
          <Stack className='mt-3' direction="row" spacing={2}>
            <Button disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} onClick={(e) => handleCalculate(e)} type='submit' className='w-50 bg-dark p-3' variant="contained">Calculate</Button>


            <Button onClick={handleReset} className='w-50 p-3' variant="outlined">Reset</Button>
          </Stack>
        </form>
      </div>
    </>
  )
}

export default App
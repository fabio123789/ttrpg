import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { evaluate } from 'mathjs'
import { Button, TextField, Typography } from '@mui/material'
import Dropdown from '../dropdown/Dropdown'

const CalculatorWithOptions = ({ options, label, onChange }) => {
  const [input, setInput] = useState('')

  const isValidCharacter = (char) => {
    return /[0-9()\-+/*.,]/.test(char)
  }

  const validateInput = (event) => {
    setInput(event.target.value)
  }

  const calculateResult = (event) => {
    event.preventDefault()

    try {
      let value = input
      for (const option of options) {
        if (value.includes(option.name)) {
          value = value.replaceAll(option.name, option.value)
        }
      }
      value = value.split('').filter(isValidCharacter).join('')
      if (/[(\-+/*.,]/.test(value.charAt(value.length - 1))) {
        value = value.slice(0, -1)
      }
      const calculation = Math.floor(evaluate(value))
      onChange(calculation)
    } catch (error) {
      onChange('Invalid Expression')
    }
  }

  const handleOptionValue = (value) => {
    const selectedValue = value
    const selectedOption = options.find(option => option.value.toString() === selectedValue)
    if (selectedOption) {
      setInput(input + selectedOption.name) // Append selected option value to input
    }
  }

  return (
        <div>
            <Typography variant="h6" gutterBottom>
                {label}
            </Typography>
            <TextField
                label="Stats Calculator"
                type="text"
                id="calculatorInput"
                value={input}
                onChange={validateInput}
                fullWidth
            />
            {options.length > 0 && <Dropdown label="Combat Stats Options" onClick={(value) => handleOptionValue(value)} options={options} ></Dropdown>}
            <Button
                onClick={calculateResult}
                variant="contained"
                color="primary">
                Calculate
            </Button>
        </div>
  )
}

CalculatorWithOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired
    })
  ).isRequired,
  label: PropTypes.string,
  onChange: PropTypes.func
}

export default CalculatorWithOptions

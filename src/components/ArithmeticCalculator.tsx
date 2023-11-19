import React, { Component } from 'react';

class ArithmeticCalculator extends Component<{}, { firstNumber: string; secondNumber: string; operator: string; result: string|number; errorMessage: string;}> {
  constructor(props: any) {
    super(props);

    this.state = {
      firstNumber: '',
      secondNumber: '',
      operator: '+',
      result: '',
      errorMessage: '',
    };
  }

  handleFirstNumberChange = (e: any) => {
    this.setState({ firstNumber: e.target.value });
  }

  handleSecondNumberChange = (e: any) => {
    this.setState({ secondNumber: e.target.value });
  }

  handleOperatorChange = (e: any) => {
    this.setState({ operator: e.target.value });
  }

  handleCalculate = () => {
    const { firstNumber, secondNumber, operator } = this.state;

    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);

    if (isNaN(num1) || isNaN(num2)) {
      this.setState({
        result: '',
        errorMessage: 'Please enter valid numbers.',
      });
    } else {
      let result;
      switch (operator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          if (num2 === 0) {
            this.setState({
              result: '',
              errorMessage: 'Division by zero is not allowed.',
            });
            return;
          }
          result = num1 / num2;
          break;
        default:
          result = '';
      }
      this.setState({ result, errorMessage: '' });
    }
  }

  render() {
    const { firstNumber, secondNumber, operator, result, errorMessage } = this.state;

    return (
      <div>
        <input
          id="first_number"
          type="text"
          placeholder="First Number"
          value={firstNumber}
          onChange={this.handleFirstNumberChange}
        />
        <select id="arithmeticOperationSelector" value={operator} onChange={this.handleOperatorChange}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="text"
          id="second_number"
          placeholder="Second Number"
          value={secondNumber}
          onChange={this.handleSecondNumberChange}
        />
        <button onClick={this.handleCalculate} id="equal_sign">=</button>
        <input
          id="result"
          type="text"
          placeholder="Result"
          value={errorMessage || result}
          readOnly
          style={errorMessage ? { color: 'red' } : undefined}
        />
      </div>
    );
  }
}

export { ArithmeticCalculator };

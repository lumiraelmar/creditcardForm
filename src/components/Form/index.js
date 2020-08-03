import React from 'react';
import '../Form/style.scss'

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '#### #### #### ####',
      name: 'Juguito de Manzana',
      month: 'MM',
      year: 'YY',
      cvv: '',
      clase: 'flipCardInner'
    }
  }

  handleChange(e) { 
    const { name, value } = e.target
    const { number } = this.state

      if (name === 'number') {
        let original = '################'
        const arr = original.split('');
        let index = arr.indexOf('#');
        arr.splice(index, value.length, value);
        let newNumber = arr.join("").match(/.{1,4}/g)
    .join(" ");
        
        this.setState({
          [name]: value,
          number: newNumber
        }, () => {
          const { number, name, month, year, cvv} = this.state
          this.props.handleCallback(number, name, month, year, cvv)
        });
        
      } else {
        this.setState({
          [name]: value,
          number: number
        }, () => {
          const { number, name, month, year, cvv} = this.state
          this.props.handleCallback(number, name, month, year, cvv)
        });
      }
    }

  handleFocus() {
    this.setState({
      clase: 'flipCardInner flipActivate'
    }, () => {
      const { clase } = this.state
      this.props.handleFocusCallback(clase)
    })
  }
  handleBlur() {
    this.setState({
      clase: 'flipCardInner'
    }, () => {
        const { clase } = this.state
        this.props.handleBlurCallback(clase)
      })
  }

  maxLengthCheck(object) {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength)
       }
  }


  render () {
    return (
      <div className='formWrapper'>
        <div className='inputWrapper'>
          <label htmlFor='cardNumber' className='inputLabel'>Card Number</label>
          <input name='number' type='number' className='input cardNumber' id='cardNumber' onChange={(e) => this.handleChange(e)} maxLength='16' onInput={this.maxLengthCheck}></input>
        </div>
        <div className='inputWrapper'>
          <label htmlFor='cardName'  className='inputLabel'>Card Name</label>
          <input name='name' type='text' className='input cardName' id='cardName' onChange={(e) => this.handleChange(e)}></input>
        </div>
        <div className='expirationCVVWrapper'> 
          <div className='expirationWrapper'>
            <div className='inputWrapper'>
              <label htmlFor='month'  className='inputLabel'>Month</label>
              <select name='month' className='input month' id='month' onChange={(e) => this.handleChange(e)}>
              <option value='01'>01</option>
              <option value='02'>02</option>
              <option value='03'>03</option>
              <option value='04'>04</option>
              <option value='05'>05</option>
              <option value='06'>06</option>
              <option value='07'>07</option>
              <option value='08'>08</option>
              <option value='09'>09</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            </div>
            <div className='inputWrapper'>
              <label htmlFor='year'  className='inputLabel'>Year</label>
              <select name='year' className='input year' id='year' onChange={(e) => this.handleChange(e)}>
              <option value='20'>2020</option>
              <option value='21'>2021</option>
              <option value='22'>2022</option>
              <option value='23'>2023</option>
              <option value='24'>2024</option>
              <option value='25'>2025</option>
              <option value='26'>2026</option>
              <option value='27'>2027</option>
            </select>
            </div>
          </div>
          <div className='inputWrapper'>
            <label htmlFor='cardCVV'  className='inputLabel'>CVV</label>
            <input name='cvv' type='number' className='input cardCVV' id='cardCVV' onChange={(e) => this.handleChange(e)} onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()} maxLength='3' onInput={this.maxLengthCheck}></input>
          </div>
        </div>
        <button className='button'>Submit</button>
      </div>
    )
  }
}

export default Form
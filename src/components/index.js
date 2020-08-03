class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: '',
      name: '',
      month: '',
      year: '',
      cvv: '',
      clase: 'flipCardInner'
    }
  }

  handleChange(e) { 
    const { name, value } = e.target
    this.setState({
      [name]: value
    });
  }

  handleFocus() {
    this.setState({
      clase: 'flipCardInner flipActivate'
    })
  }

  handleBlur() {
    this.setState({
      clase: 'flipCardInner'
    })
  }

  render() {
    const { number, name, month, year, cvv, clase } = this.state
    return (
      <div className='wrapper'>
        <div className='cardWrapper'>
        <div className={clase}>
          <div className='cardFrontWrapper'>
              <div className='chip'></div>
              <div className='cardLogo'></div>
              <div className='cardNumberAutocomplete'>{number}</div>
              <div className='cardNameWrapper'>
                <p className='cardName'>Card Holder</p>
                <p className='nameAutocomplete'>{name}</p>
              </div>
              <div className='expireWrapper'>
                <p className='expire'>Expires</p>
                <span className='expireAutocomplete'>{month}/</span>
                <span className='expireAutocomplete'>{year}</span>
              </div>
            </div>
          <div className='cardBackWrapper'>
              <div className='magneticBand'></div>
              <p className='cvv'>CVV</p>
              <div className='cvvAutocomplete'>{cvv}</div>
              <div className='cardLogo'></div>
          </div>
        </div>
      </div>
      <div className='formWrapper'>
        <div className='inputWrapper'>
          <label htmlFor='cardNumber' className='inputLabel'>Card Number</label>
          <input name='number' type='number' className='input cardNumber' id='cardNumber' onChange={(e) => this.handleChange(e)}></input>
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
              <option value='2020'>2020</option>
              <option value='2021'>2021</option>
              <option value='2022'>2022</option>
              <option value='2023'>2023</option>
              <option value='2024'>2024</option>
              <option value='2025'>2025</option>
              <option value='2026'>2026</option>
              <option value='2027'>2027</option>
            </select>
            </div>
          </div>
          <div className='inputWrapper'>
            <label htmlFor='cardCVV'  className='inputLabel'>CVV</label>
            <input name='cvv' type='number' className='input cardCVV' id='cardCVV' onChange={(e) => this.handleChange(e)} onFocus={() => this.handleFocus()} onBlur={() => this.handleBlur()}></input>
          </div>
        </div>
        <button className='button'>Submit</button>
      </div>
      </div>
    )
  }
}

export default App;

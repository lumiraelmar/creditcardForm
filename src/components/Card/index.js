import React from 'react';
import '../Card/style.scss'

class Card extends React.Component {

  render () {
    const { number, name, month, year, cvv, clase } = this.props
    return (
      <div className='cardWrapper'>
        <div className={clase}>
          <div className='cardFrontWrapper'>
              <div className='chip'></div>
              <div className='cardLogo'></div>
              <div className='cardNumberWrapper'>
                <div className='cardNumber'></div>
                <p className='cardNumberAutocomplete'>{number}</p>
              </div>
              <div className='bottomHalfFrontCard'> 
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
            </div>
          <div className='cardBackWrapper'>
              <div className='magneticBand'></div>
              <p className='cvv'>CVV</p>
              <div className='cvvAutocomplete'>{cvv}</div>
              <div className='cardLogo'></div>
          </div>
        </div>
      </div>
    )
  }
}

export default Card
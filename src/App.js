import React from 'react';
import Form from './components/Form'
import Card from './components/Card'
import './App.scss';

class App extends React.Component {
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

  handleCallback(number, name, month, year, cvv) { 
    this.setState({
      number: number,
      name: name,
      month: month,
      year: year,
      cvv: cvv
    });
  }

  handleFocusCallback(clase) { 
    this.setState({
      clase: clase
    });
  }

  handleBlurCallback(clase) { 
    this.setState({
      clase: clase
    });
  }

  render() {
    const { number, name, month, year, cvv, clase } = this.state
    return (
      <div className='wrapper'>
        <div className='cardFormWrapper'>
          <Card 
          number={number}
          name={name}
          month={month}
          year={year}
          cvv={cvv}
          clase={clase}
          />
          <Form handleCallback={(number, name, month, year, cvv, clase) => this.handleCallback(number, name, month, year, cvv, clase)} handleFocusCallback={(clase) => this.handleFocusCallback(clase)} handleBlurCallback={(clase) => this.handleBlurCallback(clase)}/>
        </div>
      </div>
    )
  }
}

export default App;

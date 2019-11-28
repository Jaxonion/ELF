import React from 'react';

class Main extends React.Component {
    render() {
      return(
        <div className="App">
          <header>
            <h1>ELF Computing | Laptops</h1>
          </header>
          <main>
            <form className="main__form">
              <h2>Customize your laptop</h2>
              {this.props.features}
            </form>
            <section className="main__summary">
              <h2>Your cart</h2>
              {this.props.summary}
              <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                  {this.props.USCurrencyFormat.format(this.props.total)}
                </div>
              </div>
            </section>
          </main>
        </div>
      )
    }
  }

export default Main;
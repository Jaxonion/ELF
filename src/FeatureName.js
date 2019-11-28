import React from 'react';

class FeatureName extends React.Component {
    render() {
      return(
        <fieldset className="feature" key={this.props.featureHash}>
            <legend className="feature__name">
              <h3>{this.props.feature}</h3>
            </legend>
            {this.props.options}
          </fieldset>
      )
    }
  }

export default FeatureName;
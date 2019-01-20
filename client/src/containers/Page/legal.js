import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import IntlMessages from '../../components/utility/intlMessages';
import FiveZeroZeroStyleWrapper from './500.style';

export default class extends Component {
  render() {
    return (
      <FiveZeroZeroStyleWrapper className="iso500Page">
        <div className="iso500Content">
          <h1>
            <IntlMessages id="legal.title" />
          </h1>
          <h3>
            <IntlMessages id="legal.subTitle" />
          </h3>
          <p>
            <IntlMessages id="legal.description" />
          </p>
          <button type="button">
            <Link to="/guest">
              <IntlMessages id="legal.backButton" />
            </Link>
          </button>
        </div>
      </FiveZeroZeroStyleWrapper>
    );
  }
}

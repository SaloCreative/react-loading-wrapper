'use strict';

import React from 'react';
import { render } from 'react-dom';

import LoadingWrapper from '../src/components/loadingWrapper';

class Demo extends React.Component {

  render() {
    return (
      <LoadingWrapper />
    );
  }

}

render(<Demo />, document.getElementById('demo'));

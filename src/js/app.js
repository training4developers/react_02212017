import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';

const colors = [ 'red', 'white', 'blue', 'green', 'saffron' ];

ReactDOM.render(<ColorTool colorList={colors} />, document.querySelector('main'));


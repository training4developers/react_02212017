import React from 'react';
import ReactDOM from 'react-dom';

import { ColorTool } from './components/color-tool';
import { FormControlsDemo } from './components/form-controls-demo';

const colors = [ 'red', 'white', 'blue', 'green', 'saffron' ];

import '../css/styles.scss';

//ReactDOM.render(<ColorTool colorList={colors} />, document.querySelector('main'));

ReactDOM.render(<FormControlsDemo />, document.querySelector('main'));


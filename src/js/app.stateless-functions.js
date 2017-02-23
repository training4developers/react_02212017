import React from 'react';
import ReactDOM from 'react-dom';

// class Demo extends React.Component {

//     render() {
//         return <h1>Hello World!</h1>;
//     }

// }

const Demo = props => { 

    const clickMe = () => { console.log('I was clicked!' ); };

    return <h1 onClick={clickMe}>{props.message}</h1>;
};

Demo.propTypes = {
    message: React.PropTypes.string,
};

Demo.defaultProps = {
    message: 'Hola Mundo!'
};

ReactDOM.render(<Demo message="Bonjour le monde!" />, document.querySelector('main'));

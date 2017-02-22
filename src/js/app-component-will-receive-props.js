import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            message: props.message
        };

        console.log('constructor executed');
    }

    componentWillReceiveProps(newProps) {
        console.log('new props:', newProps);

        this.setState({
            message: newProps.message
        });
    }

    render() {

        console.log('render executed');

        return <div>
            <div>Demo</div>
            <div>Message Props: {this.props.message}</div>
            <div>Message State: {this.state.message}</div>
        </div>;
    }

}


ReactDOM.render(<Demo message="first" />, document.querySelector('main'));

setTimeout(() => {
    console.log('timeout executed');
    ReactDOM.render(<Demo message="second" />, document.querySelector('main'));
}, 2000);

console.log('waiting...');


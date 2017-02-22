import React from 'react';
import ReactDOM from 'react-dom';

class ChildDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'red'
        };
        console.log('child demo constructor');
    }

    componentWillMount() {
        console.log('child demo component will mount');
    }

    componentDidMount() {
        console.log('child demo component did mount');
    }

    componentWillReceiveProps() {
        // console.log('child set state has been called');
        // this.setState({ message: 'blue' }, () => {
        //     console.log('child state has been changed');
        // });
    }

    componentWillUpdate() {
        console.log('child will update');
    }

    componentDidUpdate() {
        console.log('child did update');
    }
    

    render() {
        console.log('child demo render');
        return <div>Child Demo</div>;
    }
}


class ParentDemo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: 'hello world!'
        };
        console.log('parent demo constructor');
    }

    componentWillMount() {
        console.log('parent demo component will mount');
    }

    componentDidMount() {
        console.log('parent demo component did mount');
        console.log('section content: ', document.querySelector('section').innerHTML);        
        setTimeout(() => {
            this.doIt();
        }, 2000);  

        document.querySelector('#not-react').addEventListener('click', () => {
            this.doIt();
        });
    }

    doIt = () => {
        console.log('calling set state 1');
        this.setState({ message: 'bonjour le monde!' }, () => {
            console.log('state has been changed 1');
        });
        console.log('calling set state 2');
        this.setState({ message: 'hola mundo!' }, () => {
            console.log('state has been changed 2');
        });
    }

    componentWillUpdate() {
        console.log('parent will update');

    }

    componentDidUpdate() {
        console.log('parent did update');
        console.log('section content: ', document.querySelector('section').innerHTML);
    }

    componentWillUnmount() {
        console.log('component will unmount');
    }

    render() {
        console.log('parent demo render');
        return <div>
            <div>Parent Demo</div>
            <ChildDemo />
            <section>{this.state.message}</section>
            <button onClick={this.doIt}>Click Me!</button>
            <button id="not-react">Click Me!</button>
        </div>;
    }
}

ReactDOM.render(<ParentDemo />, document.querySelector('main'));

// setTimeout(() => {
//     console.log('timeout 1 expired');
//     ReactDOM.render(<ParentDemo />, document.querySelector('main'));
// }, 2000);

// setTimeout(() => {
//     console.log('timeout 2 expired');
//     ReactDOM.render(<ParentDemo />, document.querySelector('main'));
// }, 4000);

console.log('waiting...');


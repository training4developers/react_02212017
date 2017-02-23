import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.PureComponent {

    // shouldComponentUpdate(nextProps, nextState) {        
    //     console.log('should component update');
        

    // }

    render() {

        console.log('render executed');

        return <div>
            <div>Demo</div>
            <div>Message Props: {this.props.message}</div>
            <ul>
                {this.props.colors.map(color => <li>{color}</li>)}
            </ul>
            <div>Address: {this.props.address.street}, {this.props.address.city}, {this.props.address.state} {this.props.address.zipCode}</div>
        </div>;
    }

}

let colors = ['red','blue'];
let address = {
    street: '123 Oak Lane',
    city: 'Mountain View',
    state: 'CA',
    zipCode: '94043',
};


ReactDOM.render(<Demo message="first" colors={colors} address={address} />, document.querySelector('main'));

setTimeout(() => {
    //colors = colors.concat('green');
    //Object.freeze(address);
    //address = Object.assign({}, address, { city: 'Palo Alto'});
    address.city = 'Palo Alto';
    console.log('timeout executed');
    ReactDOM.render(<Demo message="first" colors={colors} address={address} />, document.querySelector('main'));
}, 2000);

setTimeout(() => {
    //colors = colors.concat('orange');
    console.log('timeout executed');
    ReactDOM.render(<Demo message="first" colors={colors} address={address} />, document.querySelector('main'));
}, 4000);

console.log('waiting...');


import React from 'react';
import ReactDOM from 'react-dom';

class Car {

}

class ColorTool extends React.Component {

    static propTypes = {
        colorList: React.PropTypes.array.isRequired,
        carList: React.PropTypes.arrayOf(React.PropTypes.shape({
            make: React.PropTypes.string,
            model: React.PropTypes.string,
            year: React.PropTypes.number,
            color: React.PropTypes.string,
            price: React.PropTypes.number
        })),
        carList: React.PropTypes.arrayOf(React.PropTypes.instanceOf(Car))
    };

    render() {

        // very very very bad code, never ever do this
        // this.props.someNewProp = 'test';
        // this.props.colorList = [];
        // this.props.colorList.push('orange');
        // this.props.person.address.city.district.ward.section.whatever = 'China Town';

        // outputs true
        //console.log(Object.isFrozen(this.props));

        return <div>
            <h1>Color Tool</h1>
            <ul>
                {this.props.colorList.map(color =>
                    <li>{color}</li>)}
            </ul>
        </div>;
    }

}

const colors = [ 'red', 'white', 'blue', 'green', 'saffron' ];

ReactDOM.render(<ColorTool />, document.querySelector('main'));


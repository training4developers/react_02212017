import React from 'react';
import ReactDOM from 'react-dom';

class ColorTool extends React.Component {

    static propTypes = {
        colorList: React.PropTypes.array.isRequired,
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


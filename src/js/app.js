import React from 'react';
import ReactDOM from 'react-dom';

class ColorTool extends React.Component {

    render() {

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

ReactDOM.render(<ColorTool colorList={colors} />, document.querySelector('main'));


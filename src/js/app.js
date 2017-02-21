import React from 'react';
import ReactDOM from 'react-dom';

class ColorTool extends React.Component {

    render() {
        //return React.createElement('h1', null, 'Color Tool');
        return <div>
            <h1>Color Tool</h1>
            <ul>
                <li>red</li>
                <li>blue</li>
            </ul>
        </div>;
    }

}

ReactDOM.render(<ColorTool />, document.querySelector('main'));


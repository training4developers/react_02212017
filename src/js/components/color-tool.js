import React from 'react';

export class ColorTool extends React.Component {

    static propTypes = {
        colorList: React.PropTypes.array.isRequired,
    };

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
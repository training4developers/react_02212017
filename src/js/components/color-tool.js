import React from 'react';

import { ToolHeader } from './tool-header';
import { ItemList } from './item-list';
import { ColorForm } from './color-form';

export class ColorTool extends React.Component {

    static propTypes = {
        colorList: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            colorList: this.props.colorList.concat(),
        };
    }

    addColor = (newColor) => {
        this.setState({
            colorList: this.state.colorList.concat(newColor),
        });
    }

    render() {

        return <div>
            <ToolHeader header="Color Tool" />
            <ItemList items={this.state.colorList} />
            <ColorForm newColorAdded={this.addColor} />
        </div>;
    }

}
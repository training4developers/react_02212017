import React from 'react';

export class ColorForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };
    }

    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onClick = () => {
        this.props.newColorAdded(this.state.newColor);

        this.setState({
            newColor: ''
        });
    }

    render() {
        return <form>
            <div>
                <label>New Color:</label>
                <input type="text" name="newColor"
                    value={this.state.newColor}
                    onChange={this.onChange} />
            </div>
            <button type="button" onClick={this.onClick}>Add Color</button>
        </form>;
    }

}
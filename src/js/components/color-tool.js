import React from 'react';

export class ColorTool extends React.Component {

    static propTypes = {
        colorList: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            newColor: '',
            colorList: this.props.colorList.concat(),
        };

        this.onChange = this.onChange.bind(this);
        this.addColor = this.addColor.bind(this);
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

    }

    addColor() {

        this.setState({
            colorList: this.state.colorList.concat(this.state.newColor),
            newColor :'',
        });

    }

    render() {

        return <div>
            <h1>Color Tool</h1>
            <ul>
                {this.state.colorList.map(color =>
                    <li>{color}</li>)}
            </ul>
            <form>
                <div>
                    <label>New Color:</label>
                    <input type="text" name="newColor"
                        value={this.state.newColor}
                        onChange={this.onChange} />
                </div>
                <button type="button" onClick={this.addColor}>Add Color</button>
            </form>
        </div>;
    }

}
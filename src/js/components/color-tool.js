import React from 'react';

export class ColorTool extends React.Component {

    static propTypes = {
        colorList: React.PropTypes.array.isRequired,
    };

    constructor(props) {
        super(props);

        this.state = {
            newColor: ''
        };

        this.onChange = this.onChange.bind(this);
    }

    onChange(e) {

        this.setState({
            [e.target.name]: e.target.value
        });

    }

    render() {

        return <div>
            <h1>Color Tool</h1>
            <ul>
                {this.props.colorList.map(color =>
                    <li>{color}</li>)}
            </ul>
            <form>
                <div>
                    <label>New Color:</label>
                    <input type="text" name="newColor"
                        value={this.state.newColor}
                        onChange={this.onChange} />
                </div>
            </form>
        </div>;
    }

}
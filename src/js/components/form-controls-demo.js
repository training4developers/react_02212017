import React from 'react';

export class FormControlsDemo extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            inputText: '',
            inputNumber: 0,
            inputDate: '2017-02-22',
            inputColor: '#d3a155',
            inputRange: 750,
            inputCheckbox: false,
            inputRadio: 'Option 1',
            textarea: '',
            selectDropDown: '',
            selectListBox: '',
            selectMultiListBox: [],
        };
    }

    onChange = e => {

        let value = undefined;

        switch(e.target.type) {
            case 'number':
                value = Number(e.target.value);
                break;
            case 'range':
                value = Number(e.target.value);
                break;
            case 'checkbox':
                value = e.target.checked;
                break;
            default:
                if (e.target.multiple) {
                    value = Array.from(e.target.options)
                        .filter(option => option.selected)
                        .map(option => option.value);
                } else {
                    value = e.target.value;
                }
                break;
        }


        this.setState({
            [e.target.name]: value
        });

    };

    render() {

        const middleStyle = { verticalAlign: 'middle' };

        return <form>
            <div>Demo Form</div>
            <div>
                <label>Input Text:</label>
                <input type="text" name="inputText" value={this.state.inputText} onChange={this.onChange} />
                <br />Value: {this.state.inputText}, Type: {typeof this.state.inputText}, Length: {this.state.inputText.length}
            </div>
            <div>
                <label>Input Number:</label>
                <input type="number" name="inputNumber" value={this.state.inputNumber} onChange={this.onChange} />
                <br />Value: {this.state.inputNumber}, Type: {typeof this.state.inputNumber}
            </div>
            <div>
                <label>Input Date:</label>
                <input type="date" name="inputDate" value={this.state.inputDate} onChange={this.onChange} />
                <br />Value: {this.state.inputDate}, Type: {typeof this.state.inputDate}
            </div>
            <div>
                <label>Input Color:</label>
                <input type="color" name="inputColor" value={this.state.inputColor} onChange={this.onChange} />
                <br />Value: {this.state.inputColor}, Type: {typeof this.state.inputColor}
            </div>
            <div>
                <label>Input Range:</label>
                <input type="range" name="inputRange" max="1000" min="500" value={this.state.inputRange} onChange={this.onChange} />
                <br />Value: {this.state.inputRange}, Type: {typeof this.state.inputRange}
            </div>
            <div>
                <label>Input Checkbox:</label>
                <input type="checkbox" name="inputCheckbox" checked={this.state.inputCheckbox} onChange={this.onChange} />
                <br />Value: {this.state.inputCheckbox ? 'true' : 'false'}, Type: {typeof this.state.inputCheckbox}
            </div>
            <fieldset>
                <legend>Input Radio</legend>
                <div>
                    <label>Input Radio Option 1:</label>
                    <input type="radio" name="inputRadio" value="Option 1"
                        checked={this.state.inputRadio === 'Option 1'} onChange={this.onChange} />
                </div>
                <div>
                    <label>Input Radio Option 2:</label>
                    <input type="radio" name="inputRadio" value="Option 2"
                        checked={this.state.inputRadio === 'Option 2'} onChange={this.onChange} />
                </div>
                <div>
                    <label>Input Radio Option 3:</label>
                    <input type="radio" name="inputRadio" value="Option 3"
                        checked={this.state.inputRadio === 'Option 3'} onChange={this.onChange} />
                </div>
                Value: {this.state.inputRadio}, Type: {typeof this.state.inputRadio}                    
            </fieldset>
            <div>
                <label>Textarea:</label>
                <textarea className="middle" name="textarea" value={this.state.textarea} onChange={this.onChange} />
                <br />Value: {this.state.textarea}, Type: {typeof this.state.textarea}
            </div>
            <div>
                <label>Select DropDown:</label>
                <select name="selectDropDown" onChange={this.onChange} value={this.state.selectDropDown}>
                    <option value="">Select One...</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <br />Value: {this.state.selectDropDown}, Type: {typeof this.state.selectDropDown}
            </div>            
            <div>
                <label>Select ListBox:</label>
                <select style={middleStyle} name="selectListBox" onChange={this.onChange} value={this.state.selectListBox} size="5">
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <br />Value: {this.state.selectListBox}, Type: {typeof this.state.selectListBox}
            </div>            
            <div>
                <label>Select MultiListBox:</label>
                <select name="selectMultiListBox" onChange={this.onChange}
                    value={this.state.selectMultiListBox} size="5" multiple>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <br />Value: {this.state.selectMultiListBox.join(', ')}, Type: {typeof this.state.selectMultiListBox}
            </div>            
        </form>;

    }

}
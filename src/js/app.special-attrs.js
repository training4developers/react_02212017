import React from 'react';
import ReactDOM from 'react-dom';

class Demo extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            message: props.message
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    componentDidMount() {
        this.messageInput.focus();
    }

    render() {
        return <div>
            <span dangerouslySetInnerHTML={({ __html: this.props.message })}></span>
            <input type="text" name="message"
                value={this.state.message} onChange={this.onChange}
                ref={ (input) => { this.messageInput = input; }  }/>
        </div>;
    }

}

ReactDOM.render(<Demo message="<b>Hello World!</b>" />, document.querySelector('main'));

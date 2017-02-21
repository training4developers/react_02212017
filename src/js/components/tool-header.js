import React from 'react';

export class ToolHeader extends React.Component {

    static propTypes = {
        header: React.PropTypes.string
    };

    render() {
        return <header>
            <h1>{this.props.header}</h1>
        </header>;
    }

}
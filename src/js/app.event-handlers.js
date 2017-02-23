import React from 'react';
import ReactDOM from 'react-dom';


class ItemList extends React.Component {

    itemClick = e => {
        //console.log('I was clicked!', e.target.innerText);
        console.log('I was clicked!', e.target.getAttribute('data-item'));
        console.log('target:', e.target.tagName);
        console.log('current target:', e.currentTarget.tagName);
    }

    render() {

        return <ul>
            {this.props.items.map(item => <li><button data-item={item} onClick={this.itemClick}>{item}</button></li>)}
        </ul>;

    }


}

const colors = [ 'red', 'blue', 'yellow' ];

ReactDOM.render(<ItemList items={colors} />, document.querySelector('main'));
import React from 'react';
import ReactDOM from 'react-dom';

let itemRowCounter = 0;

class ItemRow extends React.PureComponent {

    constructor(props) {
        super(props);
        this.itemRowIndex = itemRowCounter++;
        console.log('called constructor: ', this.itemRowIndex);
    }

    render() {
        return <li>{this.itemRowIndex} - {this.props.item}</li>;
    }

    componentDidMount() {
        console.log('called component did mount:', this.itemRowIndex);
    }

    componentDidUpdate() {
        console.log('called component did update:', this.itemRowIndex);
    }

    componentWillUnmount() {
        console.log('called component will unmount:', this.itemRowIndex);
    }
}

class ItemList extends React.Component {

    render() {

        return <div>
            <ul>
                {this.props.items.map((item, index) => <ItemRow key={index} item={item} />)}
            </ul>
            <ul>
                {this.props.items.map(item => <ItemRow item={item} />)}
            </ul>
        </div>;

    }

}

let colors = ['red','blue','white'];
console.log(colors);

ReactDOM.render(<ItemList items={colors} />, document.querySelector('main'));

setTimeout(() => {
    colors.splice(1, 1);
    console.log(colors);
    ReactDOM.render(<ItemList items={colors} />, document.querySelector('main'));
}, 2000);

console.log('waiting...');

/*['red','blue','white']

<ul>
    <li>red</li>
    <li>white</li>
    
</ul>*/

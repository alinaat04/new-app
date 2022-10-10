import React from 'react';
import ToDoItem from './ToDoItem';


class ToDoList extends React.Component {
    constructor(props) {
        super(props);
        const list = ['go to party', 'meet friends', 'have a walk'].map((text, index) => ({ id: index, text }))
        this.state = {
            list
        }
    }

    // onClick(event) {
    //     const { list } = this.state;
    //     const { dataset: { id } } = event.target;
    //     const filtered = list.filter(elem => elem.id !== Number(id));
    //     this.setState({
    //         list: filtered
    //     })
    // }
    clickButton(idForDel){
        const { list } = this.state;
        const filterdArr = list.filter(elem => elem.id !== idForDel);
        this.setState({
            list: filterdArr
        })
    }
    renderLi() {
        const { list } = this.state;
        return list.map((obj) => <ToDoItem key={obj.id} text={obj.text} id={obj.id} changeState={(el)=>this.clickButton(el)}/>)
    }

    render() {
        return (
            <ul>
                {this.renderLi()}
            </ul>
        )
    }
}


export default ToDoList


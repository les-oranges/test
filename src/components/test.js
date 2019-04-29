import React, { Component, Fragment } from 'react'

import Todoitem from './todoitem.js'

export default class Test extends Component {

    constructor(props) {
        super(props)
        this.state = {
            list: ['safdasdf','sadfasdfasdfasdfasdf'],
            inputValue: ''
        }
        // 代码优化
        this.inputValue = this.inputValue.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }
    inputValue(e) {
        this.setState({
            inputValue: e.target.value
        })
    }

    clickMe() {
        if(this.state.inputValue){
            this.setState({
                list: [...this.state.list, this.state.inputValue],
                inputValue: ''
            })
        }
        
        
    }

    removeItem (index) {
        const list = [...this.state.list]
        list.splice(index,1)
        this.setState({
            list: list
        })
    }

    handleDelete (index) {
        this.removeItem(index)
    }

    getTodoItems () {
        return (
            /*return <li key={index} onClick={this.removeItem.bind(this, index)}>{item}</li>;*/
            /* 父组件通过属性的方式向子组件传递参数，子组件通过props接收父组件传递过来的参数 */
            /*  */
            this.state.list.map((item, index) => {
                return (
                    <Todoitem 
                        handleDelete={this.handleDelete} 
                        content={item} 
                        key={index} 
                        index={index} 
                    />
                );
            })
        )
    }

    render() {
        console.log('1111111 ', this.props)
        return (
            <Fragment>
				{2141414}
                <input value={this.state.inputValue} onChange={this.inputValue}/>
				<button style={{background:'orange'}} onClick={this.clickMe.bind(this)}>add</button>
				<ul>
                    {
                        this.getTodoItems()
                    }
				</ul>
			</Fragment>
        )
    }
}
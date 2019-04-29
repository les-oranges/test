import React, { Component } from 'react'

export default class todoitem extends Component {

	constructor(props) {
	  super(props);
	
	  this.state = {};

	  this.deleteFun = this.deleteFun.bind(this)
	}


	// 子组件如果想和父组件通信，子组件要调用父组件传递过来的方法

	deleteFun () {
		this.props.handleDelete(this.props.index)
	}


	render () {

		const {content, index} = this.props

		return (
			<div className='todoitem' onClick={this.deleteFun}>
				这是引入的组件  -- >  {content}  -- >  {index}
			</div>
		)
	}
}

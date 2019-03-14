import React, {Component} from 'react'
import {Container, Header, Divider} from 'semantic-ui-react'

export default class Timer extends Component{
	constructor(props){
		super(props)
		this.timer = null
		this.state = {'date': new Date()}
	}

	componentDidMount() {
		this.timer = setInterval(this.update, 1000)
	}

	componentWillUnmount = () => {
		this.timer = null
	}
	update = () =>{
		this.setState({
			date: new Date()
		})
	}

	render(){
		return(
			<Container>
				<Header textAlign='center' size='huge' content='Time' />	
				<Divider />
				<h1>{this.state.date.toString()}</h1>
			</Container>
		)
	}
}

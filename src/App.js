import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Overview from './components/Overview';



class CoreApp extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			allTasks: ['verite','plage','vie'],
			input:'',
		}
		this.addTasks = this.addTasks.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}

	addTasks(e){
		if(this.state.input!=''){
			e.preventDefault()
			let value = this.state.allTasks
			value.push(this.state.input)
			this.setState({
				allTasks: value
			})
		}
	}

	handleChange(e){
		this.setState({
			input:e.target.value
		})
	}

	render(){
		return(
			<div className='app'>
				<h1>My-tasks</h1>
				<form className='search-bar'>
					<input type='text' id='task' name='input' placeholder='Enter the task here...' value={this.state.input} onChange={this.handleChange} required></input>
					<input type='submit' id='submit-btn' name='submit' value="Submit" onClick={this.addTasks}></input>
				</form>
				<div>

					<Overview data={this.state.allTasks}></Overview>
				</div>
				{/* {JSON.stringify(this.state)} */}
			</div>
		)
	}
}

function App(){
	return(
		<div>
			<CoreApp/>
		</div>
	)
}

export default App
import React from 'react';



class Overview extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			tasks : []
			
		}

		this.delete = this.delete.bind(this)
	}
	
	delete(e){
		e.target.parentElement.remove()
	}

	render(){
		let a = 0
		return(
			this.props.data.map((item)=>{
				a ++;
				console.log(item);
				return <div className='block'>
							<p className='text' hidden={false}><span className='number' >{a}-</span>{item}</p>
							<button className='delete' onClick={this.delete}>Delete</button>
						</div>
			})
		)
	}
}




export default Overview
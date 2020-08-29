import React,{Component} from 'react'
import './Comp1.css';
class Comp1 extends Component{
 	
    clickHandler() {
    alert('Button Clicked')	
   }
 
	render(){
		 return (
		  <>
		   <h1 className = 'h2'>Pradeep Tintali</h1>
		   <button onClick = {this.clickHandler}>Click</button>
          </>
        )
}
}

export default Comp1
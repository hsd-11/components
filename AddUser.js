import {Component} from 'react'
export default class AddUser extends Component{
    addUser=(e)=>{
        e.preventDefault()
        //alert('user is added')
        const data=e.target.elements.uname.value
        this.props.au(data)
    }
    render(){
        return(
           <span>
                <form onSubmit={this.addUser}>
                <input type='text' name='uname'/>
                <button>Add</button>
                </form>
            </span>
        )
    }
}

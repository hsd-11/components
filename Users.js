import {Component} from 'react'
import User from './User'
export default class Users extends Component{
    render(){
        return(
            <div>
            {this.props.userdata.map((ud)=><User user={ud}/>)}
            </div>
        )
    }
}

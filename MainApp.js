import {Component} from 'react'
import Header from './Header'
import Footer from './Footer'
import Users from './Users'
import AddUser from './AddUser'
export default class MainApp extends Component{
    state={
        headerData:'Welcome to Header',
    footerData:'Welcome to Footer',
    userData:[]
    }
    addUser = (data) => {
        this.setState((prevState) => {
            return {
                userdata: prevState.userData.push(data)
            }
        })
        console.log(this.state.userData)
    }
render(){
    return(
        <div>
        <Header hdata={this.state.headerData}/>
        <p>MainApp</p>
        <AddUser au={this.addUser} />
        <Users userdata={this.state.userData}/>
        <Footer fdata={this.state.footerData}/>
        </div>
    )
}
}

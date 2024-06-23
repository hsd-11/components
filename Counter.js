import {Component} from 'react'
export default class Counter extends Component{
    state = {
                counter: 0
            }
            inc = () => {
                //alert('Incremented')
                this.setState((prevState) => {
                    return {
                        counter: prevState.counter + 1
                    }
                })
            }
    dec=()=>{
        //alert('Decremented')
        this.setState((prevState) => {
            return {
                counter: prevState.counter - 1
            }
        })
    }
    render(){
        return(
        <div>
            <p>The count is : {this.state.counter}</p>
            <button onClick={this.inc}>Incr</button>
            <button onClick={this.dec}>Decr</button>
        </div>
)
}
}
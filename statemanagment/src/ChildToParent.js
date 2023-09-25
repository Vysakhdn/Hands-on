import React from "react";
import Child1 from "./Child1";


export default class ChildToParent extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }

    handleAdd = () => {
        this.setState((prev) => ({
            count: prev.count+1
        }))
    }

    handleReduce = () => {
        this.setState((prev) => ({
            count: prev.count-1
        }))
    }

    render(){
        return(
            <div>
                <h1>Child to Parent</h1>
                <Child1 count={this.state.count} handleAdd={this.handleAdd} handleReduce={this.handleReduce}/>
            </div>
        )
    }
}
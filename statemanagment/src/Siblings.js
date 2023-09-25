import React from "react";
import Child2 from "./Child2";
import Button from "./Button";


export default class Siblings extends React.Component{
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
                <h1>Siblings</h1>
                <Child2 count={this.state.count} />
                <Button label="Add" func={this.handleAdd} />
                <Button label="Reduce" func={this.handleReduce} />
            </div>
        )
    }
}
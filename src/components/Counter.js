import React from "react";
import { Button, Stack } from "react-bootstrap";
import PureComponentEx from "./PureComponentEx";

class Counter extends React.Component {

    constructor() {
        super();
        this.state = {
            number: 0
        }
    }
    /* const styles = {
        marginLeft: "10px"
    } */

    incrementAction = () => {
        console.log("incrementAction")
        this.setState({
            number: this.state.number + 1
        })

    }

    decrementAction = () => {
        console.log("decrementAction")
        this.setState({
            number: this.state.number && this.state.number - 1
        })
    }

    render() {
        console.log("Counter Class Component Render Method");
        return (
            <div>
                <h1>Counter/Stepper Example</h1>
                <Stack direction="horizontal" gap={5}>
                    <Button onClick={this.incrementAction.bind(this)}>+</Button>
                    <label>{this.state.number}</label>
                    <Button onClick={this.decrementAction.bind(this)}>-</Button>
                </Stack>
                <br />
                <PureComponentEx val={this.state} />

            </div>
        )
    }
}

export default Counter;
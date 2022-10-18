import React from "react";
import Counter from "./Counter";

class SimpleClassComponent extends React.Component {

    onButtonClick = () => {
        alert("on Button clicked");
    }

    onAnotherButtonClick () {
        alert("Another Button clicked");
    }

    render() {
        console.log("SimpleClassComponent Render Method");
        return (
            <>
                <div>Simple Class Component created by using "React.Component"</div>
                <Counter />
                {/* <button onClick={this.onButtonClick}>Simple Alert</button>
                <button onClick={this.onAnotherButtonClick.bind(this)}>Another Button</button> */}
            </>
        )
    }
}

export default SimpleClassComponent;

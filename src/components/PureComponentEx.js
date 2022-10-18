import React from "react";

class PureComponentEx extends React.PureComponent {

    constructor(props) {
        super();
        this.state = {name: props.val}
    }

    render() {
        console.log("PureComponentEx component Render Method");
        return (
            <>
                <div>PureComponent Example {this.props.val.number}</div>
            </>
        )
    }
}

export default PureComponentEx;

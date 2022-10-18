import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import ToggleButtonOnOff from "./ToggleButton";

export default class SearchForm extends React.Component {

    state = {
        searchText: ""
    }

    seachAction = () => {
        console.log("search action", this.state.searchText);
    }

    render() {
        console.log("SearchForm Class Component Render Method");
        return (
            <>
                <Form className="mb-1 form-control-lg fw-lighter">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Your Search begins here..."
                        className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            value={this.state.searchText}
                            onChange={event => this.setState({ searchText: event.target.value })}
                        />
                    </FloatingLabel>
                </Form>

                <Button onClick={this.seachAction}>Search</Button>
                <ToggleButtonOnOff />
            </>
        )
    }
}

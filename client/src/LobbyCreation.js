import React, { Component } from "react";
import { Button, ButtonToolbar, Container, List } from "rsuite";
import history from "./History";


class LobbyCreation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name = "Mario",
            code = "00000",
        }
        this.onGenerateButtonClicked = this.onGenerateButtonClicked.bind(this);
    }

    onGenerateButtonClicked() {

    }

    render() {
        return (
            <div>
                <Button onClick={this.onGenerateButtonClicked}>
                    Generate Unique Code
                </Button>
            </div>
        );
    }
}
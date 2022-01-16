import React, { Component } from "react";
import { Button, ButtonToolbar, Container, List } from "rsuite";
import history from "./History";


class Home extends Component {
    constructor(props) {
        super(props);
        this.handleInstructorClick = this.handleInstructorClick.bind(this);
        this.handleStudentClick = this.handleStudentClick.bind(this);
    }

    handleInstructorClick() {
        history.push({
            pathname: '/instructor/LobbyCreation',
        });
        this.refreshPage();
    }

    handleStudentClick() {
        history.push({
            pathname: '/student',
        });
        this.refreshPage();
    }

    refreshPage() {
        window.location.reload(false);
    }

    render() {
        return (
            <div>
                <Button onClick={this.handleInstructorClick}>
                    Instructer
                </Button>
                <Button onClick={this.handleStudentClick}>
                    Student
                </Button>
            </div>
        );

    }

}
export default Home;

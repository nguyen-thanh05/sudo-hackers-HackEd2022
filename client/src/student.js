import React, { Component } from "react";
import { Button, Container, Form, Modal, Dropdown, ButtonToolbar } from "rsuite";


class student extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course: "test",
            instructor: "test",
            date: this.getCurrentDate(),
            currentQuestion: this.getCurrentQuestion(),
            yourQuestion: this.getYourQuestion(),
            showAskQuestionForm: false,
            showAskButton: true,
            showClarificationForm: false,
            showEditForm: false
		};

        this.handleAskQuestionButtonClick =  this.handleAskQuestionButtonClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleEditQuestionButton = this.handleEditQuestionButton.bind(this);
        this.handleClarificationButton = this.handleClarificationButton.bind(this);
        
	}

    
    getCurrentQuestion() {
        return 'This is a placeholder for the current question'
    }
    getYourQuestion() {
        return null;
    }
    getCurrentDate(separator='/'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    handleEditQuestionButton() {
        this.setState({showEditForm: true});
    }
    handleClarificationButton() {
        this.setState({showClarificationForm: true});
    }
    handleAskQuestionButtonClick() {
        this.setState({showAskQuestionForm: true});
        this.setState({showAskButton: false});
    }
    handleClose() {
        this.setState({showAskQuestionForm: false});
        this.setState({showAskButton: true});
        this.setState({showEditForm: false});
        this.setState({showClarificationForm: false});
    }
    
	render() {
        
		return (
            
			<div>
                <Container
                    style={{backgroundColor: "rgb(39, 94, 57)"}}
                >
                    <div style = {{
                        paddingBottom:5,
                        textAlign: "center",
                        color: "white",
                        fontSize: "16px"
                    }}>
                        Course: {this.state.course}
                    </div>
                    <div style = {{
                        paddingBottom:5,
                        textAlign: "center",
                        color: "white",
                        fontSize: "16px"
                    }}>
                        Instructor: {this.state.instructor}
                    </div>
                    <div style = {{
                        paddingBottom:5,
                        textAlign: "center",
                        color: "white",
                        fontSize: "16px"
                    }}>
                        {this.state.date}
                    </div>
                </Container>
                <Container>
                    <div style = {{
                        paddingLeft:20,
                        paddingTop:10,
                        textAlign: "left",
                        fontSize: "22px",
                        fontStyle: "italic"
                    }}>
                        Current Question: 
                    </div>

                    <div style = {{
                        paddingLeft:30,
                        paddingTop:10,
                        textAlign: "left",
                        fontSize: "25px",
                        fontWeight: "bold"
                    }}>
                        {this.state.currentQuestion} 
                    </div>

                    <div style = {{
                        paddingLeft:50,
                        paddingTop:10,
                        textAlign: "left",
                        fontSize: "18px",
                        
                    }}>
                        Clarification placeholder 
                    </div>
                </Container>
                    
                    <div style = {{
                        paddingLeft:20,
                        paddingTop:50,
                        textAlign: "left",
                        fontSize: "22px",
                        fontStyle: "italic"
                    }}>
                        Your Question: 
                    </div>
                    
                    <Container>
                    <div style = {
                        this.state.yourQuestion == null ? 
                            {
                                paddingLeft:30,
                                paddingTop:10,
                                textAlign: "left",
                                fontSize: "20px",
                                fontStyle: "italic",
                                color: "rgb(192, 192, 192)"
                            }
                            
                            : { 
                                paddingLeft:30,
                                paddingTop:10,
                                textAlign: "left",
                                fontSize: "25px",
                                fontWeight: "bold"
                            }
                    }>
                        {this.state.yourQuestion == null ? "Your question will be displayed here" : this.state.yourQuestion}
                    </div>

                    <div style = {{
                        paddingLeft:50,
                        paddingTop:10,
                        textAlign: "left",
                        fontSize: "18px",
                        color: "rgb(192, 192, 192)"
                    }}>
                        No other clarifications 
                    </div>
                    <ButtonToolbar>
                    <Button onClick = {this.handleClarificationButton} disabled= {this.state.yourQuestion == null} style = {{
                            margin:"5px",
                            borderRadius: "8px",
                            backgroundColor: "rgb(39, 94, 57)",
                            color: "white",
                            fontSize: "16px",
                            padding: "8px"
                        }}>
                            Add clarification</Button>


                    <Button onClick = {this.handleEditQuestionButton} disabled= {this.state.yourQuestion == null}
                    style = {{
                        margin:"5px",
                        borderRadius: "8px",
                        backgroundColor: "rgb(39, 94, 57)",
                        color: "white",
                        fontSize: "16px",
                        padding: "8px"
                    }}>
                        Edit question</Button>


                    <Dropdown disabled= {this.state.yourQuestion == null} title="Dismiss question" style = {{
                            margin:"5px",
                            color: "red",
                            fontSize: "16px",
                            padding: "8px"
                        }}>
                        <Dropdown.Item>Question already answered</Dropdown.Item>
                        <Dropdown.Item>Other reasons</Dropdown.Item>
                    </Dropdown>
                    </ButtonToolbar>
                </Container>

                <Button
                    onClick = {this.handleAskQuestionButtonClick}
                    open = {this.state.showAskButton}
                    style = {
                        this.state.showAskButton ? {
                            position: "fixed",
                            right: 15,
                            bottom: 15,
                            borderRadius: "8px",
                            backgroundColor: "rgb(39, 94, 57)",
                            color: "white",
                            fontSize: "20px",
                            padding: "12px"
                        } : {display: 'none'}
                    }
                >
                    Click here to ask a question
                </Button>

                
                <Modal size="lg" open={this.state.showAskQuestionForm} onClose={this.handleClose}>
                    <Modal.Body>
                        <Form fluid>
                            <Form.Group controlId="question">
                            <Form.ControlLabel style = {{
                                paddingLeft:20,
                                paddingBottom:20,
                                textAlign: "left",
                                fontSize: "22px",
                                fontStyle: "italic"
                            }}>Ask your question here</Form.ControlLabel>
                            <Form.Control name="question" style = {{
                                padding: 7.5,
                                fontSize: "20px",
                                display:"block",
                            }}/>
                        </Form.Group>
                        </Form>
                    </Modal.Body>
        
                    <Modal.Footer style = {{bottom: 10, right: 10, paddingTop:10}}>
                        <Button onClick={this.handleClose} appearance="primary" style = {
                                {
                                    borderRadius: "8px",
                                    backgroundColor: "rgb(39, 94, 57)",
                                    color: "white",
                                    fontSize: "16px",
                                    padding: "10px",
                                    marginRight:"5px"                                    
                                }
                            }>
                            Post
                        </Button>
                        <Button onClick={this.handleClose} appearance="subtle" style = {
                                {
                                    borderRadius: "8px",
                                    backgroundColor: "rgb(39, 94, 57)",
                                    color: "white",
                                    fontSize: "16px",
                                    padding: "10px"
                                }
                            }>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

                
                <Modal size="lg" open={this.state.showClarificationForm} onClose={this.handleClose}>
                    <Modal.Body>
                        <Form fluid>
                            <Form.Group controlId="clarification">
                            <Form.ControlLabel style = {{
                                paddingLeft:20,
                                paddingBottom:20,
                                textAlign: "left",
                                fontSize: "22px",
                                fontStyle: "italic"
                            }}>Ask your clarification here</Form.ControlLabel>
                            <Form.Control name="clarification" style = {{
                                padding: 7.5,
                                fontSize: "20px",
                                display:"block",
                            }}/>
                        </Form.Group>
                        </Form>
                    </Modal.Body>
        
                    <Modal.Footer style = {{bottom: 10, right: 10, paddingTop:10}}>
                        <Button onClick={this.handleClose} appearance="primary" style = {
                                {
                                    borderRadius: "8px",
                                    backgroundColor: "rgb(39, 94, 57)",
                                    color: "white",
                                    fontSize: "16px",
                                    padding: "10px",
                                    marginRight:"5px"                                    
                                }
                            }>
                            Post
                        </Button>
                        <Button onClick={this.handleClose} appearance="subtle" style = {
                                {
                                    borderRadius: "8px",
                                    backgroundColor: "rgb(39, 94, 57)",
                                    color: "white",
                                    fontSize: "16px",
                                    padding: "10px"
                                }
                            }>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>

                <Modal size="lg" open={this.state.showEditForm} onClose={this.handleClose}>
                    <Modal.Body>
                        <Form fluid >
                            <Form.Group controlId="question">
                            <Form.ControlLabel style = {{
                                paddingLeft:20,
                                paddingBottom:20,
                                textAlign: "left",
                                fontSize: "22px",
                                fontStyle: "italic"
                            }}>Edit your question here</Form.ControlLabel>
                            <Form.Control value={this.state.yourQuestion} name="question" style = {{
                                padding: 7.5,
                                fontSize: "20px",
                                display:"block",
                            }}/>
                        </Form.Group>
                        </Form>
                    </Modal.Body>
        
                    <Modal.Footer style = {{bottom: 10, right: 10, paddingTop:10}}>
                        <Button onClick={this.handleClose} appearance="primary" style = {
                                {
                                    borderRadius: "8px",
                                    backgroundColor: "rgb(39, 94, 57)",
                                    color: "white",
                                    fontSize: "16px",
                                    padding: "10px",
                                    marginRight:"5px"                                    
                                }
                            }>
                            Post
                        </Button>
                        <Button onClick={this.handleClose} appearance="subtle" style = {
                                {
                                    borderRadius: "8px",
                                    backgroundColor: "rgb(39, 94, 57)",
                                    color: "white",
                                    fontSize: "16px",
                                    padding: "10px"
                                }
                            }>
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
			</div>
            
		);
	}
}


export default student;

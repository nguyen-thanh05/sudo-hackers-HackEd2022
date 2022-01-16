import React, { Component } from "react";
import { Button, Container, Form, Modal } from "rsuite";


class student extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course: "test",
            instructor: "test",
            date: this.getCurrentDate(),
            currentQuestion: this.getCurrentQuestion(),
            showForm: false,
            showAskButton: true
            
		};

        this.handleAskQuestionButtonClick =  this.handleAskQuestionButtonClick.bind(this);
        this.handleClose = this.handleClose.bind(this);
	}


    getCurrentQuestion() {
        return 'This is a placeholder for the current question'
    }
    getCurrentDate(separator='/'){

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();
        
        return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
    }

    handleAskQuestionButtonClick() {
        this.setState({showForm: true});
        this.setState({showAskButton: false});
    }
    handleClose() {
        this.setState({showForm: false});
        this.setState({showAskButton: true});
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
                <Container fixed>
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

                
                <Modal size="lg" open={this.state.showForm} onClose={this.handleClose}>
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

			</div>
            
		);
	}
}


export default student;

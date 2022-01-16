import React, { Component } from "react";
import { Button, Container } from "rsuite";

class student extends Component {
	constructor(props) {
		super(props);
		this.state = {
			course: "test",
            instructor: "test",
            date: this.getCurrentDate(),
            currentQuestion: this.getCurrentQuestion()
		};
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
                        fontSize: "14px"
                    }}>
                        Course: {this.state.course}
                    </div>
                    <div style = {{
                        paddingBottom:5,
                        textAlign: "center",
                        color: "white",
                        fontSize: "14px"
                    }}>
                        Instructor: {this.state.instructor}
                    </div>
                    <div style = {{
                        paddingBottom:5,
                        textAlign: "center",
                        color: "white",
                        fontSize: "14px"
                    }}>
                        {this.state.date}
                    </div>
                </Container>
                <div style = {{
                    paddingLeft:20,
                    paddingTop:10,
                    textAlign: "left",
                    fontSize: "20px",
                    fontStyle: "italic"
                }}>
                    Current Question: 
                </div>

                <div style = {{
                    paddingLeft:30,
                    paddingTop:10,
                    textAlign: "left",
                    fontSize: "22px",
                    fontWeight: "bold"
                }}>
                    {this.state.currentQuestion} 
                </div>
			</div>
            
		);
	}
}


export default student;

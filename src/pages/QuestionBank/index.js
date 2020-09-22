
import React from "react";
import { Container, Button, Alert } from "reactstrap";
import questionTwo from '../../questiontwo.json';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';
class QuestionBank extends React.Component {

    constructor(props) {
        super(props);
        this.state = { questionTwo: questionTwo, showToast: "none", toastMessage:""};

    }
    checkAns = (e, userAns, index) => {
        let tempList = this.state.questionTwo
        if (userAns === this.state.questionTwo[index].answer) {
            tempList[index].answered = "success"
            this.setState({
                questionTwo: tempList,
                showToast: "block", 
                toastMessage: "correct"
            });
        }
        else {
            tempList[index].answered = "danger"

            this.setState({
                questionTwo: tempList,
                showToast: "block",
                toastMessage: "wrong"
            });
        }
    }


    showToast(){
        return(<Toast className="position-fixed" style={{display:this.state.showToast, bottom: '15px', right: '15px' }}>
        <ToastHeader>
            Answer Message
        </ToastHeader>
        <ToastBody>
            You choose the {this.state.toastMessage} answer.
        </ToastBody>
    </Toast>);
    }
    render() {
        return (
            <div>
                {this.showToast()}
                <Container>
                    <h5 className="shadow-sm p-3 my-3 bg-white border-left-secondary">Question Bank</h5>
                    { this.state.questionTwo.map((data, index) =>
                        <Alert key={index} id={index} color={this.state.questionTwo[index].answered}>
                            <h6>{data.question}</h6>
                            <div>
                                <Button color="primary" className="mr-2" size="sm" onClick={e => this.checkAns(e, true, index)} >True</Button>
                                <Button color="primary" size="sm" onClick={e => this.checkAns(e, false, index)}>False</Button>
                            </div>
                        </Alert>
                    )}
                </Container>

            </div>
        );

    }
}
export default QuestionBank;
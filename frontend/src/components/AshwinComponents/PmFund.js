import React, { Component } from "react";
import { AvForm, AvField, AvInput } from "availity-reactstrap-validation";
import { FormGroup, Button } from "reactstrap";
import Header from "../vbjComponents/HeaderView";
import * as ROUTES from "../../constants/routes";
import { Redirect } from "react-router-dom";
import SideNavBar from "../arumugamComponents/SideNavBar";

class PmFund extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      flag: false,
    };
  }

  handleSubmit() {
    this.setState({
      flag: true,
    });
  }

  render() {
    if (this.state.flag) {
      window.alert("Thanks for Your Help ..!!");
      return <Redirect to={ROUTES.DASHBOARD} />;
    }

    return (
      <div id="scroll">
        <Header name="Covid 19 Fund" />
        <SideNavBar history={this.props.history} />
        <div className="row">
          <div className="col-12 col-sm-6">
            <img
              className="myImage"
              src="https://ak.picdn.net/shutterstock/videos/28458976/thumb/10.jpg?ip=x480"
              width="600px"
              height="605px"
              alt="img"
            ></img>
          </div>

          <div className="col-12 col-sm-6">
            <div className="fund">
              <h2 style={{ textAlign: "center", marginBottom: "40px", marginTop: '30px' }}>
                Make Your Contribution
              </h2>
              <AvForm className="margin" onSubmit={this.handleSubmit}>
                <AvField
                  className="fundinput"
                  name="pmname"
                  id="pmname"
                  label="Name"
                  type="text"
                  innerRef={(input) => (this.pmname = input)}
                  validate={{ required: { value: true, errorMessage: "Name Required ..!!"} }}
                ></AvField>
                <AvField
                  className="fundinput"
                  name="amount"
                  id="amount"
                  label="Amount"
                  type="text"
                  innerRef={(input) => (this.amount = input)}                  
                  validate={{ number : { value: true, errorMessage: "Invalid Amount ..!!"} , required : { value: true, errorMessage: "Amount Required ..!!" }}}
                ></AvField>

                <p style={{ marginTop: "20px", fontSize: "18px" }}>Feedback</p>
                <AvInput
                  type="textarea"
                  name="notes"
                  id="notes"
                  placeholder="Your Feedback ..."
                />

                <FormGroup className="butpm">
                  <Button
                    style={{
                      fontSize: "17px",
                      borderWidth: "3px",
                      boxShadow: "0px 7px 5px #d4d4d4",
                    }}
                    color="danger"
                    outline="none"
                  >
                    <i
                      class="fas fa-money-check-alt"
                      style={{ marginRight: "7px" }}
                    ></i>
                    Donate
                  </Button>
                </FormGroup>
              </AvForm>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PmFund;

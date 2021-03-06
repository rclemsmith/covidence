import React, { Component } from "react";
import firebase from "../../config/firebase";
import Header from "./HeaderView";
import { AvForm, AvField } from "availity-reactstrap-validation";
import { FormGroup, Button } from "reactstrap";
import "./styles/styles.css";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import NearbyView from "./NearbyViewComponent";
import SideNavBar from "../arumugamComponents/SideNavBar";

class NearbyStore extends Component {
  constructor(props) {
    super(props);
    this.state = {
      store: [],
      pincode: "",
      filpin: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const ref = firebase.database().ref("Stores");
    ref.on("value", (snapshot) => {
      let stores = snapshot.val();
      this.setState({
        store: stores,
      });
    });
  }

  handleSubmit(event, errors, values) {
    event.preventDefault();
    let ref = firebase.database().ref();
    this.setState({ errors, values });

    if (errors.length === 0) {
      this.setState({
        pincode: values["pincode"],
      });
    } else {
      console.log(errors);
    }
  }

  render() {
    console.log(this.state.store);
    var pin = Object.keys(this.state.store)
      .filter((key) => {
        return this.state.store[key].Pincode == this.state.pincode;
      })
      .map((key) => {
        return this.state.store[key];
      });
    console.log(pin);

    return (
      <div className="statpage">
        <Header name="Nearby stores" />
        <SideNavBar history={this.props.history} />
          <AvForm style={{marginLeft: '110px', marginTop: '30px'}} onSubmit={this.handleSubmit}>
            <div className="row">
            <AvField
              className="reginput"
              name="pincode"
              id="pincode"
              label="Pincode"
              type="text"
              innerRef={(input) => (this.pincode = input)}
              errorMessage="Pincode Required ..!!"
              validate={{ number: true, required: true }}
            ></AvField>

              <Button
                id="stbut"                
                color="danger"
                outline="none"
              >
                <i
                  class="fa fa-search"
                  aria-hidden="true"
                  style={{ marginRight: "7px" }}
                ></i>
                Search
              </Button>
            </div>
          </AvForm>
        <div className="row">
        <NearbyView pin={pin} />
        </div>        
      </div>
    );
  }
}

export default NearbyStore;

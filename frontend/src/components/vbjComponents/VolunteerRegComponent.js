import React,{Component} from 'react';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { FormGroup, Button } from 'reactstrap';
import Header from './HeaderView';
import CarouselComponent from './CarouselComponent';
import firebase from '../../config/firebase';
import * as ROUTES from '../../constants/routes';
import {Redirect} from 'react-router-dom';

class VolunteerReg extends Component{
    constructor(props){
        super(props)
        this.state={
            flag: false
        }
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event,errors,values) {
		event.preventDefault();
		let ref = firebase.database().ref();
		this.setState({errors,values})
        console.log(values['select']);
        console.log(values['skills']);
		if(errors.length === 0){
			
			ref.child('Volunteers-Registers').push({
                Skills: values['skills'],
                Work: values['select']
			})
			this.setState({
				flag: true
			})
		}
		else{
			console.log(errors);
			
		}
    }
    

    render(){
        if(this.state.flag){
            window.alert("Registered Successfully. Well done Volunteer!!")
        }
        return(
            <div>
                <Header name="Volunteer-Registration" />
                <CarouselComponent />
                <div className="container">
                    <h3 style={{textAlign: "center"}}>Registration Form</h3>
                    <AvForm className="margin" onSubmit={this.handleSubmit}>
                        <AvField type="select" name="select" label="Work" helpMessage="Select a work depending upon your skills"  required>
                            <option>Select..</option>
                            <option>Traffic</option>
                            <option>Distribution</option>
                            <option>Others</option>
                        </AvField>
                        <AvInput type="textarea" name="skills" id="skills" placeholder="Your Skills" required/>
                        
						<FormGroup className="butmar">
						    <Button style={{fontSize : '18px'}} color="danger" outline="none" ><i class="fa fa-user-circle-o" aria-hidden="true" style={{marginRight: '7px'}} ></i>Submit</Button>
						</FormGroup>

                    </AvForm>
                </div>

            </div>
        )
    }

}

export default VolunteerReg;
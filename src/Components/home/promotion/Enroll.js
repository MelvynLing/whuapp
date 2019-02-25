import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import FormField from '../../ui/formfields';
import { validate } from '../../ui/misc';
import { firebasePromos } from '../../../firebase'

 class Enroll extends Component {

     state= {
          formError:false,
          formSuccess:'',
          formdata:{
               email:{
                    element:'input',
                    value:'',
                    config:{
                         name:'email_input',
                         type:'email',
                         placeholder:'Please enter your Email'
                    },
                    validation:{
                         required: true,
                         email: true,
                    },
                    valid: false,
                    validationMessage:''
               }
          }
     }

updateForm(element) {
     const newFormdata = {...this.state.formdata}
     const newElement = {...newFormdata[element.id]}

     newElement.value = element.event.target.value;


          let validData = validate(newElement);
          newElement.valid = validData[0];
          newElement.validationMessage = validData[1];


     newFormdata[element.id] = newElement;
          
     
     this.setState({
          formError: false,
          formdata: newFormdata
     })
}

successMessage() {
     setTimeout(()=>{
          this.setState({
               formSuccess:''
          })
     }, 2000)
}

resetFormSuccess(type) {
     const newFormdata = {...this.state.formdata}

     for(let key in newFormdata){
          newFormdata[key].value = '';
          newFormdata[key].valid = false;
          newFormdata[key].validationMessage = '';
     }

     this.setState({
          formError: false,
          formdata: newFormdata,
          formSuccess: type ? 'Success! Best of Luck!' : "Sorry, you've already registered!"
     });

     this.successMessage({})
}

submitForm(event) {
     event.preventDefault();

     let dataToSubmit = {};
     let formIsValid = true;

     for(let key in this.state.formdata) {
          dataToSubmit[key] = this.state.formdata[key].value
          formIsValid = this.state.formdata[key].valid && formIsValid;
     }

     if (formIsValid) {
          firebasePromos.orderByChild('email').equalTo(dataToSubmit.email).once("value")
          .then((snapshot)=>{
               if (snapshot.val()===null) {
                    firebasePromos.push(dataToSubmit)
                    this.resetFormSuccess(true);
               } else {
                    this.resetFormSuccess(false);
               }
          })


          // this.resetFormSuccess();
     } else {
          this.setState({
               formError: true
          })
     }
}

  render() {
    return (
          <Fade>
               <div className='enroll_wrapper'>
                    <form onSubmit={(event)=>this.submitForm(event)}>
                         <div className='enroll_title'>
                              Enter your email below for your chance to Win!
                         </div>
                         <div className="enroll_input">
                              <FormField
                                   id={'email'}
                                   formdata={this.state.formdata.email}
                                   change={(element)=> this.updateForm(element)}
                              />
                              { this.state.formError ? 
                                   <div className='error_label'>Something is not right, try again.</div>
                                   :null 
                              }
                              <div className='success_label'>{this.state.formSuccess}</div>
                              <button onClick={(event)=> this.submitForm(event)}> Enter to Win! </button>
                              <div className="enroll_discl">***PLEASE BE AWARE***<br/> There is no actual contest, these is just for coding practise/exercise.</div>
                         </div>
                    </form>
               </div>
          </Fade>    
    )
  }
}

export default Enroll;
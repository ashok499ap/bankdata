// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
// import { MyServiceService } from '../my-service.service';
// import { from } from 'rxjs';
// import { Router } from '@angular/router';
// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {
//   signupForm: FormGroup;
//   first_name: any;
//   last_name: any;
//   mobile_number: any;
//   email: any;
//   password: any;
//   confirm_password: any;
//   constructor(private fb: FormBuilder, public formBuilder: FormBuilder, private httpService: MyServiceService, private router: Router ) {
//     this.signupForm = this.formBuilder.group({
//       first_name: new FormControl('', Validators.compose([Validators.pattern('^[a-zA-Z0-9]+$'), Validators.required])),
//       last_name: new FormControl('', Validators.compose([Validators.pattern('^[a-zA-Z0-9]+$'), Validators.required])),
//       mobile_number: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[0-9]{10}')])),
//       email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])),
//       password: new FormControl('', Validators.compose([Validators.pattern('^[a-zA-Z0-9]+$'), Validators.required])),
//       confirm_password: new FormControl('', Validators.required)
//     });
//    }

//   ngOnInit() {
//   }
//   signup(value){
//   console.log('fn called')
//     let first_name = this.signupForm.get('first_name').value
//     let last_name = this.signupForm.get('last_name').value
//     let mobile_number = this.signupForm.get('mobile_number').value
//     let email = this.signupForm.get('email').value
//     let password = this.signupForm.get('password').value
//     let confirm_password = this.signupForm.get('confirm_password').value
  
//     if(value.first_name && value.last_name && value.mobile_number && value.email && value.password && value.confirm_password){
//       console.log('fn in if called')
//       if(value.password == value.confirm_password){
//         this.httpService.signup(last_name, first_name, mobile_number, email, password, confirm_password).subscribe((res) => { 
//           // localStorage.setItem('signupData')
//           console.log(res)       
//       }) 
//       alert('signup successfully') 
//       this.router.navigate(['login'])
//       }else{
//         alert('password and confirm password did not match') 

//       }
//     }

//   }
// }
  


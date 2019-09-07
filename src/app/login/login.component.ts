// import { Component, OnInit } from '@angular/core';
// import { FormGroup, FormControl, FormBuilder, Validators, } from '@angular/forms'
// import { MyServiceService } from '../my-service.service';
// import { Router } from '@angular/router';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.css']
// })
// export class LoginComponent implements OnInit {
//   loginForm: FormGroup;
//   constructor(private fb: FormBuilder, public formBuilder: FormBuilder, private httpService: MyServiceService, private router: Router) {
 
//       this.loginForm = this.fb.group({
//         email: new FormControl('', Validators.compose([Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')])),
//       password: new FormControl('', Validators.compose([Validators.pattern('^[a-zA-Z0-9]+$'), Validators.required])),
//       });
//    }

//   ngOnInit() {
//   }

//   login(value){
//     let email = this.loginForm.get('email').value
//     let password = this.loginForm.get('password').value
//      if(email && password){
//        this.httpService.login(email, password).subscribe(res => {
      
//          console.log(res)
         
//        })
//        alert("Login successfully")
//        this.router.navigate(['signup'])
//      }else {
//        alert("Login failed Please check your credintials")
       
//      }
//   }
// }

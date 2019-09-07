import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';
// import { AppendvaluetoapiComponent } from './appendvaluetoapi/appendvaluetoapi.component';
import { BanklistComponent } from './banklist/banklist.component';

const routes: Routes = [
  // { path: 'signup', component: SignupComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'appendvaluetoapi', component: AppendvaluetoapiComponent},
  { path: '', component: BanklistComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

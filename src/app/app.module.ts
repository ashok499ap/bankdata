import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule, } from '@angular/forms';
import {
  MatCheckboxModule,
  MatButtonToggleModule,
  MatButtonModule,
  MatSelectModule,
  MatAutocompleteModule,
  MatFormFieldModule,
  MatCardModule,
  MatDialogModule,
  MatChipsModule,


}
  from '@angular/material';
import {
  MatDatepickerModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
  MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTabsModule, MatToolbarModule,
  MatTooltipModule, MatStepperModule,
} from '@angular/material';

// import { SignupComponent } from './signup/signup.component';
// import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
// import { AppendvaluetoapiComponent } from './appendvaluetoapi/appendvaluetoapi.component';
import { MyServiceService } from './my-service.service';
import { BanklistComponent } from './banklist/banklist.component';
@NgModule({
  declarations: [
    AppComponent,
    // SignupComponent,
    // LoginComponent,
    // AppendvaluetoapiComponent,
    BanklistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatTableModule,ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    MatTableModule,
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    MatChipsModule,
    MatDatepickerModule, MatExpansionModule, MatGridListModule, MatIconModule,
    MatInputModule, MatListModule, MatMenuModule, MatNativeDateModule, MatPaginatorModule, MatProgressBarModule,
    MatProgressSpinnerModule, MatRadioModule, MatRippleModule, MatSidenavModule, MatSliderModule,
    MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTabsModule, MatToolbarModule,
    MatTooltipModule, MatStepperModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product-component/product-component.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { PriceFilterPipe } from './product-component/price-filter.pipe';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { EmailValidatorDirective } from './jobseekers/emailValidator.directive';
import { ReactiveformComponent } from './jobseekers/reactiveform/reactiveform.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    PriceFilterPipe,
    JobseekersComponent,
    EmailValidatorDirective,
    ReactiveformComponent,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductComponent } from './product-component/product-component.component';
import { FormsModule } from '@angular/forms';
import { EmployeeComponent } from './employee/employee.component';
import { PriceFilterPipe } from './product-component/price-filter.pipe';
import { JobseekersComponent } from './jobseekers/jobseekers.component';
import { EmailValidatorDirective } from './jobseekers/emailValidator.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponent,
    PriceFilterPipe,
    JobseekersComponent,
    EmailValidatorDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
// import { EmployeeServiceService } from './employee-service.service';
import { LogeshhService } from './logeshh.service';
import { provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  
   
  ],
  providers: [
    provideHttpClient(withFetch()),
    LogeshhService
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

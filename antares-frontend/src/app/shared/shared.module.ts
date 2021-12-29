import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedRoutingModule } from './shared-routing.module';
import { CardHeaderComponent } from './components/card-header/card-header.component';
import { ServerErrorMessagesComponent } from './components/server-error-messages/server-error-messages.component';


@NgModule({
  declarations: [
    CardHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    HttpClientModule,

  ],
  exports:[
    HttpClientModule,
    CardHeaderComponent,
    



  ],
  providers: [

  ]
})
export class SharedModule { }

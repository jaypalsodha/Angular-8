import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    AppComponent,ServerComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


// angular uses component to create the we pages.
// angular uses modules to bundle all the components
// all the features will be defined in this module. 
// it defines our entire application
//

// 2. run the application and see  

//
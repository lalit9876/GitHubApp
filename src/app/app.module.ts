import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { ReposComponent } from './repos/repos.component';


@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

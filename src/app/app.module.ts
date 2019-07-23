import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersService } from './services/users.service';

import { FormsModule } from '@angular/forms';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    AppComponent,
    OneComponent,
    TwoComponent,
    ParentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }

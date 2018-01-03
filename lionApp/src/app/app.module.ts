import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { ByIduserComponent } from './by-iduser/by-iduser.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
    declarations: [
        AppComponent,
        AddUserComponent,
        UpdateUserComponent,
        AllUserComponent,
        ByIduserComponent,
        HeaderComponent,
        FooterComponent
      ],
    imports: [
        BrowserModule,
        RouterModule.forRoot(ROUTES),
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }

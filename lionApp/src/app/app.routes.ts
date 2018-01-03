import { Routes } from '@angular/router';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

import { AddUserComponent } from './add-user/add-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { AllUserComponent } from './all-user/all-user.component';
import { ByIduserComponent } from './by-iduser/by-iduser.component';

export const ROUTES: Routes = [
	{ path: '', redirectTo: 'list', pathMatch: 'full' },
	{ path: 'add', component: AddUserComponent },
	{ path: 'update', component: UpdateUserComponent },
	{ path: 'list', component: AllUserComponent },
	{ path: 'detail', component: ByIduserComponent }
];
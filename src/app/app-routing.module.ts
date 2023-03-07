import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarLoanComponentComponent } from './car-loan-component/car-loan-component.component';

import { HomeComponent } from './home';
import { HomeLoanComponentComponent } from './home-loan-component/home-loan-component.component';
import { PersonalLoanComponentComponent } from './personal-loan-component/personal-loan-component.component';
import { AuthGuard } from './_helpers';

const accountModule = () => import('./account/account.module').then(x => x.AccountModule);
const usersModule = () => import('./users/users.module').then(x => x.UsersModule);

const routes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'users', loadChildren: usersModule, canActivate: [AuthGuard] },
    { path: 'account', loadChildren: accountModule },
    { path:'homeloan', component:HomeLoanComponentComponent},
    {path:'carloan', component:CarLoanComponentComponent},
    {path:'personalloan',component:PersonalLoanComponentComponent},

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
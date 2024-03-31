import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';

 const routeConfig: Routes = [
    {path: '', component: HomeComponent, title: 'Home Page'},
    {path: 'login', component: LoginComponent},
    {path: 'signup', component: SignupComponent}
];
export default routeConfig; 
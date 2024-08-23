import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './Page/index/index.component';
import { AccountComponent } from './Page/account/account.component';

export const routes: Routes = [
    {path: '', component: AccountComponent},
    {path: 'home', component: IndexComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
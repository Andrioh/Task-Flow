import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './Page/index/index.component';
import { accountcomponent } from './Page/account/account.component';

export const routes: Routes = [
    {path: '', component: accountcomponent},
    {path: 'home', component: IndexComponent}


];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
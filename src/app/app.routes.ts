import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './Page/index/index.component';
import { accountcomponent } from './Page/account/account.component';
import { NewTaskComponent } from './Component/new-task/new-task.component';
import { MyTaskComponent } from './Component/my-task/my-task.component';

export const routes: Routes = [
    {path: '', component: accountcomponent},
    {path: 'Home', component: IndexComponent},
    {path: 'New+Task', component: NewTaskComponent},
    {path: 'My+Task', component: MyTaskComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
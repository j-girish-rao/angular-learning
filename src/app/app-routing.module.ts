import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './topics/getting-started/getting-started.component';
import { AngularCompComponent } from './topics/angular-comp/angular-comp.component';
import { TextInterpolationComponent } from './topics/text-interpolation/text-interpolation.component';
import { LifecycleHooksComponent } from './topics/lifecycle-hooks/lifecycle-hooks.component';
import { ParentCcComponent } from './topics/component-communication/parent-cc/parent-cc.component';

const routes: Routes = [
  { path: '', component: GettingStartedComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'angular-comp', component: AngularCompComponent },
  { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  { path: 'text-interpol', component: TextInterpolationComponent },
  { path: 'comp-communication', component: ParentCcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

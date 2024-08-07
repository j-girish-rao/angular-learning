import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingStartedComponent } from './topics/getting-started/getting-started.component';
import { AngularCompComponent } from './topics/angular-comp/angular-comp.component';
import { TextInterpolationComponent } from './topics/text-interpolation/text-interpolation.component';
import { LifecycleHooksComponent } from './topics/lifecycle-hooks/lifecycle-hooks.component';
import { ParentCcComponent } from './topics/component-communication/parent-cc/parent-cc.component';
import { ComponentStylingComponent } from './topics/component-styling/component-styling.component';
import { NgContentParentComponent } from './topics/ng_content/ng-content-parent/ng-content-parent.component';
import { TemplateStatComponent } from './topics/template-stat/template-stat.component';
import { TestParentComponent } from './topics/test-comp/test-parent/test-parent.component';
import { PipeComponent } from './topics/pipe/pipe.component';
import { PropertyBindingComponent } from './topics/property-binding/property-binding.component';
import { EventBindingComponent } from './topics/event-binding/event-binding.component';
import { ParentCComponent } from './topics/two-way-binding/parent-c/parent-c.component';
import { TemplateVariableComponent } from './topics/template-variable/template-variable.component';

const routes: Routes = [
  { path: '', component: GettingStartedComponent },
  { path: 'getting-started', component: GettingStartedComponent },
  { path: 'angular-comp', component: AngularCompComponent },
  { path: 'lifecycle-hooks', component: LifecycleHooksComponent },
  { path: 'text-interpol', component: TextInterpolationComponent },
  { path: 'comp-communication', component: ParentCcComponent},
  { path: 'comp-styling', component: ComponentStylingComponent },
  { path: 'ng_content', component: NgContentParentComponent},
  { path: 'temp-stat', component: TemplateStatComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'property-binding', component: PropertyBindingComponent},
  { path: 'event-binding', component: EventBindingComponent},
  { path: 'two-way-binding', component: ParentCComponent},
  { path: 'template-var', component: TemplateVariableComponent},
  { path: 'test', component: TestParentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

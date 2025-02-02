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
import { DirectivesComponent } from './topics/directives/directives.component';
import { AttributeDirectiveComponent } from './topics/attribute-directive/attribute-directive.component';
import { StructuralDirectiveComponent } from './topics/structural-directive/structural-directive.component';
import { DependencyInjectionComponent } from './topics/dependency-injection/dependency-injection.component';
import { AngularRoutingComponent } from './topics/angular-routing/angular-routing.component';
import { TemplateFormComponent } from './topics/template-form/template-form.component';
import { ReactiveFormComponent } from './topics/reactive-form/reactive-form.component';
import { RouterDataComponent } from './topics/angular-routing/router-data/router-data.component';
import { ArChildRouteAComponent } from './topics/angular-routing/ar-child-route-a/ar-child-route-a.component';
import { ArChildRouteBComponent } from './topics/angular-routing/ar-child-route-b/ar-child-route-b.component';
import { SampleGuardGuard } from './topics/angular-routing/sample-guard.guard';

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
  { path: 'directives', component: DirectivesComponent},
  { path: 'attribute-directive', component: AttributeDirectiveComponent},
  { path: 'struct-directive', component: StructuralDirectiveComponent},
  { path: 'dependency-injection', component: DependencyInjectionComponent},
  { path: 'angular-routing', component: AngularRoutingComponent,
    children : [ 
      { path : 'ar-child-route-a', component: ArChildRouteAComponent, canActivate: [SampleGuardGuard]} ,
      { path : 'ar-child-route-b', component: ArChildRouteBComponent, canActivate: [SampleGuardGuard]} ,
    ]
  },
  { path: 'router-data/:data', component: RouterDataComponent},
  { path: 'template-form', component: TemplateFormComponent},
  { path: 'reactive-form', component: ReactiveFormComponent},
  { path: 'test', component: TestParentComponent },
  { path: '**', component: GettingStartedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

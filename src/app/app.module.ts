import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GettingStartedComponent } from './topics/getting-started/getting-started.component';
import { AngularCompComponent } from './topics/angular-comp/angular-comp.component';
import { LifecycleHooksComponent } from './topics/lifecycle-hooks/lifecycle-hooks.component';
import { TextInterpolationComponent } from './topics/text-interpolation/text-interpolation.component';
import { ParentCcComponent } from './topics/component-communication/parent-cc/parent-cc.component';
import { ChildCcComponent } from './topics/component-communication/child-cc/child-cc.component';
import { ChildOutputComponent } from './topics/component-communication/child-output/child-output.component';
import { ChildViewchildComponent } from './topics/component-communication/child-viewchild/child-viewchild.component';
import { ComponentStylingComponent } from './topics/component-styling/component-styling.component';
import { NgContentParentComponent } from './topics/ng_content/ng-content-parent/ng-content-parent.component';
import { NgContentChildComponent } from './topics/ng_content/ng-content-child/ng-content-child.component';
import { TemplateStatComponent } from './topics/template-stat/template-stat.component';
import { TestParentComponent } from './topics/test-comp/test-parent/test-parent.component';
import { TestChildComponent } from './topics/test-comp/test-child/test-child.component';
import { PipeComponent } from './topics/pipe/pipe.component';
import { WeightPipePipe } from './topics/pipe/weight-pipe.pipe';
import { PropertyBindingComponent } from './topics/property-binding/property-binding.component';
import { EventBindingComponent } from './topics/event-binding/event-binding.component';
import { ParentCComponent } from './topics/two-way-binding/parent-c/parent-c.component';
import { ChildCComponent } from './topics/two-way-binding/child-c/child-c.component';
import { TemplateVariableComponent } from './topics/template-variable/template-variable.component';

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    AngularCompComponent,
    LifecycleHooksComponent,
    TextInterpolationComponent,
    ParentCcComponent,
    ChildCcComponent,
    ChildOutputComponent,
    ChildViewchildComponent,
    ComponentStylingComponent,
    NgContentParentComponent,
    NgContentChildComponent,
    TemplateStatComponent,
    TestParentComponent,
    TestChildComponent,
    PipeComponent,
    WeightPipePipe,
    PropertyBindingComponent,
    EventBindingComponent,
    ParentCComponent,
    ChildCComponent,
    TemplateVariableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

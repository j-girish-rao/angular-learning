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

@NgModule({
  declarations: [
    AppComponent,
    GettingStartedComponent,
    AngularCompComponent,
    LifecycleHooksComponent,
    TextInterpolationComponent,
    ParentCcComponent,
    ChildCcComponent,
    ChildOutputComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

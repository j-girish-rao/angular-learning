import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnInit, OnDestroy {

  intervalTimer : any ;

  ngOnInit(): void {
    this.intervalTimer = setInterval(() => {
      console.log('Hello from ngOnInit()');
    });
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalTimer);
  }

}

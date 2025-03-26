import { 
  Component, 
  OnChanges,
  OnInit, 
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy 
} from '@angular/core';

@Component({
  selector: 'app-lifecycle-hooks',
  templateUrl: './lifecycle-hooks.component.html',
  styleUrls: ['./lifecycle-hooks.component.scss']
})
export class LifecycleHooksComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  ngOnChanges(): void {
    console.log('Hello from ngOnChanges()');
  }

  ngOnInit(): void {
    console.log('Hello from ngOnInit()');
  }

  ngDoCheck(): void {
    console.log('Hello from ngDoCheck()');
  }
  
  ngAfterContentInit(): void {
    console.log('Hello from ngAfterContentInit()');
  }
  
  ngAfterContentChecked(): void {
    console.log('Hello from ngAfterContentChecked()');
  }
  
  ngAfterViewInit(): void {
    console.log('Hello from ngAfterViewInit()');
  }
  
  ngAfterViewChecked(): void {
    console.log('Hello from ngAfterViewChecked()');
  }

  ngOnDestroy(): void {
    console.log('Hello from ngOnDestroy()');
  }
}
import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-dependency-injection',
  templateUrl: './dependency-injection.component.html',
  styleUrls: ['./dependency-injection.component.scss']
})
export class DependencyInjectionComponent implements OnInit {

  constructor(
    private _logService: LogService, 
    private readonly _render: Renderer2,
    private _host: ElementRef
  ) { }

  ngOnInit(): void {
    this._logService.logInfo('Log service has been injected');
    this._render.setStyle(this._host.nativeElement,'color','green');
  }

  logCustomMessage() {
    let message = 'This is hi from depedency injection component.';
    this._logService.logInfo(message);
    alert('Info :: ' + message);
  }

  logErrorMessage() {
    let message = 'This is error message from depedency injection component.';
    this._logService.logCritical(message);
    alert('Error :: ' + message);
  }
}

import { Directive, ElementRef, HostListener, Input } from "@angular/core"; 

@Directive({
    selector: '[highlightText]'
})
export class HighlightDirective {
    
    element : ElementRef<any>;
    @Input() highlightText = '';

    constructor(ele : ElementRef){
        this.element = ele;
        this.element.nativeElement.style.fontSize = '17px';
        this.element.nativeElement.style.color = 'yellow';
        this.element.nativeElement.style.fontWeight = '600';
        this.element.nativeElement.style.border = '1px solid blue';
    }

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightText);
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight('');
    }

    private highlight(color : string){
        this.element.nativeElement.style.background = color;
    }
}
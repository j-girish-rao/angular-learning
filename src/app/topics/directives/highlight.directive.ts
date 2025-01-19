import { Directive, ElementRef, HostListener,Input } from "@angular/core"; 

@Directive({
    selector: '[highlightText]'
})

export class HighlightDirective {
    
    element : ElementRef<any>;
    @Input() highlightText = '';

    constructor(ele : ElementRef){
        this.element = ele;
        this.element.nativeElement.style.fontSize = '15px';
        this.element.nativeElement.style.color = 'red';
        this.element.nativeElement.style.fontWeight = '800';
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
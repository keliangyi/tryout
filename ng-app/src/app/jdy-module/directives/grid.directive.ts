import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGrid]'
})
export class GridDirective implements OnInit {

    constructor(private elr: ElementRef, private rd2: Renderer2) { }

    ngOnInit() {
        console.log(this.elr.nativeElement);

        this.rd2.setStyle(this.elr.nativeElement, 'display', 'flex')
        // this.rd2.setStyle(this.elr.nativeElement, 'grid-template-columns', 'repeat(3,1fr)')
        // this.rd2.setStyle(this.elr.nativeElement, 'grid-template-areas', `'img' 'title'`)
    }
}

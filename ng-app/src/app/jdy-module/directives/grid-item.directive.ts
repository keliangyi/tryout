import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {

    @Input() appGridItem: string = '100px'
    @Input() fitMode: string = 'none'
    @Input() @HostBinding('style.text-align') ta = 'left'
    constructor(private elr: ElementRef, private rd2: Renderer2) { }

    ngOnInit() {
        console.log(this.elr.nativeElement, this);

        this.rd2.setStyle(this.elr.nativeElement, 'flex-basis', this.appGridItem)
        this.rd2.setStyle(this.elr.nativeElement, 'object-fit', this.fitMode)
    }

    @HostListener('click', ['$event.target'])
    handleClick(ev: any) {
        console.log(ev.innerHTML);

    }
}

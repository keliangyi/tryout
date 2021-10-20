import { Directive, ElementRef, HostBinding, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
    selector: '[appFlexItem]'
})
export class FlexItemDirective implements OnInit {

    @Input() appFlexItem: string | undefined
    constructor(private elf: ElementRef<Element>, private rd2: Renderer2) { }

    ngOnInit() {
        this.rd2.setStyle(this.elf.nativeElement, 'flex', this.appFlexItem || '1')
    }

}

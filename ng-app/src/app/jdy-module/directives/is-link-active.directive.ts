import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
    selector: '[appIsLinkActive]'
})
export class IsLinkActiveDirective {
    @HostBinding('class.active') @Input() appIsLinkActive: boolean = false
    constructor() { }

}

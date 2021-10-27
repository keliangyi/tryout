import { Component, HostBinding, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ng-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.less'],
    host: {
        '[class.ng-card]': "true"
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent implements OnInit {

    @Input()
    @HostBinding('class.ng-card-hoverable') hoverable = false

    @Input()
    @HostBinding('class.ng-card-boxShadow') boxShadow = false




    constructor() { }

    ngOnInit(): void {

    }

}

import { Component, HostBinding, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'ng-card-title',
    template: `
        <div>
            <ng-content></ng-content>
        </div>
    `,
    styleUrls: ['./card.component.less'],
    host: {
        '[class.ng-card-title]': "true"
    },
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardTitleComponent implements OnInit {





    constructor() { }

    ngOnInit(): void {

    }

}

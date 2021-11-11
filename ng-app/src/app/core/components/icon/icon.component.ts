import { ChangeDetectionStrategy, Component, Input, OnInit, } from '@angular/core';
const url = '//at.alicdn.com/t/font_2878081_e4om3xuvg.js'

const scripts = new Set<string>()

const createIconByIconfont = (url: string) => {
    if (!scripts.has(url) && url) {
        const script = document.createElement('script')
        script.setAttribute('src', url)
        script.setAttribute('data-namespace', url)
        scripts.add(url)
        document.body.appendChild(script)
    }
}

createIconByIconfont(url)

@Component({
    selector: 'ng-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        '[class.ng-icon]': "true"
    },
    // encapsulation: ViewEncapsulation.None
})
export class IconComponent implements OnInit {



    @Input() public type: string | undefined

    constructor() {


    }

    ngOnInit(): void {

    }

}

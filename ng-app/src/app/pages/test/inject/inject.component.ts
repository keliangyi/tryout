import { Component, Inject, OnInit } from '@angular/core';
import { appVersion } from 'src/app/app.module';

@Component({
    selector: 'app-inject',
    templateUrl: './inject.component.html',
    styleUrls: ['./inject.component.less']
})
export class InjectComponent implements OnInit {

    constructor(@Inject(appVersion) public version: string) { }

    ngOnInit(): void {
        console.log(this.version);
    }

}


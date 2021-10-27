import { Component, OnInit, } from '@angular/core';;
import { StoreService } from 'src/app/services/store.service';


interface Account {
    name: string
    age: number
}

@Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.less']
})
export class AccountComponent implements OnInit {




    constructor(private store: StoreService) { }

    ngOnInit(): void {

    }



}

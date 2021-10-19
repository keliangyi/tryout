import { Component, OnInit } from '@angular/core';
import { Confirmable, Emoji } from 'src/app/jdy-module';

@Component({
    selector: 'app-decorator',
    templateUrl: './decorator.component.html',
    styleUrls: ['./decorator.component.less']
})
export class DecoratorComponent implements OnInit {

    @Emoji() name: string = 'maomao'

    constructor() { }

    ngOnInit(): void { }

    changeName() {
        this.name = this.name.includes('jack') ? 'maomao' : 'jack'
    }

    @Confirmable('确认要提交吗？')
    showConfirmable() {
        console.log('这个答案是要在装饰器的confirm确认过后才可以看到', this)
    }
}

import { Component, OnInit } from '@angular/core';
import produce, { immerable } from "immer"


class Clock {
    [immerable] = true

    constructor(public hour: number, public minute: number) {

    }

    get time() {
        return `${this.hour}:${this.minute}`
    }

    tick() {
        const c = produce(this, draft => {
            draft.minute++
        })
        console.log(c);

        return this
    }
}

const clock1 = new Clock(12, 10)
const clock2 = clock1.tick()
console.log(clock1.time) // 12:10
console.log(clock2.time) // 12:11
console.log(clock2 instanceof Clock) // true

class User {

    [immerable] = true

    public state = {
        age: 15,
        obj: {
            o: 0,
            b: 1,
            j: 2,
            sb: '001'
        }


    }

    constructor(public name: string) {

    }


}

@Component({
    selector: 'app-immer',
    templateUrl: './immer.component.html',
    styleUrls: ['./immer.component.css']
})
export class ImmerComponent implements OnInit {

    constructor() { }

    public user = new User('maomao')
    public obj = this.user.state

    clock1 = new Clock(12, 10)
    clock2?: Clock



    baseState = [
        {
            title: "Learn TypeScript",
            done: true
        },
        {
            title: "Try Immer",
            done: false
        }
    ]

    newState: { title: string, done: boolean }[] = []


    ngOnInit() {

    }

    changeName() {
        this.user.name = 'sn'
        this.user.state.obj.sb = Math.random().toString()
    }

    changeObj() {
        this.user.state.obj = produce(this.user.state.obj, d => {
            d.sb = 'fa'
        })
    }

    tick() {
        this.clock2 = this.clock1.tick()
    }

    add() {
        this.baseState = produce(this.baseState, draft => {
            draft.push({
                title: Math.random().toString() + this.user.name + '__' + this.user.state.obj.sb,
                done: false
            })
        })
    }

    addCopy() {
        this.newState = produce(this.newState, draft => {
            draft.push({
                title: Math.random().toString() + this.user.name + this.user.state.obj.sb,
                done: false
            })
        })
    }

    copy() {
        this.newState = this.baseState
    }

}

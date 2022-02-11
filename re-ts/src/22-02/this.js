
const sayName1 = () => {
    console.log('sayName1', this.name)
}

function sayName() {
    console.log('sayName', this.name)
}

const user = {
    name: "maomap",
    sayName,
    sayName1
}

class UserClass {
    constructor(name) {
        this.name = name
    }
    method() {
        const sayName1 = () => {
            console.log('sayName1', this.name)
        }
        sayName1()
    }
}

const m = new UserClass('毛毛')

m.method()




const sayName1 = () => {
    //@ts-expect-error
    console.log('sayName1', this.name)
}

function sayName() {
    //@ts-expect-error
    console.log('sayName', this.name)
}

const user = {
    name: "maomap",
    sayName,
    sayName1
}

user.sayName()
user.sayName1()

class UserClass {
    constructor(public name: string) {

    }
    sayName() {
        console.log('class sayName', this.name)
    }

    sayName1 = () => {
        console.log('class sayName', this.name)
    }
}

const m = new UserClass('毛毛')

m.sayName()
m.sayName1()

function arrawWrapper() {
    //@ts-expect-error
    console.log('arrawWrapper', this);
    const d = user.sayName1
    function s() {
        user.sayName1()
    }
    d()
}


arrawWrapper.call({ name: 'wrap' },)
export default user
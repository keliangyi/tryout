interface PeopleType {
	name: string;
	eat(): void;
}

abstract class People implements PeopleType {
	public name = "";
	public abstract eat(): void;
}

class CNpeople extends People {
	eat(): void {
		console.log("我们用筷子吃饭");
	}
}
class UKpeople extends People {
	eat(): void {
		console.log("We eat food with forks");
	}
}
class INpeople extends People {
	eat(): void {
		console.log("We eat food with hand");
	}
}

let person: People = new CNpeople();
person.eat();
person = new UKpeople();
person.eat();
person = new INpeople();
person.eat();

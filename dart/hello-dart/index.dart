import 'dart:math';

void main() {
  var num1 = 45;
  var num2 = 44;
  print(num1 + num2);
  testMath();
  print(maomao.name);
  maomao.sayHello();
}

final name = 'name';
var str = 'maomao';
int count = 10;

var imgs = {name: "ad.png", "url": './imgs'};

int sum(int a, int b) {
  return a + b;
}

var fn = (int a) => a * 10;
var intValue = Random().nextInt(10);
void testMath() {
  print(intValue);
}

class Person {
  String name;
  int age;
  Person(this.name, this.age) {
    print('constructor');
  }

  void sayHello() {
    print('hello my name is ${this.name}');
  }
}

var maomao = Person('毛毛', 18);

import 'dart:math';

void main(List<String> args) {
  print(args);
  testList();
}

void testString() {
  var name = 'maomao';
  int age = 15;

  double price = 68.6;

  final String d = '';
  const bar = 1000000;
  const n1 = 5 * bar;
  if (d.isEmpty) {
    print('d is empty');
  }
  var unicorn;
  assert(unicorn == null);
  print(
      'name is $name, age is $age, age plus price equal to ${age + price}, price type is ${price.runtimeType}');
}

void testVeriable() {
  const t1 = const Thing('mao');
  const t2 = const Thing('ma1o');

  const list = [1, 2, 3, 1];
  var se = Set.from(list).toList();
  var con = const [1, 2];
}

void testList() {
  var n = Random().nextInt(10);
  var nav = ['Home', 'Furniture', 'Plants', if (n > 2) 'Outlet'];
  nav = ['foo',...nav];
  print(nav.last);
}

bool isEmpty() {
  return false;
}

class Thing {
  final String name;
  const Thing(this.name);
}

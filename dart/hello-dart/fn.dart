import 'dart:html';

void main(List<String> args) {}

void main1(List<String> args) {
  kwParams('maomao', weight: 18);
  var addTwo = add(2);
  final res = addTwo(5);
  print(res);

  runCb((String msg) {
    print(msg);
  }, '这是一个匿名的函数');

  loop();
}

var fn = () {
  const a = 12;
  print(a);
};

var fn1 = () => print(123);

const ad = ['a'];
void idxParams(String name, [int age = 18, List<String> weight = ad]) {
  print(
      '可选位置参数：my name is $name, im $age years old, and weight is $weight, 当不指定类型时可以不给默认值，系统默认为null');
}

void kwParams(String name, {int age: 45, weight}) {
  print(
      '关键字参数：my name is $name, im $age years old, and weight is $weight, 当不指定类型时可以不给默认值，系统默认为null');
}

// 函数式编程

Function add(int x) {
  return (int y) {
    return x + y;
  };
}

void runCb(Cb cb, String message) {
  cb(message);
  var a = 1;
  if (a >= 1) {
    var b = 2;
    print('a === ${a}');
  }
}

typedef void Cb(String msg);
typedef Type Name(params);

void loop() {
  const arr = ['a', 'b', 'c', 'd'];
  const obj = {"name": 'maomao', "age": 15};
  for (var i in arr) {
    print('arr:${i}');
  }
  obj.forEach((key, value) {
    print('object:${key} === $value');
  });
}

var p = new Point(15, 45);

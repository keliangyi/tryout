void main(List<String> args) {
  final p1 = Point.origin(1, 3)..x = 15 ..y=15 ..showResult();

  print(p1);
}

class Person {
  String name;
  int age;

  Person(this.name, this.age);

  Person.fromMap(Map<String, dynamic> map)
      : name = '',
        age = 1 {
    this.name = map['name'];
    this.age = map['age'];
  }

  @override
  String toString() {
    return '$name,$age';
  }
}

const double xOrigin = 0;
const double yOrigin = 0;

class Point {
  double x = 0;
  double y = 0;

  Point(this.x, this.y);

  Point.origin(double x, double y)
      : x = xOrigin,
        y = yOrigin {
    this.x = x;
    this.y = y;
  }

  Set<double> showResult(){
      return {x,y};
  }

  @override
  String toString() {
    return "$x,$y";
  }
}

import React from "react";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import TopBar from "../TopBar";

const Dart = () => {
  return (
    <>
    <Helmet>
        <title>Dart Programing tutorials with examples</title>
        <meta
          name="description"
          content="learn dart language with example and in short theory"
        />
      </Helmet>
      <TopBar notify={true} bool={true} txt={"Learn Dart with examples"} />
      <header>
        <h2>Dart programming tutorial for beginners</h2>
        <p>
          Dart is most powerful language for app development. It is similar to
          some of the well known programming languages like c, c# etc.
        </p>
      </header>
      <hr></hr>
      <section style={{ textAlign: "left", paddingLeft: 15, paddingRight: 15 }}>
        <h3>Hello World Program in Dart</h3>
        <p>
          Every app has a <code>main()</code> function. To display text on the
          console, you can use the <code>print()</code> function:
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`void main() {
   print('Hello, World!');
}`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Variables in Dart</h3>
        <p>
          Variable declaration is very and similar to other programming
          languages.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`var name = 'India';
var year = 1977;
var antennaDiameter = 3.7;
var flybyObjects = ['Jupiter', 'Saturn', 'Uranus', 'Neptune'];
var image = {
  'tags': ['saturn'],
  'url': '//path/to/saturn.jpg'
};`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Control statements in dart</h3>
        <p>Dart supports the usual control flow statements</p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`if (year >= 2001) {
  print('21st century');
} else if (year >= 1901) {
  print('20th century');
}

for (var object in flybyObjects) {
  print(object);
}

for (int month = 1; month <= 12; month++) {
  print(month);
}

while (year < 2016) {
  year += 1;
}`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Functions in Dart</h3>
        <p>
          Dart functions are like most other programming language<br></br>
          Official documentation recommend specifying the types of each
          function’s arguments and return value:
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`int add(int a,int b){
     return a+b;
 }`}
        </SyntaxHighlighter>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`int fibonacci(int n) {
  if (n == 0 || n == 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
var sum = add(10,10);
var result = fibonacci(20);`}
        </SyntaxHighlighter>
        <p>
          If functions contain a single statement we can use =&gt; (arrow)
          syntax for declaration
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`flybyObjects.where((name) => name.contains('turn')).forEach(print);`}
        </SyntaxHighlighter>
        <p>
          Besides showing an anonymous function (the argument to where()), this
          code shows that you can use a function as an argument: the top-level
          print() function is an argument to forEach().
        </p>
        <br></br>
        <h3>Comments in Dart</h3>
        <p>
          We can use // for single line comment and /* for multiline comment and
          /// for documentation comment.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`// This is a normal, one-line comment.

/// This is a documentation comment, used to document libraries,
/// classes, and their members. Tools like IDEs and dartdoc treat
/// doc comments specially.

/*It is a multi line comment.
int dart programming language */`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Imports in Dart</h3>
        <p>We use import for accessing APIs defined in other libraries </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`// Importing core libraries
import 'dart:math';

// Importing libraries from external packages
import 'package:test/test.dart';

// Importing files
import 'path/to/my_other_file.dart';`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Classes in Dart</h3>
        <p>
          Here’s an example of a class with three properties, two constructors,
          and a method. One of the properties can’t be set directly, so it’s
          defined using a getter method (instead of a variable).
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`class Spacecraft {
  String name;
  DateTime launchDate;

  // Constructor, with syntactic sugar for assignment to members.
  Spacecraft(this.name, this.launchDate) {
    // Initialization code goes here.
  }

  // Named constructor that forwards to the default one.
  Spacecraft.unlaunched(String name) : this(name, null);

  int get launchYear =>
      launchDate?.year; // read-only non-final property

  // Method.
  void describe() {
    print('Spacecraft: $name');
    if (launchDate != null) {
      int years =
          DateTime.now().difference(launchDate).inDays ~/
              365;
      print('Launched: $launchYear ($years years ago)');
    } else {
      print('Unlaunched');
    }
  }
}`}
        </SyntaxHighlighter>
        <p>You might use the Spacecraft class like this:</p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`var voyager = Spacecraft('Voyager I', DateTime(1977, 9, 5));
voyager.describe();

var voyager3 = Spacecraft.unlaunched('Voyager III');
voyager3.describe();`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Inheritance in Dart</h3>
        <p>Dart has single inheritance.</p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`class Orbiter extends Spacecraft {
  double altitude;
  Orbiter(String name, DateTime launchDate, this.altitude)
      : super(name, launchDate);
}`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Mixins in Dart</h3>
        <p>
          Mixins are a way of reusing code in multiple class hierarchies. The
          following class can act as a mixin:
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`class Piloted {
  int astronauts = 1;
  void describeCrew() {
    print('Number of astronauts: $astronauts');
  }
}`}
        </SyntaxHighlighter>
        <p>
          To add a mixin’s capabilities to a class, just extend the class with
          the mixin.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`class PilotedCraft extends Spacecraft with Piloted {
  // ···
}`}
        </SyntaxHighlighter>
        <p>
          PilotedCraft now has the astronauts field as well as the
          describeCrew() method.
        </p>
        <br></br>
        <h3>Interfaces and abstract classes in dart</h3>
        <p>
          Dart has no interface keyword. Instead, all classes implicitly define
          an interface. Therefore, you can implement any class.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`class MockSpaceship implements Spacecraft {
    // ···
  }`}
        </SyntaxHighlighter>
        <p>
          You can create an abstract class to be extended (or implemented) by a
          concrete class. Abstract classes can contain abstract methods (with
          empty bodies).
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`abstract class Describable {
    void describe();
  
    void describeWithEmphasis() {
      print('=========');
      describe();
      print('=========');
    }
  }`}
        </SyntaxHighlighter>
        <p>
          Any class extending Describable has the describeWithEmphasis() method,
          which calls the extender’s implementation of describe().
        </p>
        <br></br>
        <h3>Async in Dart</h3>
        <p>
          Avoid callback hell and make your code much more readable by using
          async and await.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`const oneSecond = Duration(seconds: 1);
// ···
Future<void> printWithDelay(String message) async {
  await Future.delayed(oneSecond);
  print(message);
}`}
        </SyntaxHighlighter>
        <p>The method above is equivalent to:</p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`Future<void> printWithDelay(String message) {
  return Future.delayed(oneSecond).then((_) {
    print(message);
  });
}`}
        </SyntaxHighlighter>
        <p>
          As the next example shows, async and await help make asynchronous code
          easy to read.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`Future<void> createDescriptions(Iterable<String> objects) async {
  for (var object in objects) {
    try {
      var file = File('$object.txt');
      if (await file.exists()) {
        var modified = await file.lastModified();
        print(
            'File for $object already exists. It was modified on $modified.');
        continue;
      }
      await file.create();
      await file.writeAsString('Start describing $object in this file.');
    } on IOException catch (e) {
      print('Cannot create description for $object: $e');
    }
  }
}`}
        </SyntaxHighlighter>
        <p>
          You can also use async*, which gives you a nice, readable way to build
          streams.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`Stream<String> report(Spacecraft craft, Iterable<String> objects) async* {
  for (var object in objects) {
    await Future.delayed(oneSecond);
    yield '\${craft.name} flies by $object';
  }
}`}
        </SyntaxHighlighter>
        <br></br>
        <h3>Exceptions in Dart</h3>
        <p>To raise an exception, use throw:</p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`if (astronauts == 0) {
  throw StateError('No astronauts.');
}`}
        </SyntaxHighlighter>
        <p>
          To catch an exception, use a try statement with on or catch (or both):
        </p>
        <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
          {`try {
  for (var object in flybyObjects) {
    var description = await File('$object.txt').readAsString();
    print(description);
  }
} on IOException catch (e) {
  print('Could not describe object: $e');
} finally {
  flybyObjects.clear();
}`}
        </SyntaxHighlighter>
        <p>
          Note that the code above is asynchronous; try works for both
          synchronous code and code in an async function.
        </p>
      </section>
      <hr></hr>
      <footer>
        <p>Powered By StudentMitra</p>
        <p>Official dart documentation used in this tutorial</p>
      </footer>
    </>
  );
};

export default Dart;

{
  /* <SyntaxHighlighter language="dart" style={materialDark} showLineNumbers>
 {``}
</SyntaxHighlighter> */
}

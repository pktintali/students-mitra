import React from "react";
import { Helmet } from "react-helmet";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const DTF = () => {
  return (
    <>
      <Helmet>
        <title>
          Easy method to implement dark theme in your flutter app 2021.
        </title>
      </Helmet>
      <header>
        <img
          height={window.innerHeight / 3}
          alt="Flutter dark theme logo"
          src="https://flutter.dev/images/flutter-logo-sharing.png"
        ></img>
        <h1>Easy way to implement dark theme in your flutter app</h1>
      </header>
      <section style={{ padding: 20, textAlign: "left" }}>
        <p>
          Now Days Dark themes are everywhere then why not in your flutter app
          🤔
        </p>
        <b>Let' Implement</b>
        <br></br>
        <p>
          We are going to implement dark theme in a simple flutter app using
          darkTheme property of MaterialApp.
        </p>
      </section>
      <section style={{ paddingLeft: 20, textAlign: "left" }}>
        <b>Index -</b>
        <ul>
          <li>Initial UI Setup</li>
          <li>Define Dark and Light themes</li>
          <li>Use these themes in MaterialApp</li>
          <li>Final Code</li>
        </ul>
      </section>
      <br></br>
      <section style={{ paddingLeft: 20, textAlign: "left" }}>
        <h2>Initial UI Setup</h2>
        <p>
          Create a simple flutter app with the following code or you can create
          your own ui.
        </p>
        <SyntaxHighlighter language="dart" style={materialDark}>
          {`import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  TextStyle _style = TextStyle(fontSize: 55);
  bool _isDark = false;

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
  debugShowCheckedModeBanner: false,
      title: 'Flutter Theme',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Theme Demo'),
          centerTitle: true,
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Row(
                children: [
                  Text('Happy', style: _style),
                ],
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 40),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('New', style: _style),
                  ],
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Text('Year', style: _style),
                ],
              ),
              Text('2021',
                  style: _style.copyWith(
                    color: Colors.deepOrange,
                    fontWeight: FontWeight.bold,
                  )),
              Padding(
                padding: const EdgeInsets.only(top: 80),
                child: CupertinoSwitch(
                  value: _isDark,
                  onChanged: (v) {
                    setState(() {
                      _isDark = !_isDark;
                    });
                  },
                ),
              ),
              Text('Dark'),
            ],
          ),
        ),
      ),
    );
  }
}`}
        </SyntaxHighlighter>
        <h2>Define Dark and Light themes</h2>
        <SyntaxHighlighter language="dart" style={materialDark}>
          {`ThemeData _light = ThemeData.light().copyWith(
    primaryColor: Colors.green,
  );
  ThemeData _dark = ThemeData.dark().copyWith(
    primaryColor: Colors.blueGrey,
  );`}
        </SyntaxHighlighter>
        <h2>Use these themes in MaterialApp</h2>
        <SyntaxHighlighter language="dart" style={materialDark}>
          {`darkTheme: _dark,
theme: _light,
themeMode: _isDark ? ThemeMode.dark : ThemeMode.light,`}
        </SyntaxHighlighter>
        <h2>Final Code</h2>
        <SyntaxHighlighter language="dart" style={materialDark}>
          {`import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  TextStyle _style = TextStyle(fontSize: 55);
  bool _isDark = false;
  ThemeData _light = ThemeData.light().copyWith(
    primaryColor: Colors.green,
  );
  ThemeData _dark = ThemeData.dark().copyWith(
    primaryColor: Colors.blueGrey,
  );
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      darkTheme: _dark,
      theme: _light,
      themeMode: _isDark ? ThemeMode.dark : ThemeMode.light,
      debugShowCheckedModeBanner: false,
      title: 'Flutter Theme',
      home: Scaffold(
        appBar: AppBar(
          title: Text('Flutter Theme Demo'),
          centerTitle: true,
        ),
        body: Padding(
          padding: const EdgeInsets.all(8.0),
          child: Column(
            children: [
              Row(
                children: [
                  Text('Happy', style: _style),
                ],
              ),
              Padding(
                padding: const EdgeInsets.symmetric(vertical: 40),
                child: Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    Text('New', style: _style),
                  ],
                ),
              ),
              Row(
                mainAxisAlignment: MainAxisAlignment.end,
                children: [
                  Text('Year', style: _style),
                ],
              ),
              Text('2021',
                  style: _style.copyWith(
                    color: Colors.deepOrange,
                    fontWeight: FontWeight.bold,
                  )),
              Padding(
                padding: const EdgeInsets.only(top: 80),
                child: CupertinoSwitch(
                  value: _isDark,
                  onChanged: (v) {
                    setState(() {
                      _isDark = !_isDark;
                    });
                  },
                ),
              ),
              Text('Dark'),
            ],
          ),
        ),
      ),
    );
  }
}`}
        </SyntaxHighlighter>
      </section>
    </>
  );
};

export default DTF;

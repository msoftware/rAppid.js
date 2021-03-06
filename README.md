# rAppid.js - the way you want to do it.
## Introduction

rAppid.js is a declarative javascript web application framework for rapid web application development. It allows you to use XML to define the structure of the application UI and to configure components like datasources or routes. The XML (XAML) gets translated to javascript components during runtime which will render itself as HTML5 DOM elements. This enables a rapid development of application.

Visit http://www.rappidjs.com for quick start and documentation.

## Development

rAppid.js is currently under rapid development. The core features and life cycles are defined, but might be modified.
For more information and documentation of <rAppid.js /> lookup our project home http://www.rappidjs.com.

## Features 
* Dependency loading (via requirejs)
* Combination of XAML-Components and HTML5
* Code behind + XML
* Model-View Binding, Two-Way Binding, Function Binding
* Dependency Injection
* Inline JavaScript usage in XAML
* Virtual / Computed Attributes
* Active Record Pattern for Models
* Single Instance Model Stores
* Abstract data access layer
* Datasources with Processors and Format Processors (RestDataSource, LocalStorageDataSource, ...)
* i18n
* Server side rendering with rAppid.js-server for SEO
* optimize build

## Installation
The installation of rAppid.js is simply done via [npm](http://npmjs.org/).

```
npm install rAppid.js -d -g
```

## Command-line interface
rAppid.js comes with a command-line interface to setup projects, install packages and updated modules.
Open a terminal and type 

```
rappidjs
```

to see the available commands. Type 

```
rappidjs help <command> 
```

to see the usage of the command.


For a guided creation of an application or library project execute
```
rappidjs interactive
```

## Setup an rAppid.js application project 
```
rappidjs create app <ApplicationName> [<TargetDirectory>]
```

The ```create``` command will setup the directory structure and install the required modules, so that you can concentrate on developing application. Under the target directory there will be an directory named ```public```. Open the ```index.html``` file in your Browser or even better configurate the public directory as website root in your preferred web-server.

*Note: If you want to test your application without configuring a web-server in a Google Chrome Browser, you have to start Chrome with the follwing parameters ```--disable-web-security```*

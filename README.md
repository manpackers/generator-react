![npm](https://img.shields.io/npm/v/@manpacker/generator-react.svg)
![npm bundle size](https://img.shields.io/bundlephobia/min/@manpacker/generator-react.svg)
![npm](https://img.shields.io/npm/dw/@manpacker/generator-react.svg)
![NPM](https://img.shields.io/npm/l/@manpacker/generator-react.svg)
<br><br>
![nodei.co](https://nodei.co/npm/@manpacker/generator-react.png?downloads=true&downloadRank=true&stars=true)
<br>
# Explain
@manpacker/generator-react is a set of build engine based on [@manpacker/generator](https://www.npmjs.com/package/@manpacker/generator) to build engine package.<br>
Entry file supported file extension <code>js</code> or <code>ts</code><br>
Support for multi-portal file build, Files must be in the build <code>root</code> directory.<br>

# Consult
[@manpacker/generator](https://github.com/manpackers/generator#readme)

# Install
```
npm i @manpacker/generator-react -D
```
# Usage
## CLI
Start the local development environment.
```
manpacker-react server
```
```
manpacker-react server --ic [value] -c [config] --port [number]
```
Construction of production environment engineering project.
```
manpacker-react build
```
```
manpacker-react build --ic [value] -c [config]
```

## .manpackeric
Default root file name: <code>.manpackeric</code><br>
Configuration item description:<br>
Expand: <br>

|name|type|value|description|
|----|----|-----|-----------|
|isReactProvide|boolean|default: true|Automatically provide <code>React</code> <code>ReactDOM</code> references|

> isReactProvide
```
{ isReactProvide: false }
```
Every file need import React from 'react'
Every file need import ReactDOM from 'react-dom'

## Npm
[link](https://www.npmjs.com/package/@manpacker/generator-react)



# TechInterview


This project is a super simple boilerplate that recreates in a light way the stack of our actual frontend project.

The three major elements are described below.

## Nx

The project is generated with Nx with the command 
```
npx create-nx-workspace tech-interview --preset=angular
```

To have a better understanding why we use Nx to generate our project's architecture, see this short but very instructive video:
https://www.youtube.com/watch?v=cXOkmOy-8dk

## NGXS Persistence API 

NGXS Persistence API is an extension based on the Repository Design Pattern that offers a gentle introduction to NGXS by simplifying management of entities or plain data while reducing the amount of explicitness.

Simply put, this extension of NGXS allows us to write much less code to handle our store and offer us many powerfull tools to handle entities collection.

The doc is tiny, clear and effective. Reading it before the technical interview is pretty much recommended.

https://github.com/Angular-RU/angular-ru-sdk/tree/master/packages/ngxs#table-of-contents

## Rxjs

RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. This project is a rewrite of Reactive-Extensions/RxJS with better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface

https://rxjs.dev/

# Starting the project
```aidl
npm i
nx serve
```

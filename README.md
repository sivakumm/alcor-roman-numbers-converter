# Roman Numbers Converter with TDD in Angular

In [ALCOR academy](https://alcor.academy/)'s WALKING module, the focus was set on test driven development (TDD).
For the presentation day, the question _"How good are the TDD concepts and ideas to develop in a less OOP environment like Angular?"_ was tried to be answered using this project.

## This Project

This application takes a regular arabic number as input and displays the corresponding roman number.
> This was a kata during Lesson 3, which was recreated in Angular instead of Java for the purpose of answering the raised question.

## Project Setup

### Run on your computer

Simply install needed dependencies with:

```shell
npm ci
```

Then start the application locally using:

```shell
npm start
```

The application will be running on [http://localhost:4200](http://localhost:4200).

## How this project was created

This is how this project was initialized:

1. Generate a new Angular Application with `ng new roman-numbers`.
2. Remove all content from [`app.component.html`](src/app/app.component.html)
3. Remove content of [`class AppComponent`](src/app/app.component.ts) and unnecessary imports
4. Open test file [`app.component.spec.ts`](src/app/app.component.spec.ts)  and remove `should render title` test.

## Conclusion to TDD in Angular

### Nice about TDD in Angular

- Naming of tests are meant to be formulated the way `it should ...`
- Executes tests in random order
- Functionality of a method like `convertToRoman` can be tested the same way as in OOP languages like Java
- The execution time is very fast, so it does not prevent TDD
- The application does not even need to be started. It is mostly needed for styling at the end.

### Improvable about TDD in Angular

- Other than in Java, the TestBed setup tempting the developer to not write tests for behaviour of the application rather than details
- Selecting an element via `querySelector` returns the Element or `null`, if it is absent.
  To verify if it is available, it has to be tested with `expect(element).not.toBeNull()` or `expect(element).toBeTruthy()`.
  None of them is beautiful regarding reading the test expectations. Note: `expect(element).toBeDefined()` won't work, as it is _not_ `undefined`.
- How detailed should the UI be tested? What is considered as _business logic_? Not that easy to answer.
- When an Element is selected via `querySelector`, it should be validated via `if(!element) { fail('Element not found'); }`. Looks kind of ugly.
- `@CsvSource` looks cleaner than `[{...}].forEach(...)` approach.
- Wrapping primitives in own classes, interface or types seems not that useful in TypeScript. No validation or typing enforcement can be done similar to Java.

### Interesting about TDD in general

- Performance is not enforced by TDD. Example: Break out from a `for` or `while` loop, when further calculations are unnecessary. Is this a topic for refactoring?
- I don't like to modify the value given as input to a function. I'd rather copy the input, if I need to modify it.

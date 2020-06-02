# W. W. Norton JS Style Guid #
This guide for writing consistent and aesthetically pleasing Node.js code. It is inspired by what is popular within the community (ESLint, Airbnb), and also features some personal opinions.


## Table of Contents
  1. [Formatting](#formating)
  1. [Naming Conventions](#naming-conventions)
  1. [Types](#types)
  1. [Variables](#variables)
  1. [References](#references)
  1. [Objects](#objects)
  1. [Arrays](#arrays)
  1. [Destructuring](#destructuring)
  1. [Strings](#strings)
  1. [Functions](#functions)
  1. [Arrow Functions](#arrow-functions)
  1. [Classes & Constructors](#classes--constructors)
  1. [Iterators](#iterators)
  1. [Comparison Operators & Equality](#comparison-operators--equality)
  1. [Blocks](#blocks)
  1. [Control Statements](#control-statements)
  1. [Comments](#comments)
  1. [Type Casting & Coercion](#type-casting--coercion)

## Formatting

### 4 spaces for indentation
Use 4 spaces for indenting your code and swear an oath to never mix tabs and spaces â€” a special kind of hell awaits otherwise.

### Newlines
Use UNIX-style newlines (\n), and a newline character as the last character of a file. Windows-style newlines (\r\n) are forbidden inside any repository.

### No trailing white space
Always clean up any trailing white space in your .js files before committing. 

### Use semicolons
According to scientific research, the usage of semicolons is a core value of our community. Consider the points of the opposition, but be a traditionalist when it comes to abusing error correction mechanisms for cheap syntactic pleasures.

### 80 characters per line
Limit your lines to 80 characters. Yes, screens have gotten much bigger over the last few years, but your brain has not. Use the additional room for split screen, your editor supports that, right?

### Use single quotes
Use single quotes, unless you are writing JSON. This helps you separate your objectsâ€™ strings from normal strings.
```javascript
# Right:
var foo = â€˜barâ€™;
# Wrong:
var foo = â€œbarâ€;
```

Opening braces go on the same line, Your opening braces go on the same line as the statement.

```javascript
# Right:
if (true) {
    console.log(â€˜winningâ€™);
}

# Wrong:
if (true) 
{
    console.log(â€˜losingâ€™);
}
```

Also, notice the use of white space before and after the condition statement. What if you want to write â€˜elseâ€™ or â€˜else ifâ€™ along with your â€˜ifâ€™â€¦

```javascript
# Right:
if (true) {
    console.log(â€˜winningâ€™);
} else if (false) {
    console.log(â€˜this is goodâ€™);
} else {
    console.log(â€˜finallyâ€™);
}

# Wrong:
if (true)
{
    console.log(â€˜losingâ€™);
}
else if (false)
{
    console.log(â€˜this is badâ€™);
}
else
{
    console.log(â€˜not goodâ€™);
}
```

### Declare one variable per var statement
Declare one variable per var statement, it makes it easier to re-order the lines.

```javascript
# Right:
var keys = [â€˜fooâ€™, â€˜barâ€™];
var values = [23, 42];
var object = {};

#Wrong:
var keys = [â€˜fooâ€™, â€˜barâ€™],
values = [23, 42],
object = {},
key;
```

**[â¬† back to top](#table-of-contents)**


## Naming Conventions

### Use lowerCamelCase for variables, properties and function names
Variables, properties and function names should use lowerCamelCase. They should also be descriptive. Single character variables and uncommon abbreviations should generally be avoided.

```javascript
# Right:
var adminUser = db.query(â€˜SELECT * FROM users â€¦â€™);

# Wrong:
var admin_user = db.query(â€˜SELECT * FROM users â€¦â€™);
```

### Use UpperCamelCase for class names
Class names should be capitalised using UpperCamelCase.

```javascript
# Right:
function BankAccount() {
}

# Wrong:
function bank_Account() {
}
```

### Use UPPERCASE for Constants
Constants should be declared as regular variables or static class properties, using all uppercase letters.

```javascript
# Right:
var SECOND = 1 * 1000;
function File() {
}
File.FULL_PERMISSIONS = 0777;

# Wrong:
const SECOND = 1 * 1000;
function File() {
}
File.fullPermissions = 0777;
```

**[â¬† back to top](#table-of-contents)**

## Types
### Primitives
When you access a primitive type you work directly on its value.

- `string`
- `number`
- `boolean`
- `null`
- `undefined`
- `symbol`
- `bigint`

```javascript
const foo = 1;
let bar = foo;

bar = 9;

console.log(foo, bar); // => 1, 9
```

- Symbols and BigInts cannot be faithfully polyfilled, so they should not be used when targeting browsers/environments that donâ€™t support them natively.

### Complex: 
When you access a complex type you work on a reference to its value.

- `object`
- `array`
- `function`

```javascript
const foo = [1, 2];
const bar = foo;

bar[0] = 9;

console.log(foo[0], bar[0]); // => 9, 9
```

**[â¬† back to top](#table-of-contents)**

## Variables
### Always use `const` or `let` to declare variables.
'var' is a global variables. We want to avoid using the global namespace. eslint: [`no-undef`](https://eslint.org/docs/rules/no-undef) [`prefer-const`](https://eslint.org/docs/rules/prefer-const)

```javascript
// bad
superPower = new SuperPower();

// good
const superPower = new SuperPower();
```

### Use one `const` or `let` declaration per variable or assignment.
eslint: [`one-var`](https://eslint.org/docs/rules/one-var.html)

> IMPORTANCE: Itâ€™s easier to add new variable declarations this way, and you never have to worry about swapping out a `;` for a `,` or introducing punctuation-only diffs. You can also step through each declaration with the debugger, instead of jumping through all of them at once.

```javascript
// bad
const items = getItems(),
    goSportsTeam = true,
    dragonball = 'z';

// bad
// (compare to above, and try to spot the mistake)
const items = getItems(),
    goSportsTeam = true;
    dragonball = 'z';

// good
const items = getItems();
const goSportsTeam = true;
const dragonball = 'z';
```

### Group all your `const` and then group all your `let`.
This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.

```javascript
// bad
let i, len, dragonball,
    items = getItems(),
    goSportsTeam = true;

// bad
let i;
const items = getItems();
let dragonball;
const goSportsTeam = true;
let len;

// good
const goSportsTeam = true;
const items = getItems();
let dragonball;
let i;
let length;
```

### Assign variables where you need them, but place them in a reasonable place.
`let` and `const` are block scoped and not function scoped.

```javascript
// bad - unnecessary function call
function checkName(hasName) {
    const name = getName();

    if (hasName === 'test') {
    return false;
    }

    if (name === 'test') {
    this.setName('');
    return false;
    }

    return name;
}

// good
function checkName(hasName) {
    if (hasName === 'test') {
    return false;
    }

    const name = getName();

    if (name === 'test') {
    this.setName('');
    return false;
    }

    return name;
}
```

### Donâ€™t chain variable assignments. 
eslint: [`no-multi-assign`](https://eslint.org/docs/rules/no-multi-assign)

> Why? Chaining variable assignments creates implicit global variables.

```javascript
// bad
(function example() {
    // JavaScript interprets this as
    // let a = ( b = ( c = 1 ) );
    // The let keyword only applies to variable a; variables b and c become
    // global variables.
    let a = b = c = 1;
}());

console.log(a); // throws ReferenceError
console.log(b); // 1
console.log(c); // 1

// good
(function example() {
    let a = 1;
    let b = a;
    let c = a;
}());

console.log(a); // throws ReferenceError
console.log(b); // throws ReferenceError
console.log(c); // throws ReferenceError

// the same applies for `const`
```

### Avoid linebreaks before or after `=` in an assignment. 
If your assignment violates [`max-len`](https://eslint.org/docs/rules/max-len.html), surround the value in parens. eslint [`operator-linebreak`](https://eslint.org/docs/rules/operator-linebreak.html).

Linebreaks surrounding `=` can obfuscate the value of an assignment.

```javascript
// bad
const foo =
    superLongLongLongLongLongLongLongLongFunctionName();

// bad
const foo
    = 'superLongLongLongLongLongLongLongLongString';

// good
const foo = (
    superLongLongLongLongLongLongLongLongFunctionName()
);

// good
const foo = 'superLongLongLongLongLongLongLongLongString';
```

### Disallow unused variables.
eslint: [`no-unused-vars`](https://eslint.org/docs/rules/no-unused-vars)

> Why? Variables that are declared and not used anywhere in the code are most likely an error due to incomplete refactoring. Such variables take up space in the code and can lead to confusion by readers.

```javascript
// bad

var some_unused_var = 42;

// Write-only variables are not considered as used.
var y = 10;
y = 5;

// A read for a modification of itself is not considered as used.
var z = 0;
z = z + 1;

// Unused function arguments.
function getX(x, y) {
    return x;
}

// good

function getXPlusY(x, y) {
    return x + y;
}

var x = 1;
var y = a + 2;

alert(getXPlusY(x, y));

// 'type' is ignored even if unused because it has a rest property sibling.
// This is a form of extracting an object that omits the specified keys.
var { type, ...coords } = data;
// 'coords' is now the 'data' object without its 'type' property.
```

### Object / Array creation
Use trailing commas and put short declarations on a single line. 

```javascript
# Right:
var a = ['hello', 'world'];
var b = {
  good: 'code',
  'is generally': 'pretty',
};

# Wrong:
var a = [
  'hello', 'world'
];
var b = {"good": 'code'
        , is generally: 'pretty'
        };
```

**[â¬† back to top](#table-of-contents)**

## References

### Use `const` for all of your references:
avoid using `var`. eslint: [`prefer-const`](https://eslint.org/docs/rules/prefer-const.html), [`no-const-assign`](https://eslint.org/docs/rules/no-const-assign.html)

> IMPORTANCE: This ensures that you canâ€™t reassign your references, which can lead to bugs and difficult to comprehend code.

```javascript
// bad
var a = 1;
var b = 2;

// good
const a = 1;
const b = 2;
```

### Use `let` instead of `var`. 
If you must reassign references, use 'let' instead of 'var'. eslint: [`no-var`](https://eslint.org/docs/rules/no-var.html)

> IMPORTANCE: `let` is block-scoped rather than function-scoped like `var`.

```javascript
// bad
var count = 1;
if (true) {
    count += 1;
}

// good, use the let.
let count = 1;
if (true) {
    count += 1;
}
```

### Note that both `let` and `const` are block-scoped.

```javascript
// const and let only exist in the blocks they are defined in.
{
    let a = 1;
    const b = 1;
}
console.log(a); // ReferenceError
console.log(b); // ReferenceError
```

**[â¬† back to top](#table-of-contents)**

## Objects

### Use the literal syntax for object creation. 
eslint: [`no-new-object`](https://eslint.org/docs/rules/no-new-object.html)

```javascript
// bad
const item = new Object();

// good
const item = {};
```

### Use computed property names when creating objects with dynamic property names.

> IMPORTANCE: They allow you to define all the properties of an object in one place.

```javascript

function getKey(k) {
    return `a key named ${k}`;
}

// bad
const obj = {
    id: 5,
    name: 'Lorem Ipsum',
};
obj[getKey('enabled')] = true;

// good
const obj = {
    id: 5,
    name: 'Lorem Ipsum',
    [getKey('enabled')]: true,
};
```

### Use object method shorthand. 
eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

```javascript
// bad
const atom = {
    value: 1,

    addValue: function (value) {
    return atom.value + value;
    },
};

// good
const atom = {
    value: 1,

    addValue(value) {
    return atom.value + value;
    },
};
```

### Use property value shorthand.
eslint: [`object-shorthand`](https://eslint.org/docs/rules/object-shorthand.html)

> IMPORTANCE: It is shorter and descriptive.

```javascript
const lukeSkywalker = 'Lorem Ipsum';

// bad
const obj = {
    lukeSkywalker: lukeSkywalker,
};

// good
const obj = {
    lukeSkywalker,
};
```

### Group your shorthand properties at the beginning of your object declaration.

> IMPORTANCE: Itâ€™s easier to tell which properties are using the shorthand.

```javascript
const newyorkSubway = 'Newyork Subway';
const newjerseyTransit = 'NewJersy Transit';

// bad
const obj = {
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    newjerseyTransit,
    episodeThree: 3,
    mayTheFourth: 4,
    newyorkSubway,
};

// good
const obj = {
    newjerseyTransit,
    newyorkSubway,
    episodeOne: 1,
    twoJediWalkIntoACantina: 2,
    episodeThree: 3,
    mayTheFourth: 4,
};
```

### Only quote properties that are invalid identifiers. 
eslint: [`quote-props`](https://eslint.org/docs/rules/quote-props.html)

> IMPORTANCE: In general we consider it subjectively easier to read. It improves syntax highlighting, and is also more easily optimized by many JS engines.

```javascript
// bad
const bad = {
    'foo': 3,
    'bar': 4,
    'data-blah': 5,
};

// good
const good = {
    foo: 3,
    bar: 4,
    'data-blah': 5,
};
```

### Do not call `Object.prototype` methods directly, 

such as `hasOwnProperty`, `propertyIsEnumerable`, and `isPrototypeOf`. eslint: [`no-prototype-builtins`](https://eslint.org/docs/rules/no-prototype-builtins)

> IMPORTANCE: These methods may be shadowed by properties on the object in question - consider `{ hasOwnProperty: false }` - or, the object may be a null object (`Object.create(null)`).

```javascript
// bad
console.log(object.hasOwnProperty(key));

// good
console.log(Object.prototype.hasOwnProperty.call(object, key));

// best
const has = Object.prototype.hasOwnProperty; // cache the lookup once, in module scope.
console.log(has.call(object, key));
/* or */
import has from 'has'; // https://www.npmjs.com/package/has
console.log(has(object, key));
```

### Prefer the object spread operator.
over [`Object.assign`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) to shallow-copy objects. Use the object rest operator to get a new object with certain properties omitted.

```javascript
// very bad
const original = { a: 1, b: 2 };
const copy = Object.assign(original, { c: 3 }); // this mutates `original` à² _à² 
delete copy.a; // so does this

// bad
const original = { a: 1, b: 2 };
const copy = Object.assign({}, original, { c: 3 }); // copy => { a: 1, b: 2, c: 3 }

// good
const original = { a: 1, b: 2 };
const copy = { ...original, c: 3 }; // copy => { a: 1, b: 2, c: 3 }

const { a, ...noA } = copy; // noA => { b: 2, c: 3 }
```

**[â¬† back to top](#table-of-contents)**

## Arrays

### Use the literal syntax for array creation. 
eslint: [`no-array-constructor`](https://eslint.org/docs/rules/no-array-constructor.html)

```javascript
// bad
const items = new Array();

// good
const items = [];
```

### Use Arraypush
[Array#push](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/push) instead of direct assignment to add items to an array.

```javascript
const someStack = [];

// bad
someStack[someStack.length] = 'abracadabra';

// good
someStack.push('abracadabra');
```

### Use array spreads `...` to copy arrays.

```javascript
// bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i += 1) {
    itemsCopy[i] = items[i];
}

// good
const itemsCopy = [...items];
```

### To convert an iterable object to an array, use spreads `...` instead of Array.from
[`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from).

```javascript
const foo = document.querySelectorAll('.foo');

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

### Use Array.from
[`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) for converting an array-like object to an array.

```javascript
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };

// bad
const arr = Array.prototype.slice.call(arrLike);

// good
const arr = Array.from(arrLike);
```

### Use [`Array.from`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/from) instead of spread `...` for mapping over iterables, because it avoids creating an intermediate array.

```javascript
// bad
const baz = [...foo].map(bar);

// good
const baz = Array.from(foo, bar);
```

### Use return statements in array method callbacks. 
Itâ€™s ok to omit the return if the function body consists of a single statement returning an expression without side effects, following [8.2](#arrows--implicit-return). eslint: [`array-callback-return`](https://eslint.org/docs/rules/array-callback-return)

```javascript
// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});

// good
[1, 2, 3].map((x) => x + 1);

// bad - no returned value means `acc` becomes undefined after the first iteration
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
});

// good
[[0, 1], [2, 3], [4, 5]].reduce((acc, item, index) => {
    const flatten = acc.concat(item);
    return flatten;
});

// bad
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
    } else {
    return false;
    }
});

// good
inbox.filter((msg) => {
    const { subject, author } = msg;
    if (subject === 'Mockingbird') {
    return author === 'Harper Lee';
    }

    return false;
});
```

### Use line breaks after open and before close array brackets if an array has multiple lines

```javascript
// bad
const arr = [
    [0, 1], [2, 3], [4, 5],
];

const objectInArray = [{
    id: 1,
}, {
    id: 2,
}];

const numberInArray = [
    1, 2,
];

// good
const arr = [[0, 1], [2, 3], [4, 5]];

const objectInArray = [
    {
    id: 1,
    },
    {
    id: 2,
    },
];

const numberInArray = [
    1,
    2,
];
```

**[â¬† back to top](#table-of-contents)**

## Destructuring

### Use object destructuring when accessing and using multiple properties of an object. 
eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

> IMPORTANCE: Destructuring saves you from creating temporary references for those properties.

```javascript
// bad
function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
}

// good
function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
}

// best
function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
}
```

### Use array destructuring. 
eslint: [`prefer-destructuring`](https://eslint.org/docs/rules/prefer-destructuring)

```javascript
const arr = [1, 2, 3, 4];

// bad
const first = arr[0];
const second = arr[1];

// good
const [first, second] = arr;
```

### Use object destructuring for multiple return values, not array destructuring.

> IMPORTANCE: You can add new properties over time or change the order of things without breaking call sites.

```javascript
// bad
function processInput(input) {
    // then a miracle occurs
    return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// good
function processInput(input) {
    // then a miracle occurs
    return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, top } = processInput(input);
```

**[â¬† back to top](#table-of-contents)**

## Strings

### Use single quotes `''` for strings. 
eslint: [`quotes`](https://eslint.org/docs/rules/quotes.html)

```javascript
// bad
const name = "Capt. Janeway";

// bad - template literals should contain interpolation or newlines
const name = `Capt. Janeway`;

// good
const name = 'Capt. Janeway';
```

### Strings that cause the line to go over 80 characters should not be written across multiple lines using string concatenation.

> IMPORTANCE: Broken strings are painful to work with and make code less searchable.

```javascript
// bad
const errorMessage = 'This is a super long error that was thrown because \
of Batman. When you stop to think about how Batman had anything to do \
with this, you would get nowhere \
fast.';

// bad
const errorMessage = 'This is a super long error that was thrown because ' +
    'of Batman. When you stop to think about how Batman had anything to do ' +
    'with this, you would get nowhere fast.';

// good
const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
```

### When programmatically building up strings, use template strings instead of concatenation.
eslint: [`prefer-template`](https://eslint.org/docs/rules/prefer-template.html) [`template-curly-spacing`](https://eslint.org/docs/rules/template-curly-spacing)

> IMPORTANCE: Template strings give you a readable, concise syntax with proper newlines and string interpolation features.

```javascript
// bad
function sayHi(name) {
    return 'How are you, ' + name + '?';
}

// bad
function sayHi(name) {
    return ['How are you, ', name, '?'].join();
}

// bad
function sayHi(name) {
    return `How are you, ${ name }?`;
}

// good
function sayHi(name) {
    return `How are you, ${name}?`;
}
```

### Never use `eval()` on a string, it opens too many vulnerabilities. 
eslint: [`no-eval`](https://eslint.org/docs/rules/no-eval)

### Do not unnecessarily escape characters in strings. 
eslint: [`no-useless-escape`](https://eslint.org/docs/rules/no-useless-escape)

> IMPORTANCE: Backslashes harm readability, thus they should only be present when necessary.

```javascript
// bad
const foo = '\'this\' \i\s \"quoted\"';

// good
const foo = '\'this\' is "quoted"';
const foo = `my name is '${name}'`;
```

**[â¬† back to top](#table-of-contents)**

## Functions

### Use named function expressions instead of function declarations. 
eslint: [`func-style`](https://eslint.org/docs/rules/func-style)

> IMPORTANCE: Function declarations are hoisted, which means that itâ€™s easy - too easy - to reference the function before it is defined in the file. This harms readability and maintainability. 

```javascript
// bad
function foo() {
    // ...
}

// bad
const foo = function () {
    // ...
};

// good
// lexical name distinguished from the variable-referenced invocation(s)
const short = function longUniqueMoreDescriptiveLexicalFoo() {
    // ...
};
```

### Wrap immediately invoked function expressions in parentheses. 
eslint: [`wrap-iife`](https://eslint.org/docs/rules/wrap-iife.html)

> IMPORTANCE: An immediately invoked function expression is a single unit - wrapping both it, and its invocation parens, in parens, cleanly expresses this. Note that in a world with modules everywhere, you almost never need an IIFE.

```javascript
// immediately-invoked function expression (IIFE)
(function () {
    console.log('Welcome to the Internet. Please follow me.');
}());
```

### Never declare a function in a non-function block 
(`if`, `while`, etc). Assign the function to a variable instead. eslint: [`no-loop-func`](https://eslint.org/docs/rules/no-loop-func.html)

### A function declaration is not a statement.

```javascript
// bad
if (currentUser) {
    function test() {
    console.log('Nope.');
    }
}

// good
let test;
if (currentUser) {
    test = () => {
    console.log('Yup.');
    };
}
```

### Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.

```javascript
// bad
function foo(name, options, arguments) {
    // ...
}

// good
function foo(name, options, args) {
    // ...
}
```

### Never use `arguments`, opt to use rest syntax `...` instead. 
eslint: [`prefer-rest-params`](https://eslint.org/docs/rules/prefer-rest-params)

> IMPORTANCE: `...` is explicit about which arguments you want pulled. 

```javascript
// bad
function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
}

// good
function concatenateAll(...args) {
    return args.join('');
}
```

### Use default parameter syntax rather than mutating function arguments.

```javascript
// really bad
function handleThings(opts) {
    // No! We shouldnâ€™t mutate function arguments.
    // Double bad: if opts is falsy it'll be set to an object which may
    // be what you want but it can introduce subtle bugs.
    opts = opts || {};
    // ...
}

// still bad
function handleThings(opts) {
    if (opts === void 0) {
    opts = {};
    }
    // ...
}

// good
function handleThings(opts = {}) {
    // ...
}
```

### Avoid side effects with default parameters.

> IMPORTANCE: They are confusing to reason about.

```javascript
var b = 1;
// bad
function count(a = b++) {
    console.log(a);
}
count();  // 1
count();  // 2
count(3); // 3
count();  // 3
```

### Always put default parameters last.

```javascript
// bad
function handleThings(opts = {}, name) {
    // ...
}

// good
function handleThings(name, opts = {}) {
    // ...
}
```

### Never use the Function constructor to create a new function.
eslint: [`no-new-func`](https://eslint.org/docs/rules/no-new-func)

> IMPORTANCE: Creating a function in this way evaluates a string similarly to `eval()`, which opens vulnerabilities.

```javascript
// bad
var add = new Function('a', 'b', 'return a + b');

// still bad
var subtract = Function('a', 'b', 'return a - b');
```

### Spacing in a function signature. 
eslint: [`space-before-function-paren`](https://eslint.org/docs/rules/space-before-function-paren) [`space-before-blocks`](https://eslint.org/docs/rules/space-before-blocks)

> IMPORTANCE: Consistency is good, and you shouldnâ€™t have to add or remove a space when adding or removing a name.

```javascript
// bad
const f = function(){};
const g = function (){};
const h = function() {};

// good
const x = function () {};
const y = function a() {};
```

### Never mutate parameters. 
eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> IMPORTANCE: Manipulating objects passed in as parameters can cause unwanted variable side effects in the original caller.

```javascript
// bad
function f1(obj) {
    obj.key = 1;
}

// good
function f2(obj) {
    const key = Object.prototype.hasOwnProperty.call(obj, 'key') ? obj.key : 1;
}
```

### Never reassign parameters. 
eslint: [`no-param-reassign`](https://eslint.org/docs/rules/no-param-reassign.html)

> IMPORTANCE: Reassigning parameters can lead to unexpected behavior, especially when accessing the `arguments` object. It can also cause optimization issues, especially in V8.

```javascript
// bad
function f1(a) {
    a = 1;
    // ...
}

function f2(a) {
    if (!a) { a = 1; }
    // ...
}

// good
function f3(a) {
    const b = a || 1;
    // ...
}

function f4(a = 1) {
    // ...
}
```

### Prefer the use of the spread operator `...` to call variadic functions.
eslint: [`prefer-spread`](https://eslint.org/docs/rules/prefer-spread)

> IMPORTANCE: Itâ€™s cleaner, you donâ€™t need to supply a context, and you can not easily compose `new` with `apply`.

```javascript
// bad
const x = [1, 2, 3, 4, 5];
console.log.apply(console, x);

// good
const x = [1, 2, 3, 4, 5];
console.log(...x);

// bad
new (Function.prototype.bind.apply(Date, [null, 2016, 8, 5]));

// good
new Date(...[2016, 8, 5]);
```

### Functions with multiline signatures, or invocations, should be indented just like every other multiline. 
eslint: [`function-paren-newline`](https://eslint.org/docs/rules/function-paren-newline)

```javascript
// bad
function foo(bar,
                baz,
                quux) {
    // ...
}

// good
function foo(
    bar,
    baz,
    quux,
) {
    // ...
}

// bad
console.log(foo,
    bar,
    baz);

// good
console.log(
    foo,
    bar,
    baz,
);
```

**[â¬† back to top](#table-of-contents)**

## Arrow Functions

### When you must use an anonymous function (as when passing an inline callback), use arrow function notation. 
eslint: [`prefer-arrow-callback`](https://eslint.org/docs/rules/prefer-arrow-callback.html), [`arrow-spacing`](https://eslint.org/docs/rules/arrow-spacing.html)

> IMPORTANCE: It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.

> Why not? If you have a fairly complicated function, you might move that logic out into its own named function expression.

```javascript
// bad
[1, 2, 3].map(function (x) {
    const y = x + 1;
    return x * y;
});

// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});
```

### If the function body consists of a single statement, omit the braces and use the implicit return. Otherwise, keep the braces and use a `return` statement. 
eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html), [`arrow-body-style`](https://eslint.org/docs/rules/arrow-body-style.html)

> IMPORTANCE: It reads well when multiple functions are chained together.

```javascript
// bad
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number) => `A string containing the ${number + 1}.`);

// good
[1, 2, 3].map((number) => {
    const nextNumber = number + 1;
    return `A string containing the ${nextNumber}.`;
});

// good
[1, 2, 3].map((number, index) => ({
    [index]: number,
}));

// No implicit return with side effects
function foo(callback) {
    const val = callback();
    if (val === true) {
    // Do something if callback returns true
    }
}

let bool = false;

// bad
foo(() => bool = true);

// good
foo(() => {
    bool = true;
});
```

### In case the expression spans over multiple lines, wrap it in parentheses for better readability.

> IMPORTANCE: It shows clearly where the function starts and ends.

```javascript
// bad
['get', 'post', 'put'].map((httpMethod) => Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
    )
);

// good
['get', 'post', 'put'].map((httpMethod) => (
    Object.prototype.hasOwnProperty.call(
    httpMagicObjectWithAVeryLongName,
    httpMethod,
    )
));
```

### Always include parentheses around arguments for clarity and consistency.
eslint: [`arrow-parens`](https://eslint.org/docs/rules/arrow-parens.html)

> IMPORTANCE: Minimizes diff churn when adding or removing arguments.

```javascript
// bad
[1, 2, 3].map(x => x * x);

// good
[1, 2, 3].map((x) => x * x);

// bad
[1, 2, 3].map(number => (
    `A long string with the ${number}. Itâ€™s so long that we donâ€™t want it to take up space on the .map line!`
));

// good
[1, 2, 3].map((number) => (
    `A long string with the ${number}. Itâ€™s so long that we donâ€™t want it to take up space on the .map line!`
));

// bad
[1, 2, 3].map(x => {
    const y = x + 1;
    return x * y;
});

// good
[1, 2, 3].map((x) => {
    const y = x + 1;
    return x * y;
});
```

### Avoid confusing arrow function syntax (`=>`) with comparison operators (`<=`, `>=`).
eslint: [`no-confusing-arrow`](https://eslint.org/docs/rules/no-confusing-arrow)

```javascript
// bad
const itemHeight = (item) => item.height <= 256 ? item.largeSize : item.smallSize;

// bad
const itemHeight = (item) => item.height >= 256 ? item.largeSize : item.smallSize;

// good
const itemHeight = (item) => (item.height <= 256 ? item.largeSize : item.smallSize);

// good
const itemHeight = (item) => {
    const { height, largeSize, smallSize } = item;
    return height <= 256 ? largeSize : smallSize;
};
```

### Enforce the location of arrow function bodies with implicit returns.
eslint: [`implicit-arrow-linebreak`](https://eslint.org/docs/rules/implicit-arrow-linebreak)

```javascript
// bad
(foo) =>
    bar;

(foo) =>
    (bar);

// good
(foo) => bar;
(foo) => (bar);
(foo) => (
    bar
)
```

**[â¬† back to top](#table-of-contents)**

## Classes & Constructors

### Always use `class`. 

> IMPORTANCE: `class` syntax is more concise and easier to reason about.

```javascript
// bad
function Queue(contents = []) {
    this.queue = [...contents];
}
Queue.prototype.pop = function () {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
};

// good
class Queue {
    constructor(contents = []) {
    this.queue = [...contents];
    }
    pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
    }
}
```

### Use `extends` for inheritance.

> IMPORTANCE: It is a built-in way to inherit prototype functionality without breaking `instanceof`.

```javascript
// bad
const inherits = require('inherits');
function PeekableQueue(contents) {
    Queue.apply(this, contents);
}
inherits(PeekableQueue, Queue);
PeekableQueue.prototype.peek = function () {
    return this.queue[0];
};

// good
class PeekableQueue extends Queue {
    peek() {
    return this.queue[0];
    }
}
```

### Methods can return `this` to help with method chaining.

```javascript
// bad
Jedi.prototype.jump = function () {
    this.jumping = true;
    return true;
};

Jedi.prototype.setHeight = function (height) {
    this.height = height;
};

const luke = new Jedi();
luke.jump(); // => true
luke.setHeight(20); // => undefined

// good
class Jedi {
    jump() {
    this.jumping = true;
    return this;
    }

    setHeight(height) {
    this.height = height;
    return this;
    }
}

const luke = new Jedi();

luke.jump()
    .setHeight(20);
```

### Classes have a default constructor if one is not specified. 
An empty constructor function or one that just delegates to a parent class is unnecessary. eslint: [`no-useless-constructor`](https://eslint.org/docs/rules/no-useless-constructor)

```javascript
// bad
class Jedi {
    constructor() {}

    getName() {
    return this.name;
    }
}

// bad
class Rey extends Jedi {
    constructor(...args) {
    super(...args);
    }
}

// good
class Rey extends Jedi {
    constructor(...args) {
    super(...args);
    this.name = 'Rey';
    }
}
```

### Avoid duplicate class members. 
eslint: [`no-dupe-class-members`](https://eslint.org/docs/rules/no-dupe-class-members)

> IMPORTANCE: Duplicate class member declarations will silently prefer the last one - having duplicates is almost certainly a bug.

```javascript
// bad
class Foo {
    bar() { return 1; }
    bar() { return 2; }
}

// good
class Foo {
    bar() { return 1; }
}

// good
class Foo {
    bar() { return 2; }
}
```

### Class methods should use `this` or be made into a static method unless an external library or framework requires to use specific non-static methods. 
Being an instance method should indicate that it behaves differently based on properties of the receiver. eslint: [`class-methods-use-this`](https://eslint.org/docs/rules/class-methods-use-this)

```javascript
// bad
class Foo {
    bar() {
    console.log('bar');
    }
}

// good - this is used
class Foo {
    bar() {
    console.log(this.bar);
    }
}

// good - constructor is exempt
class Foo {
    constructor() {
    // ...
    }
}

// good - static methods aren't expected to use this
class Foo {
    static bar() {
    console.log('bar');
    }
}
```

## Iterators 

### Donâ€™t use iterators. 
Prefer JavaScriptâ€™s higher-order functions instead of loops like `for-in` or `for-of`. eslint: [`no-iterator`](https://eslint.org/docs/rules/no-iterator.html) [`no-restricted-syntax`](https://eslint.org/docs/rules/no-restricted-syntax)

> IMPORTANCE: This enforces our immutable rule. Dealing with pure functions that return values is easier to reason about than side effects.

> Use `map()` / `every()` / `filter()` / `find()` / `findIndex()` / `reduce()` / `some()` / ... to iterate over arrays, and `Object.keys()` / `Object.values()` / `Object.entries()` to produce arrays so you can iterate over objects.

```javascript
const numbers = [1, 2, 3, 4, 5];

// bad
let sum = 0;
for (let num of numbers) {
    sum += num;
}
sum === 15;

// good
let sum = 0;
numbers.forEach((num) => {
    sum += num;
});
sum === 15;

// best (use the functional force)
const sum = numbers.reduce((total, num) => total + num, 0);
sum === 15;

// bad
const increasedByOne = [];
for (let i = 0; i < numbers.length; i++) {
    increasedByOne.push(numbers[i] + 1);
}

// good
const increasedByOne = [];
numbers.forEach((num) => {
    increasedByOne.push(num + 1);
});

// best (keeping it functional)
const increasedByOne = numbers.map((num) => num + 1);
```

**[â¬† back to top](#table-of-contents)**

## Comparison Operators & Equality

### Must use `===` and `!==` over `==` and `!=`. 
eslint: [`eqeqeq`](https://eslint.org/docs/rules/eqeqeq.html)

### Conditional statements such as the `if` statement evaluate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

- **Objects** evaluate to **true**
- **Undefined** evaluates to **false**
- **Null** evaluates to **false**
- **Booleans** evaluate to **the value of the boolean**
- **Numbers** evaluate to **false** if **+0, -0, or NaN**, otherwise **true**
- **Strings** evaluate to **false** if an empty string `''`, otherwise **true**

```javascript
if ([0] && []) {
    // true
    // an array (even an empty one) is an object, objects will evaluate to true
}
```

### Use shortcuts for booleans, but explicit comparisons for strings and numbers.

```javascript
// bad
if (isValid === true) {
    // ...
}

// good
if (isValid) {
    // ...
}

// bad
if (name) {
    // ...
}

// good
if (name !== '') {
    // ...
}

// bad
if (collection.length) {
    // ...
}

// good
if (collection.length > 0) {
    // ...
}
```

### Ternaries should not be nested and generally be single line expressions. 
eslint: [`no-nested-ternary`](https://eslint.org/docs/rules/no-nested-ternary.html)

```javascript
// bad
const foo = maybe1 > maybe2
    ? "bar"
    : value1 > value2 ? "baz" : null;

// split into 2 separated ternary expressions
const maybeNull = value1 > value2 ? 'baz' : null;

// better
const foo = maybe1 > maybe2
    ? 'bar'
    : maybeNull;

// best
const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
```

### Avoid unneeded ternary statements. eslint: [`no-unneeded-ternary`](https://eslint.org/docs/rules/no-unneeded-ternary.html)

```javascript
// bad
const foo = a ? a : b;
const bar = c ? true : false;
const baz = c ? false : true;

// good
const foo = a || b;
const bar = !!c;
const baz = !c;
```

### When mixing operators, enclose them in parentheses. 
The only exception is the standard arithmetic operators: `+`, `-`, and `**` since their precedence is broadly understood. We recommend enclosing `/` and `*` in parentheses because their precedence can be ambiguous when they are mixed. eslint: [`no-mixed-operators`](https://eslint.org/docs/rules/no-mixed-operators.html)

IMPORTANCE: This improves readability and clarifies the developerâ€™s intention.

```javascript
// bad
const foo = a && b < 0 || c > 0 || d + 1 === 0;

// bad
const bar = a ** b - 5 % d;

// bad
// one may be confused into thinking (a || b) && c
if (a || b && c) {
    return d;
}

// bad
const bar = a + b / c * d;

// good
const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

// good
const bar = a ** b - (5 % d);

// good
if (a || (b && c)) {
    return d;
}

// good
const bar = a + (b / c) * d; 
```

**[â¬† back to top](#table-of-contents)**


## Blocks

### Use braces with all multiline blocks.
eslint: [`nonblock-statement-body-position`](https://eslint.org/docs/rules/nonblock-statement-body-position)

```javascript
// bad
if (test)
    return false;

// good
if (test) return false;

// good
if (test) {
    return false;
}

// bad
function foo() { return false; }

// good
function bar() {
    return false;
}
```

### If youâ€™re using multiline blocks with `if` and `else`, put `else` on the same line. as your `if` blockâ€™s closing brace. 
eslint: [`brace-style`](https://eslint.org/docs/rules/brace-style.html)

```javascript
// bad
if (test) {
    thing1();
    thing2();
}
else {
    thing3();
}

// good
if (test) {
    thing1();
    thing2();
} else {
    thing3();
}
```

### If an `if` block always executes a `return` statement, the subsequent `else` block is unnecessary. 
A `return` in an `else if` block following an `if` block that contains a `return` can be separated into multiple `if` blocks. eslint: [`no-else-return`](https://eslint.org/docs/rules/no-else-return)

```javascript
// bad
function foo() {
    if (x) {
    return x;
    } else {
    return y;
    }
}

// bad
function cats() {
    if (x) {
    return x;
    } else if (y) {
    return y;
    }
}

// bad
function dogs() {
    if (x) {
    return x;
    } else {
    if (y) {
        return y;
    }
    }
}

// good
function foo() {
    if (x) {
    return x;
    }

    return y;
}

// good
function cats() {
    if (x) {
    return x;
    }

    if (y) {
    return y;
    }
}

// good
function dogs(x) {
    if (x) {
    if (z) {
        return y;
    }
    } else {
    return z;
    }
}
```

**[â¬† back to top](#table-of-contents)**

## Control Statements

### In case your control statement (`if`, `while` etc.) gets too long or exceeds the maximum line length, each (grouped) condition could be put into a new line. The logical operator should begin the line.

> IMPORTANCE: This also improves readability by making it easier to visually follow complex logic.

```javascript
// bad
if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
    thing1();
}

// bad
if (foo === 123 &&
    bar === 'abc') {
    thing1();
}

// bad
if (foo === 123
    && bar === 'abc') {
    thing1();
}

// bad
if (
    foo === 123 &&
    bar === 'abc'
) {
    thing1();
}

// good
if (
    foo === 123
    && bar === 'abc'
) {
    thing1();
}

// good
if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
) {
    thing1();
}

// good
if (foo === 123 && bar === 'abc') {
    thing1();
}
```

### Don't use selection operators in place of control statements.

```javascript
// bad
!isRunning && startRunning();

// good
if (!isRunning) {
    startRunning();
}
```

**[â¬† back to top](#table-of-contents)**

## Comments

### Use `/** ... */` for multiline comments.

```javascript
// bad
// make() returns a new element
// based on the passed in tag name
//
// @param {String} tag
// @return {Element} element
function make(tag) {

    // ...

    return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

    // ...

    return element;
}
```

### Use `//` for single line comments. 
Place single line comments on a newline above the subject of the comment. Put an empty line before the comment unless itâ€™s on the first line of a block.

```javascript
// bad
const active = true;  // is current tab

// good
// is current tab
const active = true;

// bad
function getType() {
    console.log('fetching type...');
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// good
function getType() {
    console.log('fetching type...');

    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}

// also good
function getType() {
    // set the default type to 'no type'
    const type = this.type || 'no type';

    return type;
}
```

### Start all comments with a space to make it easier to read. 
eslint: [`spaced-comment`](https://eslint.org/docs/rules/spaced-comment)

```javascript
// bad
//is current tab
const active = true;

// good
// is current tab
const active = true;

// bad
/**
 *make() returns a new element
    *based on the passed-in tag name
    */
function make(tag) {

    // ...

    return element;
}

// good
/**
 * make() returns a new element
 * based on the passed-in tag name
 */
function make(tag) {

    // ...

    return element;
}
```

### Prefixing your comments with `FIXME` or `TODO` helps other developers quickly understand.
#### Use `// FIXME:` to annotate problems.

```javascript
class Calculator extends Abacus {
    constructor() {
    super();

    // FIXME: shouldnâ€™t use a global here
    total = 0;
    }
}
```

#### Use `// TODO:` to annotate solutions to problems.

```javascript
class Calculator extends Abacus {
    constructor() {
    super();

    // TODO: total should be configurable by an options param
    this.total = 0;
    }
}
```

**[â¬† back to top](#table-of-contents)**

## Type Casting & Coercion

**[â¬† back to top](#table-of-contents)**

## Versioning
We use Major.Minor.Batch style for styles versioning. For the versions available, see the [tags on this repository]. 

## Authors
* **W.W.Norton Digital Engineering Team**.

## License
MIT

## Acknowledgments


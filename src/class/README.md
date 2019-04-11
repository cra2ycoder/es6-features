## classes

-   introduced in ECMAScript 2015
-   allows to define, prototype based classes with clean and nice looking syntax

## pieces

-   class declaration

```
class ClassName {
    constructor() {}
}
```

-   getters and setters

```
class ClassName {
    constructor() {}
    get fnName() {}
    set fnName() {}
}
```

-   unnamed and named class

```
// unnamed class
var ClassName = class {
    constructor() {}
}

// named class
var ClassName = class NewClassName {
    constructor() {}
}

```

-   static functions

```
class ClassName {
    constructor() {}
    static fnName() {}
}

// when calling
ClassName.fnName()
```

-   class extends

```
class ClassA {
    constructor() {}
    fn1() {}
    fn2() {}
}

class ClassB extends ClassA {
    constructor() {
        super()
    }

    // overwrite
    fn2() {}

    // overwrite + super
    fn1() {
        super.fn1()
        // additional statements
    }

    // new function
    fn3() {}
}
```

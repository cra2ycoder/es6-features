const a = 10;

/**
 * @error
 * TypeError: Assignment to constant variable.
 */
// a = 20;

/**
 * @error
 * SyntaxError: Identifier 'a' has already been declared
 */

// let a = 10;
// var a = 10;

function doTestScopeVariables() {
  /**
   * @note
   * the below console will print `undefined`
   * as var has the same variable name
   */
  console.log("const: " + a);

  var a = 1;

  /**
   * @error
   * SyntaxError: Identifier 'a' has already been declared
   */
  //   let a = 2;
  //   console.log("let: " + a);

  console.log("var: " + a);

  // const value will not be printed here, local variable will be taken
  // as it same variable name
  console.log("const: " + a);
}

// console.log("const: " + a); // const: 10
// doTestScopeVariables();

/**
 *
 */
var x = 1;
function doTestVarAndLet() {
  /**
   * @error
   * console.log("var -> x: " + x);
   * ReferenceError: x is not defined
   */
  //   console.log("var -> x: " + x);

  let x = 2;
  console.log("let -> x: " + x);
}

// doTestVarAndLet();

var m = 0;
function doTestVarAndLetInReturn(isFlag) {
  /**
   * enabling the below will give the different result
   */
  var m;

  if (isFlag) {
    let m = 1;
    console.log("isFlag:true -> m: " + m); // 1
    return m;
  }

  return m;
}

var n = doTestVarAndLetInReturn(false);
console.log("return -> n:" + n);
// if inner var m; is enabled then -> undefined else 0

var o = doTestVarAndLetInReturn(true);
console.log("return -> o:" + o); // 1

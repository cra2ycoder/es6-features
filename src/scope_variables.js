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
doTestScopeVariables();

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
  var a = 1;

  /**
   * @error
   * SyntaxError: Identifier 'a' has already been declared
   */
  //   let a = 2;
  //   console.log("let: " + a);

  console.log("var: " + a);
}

console.log(a);
doTestScopeVariables();

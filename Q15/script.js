function runCallbacksSequentially(fun1, fun2, fun3) {
  fun1();
  console.log("Finished first callback");

  fun2();
  console.log("Finished second callback");

  fun3();
  console.log("Finished third callback");
}

function first() {
  console.log(" first");
}

function second() {
  console.log("second");
}

function third() {
  console.log(" third");
}

runCallbacksSequentially(first, second, third);

function test() {
  console.log(a); // a == undefiined
  console.log(foo()); // foo() == 2
  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// 'a' tiene un scope local, por lo que es accesible dentro de la función test
// Pero, su valor se asigna después de llamar a console.log(a) por lo que su valor en ese momento es undefined

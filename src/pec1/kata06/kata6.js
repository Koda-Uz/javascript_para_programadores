function test() {
  console.log(a); // a == undefiined
  console.log(foo()); // foo() == 2
  var a = 1;
  function foo() {
    return 2;
  }
}

test();

// 'a' y 'foo()' tienes un scope local en la funcón test(), por lo que solo son accesibles dentro de esta.
// Pero, en caso de la variable 'a', su valor se asigna después de llamar a console.log(a) por lo que su valor en ese momento es undefined
// No ocurre lo mismo con la funcion foo(), que es accesible dentro de todo el bloque de la función test()

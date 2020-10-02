String.prototype.presentTree = function (fruit) {
  if (fruit) {
    console.log('Este árbol es un ' + this + ' y da ' + fruit);
  } else {
    console.log('Este árbol es un ' + this);
  }
};

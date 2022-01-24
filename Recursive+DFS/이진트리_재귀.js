//Pre-order: NLR
//In-order: LNR
//Post-order: LRN

function preOrder(value) {
  if (value > 7) return;
  else {
    console.log(value);
    preOrder(value * 2);
    preOrder(value * 2 + 1);
  }
}

function inOrder(value) {
  if (value > 7) return;
  else {
    inOrder(value * 2);
    console.log(value);
    inOrder(value * 2 + 1);
  }
}

function postOrder(value) {
  if (value > 7) return;
  else {
    postOrder(value * 2);
    postOrder(value * 2 + 1);
    console.log(value);
  }
}

preOrder(1);

// 1  2  4  5  3  6  7
// 4  2  5  1  6  3  7
// 4  5  2  6  7  3  1

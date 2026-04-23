"use strict";

function gettingNumber(n) {
  function find(current, history) {
    if (current === n) {
      return history;
    }
    if (current > n) {
      return null;
    }

    return (
      find(current + 5, `(${history} + 5)`) ||
      find(current * 3, `(${history} * 3)`)
    );
  }

  return find(1, "1");
}

console.log(gettingNumber(13)); 

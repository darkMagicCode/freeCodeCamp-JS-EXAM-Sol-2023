function convertToRoman(num) {
    let result = '';
    let romanNums = {
      M: 1000, CM: 900, D: 500,
      CD: 400, C: 100, XC: 90,
      L: 50, XL: 40, X: 10,
      IX: 9,  V: 5, IV: 4, I: 1  };
    for (let val in romanNums) {
      for (let i = romanNums[val]; num >= i; num -= i) result += val;  }
    console.log(result);
    return result;
  }
  convertToRoman(36);
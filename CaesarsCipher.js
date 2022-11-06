function rot13(str) {
    let codeArr = [];
    for (let i = 0; i < str.length; i++) {
      codeArr.push(str.charCodeAt(i));
    }
    let decodeArr = codeArr.map(function(code){
      if (code >= 65 && code <= 77) {
        return code + 13;
      } else if (code >= 78 && code <= 90) {
        return code - 13;
      } else if (code < 65) {
        return code;
      }
    });
    return String.fromCharCode(...decodeArr);
  }
  rot13("SERR PBQR PNZC");
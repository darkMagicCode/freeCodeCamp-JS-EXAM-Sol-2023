function palindrome(str) {
    let str1 = str.toLowerCase().replace(/[\W_]/g, '');
    let str2 = str1.split('').reverse().join('');
    return str1 === str2 ? true : false;}
  palindrome("eye");
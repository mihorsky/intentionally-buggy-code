function IBL (val) {
  this.val = val;
}

IBL.prototype.reverse = function (str) {
    return str.split('').reverse().join();
}

if (typeof window === 'undefined') {
 exports.IBL = new IBL();
} else {
  window.IBL = new IBL();
}
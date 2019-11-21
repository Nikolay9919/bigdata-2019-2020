
var myWallet = require('./wallet');
var myBlockchain = require('./blockchain');
const crypto = require('crypto');

document.getElementById("signUp").onclick = function() {
    var email = document.getElementById("emailSignUp").innerHTML
    var pass = document.getElementById("passSignUp").innerHTML
    var md5sum = crypto.createHash('md5')
    var hash = md5sum.update(email + pass) 
    var digest = hash.digest("hex")
    var generatedObj = myWallet.generateWallet(digest)
    myWallet.saveWallet(generatedObj);
}

document.getElementById("signIn").onclick = function() {
    var walletId = myWallet.getWallet()
    console.log(walletId)
    if (walletId = document.getElementById("Hash").innerHTML) {
        alert("OK")
    } else {
        alert("no wallet")
    }
}

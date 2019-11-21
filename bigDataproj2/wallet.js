var fs = require('fs');
var filePath = "_meta/wallet.json"

var generateWallet = function(emailPass){
    return {
        walletId : emailPass
    };
};

var saveWallet = function(walletObject){
    var walletStringRepresentation = JSON.stringify(walletObject);
    if (fs.existsSync(filePath)) {
        alert("You have wallet")
    } else {
        fs.writeFileSync('_meta/wallet.json', walletStringRepresentation);

    }
};

var getWallet = function() {
    fs.readFile(filePath, 'utf8',(err,jsonString) => {
        if(err) {
            alert(err)
        } else {
            return JSON.parse(jsonString)
        }
    })
}



module.exports = {
    generateWallet : generateWallet,
    saveWallet : saveWallet,
    getWallet : getWallet
};
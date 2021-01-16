const crypto = require('crypto');

class Hash {
    constructor(salt, type) {
        this.hashString = (str) => {
            return crypto.createHash(type ? type : 'sha1').update(salt+str).digest('hex');
        };
    };
};

const aa = new Hash("YOUR_EPIC_SALT_HERE!");// optional 2 arguments. defaults to sha1

console.log(aa.hashString("OOF"));// > b368488c56ab7a45bf96d86d6a27a97ba099277e

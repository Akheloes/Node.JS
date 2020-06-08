const crypto = require('crypto'),
    argv = require('yargs').argv,
    resizedIV = Buffer.allocUnsafe(16),
    iv = crypto
        .createHash("sha256")
        .update('hashedVector')
        .digest(); // hash the initiation vector which is going to be used in the ciphering, normally, this vector should be pseudo-randomized

iv.copy(resizedIV);

// when the CLI commands are for --e (encoding)
// exemple of use: node ./crypto.js -e --key="asecretkey" "Encode this boring message !"
if(argv.e && argv.key) {
    const key = crypto
                    .createHash("sha256")
                    .update(argv.key)
                    .digest(), // hash the key which is going to be used in the ciphering
        cipher = crypto.createCipheriv("aes256", key, resizedIV),
        msg = [];

    // Ciphering all the phrases of the message
    argv._.forEach((phrase) => {
        msg.push(cipher.update(phrase, 'binary', 'hex'));
    });

    msg.push(cipher.final('hex'));
    console.log(msg.join(''));
}
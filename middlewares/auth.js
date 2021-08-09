const jwt = require('jsonwebtoken');

const accessTokenSecret = 'hola12345';

function userAccess(req, res, next) {
    auth = req.headers.authorization;
    console.log(auth);
    res.json({ error: "Access denied ..." });
}

function userToken(req, res, next) {
    //TODO: Secret key external storage
    // TODO: Get username and password from req.body
    // TODO: Validate username and password 

    let token = jwt.sign({
        data: 'felipemoralesquerol'
    }, accessTokenSecret, { expiresIn: '10m' });

    res.json({ token: token });
}

function verifyToken(req, res, next) {
    const bearerHeader = req.headers.authorization;

    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        // Check token
        jwt.verify(req.token, accessTokenSecret, (err, user) => {
            if (err) {
                console.log('Invalid token: ' + err.message)
                return res.sendStatus(403);
            }

            //req.user = user;
            next();
        });

    } else {
        // Forbidden
        res.sendStatus(403);
    }
}
module.exports = { userAccess, userToken, verifyToken }
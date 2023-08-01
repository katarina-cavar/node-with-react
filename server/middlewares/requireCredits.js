module.exports = (req, res, next) => {
    // next - callback function that calls the next middleware in the chain
    if (req.user.credits < 1) {
        return res.status(403).send({ error: 'Not enough credits!' });
    }

    next();
};

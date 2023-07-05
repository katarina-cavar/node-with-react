module.exports = (req, res, next) => {
    // next - callback function that calls the next middleware in the chain
    if (!req.user) {
        return res.status(401).send({ error: 'You must log in!' });
    }

    next();
};

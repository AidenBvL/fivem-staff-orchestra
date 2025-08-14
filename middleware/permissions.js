module.exports = (requiredRank) => {
  return (req, res, next) => {
    if (req.user && req.user.rank >= requiredRank) return next();
    res.status(403).send('Forbidden');
  };
};

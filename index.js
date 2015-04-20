module.exports = function (req, res, next) {
  res.locals.flash = req.flash = function (name, value) {
    if (!req.session) throw Error('req.flash() requires sessions');
    var data = req.session.flash || (req.session.flash = {}), msgs;
    if (name) {
      msgs = data[name];
      if (value) {
        if (!msgs) msgs = data[name] = [];
        if (-1 === msgs.indexOf(value)) msgs.push(value);
        return msgs;
      }
      delete data[name];
      return msgs || [];
    }
    req.session.flash = {};
    return data;
  };
  next();
};
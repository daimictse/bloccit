const flairQueries = require("../db/queries.flair.js");

module.exports = {
  new(req, res, next) {
    res.render("flair/new", {topicId: req.params.topicId});
  }
}

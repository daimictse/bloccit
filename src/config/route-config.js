module.exports = {
  init(app){
    const staticRoutes = require("../routes/static");
    const postRoutes = require("../routes/posts");
    const flairRoutes = require("../routes/flair");
    const topicRoutes = require("../routes/topics");

    app.use(staticRoutes);
    app.use(postRoutes);
    app.use(flairRoutes);
    app.use(topicRoutes);
  }
}

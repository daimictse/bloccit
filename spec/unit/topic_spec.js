const sequelize = require("../../src/db/models/index").sequelize;
const Topic = require("../../src/db/models").Topic;
const Post = require("../../src/db/models").Post;

describe("Topic", () => {
  describe("#create()", () => {
    it("should create a Topic object with a title and description", (done) => {

      Topic.create({
        title: "Topic One (1)",
        description: "Topic One Created in Topic Spec",
      })
      .then((topic) => {
        expect(topic.title).toBe("Topic One (1)");
        expect(topic.description).toBe("Topic One Created in Topic Spec");
        done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    });
  });
});

describe("#getPosts()", () => {
  it("should get all the associated posts from a topic", (done) => {
    this.topic;

    Topic.create({
      title: "Expeditions to Alpha Centauri",
      description: "A compilation of reports from recent visits to the star system."
    })
    .then((topic) => {
      this.topic = topic;

      Post.create({
        title: "My first visit to Proxima Centauri b",
        body: "I saw some rock.",
        topicId: this.topic.id
      })
      .then((post) => {
        this.topic.getPosts()
        .then((posts) => {
          expect(posts[0].id).toBe(post.id);
          expect(posts[0].topicId).toBe(this.topic.id);
          done();
        })
        .catch ((err) => {
          console.log(err);
          done();
        });
      })
      .catch((err) => {
        console.log(err);
        done();
      });
    })
    .catch((err) => {
      console.log(err);
      done();
    });
  });
});

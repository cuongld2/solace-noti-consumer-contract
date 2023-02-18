import path from "path";
import {
  PactV3,
  MatchersV3,
  SpecificationVersion,
  MessageConsumerPact,
  synchronousBodyHandler,
} from "@pact-foundation/pact";
const { like } = MatchersV3;

const provider = new PactV3({
  consumer: "NotificationService",
  provider: "BlogService",
  log: path.resolve(process.cwd(), "logs", "pact.log"),
  logLevel: "warn",
  dir: path.resolve(process.cwd(), "pacts"),
  spec: SpecificationVersion.SPECIFICATION_VERSION_V4,
});


// 1 Blog API Handler
const blogAPIHandler = function (blog) {
    if (!blog.id && !blog.name && !blog.authorName) {
      throw new Error("missing fields")
    }
  
    return

  }
  
  // 2 Pact Message Consumer
  const messagePact = new MessageConsumerPact({
    consumer: "NotificationService",
    dir: path.resolve(process.cwd(), "pacts"),
    pactfileWriteMode: "update",
    provider: "BlogService",
  })

describe("Check integration between notification and blog service", () => {
    it("Check if format message from blog service is correct", () => {
        // 3 Consumer expectations
        return (
          messagePact
            .given("successfully integrate with Solace broker")
            .expectsToReceive("a noti for a new blog post is created")
            .withContent({
              name: like("How to implement a blog management service using Node.js"),
              authorId: like("4242133141"),
            })
            .withMetadata({
              topic: "services/blogService",
            })
            // 4 Verify consumers' ability to handle messages
            .verify(synchronousBodyHandler(blogAPIHandler))
        )
      })
});
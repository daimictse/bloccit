const request = require("request");
// user the base URL for the requests to the server
const server = require("../../src/server");
const base = "http://localhost:3000/";

describe("routes : static", () => {

//#1 title the test with the HTTP verb and route
// the first test will be on the landing page which will serve as the root of the app
  describe("GET /", () => {

//#2 making sure requesting the server using this route was successful = code 200
  it("should return status code 200 and have 'Welcome to Bloccit' in the body of the response", () => {
    request.get(base, (err, res, body) => {
       expect(res.statusCode).toBe(200);
       expect(body).toContain("Welcome to Bloccit");

//#4 Need to call done here because expect() won't be made before the test finishes
// If no expect(), Jasmine assumes the test is successful
        done();
      });
    });

  });
});

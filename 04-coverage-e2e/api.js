const http = require("http");
const DEFAULT_USER = { userName: "Peter", password: "strongPass" };

const routes = {
  "/contact:get": (req, res) => {
    res.write("contact us page");
    return res.end();
  },
  "/login:post": async (request, response) => {
    // response é um iterator!
    for await (const data of request) {
      const user = JSON.parse(data);
      if (
        user.username !== DEFAULT_USER.username ||
        user.password !== DEFAULT_USER.password
      ) {
        response.writeHead(401);
        response.write("Logging failed!");
        return response.end();
      }

      response.write("Logging has succeeded!");
      return response.end();
    }
  },
  default: (req, res) => {
    res.write("hello");
    return res.end();
  },
};

const handler = function (req, res) {
  const { url, method } = req;
  const routeKey = `${url}:${method.toLowerCase()}`;
  const chosenRoute = routes[routeKey] || routes.default;
  res.writeHead(200, {
    "Content-Type": "text/html",
  });
  return chosenRoute(req, res);
};

const app = http
  .createServer(handler)
  .listen(3000, () => console.log("Listening on port: ", 3000));

module.exports = app;

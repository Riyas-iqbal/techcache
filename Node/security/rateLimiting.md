## Preventing brute-force

Limiting repeated failed requests to authentication endpoints is an important security measure in a REST API.

- When an attacker tries to brute-force the authentication system by repeatedly sending requests with different usernames and passwords, it can result in a Denial of Service (DoS) attack that overwhelms the server and causes it to crash or become unavailable. Additionally, successful brute-force attacks can allow the attacker to gain unauthorized access to sensitive data or resources.

- To prevent such attacks, a common approach is to implement rate limiting for authentication endpoints. This means that the server limits the number of requests that can be made to the authentication endpoint within a given time period. If the limit is exceeded, the server can respond with an error message or temporarily block the client's IP address.

- By implementing rate limiting, the server can protect against brute-force attacks and ensure that the authentication system is not vulnerable to automated attacks. It can also help to ensure that the server remains available and responsive to legitimate requests from authorized clients.

## Ways to implement rate limiting in Express

1. ##### Using a middleware package:
    You can use a third-party middleware package like `express-rate-limit` or `express-slow-down`. These packages allow you to set a limit on the number of requests per IP address per time period. If the limit is exceeded, the middleware can either return an error or delay the response.

    ```javascript
    const rateLimit = require("express-rate-limit");

    const apiLimiter = rateLimit({
        windowMs: 15 * 60 * 1000, // 15 minutes
        max: 100, // limit each IP to 100 requests per windowMs
        message: "Too many requests from this IP, please try again later"
    });

    app.use("/api/", apiLimiter);
    ```
    This code sets up a rate limiter that allows a maximum of 100 requests per IP address per 15-minute period to the /api/ route.

2. ##### Custom middleware function:

    You can also create a custom middleware function that checks the number of requests from a particular IP address and returns an error if the limit is exceeded. Here's an example

    ```javascript
    const apiCalls = {};

    const apiRateLimiter = (req, res, next) => {

        const ip = req.headers["x-forwarded-for"] || req.connection.remoteAddress;
        apiCalls[ip] = apiCalls[ip] || 0;
        apiCalls[ip]++;

        if (apiCalls[ip] > 100) {
            return res.status(429).send("Too many requests from this IP, please try again later");
        }

        next();
    };

    app.use("/api/", apiRateLimiter);
    ```

    This code defines a middleware function that checks the number of requests from a particular IP address and returns an error if the limit is exceeded. It sets a limit of 100 requests per IP address to the /api/ route.

3. ##### Using a reverse proxy:

    You can also use a reverse proxy like Nginx or Apache to rate limit requests before they reach your Express server. These proxies allow you to set up rate limiting rules based on IP address, user agent, or other criteria. This can be an effective way to protect your server from excessive traffic and DoS attacks.

# Rest 

REST stands for Representational State Transfer and is an architectural style that is used to build web services. It is an abstraction of the HTTP protocol, which is based on the TCP/IP protocol suite. HTTP is used for communication between client and server in a RESTful architecture.

**TCP/IP** is a set of protocols that define how data is transmitted over the internet. It includes the Internet Protocol (IP), which is responsible for routing data packets between systems using IP addresses as unique identifiers for each system in a network.

In summary, REST is an architectural style that uses HTTP as a communication protocol, which in turn is based on the TCP/IP protocol suite that uses IP addresses to identify systems in a network.

### Constraints and principles

1. **Client-Server**: 
    The client and server are separate entities that communicate with each other via HTTP.

2. **Stateless:**  
    Each request from the client to the server contains all the necessary information to complete the request. The server does not store any client state between requests.

3. **Cacheable:**
    Responses from the server should be marked as cacheable or non-cacheable to improve performance.

4. **Uniform Interface**: 
    The interface between the client and server should be consistent, using standard HTTP methods like GET, POST, PUT, and DELETE.

5. **Layered System**: 
    A client should not be able to tell whether it is communicating directly with the server or through an intermediary.
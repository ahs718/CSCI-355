# Exam 2 Review

## 1. Networking Cables and Media

-   **Cat-5, Cat-6, Cat-7 Cables**
    -   Cat-5: Up to 100 Mbps, 100 MHz frequency, primarily for Ethernet.
    -   Cat-6: Up to 1 Gbps for longer distances (10 Gbps for short distances), 250 MHz frequency.
    -   Cat-7: Enhanced shielding, supports 10 Gbps, up to 600 MHz.
-   **Coaxial Cable**
    -   Structure: Central conductor, insulating layer, metallic shield, outer insulation.
    -   Uses: Cable TV, internet, early Ethernet.
-   **Fiber Optic Cable**
    -   Structure: Core, cladding, and protective coating.
    -   Advantages: High-speed transmission, immunity to electromagnetic interference, long-distance data transmission.

## 2. Error Detection and Correction Techniques

-   **Double Parity**
    -   Method: Adds parity bits to both rows and columns in a data block.
    -   Application: Detects and corrects multiple-bit errors.
-   **Checksum**
    -   Definition: Sum of data bytes to verify integrity.
    -   Application: Compared at sender and receiver to detect errors.
-   **Cyclic Redundancy Check (CRC)**
    -   Method: Polynomial division-based error-checking mechanism.
    -   Application: Common in digital networks and storage devices.
-   **Hamming Code**
    -   Structure: Data encoded with parity bits to detect/correct single-bit errors.
    -   Application: Error correction in data transmission.

## 3. JavaScript Fundamentals

-   **APIs (Application Programming Interfaces)**
    -   Definition: Interfaces for communication between software applications.
    -   Types: REST APIs, Web APIs, Library APIs.
-   **Hoisting**
    -   Behavior: Moves variable and function declarations to the top of their scope.
    -   Effect: Only declarations (not initializations) are hoisted.
-   **Destructuring**
    -   Use: Unpacking values from arrays and objects into distinct variables.
    -   Syntax: const [a, b] = array; and const {x, y} = object;.
-   **Callbacks**
    -   Definition: Functions passed as arguments to be executed later.
    -   Use Case: Often used in asynchronous code.
-   **Promises**
    -   Structure: Represents a value that will resolve or reject in the future.
    -   States: Pending, fulfilled, rejected.
-   **async/await**
    -   Description: Simplifies working with Promises by using synchronous-looking code.
    -   Benefit: Improves readability and error handling in asynchronous code.
-   **let, var, const**
    -   let: Block-scoped, can be reassigned.
    -   var: Function-scoped, can be redeclared, hoisted.
    -   const: Block-scoped, cannot be reassigned.
-   **Function Invocation**
    -   Types: Direct invocation, method invocation, constructor invocation, indirect invocation (using call/apply).
-   **Function Expressions**
    -   Syntax: Define functions within expressions, e.g., const func = function() {};.
        Anonymous Functions
    -   Definition: Functions without a name, often used as arguments.
-   **Closure**
    -   Concept: Inner function has access to outer function's scope even after the outer function finishes executing.

## 4. Networking Concepts

-   **Client/Server Model**
    -   Definition: Clients request resources; servers provide responses.
        Content Delivery Network (CDN)
    -   Function: Distributes content across multiple servers to reduce latency.
-   **Virtual Private Network (VPN)**
    -   Use: Creates a secure, encrypted connection over public networks.
-   **Simple Mail Transfer Protocol (SMTP)**
    -   Purpose: Transfers emails between servers, operates over port 25.
-   **Router, Modem, Switch, Hub**
    -   Router: Directs data between networks.
    -   Modem: Modulates and demodulates data for transmission.
    -   Switch: Connects devices within a network, forwards data to specific devices.
    -   Hub: Simple broadcast device that sends data to all connected devices.
-   **CSMA (Carrier Sense Multiple Access)**
    -   Protocol: Checks if a channel is free before transmission.
-   **OSPF (Open Shortest Path First)**
    -   Protocol: Finds the shortest path using link-state information.
-   **ARQ (Automatic Repeat reQuest)**
    -   Function: Retransmits data upon error detection.
-   **ARP (Address Resolution Protocol)**
    -   Purpose: Resolves IP addresses into MAC addresses.
-   **MAC (Media Access Control) Address**
    -   Definition: Unique identifier for network devices.

## 5. Routing and Protocols

-   **Distance Vector Routing**
    -   Definition: Protocols that calculate routes based on distance metrics.
    -   Example: RIP (Routing Information Protocol).
-   **Bellman-Ford Algorithm**
    -   Use: Computes shortest paths, works with negative weights.
-   **Dynamic Host Configuration Protocol (DHCP)**
    -   Function: Automatically assigns IP addresses within a network.
-   **UDP and TCP**
    -   UDP (User Datagram Protocol): Connectionless, faster but unreliable.
    -   TCP (Transmission Control Protocol): Reliable, connection-oriented.
-   **Internet Control Message Protocol (ICMP)**
    -   Use: Diagnostics and error reporting (e.g., ping).
-   **DNS Queries**
    -   Function: Translates domain names to IP addresses for easier internet navigation.

## 6. Network Tools

-   **Wireshark**
    -   Description: Network protocol analyzer that captures packet data.
    -   Use Cases: Troubleshooting, security analysis, protocol development.

## 7. Node.js Concepts

-   **npm (Node Package Manager)**
    -   Function: Installs, manages, and shares JavaScript packages.
-   **File System (fs)**
    -   Purpose: Node.js module for handling file operations.
-   **Express**
    -   Function: Web application framework, simplifies server setup and routing.
        Sockets
    -   Description: Real-time communication, enabling data exchange over TCP/IP.
-   **HTTP/HTTPS**
    -   HTTP: Protocol for transferring data over the web.
    -   HTTPS: Secure version, using SSL/TLS for encryption.
-   **Request (req) and Response (res)**
    -   Purpose: req represents incoming data; res is used to send data back to the client.

## 8. Stateless/Connectionless Protocols and Communication

-   **Stateless Protocols**
    -   Example: HTTP, where each request is treated independently without context.
-   **Connectionless Communication**
    -   Description: Data sent without establishing a dedicated connection (e.g., UDP).

## 9. APIs: Remote Procedure Calls and RESTful

-   **Remote Procedure Call (RPC)**
    -   Function: Allows executing code on a different server as if it were local.
-   **RESTful APIs**
    -   Principles: Stateless, resource-based URLs, uses HTTP methods (GET, POST, PUT, DELETE).

## 10. Security Concepts

-   **Smurf Attack**
    -   Type: DDoS attack using ICMP echo requests to flood a network.
-   **Secure Shell (SSH)**
    -   Use: Provides secure access to remote servers via encryption.

## 11. Relay Types

-   **Special Relay**
    -   Purpose: Designed for specific tasks, like high-power applications.
-   **Regular Relay**
    -   Definition: Standard electromagnetic switch, typically used in simple circuits.
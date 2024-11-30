# 10/22/24 Lecture 11

-   Quiz 7: Data Link / JS
-   Quiz 8a: JS
-   Quiz 8b: Routing
-   Quiz 9a: Wireshark
-   Quiz 9b: Transport Layer
-   Quiz 9c: TCP, ICMP, ARP, DNS

## Wireshark

-   TCP/IP Suite
    -   Transport layer
    -   Network layer

### Advantages of Wireshark

-   Network Administrators
    -   Montior traffic
    -   Resolve bottlenecks
    -   Build firewall rules
-   Developers
    -   Understand protocol and application behavior
    -   See how routines behave and if programs work as anticipated
    -   Determine if it is the application or networl causing slow response times
-   Security Professionals
    -   Identify dangerous or malicious activity via packet analysis following a UDP or TCP stream
    -   Perform regulatory compliance
    -   Verify endpoint security status
    -   Monitor bandwidth use

### Tapping into a hub

-   A hub allows you to see all traffic. This is likely the path done if connecting via WiFi.

-   CSMA/CA is a network contention protocol using for carrier transmission in networks using the 802.11 standard.
-   CSMA/CA increases network traffic as it requires sending out a signal to the network even before transmitting any real data to listen for any collision scenarios in the network and to inform other devices not to transmit.

### Tapping into a switch

-   Hub: physical layer
    -   MAC address
-   Switch: data link layer
    -   MAC address
-   Router: network layer
    -   IP address

### DHCP: Dynamic Host Configuration Protocol

-   Use IP config release and IP config renew.
-   No IP address below, so the server uses a transaction ID and the MAC address.
-   A discover packet broadcasts for an IP.
-   The DHCP offer comes from a server.
-   We borrow it for some lease time.

### FTP: File Transfer Protocol

-   Port 21
-   Port 20

### HTTP: Hypertext Transfer Protocol

-   In use on the web since the 1990s
-   A client server model
-   Uses TCP port 80 (default)
-   After handshake we see a GET request. It gives user information such as the User-Agent and more (about the client).

### ARP

-   Address Resolution Protocol

#### Local Area Network

-   On a LAN, data link layer uses MAC address of destination mechine rather than IP address

#### ARP Storm / ARP Flood Attack

-   ARP storm can degrade a network

#### Multicast

-   One to many or many to many

## Document Object Model

-   using the `document` object, you can create, modify, and delete HTML elements through JavaScript
-   `document.createElement()` - create a new element
-   `document.createTextNode()` - create a new text node
-   `node.appendChild()` - add a child node to the current node
-   `node.id = "id"` - set the `id` attribute of the HTML element
-   `node.className = "className"` - sets the `class` attribute of the HTML element
-   `node.style = "property: style;"` - sets the `style` attribute of the HTML element
-   `node.innerHTML = "innter html"` - sets the HTML inside of the HTML element
-   `node.onclick = function` - sets the onclick attribute of the HTML element to execute a specified function when clicked

### Browser Object Model

-   `window.alert()` - shows an alert popup box
-   `window.confirm()` - shows a confirm popup box
-   `window.open()` - open a new window

-   window
    -   history
    -   location
    -   navigator
    -   screen
    -   document
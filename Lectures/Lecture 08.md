# 10/8/24 Lecture 8

### Media

-   Physical matter used to carry voice or data transmissions

-   **Guided media** - transmission flows along physical medium

-   **Wireless (Radiated) media** - transmission flows through the air

#### Guided Media

-   **Twisted-pair (TP) cable**
    -   Price: inexpensive
    -   Distance: typically up to 100n
    -   Use: telephones, LANs
-   **Coax cable**
    -   Price: inexpensive, but more than TP
    -   Distance: up to 2 km (1.2 m)
    -   Use: Cable TV/Internet
-   **Fiber optic cable**
    -   Data transmitted using light from lasers or LEDs
    -   Price: expensive
    -   Distance: 500m - 100km
    -   Use: Trunk line/Backlone, lo distance circuits

### Digital vs Analog Data

-   **Digital** transmission involves discrete binary values
-   **Analog** transmission involves continuous waves
-   **Modem (modulator/demodulator)** converts from analog to digital and vice versa

### Media Access Control

-   Contention
-   Controlled

### Error Detection

-   Bit parity (even/odd)
-   Checksum
-   Cyclic redundancy check (CRC)

### Error Correction

-   Stop and wait
    -   Send frame, wait for acknowledgment. If none, resend frame, if acknowledgment, send next frame
-   Continuous ARQ
    -   Sender does not wait for acknowledgement, keeps sending next frames
    -   Will send frame out of order if no acknowledgement is received

### Hemming Code

### Cyclic Redundancy Check (CRC)
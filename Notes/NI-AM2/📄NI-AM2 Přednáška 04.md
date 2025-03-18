---
created: 2025-03-18T11:58:43
title: Security
up:
  - "[[📖NI-AM2]]"
---

TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska04 status-toReview


START
FIT-Card

Jaké jsou 2 typy security při komunikaci přes síť?

Back:

- Message-level security
- Transport-level security

END

---


START
FIT-Card

Jakých 5 věcí je třeba zajistit v bezpečnosti (u komunikací přes sítě)?

Back:

![](../../Assets/Pasted%20image%2020250318120256.png)

END

---


START
FIT-Card

Co je autentikace?

Back:

Ověření identity uživatele

END

---


START
FIT-Card

Co je autorizace?

Back:

Ověření, že uživatel má právo na to přistupovat k danému zdroji

END

---


START
FIT-Card

Jaké jsou možnosti autentikace v HTTP?

Back:

- Basic Access Authentication
- Digest Access Authentication
- Bearer tokens to access OAuth 2.0-protected resources
- Mutual authentication using password-based when server knows the user's encrypted password

END

---

### Transport Level Security


START
FIT-Card

Jaké jsou bezpečnostní mechanismy v rámci TSL?

Back:

- TSL Handshake
- TSL Offloading
- TSL Bridging
- End-to-End TSL
- Load Balancer

(viz AM1)

![](../../Assets/Pasted%20image%2020250318120620.png)
![](../../Assets/Pasted%20image%2020250318120615.png)

END

---

### JSON Web Token


START
FIT-Card

Čeho je zkratka JWT?

Back:

JSON Web Token

END

---


START
FIT-Card

Jak funguje/co je JWT?

Back:

![](../../Assets/Pasted%20image%2020250318120729.png)

END

---


START
FIT-Card

Jak funguje autentikace pomocí JWT?

Back:

Uživatel se přihlásí, potom dostane JWT token a ten vkládá ke každému requestu

END

---


START
FIT-Card

Jaká je struktura JWT tokenu?

Back:

`<header>.<payload>.<signature>`

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250318121002.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Co obsahuje **header** v JWT tokenu?

Back:

![](../../Assets/Pasted%20image%2020250318120923.png)

END

---


START
FIT-Card

Co obsahuje **payload** v JWT tokenu?

Back:

![](../../Assets/Pasted%20image%2020250318120937.png)

END

---


START
FIT-Card

Co obsahuje **signature** v JWT tokenu?

Back:

![](../../Assets/Pasted%20image%2020250318120946.png)

END

---


START
FIT-Card

Jak funguje proces autentikace pomocí JWT?

Back:

![](../../Assets/Pasted%20image%2020250318121035.png)

END

---


START
FIT-Card

Jak funguje **expiration** JWT?

Back:

![](../../Assets/Pasted%20image%2020250318121051.png)

END

---


START
FIT-Card

Jak funguje **revocation** JWT?

Back:

![](../../Assets/Pasted%20image%2020250318121103.png)

END

---

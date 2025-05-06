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
<!--ID: 1746518365745-->
END

---


START
FIT-Card

Jakých 5 věcí je třeba zajistit v bezpečnosti (u komunikací přes sítě)?

Back:

![](../../Assets/Pasted%20image%2020250318120256.png)
<!--ID: 1746518365748-->
END

---


START
FIT-Card

Co je autentikace?

Back:

Ověření identity uživatele
<!--ID: 1746518365751-->
END

---


START
FIT-Card

Co je autorizace?

Back:

Ověření, že uživatel má právo na to přistupovat k danému zdroji
<!--ID: 1746518365754-->
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
<!--ID: 1746518365756-->
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
<!--ID: 1746518365759-->
END

---

### JSON Web Token


START
FIT-Card

Čeho je zkratka JWT?

Back:

JSON Web Token
<!--ID: 1746518365761-->
END

---


START
FIT-Card

Jak funguje/co je JWT?

Back:

![](../../Assets/Pasted%20image%2020250318120729.png)
<!--ID: 1746518365764-->
END

---


START
FIT-Card

Jak funguje autentikace pomocí JWT?

Back:

Uživatel se přihlásí, potom dostane JWT token a ten vkládá ke každému requestu
<!--ID: 1746518365766-->
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
<!--ID: 1746518365769-->
END

---


START
FIT-Card

Co obsahuje **header** v JWT tokenu?

Back:

![](../../Assets/Pasted%20image%2020250318120923.png)
<!--ID: 1746518365772-->
END

---


START
FIT-Card

Co obsahuje **payload** v JWT tokenu?

Back:

![](../../Assets/Pasted%20image%2020250318120937.png)
<!--ID: 1746518365775-->
END

---


START
FIT-Card

Co obsahuje **signature** v JWT tokenu?

Back:

![](../../Assets/Pasted%20image%2020250318120946.png)
<!--ID: 1746518365778-->
END

---


START
FIT-Card

Jak funguje proces autentikace pomocí JWT?

Back:

![](../../Assets/Pasted%20image%2020250318121035.png)
<!--ID: 1746518365780-->
END

---


START
FIT-Card

Jak funguje **expiration** JWT?

Back:

![](../../Assets/Pasted%20image%2020250318121051.png)
<!--ID: 1746518365783-->
END

---


START
FIT-Card

Jak funguje **revocation** JWT?

Back:

![](../../Assets/Pasted%20image%2020250318121103.png)
<!--ID: 1746518365786-->
END

---

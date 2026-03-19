---
created: 2024-11-04T09:19:10
title: Úvod do HTTP
up:
  - "[[📖NI-AM1]]"
---

wšdqW
TARGET DECK: archive
FILE TAGS: NI-AM1 prednaska06 status-toReview


## Úvod HTTP

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **server push** v HTTP 2?

Back:

To, že server může poslat response klientovi, aniž by klient poslal request.

<!-- DetailInfoStart -->

Mometálně se to moc nepoužívá kvůli výkonu

<!-- DetailInfoEnd -->
<!--ID: 1731175818739-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co znamená, že je HTTP protokol **stateless**?

Back:

Jednotlivý interakce HTTP request-response spolu nejsou propojené a jsou navzájem nezávislé. (Když si odmyslíme autentikační headery)

<!-- DetailInfoStart -->

K tomu propojení slouží **hypertext**, díky kterému jsem schopný udržovat nějaký stav (to souvisí s HATEOAS).

V HTTP 2 můžu např. udržovat stav pomocí cookies.

<!-- DetailInfoEnd -->
<!--ID: 1731175818742-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Optimalizace protokolu HTTP (latence, keep-alive, pipelining)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jakou strukturu má HTTP request?

Back:

```
method uri http-version <crlf>
(header : value <crlf>)*
<crlf>
[ data ]
```

<!-- DetailInfoStart -->

Sémantika HTTP a HTTP 2 je prakticky stejná (až na jednu hlavičku)
![](../../../Assets/Pasted%20image%2020241104094028.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

```
GET /users HTTP/1.1
header: value

body
```

<!-- ExampleEnd -->
<!--ID: 1731175818744-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Optimalizace protokolu HTTP (latence, keep-alive, pipelining)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jakou strukturu má HTTP response?

Back:

```
http-version response-code [ message ] <crlf>
(header : value<crlf>)*
<crlf>
[ data ]
```

<!-- DetailInfoStart -->

Sémantika HTTP a HTTP 2 je prakticky stejná (až na jednu hlavičku)
![](../../../Assets/Pasted%20image%2020241104094028.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

```
HTTP/1.1 200 Success
header: value

body
```

<!-- ExampleEnd -->
<!--ID: 1731175818747-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Kolik requestů se musí průměrně poslat, aby se načetla průměrná webová aplikace?

Back:

Pro úvodní načtení průměrně 90 requestů.

<!-- DetailInfoStart -->

- HTML - 10 requetů
- Images - 55 requestů
- Javascript - 15 requestů
- CSS - 5 requestů
- Other - 5 requestů
  <!-- DetailInfoEnd -->
<!--ID: 1731175818752-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Optimalizace protokolu HTTP (latence, keep-alive, pipelining)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je sharding? Jak funguje?

Back:

Origin je hostname, protokol (správněji schéma) a port.

V aplikaci můžu uměle vytořit více originů pomocí shardů tím, že si vytvořím na doméně více poddomén -> mám jiné hostnames.

<!-- ExampleStart -->

Mám jednu doménu, já si ale udělám více podomén. Díky tomu můžu zvýšit počet spojení o 6 (protože vytvářím jiné originy).

Díky tomu může být více spojení, ale samozřejmě to má nevýhodu, protože to najednou může více zatížit server (a je tam trošku větší režie). Sharding tedy může věci zrychlit, ale neměl bych to přehánět, měl bych monitorovat, kolik shardů je pro mě optimální.

![](../../../Assets/Pasted%20image%2020241104100844.png)

Na serveru si pak vytvořím virtual host, aby mi to pro ty poddomény zpracovávalo requesty stejně.
![](../../../Assets/Pasted%20image%2020241104101248.png)

<!-- ExampleEnd -->
<!--ID: 1731175818754-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká hlavička porušuje stateless protokol?

Back:

`Authorization` hlavička, ve které klient posílá tokeny pro autorizaci.
<!--ID: 1731175818757-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby lze udržovat stav na klientovi, když je HTTP stateless?

Back:

- **Cookies** (+ session tabulky na serveru)
- **Hypertext** (HATEOAS)
<!--ID: 1731175818759-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují **sessions** pomocí **cookies**?

Back:

1. Klient pošle request
2. Server checkne jestli existuje session. Pokud neexistuje, vytvoří se session (viz detail)
3. Server do response hlavičky Set-Cookie HTTP dá idčko session
4. Klient přijme request a pak kopíruje do všech requestů ten identifikátor (idčko).

<!-- DetailInfoStart -->

Server vytvoří session tak, že má v tabulce ID a value. Když vytvoří session, vytvoří záznam, který reprezentuje danou session.

Value jsou nějaké informace o té session.

Ta tabulka je uložena v paměti (RAMce). Když vypadne server, tak se zruší všechny sessions.

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241104102716.png)

<!-- ExampleEnd -->
<!--ID: 1731175818762-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Kde se ukládá session tabulka na serveru? Co se stane když vypadne server?

Back:

Ukládá se do RAM paměti.

Když vypadne server, zruší se tím všechny session.
<!--ID: 1731175818765-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá předejít tomu, aby se nesmazala session tabulka, když vypadne server?

Back:

Můžu si sessions ukládat do databáze (perzistentního uložiště).
<!--ID: 1731175818767-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **stateful server**?

Back:

Server, který si uchovává stav například pomocí cookies a session tabulky (uložené v RAM nebo v databázi).
<!--ID: 1731175818770-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Používá se v praxi HATEOAS?

Back:

Je to fajn koncept, ale reálně se to moc nepoužívá, protože je prostě jednodušší si držet stav na serveru (pomocí sessions).
<!--ID: 1731175818772-->

END

---

### Bezpečnost

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Z jakých částí se skládá **bezpečnost** komunikace přes internet? (2)

Back:

- **Message-level security**
- **Transport-level security**
<!--ID: 1731175818775-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je "Authz"?

Back:

To že řešíme **autorizaci** (že mám právo něco dělat)
<!--ID: 1731175818777-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby lze zajistit **autentizaci**?

Back:

- **Jméno heslo**
- **Certifikát**
<!--ID: 1731175818780-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby se řeší **autorizace**?

Back:

Např. role
<!--ID: 1731175818782-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co se snažíme v bezpečnosti komunikace přes internet zajistit v rámci **message-level security**? (5)

Back:

- **Autentizaci** - to že to jsem já
- **Autorizaci** - to že mám právo něco udělat
- **Důvěrnost zprávy** - to že nikdo nepřečte moji zprávu
- **Integrita zprávy** - to že nikdo nezmění zprávu
- **Nepopiratelnost** - to že nejsem schopný popřít, že jsem udělal určitou akci

<!-- DetailInfoStart -->

Ta nepopiratelnost je zajímavá v tom, že si hodně systémů prostě drží "stopy" a data o tom, co uživatelé dělají -> je těžký být anonymní na internetu, protože se všechno možný loguje.

<!-- DetailInfoEnd -->
<!--ID: 1731175818785-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Basic Access Authentication** a jak funguje?

Back:

Základní způsob **autentizace**.

Jak funguje:

1. Uživatel přistoupí na zdroj
2. Server zkontroluje autorizační hlavičku, zjistí že klient není autentizovaný
3. Server pošle klientovi response, že není autentizovaný a pošle mu informace o tom, jak se má autentizovat
4. Klient zadá autentikační data a pošle je (viz detail)
5. Server pak odpoví

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241104104054.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

Jméno a heslo se zakódují base64 (nikoliv zašifrují)! Tedy kdokoliv kdo by odposlechnul text si to může přečíst a získat jméno a heslo. Proto je třeba používat zabezpečený protokol HTTPS, aby da data byla zašifrovaná.

![](../../../Assets/Pasted%20image%2020241104104219.png)

<!-- DetailInfoEnd -->
<!--ID: 1731175818787-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Digest Access Authentication**?

Back:

Mezi klientem a serverem se **neposílá heslo**, ale jeho **hash**. **Ani server nezná to heslo.**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104104358.png)

<!-- DetailInfoEnd -->
<!--ID: 1731175818790-->

END

---

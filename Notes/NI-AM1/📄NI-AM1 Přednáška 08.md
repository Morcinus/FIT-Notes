---
created: 2024-11-18T14:56:08
title: "HTTP3"
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1 prednaska08 status-toReview

### Header compression

START
FIT-Card

Co je **header compression**?

Back:

Když posílám více requestů, tak se typicky ty hlavičky hodně opakují.

Díky header compression můžu uložit informace v hlavičkách a v request/responsech se pak můžu na ně odkazovat jen indexem -> šetří se data.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120144058.png)
![](../../Assets/Pasted%20image%2020241120144110.png)

<!-- DetailInfoEnd -->

END

---

### Analýza HTTP/2


START
FIT-Card

V čem spočítá analýza v HTTP/2?

Back:

Čtu si jednotlivé packety, mám třeba klíč, můžu si pak číst ty requesty.

END

---

### HTTP/3


START
FIT-Card

Co hlavně řeší HTTP/3?

Back:

HTTP/2 drawbacks
- U TCP se může stát, že segment nedoputuje na druhou stranu. V HTTP/2 to funguje tak, že pokud nedorazí packet, pošle se znovu. Do té doby ostatní segmenty musí čekat, než se doručí.
- TLS handshake musí být vždy po TCP handshake

END

---


START
FIT-Card

Jaké transportní protokoly používají jednotlivé verze HTTP?

Back:

- HTTP/1.1: TCP
- HTTP/2 - TCP
- HTTP/3 - QUIC, UDP
	- V QUIC se udělá jedno navázání spojení (nemusí se dělat zvlášť TCP a TLS handshakes, ale udělá se QUIC + TLS, takže to je najednou)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241120144907.png)
![](../../Assets/Pasted%20image%2020241120144916.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Jak se v HTTP/3 řeší to, když nějaký segment nedojde na druhou stranu spojení? 

Back:

- Data se posílají redundantně takovým spešl způsobem (mimo rozsah AM1)
	- Díky tomu lze ztracená data dopočítat z ostatních dat

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120145145.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je Network Switching?

Back:

Např. když chodím po kampusu, tak se mobil přepíná na různé wifiny. QUIC s tímhle dokáže výrazně lépe pracovat.

END

---

## Application Server Architecture


START
FIT-Card

Čeho je zkratka REST?

Back:

Representational State Transfer

END

---


START
FIT-Card

Co je Web Service Architecture?

Back:

Např.
- REST
	- **nejsou** tam endpointy ale **zdroje**
	- operace jsou doménově nezávislé (GET, PUT,..)
- RPC - vstupní data, operace, výstupní data (funkce)
	- **endpointy** mají názvy operace
	- operace jsou doménově závislé (CreateCustomer)

END

---


START
FIT-Card

Z čeho se skládá web architektura?

Back:

- **Identifikace**: univerzální identifikace zdrojů pomocí URI
- **Interakce**: protokoly pro získávání zdrojů - HTTP
- **Formáty**: reprezentace zdrojů (data a metadata)

END

---



START
FIT-Card

Jaké jsou základní principy RESTu?

Back:

Omezení:
- Client-server architektura
- Statelessnes - stav se neudržuje na serveru, ale v těch datech, co se přenáší
	- Stavy jsou data, přechody jsou linky (např. v HTML, nebo endpointy RESTu)
- Cacheability - requesty by mělo jít cachovat
- Layered system
- Uniform interface - operace CRUD jsou doménově nezávislé (tzn. nemám funkci `createOrder`, ale `POST /orders`)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120151248.png)
<!-- DetailInfoEnd -->



END

---

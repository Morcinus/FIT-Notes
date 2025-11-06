---
created: 2024-11-18T14:56:08
title: "HTTP3"
up: "[[📖NI-AM1]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM1 prednaska08 status-toReview


### Header compression

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **header compression**?

Back:

Když posílám více requestů, tak se typicky ty hlavičky hodně opakují.

Díky header compression můžu uložit informace v hlavičkách a v request/responsech se pak můžu na ně odkazovat jen indexem -> šetří se data.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241120144058.png)
![](../../../Assets/Pasted%20image%2020241120144110.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205750000-->

END

---

### Analýza HTTP/2

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

V čem spočívá analýza v HTTP/2?

Back:

Mám třeba klíč a díky tomu si můžu číst jednotlivé requesty.
<!--ID: 1735205750002-->

END

---

### HTTP/3

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké 2 novinky přináší HTTP/3 oproti HTTP/2?

(=nevýhody HTTP/2, které HTTP/3 řeší)

Back:

- U TCP spojení se může stát, že segment **nedoputuje na druhou stranu**. V HTTP/2 to funguje tak, že pokud nedorazí segment, pošle se znovu. Do té doby ostatní **segmenty musí čekat**, než se doručí.
  - V HTTP/3 na to jsou mechanismy, aby se chybějící segmenty dopočítaly z ostatních.
- U HTTP/2 musí být **TLS handshake** vždy po **TCP handshake**. U HTTP/3 se to provede najednou.
<!--ID: 1735205750004-->

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

Jaké transportní protokoly používají jednotlivé verze HTTP (1.1, 2 a 3)?

Back:

- HTTP/1.1: TCP
- HTTP/2 - TCP
- HTTP/3 - QUIC, UDP
  - V QUIC se udělá jedno navázání spojení (nemusí se dělat zvlášť TCP a TLS handshakes, ale udělá se QUIC + TLS, takže to je najednou)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241120144907.png)
![](../../../Assets/Pasted%20image%2020241120144916.png)

<!-- ImageEnd -->
<!--ID: 1735205750007-->

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

Jak se v HTTP/3 řeší to, když nějaký segment nedojde na druhou stranu spojení?

Back:

- Data se posílají redundantně takovým spešl způsobem (mimo rozsah AM1)
  - Díky tomu lze ztracená data dopočítat z ostatních dat

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241120145145.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205750010-->

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

Co je Network Switching?

Back:

Např. když chodím po kampusu, tak se mobil přepíná na různé wifiny. QUIC s tímhle dokáže výrazně lépe pracovat.
<!--ID: 1735205750012-->

END

---

## Application Server Architecture

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Čeho je zkratka REST?

Back:

Representational State Transfer
<!--ID: 1735205750015-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou základní 2 standardy ve Web Service Architectuře?

Back:

Např.

- REST
  - **nejsou** tam endpointy ale **zdroje**
  - operace jsou doménově nezávislé (GET, PUT,..)
- RPC - vstupní data, operace, výstupní data (funkce) - **endpointy** mají názvy operace - operace jsou doménově závislé (CreateCustomer)
<!--ID: 1735205750018-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Z jakých částí se skládá webová architektura? (3)

Back:

- **Identifikace**: univerzální identifikace zdrojů pomocí URI
- **Interakce**: protokoly pro získávání zdrojů - HTTP
- **Formáty**: reprezentace zdrojů (data a metadata)
<!--ID: 1735205750020-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou základní principy/omezení RESTu? (5)

Back:

- **Client-server architektura**
- **Statelessnes** - stav se neudržuje na serveru, ale v těch datech, co se přenáší
  - Stavy jsou data, přechody jsou linky (např. v HTML, nebo endpointy RESTu)
- **Cacheability** - requesty by mělo jít cachovat
- **Layered system**
- **Uniform interface** - operace CRUD jsou doménově nezávislé (tzn. nemám funkci `createOrder`, ale `POST /orders`)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241120151248.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205750023-->

END

---

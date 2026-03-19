---
created: 2024-11-13T17:11:17
title: "HTTP"
up: "[[📖NI-AM1]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM1 prednaska07 status-toReview


### Security

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je TLS?

Back:

Transport Level Security
<!--ID: 1735205750026-->

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

Jaké služby poskytuje TLS?

Back:

- Encryption
- Autentizaci
- Integritu
<!--ID: 1735205750029-->

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

Co se využívá v rámci šifrování (encryption) v TLS na začátku spojení?

Back:

**TLS handshake**
<!--ID: 1735205750031-->

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

Co se využívá v rámci integrity v TLS?

Back:

MAC - Message Authentication Code
<!--ID: 1735205750033-->

END

---

#### TLS handshake

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Optimalizace protokolu HTTP (latence, keep-alive, pipelining)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje TLS handshake?

Back:

(Před tím se provede TCP handshake)

1. **ClientHello**: Klient pošle zprávu serveru
2. **ServerHello**: Server pošle zprávu klientovi + certifikát
3. **Poslání klíče**: Klient pošle serveru klíč (RSA nebo Diffie-Hellman)
4. **Kontrola integrity** zprávy - server pošle "finished" zašifrovanou zprávu klientovi
5. **Dešifrování** - klient si dešifruje zprávu

Pak se můžou začít posílat data.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241113173436.png)
![](../../../Assets/Pasted%20image%2020241113173449.png)

<!-- ImageEnd -->
<!--ID: 1735205750036-->

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

Co je **ALPN** a **SNI**?

Back:

- **ALPN** - application level protocol negotiation - říká nám, jaký protokol se bude používat po navázání TLS spojení
- **SNI** - informace na jakém hostname ta komunikace probíhá

<!-- ExampleStart -->

Toho se dá prakticky využít:

- Např. mám webový server na portu 443. - Díky ALPN můžu za ten port schovat server, který je schopný komunikovat s různými protokoly - např. HTTP 1, HTTP 2 - Díky tomu můžu na jednom portu provozovat dvě různé služby - Pomocí té ALPN hlavičky pak poznám, na kterou službu přesměrovat tu komunikaci
  <!-- ExampleEnd -->
<!--ID: 1735205750039-->

END

---

#### Výměna klíčů

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 2 **hlavní metody pro výměny klíčů**?

Back:

- **RSA key exchange**
- **Diffie-Hellman** - prakticky se v dnešní době používá

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113174229.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205750042-->

END

---

#### Užitečné části TLS

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy spojení mezi klientem, middlewarem a serverem, co se týče **TLS**? (3)

Back:

- **TLS Offloading**
- **TLS Bridging**
- **TLS Pass-through** (end-to-end TLS)
<!--ID: 1736677615828-->

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

Co je **TLS Offloading**?

Back:

Komunikace mezi klientem a middlewarem je zabezpečená pomocí TLS.
Komunikace mezi middleware a serverem zabezpečená není.

Pozn. toto se často používá, protože middleware je často brána do vnitřní zabezpečené infrastruktury, kde to nemusím mít tolik zabezpečený. Tohle ale není best practice, protože útok může přijít i zevnitř. Proto existuje např. TLS Bridging
<!--ID: 1735205750044-->

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

Co je **TLS Bridging**?

Back:

Mezi klientem a middlewarem je jedno TLS spojení.
Mezi middlewarem a serverem je druhé TLS spojení.

Mám celkem tedy dvě.
<!--ID: 1735205750047-->

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

Co je **End-To-End TLS** (TLS pass-through)

Back:

Mám spojení klient-server-middleware a ta TLS session je mezi klientem a serverem. Middleware přeposílá tu komunikaci.

Middleware si při TLS handshake může přečíst pouze nezašifrované části packetů.
<!--ID: 1735205750049-->

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

Co je **Load balancer**?

Back:

Prvek, co rozděluje zátěž.

- Může využívat TLS offloading nebo TLS bridging
- Může využívat TLS pass-though s pomocí SNI
<!--ID: 1735205750052-->

END

---

## HTTP v2

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Optimalizace protokolu HTTP (latence, keep-alive, pipelining)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké byly cíle HTTP2?

Back:

- **Snížení latence**
- **Umožnění multiplexingu** - stačí jedno TCP spojení
- **Optimalizace hlaviček** - aby byly menší, lepší komprese
- **Prioritizace requestů a responses** (aby prohlížeč věděl, které requesty jsou důležitější)
<!--ID: 1735205750057-->

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

Jak se navazuje HTTP v2 spojení?

Back:

1. Nejdříve se naváže TLS a ALPN connection
2. Potom se odesílají data pomocí HTTP/2
<!--ID: 1735205750059-->

END

---

#### Binary framing

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **binary framing layer**?

Back:

Je v **aplikační vrstvě** a definuje, jak se ukládají requesty/responses a jejich headery a data v **binární podobě**.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241113180011.png)

<!-- ImageEnd -->
<!--ID: 1735205750062-->

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

Co je **stream** v HTTP/2?

Back:

Reprezentuje **request** a **response**.

Každá dvojice request-response je považována za jeden stream.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241113180235.png)

<!-- ImageEnd -->
<!--ID: 1735205750064-->

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

Co je **message** v HTTP/2?

Back:

Je to buď request nebo response.

Je to to, co se přenáší v rámci streamu

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241113180235.png)

<!-- ImageEnd -->
<!--ID: 1735205750067-->

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

Co je **frame** v HTTP/2?

Back:

Je to část HTTP/2 message.

Např. hlavička je ve framu, data jsou ve framu

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241113180235.png)

<!-- ImageEnd -->
<!--ID: 1735205750069-->

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

Jaká je struktura framu v HTTP/2?

Back:

- `length` - jak dlouhý je frame
- `type` - různé typy framů
- `flags`
- `stream identifier` - idčko streamu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113180730.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205750072-->

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

Proč má Javascript nižší prioritu než HTML a CSS při dělání requestů na web server?

Back:

Protože javascript může modifikovat DOM/CSSOM a je potřeba, aby byl DOM/CSSOM plně načtený, než tam javascript bude něco dělat. Proto se nejdříve načítá CSS a HTML a pak až JavaScript.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241113181453.png)

<!-- ImageEnd -->
<!--ID: 1735205750074-->

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

Jak se řeší priorita streamů?

Back:

- Každý stream může **záviset** na jiném streamu
- Každý stream může mít **přiřazenou váhu**

To ovlivňuje jejich prioritu.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241113181802.png)

<!-- ImageEnd -->
<!--ID: 1735205750077-->

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

Co je a jak funguje **Flow control** v HTTP/2?

Back:

Např. když se streamuje video ze serveru na klienta:

V rámci streamu si příjemce i odesílatel drží counter "velikost okna příjemce". Odesílatel posílá data a snižuje si svůj counter (pokud se dostane na nulu, tak se zastaví). Příjemce po tom, co zpracuje data, pošle `WINDOW_UPDATE` **frame** odesílateli, čímž mu zvýší counter. Odesílatel tak může zase posílat dál.

Díky tomu např. když člověk sleduje video, tak se mu dopředu načtou určité snímky (dokud se to vejde do window size).

Ty **window size** si drží **klient i server** (pro oba směry komunikace).

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113181909.png)

<!-- DetailInfoEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113181922.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241113182009.png)

<!-- ExampleEnd -->
<!--ID: 1735205750079-->

END

---

### Server push

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **server push**?

Back:

To, že server klientovi rovnou pošle i zdroje, které ví, že klient stejně bude potřebovat.

Pozn. server push se zas tolik nepoužívá, protože se ukázalo, že to není zas tak efektivní.

<!-- ExampleStart -->

Na serveru mám HTML stránku. Vím, že když jí klient získá, tak bude potom posílat i requesty na obrázky, co jsou na té stránce.

Proto rovnou můžu udělat to, že tomu klientovi rovnou pushnu ten obrázek.

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

Funguje to na základě mechanismu push-promise.

- Pokud klient výslovně neřekne, že to nechce (např. protože to má v cachi), tak mu to automaticky posílám.
  <!-- DetailInfoEnd -->
<!--ID: 1735205750081-->

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

Jak přesně funguje **server push**?

Back:

1. Server klientovi pošle `PUSH_PROMISE` frame - ten obsahuje informace o tom, co chce klientovi pushnout
2. Klient může odmítnout pushnutí pomocí framu `RST_STREAM`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241118150602.png)
![](../../../Assets/Pasted%20image%2020241118150617.png)
![](../../../Assets/Pasted%20image%2020241118150700.png)
BDP = kolik dat jsem v jednu chvíli schopný mít v

<!-- DetailInfoEnd -->
<!--ID: 1735205750084-->

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

Co je **BDP**?

Back:

_Bandwidth-delay product_ = kolik dat jsem v jednu chvíli schopný mít v přenosu

<!-- InformallySaidStart -->

Když si spojení představím jako rouru, tak kolik dat jsem schopný narvat celkem do té roury.

<!-- InformallySaidEnd -->
<!--ID: 1735205750087-->

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

Jak podle BDP poznám jeslti se mi vyplatí použít server-push?

Back:

Pokud množství dat je menší než BDP (tzn jsem schopný do té roury nacpat ještě data), vyplatí se mi to. Pokud je větší, nevyplatí se mi to.

<!-- DetailInfoStart -->

Ve většině případů se to nevyplatí.

<!-- DetailInfoEnd -->
<!--ID: 1735205750089-->

END

---

---
created: 2024-11-13T17:11:17
title: "HTTP"
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1 prednaska07 status-toReview

### Security


START
FIT-Card

Co je TLS?

Back:

Transport Level Security

END

---


START
FIT-Card

Jaké služby poskytuje TLS?

Back:

- Encryption
- Autentizaci
- Integritu

END

---


START
FIT-Card

Co se využívá v rámci šifrování (encryption) v TLS?

Back:

**TLS handshake**

END

---


START
FIT-Card

Co se využívá v rámci integrity v TLS?

Back:

MAC - Message Authentication Code

END

---

#### TLS handshake


START
FIT-Card

Jak funguje TLS handshake?

Back:

1. Client hello message - pošle klient serveru
2. Server hello - pošle server klientovi
3. Výměna klíčů pomocí RSA nebo Diffie-Hellmana
4. Kontrola integrity zpráv, pošle se "finished" zpráva
5. Dešifruje se zpráva, mohou se začít posílat data

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241113173436.png)
![](../../Assets/Pasted%20image%2020241113173449.png)

<!-- ImageEnd -->


END

---


START
FIT-Card

Co je **ALPN** a **SNI**?

Back:

- **ALPN** - application level protocol negotiation - říká nám, jaký protokol se bude používat po navázání TLS spojení
- **SNI** - informace na jakém hostname ta komunikace probíhá

<!-- ExampleStart -->
Toho se dá prakticky využít:
- Např. mám webový server na portu 443.
	- Díky ALPN můžu za ten port schovat server, který je schopný komunikovat s různými protokoly - např. HTTP 1, HTTP 2
	- Díky tomu můžu na jednom portu provozovat dvě různé služby
		- Pomocí té ALPN hlavičky pak poznám, na kterou službu přesměrovat tu komunikaci
<!-- ExampleEnd -->

END

---

#### Výměna klíčů


START
FIT-Card

Jaké jsou 2 výměny klíčů?

Back:

- RSA key exchange
- Diffie Hellman - prakticky se v dnešní době používá

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241113174229.png)
<!-- DetailInfoEnd -->


END

---

#### Užitečné části TLS


START
FIT-Card

Co je **TLS Offloading**?

Back:

Komunikace mezi klientem a middlewarem je zabezpečená pomocí TLS.
Komunikace mezi middleware a serverem zabezpečená není.

Pozn. toto se často používá, protože middleware je často brána do vnitřní zabezpečené infrastruktury, kde to nemusím mít tolik zabezpečený. Tohle ale není best practice, protože útok může přijít i zevnitř. Proto existuje např. TLS Bridging

END

---


START
FIT-Card

Co je **TLS Bridging**?

Back:

Mezi klientem a middlewarem je jedno TLS spojení.
Mezi middlewarem a serverem je druhé TLS spojení.

Mám celkem tedy dvě.

END

---


START
FIT-Card

Co je **End-To-End TLS** (TLS pass-through)

Back:

Mám spojení klient-server-middleware a ta TLS session je mezi klientem a serverem. Middleware přeposílá tu komunikaci.

Middleware si při TLS handshake může přečíst data a číst si tak potom i probíhající komunikaci.

END

---


START
FIT-Card

Co je **Load balancer**?

Back:

Prvek, co rozděluje zátěž.
- Může využívat TLS offloading nebo TLS bridging
- Může využívat TLS pass-though s pomocí SNI

END

---

## HTTP v2


START
FIT-Card

Co mění HTTP 2 oproti HTTP 1

Back:

Mění způsob přenosu dat, nemění sémantiku.

V HTTP 2 se přenáší data binárně, ale requesty se zapisují stejně

END

---


START
FIT-Card

Jaké byly cíle HTTP2?

Back:

- **Snížení latence**
- **Umožnění multiplexingu** - stačí jedno TCP spojení
- **Optimalizace hlaviček** - aby byly menší, lepší komprese
- **Prioritizace requestů a responses** (aby prohlížeč věděl, které requesty jsou důležitější)

END

---


START
FIT-Card

Jak se navazuje HTTP v2 spojení?

Back:

1. Nejdříve se naváže TLS a ALPN connection
2. Potom se odesílají data pomocí HTTP/2

END

---

#### Binary framing


START
FIT-Card

Co je **binary framing layer**?

Back:

V aplikační vrstvě je **binary framing** - způsob formátu request response v binárních framech.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241113180011.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Co je **stream** v HTTP/2?

Back:

Reprezentuje **request** a **response**. 

Každá dvojice request-response je považována za jeden stream.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241113180235.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Co je **message** v HTTP/2?

Back:

Je to buď request nebo response.

Je to to, co se přenáší v rámci streamu

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241113180235.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Co je **frame** v HTTP/2?

Back:

Je to část HTTP/2 message.

Např. hlavička je ve framu, data jsou ve framu

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241113180235.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jaká je struktura framu v HTTP/2?

Back:

- `length` - jak dlouhý je frame
- `type` - různé typy framů
- `flags`
- `stream identifier` - idčko streamu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241113180730.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Proč má Javascript nižší prioritu než HTML a CSS při dělání requestů na web server?

Back:

Protože javascript může modifikovat DOM/CSSOM a je potřeba, aby byl DOM/CSSOM plně načtený, než tam javascript bude něco dělat. Proto se nejdříve načítá CSS a HTML a pak až JavaScript.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241113181453.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jak se řeší priorita streamů?

Back:

- Každý stream může **záviset** na jiném streamu
- Každý stream může mít **přiřazenou váhu**

To ovlivňuje jejich prioritu.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241113181802.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Co je **Flow control** v HTTP/2?

Back:

Pokud se naplní buffer dat, systém mi zastaví to odesílání dat, aby se systém nezahltil.

Funguje to tak, že při komunikaci klient-server se posílá `WINDOW_UPDATE` frame spolu s responses, který poskytuje informaci o velikosti bufferu na druhé straně (např. na straně klienta).

Např. když sleduju video a klient ho pausne nebo stopne, chci notifikovat server, aby data dál neposílal.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241113181909.png)
<!-- DetailInfoEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241113181922.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241113182009.png)
<!-- ExampleEnd -->


END

---

### Server push


START
FIT-Card

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


END

---

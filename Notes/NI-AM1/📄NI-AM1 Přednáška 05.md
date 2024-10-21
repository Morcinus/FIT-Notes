---
created: 2024-10-21T12:04:54
title: "Microservices"
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1 prednaska05 status-toReview

### Microservices

START
FIT-Card

Jaké jsou **dva směry škálování**?

Back:

- **scaling up** - rozšiřování systémů
- **scaling down** - zmenšování systémů

<!-- ExplanationStart -->
- **scaling up** = to co se typicky chápe pod pojmem škálování
- **scaling down** = když se mi např. snižují počty uživatelů, tak nemá cenu mít obrovský systém, protože tím vyhazuju peníze.
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Jak se dá rozdělit systém? (3 vrstvy)

Back:

- **Data, procesy, funkce**
- **Software**
- **Hardware**

END

---



START
FIT-Card

Pomocí jakých diagramů se dají modelovat data, procesy a funkce?

Back:

- **Data** - ER diagramy
- **Procesy** - stavové diagramy, activity diagramy, sekvenční diagramy atd.
- **Funkce** - dá se nakreslit jako strom jednotlivých funkcí

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241021121709.png)
<!-- ImageEnd -->

Doporučuju mrknout na tohle:
<!-- DetailInfoStart -->
U té **hierarchie funkcí** to má pak výhodu, že pak je vidět, z jakých funkcí je složená.
- Každá funkce má nějaký vstup a výstup.

Na každou funkci (společně s jejímy podfunkcemi) se dá dívat jako na **proces**. 
V monolitické aplikaci mám celou aplikaci jako jeden proces.
![](../../Assets/Pasted%20image%2020241021121921.png)

<!-- DetailInfoEnd -->



END

---


START
FIT-Card

Jak funguje navrhování mikroslužeb?

Back:

1. Nakreslím **strom volání funkcí**. Ze začátku mám celou monolitickou aplikaci jako **jeden proces**.
2. Každý **uzel** toho stromu funkcí můžu považovat za **mikroslužbu**.

Když pak jedna ta funkce (mikroslužba) bude volat druhou, tak to už nebudu dělat jako normální volání funkcí, ale budu to muset dělat přes nějaké **rozhraní** (např. REST).

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241021122430.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Proč se u **mikroslužeb** neudělá z každé funkce mikroslužba?

Back:

- Protože pro každou mikroslužbu musím **definovat a implementovat** její rozhraní, což dost komplikuje celý systém
- Každou mikroslužbu musím managovat jako zvláštní proces, což je zase **nákladnější a komplikovanější** 

V architektuře mikroslužeb proto **musím dělat mikroslužby pouze tam, kde to dává smysl**.

END

---


START
FIT-Card

Co jsou 3 základní pojmy (začínající na $M$, které) se používají v architektuře mikroslužeb?

Back:

- **Monolit** - mám 1 proces, v něm je všechno
- **Mikroslužba** - druhý extrém, mám systém rozkouskovaný co nejvíce do mikroslužeb
- **Modulit** - "zlatá střední cesta", rozdělím systém do pár větších mikroslužeb, ale nedělám to pro každou minifunkcionalitu.

Když děláme architekturu mikroslužeb, tak se snažíme vytvářed **modulit** (architekturu modulitu).

<!-- DetailInfoStart -->
Když by mi dvě mikroslužby pak potřebovaly využívat stejnou funkcionalitu, tak z té funkcionality udělám **knihovnu**. Díky tomu to pak můžu používat v různých mikroslužbách.
- Nevýhoda: mám duplicitní kód v systému (několik mikroslužeb má nainstalováno stejnou knihovnu -> snižuje to výkon)
- Výhoda: je to všechno přehledný a funguje to dobře.
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou vlastnosti mikroslužeb? (5)

Back:

- **Loosely coupled** (volně párovaný) - integrovatelný pomocí definovaných rozhraní
- **Technology-agnostic protocols** - používám protokoly, co nejsou závislé na technologii. _Např. používám REST a je jedno, v čem mám ty mikroslužby nakóděné_
- **Independently deployable** - když potřebuju udělat změnu, stačí mi redeploynout jen tu danou mikroslužbu
- **Organized around capabilities** - každá mikroslužba se zaměřuje na danou věc _(např. accounting, billing, recommendation, atd.)_
- **Implemented using different technologies** - když např. potřebuju vysokou efektivitu, můžu si danou mikroslužbu udělat v Rustu nebo C++
- **Owned by a small team** - každá mikroslužba má vlastní malý tým, který se o ní stará a má za ní zodpovědnost

<!-- DetailInfoStart -->
**Owned by a small team:**
Např. ve Spotify se dělá to, že každá mikroslužba má vlastní tým, který zabírá **celý development cycle**. Např. frontenďák, backenďák, devopsák, tester atd.

Tradičně se to dělávalo tak, že když se vyvíjí fičura, tak je tým developerů, ty něco vyvinou a pak to předají testerům, ty pak devopsákům a údržbářům atd.

Nevýhoda toho je, že pak nastává "**ping pong**" game, kde si ty oddělení přehazují zodpovědnosti a hází to furt na ty druhý oddělení.

Ten novější přístup je právě pomocí menších týmů, který obsáhne celý development cycle, tudíž je jasný, kdo má za co zodpovědnost a nedochází k tomuhle přehazování.
<!-- DetailInfoEnd -->

END

---

### Komunikační protokoly


START
FIT-Card

Jaká je pomůcka pro zapamatování OSY vrstev?

Back:

"All people seem to need data processing"

![](../../Assets/Pasted%20image%2020241021125455.png)

END

---


START
FIT-Card

Jaký je rozdíl mezi **HTTP 1.1** a **2.0**?

Back:

- **HTTP 1.1** - data uložena textově
- **HTTP 2.0** - data uložena binárně

END

---


START
FIT-Card

Proč když vyvíjím aplikaci, je důležité mít server blízko klientům?

Např. když vyvíjím appku pro Česko, proč bych neměl mít server v USA?

Back:

Protože např. mezi Evropou a USA to zabere 84ms, než se udělá three way handshake a než dostanu data. Pokud budu mít hodně requestů, aplikace bude o dost pomalejší.

END

---


START
FIT-Card

Co je latence?

Back:

Jak dlouho na síti trvá přenos elementárních dat (malých dat).

END

---


START
FIT-Card

Co je RTT?

Back:

Round trip time. Čas než po síti přejde požadavek a odpověď.

Je to $2 \times \text{latence}$

END

---


START
FIT-Card

Co je RPT?

Back:

Request processing time - jak dlouho trvá zpracování požadvku na serveru.

END

---


START
FIT-Card

Co je výsledkem three way handshaku?

Back:

Vytvoří se TCP socket

END

---


START
FIT-Card

Čím je definovaný TCP socket?

Back:

- **zdrojová IP adresa** (klienta)
- **zdrojový port** (klienta)
- **cílová IP adresa** (serveru)
- **cílová port** (serveru)

Tím je jednoznačně identifikovaný každý TCP socket na internetu

END

---


START
FIT-Card

Jaké dva mechanismy se používají na snížení latence při three way handshaku?

Back:

- **HTTP Keep-alive**
- **HTTP pipelining**
- **TCP fast open**

<!-- ExampleStart -->
Tím řeším ten problém, když navazuju hodně spojení, tak abych neměl tak dlouhou odezvu
<!-- ExampleEnd -->


END

---


START
FIT-Card

Jak funguje **TCP fast open**?

Back:

1. Když se naváže spojení pomocí three way handshaku, uloží se na klienta **TCP cookie**.
2. Když chce klient znovu navázat TCP socket se serverem, pošle rovnou tu cookie s requestem, čímž se přeskočí three way handshake
3. Server pak rovnou odpoví s datama

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241021131825.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jak funguje **HTTP Keep-alive**?

Back:

Jeden TCP socket se využije na více requestů.

END

---


START
FIT-Card

Co je **origin**?

Back:

Je definovaný těmito hodnotami:
- **Doména**
- **Potokol**
- **Port**

<!-- DetailInfoStart -->
Origin je na klientovi, každý origin může mít až 6 TCP socketů najednou. Např. když bych v HTTP 1.1 načítal webovky, tak přes jeden socket půjde html, přes druhý CSS, přes třetí obrázek atd.

V HTTP 2.0 je změna, že se navazuje **pouze jedno** TCP spojení a dělá se tzv. prokládání, což znamená, že skrze jeden socket se přenáší všechny ty soubory.
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je hlavička SNI?

Back:

Server name information, hodnota hlavičky, kde je uložena adresa _(např. example.com)_, na kterou požadavek směřuje.

<!-- ExplanationStart -->
Je to to samý jako `Host` v hlavičce, ale **není to šifrovaný**, takže si to může přečíst kdokoliv, na té cestě toho streamu
<!-- ExplanationEnd -->

END

---

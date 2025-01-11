---
created: 2024-12-04T15:44:46
title: "HATEOAS"
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1 prednaska10 status-toReview

## HATEOAS


START
FIT-Card

Čeho je zkratka HATEOAS?

Back:

Hypertext as the Engine for Application State
<!--ID: 1735205749921-->
END

---


START
FIT-Card

Jak obecně funguje HATEOAS?

Back:

V responses serveru mám **linky** na **URI** nějakého zdroje.

Klient může aplikovat metody na daném linku (PUT, POST, DELETE...) aby se přesunul do jiného stavu.

<!-- ExampleStart -->
Když mám HTML stránku, tak každý link v ní je linkem an jinou HTML stránku. To jakou stránku mám načtenou je ten stav.
<!-- ExampleEnd -->
<!--ID: 1735205749924-->
END

---


START
FIT-Card

Jak souvisí **HATEOAS** a **statelessness** RESTu?

Back:

REST sám o sobě je stateless. HATEOAS nám umožňuje vytvořit ten "stav" na klientovi.

Klient pak ví, do jakých stavů se může dostat a může mezi nimi přeskakovat.

<!-- ExampleStart -->
Jak vypadá **stateful API** (server si pamatuje stav klienta):
![](../../Assets/Pasted%20image%2020241204155850.png)

Jak vypadá **stateless API** (klient si pamatuje svůj stav):
![](../../Assets/Pasted%20image%2020241204155840.png)

<!-- ExampleEnd -->
<!--ID: 1735205749926-->
END

---


START
FIT-Card

Co je Atom Syndication Format? Jaké jsou části Atom Linků?

Back:

Standard v rámci kterého jsou tzv. **Atom Links**: Ty se skládají z následujícího:
- `rel` - název linku (sémantika/význam operace)
- `href` - URI zdroje popsaného linkem
- `type` - typ zdroje

<!-- ExampleStart -->
Pozn. toto je příklad v XML, jde to i v JSONu
![](../../Assets/Pasted%20image%2020241204160829.png)
<!-- ExampleEnd -->
<!--ID: 1735205749929-->
END

---


START
FIT-Card

Co se dá použít v rámci `rel` v  Atom Links kromě názvu linku?

Back:

**URI adresu operace** (je to indentifikátor operace, ne zdroj)

Díky tomu můžu např. odkazovat na dokumentaci.

<!-- ExampleStart -->
Zde mám:
- `rel` - URI operace - tam si můžu zadefinovat tu operaci
- `href` - URI zdroje

![](../../Assets/Pasted%20image%2020241204160958.png)
<!-- ExampleEnd -->
<!--ID: 1735205749932-->
END

---


START
FIT-Card

Co jsou preconditions a effects v HATEOAS?

Back:

HATEOAS má dvě podmínky
- **preconditions** - musí být splněny ve stavu než spustím nějakou operaci (předchod do dalšího stavu)
- **effects** - musí být splněny po vykonání nějaké operace (přechodu do jiného stavu)

<!--ID: 1735205749934-->
END

---


START
FIT-Card

Co je best practice ohledně preconditions v HATEOAS?

Back:

Server by měl ideálně poskytovat klientovi takové informace tak, aby rovnou měl klient splněné preconditions a mohl se přesunout do dalšího stavu.

Na serveru tedy můžu **dopředu eliminovat přechody**, které vím, že nejsou pro klienta validní. Tím snižuju problémy, bugy a zpřehledňuju workflow klienta.

<!-- ExampleStart -->
1. Klient chce zaplatit
2. Server mu rovnou pošle seznam zrovna dostupných platebních metod
3. Klient vybere jednu metodu (přesune se do dalšího stavu)

Díky tomu se nemůže stát, že by klient např. vybral platební metodu a pak teprve zjistil, že je ve stavech ve "slepé uličce", protože ta metodu metodu nelze použít.
<!-- ExampleEnd -->
<!--ID: 1735205749937-->
END

---


START
FIT-Card

Jaké jsou hlavní 3 výhody/principy HATEOAS?

Back:

- **location transparency**
- **loose coupling**
- **statelessness and cloud**
<!--ID: 1735205749939-->
END

---


START
FIT-Card

Co je princip **location transparency** v HATEOAS?

Back:

Co zajišťuje:
- Když něco změním na backendu (např. názvy endpointů), nemělo by to klienta vůbec ovlivnit.

Jak toho docílíme:
- Publishnu světu jenom **vstupní stav** (entry.level link)
- Klient si pak naviguje po mém API díky metodám, které mu API dynamicky nabízí pomocí HATEOAS
	- Díky můžu více měnit backend, aniž bych tím ovlivňoval klienta 
<!--ID: 1735205749942-->
END

---


START
FIT-Card

Co je princip **loose coupling** v HATEOAS?

Back:

Zajišťujeme nezávislost klienta na serveru tím, že mu dávám **dynamicky** ty linky
<!--ID: 1735205749947-->
END

---


START
FIT-Card

Co je princip **statelessness and cloud** v HATEOAS?

Back:

Tím, že je HATEOAS stateless na serveru, tak má lepší **škálovatelnost**.
<!--ID: 1735205749952-->
END

---

### Cachování a concurrency control


START
FIT-Card

Proč se obecně používá cachování na webu?

Back:

- Zvýšení **škálovatelnosti**
- **Snížení zátěže** sítě
<!--ID: 1735205749954-->
END

---


START
FIT-Card

Jak funguje obecně cachování? (3 kroky)

Back:

Máme klienta, server a proxy. Proxy zajišťuje cachování.

1. Klient získá obsah ze zdroje
2. Server nastaví pravidla cachování (která klient respektuje)
3. Klient provede revalidaci, až vyprší platnost obsahu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241204162855.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749957-->
END

---


START
FIT-Card

Co znamená v `Cache-Control`:
- `private`
- `public`
- `no-cache`
- `no-store`
- `no-transform`
- `max-age`, `s-maxage`

Back:

- `private` - může cachovat jen klient, žádný prostředník
- `public` - může cachovat kdokoliv na cestě
- `no-cache` - může se cachovat, ale zdroj se musí vždy revalidovat
- `no-store` - nesmí se vůbec cachovat
- `no-transform` - nesmí transformovat cachovací data (např. komprese)
- `max-age`, `s-maxage` - kolik sekund se můžou data cachovat
<!--ID: 1735205749959-->
END

---


START
FIT-Card

Co znamená `Last-Modified` a `ETag` hlavička?

Back:

Hlavička co posílá server klientovi.

Reprezentuje to poslední změnu zdroje:
- `Last-Modified` - kdy byl zdroj naposledy změněn
- `ETag` - např. hash dat (díky tomu poznám jeslti se data změnila) 

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241204163817.png)
<!-- ExampleEnd -->
<!--ID: 1735205749962-->
END

---


START
FIT-Card

Co znamená `If-Modified-Since` a `If-None-Match` hlavička?

Back:

Hlavičky, co posílá klient serveru:
- `If-Modified-Since` - "vrať mi obsah zdroje, pokud se změnil od doby, kterou ti říkám"
- `If-None-Match` - "vrať mi obsah zdroje, pokud se změnil tento ETag"

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241204163817.png)
<!-- ExampleEnd -->
<!--ID: 1735205749964-->
END

---


START
FIT-Card

Jak funguje cachování pomocí Entity Tagu?

Back:

Kromě `Last-Modified` (ten se posílá vždy) pošle server i `ETag`, což je např. hash obsahu.

Klient pak posílá hlavičku `If-None-Match`.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241204164245.png)
<!-- ExampleEnd -->
<!--ID: 1735205749967-->
END

---


START
FIT-Card

Jaké jsou 2 typy ETagu?

Back:

- weak
- strong
<!--ID: 1735205749969-->
END

---



START
FIT-Card

Jak funguje weak ETag?

Back:

Reprezentuje zdroj "sémanticky" - tzn. na základě významu nějaké hodnoty.

<!-- ExplanationStart -->
Například můžu se rozhodnout, že lekce v kurzu se změnila pouze, pokud se změnil její nadpis, ale úpravy popisu lekce detekovat nebudu.
<!-- ExplanationEnd -->
<!--ID: 1735205749972-->
END

---


START
FIT-Card

Jak funguje strong ETag?

Back:

Reprezentuje kompletně celý zdroj "bit by bit"

<!-- ExplanationStart -->
Tzn. ať už změním cokoliv ve zdroji, tak se tím změní hodnota ETagu. 
<!-- ExplanationEnd -->
<!--ID: 1735205749974-->
END

---


START
FIT-Card

Jaké zdroje typicky používají strong etag a jaké weak etag?

Back:

- strong - **non-composed** zdroje
	- Tzn. ty, co lze měnit
	- Např. `/orders/:id`
- weak - **composed** zdroje
	- Tzn. když mám zdroj, co má shrnutí nějakých informací
	- Když změním obsah konkrétní objednávky, tak tím nezměním obecné informace o objednávkách
	- Např. `/orders`

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241204165317.png)
<!-- ExampleEnd -->
<!--ID: 1735205749977-->
END

---


START
FIT-Card

Jaká je výhoda ETagů oproti last modified?

Back:

Můžu (např. pomocí weak ETagů) mít detailnější kontrolu nad tím, kdy považuju data za změněná.
<!--ID: 1735205749979-->
END

---

#### Concurrency Control


START
FIT-Card

Co je obecně concurrency control?

Back:

Řízení toho, že mám hodně klientů, kteří modifikují data.

<!-- ExampleStart -->
V databázích se například zamkne zdroj, když k němu někdo přistupuje, aby to někdo jiný mezitím nezměnil. 
<!-- ExampleEnd -->
<!--ID: 1735205749982-->
END

---


START
FIT-Card

Co je princip optimistic concurrency control?

Back:

Předpokládáme, že když více klientů mění data, že s největší pravděpodobností nedojde ke konfliktu.

Pokud ke konfliktu dojde, tak ho detekuju a dokážu s ním nějak pracovat.
<!--ID: 1735205749984-->
END

---


START
FIT-Card

Jaký je vztah concurrency control a cachování?

Back:

Concurrency control je jakoby nadstavba protokolů pro cachování.
<!--ID: 1735205749987-->
END

---


START
FIT-Card

Jaké hlavičky se používají u concurrency control?

Back:

`If-Unmodified-Since` a `If-Match`
<!--ID: 1735205749989-->
END

---


START
FIT-Card

Jak funguje concurrency control? (3 kroky)

Back:

1. Klienti $A$ a $B$ si přečtou obsah zdroje, dostanou informaci `Last-Modified`
2. Klient $A$ provede aktualizaci zdroje s podmínkou `If-Unmodified-Since` + datum
	- Jelikož je podmínka splněná, server řekne `200 OK`
3. Klient $B$ provede aktualizaci zdroje s podmínkou `If-Unmodified-Since` + datum
	- Podmínka není splněná (bylo to modifikováno klientem $A$)
	- Zdroj ale nebude změněn a dostane odpověď
	- Server odpoví `412 Precondition Failed`
	- Klient $B$ tak musí znovu udělat `GET` a pak teprve změnit zdroj
<!--ID: 1735205749992-->
END

---

### Richardson Maturity Model


START
FIT-Card

Co je **Richardson Maturity Model**?

Back:

Model vyspělosti/kvality RESTového API.
<!--ID: 1735205749994-->
END

---


START
FIT-Card

Jaké jsou úrovně **Richardson Maturity Model**?

Back:

0. Level 0 - The Swamp of POX
	- Používáme REST čistě jako mechanismus pro RPC styl
1. Level 1 - Resources
	- Pracujeme se zdrojema, endpointama
	- Pořád ale nerespektuju metody (např. na vše používáme POST)
1. Level 2 - HTTP Verbs
	- Respektujeme i metody a jejich sémantiku (POST, GET, PUT, atd.)
2. Level 3 - Hypermedia Controls
	- Používáme HATEOAS

Nemusím nutně používat co nejvyšší level, ale měl bych rozumět tomu, proč danou úroveň používám. Je např. okay použít Level 0, když vím, že mám omezené zdroje a mám k tomu legitimní důvod.
<!--ID: 1735205749997-->
END

---

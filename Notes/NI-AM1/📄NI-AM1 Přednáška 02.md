---
created: 2024-10-11T09:30:48
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1

START
Basic

Definice: **architektura systému** (aka co mi definuje?)

Back:

Architektura určuje **strukturu** a **chování** sytému

END

---


START
Basic

Jaké jsou typy **architektury**? (2)

Back:

- **Enterprise architektura** - základní, obecný pohled na podnik
- **Konkrétní složky architektury**
	- enterprise, data, funkcionální, procesní, software, hardware,...

END

---


START
Basic

Jaké jsou **součásti vývoje** v architektuře?

Back:

- **Metodologie** - analýza, design, implementace, testování, údržba
- **Aktéři** - architekti (navrhuje architekturu), uživatelé, vývojáři, administrátoři,..

END

---


START
Basic

Jaké jsou 3 **úrovně návrhu architektury**?

Back:

- **konceptuální** - obecný, nezávislý na technologii
- **logický** - návrh pro konkrétní technologie
- **fyzický**

Pozn. tyhle 

END

---

START
Basic

Co je **doménově závislý** a **nezávislý**?

Back:

**Doménově závislý**:
- data, funkce, procesy jsou **doménově závislý** - tzn. závisí to na tom, jakou problematiku konkrétně řeším (např. jestli dělám skladový systém vs správu kaváren)

**Doménově nezávislý**:
- **softwarová** architektura (definuje softwarovou platformu)
- **hardwarová** architektura (definuje infrastrukturu)

END

---


START
Basic

Jaké jsou části Enterprise Architektury? (přehled)

Back:

![[Pasted image 20240930093046.png]]


END

---


START
Basic

Jaké jsou části **reprezentace enterprise architektury**?

Back:

**EIS** (enterprise information systems) 
- systémy pro řízení pro manažery
**BSS** (business support systems) 
- systémy, co působí v jednotlivých odděleních (např. hr, finance, marketing,...) - každé oddělení může mít vlastní systém
**OSS** (operational support systems) 
- řeší to kde firma působí v dané oblasti - (např. u telefonního operátora pro ovládání té sítě)
**B2B** (business to business)
- Zajišťuje integraci s externíma sysémama, dalšíma firmama (např. automatická komunikace se zákazníkama, dodavatelema, veřejnou správou atd.)
**OIS** (office information systems)
- Řeší správu dokumentů, document management system

![[Pasted image 20240930093423.png]]

END

---


START
Basic

Co je **integrační middleware**?

Back:

Řeší integraci více systémů. Propojuje mi to jednotlivé aplikace.

END

---

START
Basic

Jaké jsou **typy organizací**, co používají architektury co se týče vývoje?

Back:

- **Zákazník** - to, pro koho dodávám systém
	- definuje business requirements
- **Supplier**
	- Dělá vývoj softwaru na zakázku
- **Vendor** (technologický provider)
	- vyvíjí produkt podle potřeb trhu

![[Pasted image 20240930093901.png]]

END

---


START
Basic

Jaké jsou typy architektonických funkcí (typy architektů)?

Back:

**Technický architekt** - nemá moc znalostí o doméně, ale dokáže dobře nastavit ten systém atd.
- konfiguruje systém
**Solution architect** - zná dobře doménu, navrhuje strukturu a chování systému
- designuje funkce, data, procesy
**Enterprise architekt** - "vyšší vrstva solution architekta", má vyšší pohled ale taky víc do hloubky, hodně rozumí doméně

![[Pasted image 20240930094104.png]]

END

---


START
Basic

Co je **process classification framework**?

Back:

Framework pro klasifikaci procesů

END

---



START
Basic

Jaké levely má process classification framework?

Back:

PCF je **standard** - říká mi jakoby seznam obecných požadavků, co je dobrý implementovat v systémech. Když budu dělat systém, podívám se do standardu a on mi řekne, co všechno bych měl v systému vytvořit za funkcionality.

Podle PCF standardu:
- **Level 0** - obecné funkce co jsou potřeba
- **Level 1** - zpodrobňuje předchozí úroveň
- **Level 2** - zpodrobňuje předchozí úroveň
- **Level 3** - zpodrobňuje předchozí úroveň

Organizational specific:
- **Level 4**
- **Level 5**

![[Pasted image 20240930094550.png]]

Příklady procesů:
- **Order capture** - prodavač v obchodě do systému napíše, že zákazník na pobočce něco chce (objednávka je i změna, vymazání, jakákoliv akce zákazníka)
- **Sales order fulfillment** - řeší se synchronizace dat
- **Provision order** - zjistí se jestli je telefon na skladě, pokud ne, tak se objedná atd.
- **Bill fulfillment order** - řeší billing - posílá faktury atd.
- **Update order** - 

Různé typy systémů
- CRM (customer relation management) - do toho např. prodavač píše informace o objednávce zákazníka na pobočce
- OMS - order management system
- BRM - billing and revenue management
- Network

Všechny tyto systémy musím propojit, aby 
![[Pasted image 20240930094829.png]]

Takhle potom třeba vypadá konkrétní proces napříč jednotlivými systémy:
- tohle pak řeší ten technický architekt
![[Pasted image 20240930101202.png]]

END

---


START
Basic

Co se většinou používá pro integrační middleware v organizacích?

Back:

- Java a XML je nejpoužívanější ve velkých organizacích, je to už trošičku přežitek
- U nových systémů se používá JSON

END

---


START
Basic

Co je **pohled** XML a JSONů?

Back:

XML a JSON se dají reprezentovat jako **strom**.

Můžu potom vytvářet **pohledy** - tzn. píchnu prstem do určitého vrcholu a od něj dolů se budu na to dívat.

END

---


START
Basic

Jak se řeší **syntax** a **sémantika** v XML a JSONech?

Back:

**Syntax** - to jak se píše XML a JSON
**Sémantika** - co přesně tam chci psát (tzn. např že tam chci element customer, co má určitý atributy)

Např. tu sémantiku v JSONu se dá řešit pomocí JSONSchema standardu

END

---


START
Basic

Proč je důležité jasně definovat sémantiku v XML a JSONu?

Back:

Např. tady přirozeně chápu, že **name** je jméno zákazníka.
```xml
<customer>
	<name>
</customer>
```

Ale můžu mít i následující strukturu:
```xml
<car>
	<audi>
</car>
```

**Tyhle dva příklady mají různou sémantiku**. `name` je **vlastnost** `customera`. `audi` je **podtřída** `car`.

Tzn. já když designuju tu strukturu, tak přirozeně nějak chápu tu sémantiku, ale jiný člověk to může pochopit jinak. 

-> Potřebuju sémantiku **jasně definovat**. 

END

---


START
Basic

Co je jazyk **RDFS**?

Back:

Jazyk, co definuje **sémantiku** vazeb v XML a JSONu atd.

Tzn. můžu tím **jasně definovat sémantiku**.

Je to standard, nadstavba RDF (resource description framework)

END

---


START
Basic

Jaké jsou 2 typy integrací?

Back:

- **Intra-entreprise** integration - uvnitř organizace
- **Inter-enterprise** integration - mezi organizacemi


END

---

### Softwarová architektura

START
Basic

Co je **interface** v integracích? Co **obsahuje**? (4)

Back:

Každý interface má:
- **data** - tohle mi definuje payload (přenášená data)
- **funkce** - operace, co můžu volat (např REST endpoint)
- **proces** - určuje, jakým způsobem můžu s funkcemi pracovat (viz níže!)
- **technický detaily** (např. endpoint, ip adresa, atd.)

![[Pasted image 20240930104053.png]]

END

---


START
Basic

Jak přesně funguje **proces** v **interfacech**?

Back:

**Popisuje mi, jak mám používat jednotlivé funkce**.

Např.
Mám košík v obchodě:
- `open` - vyberu si košík
- `addLineItem` - přidám věc do košíku
- `close` - uzavřu košík, už tam nebudu nic dávat
- `checkout` - koupím věci v košíku

Jednotlivé operace jsou **funkce**. Proces je **POŘADÍ těch funkcí** (např. udělám jednu operaci, pak furt opakuju druhou, pak přejdu na další atd.).

Na modelování procesů se používá **stavový diagram**.

Když chci potom používat tu funkci, tak to budu dělat podle toho procesu (diagramu).

Problém je, že **není moc vynucovacích prostředků** na ten **proces**. Např. ve **Swaggeru** nemůžu nijak popsat ten proces.

Je to podobný jako u **sémantiky u JSONu a XML**. Tam mě taky nic nenutí modelovat ten soubor určitým způsobem, ale někde bych to měl mít zapsaný, abych to modeloval podle toho.

END

---

#### Softwarová architektura


START
Basic

Jaké jsou **typy softwarové architektury**?

Back:

- **centralizovaná** - client server
	- Nevýhoda - když spadne server, tak to nefunguje nic (single point of failure)
- **decentralizovaná** - peer to peer
	- Uzly v architektuře jsou nezávislý
	- Když failne jedna node, tak se to přepojí na jinou
	- Např. Torrent, Skype

![[Pasted image 20240930103343.png]]

Fun fact:
- Skype fungoval tak, že když člověk nepotřebuje komunikovat se serverem. Když člověk byl na veřejné síti, tak vpodstatě fungoval jako relay pro ostatní uživatele -> komunikace šla přes ostatní uživatele.
	- Teď už to není, dřív to tak bylo.

END

---


START
Basic

Co je **separation of concerns**?

Back:

Systém je vrstvenej. Mezi vrstvami mohu definovat **interface**/rozhraní.

![[Pasted image 20240930103530.png]]

END

---


START
Basic

Co je **interface**?

Back:

Lze ho chápat jako **dohodu** (agreement, contract) mezi dvěma systémama.

Domluví se na tom, jak bude ta komunikace fungovat.
![[Pasted image 20240930103653.png]]
![[Pasted image 20240930103616.png]]

Pokud tu "smlouvu" chci změnit, musím to verzovat. Nemůžu to jen tak měnit pod rukama toho druhého systému.

Např.
![[Pasted image 20240930104117.png]]

END

---


START
Basic

Jak může být **dosaženo contractu/interfacu**?

Back:

- **Standardy** - např. REST, XML...
- **Social agreement** - např. v týmu se rozhodnu, že to nějak budu dělat
- **Dominantní techologie** - např. když oracle dominuje market, tak se to typicky bude dělat podle nich

Co nejvíce bych se měl opírat o globální **standardy**. Neměl bych si vymýšlet něco svýho.

END

---

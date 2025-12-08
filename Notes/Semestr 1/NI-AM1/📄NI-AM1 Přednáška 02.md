---
created: 2024-10-11T09:30:48
up: "[[📖NI-AM1]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM1 prednaska02 status-toReview

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

Definice: **architektura systému** (aka co mi určuje?)

Back:

Architektura určuje **strukturu** a **chování** sytému.
<!--ID: 1728921214979-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké jsou typy **architektury**? (2)

Back:

- **Enterprise architektura** - základní, obecný pohled na podnik
- **Konkrétní složky architektury** - enterprise, data, funkcionální, procesní, software, hardware,...
<!--ID: 1728921214981-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké jsou **součásti vývoje** v architektuře? (2)

Back:

- **Metodologie** - analýza, design, implementace, testování, údržba
- **Aktéři** - architekti (navrhuje architekturu), uživatelé, vývojáři, administrátoři,..
<!--ID: 1728921214984-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké jsou 3 **úrovně návrhu architektury**?

Back:

- **konceptuální** - obecný, nezávislý na technologii
- **logický** - návrh pro konkrétní technologie
- **fyzický**
<!--ID: 1728921214987-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké části softwarů jsou **doménově závislé** a **doménově nezávislé**?

(data, funkce, procesy, softwarová architektura, hardwarová architektura)

Back:

**Doménově závislý**:

- data, funkce, procesy jsou **doménově závislý** - tzn. závisí to na tom, jakou problematiku konkrétně řeším (např. jestli dělám skladový systém vs správu kaváren)

**Doménově nezávislý**:

- **softwarová** architektura (definuje softwarovou platformu)
- **hardwarová** architektura (definuje infrastrukturu)
<!--ID: 1728921214989-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

Jaké jsou části Enterprise Architektury? (přehled)

Back:

![[Pasted image 20240930093046.png]]
<!--ID: 1728921214992-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

Jaké jsou části **reprezentace enterprise architektury**? (5)

Back:

- **EIS** (executive information systems)
- **BSS** (business support systems)
- **OSS** (operational support systems)
- **B2B** (business to business)
- **OIS** (office information systems)

![[Pasted image 20240930093423.png]]
<!--ID: 1728921214995-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **EIS** systémy?

Back:

**EIS** (executive information systems):
systémy pro řízení pro manažery

<!-- ImageStart -->

![[Pasted image 20240930093423.png]]

<!-- ImageEnd -->
<!--ID: 1736418422039-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **BSS** systémy?

Back:

**BSS** (business support systems):
systémy, co působí v jednotlivých odděleních (např. hr, finance, marketing,...) - každé oddělení může mít vlastní systém

<!-- ImageStart -->

![[Pasted image 20240930093423.png]]

<!-- ImageEnd -->
<!--ID: 1736418422051-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **OSS** systémy?

Back:

**OSS** (operational support systems):
řeší to kde firma působí v dané oblasti - (např. u telefonního operátora pro ovládání té sítě)

<!-- ImageStart -->

![[Pasted image 20240930093423.png]]

<!-- ImageEnd -->
<!--ID: 1736418422054-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **B2B** systémy?

Back:

**B2B** (business to business):
Zajišťuje integraci s externíma systémama, dalšíma firmama (např. automatická komunikace se zákazníkama, dodavatelema, veřejnou správou atd.)

<!-- ImageStart -->

![[Pasted image 20240930093423.png]]

<!-- ImageEnd -->
<!--ID: 1736418422057-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **OIS** systémy?

Back:

**OIS** (office information systems):
Řeší správu dokumentů, document management system

<!-- ImageStart -->

![[Pasted image 20240930093423.png]]

<!-- ImageEnd -->
<!--ID: 1736418422060-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Co je **integrační middleware**?

Back:

Řeší integraci více systémů. Propojuje mi to jednotlivé aplikace.
<!--ID: 1728921214998-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké jsou **typy organizací**, co používají architektury co se týče vývoje? (3)

Back:

- **Zákazník** - to, pro koho dodávám systém
  - definuje business requirements
- **Supplier** (dodavatel)
  - Dělá vývoj softwaru na zakázku
- **Vendor** (technologický provider)
  - vyvíjí produkt podle potřeb trhu, prodává hotové produkty
  - Např. Azure, Excel,...

![[Pasted image 20240930093901.png]]
<!--ID: 1728921215000-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké jsou typy architektonických funkcí (typy architektů)? (3)

Back:

- **Enterprise architekt** - "vyšší vrstva solution architekta", má vyšší pohled ale taky víc do hloubky, hodně rozumí doméně
- **Solution architect** - zná dobře doménu, navrhuje strukturu a chování systému
  - designuje funkce, data, procesy
- **Technický architekt** - nemá moc znalostí o doméně, ale dokáže dobře nastavit ten systém atd.
  - konfiguruje systém

![[Pasted image 20240930094104.png]]
<!--ID: 1728921215003-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

Co je **process classification framework** (PCF)?

Back:

PCF je **standard** - říká mi jakoby seznam obecných požadavků, co je dobrý implementovat v systémech. Když budu dělat systém, podívám se do standardu a on mi řekne, co všechno bych měl v systému vytvořit za funkcionality.
<!--ID: 1728921215006-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké levely má **process classification framework**?

Back:

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
<!--ID: 1728921215009-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Jaké **programovací jazyky** a **formáty dat** se používají pro integrační middleware v organizacích?

Back:

- **Java** a **XML** je nejpoužívanější ve **velkých organizacích**, je to už trošičku přežitek
- U nových systémů se používá **JSON** a **modernější programovací jazyky**
<!--ID: 1728921215011-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Co je **pohled** XML a JSONů?

Back:

XML a JSON se dají reprezentovat jako **strom**.

Můžu potom vytvářet **pohledy** - tzn. píchnu prstem do určitého vrcholu a od něj dolů se budu na to dívat.
<!--ID: 1728921215014-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Jak se řeší **syntax** a **sémantika** v XML a JSONech?

Back:

- **Syntax** - to jak se obecně píše XML a JSON
- **Sémantika** - jak konkrétně vypadá struktura XML/JSONu pro daný problém

**Syntax** mi jasně definuje ten standard, **sémantiku** si musím zadefinovat sám např. pomocí **RDFS** nebo **JSONSchema**.
<!--ID: 1728921215017-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Proč je důležité jasně **definovat sémantiku** v XML a JSONu?

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
<!--ID: 1728921215020-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Co je jazyk **RDFS**?

Back:

**RDFS** (Resource Description Framework Schema):

Standard (jazyk), který je nadstavbou **RDF** a umožňuje mi jasně definovat **sémantiku** XML a JSONu.
<!--ID: 1728921215022-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

Jaké jsou 2 typy integrací (podle toho jestli jsou uvnitř organizace nebo ne)?

Back:

- **Intra-entreprise** integration - uvnitř organizace
- **Inter-enterprise** integration - mezi organizacemi
<!--ID: 1728921215025-->

END

---

### Softwarová architektura

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Co je **interface** v integracích? Co **obsahuje**? (4)

Back:

Každý interface má:

- **data** - tohle mi definuje payload (syntax, sémantiku)
- **funkce** - operace, co můžu volat (např REST endpoint)
- **proces** - určuje stavy a přechody (jakým způsobem můžu s funkcemi pracovat)
- **technický detaily** (např. endpoint, ip adresa, atd.)

![[Pasted image 20240930104053.png]]
<!--ID: 1728921215028-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Jak přesně funguje **proces** v **interfacech**? Co se používá pro jeho **modelování**?

Back:

Popisuje mi, **jak** mám používat jednotlivé funkce (např. **v jakém pořadí** - viz vysvětlení).

Na modelování procesů se používá **stavový diagram**.

<!-- ExplanationStart -->

Např.
Mám košík v obchodě:

- `open` - vyberu si košík
- `addLineItem` - přidám věc do košíku
- `close` - uzavřu košík, už tam nebudu nic dávat
- `checkout` - koupím věci v košíku

Jednotlivé operace jsou **funkce**. Proces je **POŘADÍ těch funkcí** (např. udělám jednu operaci, pak furt opakuju druhou, pak přejdu na další atd.).

Když chci potom používat tu funkci, tak to budu dělat podle toho procesu (diagramu).

Problém je, že **není moc vynucovacích prostředků** na ten **proces**. Např. ve **Swaggeru** nemůžu nijak popsat ten proces.

Je to podobný jako u **sémantiky u JSONu a XML**. Tam mě taky nic nenutí modelovat ten soubor určitým způsobem, ale někde bych to měl mít zapsaný, abych to modeloval podle toho.

<!-- ExplanationEnd -->
<!--ID: 1728921215031-->

END

---

#### Softwarová architektura

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

Jaké jsou **typy softwarové architektury** (dle centralizovanosti)? (2)

Back:

- **centralizovaná** - client server
  - Nevýhoda - když spadne server, tak to nefunguje nic (single point of failure)
- **decentralizovaná** - peer to peer
  - Uzly v architektuře jsou nezávislý
  - Když failne jedna node, tak se to přepojí na jinou
  - Např. Torrent, Skype

![[Pasted image 20240930103343.png]]

Fun fact:

- Skype fungoval tak, že když člověk nepotřebuje komunikovat se serverem. Když člověk byl na veřejné síti, tak vpodstatě fungoval jako relay pro ostatní uživatele -> komunikace šla přes ostatní uživatele. - Teď už to není, dřív to tak bylo.
<!--ID: 1728921215034-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

Co je **separation of concerns**?

Back:

Systém je vrstvenej. Mezi vrstvami mohu definovat **interface**/rozhraní.

![[Pasted image 20240930103530.png]]
<!--ID: 1728921215036-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Co je **interface**?

Back:

Lze ho chápat jako **dohodu** (agreement, contract) mezi dvěma systémama.

Domluví se na tom, jak bude ta komunikace fungovat.
![[Pasted image 20240930103653.png]]
![[Pasted image 20240930103616.png]]

Pokud tu "smlouvu" chci změnit, musím to verzovat. Nemůžu to jen tak měnit pod rukama toho druhého systému.

Např.
![[Pasted image 20240930104117.png]]
<!--ID: 1728921215039-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

Jak může být **dosaženo contractu/interfacu**? (3)

Back:

- **Standardy** - např. REST, XML...
- **Social agreement** - např. v týmu se rozhodnu, že to nějak budu dělat
- **Dominantní techologie** - např. když oracle dominuje market, tak se to typicky bude dělat podle nich

Co nejvíce bych se měl opírat o globální **standardy**. Neměl bych si vymýšlet něco svýho.
<!--ID: 1728921215042-->

END

---

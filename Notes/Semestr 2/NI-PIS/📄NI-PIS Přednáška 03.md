---
created: 2025-03-06T16:16:55
title: "Architektura a integrace"
up: "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska03 status-toReview


START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **typy architektury**? (4)

Back:

- **Computer architecture** - design vnitřností počítačového systému (nap=ř. hardware components)
- **Systems architecture** - design systémů, integrace softwaru a hardwaru k vytvoření funkčního zařízení
- **Software architecture** - čistě software
- **Enterprise architecture** - design organizací a procesů

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250306162101.png)

<!-- DetailInfoEnd -->

Pozn. enterprise architektura obsahuje i organizaci podniku, i třeba uspořádání poboček apod.
<!--ID: 1746599651911-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **software architektura**?

Back:

Architektura je "**znalost o systému**", kterou si lidé mezi sebou sdílí. Jsou tam ty **důležité věci** (to co ty lidi považujou za důležité).

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250306162129.png)

<!-- DetailInfoEnd -->

![](../../../Assets/Pasted%20image%2020250306162927.png)
<!--ID: 1746599651918-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **SWEBOK**?

Back:

Software Engineering Body of Knowledge

- Je to free knížka od IEEE, je tam kompletně popsný softwarové inženýrství.
- Prý to je dobrý, že tam jsou odkazy na další zdroje (**prý to nemá cenu číst**)
<!--ID: 1746599651925-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **C4 model**?

Back:

Architekturu bychom měli zapisovat ve 4 různých úrovních.

Podobně jako mapy:

- **kontinenty**
- **země**
- **části zemí**
- **street view**
<!--ID: 1746599651933-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Enterprise architecture**?

Back:

**Designuje organizaci jako celek** - spojuje byznys procesy, technologie, data a strategii a cíle organizace.

Vytváří to jakýsi blueprint/framework pro organizaci - struktury, procesy a technologie

![](../../../Assets/Pasted%20image%2020250306164735.png)
<!--ID: 1746599651940-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **TOGAF**?

Back:

Enterprise architecture framework

The Open Group Architecture Framework

- Je to popis jak dělat architekturu
- Je tam hromada různých doporučení atd.
  - Problém je, že tam není napsaný, jak to dělat
  - Těžko se to přímo aplikuje
- **Firmy se tím snaží řídit** (je to jednodušší, než se neřídit ničím)
<!--ID: 1746599651948-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **enterprise integration**?

Back:

Propojování systémů vrámci podniku a mezi podnikem a externími systémy.

![](../../../Assets/Pasted%20image%2020250306164751.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250306164801.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599651959-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou způsoby **Enterprise Integrace**? (3 části)

Back:

- **Application integration** - na úrovni aplikací
  - SOA - service oriented architecture
  - API - application programming interfaces
  - EBS - enterprise service busses
- **Data integration** - integrace dat
  - ETL - extract, transform, load
  - ELT - extract, load, transform
- **Process integration** - integrace procesů - BPM - business process management (např. BPMN diagramy)
<!--ID: 1748435998155-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší ETL a ELT data integrace?

Back:

**ETL – Extract, Transform, Load**

- Extract (extrakce) – data se získají ze zdrojových systémů (např. databáze, API, CSV).
- Transform (transformace) – data se upraví (čistí, agregují, mění formát) ještě před nahráním.
- Load (nahrání) – transformovaná data se uloží do cílového systému (např. datový sklad).

Vhodné pro: tradiční datové sklady, kde je třeba mít plně připravená data.

**ELT – Extract, Load, Transform**

- Extract (extrakce) – data se získají ze zdrojů.
- Load (nahrání) – data se nejprve uloží do cílového systému v surové podobě.
- Transform (transformace) – transformace probíhá až v cílovém systému (např. pomocí SQL nebo nástrojů jako dbt).

Vhodné pro: moderní cloudové datové sklady (např. BigQuery, Snowflake), které zvládají velké objemy dat a výkonné transformace přímo ve skladu.
<!--ID: 1748435998160-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou hlavní výzvy enterprise integrace? (5)

Back:

- **Komplexita dat a prostředí** - různé technologie, data storages, datové formáty,...
- **Kvalita dat** - nekonzistence, různé requirements a use cases
- **Bezpečnost** - riziko krádeže a security breaches
- **Náklady** - tooling a služby
- **Change maangement** - systém se furt mění a vylepšuje

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250306165806.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599651967-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je shadow IT?

Back:

Když lidé používají IT systémy jinak, než je jak centrálně určeno, že se to má používat.

Např. místo toho aby se začal používat nějaký nový informační systém, tak to někdo nabuší do Excelu a rozpošle to mailem osatním. Ten excel pak je v tom podniku x let a lidi to furt používají.

![](../../../Assets/Pasted%20image%2020250306170635.png)
<!--ID: 1746599651975-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Popiš následující obrázek
![](../../../Assets/Pasted%20image%2020250306171016.png)

Back:

Vlevo jsou operační systémy
Vpravo je "svět analytiky/business intelligence"
<!--ID: 1746599651984-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je největší limitující hardwarový faktor v dnešní době?

Back:

**Propustnost (bandwidth)** je limitující.

- Storage ok
- CPU ok
<!--ID: 1746599651991-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je myšlenka Deploy není release?

Back:

Nemusím dělat release (např 1x za 4 týdny), ale můžu deployovat okamžitě a kdykoliv. Například 6x denně.

To může znamenat:

- Nasadím, ale pouze malé množství uživatelů má přístup k nové verzi
- Nebo nasadím a systém funguje duálně (obě verze)
- canary releases
- shadow releases
- apod.

Toho lze docílit pomocí Kubernetes
<!--ID: 1746599651999-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kam se obecně pohybuje trend uchovávání dat?
![](../../../Assets/Pasted%20image%2020250306171016.png)

Back:

Ten "datový svět" vpravo a "aplikační svět" vlevo se přibližují k sobě. Víc se míří k tomu, že bude jedno centrální místo na všechna data.
<!--ID: 1746599652006-->

END

---

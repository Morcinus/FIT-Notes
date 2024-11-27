---
created: 2024-11-27T09:34:19
title: "Scrum"
up: "[[📖NI-TSW]]"
---

TARGET DECK: NI-TSW
FILE TAGS: NI-TSW prednaska05 status-toReview

### Scrum

START
FIT-Card

Jaká je max délka sprintu ve Scrumu?

Back:

Max měsíc. pak už to není agilní

END

---


START
FIT-Card

Jaké jsou fáze sprintu?

Back:

1. Sprint planning - vybere se, co se bude dělat -> sprint backlog
	- Projdou se taky věci z předchozího sprintu a buď se na tom pracovat nebude nebo se to naplánuje
2. Cyklus
	1. Standupy (Daily Scrum) - nemusí být nutně denní
	2. Plní se věci ze standupu
3. Sprint review - řekne se co se udělalo, co je třeba udělat a co je rozdělaný
	- Na to se často používá kanban board (todo, done, progress)
4. Sprint retrospective
	- Každý řekne, co se mu na sprintu nelíbilo
	- Není to zaměřený na to, co bylo hotovo a co ne, ale na ten proces obecně
	- Např. málo kafe, stories byly přepálený, blbě naplánovaný story pointy atd.

Tímto procesem se dělají postupné inkrementy.

END

---


START
FIT-Card

Jak často se dělá standup meeting?

Back:

Nemusí to být denně, je to podle celkové délky sprintu.

Např. když je sprint 2 týdenní, tak dává smysl to mít třeba 3x týdně.

<!-- DetailInfoStart -->
Díky tomu to pomůže scrum masterovi mít přehled o stavu projektu a členům týmu to umožní mít přehled o tom, co dělají ostatní 
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak dlouho by měl trvat Standup (Daily Scrum).

Back:

- Každý by měl mít slovo tak 2 min max
- Celkem by meeting měl trvat třeba 15m max

END

---


START
FIT-Card

Co má každý říct při scrum standupu?

Back:

Co jsem dělal včera, co budu dělat dneska, jaký mám problém

END

---


START
FIT-Card

Kdy by se měl řešit problém, pokud ho někdo nahlásí v Standupu?

Back:

Nemělo by se to řešit na tom meetingu!

Měl by to pak manager sám vyřešit

END

---

### Řízení změn

START
FIT-Card

Jaký je rozdíl mezi chybou a změnou?

Back:

- **Chyba** - software není podle původních požadavků
- **Změna** - žádost o změnu požadavku

<!-- DetailInfoStart -->
Proto je třeba přesně zafixovat požadavky. Jinak bude člověk furt všechno předělávat.

Je potřeba to klientovi jasně na začátku vysvětlit co je změna a co je chyba.

I v agilitě je třeba zafixovat požadavky (minimálně ty core funkcionality). Podobně jako když stavím dům, tak když mám blbě základovou desku, tak se pak blbě předělává zbytek baráku.

Pozn. change management je zaznamenaný v ČSN ISO 10 007 (směrnice managementu konfigurace)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Je agilita rychlejší než waterfall?

Back:

Ne, je to cca stejně rychlý, jen to je jinak poskládaný.

END

---


START
FIT-Card

Proč se změny dělají lépe když nemám fixed time, fixed price?

Back:

Protože můžu pak člověku dát hodinovku a odhad ceny té změny a zákazník si to může měnit jak chce.

Když mám fixed time fixed price, je tam dost stres, aby se to stihlo atd., takže jakákoliv změna je pain.

END

---


START
FIT-Card

Jaké jsou fáze řízení změn?

Back:

1. **Identifikace změny**
2. **Implementace schválené změny**
3. **Ukončení**

END

---


START
FIT-Card

Co je klíčové mít k dobrému řízení změn?

Back:

- Mít dobře a **podrobně udělanou analýzu** (requirements), abych byl schopný jednoduše rozlišovat změny a chyby.
	- Analýza musí být zkontrolována zákazníkem

<!-- DetailInfoStart -->
Pro tip: literally si zapisovat do tabulky "dobré skutky", co jsme udělali klientovi. Když s ním pak debatuju, můžu mu říct, co jsem pro něj udělal a aby udělal něco pro mě.
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jakou rezervu by si člověk měl dávat při ohodnocování projektu?

Back:

cca 10%

<!-- ExplanationStart -->
Tím pokryju ty věci jako:
- spálený čas tím že se dohaduju o změnách, které pak nejsou implementované
- spálený čas tím, že dělám nabídky, které nejsou přijmuty
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Co je ITIL?

Back:

Information Technology Infrastructure Library
- veřejně dostupný standard
- informace a best practices o tom, jak správně řídit služby a operation, change management, stategy management atd.

END

---


START
FIT-Card

Jaké jsou nejčastější chyby při řízení změn?

Back:

- Změny nejsou důsledně dokumentovány
- Změny jsou analyzovány a plánovány bez účasti pracovníků, kteří budou změny zavádět - měl by o tom vědět ten tým hned na začátku. Ne až po domluvě se zákazníkem
- O změně nejsou včas informováni lidé pracující na projektu
- Změna není schválena odpovědným orgánem (projektový manažer změnu nepředloží ke schválení)

END

---


START
FIT-Card

Jaký je rozdíl mezi **vývojem**, **rozvojem** a **provozem**?

Back:

- **vývoj** - vytváření softwaru
- **rozvoj** - dělání změn a nových fičur
- **provoz** - udržování softwaru tak aby fungoval, oprava chyb

<!-- DetailInfoStart -->
Na různé části projektu mám různé peníze:
- **rozvoj** - investiční peníze na zlepšení produktu
- **provoz** - must have peníze pro to aby projekt byl udržen při životě

Když se škrtají peníze, tak se nedá moc škrtat provoz.

<!-- DetailInfoEnd -->

END

---

### Řízení kvality


START
FIT-Card

Co je klíčové pro dobrý quality assurance (řízení kvality)?

Back:

- dobře sepsané cíle projektu
- dobře udělaná analýza

END

---


START
FIT-Card

Co je třeba řešit v quality assurance?

Back:

- kvalita procesů projektu
- kvalita produktu projektu
	- u každé story by měly být sepsaný akceptační kritéria - díky tomu vím, co přesně musím splnit
		- např. prostě zadání z use casu

END

---


START
FIT-Card

Podle čeho je specifikována kvalita?

Back:

Hodně podle ISO norem. Např. ISO 10 004 atd. Můžu si najít další.

END

---


START
FIT-Card

Čeho je zkratka TQM?

Back:

Total Quality Management
- proces, jehož cílem je spokojený zákazník
- koncepce, co se zaměčuje na zlepšení procesů a činností podniku

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127104234.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou nástroje pro řízení kvality? (3)

Back:

- **Plánování kvality**
	- Stanovení cílů kvality
	- Vlastnosti produktů/služeb
	- Standardy výkonnosti
	- Stanovení procesů pro danou kvalitu
- **Zajištění kvality**
	- Koordinace postupů podle plánu řízení kvality
- **Kontrola kvality**
	- Inspekce, měření a audity kvality

END

---

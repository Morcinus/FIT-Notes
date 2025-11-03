---
created: 2025-04-17T16:45:46
title: "Nevim"
up: "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska09 status-toReview


START
FIT-Card

(FIT-Notes flashcard)

Co jsou BI systémy?

Back:

**Business intelligence** = umožňují dělat rozhodnutí ve firmě
<!--ID: 1748444828752-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 3 typy rozhodování v business intelligence systémech?

Back:

- **Operativní** = na denní bázi, nižší management - např. sledování pohledávek
- **Taktické** = na měsíční/čtvrtletní bázi, střední management - např. sledování plánu kampaní
- **Strategické** = na roční a delší bázi, top management, board
<!--ID: 1748444828766-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou části magického kvadrantu data managementu? (4)

Back:

- **Availability** - zajistit, aby data byla přístupná tomu kdo to potřebuje
- **Flexibility** - možnost měnit datový model, přidávání nových zdrojů dat, nové reporty atd.
- **Resources** - míra investice do data managementu - čas, lidé, technologie
- **Control** - musím omezit, kdo může přistupovat k jakým datům
<!--ID: 1746599651717-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 3 typické části datového skladu?

Back:

- L0 **DWH Stage** - tam se nahrají data z jíných systémů
- L1 **DWH Core** - tam jsou uložena data v jednotném modelu
- L2 **Data Marts** - tam se vytahují data pro jednotlivé reporty

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250528164952.png)

<!-- ImageEnd -->
<!--ID: 1748444828768-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **4 dimenze data landscape mappingu**?

Back:

1. **Pojmenovat data**
2. **Namapovat data na fyzická datová uložiště**
3. **Propojení dat s obchodními procesy**
4. **Propojit data na organizační strukturu**

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250528165043.png)

<!-- ImageEnd -->
<!--ID: 1746599651724-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **data lineage**?

Back:

Cesta dat od vzniku až po jejich použití. Typicky jsou v tom různé datové transformace.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250528165155.png)
![](../../../Assets/Pasted%20image%2020250528165159.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599651734-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká je hierarchie modelů? (4)

Back:

1. **Business model** - Součástí toho **KPIs**
2. **Konceptuální model** - základní prvky, obecný popis
3. **Logický datový model** - zachycuje datové prvky dle zvolené technologie
   - Typicky se člověk snaží identifikovat entity (v bankách typicky kontrakty a osoby - dodavatelé, bankéři,...)
4. **Fyzický datový model** - návrh konkrétních tabulek v databázi atd.
<!--ID: 1746599651741-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co ja **Master Data Management**?

Back:

**Source of truth pro data, která se používají napříč systémy**

Např. data o zákazníkovi jsou rozházená v různých systémech a může být těžký je pospojovat dohromady (např. čistě podle jména to je často nepřesný).

Proto se dělá to, že se udělá "golden record" - vytváří se jeden ucelený záznam např. v separátní databázi nebo v datových skladech

Tohle je obecně téma toho master data managementu
<!--ID: 1746599651750-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **typy datových schémat**? (4)

Back:

- **Star schema** - jedna centrální tabulka obklopena přímými dimenzemi, dimenze jsou denormalizované
- **Snowflake schema** - dimenzní tabulky jsou normalizované - méně redundance, ale složitější joiny
- **Constellation schema** - více faktových tabulek co sdílí dimenze
- **Snowstorm schema** - extrémně rozvětvená snowflake struktura
<!--ID: 1748444828771-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Metadata Driven Data Automation**?

Back:

Definuju struktury tabulek a datových uložišť v **metadatech**. Podle nich se pak automaticky vygenerují jednotlivé kroky pro provedení transformací atd.

Podobně jak třeba člověk používá Terraform pro infrastructure as code, tak tady člověk definuje ty data v nějakém meta jazyce a podle toho se pak generují ty konkrétní kroky.
<!--ID: 1748444828774-->

END

---

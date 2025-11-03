---
created: 2025-04-10T16:38:27
title: "Data Management"
up: "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska08 status-toReview


START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy dat?

Back:

- Metadata
- Referenční data
- Enterprise Structure Data
- Transaction Structure Data
- Transaction Activity Data
- Transaction Audit Data - logy a audity
<!--ID: 1746599651762-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **3 vrstvy data managementu** (+3 v každé vrstvě)?

Back:

- **Business Layer**
  - Business Terminology (popis dat)
  - Analytics & Reporting
  - Machine Learning
- **Governance Layer**
  - Architecture & Principles
  - Data Quality
  - Metadata & Documentation
- **Technical Layer**
  - Data Applications
  - Administration & Lifecycle Management
  - Data Security

Key takeaway: Business se čím dál tím víc bude zapojovat do data managementu

![](../../../Assets/Pasted%20image%2020250528163000.png)
<!--ID: 1746599651769-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou různé úrovně data solutions?

Back:

1. **Sandbox** - data např. v excelu
2. **Stage** - data v jedné databázi na jednom místě
3. **Stage-Mart** - máme vrstvu nad Stagem, která např. předpřipravuje reporty
4. **Classic DWH** - klasický data warehouse (je tým lidí, co ho spravují)
   - Typicky jádro datového skladu se vytváří nezávisle na externích systémech, abych neměl různé formáty dat, když si třeba změním CRM nebo jiný systém
5. **Hybrid DWH** - část DWH je v cloudu
6. **Analytical & BI Platform** - nad DWH vzniká platforma pro datovou analýzu a reporting (dashboardy atd.)
7. **Universal Data Platform** - centrální hub pro všechna data (např. Databricks, Snowflake,...)
<!--ID: 1746599651776-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **3 typy datové platformy**?

Back:

Analogie s dopravou:

- **Data Warehousing** - spolehlivý, vše na jednom místě
- **Analytika a Data Lakes (data mesh)** - nižší úroveň kontroly, daleko větší flexibilita, umožňuje více experimentovat s datama - slouží pro Business Intelligence
- **Provozní zpracování dat** - klasický provozní účely, typicky propojování aplikací (integrace), dále taky např. statistické modely, co dělají predikce

(vůbec nechápu jak ten borec získal řidičák, jestli mu ta analogie s dopravou dává smysl)
<!--ID: 1746599651784-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

**Kdy je datová kvalita dostatečná**?

Back:

Když si nikdo nestěžuje :D

Aka když to lidi jsou schopný využít na to co potřebují.
<!--ID: 1746599651800-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **historizace dat**?

Back:

Dělají se "snímky" dat. Díky tomu můžu přistupovat k tomu, jak data vypadala v minulosti.
<!--ID: 1746599651807-->

END

---

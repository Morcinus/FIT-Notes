---
created: 2025-04-10T16:38:27
title: "Data Management"
up: "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska08 status-toReview


START
FIT-Card

Jaké jsou typy dat?

Back:

- Medatada
- Referenční data
- Enterprise Structure Data
- Transaction Structure Data
- Transaction Activity Data
- Transaction Audit Data - logy a audity

END

---


START
FIT-Card

Jaké jsou **3 vrstvy data managementu**? (tohle je asi důležitý)

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

END

---


START
FIT-Card

Jaké jsou různé úrovně data solutions?

Back:

1. **Sandbox** - data např. v excelu
2. **Stage** - mám data v jedné databázi na jednom místě
3. **Stage-Mart** - máme vrstvu nad Stagem, která např. předpřipravuje reporty
4. **Classic DWH** - klasická data warehouse (je tým lidí, co ho spravují)
	- Typicky jádro datového skladu se vytváří nezávisle na externích systémech, abych neměl různé formáty dat, když si třeba změním CRM nebo jiný systém
5. **Hybrid DWH** - část je v cloudu
6. **Analytical & BI Platform** - 
7. **Universal Data Platform** - 

END

---


START
FIT-Card

Jaké jsou 3 typy datové platformy? 

Back:

Analogie s dopravou:

- **Data Warehousing** - spolehlivý, vše na jednom místě
- **Analytika a Data Lakes (data mesh)** - nižší úroveň kontroly, daleko větší flexibilita, umožňuje více experimentovat s datama - slouží pro Business Intelligence
- **Provozní zpracování dat** - klasický provozní účely, typicky propojování aplikací (integrace), dále taky např. statistické modely, co dělají predikce

END

---


START
FIT-Card

Jak funguje datová architektura?

Back:

- Definování základních datových entit a jejich typů
- Definice business termů
- Vazba na organizační strukturu
- Vazba na fyzický model
- Datová lineage

END

---


START
FIT-Card

Kdy je datová kvalita dostatečná?

Back:

Když si nikdo nestěžuje :D

END

---


START
FIT-Card

Co je historizace dat?

Back:

Dělají se "snímky" dat  

END

---

---
created: 2025-05-28T17:17:28
title: "Decomissioning a migrace dat"
up: "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska11 status-toReview


START
FIT-Card

Co je **decomissioning dat**?

Back:

**Decommissioning = “uklizení starých dat”** – odstraním je, přesunu, anonymizuji nebo archivuju, aby nezatěžovala systém, nebyla rizikem nebo neporušovala předpisy (např. GDPR).

END

---


START
FIT-Card

Jaké jsou důvody pro **decomissioning dat**? (6)

(tohle bylo ve zkoušce)

Back:

- **Zastaralé technologie** - výkonnost, bezpečnost, problém s upgrady, ukončení podpory
- **Nedostupnost vývojářů** - Cobol, Fortran,...
- **Licenční politika** - Oracle Java, Atlasian Confluence, Google Gmail,...
- **Nevhodná architektura** - monolit vs microservices
- **Time To Market** - neschopnost reagovat rychle na změny trhu
- **Merge and Acquisition** - spojování společností a produktů

END

---



START
FIT-Card

Co se z hlediska byznysu řeší u **decomissiningu**?

Back:

- **ROI** - return on investment
- **Rizika** - ztráta revenue nebo reputace

END

---

### Průběh decomissioningu


START
FIT-Card

Jaké jsou části **datové migrace**? (4)

Back:

1. **Analýza a datová kvalita**
2. **Vývoj scriptů**
3. **Rekonciliace**
4. **Cutover**

END

---


START
FIT-Card

Jak probíhá **Analýza a datová kvalita** u datové migrace?

Back:

- **Profiling** - kontroluje se konzistence dat (např. formát emailů, čísel atd.)
- **Business slovník** - prozkoumává se doména, aby se předešlo nedorozuměním
- **Hesla** - je třeba vyřešit způsoby hashování atd.
- **Analýza cílů** - na jakou verzi aplikace/knihoven se chceme dostat

END

---


START
FIT-Card

Jak probíhá **Vývoj scriptů** u datové migrace?

Back:

- **SQL scripty** + anonymizace business critical dat
- **Tracebility** - reportování které transformace již proběhly
- **Atomicity** - když migruji data zákazníka, tak zmigruji buď celého nebo vůbec
- **Repeatability** - musím umět migraci spustit znovu, když se něco změní
- **Optimalizace** - při milionech záznamů je třeba skripty paralelizovat atd.

END

---


START
FIT-Card

Co je **Migration Stage Area**?

Back:

Je to místo, kam se nahrají data a kde se provádějí transformace při migraci dat z nějakého systému do jiného.

END

---


START
FIT-Card

Jaké jsou časté chyby při vytváření skriptů pro migraci dat?

Back:

- **Oslabení referenční integrity** - měl bych zachovat vztahy mezi daty
- **Vypínání triggerů**

END

---

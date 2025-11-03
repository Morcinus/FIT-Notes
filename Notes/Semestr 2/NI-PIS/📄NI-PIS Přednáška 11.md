---
created: 2025-05-28T17:17:28
title: Decommissioning a migrace dat
up:
  - "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska11 status-toReview


START
FIT-Card

(FIT-Notes flashcard)

Co je **decommissioning dat**?

Back:

**Decommissioning = “uklizení starých dat”** – odstraním je, přesunu, anonymizuji nebo archivuju, aby nezatěžovala systém, nebyla rizikem nebo neporušovala předpisy (např. GDPR).
<!--ID: 1748446966911-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou důvody pro **decommissioning dat**? (6)

(tohle bylo ve zkoušce)

Back:

- **Zastaralé technologie** - výkonnost, bezpečnost, problém s upgrady, ukončení podpory
- **Nedostupnost vývojářů** - Cobol, Fortran,...
- **Licenční politika** - Oracle Java, Atlasian Confluence, Google Gmail,...
- **Nevhodná architektura** - monolit vs microservices
- **Time To Market** - neschopnost reagovat rychle na změny trhu
- **Merge and Acquisition** - spojování společností a produktů
<!--ID: 1748446966924-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co se z hlediska byznysu řeší u **decomissiningu**?

Back:

- **ROI** - return on investment
- **Rizika** - ztráta revenue nebo reputace
<!--ID: 1748446966927-->

END

---

### Průběh decommissioningu

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou fáze **datové migrace**? (4)

Back:

1. **Analýza a datová kvalita**
2. **Vývoj scriptů**
3. **Rekonciliace**
4. **Cutover**
<!--ID: 1748446966929-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak probíhá **Analýza a datová kvalita** u datové migrace? (4)

Back:

- **Profiling** - kontroluje se konzistence dat (např. formát emailů, čísel atd.)
- **Business slovník** - prozkoumává se doména, aby se předešlo nedorozuměním
- **Hesla** - je třeba vyřešit způsoby hashování atd.
- **Analýza cílů** - na jakou verzi aplikace/knihoven se chceme dostat
<!--ID: 1748446966932-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak probíhá **Vývoj scriptů** u datové migrace? (7)

Back:

- **SQL scripty** + anonymizace business critical dat
- **Tracebility** - reportování které transformace již proběhly
- **Atomicity** - když migruji data zákazníka, tak zmigruji buď celého nebo vůbec
- **Repeatability** - musím umět migraci spustit znovu, když se něco změní
- **Optimalizace** - při milionech záznamů je třeba skripty paralelizovat atd.

- **Change management** - požadavky se mohou v průběhu měnit
- **Testování** - je třeba testovat, jestli se data zmigrovala správně
<!--ID: 1748446966935-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Migration Stage Area**?

Back:

Je to místo, kam se nahrají data a kde se provádějí transformace při migraci dat z nějakého systému do jiného.
<!--ID: 1748446966938-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou časté chyby při vytváření skriptů pro migraci dat? (3)

Back:

- **Oslabení referenční integrity** - měl bych zachovat vztahy mezi daty
- **Vypínání triggerů** - měl bych zachovat v systému triggery
- **Špatné IDs** - různé systémy na to mají různé metody, musím to nějak sjednotit
<!--ID: 1748446966941-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak probíhá **Rekonciliace** u datové migrace? Z čeho se skládá? (2)

Back:

Ověření zda byla data přenešena správně.

- **kvantitativní ověření** - že jsme nic neztratili a že jsme si nic nevymysleli
- **kvalitativní ověření** - že jsme nezměnili sémantiku dat
<!--ID: 1748446966944-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Cutover** u datové migrace?

Back:

**Cutover** = období, kdy se organizace přepne z původního systému na nový.
<!--ID: 1748446966947-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak probíhá **Cutover** u datové migrace? (2 možnosti)

Back:

- **BigBang** - vše se přepne najednou - rychlé ale riskantní
- **Iterativní** - vše se přepne po iteracích - velká komplexita ale jistější
<!--ID: 1748446966950-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **point of no return** u datové migrace?

Back:

Některé systémy nejde rollbacknout, je potřeba zůstat na nové verzi po migraci.
<!--ID: 1748446966953-->

END

---

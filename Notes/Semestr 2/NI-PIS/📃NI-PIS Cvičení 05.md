---
created: 2025-04-17T18:02:52
up: "[[📖NI-PIS]]"
---

TARGET DECK: archive
FILE TAGS: NI-PIS cviceni04 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 4 kategorie dat?

Back:

- **Metadata** - např. popisky atributů, datum, kdy byl záznam vytvořen
- **Referenční data** - číselníky (dvojice číslo - něco, např. kódy států, měn atd.), externí registry (živnostenský rejstřík)
- **Master data** - klíčový data, co podnik udržuje konzistentní napříč celou organizací (např. klienti, produkty)
- **Transakční data** (platby, půjčky, atd.)
<!--ID: 1746599652303-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou části datového schématu?

Back:

- DB primárního systému
- **Data Staging Area** - tam se uloží data z více systémů, nad těmito daty se pak dělají transformace (upravují se), aby se pak data dostala do DWH
- **Data Warehouse** (Core) - zde už jsou vyčištěná data, tam jsou uložena dlouhodobě - tohle pak slouží jako monolit s tou pravdou
  - Zde jsou typicky daata normalizovaná
  - Zde je uchovaná i historie těch dat
- **Data Mart** - to jsou transformace těch dat (agregace), ty už se dělají pro konkrétní okruh uživatelů (např. jednotlivé departmenty organizace), nad tím data martem jsou pak různé vizualizace
  - Zde se typicky využívá mutlidimenzionální modelování
- **ODS - operační data store** - např. pro call centrum
  - Tam jsou data čerstvější než v data martu, stahují se tam pravidelněji, aby např. lidi v call centru měli aktuální data

Data se typicky 1x denně přenáší z Data Warehouse do Data Martu.
Typicky se 1x denně (v noci) přelévají data z DB primárního systému do Stage
<!--ID: 1746599652311-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah data lake a data staging area?

Back:

Data lake je historizovaná stage (jsou tam snímky napříč historií).
<!--ID: 1746599652319-->

END

---

### Úkol

- Cílem je udělat report
  - Co chcem měřit
- Tok dat znázornit přes datový sklad
- Chceme jakoby vytvořit mart s 5 dimenzema (5 pohledů)
- **Ve všech bodech je potřeba mít konzistentní hodnoty a popisky**
  - Ty data skutečně musíme tahat z těch zdrojů
  - Nemáme tam dávat žádné atributy navíc

**Kampaňový reporting**

- Např. objem prodejů/zisk - vybrat jedno z toho
- Dobrý sledovat komunikaci po jednotlivých stavech - dobrý udělat pomocí toho funnelu

Faktová tabulka (slide "Data Mart")

- Primární klíč tabulky jsou cizí klíče těch ostatních tabulek
- **BACHA**: v rámci jedné tabulky nemůžu míchat granularitu - nemůžu mít zároveň agregovaná data a zároveň detaily
  - Když člověk potřebuje víc granularit, udělat si víc faktových tabulek (dimenze mohou být sdílené)
- Pro report jsou potřeba všechny tabulky (udělám si join všech tabulek)
  - Neukládat procenta, můžou to být mediány atd. ale jde o to, aby se s tím jednoduše dalo počítat (např. v reportu pak může být nějaký filtr).

Report:

- Má být vidět, co to je za hodnotu (jednotky! - e.g. procenta, czk atd.)
- typicky to člověk chce mít rozpadutý na nějaký podkategorie - např. segmenty zákazníků, typy plateb
- Data si můžem vycucat z prstu, ale mělo by to být v rámci reportu cca konzistentní
- Cool tool na reporty, co můžem zkusit: https://piktochart.com/
- Ke všem grafům musíme mít ty podkladový data

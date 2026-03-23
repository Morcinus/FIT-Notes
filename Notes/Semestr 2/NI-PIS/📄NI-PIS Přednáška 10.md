---
created: 2025-04-24T16:21:44
title: Datový sklad v organizaci
up:
  - "[[📖NI-PIS]]"
---

TARGET DECK: archive
FILE TAGS: NI-PIS prednaska10 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **funkční business požadavky** na datové sklady?

Back:

- **ukládání dat**
- **reporting**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250424162241.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599651518-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **nefunkční požadavky datových skladů**? (6)

asi stačí obecně tušit

Back:

- **Datová kvalita** (přesnost výsledků)
- **Rychlost zpracovávání**
- **Uživatelská přívětivost** (reporting)
- **Rychlé dodání změn**
- **Udržitelnost rozvoje v dlouhém časovém horizontu**
- **Nízká cena**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250424162303.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599651524-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy datové kvality? (2)

Back:

- technická - že to bude v určitém formátu, že to bude mít určité vlastnosti
- byznysová - např. když mají data určité hodnoty, které nejsou dobré pro byznys
<!--ID: 1746599651536-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Na co se dělí **Stage** v Data Stage?

Back:

- **Landing** - neřeší se tam datové typy
- **Stage** - tam se už řeší datové typy
<!--ID: 1746599651581-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Je cílem do datového skladu nacpat všechna data firmy?

Back:

Nope, typicky pouze ta data, co jsou kritická pro byznys a pro reporting. Typicky bude hodně data ještě rozházených kolem.
<!--ID: 1746599651608-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je rozdíl mezi **faktem** a **dimenzí**?

Back:

- **Fakty** - nějaké měřitelné číslo, nějaká _hodnota_ (dá se to počítat, agregovat)
- **Dimenze** - nad fakty jsou pak dimenze. Ty se typicky nedají dobře agregovat, např. adresa

![](../../../Assets/Pasted%20image%2020250424170314.png)
<!--ID: 1746599651640-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **typy faktů**?

Back:

- **aditivní** - počet, cena ve faktových tabulkách
- **semiaditivní** - počet, cena ve snapshot tabulkách
- **nonaditive** - procentuální profit například
<!--ID: 1746599651670-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **2 způsoby historizace dat**?

Back:

- **Snapshoting** - udělám celou kopii těch dat např 1x za den (nedává moc smysl u dat, které se často nemění)
- **Slowly changing dimenze** - uložím jednou, když vznikne změna, tak si uložím data
<!--ID: 1746599651680-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy slowly changing dimensions? (4)

Back:

- Typ 0 - ignorování změn
- Typ 1 - přepis hodnot bez historie
- Typ 2 - přidávání řádků tabulky, vždy je jeden platný - uděláme komplet nový záznam pro změnu
- Typ 3 - přidávání sloupců s historickými hodnotami (větší granularita změn) - změníme jakoby jen tu jednu hodnotu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250424171444.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599651688-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak vypadá záznam v **slowly changing dimension** (SCD2)?

Back:

Když změním přijde změna, zapíšu do záznamu "end date", abych tím označil, do kdy je záznam platný a vytvořím nový se start datem

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250424171616.png)
![](../../../Assets/Pasted%20image%2020250424171626.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599651699-->

END

---

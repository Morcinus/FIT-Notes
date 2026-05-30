---
created: 2024-10-08T16:32:22
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP cviceni03 status-toReview


### Parametry gsat2

- `-i` - MAX_FLIPS
- `-d` - zapnutí debugovacích informací
- `-e` - když dám ečko, tak tím dám jako oddělovač středník

Když to pustím bez parametrů, tak je seed konstantní

- Když chci jako seed předhodit čas, dám `-r time`

### Výstupy

_počet-iterací_, *max-počet-iterací*, *splněných klauzulí*, *všech klauzulí*
Na standardní výstup se vypíše konečná konfigurace ve [standardním formátu](https://courses.fit.cvut.cz/NI-KOP/download/files/doc/formats.html)

### Příklady příkazů

- `./gsat2.exe -r time -d conv.csv -e ; uf20-029.cnf`

### Teorie

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

U 3SATu, jakotože to velice rychle najde řešení?

Back:

Když mám $(a \land b \land c)$, tak to bude nepravdivý, pouze pro jedno (z devíti) ohodnocení když to je $(0 \land 0 \land 0)$.

Celkem je **9 možných ohodnocení**, tedy je **šance $\frac{8}{9}$**, že při běhu programu najdem **pravdivé ohodnocení**
<!--ID: 1729237386248-->

END

---

> "Ty experimenty běží dost dlouho no.. Chvilku na to budete čumět a nic nedělat a odpočívat." - Fisher

### Distribuční funkce

- $n$ vzorků
- čitatel - kolik vzorků doběhlo do $i$tý iterace
- jmenovatl - všechny ty vzorky

Když chcem porovnávat algoritmy, můžem pak porovnávat jejich distribuční funkce.

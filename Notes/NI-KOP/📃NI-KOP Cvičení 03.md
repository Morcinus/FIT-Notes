---
created: 2024-10-08T16:32:22
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP

### Parametry gsat2
- `-i` - MAX_FLIPS
- `-d` - zapnutí debugovacích informací
- `-e` - když dám ečko, tak tím dám jako oddělovač středník

Když to pustím bez parametrů, tak je seed konstantní
- Když chci jako seed předhodit čas, dám `-r time`

### Výstupy
_počet-iterací_, _max-počet-iterací_, _splněných klauzulí_, _všech klauzulí_
Na standardní výstup se vypíše konečná konfigurace ve [standardním formátu](https://courses.fit.cvut.cz/NI-KOP/download/files/doc/formats.html)


### Příklady příkazů
- `./gsat2.exe -r time -d conv.csv -e ; uf20-029.cnf`

### Teorie


START
FIT-Card

U 3SATu, jakotože to velice rychle najde řešení?

Back:

Když mám $(a \land b \land c)$, tak to bude nepravdivý, pouze pro jedno (z devíti) ohodnocení když to je $(0 \land 0 \land 0)$.

Celkem je **9 možných ohodnocení**, tedy je **šance $\frac{8}{9}$**,  že při běhu programu najdem **pravdivé ohodnocení**

END

---

> "Ty experimenty běží dost dlouho no.. Chvilku na to budete čumět a nic nedělat a odpočívat." - Fisher
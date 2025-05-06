---
created: 2024-10-11T09:39:30
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP cviceni01 status-toReview

#### Vysvětlení SAT Generátor souborů

- `c` - komentář
- `p cnf [počet klauzulí] [počet řádků]`
- Pak co řádek, to klauzule, vždy to končí nulou
- Proměnný číslovaný od 1
- Pokud je proměnná `-`, je negovaná
  - Např. $2 3 -4 = x_2 + x_3 + \overline{x_4}$

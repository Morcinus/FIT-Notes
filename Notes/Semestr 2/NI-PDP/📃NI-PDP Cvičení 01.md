---
created: 2025-02-19T09:13:48
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP cviceni01 status-toReview


### Problém
- Prohledávání pomocí DFS + BB (ořezávání)
- Každý podstrom stavového prostoru se může paralelizovat
- Co bude sdílený:
	- Nějaký optimální řešení

#### Sekvenční algoritmus
- Programovat rekurzí
	- Výhoda je, že proměnné jsou oddělené
- Snažit se kontext rekurze držet co nejvíc lokálně


### Zadání
- Graf, má ohodnocený hrany
- Cílem je najít bipartitní podgraf, který ohodnocení hran bude mít maximální
	- Tzn. dostanem graf
	- **Měl bych ověřit, že je bipartitní**
		- Obarvim uzel jednou barvou, všechny sousedy jinou barvou
		- Tohle dělám rekurzivně
		- Dvě sousední stejné barvy = není bipartitní?
	- Hledáme **podmnožinu hran**
		- Rozhodnout, který hrany vyhodím, aby to tvořilo maximální možný ohodnocení
		- Tzn. furt vyhazuju hrany a furt počítám
	- Optimum je pak celý ten podgraf (ty vybrané hrany)

Jak to řešit:
- Buď vezmeme všechny uzly a hrany a postupně odebíráme
- **Lepší způsob:**
	- **Všechny hrany zahodíme, přidáváme hrany tak, abychom postupně budovali podgraf**, vždy kontrolovat, jestli je bipartitní

### Testovací data
- Počty volání rekurze je dobrá metrika pro srovnání
- Měli bychom být cca na podobným řádu
- Maximální váha a počet řešení by měly sedět přesně 

### Odevzdávání
- Prezenčně na cviku o týden dřív -> 1 bod navíc



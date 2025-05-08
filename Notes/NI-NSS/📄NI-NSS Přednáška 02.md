---
created: 2025-04-15T10:10:43
title: "Uvod"
up: "[[📖NI-NSS]]"
---

TARGET DECK: NI-NSS
FILE TAGS: NI-NSS prednaska01 status-toReview


START
FIT-Card

Co dělají obecně Normalized Systems Theory?

Back:

Studují, jak se velké **modulární struktury** chovají při **změnách**
<!--ID: 1746599654337-->
END

---


START
FIT-Card

Na základě jakých principů jsou postavený NS Theory?

Back:

- **Stability** from systems theory
- **entropy** from statistical thermodynamics
<!--ID: 1746599654344-->
END

---


START
FIT-Card

Jaké jsou hlavní NS insights?

Back:

- **Fine grained modularity** - aby se zamezilo combinatorial effectu, je potřeba mít fine-grained modularitu
- **Generation** - pro zamezení combinatorial effectu, je potřeba generovat (minimálně čátečně) kód, protože programátoři to nejsou schopni udržet 
- **Regeneration** - v maintenance fázi se zvyšuje komplexita systému. Cílem NS je tuto strukturu neustále regenerovat, aby se nestál legacy, ale furt se zlepšoval. Např. každý 3 měsíce by se měla zvážit výměna databáze, změna na jiné technologie atd.
	- Měly by se evolvovat: skeletons, ale i samotné code generators
	- Díky tomu i starý systém může být "starý 3 měsíce", protože třeba každý 3 měsíce aktualizuju databáze, technologie atd.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250415105825.png)
![](../../Assets/Pasted%20image%2020250415105915.png)
![](../../Assets/Pasted%20image%2020250415105925.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599654350-->
END

---


START
FIT-Card

Co je **combinatorial effect** (=coupling/ripple effects)? Jak se mu dá zamezit?

Back:

Když **impact změny** závisí na **velikosti systému**.

Jak se mu dá zamezit: je potřeba mít fine-grained modulární systém

Např. v malém systému udělám malou změnu a nemusím měnit nic dalšího.

Když ve velkém systému udělám malou změnu, musím změnit ještě hromadu dalších věcí.
<!--ID: 1746599654356-->
END

---


START
FIT-Card

Jaké jsou hlavní principy, co zamezí Combinatorial Effects? Co se stane, když jakýkoliv princip poruším?

Back:

1. **Separation of concerns**
2. **Data version transparency**
3. **Action version transparency**
4. **Separation of state**

Když cokoliv z toho poruším, tak to vede k combinatorial effectu
<!--ID: 1746599654364-->
END

---

START
FIT-Card

Co je **Normalized system**?

Back:

Modulární systém s žádným combinatorial effectem
<!--ID: 1746599654371-->
END

---

START
FIT-Card

Jak funguje code generation v NS?

Back:

1. Jako vstup je **mirror/model** - funkcionalita co má mít systém
2. Z toho vzniknou **elementy** (5)
3. Code generator (**expanders**) pak sestaví **skeleton** - to jsou parametrizované kopie 5 základních elementů

![](../../Assets/Pasted%20image%2020250415104808.png)
<!--ID: 1746599654377-->
END

---


START
FIT-Card

Je **skeleton** production ready aplikace?  Co jsou **craftings**?

Back:

Ne, typicky NS generátory jsou schopný vytvořit skeleton, což je 90% výsledného kódu. Zbytek se musí dopsat ručně. Tomu se říká **craftings**.
<!--ID: 1746599654384-->
END

---


START
FIT-Card

Z čeho se skládá Code Generation v NS (elementy)? Jakou důležitou vlastnost mají tyto elementy?

Back:

Jsou to design patterny:
- Data
- Action
- Workflow
- Trigger
- Connector

Důležitá vlastnost: Můžeme u nich dokázat že nemají combinatorial effects
<!--ID: 1746599654391-->
END

---


START
FIT-Card

Jaký je lifecycle NS systémů?

Back:

1. Sestaví se requirements (use cases, DEMO transakce atd.)
2. Requirements se manuálně transformují na mirror/model
	- To mohou být buď diagramy (něco jako ER)
	- Nebo to mohou být textové soubory
3. Z toho se vygeneruje skeleton, ten se ukáže zákazníkovi
4. Potom se začnou dělat craftings
<!--ID: 1746599654398-->
END

---

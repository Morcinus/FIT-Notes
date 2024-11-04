---
created: 2024-11-04T16:17:08
title: "Neo4j"
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB prednaska06 status-toReview

### Grafové databáze

START
FIT-Card

Co je **property graph**?

Back:

Orientovaný nebo neorientovaný graf:
- nodes - entity z reálného světa
- relationships - vztahy těch entit

<!-- DetailInfoStart -->
Uzly i hrany mohou mít properties (proto se to jmenuje property graph).
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co jsou obecně grafové databáze?

Back:

Mají data jako **graf**
- Jsou tam **efektivní grafové algoritmy** a průchody grafem
- Umí vytvářet **subgraph queries**

END

---

### Neo4j

START
FIT-Card

Co je **Neo4j**?

Back:

**Grafová databáze**.

<!-- DetailInfoStart -->
Byla první, která dlouhodobě vydržela. Ostatní grafové databáze se přestaly používat.

Vznikla v roce 2007.
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaká je struktura Neo4j databáze?

Back:

Instance -> databáze -> graf

END

---


START
FIT-Card

Jaké vlastnosti property grafu?

Back:

Property graph = **directed labeled multigraph**
- **directed** = hrany jsou orientované (ale můžeme se dotazovat proti směru hran, je to stejně rychlý)
- **labeled** = každá node má množinu labels
	- Díky tomu se literally dá modelovat OntoUML
	- Můžeme tak třeba říct, že uzel je typu "Movie" nebo "Actor"
- **multigraph** - mezi dvěma uzlama může být víc hran

END

---


START
FIT-Card

Jaké části má **node** v Neo4j databázi?

Back:



END

---



START
FIT-Card

Jaké věci má **vazba** v Neo4j databázi?

Back:

Má
- **id**
- **směr** (ale dá se přecházet přes hrany v obou směrech)
- **nejvýše jeden label**

END

---


START
FIT-Card

Jaké datové typy jsou v Neo4j databázi? (3 typy)

Back:

**Strukturální**
- Node, Relationship
- Path = sequence of interleaved nodes and relationships

**Property types**
- String
- Integer
- ...

**Composite types**
- List
- Map

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241104163238.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Vysvětli následující kód v Neo4j (cypher)

![](../../Assets/Pasted%20image%2020241104163238.png)
![](../../Assets/Pasted%20image%2020241104163424.png)
Back:
- Pomocí $m1,...$ a $a1,...$ vytvářím nodes s danými identifikátory
- V druhém kódu se vytváří relationships mezi danými nodes

END

---


START
FIT-Card

Jak dělat byznys podle Michala Valenty? :D

Back:

1. Udělat open source software
2. Vybudovat komunitu
3. Splitnout to na community edition a enterprise edition

END

---

#### Cypher


START
FIT-Card

Co je **Cypher**?

Back:

Deklarativní **jazyk** pro dotazování nad **grafovými databázemi** (např. nad Neo4j)

END

---


START
FIT-Card

Jak se v Cypheru zapisují **nodes** a **relationships**?

Back:

- **Nodes** - `()`
- **Relationships** - `<--, --, -->`

END

---


START
FIT-Card

Co je výsledkem dotazu Cypheru?

Back:

Solution sequence

<!-- DetailInfoStart -->
Napíšu co chci dostat za data (podobně jako se to dělá v SQL), databáze mi pak vrátí podgraf.
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241104164610.png)
<!-- ExampleEnd -->


END

---

#### Path pattern


START
FIT-Card

Jaké jsou typy patternů v **Cypheru**? (3)

Back:

- **Node pattern** - Vyberu node která splňuje daný pattern
- **Relationship pattern** - vyberu relationship, který musí splňovat určitou věc
- **Path pattern** - popisuje cestu v grafu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104164750.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co obsahuje **node pattern**?

Back:

- **Labels** - 
- **Property map** - vlastnosti

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104164848.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co obsahuje **relationship pattern**?

Back:

- Může tam být podmínka, jakým směrem musí být hrana

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104164932.png)
![](../../Assets/Pasted%20image%2020241104164937.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241104165011.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Co je variable length mode v Cypheru?

`()-[r:FRIEND *..2]-()`

Back:

Říká mi to, že hledám nějaký 2 uzly, mezi kterýma leží hrana typu FRIEND, ale ty hrany mezi těma dvěma uzlama můžou být i dvě. (Např. hledám kamarády mých kamarádů)

Díky tomu jsem schopný snadně dělat hodně komplikovaný dotazy.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104165156.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je relationship uniqueness v Cypher?

Back:

Jeden node se může vyskytnout ve více node patterns najednou.
Jeden **relationship** se ale **nemůže** objevit v daném patternu vícekrát

<!-- ExplanationStart -->
Je to kvůli tomu, aby se to při dotazování nezacyklilo.

![](../../Assets/Pasted%20image%2020241104165438.png)
<!-- ExplanationEnd -->


END

---

#### Syntax


START
FIT-Card

Jak funguje `MATCH` v Neo4j?

Back:

Umožňuje mi to společně s `WHERE` vyhledávat grafy, co splňují určité podmínky.


<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241104165515.png)
![](../../Assets/Pasted%20image%2020241104165538.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104165506.png)
![](../../Assets/Pasted%20image%2020241104165631.png)

WHERE (search conditions) fungují dost podobně jako v SQLku:
![](../../Assets/Pasted%20image%2020241104170032.png)
![](../../Assets/Pasted%20image%2020241104170037.png)

Dokáže to regexy, operace se stringama (starts with atd.)
![](../../Assets/Pasted%20image%2020241104170145.png)

V klauzuli WHERE může být další path pattern (podobně jako v SQLku lze nestovat WHERE)
![](../../Assets/Pasted%20image%2020241104170235.png)

Pak tam můžou být i exists, kvantifikátory atd.
![](../../Assets/Pasted%20image%2020241104170453.png)
![](../../Assets/Pasted%20image%2020241104170446.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak funguje `OPTIONAL` v MATHCH v Cypher?

Back:

Dělá to jakoby left outer join. Optionally mi to do výsledku dá ještě něco (viz example).

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241104170515.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104170503.png)
<!-- DetailInfoEnd -->


END

---

#### General Clauses


START
FIT-Card

Co je `RETURN` klauzule v Cypheru?

Back:

Na rozdíl od SQLka, kde máme projekci, tak zde se používá RETURN, abychom nějak určili, co přesně chceme vrátit.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104170708.png)
![](../../Assets/Pasted%20image%2020241104170821.png)
![](../../Assets/Pasted%20image%2020241104171015.png)
![](../../Assets/Pasted%20image%2020241104171020.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
Pozn. v tom returnu můžeme mít i kostruktor. Ten `SIZE` mi najde pro vybraného herce množinu filmů, ve kterých hraje a označí to m. Pak to vrátí sekvenci těch filmů a na to to aplikuje tu funkci SIZE, která zjistí velikost té sekvence.
![](../../Assets/Pasted%20image%2020241104170831.png)
<!-- ExampleEnd -->


END

---
#### Agregační funkce

START
FIT-Card

Jak fungují **agregační funkce** v Cypheru?

Back:

V returnu použiju agregační funkci podobně jako se to používá v SQLku (viz příklad).

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241104171159.png)
![](../../Assets/Pasted%20image%2020241104171228.png)
![](../../Assets/Pasted%20image%2020241104171236.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Jak funguje `WITH` v Cypheru?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104171848.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241104171856.png)
<!-- ExampleEnd -->


END

---

### Query structure


START
FIT-Card

Jak funguje chainování klauzulí?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104171931.png)
![](../../Assets/Pasted%20image%2020241104171935.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak funguje `UNION` operace v Cypheru?

Back:

Umožňuje mi kombinovat multi-part queries.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104172011.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak fungují List a Map operace v Cypheru?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241104172039.png)

![](../../Assets/Pasted%20image%2020241104172058.png)
![](../../Assets/Pasted%20image%2020241104172102.png)
![](../../Assets/Pasted%20image%2020241104172106.png)
<!-- DetailInfoEnd -->

END

---

![](../../Assets/Pasted%20image%2020241104172443.png)

### Příklady Neo4j a SQL
![examples-neo4j](../../Assets/examples-neo4j.pdf)
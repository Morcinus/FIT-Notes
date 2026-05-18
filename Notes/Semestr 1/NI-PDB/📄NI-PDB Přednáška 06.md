---
created: 2024-11-04T16:17:08
title: "Neo4j"
up: "[[📖NI-PDB]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDB prednaska06 status-toReview


### Grafové databáze

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Grafový
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **property graph**?

Back:

Orientovaný nebo neorientovaný graf:

- **nodes** - entity z reálného světa
- **relationships** - vztahy těch entit

<!-- DetailInfoStart -->

Uzly i hrany mohou mít properties (proto se to jmenuje property graph).

<!-- DetailInfoEnd -->
<!--ID: 1730978212849-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Grafový
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou obecně grafové databáze?

Back:

Mají data jako **graf**

- Jsou tam **efektivní grafové algoritmy** a průchody grafem
- Umí vytvářet **subgraph queries**
<!--ID: 1730978212854-->

END

---

### Neo4j

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Grafový
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Neo4j**?

Back:

**Grafová databáze**.

<!-- DetailInfoStart -->

Byla první, která dlouhodobě vydržela. Ostatní grafové databáze se přestaly používat.

Vznikla v roce 2007.

<!-- DetailInfoEnd -->
<!--ID: 1730978212857-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Grafový
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká je struktura Neo4j databáze?

Back:

Instance -> databáze -> graf
<!--ID: 1730978212861-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Grafový
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti property grafu?

Back:

Property graph = **directed labeled multigraph**

- **directed** = hrany jsou orientované (ale můžeme se dotazovat proti směru hran, je to stejně rychlý)
- **labeled** = každá node má množinu labels
  - Díky tomu se literally dá modelovat OntoUML
  - Můžeme tak třeba říct, že uzel je typu "Movie" nebo "Actor"
- **multigraph** - mezi dvěma uzlama může být víc hran
<!--ID: 1730978212864-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké části má **node** v Neo4j databázi?

Back:
<!--ID: 1730978212868-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké věci má **vazba** v Neo4j databázi?

Back:

Má

- **id**
- **směr** (ale dá se přecházet přes hrany v obou směrech)
- **nejvýše jeden label**
<!--ID: 1730978212871-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

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

![](../../../Assets/Pasted%20image%2020241104163238.png)

<!-- ExampleEnd -->
<!--ID: 1730978212875-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětli následující kód v Neo4j (cypher)

![](../../../Assets/Pasted%20image%2020241104163238.png)
![](../../../Assets/Pasted%20image%2020241104163424.png)
Back:

- Pomocí $m1,...$ a $a1,...$ vytvářím nodes s danými identifikátory
- V druhém kódu se vytváří relationships mezi danými nodes
<!--ID: 1730978212880-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak dělat byznys podle Michala Valenty? :D

Back:

1. Udělat open source software
2. Vybudovat komunitu
3. Splitnout to na community edition a enterprise edition
<!--ID: 1730978212883-->

END

---

#### Cypher

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Cypher**?

Back:

Deklarativní **jazyk** pro dotazování nad **grafovými databázemi** (např. nad Neo4j)
<!--ID: 1730978212886-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se v Cypheru zapisují **nodes** a **relationships**?

Back:

- **Nodes** - `()`
- **Relationships** - `<--, --, -->`
<!--ID: 1730978212890-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je výsledkem dotazu Cypheru?

Back:

Solution sequence

<!-- DetailInfoStart -->

Napíšu co chci dostat za data (podobně jako se to dělá v SQL), databáze mi pak vrátí podgraf.

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241104164610.png)

<!-- ExampleEnd -->
<!--ID: 1730978212894-->

END

---

#### Path pattern

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy patternů v **Cypheru**? (3)

Back:

- **Node pattern** - Vyberu node která splňuje daný pattern
- **Relationship pattern** - vyberu relationship, který musí splňovat určitou věc
- **Path pattern** - popisuje cestu v grafu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104164750.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212897-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co obsahuje **node pattern**?

Back:

- **Labels** -
- **Property map** - vlastnosti

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104164848.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212901-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co obsahuje **relationship pattern**?

Back:

- Může tam být podmínka, jakým směrem musí být hrana

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104164932.png)
![](../../../Assets/Pasted%20image%2020241104164937.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241104165011.png)

<!-- ExampleEnd -->
<!--ID: 1730978212905-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je variable length mode v Cypheru?

`()-[r:FRIEND *..2]-()`

Back:

Říká mi to, že hledám nějaký 2 uzly, mezi kterýma leží hrana typu FRIEND, ale ty hrany mezi těma dvěma uzlama můžou být i dvě. (Např. hledám kamarády mých kamarádů)

Díky tomu jsem schopný snadně dělat hodně komplikovaný dotazy.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104165156.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212909-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je relationship uniqueness v Cypher?

Back:

Jeden node se může vyskytnout ve více node patterns najednou.
Jeden **relationship** se ale **nemůže** objevit v daném patternu vícekrát

<!-- ExplanationStart -->

Je to kvůli tomu, aby se to při dotazování nezacyklilo.

![](../../../Assets/Pasted%20image%2020241104165438.png)

<!-- ExplanationEnd -->
<!--ID: 1730978212912-->

END

---

#### Syntax

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MATCH` v Neo4j?

Back:

Umožňuje mi to společně s `WHERE` vyhledávat grafy, co splňují určité podmínky.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241104165515.png)
![](../../../Assets/Pasted%20image%2020241104165538.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104165506.png)
![](../../../Assets/Pasted%20image%2020241104165631.png)

WHERE (search conditions) fungují dost podobně jako v SQLku:
![](../../../Assets/Pasted%20image%2020241104170032.png)
![](../../../Assets/Pasted%20image%2020241104170037.png)

Dokáže to regexy, operace se stringama (starts with atd.)
![](../../../Assets/Pasted%20image%2020241104170145.png)

V klauzuli WHERE může být další path pattern (podobně jako v SQLku lze nestovat WHERE)
![](../../../Assets/Pasted%20image%2020241104170235.png)

Pak tam můžou být i exists, kvantifikátory atd.
![](../../../Assets/Pasted%20image%2020241104170453.png)
![](../../../Assets/Pasted%20image%2020241104170446.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212916-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `OPTIONAL` v MATHCH v Cypher?

Back:

Dělá to jakoby left outer join. Optionally mi to do výsledku dá ještě něco (viz example).

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241104170515.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104170503.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212919-->

END

---

#### General Clauses

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je `RETURN` klauzule v Cypheru?

Back:

Na rozdíl od SQLka, kde máme projekci, tak zde se používá RETURN, abychom nějak určili, co přesně chceme vrátit.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104170708.png)
![](../../../Assets/Pasted%20image%2020241104170821.png)
![](../../../Assets/Pasted%20image%2020241104171015.png)
![](../../../Assets/Pasted%20image%2020241104171020.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

Pozn. v tom returnu můžeme mít i kostruktor. Ten `SIZE` mi najde pro vybraného herce množinu filmů, ve kterých hraje a označí to m. Pak to vrátí sekvenci těch filmů a na to to aplikuje tu funkci SIZE, která zjistí velikost té sekvence.
![](../../../Assets/Pasted%20image%2020241104170831.png)

<!-- ExampleEnd -->
<!--ID: 1730978212923-->

END

---

#### Agregační funkce

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují **agregační funkce** v Cypheru?

Back:

V returnu použiju agregační funkci podobně jako se to používá v SQLku (viz příklad).

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241104171159.png)
![](../../../Assets/Pasted%20image%2020241104171228.png)
![](../../../Assets/Pasted%20image%2020241104171236.png)

<!-- ExampleEnd -->
<!--ID: 1730978212926-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `WITH` v Cypheru?

Back:

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104171848.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241104171856.png)

<!-- ExampleEnd -->
<!--ID: 1730978212930-->

END

---

### Query structure

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje chainování klauzulí?

Back:

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104171931.png)
![](../../../Assets/Pasted%20image%2020241104171935.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212933-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `UNION` operace v Cypheru?

Back:

Umožňuje mi kombinovat multi-part queries.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104172011.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212936-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují List a Map operace v Cypheru?

Back:

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241104172039.png)

![](../../../Assets/Pasted%20image%2020241104172058.png)
![](../../../Assets/Pasted%20image%2020241104172102.png)
![](../../../Assets/Pasted%20image%2020241104172106.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978212940-->

END

---

![](../../../Assets/Pasted%20image%2020241104172443.png)

### Příklady Neo4j a SQL

![examples-neo4j](../../../Assets/examples-neo4j.pdf)

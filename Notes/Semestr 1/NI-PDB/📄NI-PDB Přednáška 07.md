---
created: 2024-11-14T09:56:16
title: "XML databáze, XQuery"
up: "[[📖NI-PDB]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDB prednaska07 status-toReview


<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XML
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Je vyjadřovací síla XML stejná jako JSONu?

Back:

Ano.

<!-- DetailInfoStart -->

XML je "ukecanější" a proto lidi většinou preferují JSON, protože je jednodušší (obsahuje méně slov).

Např. v JSONu mi stačí:

```json
movie: "Medvídek"
```

Zatímco v XML musím udělat:

```xml
<movie>Medvídek</movie>
```

<!-- DetailInfoEnd -->
<!--ID: 1735205748949-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XML
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co znamená, že je XML well-formed?

Back:

Splňuje pravidla, že všechny tagy jsou uzavřené.

<!-- ExampleStart -->

```xml
// Well formed
<movie>Medvídek</movie>
</title>

// Není well formed
<movie>Medvídek
```

<!-- ExampleEnd -->
<!--ID: 1735205748952-->

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

Na co se používají escape sequences v XML?

Back:

Typicky např. na `<`, `>`, `"`,...
<!--ID: 1735205748954-->

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

Jaké technologie např. budují na XML?

Back:

- ePUB
- SVG
- SOAP
- XHTML atd.
<!--ID: 1735205748957-->

END

---

### XPath a XQuery

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se v XPath pozná absolutní cesta?

Back:

Začíná lomítkem

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241114102046.png)

<!-- ImageEnd -->
<!--ID: 1735205748960-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **XDM**?

Back:

Sjednocení data modelu **XQuery** a **XPath**
<!--ID: 1735205748962-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak je strukturovaný **XDM data model**?

Back:

- **XML tree** - dokument je strukturovaný jako strom
- **Document order** - elementy a data jsou vždy **ordered**.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241114102046.png)

<!-- ImageEnd -->
<!--ID: 1735205748965-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **sequence** v XDM?

Back:

Kolekce **nodes** a/nebo **atomických hodnot**.

<!-- DetailInfoStart -->

Může být

- mixed
- flattened
- empty
- singleton
- může mít duplicitní hodnoty

![](../../../Assets/Pasted%20image%2020241114102521.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205748968-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je výsledkem XPath výrazu aplikovaného na XML dokument?

Back:

**Sekvence**
<!--ID: 1735205748970-->

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

Jak se liší absolutní a relativní cesta v XPath?

Back:

- absolutní začíná v root elementu XML dokumentu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114102650.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

`text()` ve 4. řádku mi na vrácené titles aplikuje funkci `text()`, která mi vrátí textovou hodnotu těch titles
`@year` mi vrací množinu atributů `year`

![](../../../Assets/Pasted%20image%2020241114102642.png)

<!-- ExampleEnd -->
<!--ID: 1735205748973-->

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

Co je kontext ve vyhodnocování XPath?

Back:

1. Na začátku je kontext prázdná množina.
2. Potom to vyhodnotí první krok na té cestě, do kontextu to něco dá
3. Potom na základě kontextu to vyhodnotí další věc
4. Výsledkem celého dotazu je to, co je v kontextu
<!--ID: 1735205748975-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké části má **XPath krok**? (na tohle se ptá u státnic!)

Back:

1. **osa** (axis) - pohyb v rámci uzlů
2. **node test**
3. optional: **predikát** - logická podmínka, co musí být splněná

<!-- ExplanationStart -->

![](../../../Assets/Pasted%20image%2020241114103129.png)

<!-- ExplanationEnd -->
<!--ID: 1735205748978-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou např. **osy** v XPath?

Back:

- self
- child
- parent
- attribute

... a moho dalších

Tento obrázek to hezky ukazuje:

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241114103625.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114103230.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205748981-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětli jak fungují **osy** v XPath:

`/movies/child::movie`

Back:

1. `/movies` - Vezmu element `movies` - ten se stal kontextem
2. `/child` - na základě kontextu se přesunu po ose `child` - _axis_
3. `::movie` - vyberu element, co se jmenuje movie - _node test_

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114103557.png)
![](../../../Assets/Pasted%20image%2020241114103605.png)
![](../../../Assets/Pasted%20image%2020241114103610.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205748984-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co všechno může být v **node test** v XPath?

Back:

- `name` - jméno elementu
- `*` - jakýkoliv element
- `node()` - node co není text
- `text()` - text co není node

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114103912.png)
![](../../../Assets/Pasted%20image%2020241114103916.png)

<!-- ExampleEnd -->
<!--ID: 1735205748987-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují **predikáty** v XPath?

Back:

Do hranatých závorek napíšu nějakou podmínku.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114104049.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114104055.png)
![](../../../Assets/Pasted%20image%2020241114104059.png)

<!-- ExampleEnd -->
<!--ID: 1735205748989-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké **zkratky** jsou v XPath?

Back:

- použití `/` místo `child::`
- použití `@` místo `attribute::`
- použití `//` místo `descendant-or-self::node()`
- použití `.` místo `self::node()`
- použití `..` místo `parent::node()`

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114104106.png)
![](../../../Assets/Pasted%20image%2020241114104112.png)

<!-- ExampleEnd -->
<!--ID: 1735205748992-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **typy porovnávání** v XPath? (3)

Back:

- **General comparisons** - porovnávají se dvě sekvence
  - `=, !=, <, <=, >=, >`
- **Value comparisons** - porovnávají se dvě hodnoty (singleton sequences)
  - `eq, ne, lt, le, ge, gt`
- **Node comparisons**
  - `is` - test identity
  - `<<, >>` - test pozice (preceding, following)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114104749.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114104756.png)

<!-- ExampleEnd -->
<!--ID: 1735205748994-->

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

Kdy se u **General comparisons** v XPath vyhodnotí příklad jako true?

Např.

```xpath
[(0,1) = (1,2)] = ...
[(0,1) != (1,2)] = ...
```

Back:

Podmínka se vyhodnotí jako **true**, když najdeme alespoň jednu kombinaci elementů zleva a elementů zprava, který to porovnání splňují.

```xpath
[(0,1) = (1,2)] = true // protože (1) = (1)
[(0,1) != (1,2)] = true // protože např. (1) != (2)
```

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114104756.png)

<!-- ExampleEnd -->
<!--ID: 1735205748997-->

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

Jak fungují **comparison expressions** v XPath?

Back:

Vyhodnocují se pouze singleton sequence. U ostatních to hodí error

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114105206.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114105214.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205748999-->

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

Jak funguje **atomizace hodnot** v XPath?

Back:

Při zpracovávání XPath výrazu

1. atomické hodnoty jsou nechané tak jak jsou
2. Nodes jsou transformovány na atomické hodnoty

Konkrétně:

- **Element/node** se transformuje na string obsahující text
  - `<movie year="2006">Vratné lahve</movie>`
    - se transformuje na `Vratné lahve`
- **Attribute** - se transformuje na jeho hodnotu
- **Text** se transformuje na jeho hodnotu

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114105713.png)

<!-- ExampleEnd -->
<!--ID: 1735205749002-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší XPath a XQuery?

Back:

- **XPath** - jazyk který aplikujeme na XML dokument a on nám vrátí sekvenci elementů
- **XQuery** - XPath + další rozšíření navíc
<!--ID: 1735205749004-->

END

---

### XQuery

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **expressions** v XQuery? (6)

Back:

- **Path** - traditional XPath
- **FLWOR**
  - `for … let … where … order by … return …`
- **Conditional** expressions
  - `if … then … else …`
- **Quantified** expressions
  - `some|every ... satisfies...`
- **Boolean** expressions
  - `and, or, not`
- **Primary** expressions - **constructors**, literals, variable references, function calls,...
<!--ID: 1735205749007-->

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

Jak fungují **node constructors** v XQuery?

Back:

Můžeme vytvářet **nové nodes** a obalovat tak například výstupy z XPath.

<!-- ExampleStart -->

<!-- ExampleEnd -->
<!--ID: 1735205749009-->

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

Jaké jsou 2 typy konstruktorů v XQuery?

Back:

- **Direct** - well formed XML fragment, ve kterém je XPath výraz
  - např. `<movies>{ count(//movie) }</movies>`
- **Computed** - trochu jiný syntax
  - např. `element movies { count(//movie) }`
  - Výhoda je, že i název elementu (zde `movies`) lze spočíst jako výraz

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114110424.png)
![](../../../Assets/Pasted%20image%2020241114110434.png)
![](../../../Assets/Pasted%20image%2020241114110440.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114110450.png)

<!-- ExampleEnd -->
<!--ID: 1735205749012-->

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

Jaká je alternativa XQuery a XPath pro JSON?

(pozn. tohle nebylo v přednášce, ale přišlo mi to useful vědět)

Back:

Používá se

- **JSONPath** - funguje jako XPath
- **jq** - jako XPath v command lině (je to fakt super)

Existuje i JSONiq, což je něco jako XQuery pro JSON, ale je to hodně specifický use case a tolik se to nepoužívá.
<!--ID: 1735205749014-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou FLWOR experssions? (5)

Back:

Umožňují mi dělat `for, let, where, orderby, return`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241114111333.png)
![](../../../Assets/Pasted%20image%2020241114111412.png)
![](../../../Assets/Pasted%20image%2020241114111420.png)
![](../../../Assets/Pasted%20image%2020241114111430.png)
![](../../../Assets/Pasted%20image%2020241114111439.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114111341.png)
![](../../../Assets/Pasted%20image%2020241114111449.png)
![](../../../Assets/Pasted%20image%2020241114111454.png)
![](../../../Assets/Pasted%20image%2020241114111459.png)
![](../../../Assets/Pasted%20image%2020241114111505.png)

<!-- ExampleEnd -->
<!--ID: 1735205749017-->

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

Jak fungují **conditional expressions** v XQuery?

Back:

![](../../../Assets/Pasted%20image%2020241114111617.png)
<!--ID: 1735205749023-->

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

Jak fungují **quantified expressions** v XQuery?

Back:

![](../../../Assets/Pasted%20image%2020241114111741.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241114112002.png)

<!-- ExampleEnd -->
<!--ID: 1735205749028-->

END

---

![](../../../Assets/Pasted%20image%2020241114112012.png)

### Detaily

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Používá se XQuery na velké databáze?

Back:

Ne, spíš se používá pro XML dokumenty.
<!--ID: 1735205749030-->

END

---

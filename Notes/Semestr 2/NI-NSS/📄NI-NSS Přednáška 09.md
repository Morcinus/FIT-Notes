---
created: 2025-04-15T15:45:20
title: "On the Realization of Meta-Circular Expansion"
up: "[[📖NI-NSS]]"
---

TARGET DECK: archive
FILE TAGS: NI-NSS prednaska09 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Proč zatím nefunguje plně automatické generování kódu?

Back:

![](../../../Assets/Pasted%20image%2020250415155009.png)
<!--ID: 1746599654030-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je Meta-Circularity?

Back:

Circularity:
Např. transistor přepíná další transistor
Když se mi podaří vyvinout lepší transistor, vylepším tím celý systém

**Meta-Circularity** v softwarovém inženýrství:
Cílem je udělat kód, který je schopný se (re)generovat.

Aby se toho dosáhlo, je potřeba programovat v modelech a něčem abstraktnějším než v konkrétním jazyce

Tzn. cílem je spravovat "meta programming" - např. modelování modelů atd v něčem jiném než přímo v kódu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250415155306.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599654036-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje Meta-Circle?

Back:

1. Máme model, z toho udělám code templates atd.
2. To pak expanduju a mám aplikaci
3. Máme ale taky Meta model, který je schopný být describnutý v našem modelu.
4. Potom můžeme udělat meta code templates a udělat "meta application"
5. Z té "meta application" pak můžeme generovat ty classy atd.
6. Pokračování dole..

![](../../../Assets/Pasted%20image%2020250415155813.png)

Další krok je, že můžeme používat model a metamodel dohromady a díky tomu můžeme tu meta-aplikaci samotnou neustále přegenerovávat a vylepšovat ji.

![](../../../Assets/Pasted%20image%2020250415160008.png)
<!--ID: 1746599654044-->

END

---

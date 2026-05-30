---
created: 2024-10-24T11:41:56
title: "Pseudopolynomiální a aproximativní algoritmy"
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP prednaska05 status-toReview


<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co jsou obecně **pseudopolynomiální algoritmy**?

Back:

Algoritmy, co vypadají, jako že řeší NP těžký problém v polynomiálním čase.

<!-- ExampleStart -->

Problém batohu s dekompozicí podle váhy

<!-- ExampleEnd -->
<!--ID: 1731143142207-->

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

Jak funguje dekompozice problému batohu podle váhy? Jakou to má složitost?

Back:

![](../../../Assets/Pasted%20image%2020241024120348.png)

V té matici, pokud se podívám na nějaké místo a už tam číslo je, tak ta čísla porovnám a zapíšu tam to lepší.

![](../../../Assets/Pasted%20image%2020241024120634.png)
<!--ID: 1731143142210-->

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

Jak funguje dekompozice problému batohu podle ceny? Jakou to má složitost? Jakou má složitost?

Back:

Řeknu si "v batohu musím mít věci za 500" a hledám, aby byl batoh co nejlepší.

![](../../../Assets/Pasted%20image%2020241024121028.png)
V té matici, pokud se podívám na nějaké místo a už tam číslo je, tak ta čísla porovnám a zapíšu tam to lepší.

![](../../../Assets/Pasted%20image%2020241024121208.png)

Té sumy v prvním bodě se zbavím tak, že prostě řeknu, že budu nkrát brát tu největší hodnotu.
<!--ID: 1731143142213-->

END

---

### Pseudopolynomiální algoritmus

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Definice: **pseudopolynomiální algoritmus**

Back:

![](../../../Assets/Pasted%20image%2020241024121331.png)
<!--ID: 1731143142215-->

END

---

### Aproximativní algoritmy

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co jsou aproximativní algoritmy obecně?

Back:

Algoritmus, který nedosáhne exaktního řešení (nemá záruku optimálního řešení), ale zaručí mi **pro všechny instance problému** kvalitu (např. že řešení není o 5% horší než optimum).

<!-- ExampleStart -->

APR-KNAP (aproximativní algoritmus pro probém batohu)

![](../../../Assets/Pasted%20image%2020241024121708.png)

<!-- ExampleEnd -->
<!--ID: 1731143142218-->

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

Definice: **algoritmus APR má relativní kvalitu $R$**

Back:

![](../../../Assets/Pasted%20image%2020241024121917.png)

<!-- ExplanationStart -->

APR = aproximativní algoritmus
$\forall \ I$ znamená pro všechny instance, které mohou existovat
![](../../../Assets/Pasted%20image%2020241024121911.png)

<!-- ExplanationEnd -->
<!--ID: 1731143142221-->

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

Definice: **algoritmus APR má relativní chybu $\varepsilon$**

Back:

![](../../../Assets/Pasted%20image%2020241024122027.png)

<!-- ExplanationStart -->

APR = aproximativní algoritmus
$\forall \ I$ znamená pro všechny instance, které mohou existovat
![](../../../Assets/Pasted%20image%2020241024121911.png)

<!-- ExplanationEnd -->
<!--ID: 1731143142223-->

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

Jaký je vztah relativní kvality a relativní chyby APR algoritmu?

Back:

$$\varepsilon = 1- \frac{1}{R}, \quad R = \frac{1}{1-\varepsilon}$$

![](../../../Assets/Pasted%20image%2020241024122341.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241024123328.png)
![](../../../Assets/Pasted%20image%2020241024123336.png)
Problém je, že na hraně AB to najde AB, i když optimum je A

![](../../../Assets/Pasted%20image%2020241024124309.png)
![](../../../Assets/Pasted%20image%2020241024124433.png)
![](../../../Assets/Pasted%20image%2020241024124512.png)
![](../../../Assets/Pasted%20image%2020241024124621.png)
![](../../../Assets/Pasted%20image%2020241024125100.png)
![](../../../Assets/Pasted%20image%2020241024125233.png)

<!-- ExampleEnd -->
<!--ID: 1731143142226-->

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

Definice: APR je $R$-aproximativní

Back:

![](../../../Assets/Pasted%20image%2020241024122522.png)
<!--ID: 1731143142229-->

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

Definice: Optimalizační problém je $R$-aproximativní

Back:

![](../../../Assets/Pasted%20image%2020241024122904.png)
<!--ID: 1731143142231-->

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

Definice: Optimalizační problém patří do třídy APX

Back:

![](../../../Assets/Pasted%20image%2020241024123157.png)

<!-- ExplanationStart -->

Tzn. nejsme u $R$ v nekonečnu ani u v jedničce $\varepsilon$
![](../../../Assets/Pasted%20image%2020241024123121.png)

<!-- ExplanationEnd -->
<!--ID: 1731143142234-->

END

---

### PTAS

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Definice: **Polynomiální aproximační schéma** problému

Back:

![](../../../Assets/Pasted%20image%2020241024125849.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241024125944.png)

<!-- ExampleEnd -->
<!--ID: 1731143142236-->

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

Definice: Problém patří do třídy **PTAS**

Back:

![](../../../Assets/Pasted%20image%2020241024125909.png)
<!--ID: 1731143142239-->

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

Definice: **plně polynomiální aproximační schéma**

Back:

![](../../../Assets/Pasted%20image%2020241024130135.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241024130315.png)
![](../../../Assets/Pasted%20image%2020241024130615.png)

<!-- ExampleEnd -->
<!--ID: 1731143142241-->

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

Definice: Problém patří do třídy **FPTAS**

Back:

![](../../../Assets/Pasted%20image%2020241024130209.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241024130233.png)

<!-- ImageEnd -->
<!--ID: 1731143142244-->

END

---

### Aproximační problémy

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je APX redukce?

Back:

![](../../../Assets/Pasted%20image%2020241024130829.png)

<!-- ExplanationStart -->

Začíná to vlevo nahoře, pak podle šipek.

<!-- ExplanationEnd -->
<!--ID: 1731143142246-->

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

Jakou vlastnost má **APX redukce**?

Back:

Zachovává relativní kvalitu až na nějaký koeficient.
<!--ID: 1731143142249-->

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

Jak se značí **APX redukce**?

Back:

![](../../../Assets/Pasted%20image%2020241024131445.png)
<!--ID: 1731143142251-->

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

Co platí pro **APX redukci**?

![](../../../Assets/Pasted%20image%2020241024131513.png)

Back:

![](../../../Assets/Pasted%20image%2020241024131524.png)
<!--ID: 1731143142254-->

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

Co platí pro **APX redukci**?
![](../../../Assets/Pasted%20image%2020241024131536.png)

Back:

![](../../../Assets/Pasted%20image%2020241024131541.png)
<!--ID: 1731143142257-->

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

Definice: Problém je $\Pi$ je **NPO-těžký**

Back:

![](../../../Assets/Pasted%20image%2020241024131752.png)
<!--ID: 1731143142260-->

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

Definice: Problém je $\Pi$ je **NPO-úplný**

Back:

![](../../../Assets/Pasted%20image%2020241024131758.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241024132024.png)

<!-- ImageEnd -->
<!--ID: 1731143142263-->

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

Definice: Problém je $\Pi$ je **APX-těžký**

Back:

![](../../../Assets/Pasted%20image%2020241024131807.png)
<!--ID: 1731143142265-->

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

Definice: Problém je $\Pi$ je **APX-úplný**

Back:

![](../../../Assets/Pasted%20image%2020241024131818.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241024132011.png)

<!-- ImageEnd -->

<!-- ExampleStart -->

Pozn. tohle nevím, jestli je APX-úplný nebo APX-těžký.. Na přednášce o tom začal mluvit a pak odběhnul od tématu.
![](../../../Assets/Pasted%20image%2020241024132210.png)

<!-- ExampleEnd -->
<!--ID: 1731143142268-->

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

Jaký je vztah APX redukce a Turingovy redukce?

Back:

APX redukce je Turingova redukce v polynomiálním čase

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241024132011.png)

<!-- ImageEnd -->
<!--ID: 1731143142270-->

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

Jak jsou v sobě množinově třídy
$PO, NPH, APX, NPO, PTAS, FPTAS, NPO-úplný, APX-úplný$?

Back:

![](../../../Assets/Pasted%20image%2020241024132011.png)
<!--ID: 1731329425624-->

END

---

![](../../../Assets/Pasted%20image%2020241024132531.png)

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Do jaké třídy patří problém **min. uzlové pokrytí**?

Back:

APX-úplný
<!--ID: 1731143142273-->

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

Do jaké třídy patří problém **min. (unátní) pokrytí množiny S**?

Back:

Není v APX
<!--ID: 1731143142275-->

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

Do jaké třídy patří problém **MAX SAT**?

Back:

APX-úplný
<!--ID: 1731143142278-->

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

Do jaké třídy patří problém **MAX WEIGHTED SAT**?

Back:

NPO-úplný
<!--ID: 1731143142281-->

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

Do jaké třídy patří problém **BATOH**?

Back:

FPTAS
<!--ID: 1731143142284-->

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

Do jaké třídy patří problém **TSO**? (obchodní cestující)

Back:

NPO-úplný
<!--ID: 1731143142286-->

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

Do jaké třídy patří problém **$\Delta$ TSO**? (metrický TSO)

Back:

APX-úplný
<!--ID: 1731143142289-->

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

Do jaké třídy patří problém **Geometrický TSO** s **celočíselnými** souřadnicemi?

Back:

PTAS
<!--ID: 1731143142292-->

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

Do jaké třídy patří problém **Geometrický TSO** s **racionálními** souřadnicemi?

Back:

APX-úplný
<!--ID: 1731143142294-->

END

---

---
created: 2024-10-24T11:41:56
title: "Pseudopolynomiální a aproximativní algoritmy"
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP prednaska05 status-toReview


START
FIT-Card

Co jsou obecně **pseudopolynomiální algoritmy**?

Back:

Algoritmy, co vypadají, jako že řeší NP těžký problém v polynomiálním čase.

<!-- ExampleStart -->
Problém batohu s dekompozicí podle váhy

<!-- ExampleEnd -->


END

---


START
FIT-Card

Jak funguje dekompozice problému batohu podle váhy? Jakou to má složitost?

Back:

![](../../Assets/Pasted%20image%2020241024120348.png)

V té matici, pokud se podívám na nějaké místo a už tam číslo je, tak ta čísla porovnám a zapíšu tam to lepší.

![](../../Assets/Pasted%20image%2020241024120634.png)


END

---


START
FIT-Card

Jak funguje dekompozice problému batohu podle ceny? Jakou to má složitost? Jakou má složitost?

Back:

Řeknu si "v batohu musím mít věci za 500" a hledám, aby byl batoh co nejlepší.

![](../../Assets/Pasted%20image%2020241024121028.png)
V té matici, pokud se podívám na nějaké místo a už tam číslo je, tak ta čísla porovnám a zapíšu tam to lepší.

![](../../Assets/Pasted%20image%2020241024121208.png)

Té sumy v prvním bodě se zbavím tak, že prostě řeknu, že budu nkrát brát tu největší hodnotu.

END

---

### Pseudopolynomiální algoritmus

START
FIT-Card

Definice: **pseudopolynomiální algoritmus**

Back:

![](../../Assets/Pasted%20image%2020241024121331.png)

END

---

### Aproximativní algoritmy


START
FIT-Card

Co jsou aproximativní algoritmy obecně?

Back:

Algoritmus, který nedosáhne exaktního řešení (nemá záruku optimálního řešení), ale zaručí mi **pro všechny instance problému** kvalitu (např. že řešení není o 5% horší než optimum).

<!-- ExampleStart -->
APR-KNAP (aproximativní algoritmus pro probém batohu)

![](../../Assets/Pasted%20image%2020241024121708.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Definice: **algoritmus APR má relativní kvalitu $R$**

Back:

![](../../Assets/Pasted%20image%2020241024121917.png)

<!-- ExplanationStart -->
APR = aproximativní algoritmus
$\forall \ I$ znamená pro všechny instance, které mohou existovat
![](../../Assets/Pasted%20image%2020241024121911.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Definice: **algoritmus APR má relativní chybu $\varepsilon$**

Back:

![](../../Assets/Pasted%20image%2020241024122027.png)

<!-- ExplanationStart -->
APR = aproximativní algoritmus
$\forall \ I$ znamená pro všechny instance, které mohou existovat
![](../../Assets/Pasted%20image%2020241024121911.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Jaký je vztah relativní kvality a relativní chyby APR algoritmu?

Back:

$$\varepsilon = 1- \frac{1}{R}, \quad R = \frac{1}{1-\varepsilon}$$

![](../../Assets/Pasted%20image%2020241024122341.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241024123328.png)
![](../../Assets/Pasted%20image%2020241024123336.png)
Problém je, že na hraně AB to najde AB, i když optimum je A

![](../../Assets/Pasted%20image%2020241024124309.png)
![](../../Assets/Pasted%20image%2020241024124433.png)
![](../../Assets/Pasted%20image%2020241024124512.png)
![](../../Assets/Pasted%20image%2020241024124621.png)
![](../../Assets/Pasted%20image%2020241024125100.png)
![](../../Assets/Pasted%20image%2020241024125233.png)



<!-- ExampleEnd -->


END

---


START
FIT-Card

Definice: APR je $R$-aproximativní

Back:

![](../../Assets/Pasted%20image%2020241024122522.png)

END

---


START
FIT-Card

Definice: Optimalizační problém je $R$-aproximativní

Back:

![](../../Assets/Pasted%20image%2020241024122904.png)

END

---


START
FIT-Card

Definice: Optimalizační problém patří do třídy APX

Back:

![](../../Assets/Pasted%20image%2020241024123157.png)

<!-- ExplanationStart -->
Tzn. nejsme u $R$ v nekonečnu ani u v jedničce $\varepsilon$
![](../../Assets/Pasted%20image%2020241024123121.png)
<!-- ExplanationEnd -->


END

---

### PTAS


START
FIT-Card

Definice: PTAS

Back:

![](../../Assets/Pasted%20image%2020241024125849.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241024125944.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Definice: Problém patří do třídy PTAS

Back:

![](../../Assets/Pasted%20image%2020241024125909.png)

END

---


START
FIT-Card

Definice: FPTAS

Back:

![](../../Assets/Pasted%20image%2020241024130135.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241024130315.png)
![](../../Assets/Pasted%20image%2020241024130615.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Definice: Problém patří do třídy FPTAS

Back:

![](../../Assets/Pasted%20image%2020241024130209.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241024130233.png)
<!-- ImageEnd -->

END

---

### Aproximační problémy


START
FIT-Card

Co je APX redukce?

Back:

![](../../Assets/Pasted%20image%2020241024130829.png)

<!-- ExplanationStart -->
Začíná to vlevo nahoře, pak podle šipek.

<!-- ExplanationEnd -->


END

---


START
FIT-Card

Jakou vlastnost má APX redukce?

Back:

Zachovává relativní kvalitu až na nějaký koeficient.

END

---


START
FIT-Card

Jak se značí APX redukce?

Back:

![](../../Assets/Pasted%20image%2020241024131445.png)

END

---


START
FIT-Card

Co platí pro APX redukci?

![](../../Assets/Pasted%20image%2020241024131513.png)

Back:

![](../../Assets/Pasted%20image%2020241024131524.png)

END

---


START
FIT-Card

Co platí pro APX redukci?
![](../../Assets/Pasted%20image%2020241024131536.png)

Back:

![](../../Assets/Pasted%20image%2020241024131541.png)

END

---


START
FIT-Card

Definice: Problém je $\Pi$ je **NPO-těžký**

Back:

![](../../Assets/Pasted%20image%2020241024131752.png)

END

---

START
FIT-Card

Definice: Problém je $\Pi$ je **NPO-úplný**

Back:

![](../../Assets/Pasted%20image%2020241024131758.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241024132024.png)
<!-- ImageEnd -->

END

---

START
FIT-Card

Definice: Problém je $\Pi$ je **APX-těžký**

Back:

![](../../Assets/Pasted%20image%2020241024131807.png)

END

---

START
FIT-Card

Definice: Problém je $\Pi$ je **APX-úplný**

Back:

![](../../Assets/Pasted%20image%2020241024131818.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241024132011.png)
<!-- ImageEnd -->

<!-- ExampleStart -->
Pozn. tohle nevím, jestli je APX-úplný nebo APX-těžký.. Na přednášce o tom začal mluvit a pak odběhnul od tématu.
![](../../Assets/Pasted%20image%2020241024132210.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Jaký je vztah APX redukce a Turingovy redukce?

Back:

APX redukce je Turingova redukce v polynomiálním čase

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241024132011.png)
<!-- ImageEnd -->


END

---

![](../../Assets/Pasted%20image%2020241024132531.png)


START
FIT-Card

Do jaké třídy patří problém **min. uzlové pokrytí**?

Back:

APX-úplný

END

---

START
FIT-Card

Do jaké třídy patří problém **min. (unátní) pokrytí množiny S**?

Back:

Není v APX

END

---


START
FIT-Card

Do jaké třídy patří problém **MAX SAT**?

Back:

APX-úplný

END

---
START
FIT-Card

Do jaké třídy patří problém **MAX WEIGHTED SAT**?

Back:

NPO-úplný

END

---

START
FIT-Card

Do jaké třídy patří problém **BATOH**?

Back:

FPTAS

END

---

START
FIT-Card

Do jaké třídy patří problém **TSO**? (obchodní cestující)

Back:

NPO-úplný

END

---
START
FIT-Card

Do jaké třídy patří problém **$\Delta$ TSO**? (metrický TSO)

Back:

APX-úplný

END

---

START
FIT-Card

Do jaké třídy patří problém **Geometrický TSO** s **celočíselnými** souřadnicemi?

Back:

PTAS

END

---

START
FIT-Card

Do jaké třídy patří problém **Geometrický TSO** s **racionálními** souřadnicemi?

Back:

APX-úplný

END

---



---
created: 2024-12-21T13:31:30
title: "Numerické algoritmy"
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska17 status-toReview numerika2

START
FIT-Card

Definice: **dopředná chyba**

Back:

![](../../Assets/Pasted%20image%2020241221133458.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221133604.png)

<!-- DetailInfoEnd -->

<!-- ExplanationStart -->

Máme teoretický ($V$) a naimplementovaný algoritmus ($V^*)$ a chci je porovnat. Implementace typicky má nějakou chybu (např. zaokrouhlování floatů).

$d$ je nějaký vstup

<!-- ExplanationEnd -->
<!--ID: 1735205749188-->

END

---

START
FIT-Card

Definice: **Zpětná chyba**

Back:

![](../../Assets/Pasted%20image%2020241221133515.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221133613.png)

<!-- DetailInfoEnd -->

<!-- ImageStart -->

![](../../Assets/Pasted%20image%2020241221133521.png)

<!-- ImageEnd -->
<!--ID: 1735205749191-->

END

---

START
FIT-Card

Definice: **podmíněnost** úlohy

Back:

![](../../Assets/Pasted%20image%2020241221133641.png)
<!--ID: 1735205749194-->

END

---

START
FIT-Card

Definice: **Relativní číslo podmíněnosti**

Back:

![](../../Assets/Pasted%20image%2020241221133656.png)

Pozn. Toto číslo se spíš odhaduje, nepočítá se.

<!-- ExplanationStart -->

Nahoře je relativní změna výstupu, dole je relativní změna vstupu. To pak porovnávám.

Např. do vstupu mi může jít výstup jiného algoritmu (už s chybou). Můžu pak srovnávat, jak se mi třeba změní výstup, když mám nějakou chybu ve vstupu.

<!-- ExplanationEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241221134450.png)
![](../../Assets/Pasted%20image%2020241221134456.png)

<!-- ExampleEnd -->
<!--ID: 1735205749196-->

END

---

START
FIT-Card

Definice: **dobře a špatně podmíněná** úloha

Back:

![](../../Assets/Pasted%20image%2020241221133722.png)
<!--ID: 1735205749199-->

END

---

START
FIT-Card

Definice: soustava lineárních rovnic

Back:

![](../../Assets/Pasted%20image%2020241221134234.png)
<!--ID: 1735205749201-->

END

---

START
FIT-Card

Jaká je výhoda iterativní metody?

Back:

Je "samoopravující se", v každém kroku se řešení zlepší víc, než se zhorší numerickýma chybama. Díky tomu to konverguje k dobrému výsledku.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221134409.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749204-->

END

---

START
FIT-Card

Definice: přidružená maticová norma

Back:

![](../../Assets/Pasted%20image%2020241221134739.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241221134750.png)

<!-- ExplanationEnd -->

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241221134956.png)

<!-- ExampleEnd -->
<!--ID: 1735205749206-->

END

---

START
FIT-Card

Definice: číslo podmíněnosti

Back:

![](../../Assets/Pasted%20image%2020241221135243.png)

<!-- ExampleStart -->

![](../../Assets/Pasted%20image%2020241221135254.png)
![](../../Assets/Pasted%20image%2020241221135259.png)
![](../../Assets/Pasted%20image%2020241221135305.png)

<!-- ExampleEnd -->
<!--ID: 1735205749209-->

END

---

### Iterační metoda

START
FIT-Card

Definice: Iterační metoda

Back:

![](../../Assets/Pasted%20image%2020241221135639.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241221135708.png)
![](../../Assets/Pasted%20image%2020241221135649.png)

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221135717.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749211-->

END

---

START
FIT-Card

Definice: **vektor chyby**

Back:

![](../../Assets/Pasted%20image%2020241221135931.png)
<!--ID: 1735205749213-->

END

---

START
FIT-Card

Definice: spektrální poloměr

Back:

![](../../Assets/Pasted%20image%2020241221140136.png)
<!--ID: 1735205749216-->

END

---

START
FIT-Card

Věta: co platí pro spektrální poloměr

Back:

![](../../Assets/Pasted%20image%2020241221140115.png)
<!--ID: 1735205749218-->

END

---

START
FIT-Card

Důsledek: iterační metoda konverguje $\Leftrightarrow \dots$

Back:

![](../../Assets/Pasted%20image%2020241221140153.png)
<!--ID: 1735205749221-->

END

---

START
FIT-Card

Jak se dá odhadnout rychlost konvergence iterační metody?

Back:

![](../../Assets/Pasted%20image%2020241221140450.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221140502.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749223-->

END

---

START
FIT-Card

Kdy se iterační metoda zastaví?

Back:

![](../../Assets/Pasted%20image%2020241221140545.png)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221140600.png)
![](../../Assets/Pasted%20image%2020241221140607.png)
![](../../Assets/Pasted%20image%2020241221140626.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749226-->

END

---

START
FIT-Card

Jak lze volit matici $Q$ v iterační metodě? (3)

Back:

![](../../Assets/Pasted%20image%2020241221141155.png)
<!--ID: 1735205749228-->

END

---

START
FIT-Card

Jak funguje Richardsonova metoda?

Back:

Za $Q$ se dá jednotková matice.

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221141222.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749231-->

END

---

START
FIT-Card

Jak funguje Jacobiho metoda?

Back:

Za $Q$ se dosadí diagonála

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221141247.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749233-->

END

---

START
FIT-Card

Tvrzení: konvergence Jacobiho metody

Back:

![](../../Assets/Pasted%20image%2020241221141327.png)

<!-- ExplanationStart -->

![](../../Assets/Pasted%20image%2020241221141336.png)

<!-- ExplanationEnd -->
<!--ID: 1735205749235-->

END

---

START
FIT-Card

Jak funguje SOR metoda?

Back:

$Q = \frac{1}{\omega}D+L$ kde $\omega \in \mathbb{R} \setminus \set 0$

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020241221141349.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749238-->

END

---

START
FIT-Card

Algoritmus: **Iterativní metoda**

Back:

![](../../Assets/Pasted%20image%2020241221141630.png)
<!--ID: 1735205749243-->

END

---

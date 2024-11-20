---
created: 2024-11-20T16:16:28
title: "Simulované ochlazování"
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP prednaska08 status-toReview



START
FIT-Card

Jaké jsou 2 řešení úniku lokálních optim?

Back:

- Diverzifikace
- Intenzifikace

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120162137.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak funguje řešení diverzifikace?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120162156.png)
<!-- DetailInfoEnd -->

END

---

### Pokročilé heuristiky


START
FIT-Card

Jaké jsou pokročilé heuristiky? (4)

Back:

- **Simulované ochlazování**
	- Jedna konfigurace, sekvenční řízení diverzifikace
- **Simulovaná evoluce**
	- Více konfigurací, interakce křížením
- **Bayeovská optimalizace**
	- Více konfigurací, statistický model stavového prostoru
- **fmGA**
	- Více fragmentů konfigurace


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120162430.png)
<!-- DetailInfoEnd -->


END

---

### Simulované ochlazování


START
FIT-Card

Jak funguje obecně principielně simulované ochlazování? 

Back:

Máme nějaký systém:
- "teplota" je nějaký řídící parametr, který řídí diverzifikaci. Říká mi, jak moc jsem ochotný přijmout zhoršující stav (ten co mi zhorší hodnotu optimalizačního kritéria), když procházím stavový prostor.
	- Ze začátku algoritmus víc "skáče" po stavovém prostoru a hledá všude možně a čím dál tím víc se mu zakazuje se dostávat se do zhoršujících stavů 

![](../../Assets/Pasted%20image%2020241120163056.png)

END

---


START
FIT-Card

Jak funguje metoda `try()` pro simulované ochlazovaní?

Back:

![](../../Assets/Pasted%20image%2020241120163258.png)

To je součástí lokální heuristiky (viz detail).

<!-- DetailInfoStart -->
Máme lokální heuristiku:
![](../../Assets/Pasted%20image%2020241120163149.png)

Dovysvětlení:
![](../../Assets/Pasted%20image%2020241120163325.png)
![](../../Assets/Pasted%20image%2020241120163335.png)

<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak vypadá hlavní kostra algoritmu simulovaného ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120163718.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241120163729.png)

Více o jednotlivých funkcích v dalších kartičkách.

<!-- ExplanationEnd -->

END

---


START
FIT-Card

Co platí podle pana Hajka?

Back:

![](../../Assets/Pasted%20image%2020241120163930.png)

Problém ale je, jak máme vědět hloubku lokálních optim?

END

---

### Nasazení simulovaného ochlazování

START
FIT-Card

Co je třeba vymyslet při nasazování simulovaného ochlazování?

Back:

Rozvrh ochlazování:
- počáteční teplota
- `cool(T,...)`
- `frozen(T,...)`
- `equilibrium(...)`

END

---



START
FIT-Card

Co je třeba udělat s hodnotou optimalizačního kritéria, aby se dalo pracovat s  teplotou?

Back:

Je třeba tu hodnotu **normalizovat** tak, aby hodnoty `cost()` měly **stejný rozsah pro každou instanci**

![](../../Assets/Pasted%20image%2020241120164427.png)

END

---


START
FIT-Card

Jak funguje funkce `cool()` v simulovaném ochlazování?

Back:

Typicky teplotu přenásobím nějakou konstantou.

![](../../Assets/Pasted%20image%2020241120164524.png)

END

---


START
FIT-Card

Jak funguje funkce `equilibrium()` v simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120164552.png)

END

---


START
FIT-Card

Jak souvisí `cool()` a `equilibrium()`?

Back:

Různým nastavením můžu dosáhnout stejného výsledku.



<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120164723.png)
![](../../Assets/Pasted%20image%2020241120164729.png)
Ve vzorečku mi vypadlo N -> nezávisí na tom, v jakém kroku se momentálně nacházím.

![](../../Assets/Pasted%20image%2020241120164848.png)

<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak nastavit vhodně počáteční teplotu?

Back:

![](../../Assets/Pasted%20image%2020241120165059.png)

END

---


START
FIT-Card

Jak lze vypočítat počáteční teplotu ze sady akcí?

Back:

![](../../Assets/Pasted%20image%2020241120165122.png)
![](../../Assets/Pasted%20image%2020241120165131.png)


END

---


START
FIT-Card

Kdy se zastaví simulované ochlazování?

Back:

- pevná mez teploty
- nebo stagnace:
	- četnost změn klesla pod nastavenou mez
	- četnost změn k lepšímu klesla pod nastavenou mez

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241120165427.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké vlastnosti má mít stavový prostor při simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120165630.png)

END

---


START
FIT-Card

Jak se nastavují omezující podmínky při simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120165712.png)

END

---


START
FIT-Card

Jaké jsou 2 možnosti počátečního řešení v simulovaném ochlazování?

Back:

![](../../Assets/Pasted%20image%2020241120165738.png)

END

---


START
FIT-Card

Co jsou white box a black box evaluations?

Back:

![](../../Assets/Pasted%20image%2020241120165850.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241120165902.png)
![](../../Assets/Pasted%20image%2020241120165909.png)
![](../../Assets/Pasted%20image%2020241120165915.png)

<!-- ExampleEnd -->

END

---

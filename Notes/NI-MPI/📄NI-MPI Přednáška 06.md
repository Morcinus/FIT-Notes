---
created: 2024-10-20T16:55:18
title: "Analýza IV: integrace"
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska06 status-toReview

### Připomenutí analýzy


START
FIT-Card

Definice: **rozdělení intervalu, dělící body, norma dělení**

Back:

![](../../Assets/Pasted%20image%2020241020170119.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241020170156.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Definice: **horní, resp. dolní součet funkce $f$**

Back:

![](../../Assets/Pasted%20image%2020241020170253.png)

<!-- InformallySaidStart -->
Supremum je "nejmenší hodnota, která je vyšší než všechny ostatní".
<!-- InformallySaidEnd -->

END

---


START
FIT-Card

Definice: Horní resp. dolní Darbouxův ("Darbuúv") integrál

Back:

![](../../Assets/Pasted%20image%2020241020170707.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241020170737.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Věta: normální posloupnost rozdělení $\implies \ ?$

Back:

![](../../Assets/Pasted%20image%2020241020170810.png)

END

---


START
FIT-Card

Věta: **aditivita integrálu**

Back:

![](../../Assets/Pasted%20image%2020241020170829.png)

END

---


START
FIT-Card

Věta: **multiplikativita integrálu**

Back:

![](../../Assets/Pasted%20image%2020241020170844.png)

END

---


START
FIT-Card

Definice: **primitivní funkce**

Back:

![](../../Assets/Pasted%20image%2020241020170900.png)

END

---


START
FIT-Card

Definice: **Newtonova formule**

Back:

![](../../Assets/Pasted%20image%2020241020170922.png)

END

---


START
FIT-Card

Věta: Per partes pro určitý integrál

Back:

![](../../Assets/Pasted%20image%2020241020170948.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020241020171007.png)
<!-- ExerciseEnd -->


END

---


START
FIT-Card

Věta: **O substituci**

Back:

![](../../Assets/Pasted%20image%2020241020171026.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020241020171037.png)
<!-- ExerciseEnd -->


END

---

### Funkce 2 proměnných


START
FIT-Card

Co je obecně integrál funkce o dvou proměnných?

Back:

**Objem pod grafem $f(x,y)$**

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241020171220.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Definice: **Horní Darbouxova suma $f$ vzhledem k rozdělení $\sigma$**

Back:

![](../../Assets/Pasted%20image%2020241020171450.png)

![](../../Assets/Pasted%20image%2020241020171456.png)

<!-- ExplanationStart -->
Ty dvě závorky s $x$ a $y$ mi vždy říkají **obsah toho obdélníku** a násobím to tím $M_{i,j}$, což je pod tím grafem to supremum, čímž získávám **objem** toho kvádru. Pak ty všechny kvádry v grafu sečtu.
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **Dolní Darbouxova suma $f$ vzhledem k rozdělení $\sigma$**

Back:

![](../../Assets/Pasted%20image%2020241020171530.png)
![](../../Assets/Pasted%20image%2020241020171456.png)

END

---


START
FIT-Card

Definice: **Horní Darbouxův integrál (funkce $f$ na $D$)**

Back:

![](../../Assets/Pasted%20image%2020241020171620.png)

END

---


START
FIT-Card

Definice: **Dolní Darbouxův integrál (funkce $f$ na $D$)**

Back:

![](../../Assets/Pasted%20image%2020241020171626.png)

END

---


START
FIT-Card

Definice: **Dvojitý Darbouxův integrál**

Back:

![](../../Assets/Pasted%20image%2020241020172000.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241020172015.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Definice: **normální rozdělení $\sigma_n$**

Back:

![](../../Assets/Pasted%20image%2020241020172031.png)

END

---


START
FIT-Card

Věta: **výpočet dvojného integrálu nad obdélníkovou oblastí**

Back:

![](../../Assets/Pasted%20image%2020241020172119.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241020172145.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Definice: **dvojitý Darbouxův integrál funkce $f$ na $D$**

Back:

![](../../Assets/Pasted%20image%2020241020172211.png)

<!-- ExplanationStart -->
Máme nějakou oblast a když jsme schopný ji uzavřít do obdélníka abcd.

![](../../Assets/Pasted%20image%2020241020173002.png)
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **množina míry nula**

Back:

![](../../Assets/Pasted%20image%2020241020172251.png)

<!-- ExplanationStart -->
Množina $Z$ má míru nula ("jakoby má nulový obsah"), pokud existují obdélníčky, že pokrývají tu množinu $Z$. Chceme, aby součet obsahů těch obdélníčků byl menší než epsilon.

Neformálně: Jakoby snižuju furt velikosti obdélníčků. Když to najdu pro každý $\varepsilon$, tak to má jakoby nulový obsah.

![](../../Assets/Pasted%20image%2020241020173254.png)
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Poznámka: **Množiny míry nula a hodnota integrálu**

Back:

Množiny míry nula mají tu vlastnost, že jsou pro hodnotu integrálu "zanedbatelné".

<!-- ExplanationStart -->
Protože ty $\varepsilon$ jsem schopný zvolit tak malý, že to je vlastně zanedbatelný.
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Poznámka: graf spojité funkce a míra nula

Back:

Graf spojité funkce $\varphi : [a,b] \rightarrow \mathbb{R}$ má míru nula.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241020173754.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Poznámka: **vlastnost platí skoro všude**

Back:

![](../../Assets/Pasted%20image%2020241020173816.png)

<!-- ExampleStart -->
Můžeme říct:
Funkce $f$ a $g$ jsou rovny skoro všude, pokud množina $\set {x \in \mathbb{R}^2 : f(x) \neq g(x)}$ má míru nula.
<!-- ExampleEnd -->

END

---


START
FIT-Card

Věta: Omezená funkce je integrabilní $\Leftrightarrow$

Back:

![](../../Assets/Pasted%20image%2020241020174504.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241020174401.png)
![](../../Assets/Pasted%20image%2020241020174442.png)
xDD

<!-- ImageEnd -->

END

---


START
FIT-Card

Co je **hranice množiny**?

Back:

![](../../Assets/Pasted%20image%2020241020174536.png)

END

---


START
FIT-Card

Důsledek: omezená množina a integrabilita

Back:

![](../../Assets/Pasted%20image%2020241020174659.png)

END

---


START
FIT-Card

Definice: **Vlastnosti dvojného integrálu** (3)

Back:

![](../../Assets/Pasted%20image%2020241020174900.png)

END

---



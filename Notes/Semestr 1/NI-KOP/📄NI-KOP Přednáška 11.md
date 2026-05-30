---
created: 2024-12-21T15:39:10
title: "Simulovaná evoluce 3"
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP prednaska11 status-toReview


### Proč genetické algoritmy fungují

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je **Hypotéza stavebních bloků**?

Back:

![](../../../Assets/Pasted%20image%2020241221154048.png)

Tags: core
<!--ID: 1735922645590-->

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

Jak se dá jinak dívat na genetické algoritmy?

Back:

Pracuje se s množinou schémat
![](../../../Assets/Pasted%20image%2020241221154632.png)

Tags: core
<!--ID: 1735922645593-->

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

Co je schéma a jeho délka a řád?

Back:

![](../../../Assets/Pasted%20image%2020241221154358.png)
![](../../../Assets/Pasted%20image%2020241221154407.png)

Tags: core
<!--ID: 1735922645597-->

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

Věta: **o schématech**

Back:

![](../../../Assets/Pasted%20image%2020241221154656.png)

Tags: core
<!--ID: 1735922645600-->

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

Jak funguje genetický algoritmus jako zpětnovazební dynamický systém?

Back:

![](../../../Assets/Pasted%20image%2020241221154947.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241221155234.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735922645602-->

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

Co zpracovává uniformní křížení ve schématech?

Back:

![](../../../Assets/Pasted%20image%2020241221155317.png)
<!--ID: 1735922645605-->

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

Jaké dvě věci je třeba udělat u uniformního křížení ve schématech?

Back:

![](../../../Assets/Pasted%20image%2020241221155343.png)

Tags: core
<!--ID: 1735922645608-->

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

Jak funguje **Linkage learning**?

Back:

![](../../../Assets/Pasted%20image%2020241221155504.png)
![](../../../Assets/Pasted%20image%2020241221155521.png)

Tags: core
<!--ID: 1735922645612-->

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

Co jsou zavádějící (klamné) funkce?

Back:

Máme např. minimalizační problém, kde optimalizační kritérium je počet jedniček v chromozomu.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241221155741.png)

<!-- DetailInfoEnd -->
<!--ID: 1735922645615-->

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

Co je **Kompetentní** genetický algoritmus?

Back:

Takový, který zachází se stavebníma blokama:

- explicitně - **messy** genetický algoritmus
- pracuje s pravděpodobnostním modelem vazeb

![](../../../Assets/Pasted%20image%2020241221160016.png)

Tags: core
<!--ID: 1735922645618-->

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

Co je Fast Messy genetický algoritmus ($fmGA$)

Back:

Postupně se zvyšuje řád stavebních bloků $k$.

1. Vygenerujeme stavební bloky
2. Pak z nich vybereme "dobré stavební bloky" za řádu $k$
3. Křížením a mutacema z toho zkoušíme udělat novou sbírku stavebních bloků.

![](../../../Assets/Pasted%20image%2020241221160208.png)

Tags: core
<!--ID: 1735922645621-->

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

Jak se **kódují** schémata?

Back:

Na první pozici je místo, na druhé pozici je hodnota

![](../../../Assets/Pasted%20image%2020241221160412.png)

Tags: core
<!--ID: 1735922645624-->

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

Jak se řeší nedokonalost kódování schémat?

Back:

Dvě možnosti:

- Nedospecifikované geny
- Přespecifikované geny

![](../../../Assets/Pasted%20image%2020241221160611.png)
<!--ID: 1735922645628-->

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

Jak se generují schémata?

Back:

Stochastické generování:

- vygenerujeme schémata většího řádu
- potom schémata filtruju a zkracuju
  - Tzn. snažím se ze stavebního bloku vyššího řádu vyříznout nějaký lepší blok nižšího řádu

![](../../../Assets/Pasted%20image%2020241221160736.png)
<!--ID: 1735922645631-->

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

Jak funguje **filtrace schémat**?

Back:

![](../../../Assets/Pasted%20image%2020241221160849.png)
<!--ID: 1735922645634-->

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

Jak funguje Rekombinace schémat?

Back:

Jsou tam dvě operace:

- **rozdělení** (cut) - rozdělení obou rodičů v náhodných bodech
- **spojení** (splice) - spojím rozdělené fragmenty

![](../../../Assets/Pasted%20image%2020241221161051.png)

Tags: core
<!--ID: 1735922645637-->

END

---

### Algoritmy založené na statistických modelech závislostí

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jaký je princip algoritmů založených na statistických modelech závislostí?

Back:

Máme generace a zkoušíme udělat statistický odhad, co mi dává optima.

![](../../../Assets/Pasted%20image%2020241221161141.png)
<!--ID: 1735922645641-->

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

Jak funguje Bayesovská síť?

Back:

Mám pravděpodobnosti jevů v tabulce. Obecně to je orientovaný acyklický graf. Každá proměnní je uzel v tom grafu.:
![](../../../Assets/Pasted%20image%2020241221161403.png)
![](../../../Assets/Pasted%20image%2020241221161447.png)

Tags: core
<!--ID: 1735922645644-->

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

Jak se používají Bayesovské sítě?

Back:

V orientovaném grafu se pak můžu ptát na různé otázky:
![](../../../Assets/Pasted%20image%2020241221161604.png)

Tags: core
<!--ID: 1735922645647-->

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

Jak funguje Bayesovská optimalizace?

Back:

V cyklu algoritmu sestavuju bayesovskou síť.

![](../../../Assets/Pasted%20image%2020241221161621.png)

Tags: core
<!--ID: 1735922645650-->

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

Jak funguje hledání modelů v Bayesovské síti?

Back:

![](../../../Assets/Pasted%20image%2020241221161741.png)

Tags: core
<!--ID: 1735922645653-->

END

---

### Paralelizace evolučních algoritmů

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 2 možnosti granularity u paralelizace evolučních algoritmů?

Back:

- **Jedna aktuální generace v paralelním systému**
- **Jedna aktuální generace na procesor**

![](../../../Assets/Pasted%20image%2020241221161857.png)
<!--ID: 1735922645656-->

END

---

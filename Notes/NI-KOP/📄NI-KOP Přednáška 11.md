---
created: 2024-12-21T15:39:10
title: "Simulovaná evoluce 3"
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP prednaska11 status-toReview

### Proč genetické algoritmy fungují


START
FIT-Card

Co je Hypotéza stavebních bloků?

Back:

![](../../Assets/Pasted%20image%2020241221154048.png)

END

---


START
FIT-Card

Jak se dá jinak dívat na genetické algoritmy?

Back:

Pracuje se s mnoužinou schémat
![](../../Assets/Pasted%20image%2020241221154632.png)

END

---


START
FIT-Card

Co je schéma a jeho délka a řád?

Back:

![](../../Assets/Pasted%20image%2020241221154358.png)
![](../../Assets/Pasted%20image%2020241221154407.png)

END

---



START
FIT-Card

Věta: **o schématech**

Back:

![](../../Assets/Pasted%20image%2020241221154656.png)

END

---


START
FIT-Card

Jak funguje genetický algoritmus jako zpětnovazební dynamický systém?

Back:

![](../../Assets/Pasted%20image%2020241221154947.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241221155234.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co zpracovává uniformní křížení ve schématech?

Back:

![](../../Assets/Pasted%20image%2020241221155317.png)

END

---


START
FIT-Card

Jaké dvě věci je třeba udělat u uniformního křížení ve schématech?

Back:

![](../../Assets/Pasted%20image%2020241221155343.png)

END

---


START
FIT-Card

Jak funguje **Linkage learning**?

Back:

![](../../Assets/Pasted%20image%2020241221155504.png)
![](../../Assets/Pasted%20image%2020241221155521.png)

END

---


START
FIT-Card

Co jsou zavádějící (klamné) funkce?

Back:

Máme např. minimalizační problém, kde optimalizační kritérium je počet jedniček v chromozomu.



<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241221155741.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je Kompetentní genetický algoritmus?

Back:

Takový, který zachází se stavebníma blokama:
- explicitně - **messy** genetický algoritmus
- pracuje s pravděpodobnostním modelem vazeb

![](../../Assets/Pasted%20image%2020241221160016.png)

END

---


START
FIT-Card

Co je Fast Messy genetický algoritmus ($fmGA$)

Back:

Postupně se zvyšuje řád stavebních bloků $k$.

1. Vygenerujeme stavební bloky
2. Pak z nich vybereme "dobré stavební bloky" za řádu $k$
3. Křížením a mutacema z toho zkoušíme udělat novou sbírku stavebních bloků.

![](../../Assets/Pasted%20image%2020241221160208.png)

END

---


START
FIT-Card

Jak se **kódují** schémata?

Back:

Na první pozici je místo, na druhé pozici je hodnota

![](../../Assets/Pasted%20image%2020241221160412.png)

END

---


START
FIT-Card

Jak se řeší nedokonalost kódování schémat? 

Back:

Dvě možnosti:
- Nedospecifikované geny
- Přespecifikované geny

![](../../Assets/Pasted%20image%2020241221160611.png)

END

---


START
FIT-Card

Jak se generují schémata?

Back:

Stochastické generování:
- vygenerujeme schémata většího řádu
- potom schémata filtruju a zkracuju
	- Tzn. snažím se ze stavebního bloku vyššího řádu vyříznout nějaký lepší blok nižšího řádu

![](../../Assets/Pasted%20image%2020241221160736.png)

END

---

START
FIT-Card

Jak funguje **filtrace schémat**?

Back:

![](../../Assets/Pasted%20image%2020241221160849.png)

END

---


START
FIT-Card

Jak funguje Rekombinace schémat?

Back:

Jsou tam dvě operace:
- rozdělení (cut) - rozdělení obou rodičů v náhodných bodech
- spojení (splice) - spojím rozdělené fragmenty 

![](../../Assets/Pasted%20image%2020241221161051.png)

END

---

### Algoritmy založené na statistických modelech závislostí

START
FIT-Card

Jaký je princip algoritmů založených na statistických modelech závislostí?

Back:

Máme generace a zkoušíme udělat statistický odhad, co mi dává optima.

![](../../Assets/Pasted%20image%2020241221161141.png)

END

---


START
FIT-Card

Jak funguje Bayesovská síť?

Back:

Mám pravděpodobnosti jevů v tabulce. Obecně to je orientovaný acyklický graf. Každá proměnní je uzel v tom grafu.:
![](../../Assets/Pasted%20image%2020241221161403.png)
![](../../Assets/Pasted%20image%2020241221161447.png)

END

---


START
FIT-Card

Jak se používají Bayesovské sítě?

Back:

V orientovaném grafu se pak můžu ptát na různé otázky:
![](../../Assets/Pasted%20image%2020241221161604.png)

END

---


START
FIT-Card

Jak funguje Bayesovská optimalizace?

Back:

V cyklu algoritmu sestavuju bayesovskou síť. 

![](../../Assets/Pasted%20image%2020241221161621.png)

END

---


START
FIT-Card

Jak funguje hledání modelů v Bayesovské síti?

Back:

![](../../Assets/Pasted%20image%2020241221161741.png)

END

---

### Paralelizace evolučních algoritmů

START
FIT-Card

Jaké jsou 2 možnosti granularity u paralelizace evolučních algoritmů?

Back:

- **Jedna aktuální generace v paralelním systému**
- **Jedna aktuální generace na procesor**

![](../../Assets/Pasted%20image%2020241221161857.png)

END

---

---
created: 2025-04-19T13:32:51
title: "Paralelní redukce"
up: "[[📖NI-PDP]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDP prednaska10 status-toReview

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Paralelní algoritmy pro redukci
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: Vstupy a výstupy paralelní redukce

Back:

![](../../../Assets/Pasted%20image%2020250419133342.png)
<!--ID: 1746599652923-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Paralelní algoritmy pro redukci
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je **paralelní čas** paralelní redukce? 

Back:

$$T(n,p) = \alpha n/p + \beta \log p = O(\log n)$$

![](../../../Assets/Pasted%20image%2020250419133358.png)
<!--ID: 1746599652929-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Paralelní algoritmy pro redukci
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá **implementovat paralelní redukce**? (2)

Back:

- **EREW PRAM a 1D mřížka**: jako v binárním stromu
- **hyperkrychle**: po inverzní binomiální kostře

![](../../../Assets/Pasted%20image%2020250419133417.png)

Je to jakoby inverzní broadcast s nějakým výpočtem
<!--ID: 1746599652937-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Paralelní algoritmy pro redukci
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje MP_Reduce?

Back:

![](../../../Assets/Pasted%20image%2020250419133437.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250419133508.png)

<!-- ExampleEnd -->
<!--ID: 1746599652944-->

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

Jak funguje `MPI_MAXLOC` (a `MPI_MINLOC`) aneb lokalizace výsledku?

Back:

![](../../../Assets/Pasted%20image%2020250419133546.png)
<!--ID: 1746599652951-->

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

Jak se dá zadefinovat uživatelem definovaná operace redukce?

Back:

![](../../../Assets/Pasted%20image%2020250419133653.png)
<!--ID: 1746599652958-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Paralelní algoritmy pro redukci
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je operace `MPI_Allreduce`?

Back:

výsledek dostanou v `recvbuf` všichni

![](../../../Assets/Pasted%20image%2020250419133756.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250419133808.png)

<!-- ExampleEnd -->
<!--ID: 1746599652966-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Paralelní algoritmy pro redukci
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Reduce_scatter_block`?

Back:

$i$-tý proces redukuje jen $i$-té prvky

![](../../../Assets/Pasted%20image%2020250419133829.png)
![](../../../Assets/Pasted%20image%2020250419133840.png)
<!--ID: 1746599652974-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje Prefixový součet (=scan) nad polem (PPS)?

Back:

![](../../../Assets/Pasted%20image%2020250419133907.png)
<!--ID: 1746599652981-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Algoritmus: Sekvenční výpočet prefixových součtů

Back:

![](../../../Assets/Pasted%20image%2020250419133925.png)
<!--ID: 1746599652988-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje PPS na EREW PRAM?

Back:

![](../../../Assets/Pasted%20image%2020250419133941.png)
<!--ID: 1746599652995-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Nepřímý strom**

Back:

![](../../../Assets/Pasted%20image%2020250419133955.png)
<!--ID: 1746599653002-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Lemma: **PPS na nepřímém stromu** (listy, kroky, výška)

Back:

![](../../../Assets/Pasted%20image%2020250419134010.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250419134058.png)

<!-- ExampleEnd -->
<!--ID: 1746599653010-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Lemma: T = úplný binární strom $\implies \dots$

Back:

![](../../../Assets/Pasted%20image%2020250419134042.png)
<!--ID: 1746599653018-->

END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak funguje PPS na nepřímém binárním stromu/obousměrném motýlku?

Back:

Todo napsat nějaký basic vysvětlení

![](../../../Assets/Pasted%20image%2020260520192728.png)
<!--ID: 1779299206165-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak funguje PPS na **přímém stromu**?

Back:

![](../../../Assets/Pasted%20image%2020260520192958.png)

Pokud se použije **postorder linearizace**, tak je pak podobný jako ten nepřímý
<!--ID: 1779299206168-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak lze řešit PPS na libovolým řídkém grafu?

Back:

![](../../../Assets/Pasted%20image%2020260520193109.png)
<!--ID: 1779299206170-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak lze řešit PPS na hyperkrychli?

Back:

lexikografická indexace, každý proces si do žlutého registru přičítá svůj prefix a do zeleného všechny příchozí hodnoty, fází je stejně jako dimenzí

![](../../../Assets/Pasted%20image%2020260520193145.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020260520193152.png)
<!-- DetailInfoEnd -->

<!--ID: 1779299206173-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak lze řešit PPS na SF mřížkách?

Back:

linearizace lexikograficky po řádcích, 3 fáze (doprava po řádcích, dolů v posledním sloupci, doleva po řádcích kromě prvního) $O(nm)$

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020260520193233.png)
<!-- DetailInfoEnd -->

<!--ID: 1779299206176-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak lze řešit PPS na WH mřížkách?

Back:

simulace nepřímého binárního stromu $O(\log n)$

![](../../../Assets/Pasted%20image%2020260520193312.png)
<!--ID: 1779299206178-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jaké jsou aplikace PPS na PRAM? (5)

Back:

- **druhá fáze CountingSortu**, kdy z pole frekvencí dělám pole indexů do výstupu
- **Packing Problem** (Zhušťovací problém): zjistit pořadí jedničkových bitů
- **RadixSort**
- **binární sčítačka s predikcí přenosu**
- **tridiagonální systém rovnic** (modelace šíření tepla drátem, kmitání struny na kytaře)
<!--ID: 1779299206181-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak se aplikuje PPS v RadixSortu?

Back:

řazení $N = 2^n$ čísel zhušťováním od nejméně významného bitu, $O(\log^2 N)$ na $oBF_n$
<!--ID: 1779299206184-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak se aplikuje PPS v binární sčítačce s predikcí přenosu?

Back:

součet dvou $n$-bitových čísel za $O(\log n)$
<!--ID: 1779299206186-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak se aplikuje PPS v tridiagonálním systému rovnic?

Back:

tridiagonální systém rovnic (modelace šíření tepla drátem, kmitání struny na kytaře): dá se zapsat rekurentně, pomocí PPS s operací maticového násobení předpočítat matice $\mathcal H_i$ a celé to vyřešit za $O(n/p + \log p)$
<!--ID: 1779299206189-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Co je segmentový prefixový součet (SPPS)?

Back:

jako prefixový součet, ale výsledky se nešíří přes hranice segmentů
<!--ID: 1779299206192-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jak funguje SPPS?

Back:

algoritmus je stejný, ale do sémantiky operace \oplus se zapracují oddělovače segmentů
![](../../../Assets/Pasted%20image%2020260520193753.png)
<!--ID: 1779299206195-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Pomocí čeho se implementuje SPPS v MPI?

Back:

v MPI se implementuje pomocí uživatelské operace (`MPI_Op_create(segScan, 0, &myOp);`)
<!--ID: 1779299206198-->
END

---

<!--
Exam Note ID: NI-SPOL-20
Exam Note Section Name: Prefixový součet a segmentový prefixový součet na PRAM, v ortogonálních, hyperkubických a obecných topologiích, aplikace
Migration Status: migrate
-->
START
NI-SZZ

Jaká je aplikace SPPS?

Back:

**QuickSort**: out-of-place, nejdřív jeden segment, pro distribuci pivotů se použije SPPS, v každé iteraci je každý segment rozdělen na tři podle pivota ($S_<, S_=, S_>$) třemi zhuštěními pomocí SPPS → každá z $O(\log n)$ iterací vyžaduje konstantní počet SPPS → celková složitost $O(\log n \cdot (n/p + \log p))$
<!--ID: 1779299206201-->
END

---

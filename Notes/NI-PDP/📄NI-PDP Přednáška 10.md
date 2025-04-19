---
created: 2025-04-19T13:32:51
title: "Paralelní redukce"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska10 status-toReview


START
FIT-Card

Definice: Vstupy a výstupy paralelní redukce

Back:

![](../../Assets/Pasted%20image%2020250419133342.png)

END

---


START
FIT-Card

Definice: Vlastnosti paralelní redukce

Back:

![](../../Assets/Pasted%20image%2020250419133358.png)

END

---


START
FIT-Card

Jak se dá implementovat paralelní redukce?

Back:

![](../../Assets/Pasted%20image%2020250419133417.png)

Je to jakoby inverzní broadcast s nějakým výpočtem

END

---


START
FIT-Card

Jak funguje MP_Reduce?

Back:

![](../../Assets/Pasted%20image%2020250419133437.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250419133508.png)
<!-- ExampleEnd -->

END

---



START
FIT-Card

Jak funguje `MPI_MAXLOC` (a `MPI_MINLOC`) aneb lokalizace výsledku?

Back:

![](../../Assets/Pasted%20image%2020250419133546.png)

END

---


START
FIT-Card

Jak se dá zadefinovat uživatelem definovaná operace redukce?

Back:

![](../../Assets/Pasted%20image%2020250419133653.png)

END

---


START
FIT-Card

Co je operace `MPI_Allreduce`?

Back:

![](../../Assets/Pasted%20image%2020250419133756.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250419133808.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Jak funguje `MPI_Reduce_scatter_block`?

Back:

![](../../Assets/Pasted%20image%2020250419133829.png)
![](../../Assets/Pasted%20image%2020250419133840.png)

END

---


START
FIT-Card

Jak funguje Prefixový součet (=scan) nad polem (PPS)?

Back:

![](../../Assets/Pasted%20image%2020250419133907.png)

END

---


START
FIT-Card

Algoritmus: Sekvenční výpočet prefixových součtů

Back:

![](../../Assets/Pasted%20image%2020250419133925.png)

END

---


START
FIT-Card

Jak funguje PPS na EREW PRAM?

Back:

![](../../Assets/Pasted%20image%2020250419133941.png)

END

---


START
FIT-Card

Definice: Nepřímý strom

Back:

![](../../Assets/Pasted%20image%2020250419133955.png)

END

---


START
FIT-Card

Lemma: PPS na nepřímém stromu

Back:

![](../../Assets/Pasted%20image%2020250419134010.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250419134058.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Lemma: T = úplný binární strom $\implies \dots$

Back:

![](../../Assets/Pasted%20image%2020250419134042.png)

END

---


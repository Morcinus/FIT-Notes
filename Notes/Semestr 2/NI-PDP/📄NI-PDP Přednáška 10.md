---
created: 2025-04-19T13:32:51
title: "Paralelní redukce"
up: "[[📖NI-PDP]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDP prednaska10 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Definice: Vstupy a výstupy paralelní redukce

Back:

![](../../../Assets/Pasted%20image%2020250419133342.png)
<!--ID: 1746599652923-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Vlastnosti paralelní redukce

Back:

![](../../../Assets/Pasted%20image%2020250419133358.png)
<!--ID: 1746599652929-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá implementovat paralelní redukce?

Back:

![](../../../Assets/Pasted%20image%2020250419133417.png)

Je to jakoby inverzní broadcast s nějakým výpočtem
<!--ID: 1746599652937-->

END

---

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

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_MAXLOC` (a `MPI_MINLOC`) aneb lokalizace výsledku?

Back:

![](../../../Assets/Pasted%20image%2020250419133546.png)
<!--ID: 1746599652951-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá zadefinovat uživatelem definovaná operace redukce?

Back:

![](../../../Assets/Pasted%20image%2020250419133653.png)
<!--ID: 1746599652958-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je operace `MPI_Allreduce`?

Back:

![](../../../Assets/Pasted%20image%2020250419133756.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250419133808.png)

<!-- ExampleEnd -->
<!--ID: 1746599652966-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Reduce_scatter_block`?

Back:

![](../../../Assets/Pasted%20image%2020250419133829.png)
![](../../../Assets/Pasted%20image%2020250419133840.png)
<!--ID: 1746599652974-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje Prefixový součet (=scan) nad polem (PPS)?

Back:

![](../../../Assets/Pasted%20image%2020250419133907.png)
<!--ID: 1746599652981-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Algoritmus: Sekvenční výpočet prefixových součtů

Back:

![](../../../Assets/Pasted%20image%2020250419133925.png)
<!--ID: 1746599652988-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje PPS na EREW PRAM?

Back:

![](../../../Assets/Pasted%20image%2020250419133941.png)
<!--ID: 1746599652995-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Nepřímý strom

Back:

![](../../../Assets/Pasted%20image%2020250419133955.png)
<!--ID: 1746599653002-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: PPS na nepřímém stromu

Back:

![](../../../Assets/Pasted%20image%2020250419134010.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250419134058.png)

<!-- ExampleEnd -->
<!--ID: 1746599653010-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: T = úplný binární strom $\implies \dots$

Back:

![](../../../Assets/Pasted%20image%2020250419134042.png)
<!--ID: 1746599653018-->

END

---

---
created: 2025-04-10T11:45:23
title: "Klasifikace stavů"
up: "[[📖NI-VSM]]"
---

TARGET DECK: archive
FILE TAGS: NI-VSM prednaska15 status-toReview red

START
FIT-Card

(FIT-Notes flashcard)

Vysvětli vlastními slovy, jak se liší následující typy stavů:

- přechodný stav
- trvalý nulový
- trvalý nenulový
- trvalý nenulový aperiodický
- trvalý nenulový periodický

Back:

- **přechodný stav** - z toho stavu můžu odejít a už se třeba nikdy nevrátit
- **trvalý nulový** - vždy se vrátím, ale po strašně dlouhé době (v průměru nekonečno) - např. když je nekonečno trvalých stavů
- **trvalý nenulový** - vždy se vrátím v rozumném čase (konečném)
- **trvalý nenulový aperiodický** - vždy se vrátím a ne v nějakém pravidelném cyklu
- **trvalý nenulový periodický** - vždy se vrátím v pevném cyklu (např. vždy po 5 krocích)
<!--ID: 1747408246566-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **přechodný stav** (pomocí matice přechodu $P$)

Back:

![](../../../Assets/Pasted%20image%2020250410114718.png)
<!--ID: 1746518364687-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **trvalý nulový stav** (pomocí matice přechodu $P$)

Back:

![](../../../Assets/Pasted%20image%2020250410114734.png)
<!--ID: 1746518364689-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **trvalý nenulový aperiodický stav** (pomocí matice přechodu $P$)

Back:

![](../../../Assets/Pasted%20image%2020250410114750.png)
<!--ID: 1746518364692-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **trvalý nenulový periodický stav** (pomocí matice přechodu $P$)

Back:

![](../../../Assets/Pasted%20image%2020250410114804.png)
<!--ID: 1746518364695-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **dosažitelný stav**, vzájemně dosažitelné stavy

Back:

![](../../../Assets/Pasted%20image%2020250410114826.png)
<!--ID: 1746518364698-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: dosažitelnost stavů a stejný typ

Back:

![](../../../Assets/Pasted%20image%2020250410114839.png)
<!--ID: 1746518364701-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **uzavřená** množina stavů

Back:

![](../../../Assets/Pasted%20image%2020250410114855.png)

<!-- ExplanationStart -->

![](../../../Assets/Pasted%20image%2020250410114915.png)

<!-- ExplanationEnd -->
<!--ID: 1746518364704-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **pohlcující** stav

Back:

![](../../../Assets/Pasted%20image%2020250410114909.png)
<!--ID: 1746518364707-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **nerozložitelná** množina stavů a **nerozložitelný markovský řetězec**

Back:

![](../../../Assets/Pasted%20image%2020250410114932.png)
<!--ID: 1746518364710-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: o jednoznačném rozkladu

Back:

![](../../../Assets/Pasted%20image%2020250410114944.png)

![](../../../Assets/Pasted%20image%2020250410114953.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250410115001.png)
![](../../../Assets/Pasted%20image%2020250410121951.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364713-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: pokud je stav $i$ trvalý a $i \rightarrow j$, pak $\dots$

Back:

![](../../../Assets/Pasted%20image%2020250410115024.png)
<!--ID: 1746518364716-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: v řetězci s konečně mnoha stavy, $\dots$ (2)

Back:

![](../../../Assets/Pasted%20image%2020250410115040.png)
<!--ID: 1746518364719-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: jak v konečné množině stavů $S$ rozhodnout, jestli je stav _trvalý nenulový_ nebo _přechodný_?

Back:

![](../../../Assets/Pasted%20image%2020250410115116.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250410115129.png)
![](../../../Assets/Pasted%20image%2020250410115136.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364722-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: **o existenci stacionárního rozdělení**

Back:

![](../../../Assets/Pasted%20image%2020250410115150.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250410115204.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364724-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Důsledek: Je li množina stavů $S$ konečná $\implies \ ???$

(hint: stacionární rozdělení)

Back:

![](../../../Assets/Pasted%20image%2020250410115227.png)
<!--ID: 1746518364727-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kolik je obecně stacionárních rozdělení?

Back:

Tolik _lineárně nezávislých_ stacionárních rozdělení, kolik je množin $C_r$ (trvalé nenulové stavy).

![](../../../Assets/Pasted%20image%2020250410115250.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250410115259.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364730-->

END

---

### Markovské řetězce - statistické metody

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje metoda maximální věrohodnosti (MLE)?

Back:

![](../../../Assets/Pasted%20image%2020250410115647.png)
<!--ID: 1746518364733-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá odhadnout matice přechodu pomocí MLE?

Back:

![](../../../Assets/Pasted%20image%2020250410115702.png)
![](../../../Assets/Pasted%20image%2020250410115709.png)
<!--ID: 1746518364735-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Pozorování: jak vypadá maximálně věrohodný odhad matice přechodu $\textbf{P}$?

Back:

![](../../../Assets/Pasted%20image%2020250410115742.png)
<!--ID: 1746518364738-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: konzistence odhadu matice přechodu

Back:

![](../../../Assets/Pasted%20image%2020250410115803.png)
<!--ID: 1746518364741-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje MCMC?

Back:

![](../../../Assets/Pasted%20image%2020250410115830.png)
<!--ID: 1746518364744-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje Metropolis - Hastings algoritmus?

Back:

![](../../../Assets/Pasted%20image%2020250410115847.png)
![](../../../Assets/Pasted%20image%2020250410115853.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250410115906.png)
![](../../../Assets/Pasted%20image%2020250410115913.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364746-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: pro markovský řetězec $\dots$ platí, že je vektor $q$ stacionárním

Back:

![](../../../Assets/Pasted%20image%2020250410115955.png)
<!--ID: 1746518364749-->

END

---

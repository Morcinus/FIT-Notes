---
created: 2024-10-23T11:02:38
title: "Analýza IV: integrace"
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI prednaska07 status-toReview analyza4


<!--
Exam Note ID: NI-SPOL-04
Exam Note Section Name: Integrál funkcí více proměnných (Darbouxova konstrukce)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **typy oblastí**, nad kterými lze integrovat? (2)

Back:

![](../../../Assets/Pasted%20image%2020241023150017.png)

<!-- DetailInfoStart -->

- **Typ 1** - $D = \set {(x,y) \in \mathbb{R}^2: x \in <a,b> \land \varphi_1(\lambda) \leq y \leq \varphi_2(\lambda)}$
  <!-- DetailInfoEnd -->
<!--ID: 1735205889362-->

END

---

<!--
Exam Note ID: NI-SPOL-04
Exam Note Section Name: Integrál funkcí více proměnných (Darbouxova konstrukce)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak lze obecně spočíst dvojný integrál nad obecnou oblastí?

Back:

![](../../../Assets/Pasted%20image%2020241023150046.png)

<!-- ExplanationStart -->

Máme nějaký tvar na 2D ploše a chceme spočíst objem toho tělesa od té roviny $x,y$ až po ten graf té funkce.

![](../../../Assets/Pasted%20image%2020241023151316.png)

<!-- ExplanationEnd -->
<!--ID: 1735205889366-->

END

---

<!--
Exam Note ID: NI-SPOL-04
Exam Note Section Name: Integrál funkcí více proměnných (Darbouxova konstrukce)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: Výpočet dvojného integrálu nad obecnou oblastí

Back:

![](../../../Assets/Pasted%20image%2020241023150131.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020241023150143.png)

<!-- ExerciseEnd -->

<!-- ExampleStart -->

**Průměr funkce $f(x,y)$ nad nějakou oblastí:**
![](../../../Assets/Pasted%20image%2020241023150226.png)
![](../../../Assets/Pasted%20image%2020241023152437.png)

**Těžiště desky s husotou $\rho$**
![](../../../Assets/Pasted%20image%2020241023150330.png)

**Povrch grafu $f(x,y)$**:
![](../../../Assets/Pasted%20image%2020241023150357.png)

<!-- ExampleEnd -->

Tags: core
<!--ID: 1735205889369-->

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

Jak lze spočíst povrch grafu $f(x,y)$ nad $D$?

(tohle nejspíš nemusíme umět)

Back:

![](../../../Assets/Pasted%20image%2020241023150357.png)
<!--ID: 1735205889372-->

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

Jak funguje **trojný integrál**?

Back:

Analogicky jako dvojný integrál.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241023150507.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205889374-->

END

---

<!--
Exam Note ID: NI-SPOL-04
Exam Note Section Name: Integrál funkcí více proměnných (Darbouxova konstrukce)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Jacobiho matice**

Back:

![](../../../Assets/Pasted%20image%2020241023150523.png)

<!-- DetailInfoStart -->

Matice aproximuje zobrazení.

Každému vektoru se přiřadá nějaká matice.
![](../../../Assets/Pasted%20image%2020241023154135.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205889377-->

END

---

<!--
Exam Note ID: NI-SPOL-04
Exam Note Section Name: Integrál funkcí více proměnných (Darbouxova konstrukce)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: **o substituci** (zobecněná pro funkci $f: D \rightarrow \mathbb{R}$)

Back:

![](../../../Assets/Pasted%20image%2020241023150546.png)

<!-- ExplanationStart -->

Může se stát, že ta část napravo se počítá jednoduššeji, než ta část nalevo. Proto se to používá.

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205889380-->

END

---

### Příklady

#### Příklad 1

Spočteme povrch koule tím, že spočteme povrch jedné osminy.
![](../../../Assets/Pasted%20image%2020241023154835.png)

#### 1. Vyjádříme si funkci $f(x,y)$

![](../../../Assets/Pasted%20image%2020241023155425.png)

#### 2. Provedeme transformaci do polární souřadnice

![](../../../Assets/Pasted%20image%2020241023155730.png)

#### 3. Spočteme $J$ a determinant

![](../../../Assets/Pasted%20image%2020241023160220.png)
![](../../../Assets/Pasted%20image%2020241023160252.png)

#### 4. Dosadíme do integrálu

![](../../../Assets/Pasted%20image%2020241023160732.png)
![](../../../Assets/Pasted%20image%2020241023160852.png)
![](../../../Assets/Pasted%20image%2020241023161155.png)

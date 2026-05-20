---
created: 2024-11-27T12:56:15
title: "Algebra 3"
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI prednaska13 status-toReview algebra3

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co platí pro inverzní prvek generátoru grupy?

Back:

je také generátor
<!--ID: 1735205749355-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: řád prvku grupy ($\text{ord}(g)$)

Back:

![](../../../Assets/Pasted%20image%2020241127130510.png)

<!-- InformallySaidStart -->

Jinými slovy řád prvku mi říká, kolikrát musím prvek "umocnit", abych dostal neutrální prvek.

<!-- InformallySaidEnd -->

Tags: core
<!--ID: 1735205749357-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: Cyklická grupa

Back:

![](../../../Assets/Pasted%20image%2020241226141743.png)

<!-- InformallySaidStart -->

Jinými slovy, pokud má grupa generátor, je cyklická.

<!-- InformallySaidEnd -->
<!--ID: 1735219298335-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: Jaký řád musí mít $\mathbb{Z}_n^\times$, aby byla cyklická?

Back:

![](../../../Assets/Pasted%20image%2020241127130556.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241127130603.png)

<!-- ExampleEnd -->

Tags: core
<!--ID: 1735205749360-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: $a$ je generátor, potom $a^k$ je generátor

Back:

![](../../../Assets/Pasted%20image%2020241127131615.png)

<!-- ProofStart -->

![](../../../Assets/Pasted%20image%2020241127131625.png)
![](../../../Assets/Pasted%20image%2020241127131630.png)

<!-- ProofEnd -->

Tags: core
<!--ID: 1735205749362-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Důsledek: řád grupy a $\varphi$

Back:

![](../../../Assets/Pasted%20image%2020241127132222.png)

<!-- ExplanationStart -->

![](../../../Assets/Pasted%20image%2020241127132235.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205749365-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Kolik generátorů má grupa $\mathbb{Z}_p^\times$, kde $p$ je prvočíslo?

Back:

![](../../../Assets/Pasted%20image%2020241127132308.png)

Tags: core
<!--ID: 1735205749367-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: podgrupa cyklické grupy

Back:

![](../../../Assets/Pasted%20image%2020241127132326.png)

<!-- ProofStart -->

![](../../../Assets/Pasted%20image%2020241127132335.png)

<!-- ProofEnd -->

Tags: core
<!--ID: 1735205749370-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: co platí pro všechny prvky $a \in M$ grupy $G = (M, \circ)$

Back:

![](../../../Assets/Pasted%20image%2020241127132413.png)

<!-- ProofStart -->

![](../../../Assets/Pasted%20image%2020241127132421.png)

<!-- ProofEnd -->

Tags: core
<!--ID: 1735205749372-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Důsledek: **Malá Fermatova věta**

Back:

![](../../../Assets/Pasted%20image%2020241127132436.png)

<!-- DetailInfoStart -->

Je to důsledek (jakoby konkrétnější případ) této věty:
![](../../../Assets/Pasted%20image%2020241127132413.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749375-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card
Jak vyřešit $x^\text{obri cislo} \pmod{m}$?
Back:

1. Ověřím, jestli $gcd(x,m) = 1$, pokud ano, mohu použít Fermatovu/Eulerovu větu
2. Použiju Fermatovu/Eulerovu větu -> získám $x^s \equiv 1 \pmod{m}$
3. Spočtu původní číslo tak, že využiju $x^s \equiv 1$ a zároveň to modulo. Tím se dostanu k výsledku
<!--ID: 1762184495621-->
END

### Homomorfismy a isomorfismy

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: homomorfismus, izomorfismus grupoidů

Back:

![](../../../Assets/Pasted%20image%2020241127135129.png)

<!-- InformallySaidStart -->

Homomorfismus = je jedno jeslti operaci provedu v definičním oboru nebo v tom obrazu
Izomorfismus = je navíc bijekcí

<!-- InformallySaidEnd -->

Tags: core
<!--ID: 1735205749377-->

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

Definice: **monomorfismus**

Back:

Homomorfismus, který je **injektivní**.

<!-- ExplanationStart -->

Připomenutí (neformálně): $A \rightarrow B$
Injektivní znamená, že každý prvek z $A$ se zobrazí na jiný prvek z $B$.

($x \neq x' \implies f(x) \neq f(x')$)

![](../../../Assets/Pasted%20image%2020241226152740.png)

<!-- ExplanationEnd -->
<!--ID: 1735223297369-->

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

Definice: **epimorfismus**

Back:

Homomorfismus, který je **surjektivní**.

<!-- ExplanationStart -->

Připomenutí (neformálně): $A \rightarrow B$
Surjektivní znamená, že zobrazení "pokryje" celou množinu $B$

![](../../../Assets/Pasted%20image%2020241226152749.png)

<!-- ExplanationEnd -->
<!--ID: 1735223297372-->

END

---

<!--
Exam Note ID: NI-SPOL-01
Exam Note Section Name: Podgrupy, cyklické grupy a jejich generátory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **izomorfismus**

Back:

Homomorfismus, který je **bijektivní**.

<!-- ExplanationStart -->

Připomenutí (neformálně): $A \rightarrow B$
Bijektivní znamená, že každému prvku z $A$ odpovídá právě jeden prvek z množiny $B$ (neboli je injektivní a surjektivní zároveň).

![](../../../Assets/Pasted%20image%2020241226152728.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735223297374-->

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

Definice: izomorfní grupy

Back:

![](../../../Assets/Pasted%20image%2020241127135144.png)
<!--ID: 1735205749379-->

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

Věta: homomorfismus grupy do grupoidu $\implies \dots$

Back:

![](../../../Assets/Pasted%20image%2020241127135245.png)

<!-- ProofStart -->

![](../../../Assets/Pasted%20image%2020241127135251.png)

<!-- ProofEnd -->

Tags: core
<!--ID: 1735205749382-->

END

---

---
created: 2025-02-20T10:20:01
title: "Základní pojmy pravděpodobnosti"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska01 status-toReview


START
FIT-Card

Definice: Klasická definice pravděpodobnosti

Back:

$$P(A) = \frac{\text{počet příznivých výsledků}}{\text{počet všech možných výsledků}}$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220102644.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Definice: Geometrická definice pravděpodobnosti

Back:

$$P(A) = \frac{\text{velikost množiny příznivých výsledků}}{\text{velikost množiny všech možných výsledků}}$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220102747.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Definice: Pravděpodobnostní prostor

(asi stačí jen tušit)

Back:

![](../../Assets/Pasted%20image%2020250220102835.png)

END

---


START
FIT-Card

Definice: Prostor elementárních jevů $\Omega$

(asi stačí jen tušit)

Back:

![](../../Assets/Pasted%20image%2020250220102914.png)

END

---


START
FIT-Card

Definice: sigma algebra $\mathcal F$

(asi stačí jen tušit)

Back:

![](../../Assets/Pasted%20image%2020250220102928.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220103101.png)
![](../../Assets/Pasted%20image%2020250220103108.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Definice: Pravděpodobnostní míra $P$ (="pravděpodobnost")

Back:

![](../../Assets/Pasted%20image%2020250220103126.png)

END

---


START
FIT-Card

Čemu je rovno:
$$P(\emptyset) = ?$$

Back:

$$P(\emptyset) = 0$$

END

---


START
FIT-Card

Čemu je rovno:
$$P(A \cup B) = \ ?$$
Pokud $A$ a $B$ jsou navzájem disjunktní?

Back:

$$P(A \cup B) = P(A)+P(B)$$

END

---


START
FIT-Card

Čemu je rovno:
$$P(A \cup B) = \ ?$$

Back:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

END

---


START
FIT-Card

Co platí pro pravděpodobnosti $P(A)$ a $P(B)$, pokud $A \subset B$

Back:

$$P(A) \leq P(B)$$
"Pravděpodobnost je mezi 0 a 1. Pokud v písemce napíšete, že je výsledná pravděpodobnost 2, tak písemku roztrhnu, přeškrtám, slepím, udělím 0 bodů a řádně archivuju. :D" - Hrabák
- Prý když víme že nám vyšla blbost, tak to máme do písemky napsat

END

---


START
FIT-Card

Definice: Podmíněná pravděpodobnost

Back:

![](../../Assets/Pasted%20image%2020250220104119.png)

<!-- ExplanationStart -->
Když vím, že nastal jev $B$, tak už jen počítám, jaká byla pravděpodobnost, že to bylo to $A$čko (tzn. $A$ průnik $B$) z $B$.
![](../../Assets/Pasted%20image%2020250220104218.png)
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
Podmíněná pravděpodobnost je taky pravděpodobností:
![](../../Assets/Pasted%20image%2020250220104355.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Čemu je rovno následující:
Pokud $P (A \cap B) \gt 0$:
$$P (A \cap B) = P(A|B)P(B) = \ ???$$

Back:

$$P (A \cap B) = P(A|B)P(B) = P(B|A)P(A)$$

END

---


START
FIT-Card

Lemma: Řetězové pravidlo

Back:

![](../../Assets/Pasted%20image%2020250220104546.png)

END

---


START
FIT-Card

Věta: o úplném rozkladu pravděpodobnosti

Back:

![](../../Assets/Pasted%20image%2020250220104633.png)

END

---


START
FIT-Card

Věta: Bayesova

Back:

![](../../Assets/Pasted%20image%2020250220104647.png)

<!-- ExplanationStart -->
Vlastně přepíšu větu o úplném rozkladu pravděpodobnosti tak, aby to "fungovalo obráceně". Vím že nastal jev $A$ a můžu z toho zjistit pravděpodobnost $B_j$.
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **nezávislé jevy** a **nezávislý soubor jevů**

Back:

![](../../Assets/Pasted%20image%2020250220104800.png)

END

---


START
FIT-Card

Věta: Jsou-li jevy $A$ a $B$ nezávislé, pak i jevy $\dots$ jsou nezávislé.

Back:

![](../../Assets/Pasted%20image%2020250220104910.png)

END

---


START
FIT-Card

Definice: náhodná veličina

Back:

![](../../Assets/Pasted%20image%2020250220105037.png)

<!-- ExplanationStart -->
Náhodná veličina je funkce, co přiřazuje výsledkům experimentu nějaká čísla.

Podmínka měřitelnosti znamená, že musím být schopný říct, jestli ten jev nastal nebo nenastal. Pro libovolné reálné $X$ musím být schopný říct, jestli je to $X$ menší než $x$ (kde malé $x$ je libovolné reálné číslo). Jinými slovy musím být schopný každé $X$ změřit.
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Definice: Distribuční funkce

Back:

![](../../Assets/Pasted%20image%2020250220105318.png)

END

---


START
FIT-Card

Věta: Vlastnosti distribuční funkce

Back:

![](../../Assets/Pasted%20image%2020250220105346.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220105352.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220105452.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Termín: funkce přežití

Back:

![](../../Assets/Pasted%20image%2020250220105511.png)

<!-- ExplanationStart -->
Je to pravděpodobnost, která říká, že doba mojí smrti (náohdná veličina $X$) je větší než konkrétní hodnota $x$.

Prostě se ptáme, jaká je pravděpodobnost, že se to dostane za určitý bod.
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Jak vypadá **distribuční funkce** pro **diskrétní**, **spojitou** a **smíšenou** náhodnou veličinu?

Back:

![](../../Assets/Pasted%20image%2020250220105708.png)

END

---


START
FIT-Card

Definice: **Diskrétní náhodná veličina**

Back:

![](../../Assets/Pasted%20image%2020250220105730.png)

END

---


START
FIT-Card

Definice: **Spojitá náhodná veličina**

Back:

![](../../Assets/Pasted%20image%2020250220105826.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220105835.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Věta: normalizační podmínka

Back:

![](../../Assets/Pasted%20image%2020250220105911.png)

END

---


START
FIT-Card

Jaká je u spojité náhodné veličiny pravděpodobnost, že se trefím do daného čísla $x$?

$$P(X=x)= ?$$

Back:

$$P(X=x)= 0$$

END

---


START
FIT-Card

Jak se spočte $f_X(x)$?

Back:

$$f_X(x)=\frac{\text{d}F_X}{\text{d}x}(x)$$

END

---


START
FIT-Card

![](../../Assets/Pasted%20image%2020250220112056.png)

Back:

![](../../Assets/Pasted%20image%2020250220112100.png)

END

---


START
FIT-Card

![](../../Assets/Pasted%20image%2020250220112107.png)

Back:

![](../../Assets/Pasted%20image%2020250220112111.png)

END

---

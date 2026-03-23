---
created: 2025-04-19T13:57:39
title: "Markovské řetězce se spojitým časem"
up: "[[📖NI-VSM]]"
---

TARGET DECK: archive
FILE TAGS: NI-VSM prednaska17 status-toReview green

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje binomický proces jako markovský řetězec?

Back:

V každém čase hodíme mincí, pokud padne hlava, přičteme 1 (tzn. přesuneme se do stavu o 1 výše).

![](../../../Assets/Pasted%20image%2020250419135846.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250419135828.png)
![](../../../Assets/Pasted%20image%2020250419135837.png)
![](../../../Assets/Pasted%20image%2020250419135900.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599649602-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Čítací proces**

Back:

![](../../../Assets/Pasted%20image%2020250419135912.png)

Počítá mi kolik událostí nastalo do daného času

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250419135922.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599649609-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Poissonův proces**

Back:

![](../../../Assets/Pasted%20image%2020250419135938.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250419135951.png)

<!-- ImageEnd -->
<!--ID: 1746599649617-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Poissonův proces 2**

Back:

![](../../../Assets/Pasted%20image%2020250419140015.png)
<!--ID: 1746599649625-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší Binomický a Poissonův proces?

Back:

Rozdělením času mezi událostmi.

- U binomického v každé "sekundě" flipneme coin a přičteme nebo nepřičteme hodnotu
- U poissonova přičteme v náhodném čase o 1 (čas může být i třeba 0.5).

Tzn. poisson je jakoby spojitá varianta binomického.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250419140032.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599649632-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Exponenciální rozdělení**

- předpis
- parametry
- jak je definováno ($f_X(x)$)
- střední hodnota
- rozptyl

Back:

**Předpis**: $X \sim Exp(\lambda)$
**Parametry**:

- $\lambda > 0$
  **Definice**:
- $f_X(x) = \lambda e^{-\lambda x} \quad x \in [0, \infty), \ 0$ jinde
  **Střední hodnota:**
- $EX=\frac{1}{\lambda}$
- $varX=\frac{1}{\lambda^2}$

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250419140054.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599649638-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká je distribuční funkce exponenciálního rozdělení?

(v jedné zkoušce to bylo potřeba jako součást praktického příkladu)

Back:

![](../../../Assets/Pasted%20image%2020250525180005.png)
<!--ID: 1748188849403-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Bezpaměťovost exponenciálního rozdělení

Back:

![](../../../Assets/Pasted%20image%2020250419140119.png)
<!--ID: 1746599649646-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Silná bezpaměťovost exponenciálního rozdělení

Back:

![](../../../Assets/Pasted%20image%2020250419140137.png)
<!--ID: 1746599649654-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Součet exponenciálních je gamma

Back:

![](../../../Assets/Pasted%20image%2020250419140156.png)
<!--ID: 1746599649660-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: **Ekvivalence definic Poissonova procesu**

Back:

![](../../../Assets/Pasted%20image%2020250419140214.png)
<!--ID: 1746599649667-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: Jaké rozdělení má náhodná veličina

Back:

![](../../../Assets/Pasted%20image%2020250419140250.png)
<!--ID: 1746599649674-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: Bezpaměťovost Poissonova procesu

Back:

![](../../../Assets/Pasted%20image%2020250419140308.png)
<!--ID: 1746599649680-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Markovský řetězec se spojitým časem

Back:

![](../../../Assets/Pasted%20image%2020250419140332.png)
![](../../../Assets/Pasted%20image%2020250419140338.png)
<!--ID: 1746599649688-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: náhodný (_spojitý_) proces je markovský právě tehdy když

Back:

![](../../../Assets/Pasted%20image%2020250419140359.png)
<!--ID: 1746599649695-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: **Chapman-Kolmogorov** (pro spojité markovské řetězce)

Back:

![](../../../Assets/Pasted%20image%2020250419140410.png)
<!--ID: 1746599649701-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Homogenní markovský řetězec** (pro spojité markovské řetězce)

Back:

![](../../../Assets/Pasted%20image%2020250419140431.png)

Tzn. je jakoby jedno kde v tom řetězci začnu

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250419140438.png)

<!-- ExampleEnd -->
<!--ID: 1746599649708-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Matice skokových intenzit**

Back:

![](../../../Assets/Pasted%20image%2020250419140610.png)

Co mi to říká:

<!-- ExplanationStart -->

Matice intenzit mi říká několik věcí:

1. Jak rychle se kam systém přesouvá mezi jednotlivými časy.
2. Jak dlouho průměrně zůstanu v daném stavu (na diagonále)
3. Jaká je pravděpodobnost přechodu do jiného stavu.
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250419140619.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250419140637.png)

<!-- ExampleEnd -->
<!--ID: 1746599649715-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze spočíst $\textbf{Q}$, pokud známe $\textbf{P}(0)$?

Back:

$$\textbf{Q}=\textbf{P}'(0)$$

Tzn. prostě zderivuju každý prvek té matice $\textbf{P}$
<!--ID: 1748180445895-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: **Simulace procesu pomocí skokových intenzit**

Jak se z $\textbf{Q}$ dostane:

- Čas do výskoku z $i$
- Pravděpodobnost skoku z $i$ do $j$

Back:

1. $-\textbf{Q}_{ii}$
2. $\frac{\textbf{Q}_{ij}}{-\textbf{Q}_{ii}}$

![](../../../Assets/Pasted%20image%2020250419140652.png)
<!--ID: 1746599649722-->

END

---

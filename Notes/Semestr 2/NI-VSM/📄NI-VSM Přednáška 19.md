---
created: 2025-04-22T09:22:37
title: Konstrukce řetězců se spojitým časem
up:
  - "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska19 status-toReview green


START
FIT-Card

Věta: **Kolmogorova rovnice**

Back:

![](../../../Assets/Pasted%20image%2020250419141051.png)
<!--ID: 1746599649435-->
END

---


START
FIT-Card

Důsledek: rozdělení $p(t)$ a diferenciální rovnice

Back:

![](../../../Assets/Pasted%20image%2020250422092318.png)

<!-- ExerciseStart -->
![](../../../Assets/Pasted%20image%2020250422092334.png)
<!-- ExerciseEnd -->
<!--ID: 1746599649443-->
END

---


START
FIT-Card

Věta: čemu je rovna matice přechodu $P(t)$

(řešení kolmogorových rovnic)

Back:

![](../../../Assets/Pasted%20image%2020250422092410.png)

<!-- ExerciseStart -->
![](../../../Assets/Pasted%20image%2020250422092420.png)
<!-- ExerciseEnd -->
<!--ID: 1746599649451-->
END

---


START
FIT-Card

Definice: **stacionární rozdělení** (spojitý čas)

Back:

![](../../../Assets/Pasted%20image%2020250422092437.png)
<!--ID: 1746599649457-->
END

---


START
FIT-Card

Věta: Vektor $\pi$ je stacionárním rozdělením právě tehdy když (spojitý čas)

Back:

![](../../../Assets/Pasted%20image%2020250422092511.png)
<!--ID: 1746599649465-->
END

---


START
FIT-Card

Definice: Markovský řetězec je nerozložitelný

Back:

![](../../../Assets/Pasted%20image%2020250422092530.png)
<!--ID: 1746599649473-->
END

---


START
FIT-Card

Důsledek: Co stačí aby platilo, aby existovalo stacionární rozdělení pro markovský řetězec se spojitým časem?

Back:

![](../../../Assets/Pasted%20image%2020250422092555.png)
<!--ID: 1746599649480-->
END

---


START
FIT-Card

Pozorování: **detailní rovnováha**

Back:

![](../../../Assets/Pasted%20image%2020250422092635.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250422092646.png)
<!-- DetailInfoEnd -->

<!-- ExerciseStart -->
![](../../../Assets/Pasted%20image%2020250422092710.png)
![](../../../Assets/Pasted%20image%2020250422092719.png)
<!-- ExerciseEnd -->
<!--ID: 1746599649487-->
END

---


START
FIT-Card

Jak bychom prakticky použili rovnici detailní rovnováhy pro nalezení stacionárního rozdělení této matice?

![](../../../Assets/Pasted%20image%2020250522185031.png)

Back:

Vypíšeme rovnice:
![](../../../Assets/Pasted%20image%2020250522185039.png)

Postupně dosadíme a vyjádříme složky $\pi$
![](../../../Assets/Pasted%20image%2020250522185120.png)
<!--ID: 1747933518476-->
END

---


### Přednáška 21

START
FIT-Card

Lemma: Pokud máme nezávislé exponenciální rozdělení $T$ a $S$, potom ...

$$Z := \min\{T,S\} \sim \ ???$$

Back:

![](../../../Assets/Pasted%20image%2020250422092802.png)

To samé platí obecněji:
![](../../../Assets/Pasted%20image%2020250422092831.png)
<!--ID: 1746599649494-->
END

---


START
FIT-Card

Pozorování: co platí pro $F_\text{max{X,Y}}(t)$

Back:

![](../../../Assets/Pasted%20image%2020250422092921.png)
<!--ID: 1746599649510-->
END

---


START
FIT-Card

Lemma: Čemu je rovno $P(T<S)$ a $P(S<T)$ pro $S,T$ exponenciální?

Back:

![](../../../Assets/Pasted%20image%2020250422093005.png)

Neboli že $T$ nebo $S$ vyhraje závod
<!--ID: 1746599649517-->
END

---


START
FIT-Card

Důsledek: čemu je rovno $P(T_i=min\{T_1, \dots T_n\})$

Back:

![](../../../Assets/Pasted%20image%2020250422093042.png)

Neboli že $T_i$ vyhraje závod ze všech závodníků
<!--ID: 1746599649523-->
END

---


START
FIT-Card

Lemma: Nezávislost ${min\{T,S\}>u}$ a $T<S$ (aneb vítěz a délka závodu jsou nezávislé)

Back:

![](../../../Assets/Pasted%20image%2020250422093107.png)

Jinými slovy:
- Představme si 2 závodníky, co doběhnou v časech $T$ a $S$

Lemma pak říká, že pro $u \geq 0$ jsou nezávislé následující dvě věci:
- Jak dlouho závod trval (že závod trval déle než $u$)
- Kdo vyhrál závod (že $T < S$ - tedy že závodník $T$ byl rychlejší)
<!--ID: 1746599649532-->
END

---


START
FIT-Card

Důsledek: Buďte $T_1, \dots, T_n$ nezávislé veličiny, pak jevy... jsou nezávislé

(aneb obecně nezávislost nejlepšího času a nejlepšího závodníka)

Back:

![](../../../Assets/Pasted%20image%2020250422093211.png)

<!-- ExerciseStart -->
![](../../../Assets/Pasted%20image%2020250422093223.png)
![](../../../Assets/Pasted%20image%2020250422093231.png)
![](../../../Assets/Pasted%20image%2020250422093239.png)
<!-- ExerciseEnd -->
<!--ID: 1746599649540-->
END

---


START
FIT-Card

Definice: Landauova notace "velké O"

Back:

![](../../../Assets/Pasted%20image%2020250422093300.png)

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020250422093320.png)
<!-- ExampleEnd -->
<!--ID: 1746599649547-->
END

---

START
FIT-Card

Definice: "malé O"

Back:

![](../../../Assets/Pasted%20image%2020250422093334.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250422093341.png)
<!-- DetailInfoEnd -->

<!-- ExerciseStart -->
![](../../../Assets/Pasted%20image%2020250422093351.png)
<!-- ExerciseEnd -->
<!--ID: 1746599649554-->
END

---

START
FIT-Card

Pozorování: souvislost markovského řetězce se spojitým časem a exponenciálními závody

proces je markovský řetězec se spojitým časem $\Leftrightarrow \dots$

Back:

![](../../../Assets/Pasted%20image%2020250422093838.png)

Pozn. Co po nás podle Hrabáka budou chtít:
- Buď dostanem matici přechodu za čas T
	- Např. Rozdělení v čase 17,5 když známe rozdělení v čase 2 (stačí jen vynásobit maticí vývoje za čas - tzn. P(17,5-2))
- Nebo dostanem diagram. Z toho uděláme matici skokových intenzit
	- Z toho třeba budou chtít sestavit diferenciální rovnice

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250422093849.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020250422093905.png)

<!-- ExampleEnd -->
<!--ID: 1746599649562-->
END

---

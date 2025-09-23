---
created: 2025-03-22T07:57:55
title: "Testování hypotéz"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska09 status-toReview blue


START
FIT-Card

Definice: $p$-hodnota

Back:

![](../../../Assets/Pasted%20image%2020250322113850.png)

Je to minimální hladina významnosti, na které lze zamítnout $H_0$ **při daném pozorování**.

![](../../../Assets/Pasted%20image%2020250322075825.png)
<!--ID: 1746599650039-->
END

---


START
FIT-Card

Jaký význam má $p$-hodnota?

Back:

P-hodnota mi říká, jaká je pravděpodobnost, že bychom daný výsledek dostali čistě náhodou, pokud platí nulová hypotéza. 

![](../../../Assets/Pasted%20image%2020250322075840.png)
<!--ID: 1746599650047-->
END

---


START
FIT-Card

Lemma: rozdělení p-hodnoty

Back:

![](../../../Assets/Pasted%20image%2020250322075855.png)

Jinými slovy "když je všechno hezký", tak $p$-hodnota má uniformní rozdělení

Když je všechno hezký = pravděpodobnost 1. druhu je vždy $\alpha$, pak vím, že distribuční funkce p hodnoty je v bodě $u$ rovna $u$, tedy je to distribuční funkce Uniformního rozdělení
<!--ID: 1746599650053-->
END

---


START
FIT-Card

Jaké jsou 2 typy hypotéz (podle parametrů) a co znamenají?

Back:

- **Parametrické** - zkoumáme daný parametr
- **Neparametrické** - zkoumáme rozdělení obecně

![](../../../Assets/Pasted%20image%2020250322075915.png)
<!--ID: 1746599650061-->
END

---


START
FIT-Card

Jaké jsou 2 typy hypotéz podle množství rozdělení?

Back:

![](../../../Assets/Pasted%20image%2020250322075944.png)
<!--ID: 1746599650068-->
END

---


START
FIT-Card

Jak funguje **parametrický test hypotézy proti oboustranné alternativě**?

Back:

1. Určíme $H_0: \theta = \theta_0$ proti $H_A: \theta \neq \theta_0$
2. Sestavíme oboustranný interval $(L,U)$ pro dané $\alpha$
3. Rozhodneme:
	1. Zamítneme hypotézu $H_0$, jestliže $\theta_0 \not \in (L,U)$
	2. Nezamítneme $H_0$, jestliže $\theta_0 \in (L,U)$

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250322080101.png)
![](../../../Assets/Pasted%20image%2020250322080109.png)
![](../../../Assets/Pasted%20image%2020250322080141.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599650075-->
END

---


START
FIT-Card

Jak funguje **parametrický test hypotézy proti jednostranné alternativě**?

Back:

1. Určíme $H_0: \theta \leq \theta_0$ proti $H_A: \theta \gt \theta_0$
2. Sestavíme oboustranný interval $(L,+\infty)$ pro dané $\alpha$
3. Rozhodneme:
	1. Zamítneme hypotézu $H_0$, jestliže $\theta_0 \not \in (L,+\infty)$
	2. Nezamítneme $H_0$, jestliže $\theta_0 \in (L,+\infty)$

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250322080127.png)
![](../../../Assets/Pasted%20image%2020250322080133.png)
![](../../../Assets/Pasted%20image%2020250322080141.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599650082-->
END

---


START
FIT-Card

Jak funguje:
![](../../../Assets/Pasted%20image%2020250322080207.png)

Back:

![](../../../Assets/Pasted%20image%2020250322080213.png)
<!--ID: 1746599650089-->
END

---


START
FIT-Card

Proč není nutné hlídat, jestli má výběr normální rozdělení při testování pro střední hodnotu?

Back:

Protože podle centrální limitní věty to rozdělení se stejně bude v limitě chovat jako normální. 
<!--ID: 1746599650097-->
END

---


START
FIT-Card

Jak funguje:
![](../../../Assets/Pasted%20image%2020250322080223.png)

Back:

![](../../../Assets/Pasted%20image%2020250322080228.png)
<!--ID: 1746599650104-->
END

---


START
FIT-Card

Jak funguje:
![](../../../Assets/Pasted%20image%2020250322080237.png)

Back:

![](../../../Assets/Pasted%20image%2020250322080244.png)
<!--ID: 1746599650111-->
END

---


START
FIT-Card

Jak funguje
![](../../../Assets/Pasted%20image%2020250322080254.png)

Back:

![](../../../Assets/Pasted%20image%2020250322080300.png)
<!--ID: 1746599650118-->
END

---


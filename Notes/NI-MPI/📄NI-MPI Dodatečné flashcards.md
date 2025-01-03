---
created: 2024-12-30T14:13:31
title: "Dodatečné kartičky"
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI


START
FIT-Card

Jak se spočte řád grup:

- $GF(p^n)$ - multiplikativní
- $GF(p^n)$ - aditivní
- $Z_n^{+}$
- $Z_n^{\times}$

Back:

- $GF(p^n)$ - $n-1$
- $GF(p^n)$ - $n$
- $Z_n^{+}$ - $n$
- $Z_n^{\times}$ - $\varphi(n)$ - Eulerova funkce.

Tags: algebra3 core
<!--ID: 1735812207577-->
END

---


START
FIT-Card

Jak se spočte eulerova funkce?

Back:

![](../../Assets/Pasted%20image%2020241230141551.png)

Tags: algebra4 core
<!--ID: 1735812207579-->
END

---


START
FIT-Card

Jak se pozná, že má zlomek konečný desetinný rozvoj? Např. $\frac{3}{10}$

(tohle se hodí k jedné otázce z rozstřelové části)

Back:

Jmenovatel má ve faktorizaci pouze mocniny $2^n$.

<!-- ExampleStart -->
- $\frac{5}{8} \quad 8=2^3$ má konečný zápis
- $\frac{3}{10}$ nemá konečný zápis 
<!-- ExampleEnd -->

Tags: core
<!--ID: 1735812207582-->
END

---


START
FIT-Card

Jak se řeší příklad tohoto typu? (obecný postup)

![](../../Assets/Pasted%20image%2020250103141128.png)

Back:

![](../../Assets/Pasted%20image%2020250103142615.png)

**Postupujeme podle věty.**
1. **(0. derivace) + aktivní a neaktivní vazby** Ověříme, že bod leží uvnitř vazby nebo na její hranici
	- Tzn. dosadíme $(x,y)$ do podmínky a zjistíme, jeslti je to menší než nula, nula nebo větší než nula).
	- Podmínky $\lt 0$ budou uvnitř vazby a budou mít $\mu = 0$
	- Podmínky $= 0$ budou na hranici vazby
	- Body mimo vazbu automaticky vyřadíme.
2. **(1. derivace)** Ověříme, že gradient Lagrangeovy funkce bez $\mu$ je nulový:
	- Spočteme $L(x,y,\mu)$ a její gradient $\nabla L_{(x,y)}$
	- U bodů, co jsou uvnitř, platí, že $\mu = 0$, tzn. jen dosadím $x,y,\mu$ do gradientu a musí mi všechny složky vyjít nula.
	- U bodů, co jsou na hranici dosadím $x,y$ a budu řešit soustavu rovnic. Pokud najdu $\mu$ pro které to platí, je to ok. Pokud ne, končím.
3. **2. derivace** Spočteme Hessovu matici v daném bodě.
	- Pokud $\mu = 0$, vynásobím to vektorem $(a,b)$
	- Pokud $\mu \neq 0$, musím najít obecný vektor, co splňuje to, že je kolmý na gradient vazby. Tzn. spočtu $\nabla h$. Pak mi musí platit, že to je kolmý na to. Např. když vyjde $(1,2)$, bude to $(-2a, a)$.
	2. Potom zkoumáme jestli jsme schopný mít výsledek větší než nula, resp. menší než nula.
		- Pokud to najdu tak, aby to bylo $< 0$ i $>0$, pak to je **indefinitní**.
		- Pokud $< 0$, je to podezřelé z maxima
		- Pokud $>0$, je to podezřelé z minima
4. **směr od hranice**: Zkontrolujeme, že nám znaménko multiplikátoru $\mu$ sedí s tím jeslti to je maximum nebo minimum

Hint: V kroku (2. derivace) můžu zkusit na Hessovu matici uplatnit Sylvestrovo kritérium. Pak to je rovnou lok. minimum, resp. maximum.

Tags: analyza3 core
<!--ID: 1735922645583-->
END

---


START
FIT-Card

Jak se prakticky počítají lokální extrémy? (jednotlivé kroky)

Back:

1. Vyjádříme Lagrangeovu funkci $L(x^*, \lambda) = \dots$
2. Spočteme gradient $\nabla L(x^*,\lambda^*) = 0$, čímž dostaneme soustavu rovnic a najdeme jednotlivé složky $x$ a $\lambda$
3. Spočteme Hessovu matici
<!--ID: 1735922645587-->
END

---

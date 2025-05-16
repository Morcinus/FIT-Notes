---
created: 2025-03-29T13:22:18
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM cviceni06 status-toReview blue


START
FIT-Card

Jak funguje testování dobré shody?

Back:

1. Máme data $X_1, \dots, X_n$ a myslíme si, že to má nějaké rozdělení $F_0$
2. Rozdělníme to do binů
3. Napočítáme počty pozorování, co padnou do těch binů
4. Spočteme, jaká je pravděpodobnost, že to padne do $i$ tého binu
5. Pak použijeme chí kvadrát, ve kterém odečítáme ty naměřená data od toho teoretického rozdělení. To se nasčítá přes všechny biny
6. Pokud je to n dostatečně velký, tak výsledné rozdělení odpovídá rozdělení $\chi^2(k-1-p)$
7. Pokud se trefím mimo kritickou oblast, nezamítám. Pokud se tam trefím, tak zamítám.

Je vhodné, aby ty _teoretické_ četnosti v každém binu měly alespoň 5. Když by to bylo méně než 5, tak není zaručeno, že mi vyjde chí kvadrát

![](../../Assets/Pasted%20image%2020250329132648.png)
<!--ID: 1746599651205-->
END

---


START
FIT-Card

Jak funguje test v kontingenční tabulce?

Back:

1. Máme 2 rozdělení $X$ a $Y$ a chcem otestovat jestli jsou nezávislé, tedy $H_0$: jsou nezávislé, $H_A$ jsou závislé
2. Uděláme tabulku, najdeme marginály (to v posledním řádku, resp. sloupečku)
3. Sestavíme chí kvadrát podle vzorečku (podobně jako u dobré shody, jen to dělám u 2D rozdělení)

![](../../Assets/Pasted%20image%2020250329134349.png)
<!--ID: 1746599651216-->
END

---


START
FIT-Card

Co můžu udělat, když mám biny s málo prvky?

Back:

Můžu je spojit.
<!--ID: 1746599651223-->
END

---


START
FIT-Card

Jaké jsou 2 způsoby testování?

Back:

Varianta 1:
1. Uděláme "předprůzkum" - zkusíme test shody rozptylů
	1. Pokud nezamítneme, zkusíme T-Test
	2. Pokud zamítneme, zkusíme Welchův test

Varianta 2 - uděláme testovou baterii:
1. Uděláme Leven. test
	1. Pokud nezamítneme, uděláme T-Test
	2. Pokud zamítneme, použijeme Welchův test

Lepší je prý dělat tu první variantu
<!--ID: 1746599651235-->
END

---

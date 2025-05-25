---
created: 2025-03-22T08:04:07
title: "Testování hypotéz 2"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska10 status-toReview blue


START
FIT-Card

Jak funguje **Testování hypotéz pomocí testových statistik**?

Back:

![](../../Assets/Pasted%20image%2020250322113810.png)

Základní idea je, že naměřené výsledky dáme do funkce $T$, u které při platnosti nulové hypotézy známe její rozdělení. Tuto statistiku ($T$) nazýváme testovou statistikou.

Zadefinuju si kritickou sekci/oblast $S_\alpha$. Pokud se ta statistika trefí tam, tak to zamítneme.

Statistikou může být například průměr.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250322100849.png)
![](../../Assets/Pasted%20image%2020250322080446.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518364826-->
END

---



START
FIT-Card

Kde se na grafu nachází p hodnota?

(na tohle se prý můžou ptát u zkoušky)

Back:

Těsně na hranici zamítnutí a nezamítnutí
<!--ID: 1746518364832-->
END

---


START
FIT-Card

Jaký je rozdíl mezi normálním testováním a testování pomocí statistiky?

Back:

Je to v zásadě to samé, testování pomocí statistiky nám umožňuje to jednodušeji porovnávat, je to takové přehlednější
<!--ID: 1746518364834-->
END

---


START
FIT-Card


Jak funguje: **jednovýběrový t-test pro $\mu$ při známém rozptylu**?

Back:

![](../../Assets/Pasted%20image%2020250322113921.png)

Pozn. $\mu_0$ je ta střední hodnota, co bychom teoreticky očekávali.. Idk, to značení mi přijde trošku matoucí - Morčín

![](../../Assets/Pasted%20image%2020250322080717.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250322080818.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364840-->
END

---


START
FIT-Card

Jak funguje: **jednovýběrový t-test pro $\mu$ při neznámém rozptylu**?

Back:

![](../../Assets/Pasted%20image%2020250322113932.png)

Pozn. $\mu_0$ je ta střední hodnota, co bychom teoreticky očekávali.. Idk, to značení mi přijde trošku matoucí - Morčín

![](../../Assets/Pasted%20image%2020250322080731.png)
<!--ID: 1746518364842-->
END

---


START
FIT-Card

Jak funguje: **jednovýběrový t-test pro $\sigma^2$**?

Back:

![](../../Assets/Pasted%20image%2020250322080751.png)
<!--ID: 1747730582227-->
END

---


START
FIT-Card

Jak funguje: **párový $t$-test**?

Back:

Máme páry hodnot $(X_i, Y_i)$ (např. tlak pacienta před operaci a po ní). Toto dvojrozměrné rozdělení má střední hodnoty $(\mu_1, \mu_2)^T$. My testujeme, jestli jsou stejné.

Testujeme hypotézu: $H_0: \mu_1 = \mu_2$ oproti $H_A : \mu_1 \neq \mu_2$
1. Vytvoříme rozdělení $Z$, kde $Z_i = X_i - Y_i$
2. Spočteme odhad rozptylu $s^2_Z$ a výběrový průměr $\bar{Z}_n$
3. Provedeme test:

![](../../Assets/Pasted%20image%2020250520105256.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250322080839.png)
<!-- DetailInfoEnd -->

Pozn. párový t-test dává smysl používat u subjektů, které se nemění. Např. tlak **stejného** pacienta před operací a po operaci.

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250322080846.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364846-->
END

---


START
FIT-Card

Jak funguje: **dvouvýběrový t-test**? (obecně)

Back:

Chceme testovat jestli 2 výběry mají stejné střední hodnoty. Tady na rozdíl od párového t-testu máme nezávislý výběr (tzn. náhodně vybíráme) - pozor, může být ale stejný.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250322080904.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518364848-->
END

---


START
FIT-Card

Jak funguje: **dvouvýběrový t-test při stejných rozptylech**?

Back:
Pozn. ten vzoreček dole nemáme umět! (Prý ani u státnic :D)

![](../../Assets/Pasted%20image%2020250322114002.png)

Pozn. Když zkoumám rovnost, tak vždy $H_0$ je rovnost a $H_A$ je nerovnost.

![](../../Assets/Pasted%20image%2020250322080926.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250322081003.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364851-->
END

---


START
FIT-Card

Jak funguje: **dvouvýběrový t-test při různých rozptylech**?

Back:

Pozn. ten vzoreček dole nemáme umět! (Prý ani u státnic :D)

![](../../Assets/Pasted%20image%2020250322114023.png)

![](../../Assets/Pasted%20image%2020250322080940.png)
<!--ID: 1746518364854-->
END

---


START
FIT-Card

Kdy bych měl použít párový vs dvouvýběrový test?

Back:

Pokud mám dva výběry, které mají **stejnou délku** a ta data jsou párová, tedy jsou nad stejnými subjekty, je lepší použít **párový test**. Dvouvýběrový je obecně méně přesný.

Pokud by ta data ovšem nebyla párová, je třeba použít vždy ten dvouvýběrový. Jinak to je chyba.
<!--ID: 1746518364856-->
END

---


START
FIT-Card

Jak funguje $F$-test rovnosti rozptylů?

Tohle nemusíme umět!

Back:

![](../../Assets/Pasted%20image%2020250322081022.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250322081032.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364859-->
END

---

---
created: 2025-03-22T08:04:07
title: "Testování hypotéz 2"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska10 status-toReview


START
FIT-Card

Jak funguje Testování hypotéz pomocí testových statistik?

Back:

![](../../Assets/Pasted%20image%2020250322113810.png)

Základní idea je, že naměřené výsledky dáme do funkce $T$, u které při platnosti nulové hypotézy známe její rozdělení. Tuto statistiku ($T$) nazýváme testovou statistikou.

Zadefinuju si kritickou sekci/oblast $S_\alpha$. Pokud se ta statistika trefí tam, tak to zamítneme.

Statistikou může být například průměr.

![](../../Assets/Pasted%20image%2020250322100849.png)
![](../../Assets/Pasted%20image%2020250322080446.png)
<!--ID: 1746518364826-->
END

---


START
FIT-Card

Jak funguje Testování hypotéz pomocí testových statistik pro **Střední hodnotu normálního rozdělení**?

Back:

1. Sestavíme testovou statistiku $T$
2. Pak můžeme provést test

![](../../Assets/Pasted%20image%2020250322080544.png)
![](../../Assets/Pasted%20image%2020250322080555.png)
<!--ID: 1746518364829-->
END

---


START
FIT-Card

Kde se na grafu nachází p hodnota?

(na tohle se prý můžou ptát u zkoušky)

Back:

Těsně na hranici zamítnutí a nezamítnutí (je to plocha)
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

Jak funguje Testování hypotéz pomocí testových statistik pro **parametry normálního rozdělení**?

Back:

![](../../Assets/Pasted%20image%2020250322080623.png)
<!--ID: 1746518364837-->
END

---


START
FIT-Card

Jak funguje test o střední hodnotě na hladině významnosti $\alpha$ s **testovou statistikou a kritickými obory při známém rozptylu**?

Back:

![](../../Assets/Pasted%20image%2020250322113921.png)

![](../../Assets/Pasted%20image%2020250322080717.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250322080818.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364840-->
END

---


START
FIT-Card

Jak funguje test o střední hodnotě na hladině významnosti $\alpha$ s **testovou statistikou a kritickými obory při neznámém rozptylu**?

Back:

![](../../Assets/Pasted%20image%2020250322113932.png)

![](../../Assets/Pasted%20image%2020250322080731.png)
<!--ID: 1746518364842-->
END

---


START
FIT-Card

Jak funguje test o střední hodnotě na hladině významnosti $\alpha$ s **testovou statistikou a kritickými obory při neznámém rozptylu**?

Back:

![](../../Assets/Pasted%20image%2020250322080751.png)

END

---


START
FIT-Card

Jak funguje Párový $t$-test?

Back:

![](../../Assets/Pasted%20image%2020250322080839.png)

Pozn. párový t-test dává smysl používat u subjektů, které se nemění. Např. tlak **stejného** pacienta před operací a po operaci.

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250322080846.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364846-->
END

---


START
FIT-Card

Jak funguje Dvouvýběrový t-test?

Back:

Chceme testovat jestli 2 výběry mají stejné střední hodnoty. Tady na rozdíl od párového t-testu máme nezávislý výběr (tzn. náhodně vybíráme) - pozor, může být ale stejný.

![](../../Assets/Pasted%20image%2020250322080904.png)
<!--ID: 1746518364848-->
END

---


START
FIT-Card

Jak funguje Dvouvýběrový t-test pro **stejné rozptyly**?

Back:

![](../../Assets/Pasted%20image%2020250322114002.png)

Pozn. Když zkoumám rovnost, tak vždy $H_0$ je rovnost a $H_A$ je nerovnost.

![](../../Assets/Pasted%20image%2020250322080926.png)

Pozn. ten vzoreček dole nemáme umět! (Prý ani u státnic :D)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250322081003.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364851-->
END

---


START
FIT-Card

Jak funguje Dvouvýběrový t-test pro **různé rozptyly**?

Back:

![](../../Assets/Pasted%20image%2020250322114023.png)

![](../../Assets/Pasted%20image%2020250322080940.png)

Pozn. ten vzoreček dole nemáme umět! (Prý ani u státnic :D)
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

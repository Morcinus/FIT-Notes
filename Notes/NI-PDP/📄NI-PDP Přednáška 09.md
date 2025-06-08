---
created: 2025-04-19T12:14:18
title: "Kolektivní komunikační operace"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska09 status-toReview


START
FIT-Card

Jaké 4 skupiny jsou kolektivních komunikačních operací?

Back:

![](../../Assets/Pasted%20image%2020250419121501.png)

Scatter rozesílá všem individuálně. Broadcast vysílá všem
<!--ID: 1746599652334-->
END

---


START
FIT-Card

Jaké jsou typy komunikace všichni všem?

Back:

![](../../Assets/Pasted%20image%2020250419121523.png)
<!--ID: 1746599652342-->
END

---


START
FIT-Card

Jak se liší 1 portový a všeportový směrovač?

Back:

![](../../Assets/Pasted%20image%2020250419121845.png)

-  **1-portový** - v jeden okamžik můžu používat jeden vnější port
- **všeportový** - v jeden okamžik můžu používat všechny porty
<!--ID: 1746599652350-->
END

---


START
FIT-Card

Co je **šířka kanálu**?

Back:

$w$ = počet bytů přenositelných najednou mezi sousedními směrovači


![](../../Assets/Pasted%20image%2020250419121958.png)

Tags: otazka33
<!--ID: 1746599652357-->
END

---


START
FIT-Card

Co je **zpoždění kanálu**?

Back:

 $t_m$ = zpoždění mezi sousedními směrovači (s/B)

![](../../Assets/Pasted%20image%2020250419122016.png)

Tags: otazka33
<!--ID: 1746599652366-->
END

---


START
FIT-Card

Co je **startovní latence**?

Back:

$t_s$ = zpoždění pro přípravu komunikace


![](../../Assets/Pasted%20image%2020250419122030.png)

Tags: otazka33
<!--ID: 1746599652373-->
END

---


START
FIT-Card

Co je **směrovací latence**?

Back:

 $t_r$ = čas směrovacího rozhodnutí při budování trasy (s)

![](../../Assets/Pasted%20image%2020250419122044.png)

Tags: otazka33
<!--ID: 1746599652381-->
END

---


START
FIT-Card

Co je **přepínací latence**?

Back:

$t_w$ = čas přenosu v přepínači ze vstupu na výstup (s/B)

![](../../Assets/Pasted%20image%2020250419122059.png)

Tags: otazka33
<!--ID: 1746599652389-->
END

---


START
FIT-Card

Co je síťová latence?

Back:

čas od vstupu do zdrojového přepínače do výstupu z cílového přepínače

![](../../Assets/Pasted%20image%2020250419122112.png)

Tags: otazka33
<!--ID: 1746599652397-->
END

---


START
FIT-Card

Co je **komunikační latence**?

Back:

= síťová latence + startovní latence

![](../../Assets/Pasted%20image%2020250419122124.png)

Tags: otazka33
<!--ID: 1746599652404-->
END

---


START
FIT-Card

Jak se značí délka paketu a vzdálenost?

Back:

$\mu$ = délka paketu
$\delta$ = vzdálenost

Tags: otazka33
<!--ID: 1749408692093-->
END

---


START
FIT-Card

Jak funguje **Store-And-Forward** přepínání?

Back:

- pakety pevné délky rozdělné do flitů a směrované individuálně
- krok = **hop** = zkopírování paketu z výstupní fronty směrovače do vstupní fronty dalšího
- směrovací rozhodnutí se provede až **když je celý paket ve vstupní frontě**

Když mi něco přijde, tak si to celé uložím a potom se rozhodnu co dál

![](../../Assets/Pasted%20image%2020250419122156.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419122222.png)
<!-- DetailInfoEnd -->

Tags: otazka33
<!--ID: 1746599652412-->
END

---


START
FIT-Card

Jak se spočte latence v Store and Forward?

Back:

$t_{SF}(\mu,\delta) = t_s + \delta(t_r + (t_w + t_m) \mu) \approx t_s + \delta \mu t_m$

![](../../Assets/Pasted%20image%2020250419122331.png)

Tags: otazka33
<!--ID: 1746599652420-->
END

---


START
FIT-Card

Jak funguje červí přepínání (wormhole)?

Back:

- pakety rozdělené do flitů, směrovače mají fronty po flitech a nečekají na celý paket, “prořezávají” flity rovnou do dalšího směrovače, pokud je výstupní kanál volný
- když je výstupní kanál obsazen, hlavička nemůže dál a celý řetězec flitů zablokuje linky na dosud vybudované trase
- krok = současné použití linkově disjunktních cest (i přes víc směrovačů)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419122712.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250419122723.png)
<!-- ImageEnd -->

Tags: otazka33
<!--ID: 1746599652428-->
END

---


START
FIT-Card

Jaké jsou výhody (3) a nevýhody (1) Wormhole přepínání?

Back:


**Výhoda**: 
směrovače jsou **rychlejší** a **levnější**, **méně citlivé na vzdálenost**

**Nevýhoda**: 
**náchylnější k zablokování** - packet se mi může "roztáhnout po síti" a zahlcovat mi tak víc částí najednou.

Tags: otazka33
<!--ID: 1749408692095-->
END

---


START
FIT-Card

Jak se spočte **komunikační latence** u WH?

Back:

$t_{WH}(\mu, \delta) = t_s + \delta (t_r + t_w + t_m) + \mu \max(t_w, t_m)$

![](../../Assets/Pasted%20image%2020250419122749.png)

Tags: otazka33
<!--ID: 1746599652435-->
END

---


START
FIT-Card

Co je průřezové přepínání?

Back:

**průřezové přepínání** *(cut-through switching)* = červí, ale s frontami na celý paket

Tags: otazka33
<!--ID: 1749408692098-->
END

---


START
FIT-Card

Co znamená:
**OAB ve všeportových a 1-portových SF sítích**

Back:

- **OAB** = one-to-all broadcast (`MPI_Bcast`)
- **SF** = Save-and-Forward (viz otázka 33)
- **všeportový** = každý uzel může v jednom kroku komunikovat s libovolně mnoha sousedy
- **1-portový** = každý uzel může v jednom kroku komunikovat jen s jedním sousedem

Tags: otazka34
<!--ID: 1749409802213-->
END

---


START
FIT-Card

Co značí $\rho$ v OAB?

Back:

spodní mez počtu kroků

Tags: otazka34
<!--ID: 1749409802216-->
END

---


START
FIT-Card

Co značí $\tau$ v OAB?

Back:

spodní mez komunikační latence

Tags: otazka34
<!--ID: 1749409802219-->
END

---


START
FIT-Card

Co značí $\eta$ v OAB?

Back:

spodní mez práce

Tags: otazka34
<!--ID: 1749409802221-->
END

---


START
FIT-Card

Co značí $\gamma$ v OAB?

Back:

spodní mez součtu maxim délek paralelních cest přes všechny kroky algoritmu

Tags: otazka34
<!--ID: 1749409802224-->
END

---


START
FIT-Card

Co je $G, s, k$ v OAB?

Back:

$G$ = propojovací síť
$s$ = zdroj
$k$ = počet portů

Tags: otazka34
<!--ID: 1749409802226-->
END

---


START
FIT-Card

Jak se dá modelovat latence KKO?

Back:

idk, tohle projít a popsat vlastními slovy

![](../../Assets/Pasted%20image%2020250419123147.png)
![](../../Assets/Pasted%20image%2020250419123307.png)

Tags: otazka34
<!--ID: 1746599652451-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\eta^{SF}_{OAB,k}(G,s)$$

Back:

$$\eta^{SF}_{OAB,k}(G,s) = |V(G)| - 1$$

Tags: otazka34
<!--ID: 1749409802229-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\gamma^{SF}_{OAB,k}(G,s)$$

Back:

$$\gamma^{SF}_{OAB,k}(G,s) = \mathrm{diam}(G)$$

pokud není G uzlově symetrická:
místo $\mathrm{diam}(G)$ uvažujeme $\mathrm{exc}(s,G)​$

Tags: otazka34
<!--ID: 1749409802232-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$ 

\rho^{SF}_{OAB,k}(G,s)$$

Back:

$$\rho^{SF}_{OAB,k}(G,s) = \max(\mathrm{diam}(G), \log_{k+1}|V(G)|)$$

pokud není G uzlově symetrická:
místo $\mathrm{diam}(G)$ uvažujeme $\mathrm{exc}(s,G)​$

Tags: otazka34
<!--ID: 1749409802235-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\tau^{SF}_{OAB,k}(G,\mu,s)$$

Back:

$$\tau^{SF}_{OAB,k}(G,\mu,s) = \rho (t_s + \mu t_m) + \gamma (t_r + t_w + t_m)$$

Tags: otazka34
<!--ID: 1749409802237-->
END

---


START
FIT-Card

Jaké jsou algoritmy pro **OAB ve všeportových a 1-portových SF sítích**? Na co jsou optimální? (4)

Back:

- **záplavový algoritmus** → krokově optimální v jakékoliv všeportové SF síti
- **rekurzivní zdvojování** (RD) → krokově optimální v 1-portové EREW PRAM a úplném grafu
- **$n$-úrovňová binomiální kostra** (SBT) → optimální pro 1-portovou i všeportovou hyperkrychli
- **dimenzionálně uspořádaná kostra** (DOT) → optimální pro všeportovou mřížku

Tags: otazka34
<!--ID: 1749409802240-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$  

\eta^{WH}_{OAB,k}(G,s)$$

Back:

$$\eta^{WH}_{OAB,k}(G,s) = |V(G)| - 1$$

(totéž co u SF)

Tags: otazka35
<!--ID: 1749409802243-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\rho^{WH}_{OAB,k}(G,s)$$

Back:

$$\rho^{WH}_{OAB,k}(G,s) = \lceil \log_{k+1}|V(G)| \rceil = \lceil \log_2|V(G)| \rceil$$
pro 1-portovou síť

vzdálenost (a průměr grafu) nemá vliv na počet kroků

Tags: otazka35
<!--ID: 1749409802246-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\gamma^{WH}_{OAB,k}(G,s)$$

Back:

$$\gamma^{WH}_{OAB,k}(G,s) = \mathrm{exc}(s,G)$$

Tags: otazka35
<!--ID: 1749409802249-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\tau^{WH}_{OAB,k}(G,\mu,s)$$

Back:

$$\tau^{WH}_{OAB,k}(G,\mu,s) = \rho (t_s + \mu t_m) + \gamma (t_r + t_w + t_m)$$

Tags: otazka35
<!--ID: 1749409802252-->
END

---


START
FIT-Card

Jaké jsou algoritmy pro **OAB v 1-portových WH sítích**? Na co jsou optimální? (2)

Back:

- **simulování hyperkubického RD** → krokově optimální v 1-portových sítích
- ve vícerozměrných mřížkách totéž postupně po dimenzích

Tags: otazka35
<!--ID: 1749409802254-->
END

---


START
FIT-Card

Jaké jsou parametry modelů KKO? (5)

Back:

![](../../Assets/Pasted%20image%2020250419122930.png)
<!--ID: 1746599652443-->
END

---



START
FIT-Card

Lemma: Spodní meze SF OAB

Back:

![](../../Assets/Pasted%20image%2020250419123504.png)
<!--ID: 1746599652458-->
END

---


START
FIT-Card

Lemma: Jaký algoritmus lze použít na OAB?

Back:

![](../../Assets/Pasted%20image%2020250419123820.png)
<!--ID: 1746599652467-->
END

---


START
FIT-Card

Lemma: Jak těžký problém je zjistit, zda existuje optimální OAB v 1 portové SF síti?

Back:

![](../../Assets/Pasted%20image%2020250419124005.png)
<!--ID: 1746599652474-->
END

---


START
FIT-Card

Algoritmus: Jak funguje SF OAB Rekurzivní zdvojování RD?

Back:

![](../../Assets/Pasted%20image%2020250419124032.png)
![](../../Assets/Pasted%20image%2020250419124359.png)
<!--ID: 1746599652483-->
END

---


START
FIT-Card

Jak funguje SF OAB na všeportové/1 mortové mřížce?

Back:

![](../../Assets/Pasted%20image%2020250419124521.png)
![](../../Assets/Pasted%20image%2020250419124535.png)
<!--ID: 1746599652491-->
END

---


START
FIT-Card

Lemma: spodní meze Wormhole broadcastu OAB

Back:

![](../../Assets/Pasted%20image%2020250419124719.png)
<!--ID: 1746599652500-->
END

---


START
FIT-Card

Jak funguje RD v 1-portových toroidech a mřížkách?

Back:

![](../../Assets/Pasted%20image%2020250419125236.png)
![](../../Assets/Pasted%20image%2020250419125245.png)
<!--ID: 1746599652507-->
END

---


START
FIT-Card

Jak funguje WH OAB na všeportových mřížkách a toroidech?

Back:

![](../../Assets/Pasted%20image%2020250419125322.png)
![](../../Assets/Pasted%20image%2020250419125332.png)
![](../../Assets/Pasted%20image%2020250419125341.png)
<!--ID: 1746599652515-->
END

---


START
FIT-Card

Algoritmus: WH OAB zobecněná diagonála popis

Back:

![](../../Assets/Pasted%20image%2020250419125409.png)
<!--ID: 1746599652522-->
END

---


START
FIT-Card

Lemma: WH skupinové vysílání (Multicast)

Back:

![](../../Assets/Pasted%20image%2020250419125437.png)
<!--ID: 1746599652531-->
END

---


START
FIT-Card

Lemma: WH MC v 2-D mřížce

Back:

![](../../Assets/Pasted%20image%2020250419125454.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419125521.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599652538-->
END

---


START
FIT-Card

Algoritmus: WH MC v 2-D mřížce jako RDA ve virtuální 1-D mřížce

Back:

![](../../Assets/Pasted%20image%2020250419125545.png)
<!--ID: 1746599652546-->
END

---


START
FIT-Card

Jak funguje rozesílání 1-všem (OAS)

Back:

Rozesíláme z jednoho zdroje všem, ale jiný obsah

![](../../Assets/Pasted%20image%2020250419125607.png)
<!--ID: 1746599652552-->
END

---


START
FIT-Card

Lemma: Kombinující OAS - spodní meze

Back:

![](../../Assets/Pasted%20image%2020250419125624.png)
<!--ID: 1746599652559-->
END

---


START
FIT-Card

Jak vypadá kombinující WH OAS pro 1-portovou hyperkrychli?

Back:

![](../../Assets/Pasted%20image%2020250419125645.png)
<!--ID: 1746599652566-->
END

---


START
FIT-Card

Jak vypadá kombinující WH OAS pro mřížky a toroidy?

Back:

![](../../Assets/Pasted%20image%2020250419125704.png)
<!--ID: 1746599652573-->
END

---


START
FIT-Card

Lemma: Nekombinující AAB/AAG: Spodní meze

Back:

![](../../Assets/Pasted%20image%2020250419125754.png)
<!--ID: 1746599652579-->
END

---


START
FIT-Card

Jak souvisí AAB a AAG?

Back:

![](../../Assets/Pasted%20image%2020250419125818.png)
<!--ID: 1746599652586-->
END

---


START
FIT-Card

Definice: Časově-hranově-disjunktní stromy

Back:

![](../../Assets/Pasted%20image%2020250419125834.png)
<!--ID: 1746599652593-->
END

---


START
FIT-Card

Důsledek: Časově-hranově-disjunktních stromů

Back:

![](../../Assets/Pasted%20image%2020250419125906.png)
<!--ID: 1746599652599-->
END

---


START
FIT-Card

Lemma: Toroidy a hyperkrychle

Back:

![](../../Assets/Pasted%20image%2020250419125925.png)

<!-- ProofStart -->
![](../../Assets/Pasted%20image%2020250419125945.png)
![](../../Assets/Pasted%20image%2020250419125953.png)
<!-- ProofEnd -->
<!--ID: 1746599652605-->
END

---


START
FIT-Card

Jak vypadá SF nekombinující AAB: TADTy pro 2-D a 3-D toroidy?

Back:

![](../../Assets/Pasted%20image%2020250419130042.png)
<!--ID: 1746599652612-->
END

---


START
FIT-Card

Algoritmus: SF nekombinující AAB: Hranově disjunktní hamiltonovské kružnice

Back:

![](../../Assets/Pasted%20image%2020250419130111.png)
<!--ID: 1746599652618-->
END

---


START
FIT-Card

Lemma: Čemu je rovno $r_{AAB}$ a $t_{AAB}$

Back:

![](../../Assets/Pasted%20image%2020250419130144.png)
<!--ID: 1746599652625-->
END

---


START
FIT-Card

Co je AAS?

Back:

All-To-All Scatter

Rozesílání všichni všem - úplná výměna
![](../../Assets/Pasted%20image%2020250419130209.png)
<!--ID: 1746599652632-->
END

---


START
FIT-Card

Lemma: Spodní mez pro AAS odvozená od síťové propustnosti

Back:

![](../../Assets/Pasted%20image%2020250419130234.png)
<!--ID: 1746599652639-->
END

---


START
FIT-Card

Lemma: Spodní mez pro AAS odvozená od bisekční šířky

Back:

![](../../Assets/Pasted%20image%2020250419130257.png)
<!--ID: 1746599652646-->
END

---


START
FIT-Card

Jsou v MPI blokující nebo neblokující verze KKO?

Back:

![](../../Assets/Pasted%20image%2020250419130348.png)
<!--ID: 1746599652653-->
END

---


START
FIT-Card

Co je `MPI_Bcast` (OAB)?

Back:

![](../../Assets/Pasted%20image%2020250419130428.png)
<!--ID: 1746599652660-->
END

---


START
FIT-Card

Co je `MPI_Gather` (AOG)?

Back:

![](../../Assets/Pasted%20image%2020250419130446.png)
<!--ID: 1746599652668-->
END

---


START
FIT-Card

Co je `MPI_Gatherv` (AOG)

Back:

![](../../Assets/Pasted%20image%2020250419130503.png)
<!--ID: 1746599652676-->
END

---


START
FIT-Card

Co je `MPI_Allgather` (AAG/AAB)

Back:

![](../../Assets/Pasted%20image%2020250419130523.png)
<!--ID: 1746599652683-->
END

---


START
FIT-Card

Co je `MPI_Scatter`? (OAS)

Back:

![](../../Assets/Pasted%20image%2020250419130545.png)
<!--ID: 1746599652695-->
END

---


START
FIT-Card

Co je `MPI_Alltoall` (AAS)

Back:

![](../../Assets/Pasted%20image%2020250419130606.png)
<!--ID: 1746599652703-->
END

---

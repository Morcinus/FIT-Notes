---
created: 2025-04-19T12:14:18
title: "Kolektivní komunikační operace"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska09 status-toReview


START
FIT-Card

Jaké 4 skupiny jsou **kolektivních komunikačních operací**?

Back:

- **OAB** - one-to-all broadcast (`MPI_Bcast`)
- **MC** - multicast (`MPI_Bcast`)
- **OAS** - one to all scatter (`MPI_Scatter`)
- **AOG** - all-to-one gather (`MPI_Gather`)

Scatter rozesílá všem individuálně. Broadcast vysílá všem

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419121501.png)
<!-- DetailInfoEnd -->

Tags: otazka33
<!--ID: 1746599652334-->
END

---


START
FIT-Card

Jaké jsou typy komunikace **všichni všem**?

Back:

- **AAB** - all to all broadcast
	- **AAG** - all to all gather (`MPI_AllGather`)
- **AAS** - all to all scatter (`MPI_Alltoall`)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419121523.png)
<!-- DetailInfoEnd -->

Tags: otazka33
<!--ID: 1746599652342-->
END

---


START
FIT-Card

Jak se liší 1 portový a všeportový směrovač?

Back:

-  **1-portový** - v jeden okamžik můžu používat jeden vnější port
- **všeportový** - v jeden okamžik můžu používat všechny porty

![](../../Assets/Pasted%20image%2020250419121845.png)

Tags: otazka33
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

- Co se posílá?
- Jak funguje přepínání?
- Co je jeden krok?

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

Připomenutí:
- $t_s$ - startovní latence
- $\delta$ - délka cesty
- $t_r$ - směrovací latence
- $t_w$ - přepínací latence
- $t_m$ - latence kanálu
- $\mu$ - délka paketu

Tags: otazka33
<!--ID: 1746599652420-->
END

---


START
FIT-Card

Jak funguje červí přepínání (wormhole)?

- Co se posílá?
- Jak funguje přepínání?
- Co je jeden krok?

Back:

- pakety rozdělené do **flitů**, směrovače mají **fronty po flitech** a nečekají na celý paket, “prořezávají” flity rovnou do dalšího směrovače, pokud je výstupní kanál volný
- **když je výstupní kanál obsazen**, hlavička nemůže dál a celý řetězec flitů zablokuje linky na dosud vybudované trase
- **krok** = současné použití linkově disjunktních cest (i přes víc směrovačů)

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

Připomenutí:
- $t_s$ - startovní latence
- $\delta$ - délka cesty
- $t_r$ - směrovací latence
- $t_w$ - přepínací latence
- $t_m$ - latence kanálu
- $\mu$ - délka paketu

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

Co značí $\rho_{XXX}(G)$ a $r_{XXX}(G)$ v KKO?

Back:

**spodní mez** a **horní mez** počtu kroků

Počet **paralelních kroků**, co musím udělat, abych provedl např. broadcast.

Tags: otazka34
<!--ID: 1749409802216-->
END

---


START
FIT-Card

Co značí $\tau_{XXX}(G)$ a $t_{XXX}(G)$ v KKO?

Back:

**spodní mez** a **horní mez** komunikační latence

Jak dlouho trvá, než se provede broadcast.

![](../../Assets/Pasted%20image%2020250609145351.png)

Tags: otazka34
<!--ID: 1749409802219-->
END

---


START
FIT-Card

Co značí $\eta_{XXX}(G)$ a $h_{XXX}(G)$ v KKO?

Back:

**spodní mez** a **horní mez** komunikační práce

**komunikační práce** = celkový počet **hopů v SF**/**paketohran v WH**

Počet **všech kroků** (nejen paralelních), co musím udělat, abych provedl např. broadcast.

Tags: otazka34
<!--ID: 1749409802221-->
END

---


START
FIT-Card

Co značí $\gamma$ v KKO?

Back:

spodní mez součtu maxim délek paralelních cest přes všechny kroky algoritmu

**Je to součet délek paralelních cest.**

Podle Tvrdíka to je "jak dlouho bude trvat, než vybuduju tu cestu (než začnu posílat data)".

Tags: otazka34
<!--ID: 1749409802224-->
END

---


START
FIT-Card

Co je $G, s, k$ v KKO?

Back:

$G$ = propojovací síť
$s$ = zdroj
$k$ = počet portů přepínačů

Tags: otazka34
<!--ID: 1749409802226-->
END

---


START
FIT-Card

Co se v KKO operacích považuje za jeden krok u SF a WH?

(KKO = kolektivní komunikační operace - OAB, AAS, atd.)

Back:

- **SF sítě** - 1 krok je množina všech hopů mezi různými sousedy
- **WH sítě** - 1 krok = množina současně použitých navzájem disjunktních cest (assumujeme linky oběma směry)

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250419123147.png)
![](../../Assets/Pasted%20image%2020250419123307.png)

<!-- DetailInfoEnd -->

Tags: otazka34
<!--ID: 1746599652451-->
END

---


START
FIT-Card

Co musí umět efektivní algoritmy v KKO? (2)

Back:

1. Využívat maximální komunikační kapacitu v co nejvíce krocích algoritmu
2. Eliminovat **redundantní informace**
	1. **NO-DUP** - no duplication - žádný uzel nedostane stejnou informaci 2x
	2. **NO-HO** - no node hears its own message - žádný uzel nedostane informaci co odeslal

Tags: otazka34
<!--ID: 1749471095292-->
END

---


START
FIT-Card

Kdy je KKO algoritmus optimální?

Back:

Když jsou spodní a horní meze asymptoticky stejné

Tags: otazka34
<!--ID: 1749471095301-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\eta^{SF}_{OAB,k}(G,s)$$

Back:

$$\eta^{SF}_{OAB,k}(G,s) = |V(G)| - 1$$

Každý uzel musí aspoň jedním hopem ten paket přijmout
(kromě toho $1$, ze kterého posílám)

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

Je to jakoby čas broadcastu.

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

Teoreticky nejnižší čas (resp. počet kroků), za který se provede broadcast.

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

Jak funguje záplavový algoritmus?

Back:

Když packet přišel poprvé, rozpošli ho všem svým sousedům, jinak ho ignoruj.

Tags: otazka34
<!--ID: 1749478150775-->
END

---


START
FIT-Card

Jak funguje rekurzivní zdvojování?

Back:

1. Rozděl graf do dvou stejně velkých částí, v jedné je momentální směrovač, v druhé je jeho soused.
2. Sousedovi pošli packet.
3. Algoritmus spusť na sobě a sousedovi s danými podgrafy

Tags: otazka34
<!--ID: 1749478150778-->
END

---


START
FIT-Card

Jak funguje **$n$-úrovňová binomiální kostra**?

Back:

Něco jako BFS ale v hyperkrychli.

Tags: otazka34
<!--ID: 1749478150781-->
END

---


START
FIT-Card

Jak funguje algoritmus **dimenzionálně uspořádaná kostra**?

Back:

Máme mřížku $M$,vždy rekurzivně pošleme ve všech směrech.

Něco jako kdybych dělal BFS, ale v mřížce.

Tags: otazka34
<!--ID: 1749478150784-->
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

(totéž co SF)

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

Jaké jsou spodní meze WH OAB v toroidech?

Back:

Stejné jako pro WH OAB, ale pro $k=2n$

($n$ počet dimenzí)

Takže pro 2 dimenzionální toroid $K(z,z)$ budeme mít spodní meze pro $k=4$

Tags: otazka36
<!--ID: 1749556144569-->
END

---


START
FIT-Card

Algoritmus: **WH OAB pomocí zobecněné diagonály v toroidu $K$**

Back:

“rekurzivní dělení na pětiny”

**Fáze 1:** (”dostat jeden paket do každého řádku”)
- rozděl toroid do pěti stejných horizontálních pásů
- pošli paket ze zdrojového pásu do ostatních čtyř (hranově disjunktně XY směrováním)
- rekurzivně totéž v každém pásu, dokud paket není v každém řádku

**Fáze 2**:
- v každém řádku paralelně přepošli pakety na hlavní diagonálu (jeden krok)

**Fáze 3** (”z diagonály do zbývajících uzlů”)
- rozděl toroid do pěti stejných diagonálních pásů (jeden má uprostřed hlavní diagonálu)
- pošli paket z hlavní diagonály do diagonál ostatních čtyř pásů (hranově disjunktně)
- rekurzivně totéž v každém diagonálním pásu

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250419125332.png)
![](../../Assets/Pasted%20image%2020250419125341.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419125409.png)
<!-- DetailInfoEnd -->

Tags: otazka36
<!--ID: 1746599652522-->
END

---


START
FIT-Card

Jaká je kroková složitost algoritmu:
**WH OAB pomocí zobecněné diagonály v toroidu $K$**

Back:

$$2 \lceil \log_5 z \rceil + 1$$

Tags: otazka36
<!--ID: 1749556144581-->
END

---


START
FIT-Card

Kdy je algoritmus **WH OAB pomocí zobecněné diagonály v toroidu $K$** optimální?

Back:

Ve čtvercovém toroidu $K(z,z)$ když je $z$ mocnina pětky.

Tags: otazka36
<!--ID: 1749556144584-->
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

Lemma: WH skupinové vysílání (Multicast)

Back:

![](../../Assets/Pasted%20image%2020250419125437.png)
<!--ID: 1746599652531-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$  

\eta^{WH}_{MC,k}(G,s)$$

Back:

$$\eta^{WH}_{MC,k}(G,s) = |\mathcal{M}| - 1$$

(stejně jako u OAB, jen s $\mathcal{M}$)

Tags: otazka37
<!--ID: 1749557767159-->
END

---

START
FIT-Card

Čemu je rovna mez:
$$\rho^{WH}_{MC,k}(G,s)$$

Back:

$$\rho^{WH}_{MC,k}(G,s) = \lceil \log_{k+1}|\mathcal{M}| \rceil$$

(stejně jako u OAB, jen s $\mathcal{M}$)

Tags: otazka37
<!--ID: 1749557767172-->
END

---

START
FIT-Card

Čemu je rovna mez:
$$\gamma^{WH}_{MC,k}(G,s)$$

Back:

$$\gamma^{WH}_{MC,k}(G,s) = \mathrm{exc}(s,G, \mathcal{M})$$

(stejně jako u OAB, jen s $\mathcal{M}$)

Tags: otazka37
<!--ID: 1749557767174-->
END

---

START
FIT-Card

Čemu je rovna mez:
$$\tau^{WH}_{MC,k}(G,\mu,s)$$

Back:

$$\tau^{WH}_{MC,k}(G,\mu,s) = \rho (t_s + \mu t_m) + \gamma (t_r + t_w + t_m)$$

(stejně jako u OAB)

Tags: otazka37
<!--ID: 1749557767177-->
END

---


START
FIT-Card

Algoritmus: **RD** v 1-portové 2D mřížce $M$?

Back:

1. uzly v $\mathcal M$ dimenzionálně uspořádej (= seřaď lexikograficky podle souřadnic zleva)
2. rozděl tuto posloupnost na levou a pravou půlku
3. je-li zdroj v levé půlce, pošle paket prvnímu v pravé půlce, jinak poslednímu v levé
    - vlastně si představíme, že máme jen 1D mřížku a v ní seřazené jen cílové uzly
4. rekurzivně totéž v obou polovinách

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250610141517.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250610141529.png)
<!-- DetailInfoEnd -->

Tags: otazka37
<!--ID: 1749557767180-->
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

Co znamená, že je OAS **kombinující**?

Back:

**kombinující** = zprávy jdoucí stejným směrem se slučují a v cílech zase rozdělují

Tags: otazka38
<!--ID: 1749561465649-->
END

---


START
FIT-Card

Co přesně znamená OAS? (aka jak se posílají zprávy)

Back:

OAS = one-to-all scatter

Posílám **všem stejně velké pakety**, ale každému **jiný obsah**

Tags: otazka38
<!--ID: 1749561465664-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\gamma_{OAS,k}(G,s)$$

Back:

$$\gamma_{OAS,k}(G,s) = \mathrm{exc}(s,G)​$$

Tags: otazka38
<!--ID: 1749561465666-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$ 

\rho_{OAS,k}(G,s)$$

Back:

Stejně jako v $OAB$
$$ 

\rho^{WH}_{OAS,k}(G,s)= \lceil \log_{k+1}|V(G)| \rceil$$

Tags: otazka38
<!--ID: 1749561465669-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\tau_{OAS,k}(G,\mu,s)$$
Back:

$\tau_{OAS,k}(G,\mu,s) = \rho t_s + \gamma (t_r + t_w + t_m) + \lceil \frac{|V(G)|-1}{k} \rceil \mu t_m$

Tzn. jako OAB, jen se roztrhne a trochu změní ta první závorka

Tags: otazka38
<!--ID: 1749561465672-->
END

---


START
FIT-Card

Jaké algoritmy se používají pro **kombinující OAS**? Kde jsou optimální? (2)

- pro SF
- pro WH

Back:

- Pro SF: **binomiální kostra** (SBT) - optimální v 1-portové hyperkrychli
- Pro WH: **rekurzivní zdvojování/znásobování** - optimální v mřížkách a toroidech

Tags: otazka38
<!--ID: 1749561465675-->
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

Co je nekombinující model posílání zpráv?

Back:

Všechny zprávy se posílají samostatně

Tags: otazka39
<!--ID: 1749565106105-->
END

---


START
FIT-Card

Co jsou AAB a AAG?

Back:

- AAG = all-to-all-gather = pro naše účely totéž co AAB (`MPI_AllGather`)
- AAB = all-to-all broadcast (každý uzel má jinou zprávu, kterou posílá všem)

Tags: otazka39
<!--ID: 1749565106108-->
END

---


START
FIT-Card

Jaké cesty předpokládáme u AAB a AAG?

Back:

plně duplexní

Tags: otazka39
<!--ID: 1749565106110-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\rho^{SF}_{AAB,k}(G)$$

Back:

$$\rho^{SF}_{AAB,k}(G) = \left \lceil \frac{|V(G)|-1}{k} \right \rceil$$

Tags: otazka39
<!--ID: 1749565106113-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\tau^{SF}_{AAB,k}(G,\mu)$$

Back:

$$\tau^{SF}_{AAB,k}(G,\mu) = \rho (t_s + \mu t_m)$$

Tags: otazka39
<!--ID: 1749565106116-->
END

---


START
FIT-Card

U AAB/AAG, na co se dá rozdělit komunikace?

Back:

Na OAB stromy $B(u)$, kde je kořen $u$ a kostra $G$

Tags: otazka39
<!--ID: 1749565106119-->
END

---


START
FIT-Card

Jaké algoritmy se dají používat pro AAB/AAG

Back:

- **časově-hranově disjunktní stromy** (TADT)
- **hranově disjunktní hamiltonovské kružnice**
<!--ID: 1749565106121-->
END

---


START
FIT-Card

Kdy jsou dva OAB stromy vzájemně **časově-hranově disjunktní** (TADT)?

Back:

dva OAB stromy jsou vzájemně časově hranově disjunktní (TADT) $\iff$ každém kroku jsou množiny aktivních hran (tj. hran na úrovni i od kořene) disjunktní

Tags: otazka39
<!--ID: 1749565106124-->
END

---


START
FIT-Card

Jaký je vztah TADT a koliznosti?

Back:

Pokud jsou všechny OAB stromy TADT, pak je přenos bezkolizní

Tags: otazka39
<!--ID: 1749565106127-->
END

---


START
FIT-Card

Jaký je vztah TADT a izomorfnosti?

Back:

všechny TADT jsou izomorfní

Tags: otazka39
<!--ID: 1749565106130-->
END

---


START
FIT-Card

Jak vypadá TADT ve 2D toroidu $K(z,z)$ s lichým?

Back:

4 rotace 2D hada pokrývajícího čtvrtinu roviny

![](../../Assets/Pasted%20image%2020250610160526.png)

Tags: otazka39
<!--ID: 1749565106132-->
END

---


START
FIT-Card

Jak vypadá TADT ve 3D toroidu $K(z,z)$ s lichým?

Back:

6 rotací 3D hada vyplňujícího pyramidu

![](../../Assets/Pasted%20image%2020250610160609.png)

Tags: otazka39
<!--ID: 1749565106135-->
END

---


START
FIT-Card

Kdy jsou TADT optimální?

Back:

krokově optimální, pokud jsou na všech úrovních (kromě poslední) použity hrany všech směrů

Tags: otazka39
<!--ID: 1749565106138-->
END

---


START
FIT-Card

Kdy se dá využít algoritmus **hranově disjunktní hamiltonovské kružnice** pro AAB/AAG?

Back:

pro **2D toroidy**, ale není krokově optimální

(pro 2D mřížky není vůbec použitelné)

Tags: otazka39
<!--ID: 1749565106140-->
END

---


START
FIT-Card

Jak funguje algoritmus:
**hranově disjunktní hamiltonovské kružnice**

Back:

1. najdeme dvě hranově disjunktní hamiltonovské kružnice $H_1, H_2$
2. každý uzel $i$ růzpůlí svůj paket $p_i$ na stejně velké $p_{i,1}, p_{i,2}$
3. pošle $p_{i,1}$ v obou směrech po $H_1$ a $p_{i,2}$ v obou směrech po $H_2$
4. v každém dalším kroku každý uzel přijme a uloží 4 půlpakety, přepošle je dál a zároveň si postupně skládá odpovídající půlky zpátky

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250610161118.png)
<!-- DetailInfoEnd -->

Tags: otazka39
<!--ID: 1749565106143-->
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

Co je rozesílání $AAS$?

Back:

AAS = all-to-all scatter (úplná výměna, každý uzel má různé zprávy pro každého příjemce)

Tags: otazka40
<!--ID: 1749565106146-->
END

---

START
FIT-Card

Jaké cesty předpokládáme u AAS?

Back:

plně duplexní všeportové sítě

Tags: otazka40
<!--ID: 1749565106149-->
END

---


START
FIT-Card

Čemu je rovna mez:
$$\tau_{AAS}(G,\mu)$$

**odvozená od síťové propustnosti**

Back:

$$\tau_{AAS}(G,\mu) = \frac{1}{2 |E(G)|} \left( \sum_{u \neq v} \mathrm{dist}_G(u,v) \right) \mu t_m$$

Dovysvětlení:
- $2 |E(G)|$ je maximum hran použitelných v jednom kroku (dvojka díky plné duplexnosti)
- $\sum$ v závorce je minimální počet potřebných hran pro přenos mezi každou dvojicí uzlů

Tags: otazka40
<!--ID: 1749565106151-->
END

---

START
FIT-Card

Čemu je rovna mez:
$$\tau_{AAS}(G,\mu)$$

**odvozená od bisekční šířky**

Back:

$$\tau_{AAS}(G,\mu) = \frac{\lceil N/2 \rceil \lfloor N/2 \rfloor \mu t_m}{\mathrm{bw}_e(G)}$$

Dovysvětlení
komunikace mezi polovinami grafu musí v nejhorším případě projít přes $\mathrm{bw}_e(G)$ hran

Tags: otazka40
<!--ID: 1749565106154-->
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

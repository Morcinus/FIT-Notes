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

END

---


START
FIT-Card

Jaké jsou typy komunikace všichni všem?

Back:

![](../../Assets/Pasted%20image%2020250419121523.png)

END

---


START
FIT-Card

Jak se liší 1 portový a všeportový směrovač?

Back:

![](../../Assets/Pasted%20image%2020250419121845.png)

-  **1-portový** - v jeden okamžik můžu používat jeden vnější port
- **všeportový** - v jeden okamžik můžu používat všechny porty

END

---


START
FIT-Card

Co je **šířka kanálu**?

Back:

![](../../Assets/Pasted%20image%2020250419121958.png)

END

---


START
FIT-Card

Co je **zpoždění kanálu**?

Back:

![](../../Assets/Pasted%20image%2020250419122016.png)

END

---


START
FIT-Card

Co je **startovní latence**?

Back:

![](../../Assets/Pasted%20image%2020250419122030.png)

END

---


START
FIT-Card

Co je **směrovací latence**?

Back:

![](../../Assets/Pasted%20image%2020250419122044.png)

END

---


START
FIT-Card

Co je **přepínací latence**?

Back:

![](../../Assets/Pasted%20image%2020250419122059.png)

END

---


START
FIT-Card

Co je síťová latence?

Back:

![](../../Assets/Pasted%20image%2020250419122112.png)

END

---


START
FIT-Card

Co je **komunikační latence**?

Back:

![](../../Assets/Pasted%20image%2020250419122124.png)

END

---


START
FIT-Card

Jak funguje Store-And-Forward přepínání?

Back:

![](../../Assets/Pasted%20image%2020250419122156.png)

Když mi něco přijde, tak si to celé uložím a potom se rozhodnu co dál

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419122222.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak se spočte latence v SF?

Back:

![](../../Assets/Pasted%20image%2020250419122331.png)

END

---


START
FIT-Card

Jak funguje červí přepínání (wormhole)?

Back:

Pakety se rozdělí do "flitů". Když přijde hlavičkový flip, tak se nečeká na celý packet, ale hned se forwarduje dál. 

Výhoda: směrovače jsou rychlejší a levnější. 

Nevýhoda: packet se mi může "roztáhnout po síti" a zahlcovat mi tak víc částí najednou.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419122712.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250419122723.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Jak se spočte komunikační latence u WH?

Back:

![](../../Assets/Pasted%20image%2020250419122749.png)

END

---


START
FIT-Card

Jaké jsou parametry modelů KKO? (5)

Back:

![](../../Assets/Pasted%20image%2020250419122930.png)

END

---


START
FIT-Card

Jak se dá modelovat latence KKO?

Back:

![](../../Assets/Pasted%20image%2020250419123147.png)
![](../../Assets/Pasted%20image%2020250419123307.png)
END

---


START
FIT-Card

Lemma: Spodní meze SF OAB

Back:

![](../../Assets/Pasted%20image%2020250419123504.png)

END

---


START
FIT-Card

Lemma: Jaký algoritmus lze použít na OAB?

Back:

![](../../Assets/Pasted%20image%2020250419123820.png)

END

---


START
FIT-Card

Lemma: Jak těžký problém je zjistit, zda existuje optimální OAB v 1 portové SF síti?

Back:

![](../../Assets/Pasted%20image%2020250419124005.png)

END

---


START
FIT-Card

Algoritmus: Jak funguje SF OAB Rekurzivní zdvojování RD?

Back:

![](../../Assets/Pasted%20image%2020250419124032.png)
![](../../Assets/Pasted%20image%2020250419124359.png)

END

---


START
FIT-Card

Jak funguje SF OAB na všeportové/1 mortové mřížce?

Back:

![](../../Assets/Pasted%20image%2020250419124521.png)
![](../../Assets/Pasted%20image%2020250419124535.png)

END

---


START
FIT-Card

Lemma: spodní meze Wormhole broadcastu OAB

Back:

![](../../Assets/Pasted%20image%2020250419124719.png)

END

---


START
FIT-Card

Jak funguje RD v 1-portových toroidech a mřížkách?

Back:

![](../../Assets/Pasted%20image%2020250419125236.png)
![](../../Assets/Pasted%20image%2020250419125245.png)

END

---


START
FIT-Card

Jak funguje WH OAB na všeportových mřížkách a toroidech?

Back:

![](../../Assets/Pasted%20image%2020250419125322.png)
![](../../Assets/Pasted%20image%2020250419125332.png)
![](../../Assets/Pasted%20image%2020250419125341.png)

END

---


START
FIT-Card

Algoritmus: WH OAB zobecněná diagonála popis

Back:

![](../../Assets/Pasted%20image%2020250419125409.png)

END

---


START
FIT-Card

Lemma: WH skupinové vysílání (Multicast)

Back:

![](../../Assets/Pasted%20image%2020250419125437.png)

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


END

---


START
FIT-Card

Algoritmus: WH MC v 2-D mřížce jako RDA ve virtuální 1-D mřížce

Back:

![](../../Assets/Pasted%20image%2020250419125545.png)

END

---


START
FIT-Card

Jak funguje rozesílání 1-všem (OAS)

Back:

Rozesíláme z jednoho zdroje všem, ale jiný obsah

![](../../Assets/Pasted%20image%2020250419125607.png)

END

---


START
FIT-Card

Lemma: Kombinující OAS - spodní meze

Back:

![](../../Assets/Pasted%20image%2020250419125624.png)

END

---


START
FIT-Card

Jak vypadá kombinující WH OAS pro 1-portovou hyperkrychli?

Back:

![](../../Assets/Pasted%20image%2020250419125645.png)

END

---


START
FIT-Card

Jak vypadá kombinující WH OAS pro mřížky a toroidy?

Back:

![](../../Assets/Pasted%20image%2020250419125704.png)

END

---


START
FIT-Card

Lemma: Nekombinující AAB/AAG: Spodní meze

Back:

![](../../Assets/Pasted%20image%2020250419125754.png)

END

---


START
FIT-Card

Jak souvisí AAB a AAG?

Back:

![](../../Assets/Pasted%20image%2020250419125818.png)

END

---


START
FIT-Card

Definice: Časově-hranově-disjunktní stromy

Back:

![](../../Assets/Pasted%20image%2020250419125834.png)

END

---


START
FIT-Card

Důsledek: Časově-hranově-disjunktních stromů

Back:

![](../../Assets/Pasted%20image%2020250419125906.png)

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

END

---


START
FIT-Card

Jak vypadá SF nekombinující AAB: TADTy pro 2-D a 3-D toroidy?

Back:

![](../../Assets/Pasted%20image%2020250419130042.png)

END

---


START
FIT-Card

Algoritmus: SF nekombinující AAB: Hranově disjunktní hamiltonovské kružnice

Back:

![](../../Assets/Pasted%20image%2020250419130111.png)

END

---


START
FIT-Card

Lemma: Čemu je rovno $r_{AAB}$ a $t_{AAB}$

Back:

![](../../Assets/Pasted%20image%2020250419130144.png)

END

---


START
FIT-Card

Co je AAS?

Back:

All-To-All Scatter

Rozesílání všichni všem - úplná výměna
![](../../Assets/Pasted%20image%2020250419130209.png)

END

---


START
FIT-Card

Lemma: Spodní mez pro AAS odvozená od síťové propustnosti

Back:

![](../../Assets/Pasted%20image%2020250419130234.png)

END

---


START
FIT-Card

Lemma: Spodní mez pro AAS odvozená od bisekční šířky

Back:

![](../../Assets/Pasted%20image%2020250419130257.png)

END

---


START
FIT-Card

Jsou v MPI blokující nebo neblokující verze KKO?

Back:

![](../../Assets/Pasted%20image%2020250419130348.png)

END

---


START
FIT-Card

Co je `MPI_Bcast` (OAB)?

Back:

![](../../Assets/Pasted%20image%2020250419130428.png)

END

---


START
FIT-Card

Co je `MPI_Gather` (AOG)?

Back:

![](../../Assets/Pasted%20image%2020250419130446.png)

END

---


START
FIT-Card

Co je `MPI_Gatherv` (AOG)

Back:

![](../../Assets/Pasted%20image%2020250419130503.png)

END

---


START
FIT-Card

Co je `MPI_Allgather` (AAG/AAB)

Back:

![](../../Assets/Pasted%20image%2020250419130523.png)

END

---


START
FIT-Card

Co je `MPI_Scatter`? (OAS)

Back:

![](../../Assets/Pasted%20image%2020250419130545.png)

END

---


START
FIT-Card

Co je `MPI_Alltoall` (AAS)

Back:

![](../../Assets/Pasted%20image%2020250419130606.png)

END

---

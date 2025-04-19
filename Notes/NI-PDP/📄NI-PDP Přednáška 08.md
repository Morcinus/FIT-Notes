---
created: 2025-04-19T11:14:56
title: "Problém vnoření"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska08 status-toReview


START
FIT-Card

Definice: vnoření grafu do jiného

Back:

![](../../Assets/Pasted%20image%2020250419111531.png)

END

---


START
FIT-Card

Jaké metriky se dají měřit u kvality vnoření?

Back:

- **maximální zatížení hostitelského uzlu** - kolik procesů běží na jednom uzlu
- **expanze vnoření** - kolik počítačů využijeme k výpočtu našeho programu
- **maximální dilatace zdrojových hran v hostitelské síti** - když 2 procesy komunikují v MPI, jak daleko budou - když jsou daleko, tak to zpomaluje
- **maximální zahlcení hostitelské hrany** - když je více komunikace na delší vzdálenost, tak se může stát že na jedné fyzické lince probíhá více komunikací a zahltí se to tím (stejně jako se třeba zahltí internetová síť)

END

---


START
FIT-Card

Jak se spočte **maximální zatížení hostitelského uzlu**?

Back:

![](../../Assets/Pasted%20image%2020250419111947.png)

END

---


START
FIT-Card

Jak se spočte **expanze vnoření**?

Back:

![](../../Assets/Pasted%20image%2020250419112003.png)

END

---


START
FIT-Card

Jak se spočte **maximální dilatace zdrojových hran v hostitelské síti**?

Back:

![](../../Assets/Pasted%20image%2020250419112029.png)

END

---


START
FIT-Card

Jak se spočte **maximální zahlcení hostitelské hrany**?

Back:

![](../../Assets/Pasted%20image%2020250419112046.png)

END

---


START
FIT-Card

Definice: **kvaziizometrické grafy**

Back:

![](../../Assets/Pasted%20image%2020250419112119.png)

END

---


START
FIT-Card

Definice: graf $H$ simuluje $G$ se zpomalením $h$

Back:

![](../../Assets/Pasted%20image%2020250419112142.png)

END

---


START
FIT-Card

Definice: $G$ a $H$ jsou výpočetně ekvivalentní sítě

Back:

![](../../Assets/Pasted%20image%2020250419112203.png)

END

---


START
FIT-Card

Lemma: **ekvivalence kvaziizometrických sítí**

Back:

![](../../Assets/Pasted%20image%2020250419112228.png)

END

---


START
FIT-Card

Věta: **Průměrový argument**

Back:

![](../../Assets/Pasted%20image%2020250419112245.png)

END

---


START
FIT-Card

Co vyplývá z průměrového argumentu?

Back:

![](../../Assets/Pasted%20image%2020250419112846.png)

END

---


START
FIT-Card

Věta: M. Sekanina

Back:

![](../../Assets/Pasted%20image%2020250419112416.png)

Pan Sekanina byl z Brna

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419113119.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak funguje MPI s problémem vnoření?

Back:

![](../../Assets/Pasted%20image%2020250419113432.png)
![](../../Assets/Pasted%20image%2020250419113421.png)
![](../../Assets/Pasted%20image%2020250419113803.png)
![](../../Assets/Pasted%20image%2020250419113811.png)


END

---


START
FIT-Card

Jaké jsou 3 typy virtuálních topologií, které podporuje MPI? (3)

Back:

- kartézská
- graf
- distribuovaný graf

END

---


START
FIT-Card

Jak funguje **kartézská** virtuální topologie v MPI?

Back:

![](../../Assets/Pasted%20image%2020250419113531.png)

END

---


START
FIT-Card

Jak funguje **grafová** topologie v MPI?

Back:

![](../../Assets/Pasted%20image%2020250419113541.png)

END

---


START
FIT-Card

Jak funguje **distribuovaný graf** - virtuální topologie MPI?

Back:

![](../../Assets/Pasted%20image%2020250419113553.png)

Je to stejný jako graf, jen u grafu všichni musí ukládat celou reprezentaci, v distribuovaném grafu si uzly pamatují jen svoje okolí v grafu.

END

---


START
FIT-Card

Věta: jak souvisí mřížky a toroidy?

Back:

![](../../Assets/Pasted%20image%2020250419113841.png)

Neboli mřížky a toroidy jsou kvaziizometrické

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419113901.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Důsledek: dolní mez dilatace vnoření hyperkrychle do mřížek toroidu

Back:

![](../../Assets/Pasted%20image%2020250419113958.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419114009.png)
![](../../Assets/Pasted%20image%2020250419114023.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak funguje Mortonova křivka?

Back:

![](../../Assets/Pasted%20image%2020250419114055.png)

Tzn. "vnořuju svisle - vodorovně na střídačku"

END

---


START
FIT-Card

Lemma: Co platí po Mortonovy křivky?

Back:

![](../../Assets/Pasted%20image%2020250419114118.png)

END

---


START
FIT-Card

Důsledek: Dilatace vnoření hyperkrychle do mřížek pomocí Mortonovy křivky

Back:

![](../../Assets/Pasted%20image%2020250419114137.png)

END

---


START
FIT-Card

Lemma: Dilatace vnoření pomocí Svobodovy mapy 

Back:

![](../../Assets/Pasted%20image%2020250419114211.png)

END

---


START
FIT-Card

Věta: kvaziizometričnost motýlků

Back:

![](../../Assets/Pasted%20image%2020250419114304.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419114313.png)
![](../../Assets/Pasted%20image%2020250419114327.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Důkaz věty:
![](../../Assets/Pasted%20image%2020250419114304.png)

Back:

![](../../Assets/Pasted%20image%2020250419114313.png)
![](../../Assets/Pasted%20image%2020250419114327.png)

Pozor, u prvního obrázku tam jsou ty modrý sloupce stejný - tzn. ta cesta se vrátí zpět do modré části

![](../../Assets/Pasted%20image%2020250419114427.png)
![](../../Assets/Pasted%20image%2020250419114438.png)
![](../../Assets/Pasted%20image%2020250419114509.png)
![](../../Assets/Pasted%20image%2020250419114522.png)
![](../../Assets/Pasted%20image%2020250419114533.png)
![](../../Assets/Pasted%20image%2020250419114554.png)

END

---


START
FIT-Card

Lemma: kolik automorfismů má $wBF_n$

Back:

![](../../Assets/Pasted%20image%2020250419121326.png)

END

---


START
FIT-Card

Lemma: kolik automorfismů má $oBF_n$

Back:

![](../../Assets/Pasted%20image%2020250419121344.png)

END

---

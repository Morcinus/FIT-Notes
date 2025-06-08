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

Tags: otazka31
<!--ID: 1746599652712-->
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

Tags: otazka31
<!--ID: 1746599652719-->
END

---


START
FIT-Card

Jak se spočte **maximální zatížení hostitelského uzlu**?

Back:

![](../../Assets/Pasted%20image%2020250419111947.png)

Tags: otazka31
<!--ID: 1746599652726-->
END

---


START
FIT-Card

Jak se spočte **expanze vnoření**?

Back:

![](../../Assets/Pasted%20image%2020250419112003.png)

Tags: otazka31
<!--ID: 1746599652733-->
END

---


START
FIT-Card

Jak se spočte **maximální dilatace zdrojových hran v hostitelské síti**?

Back:

![](../../Assets/Pasted%20image%2020250419112029.png)

Tags: otazka31
<!--ID: 1746599652741-->
END

---


START
FIT-Card

Jak se spočte **maximální zahlcení hostitelské hrany**?

Back:

![](../../Assets/Pasted%20image%2020250419112046.png)

Tags: otazka31
<!--ID: 1746599652747-->
END

---


START
FIT-Card

Co jsou obecně **kvaziizometrické grafy/topologie**?

Back:

kvaziizometrické topologie = topologie, které zachovávají podobné vlastnosti vzdáleností a konektivity jako původní topologie (např. hyperkrychle), ale jsou jednodušší na realizaci, levnější, nebo lépe škálovatelné

Tags: otazka31
<!--ID: 1749407476839-->
END

---


START
FIT-Card

Definice: **kvaziizometrické grafy**

Back:

![](../../Assets/Pasted%20image%2020250419112119.png)

Tags: otazka31
<!--ID: 1746599652755-->
END

---


START
FIT-Card

Definice: graf $H$ simuluje $G$ se zpomalením $h$

Back:

![](../../Assets/Pasted%20image%2020250419112142.png)

Tags: otazka31
<!--ID: 1746599652763-->
END

---


START
FIT-Card

Definice: $G$ a $H$ jsou výpočetně ekvivalentní sítě

Back:

![](../../Assets/Pasted%20image%2020250419112203.png)

Tags: otazka31
<!--ID: 1746599652771-->
END

---


START
FIT-Card

Lemma: **ekvivalence kvaziizometrických sítí**

Back:

![](../../Assets/Pasted%20image%2020250419112228.png)

Tags: otazka31
<!--ID: 1746599652779-->
END

---


START
FIT-Card

Věta: **Průměrový argument**

Back:

![](../../Assets/Pasted%20image%2020250419112245.png)

Tags: otazka31
<!--ID: 1746599652786-->
END

---


START
FIT-Card

Co vyplývá z průměrového argumentu?

Back:

![](../../Assets/Pasted%20image%2020250419112846.png)
<!--ID: 1746599652794-->
END

---


START
FIT-Card

Jaké topologie jsou navzájem kvaziizometrické?

Back:

- **mřížky-toroidy**
- **obyčejný-uzavřený motýlek**

Tags: otazka31
<!--ID: 1749407476852-->
END

---


START
FIT-Card

Proč jsou mřížky a toroidy kvaziizometrické?

Back:

![](../../Assets/Pasted%20image%2020250608202943.png)

Tags: otazka31
<!--ID: 1749407476855-->
END

---


START
FIT-Card

Proč je otevřený motýlek a kružnicový motýlek kvaziizometrický?

Back:

![](../../Assets/Pasted%20image%2020250608203036.png)
(2) je fuj konstruktivní důkaz přes několik stránek, mluví ale o tom, že musíme invertovat v jiném pořadí než 0,1,2,3… např. 1,3,2,0 při n=4, aby dilatace byla nejvýše 3. Díky vrcholové a řádkové symetričnosti wBF může

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250419114313.png)
![](../../Assets/Pasted%20image%2020250419114327.png)
<!-- DetailInfoEnd -->

Tags: otazka31
<!--ID: 1749407476858-->
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
<!--ID: 1746599652802-->
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
<!--ID: 1746599652809-->
END

---


START
FIT-Card

Jaké jsou 3 typy virtuálních topologií, které podporuje MPI? (3)

Back:

- kartézská
- graf
- distribuovaný graf
<!--ID: 1746599652817-->
END

---


START
FIT-Card

Jak funguje **kartézská** virtuální topologie v MPI?

Back:

![](../../Assets/Pasted%20image%2020250419113531.png)
<!--ID: 1746599652824-->
END

---


START
FIT-Card

Jak funguje **grafová** topologie v MPI?

Back:

![](../../Assets/Pasted%20image%2020250419113541.png)
<!--ID: 1746599652832-->
END

---


START
FIT-Card

Jak funguje **distribuovaný graf** - virtuální topologie MPI?

Back:

![](../../Assets/Pasted%20image%2020250419113553.png)

Je to stejný jako graf, jen u grafu všichni musí ukládat celou reprezentaci, v distribuovaném grafu si uzly pamatují jen svoje okolí v grafu.
<!--ID: 1746599652840-->
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
<!--ID: 1746599652847-->
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

Tags: otazka32
<!--ID: 1746599652855-->
END

---


START
FIT-Card

Jak funguje Mortonova křivka?

Back:

jednotlivé hyperkubické souřadnice se mapují rekurzivně střídavě ve směru osy x a y

![](../../Assets/Pasted%20image%2020250419114055.png)

Tzn. "vnořuju svisle - vodorovně na střídačku"

Tags: otazka32
<!--ID: 1746599652861-->
END

---


START
FIT-Card

Lemma: Co platí po Mortonovy křivky?

Back:

![](../../Assets/Pasted%20image%2020250419114118.png)

Tags: otazka32
<!--ID: 1746599652869-->
END

---


START
FIT-Card

Důsledek: Dilatace vnoření hyperkrychle do mřížek pomocí Mortonovy křivky

Back:

![](../../Assets/Pasted%20image%2020250419114137.png)

Tags: otazka32
<!--ID: 1746599652877-->
END

---


START
FIT-Card

Lemma: Dilatace vnoření pomocí Svobodovy mapy 

Back:

![](../../Assets/Pasted%20image%2020250419114211.png)

lexikografické mapování po řádcích a po sloupcích = Svobodova mapa: 
![](../../Assets/Pasted%20image%2020250608203426.png)

Tags: otazka32
<!--ID: 1746599652884-->
END

---


START
FIT-Card

Kdy se hodí vznořit hyperkrychli do  nízkodimenzionálních mřížek?

Back:

když chceme na počítači s mřížkovou topologií provádět hyperkubický algoritmus

Tags: otazka32
<!--ID: 1749408692075-->
END

---


START
FIT-Card

Jak lze vnořit hyperkrychly do nízkodimenzionálních mřížek?

Back:

- konstruujeme prostou a na funkci (vnoření), ale chceme nějakou jednoduchou
    - lexikografické mapování po řádcích a po sloupcích = Svobodova mapa: $-φ(b2k−1b2k−2 . . . b0) = [b2k−1 . . . bk, bk−1 . . . b0]$.
    - Mortonovy křivky = jednotlivé hyperkubické souřadnice se mapují rekurzivně střídavě ve směru osy x a y

Tags: otazka32
<!--ID: 1749408692090-->
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
<!--ID: 1746599652891-->
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
<!--ID: 1746599652897-->
END

---


START
FIT-Card

Lemma: kolik automorfismů má $wBF_n$

Back:

![](../../Assets/Pasted%20image%2020250419121326.png)

Tags: otazka31
<!--ID: 1746599652904-->
END

---


START
FIT-Card

Lemma: kolik automorfismů má $oBF_n$

Back:

![](../../Assets/Pasted%20image%2020250419121344.png)

Tags: otazka31
<!--ID: 1746599652912-->
END

---

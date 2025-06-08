---
created: 2025-04-02T09:06:40
title: "Propojovací sítě paralelních počítačů"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska07 status-toReview


START
FIT-Card

Definice: **Množina uzlů a hran grafu** $G$

Back:

![](../../Assets/Pasted%20image%2020250607215959.png)

**Množina uzlů a hran** – Graf se skládá z **uzlů (vrcholů)** a **hran (spojení mezi uzly)**. Značí se např. $G = (V, E)$, kde $V$ je množina uzlů a $E$ množina hran.

Tags: otazka24
<!--ID: 1749326556188-->
END

---

START
FIT-Card

Definice: Velikost grafu

Back:

![](../../Assets/Pasted%20image%2020250607220004.png)

Počet vrcholů v grafu

Tags: otazka24
<!--ID: 1749326556193-->
END

---

START
FIT-Card

Definice: **Sousední uzly**

Back:

![](../../Assets/Pasted%20image%2020250607220010.png)

Dva uzly jsou **sousední**, pokud jsou spojeny hranou.

Tags: otazka24
<!--ID: 1749326556195-->
END

---

START
FIT-Card

Definice: **Stupeň uzlu** v grafu $G$

Back:

![](../../Assets/Pasted%20image%2020250607220017.png)

Počet hran, které vedou do daného uzlu.

Tags: otazka24
<!--ID: 1749326556198-->
END

---

START
FIT-Card

Definice: **Množina stupňů grafu** $G$

Back:

![](../../Assets/Pasted%20image%2020250607220023.png)

Množina všech stupňů všech uzlů v grafu.

Tags: otazka24
<!--ID: 1749326556201-->
END

---

START
FIT-Card

Definice: Maximální stupeň grafu

Back:

![](../../Assets/Pasted%20image%2020250607220033.png)

Nejvyšší stupeň, jaký má některý uzel v grafu.

Tags: otazka24
<!--ID: 1749326556203-->
END

---

START
FIT-Card

Definice: Minimální stupeň grafu

Back:

![](../../Assets/Pasted%20image%2020250607220038.png)

Nejnižší stupeň, jaký má některý uzel v grafu.

Tags: otazka24
<!--ID: 1749326556206-->
END

---

START
FIT-Card

Definice: $k$-regulární graf

Back:

![](../../Assets/Pasted%20image%2020250607220044.png)

Graf, kde každý uzel má **přesně stupeň $k$**.

Tags: otazka24
<!--ID: 1749326556209-->
END


START
FIT-Card

Definice: **Kartézský součin grafů**

Back:

![](../../Assets/Pasted%20image%2020250402090950.png)

$V(G)$ - vrcholy jsou uspořádané dvojice starých vrcholů
$E(G)$ - hrana bude existovat pokud:
- Pokud existuje hrana mezi $x_1$​ a $x_2$​ v $G_1$​ **a $y$ je stejné** (na obrázku vpravo první svislá modrá hrana)
- Pokud existuje hrana mezi $y_1$​ a $y_2$​ v $G_2$​ **a $x$ je stejné** (na obrázku vpravo dolní vodorovná červená hrana)

![](../../Assets/Pasted%20image%2020250608120111.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020250402090958.png)
<!-- ExplanationEnd -->

Tags: otazka24
<!--ID: 1746518365091-->
END

---


START
FIT-Card

Věta: **komutativita a asociativita kartézského součinu**

Back:

![](../../Assets/Pasted%20image%2020250402091031.png)

Připomenutí: isomorfismus říká, že jsou grafy, co se týče struktury, stejné, jen mají třeba jinak pojmenované vrcholy a jsou třeba jinak otočené na papíře.

Tags: otazka24
<!--ID: 1746518365094-->
END

---


START
FIT-Card

Definice: **Uzlově symetrický graf**

Back:

![](../../Assets/Pasted%20image%2020250402091053.png)

Připomenutí: automorfismus je to, že můžeme proházet vrcholy, ale tak, že ty co byly spojené zůstanou spojené. Např. u čtverce můžeme rotovat vrcholy nebo je přehazovat podle os. 

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402091101.png)
<!-- DetailInfoEnd -->

Tags: otazka24
<!--ID: 1746518365097-->
END

---


START
FIT-Card

Věta: **kartézský součin symetrických grafů**

Back:

![](../../Assets/Pasted%20image%2020250402091138.png)

Tags: otazka24
<!--ID: 1746518365099-->
END

---


START
FIT-Card

Lemma: Pro každý uzlově symetrický graf $G$ platí

Back:

![](../../Assets/Pasted%20image%2020250402091259.png)

$\text{diam}(G)$ je průměr grafu
$r(G)$ je poloměr grafu

Tags: otazka24
<!--ID: 1746518365104-->
END

---


START
FIT-Card

Definice: **Topologie $G_n$**

Back:

![](../../Assets/Pasted%20image%2020250402090819.png)

Tags: otazka25
<!--ID: 1746518365078-->
END

---


START
FIT-Card

Definice: **hierarhicky rekurzivní topologie**

Back:

![](../../Assets/Pasted%20image%2020250402090833.png)

Tags: otazka25
<!--ID: 1746518365081-->
END

---


START
FIT-Card

Definice: **Inkrementálně škálovatelná topologie**

Back:

![](../../Assets/Pasted%20image%2020250402090853.png)

Je inkrementálně škálovatelná pokud je definována pro všechny velikosti grafu.

Tags: otazka25
<!--ID: 1746518365083-->
END

---


START
FIT-Card

Definice: **Částečně škálovatelná topologie**

Back:

![](../../Assets/Pasted%20image%2020250402090908.png)

Tags: otazka25
<!--ID: 1746518365086-->
END

---


START
FIT-Card

Definice: **Řídká a hustá topologie**

Back:

![](../../Assets/Pasted%20image%2020250402090925.png)

Tags: otazka25
<!--ID: 1746518365089-->
END

---


START
FIT-Card

Definice: **Délka cesty**

Back:

![](../../Assets/Pasted%20image%2020250607215309.png)

Počet **hran** na cestě mezi dvěma uzly.

Tags: otazka25
<!--ID: 1746518365102-->

END

---

START
FIT-Card

Definice: Vzdálenost uzlů

Back:

![](../../Assets/Pasted%20image%2020250607215315.png)

Délka nejkratší cesty

Tags: otazka25
<!--ID: 1749326556211-->
END

---

START
FIT-Card

Definice: Průměrná vzdálenost

Back:

![](../../Assets/Pasted%20image%2020250607215322.png)

Tags: otazka25
<!--ID: 1749326556214-->
END

---

START
FIT-Card

Definice: **Excentricita uzlu**

Back:

![](../../Assets/Pasted%20image%2020250607215329.png)

Největší vzdálenost od daného uzlu ke kterémukoli jinému uzlu v grafu. Říká, jak „daleko“ může být nejvzdálenější uzel od daného uzlu.

Tags: otazka25
<!--ID: 1749326556217-->
END

---

START
FIT-Card

Definice: **Průměr grafu $G$**

Back:

![](../../Assets/Pasted%20image%2020250607215333.png)

Největší excentricita mezi všemi uzly v grafu. Tedy maximální vzdálenost mezi jakoukoli dvojicí uzlů.

Tags: otazka25
<!--ID: 1749326556220-->
END

---

START
FIT-Card

Definice: **Poloměr grafu $G$**

Back:

![](../../Assets/Pasted%20image%2020250607215340.png)

Nejmenší excentricita mezi všemi uzly.

Tags: otazka25
<!--ID: 1749326556222-->
END

---

START
FIT-Card

Definice: **Uzlově disjunktní cesty**

Back:

![](../../Assets/Pasted%20image%2020250607215346.png)

**Uzlově disjunktní cesty** – Dvě (nebo více) cest, které se **nesdílejí žádný vnitřní uzel** (mohou začínat a končit ve stejných bodech, ale mezilehlé uzly jsou odlišné).

Tags: otazka25
<!--ID: 1749326556225-->
END

---

START
FIT-Card

Definice: **Hranově disjunktní cesty**

Back:

![](../../Assets/Pasted%20image%2020250607215351.png)

**Hranově disjunktní cesty** – Dvě (nebo více) cest, které **nemají žádnou společnou hranu**. Uzly mohou sdílet, ale hrany nikoli.

Tags: otazka25
<!--ID: 1749326556227-->
END



START
FIT-Card

Definice: **Uzlový (hranový) řez**

Back:

![](../../Assets/Pasted%20image%2020250402091322.png)

Tags: otazka25
<!--ID: 1746518365107-->
END

---


START
FIT-Card

Definice: **Uzlová (hranová) souvislost**

Back:

![](../../Assets/Pasted%20image%2020250402091334.png)

Tags: otazka25
<!--ID: 1746518365110-->
END

---


START
FIT-Card

Lemma: Co platí pro $\lambda(G)$

Back:

![](../../Assets/Pasted%20image%2020250402091406.png)

Tags: otazka25
<!--ID: 1746518365113-->
END

---


START
FIT-Card

Definice: Uzlově (hranově) $k$-souvislý graf

Back:

![](../../Assets/Pasted%20image%2020250402091424.png)

Tags: otazka25
<!--ID: 1746518365116-->
END

---


START
FIT-Card

Definice: Optimální souvislost grafu (kdy je graf optimálně souvislý)

Back:

![](../../Assets/Pasted%20image%2020250402091524.png)

Tags: otazka25
<!--ID: 1746518365119-->
END

---


START
FIT-Card

Definice: bisekční šířka

Back:

![](../../Assets/Pasted%20image%2020250402091542.png)

Tags: otazka25
<!--ID: 1746518365122-->
END

---


START
FIT-Card

Definice: bipartitní graf

Back:

![](../../Assets/Pasted%20image%2020250402091556.png)

Tags: otazka25
<!--ID: 1746518365124-->
END

---


START
FIT-Card

Definice: vyvážený bipartitní graf

Back:

![](../../Assets/Pasted%20image%2020250402091618.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250402091628.png)
<!-- ExampleEnd -->

Tags: otazka25
<!--ID: 1746518365127-->
END

---


START
FIT-Card

Jaké jsou **2 hlavní požadavky** na PSPP?

PSPP = Propojovací sítě paralelních počítačů

Back:

Vpodstatě hlavní otázka je jak moc budem mít propojený graf.

2 hlavní, ale protichůdné požadavky:
- **Konstantní stupeň uzlu** $\Rightarrow$ řídká topologie (levné směrovače)
- **Malý průměr a malá průměrná vzdálenost** $\Rightarrow$ snižuje dobu komunikace

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402091747.png)
<!-- DetailInfoEnd -->

Tags: otazka25
<!--ID: 1746518365130-->
END

---


START
FIT-Card

Věta: Spodní mez průměru

Back:

![](../../Assets/Pasted%20image%2020250402091726.png)
<!--ID: 1746518365132-->
END

---


START
FIT-Card

Jaké jsou další požadavky na PSPP? (5)

Back:

- Uzlová symetrie a hierarchická rekurzivita
- Vysoká souvislost
- Bisekční šířka
- Vnořitelnost jiných a do jiných topologií
- Podpora pro směrování a kolektivní komunikační operace

Tags: otazka25
<!--ID: 1746518365135-->
END

---


START
FIT-Card

Proč požadujeme v PSPP: **Uzlová symetrie a hierarchická rekurzivita**? (3)

Back:

- **Uzlová symetrie** $\Rightarrow$ **snazší návrh paralelních a komunikačních algoritmů** (nezávisí kde výpočet začne)
- **Hierarchická rekurzivita** $\Rightarrow$ **částečná škálovatelnost**
- **Induktivní návrh** - můžeme navrhnout něco pro malou topologii a bude to fungovat i pro velkou (algoritmy apod.)

![](../../Assets/Pasted%20image%2020250402091928.png)

Tags: otazka25
<!--ID: 1746518365138-->
END

---

START
FIT-Card

Proč požadujeme v PSPP: **Vysokou souvislost**? (2)

Back:

- při **výpadku nebo přetížení** uzlu/hrany můžeme použít **jinou cestu**
- **velké zprávy** můžeme posílat paralelně po **různých linkách**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402091940.png)
<!-- DetailInfoEnd -->

Tags: otazka25
<!--ID: 1746518365141-->
END

---

START
FIT-Card

Proč požadujeme v PSPP: velká/nízká **Bisekční šířka**?

Back:

- **velká bisekční šířka** $\Rightarrow$ každé 2 půlky jsou hodně propojené $\Rightarrow$ je mezi nimi velký bandwidth - hodí se pro **binární rozděl a panuj algoritmy**
- **nízká bisekční šířka** $\Rightarrow$ levnější a jednodušší - u velké šířky máme hodně spojů mezi částmi sítě (drahé a náročné na údržbu u superpočítačů)

Horní mez typicky bývá místo $\frac{N}{2}$ třeba $\frac{N}{\log N}$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402091946.png)
<!-- DetailInfoEnd -->

Tags: otazka25
<!--ID: 1746518365143-->
END

---

START
FIT-Card

Co je požadavek na PSPP: **Vnořitelnost jiných a do jiných topologií** (2)

Back:

- Pro různé algoritmy potřebujeme různý graf propojení procesů
- Dále chceme, aby třeba topologie mohla simulovat jiné topologie (např. v úplném grafu můžeme simulovat dobře různé topologie)

![](../../Assets/Pasted%20image%2020250402091958.png)

Tags: otazka25
<!--ID: 1746518365146-->
END

---

START
FIT-Card

Co je požadavek na PSPP: Podpora pro směrování a kolektivní komunikační operace (3)

Back:

- Permutační směrování
- Komunikace jeden všem
- Komunikace všichni všem

(bude detailněji v dalších kartičkách)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402092012.png)
<!-- DetailInfoEnd -->

Tags: otazka25
<!--ID: 1746518365148-->
END

---


START
FIT-Card

Jaké jsou základní přímé PSPP? (4)

Back:

![](../../Assets/Pasted%20image%2020250402092036.png)

Tags: otazka26
<!--ID: 1746518365151-->
END

---


START
FIT-Card

Jak vypadá **binární hyperkrychle** dimenze $n, Q_n$?

Back:

- $Q_n$ = $n$-rozměrná **binární hyperkrychle**
- $V(Q_n) = \{0,1\}^n$
- hrany vedou mezi dvojicemi vrcholů, které se liší v jednom bitu, hran je

![](../../Assets/Pasted%20image%2020250402092105.png)

Tags: otazka26
<!--ID: 1746518365154-->
END

---


START
FIT-Card

Kolik vrcholů má binární hyperkrychle $Q_n$?

Back:

$$2^n$$

Tags: otazka26
<!--ID: 1749327902331-->
END

---

START
FIT-Card

Kolik hran má binární hyperkrychle $Q_n$?

Back:

$$n2^{n-1}$$

<!-- ExplanationStart -->
Binární hyperkrychle $Q_n$ má **$n \cdot 2^{n-1}$ hran** – každá z $2^n$ vrcholů má stupeň $n$, ale každá hrana je započítaná dvakrát (od obou konců).
<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1749327902343-->
END

---

START
FIT-Card

Jaký stupeň má každý vrchol hyperkrychle $Q_n$?

Back:

$n$

<!-- ExplanationStart -->
Každý uzel v hyperkrychli $Q_n$ má **stupeň $n$**, protože se liší v jednom bitu od $n$ sousedních uzlů.
<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1749327902345-->
END

---

START
FIT-Card

Jaký je průměr grafu hyperkrychle $Q_n$?

Back:

$$n$$

<!-- ExplanationStart -->
**Průměr grafu** hyperkrychle $Q_n$ je **$n$** – největší možná Hammingova vzdálenost mezi dvěma uzly.
<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1749327902348-->
END

---

START
FIT-Card

Jaká je **bisekční šířka** hyperkrychle $Q_n$?

Back:

$$2^{n-1} = N/2$$

Tzn. **nejvyšší možná**

<!-- ExplanationStart -->
**Bisekční šířka** hyperkrychle $Q_n$ je **$2^{n-1}$** – počet hran, které je třeba přerušit k rozdělení grafu na dvě stejně velké části.
<!-- ExplanationEnd -->

Tags: otazka26
<!--ID: 1749327902351-->
END

---

START
FIT-Card

Jaké speciální vlastnosti má $Q_n$? (3)

Back:

- vzdálenost uzlů odpovídá **Hammingovy vzdálenosti**
- je to **Hamiltonovský graf**
- je **ortogonální** (lze zkonstruovat kartézským součinem)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402092229.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250402092405.png)
<!-- ExampleEnd -->
Tags: otazka26
<!--ID: 1746518365157-->
END

---

START
FIT-Card

Je $Q_n$ **regulární**?

Back:

$Q_n$ je $n$-regulární

Tags: otazka26
<!--ID: 1749327902353-->
END

---


START
FIT-Card

Doplň:

Hyperkrychle $Q_n$ má $\dots$ stupeň a škáluje se po $\dots$

Back:

Má **logaritmický stupeň** a škáluje se po **mocninách dvojky**

Tzn.:
- Stupeň vrcholu = $\log_2(|V|)$
- Navýšením $n$ zvýšíme počet uzlů podle $2^n$

Tags: otazka26
<!--ID: 1749391765445-->
END

---


START
FIT-Card

Je $Q_n$ **uzlově symetrická**?

Back:

Ano.

Tags: otazka26
<!--ID: 1749327902356-->
END

---


START
FIT-Card

Kolik automorfismů má $Q_n$? Kolik jich je pro jeden vrchol $u$?

Back:

$2^n \cdot n!$ automorfismů

z toho $n!$ pro pevné $f(u) = v$

Tags: otazka26
<!--ID: 1749391765450-->
END

---


START
FIT-Card

Je hyperkrychle $Q_n$ **řídká/hustá**?

Back:

Je **hustá**.

Tags: otazka26
<!--ID: 1749327902359-->
END

---

START
FIT-Card

Je hyperkrychle $Q_n$ **hierarchicky rekurzivní**?

Back:

**Ano**

Tags: otazka26
<!--ID: 1749327902361-->
END

---

START
FIT-Card

Je hyperkrychle $Q_n$ ortogonální?

(aka lze ji konstruovat kartézským součinem)

Back:

**Ano je**

Tags: otazka26
<!--ID: 1749327902364-->
END

---

START
FIT-Card

Je hyperkrychle $Q_n$ uzlově/hranově/optimálně souvislá?

Back:

Je **optimálně souvislá**.

Tags: otazka26
<!--ID: 1749327902370-->
END

---

START
FIT-Card

Je hyperkrychle $Q_n$ bipartitní/vyvážená bipartitní?

Back:

Je **vyvážená bipartitní**.

Tags: otazka26
<!--ID: 1749327902375-->
END

---


START
FIT-Card

Jaká je průměrná vzdálenost v $Q_n$ mezi dvěma uzly?

Back:

$$\lceil n/2 \rceil$$

Tags: otazka26
<!--ID: 1749391765452-->
END

---


START
FIT-Card

Když máme dva uzly vzdálenosti $k$ v $Q_n$, kolik mezi nimi existuje různých nejkratších cest?

Back:

$$k!$$

Mezi dvěma uzly ve vzdálenosti $k$ existuje $k!$ různých nejkratších cest

Tags: otazka26
<!--ID: 1749391765455-->
END

---


START
FIT-Card

Co je **Hammingova vzdálenost** v hyperkrychli $Q_n$?

Back:

Hammingova vzdálenost = nejnižší počet bitů, co musím v binárním řetězci změnit, abych se dostal na jiný řetězec

V hyperkrychli každý vrchol reprezentuje jeden řetězec. Hammingova vzdálenost je tedy nejmenší cesta mezi 2 vrcholy

Tags: otazka26
<!--ID: 1749391765458-->
END

---


START
FIT-Card

Je hyperkrychle $Q_n$ **Hamiltonovská**? Co to **znamená**?

Back:

Ano, hyperkrychle $Q_n$ je **Hamiltonovská**.

Tzn. 
- obsahuje **Hamiltonovskou cestu** - cesta, kde je každý vrchol navštíven právě jednou
- obsahuje **Hamiltonovskou kružnici** - uzavřená hamiltonovská cesta

Tags: otazka26
<!--ID: 1749327902377-->
END

---


START
FIT-Card

Používá se hyperkrychle $Q_n$ v praxi často?

Back:

Hyperkrychle má **logaritmický stupeň**, je **škálovatelná po mocninách dvojky** (pro $n$), ale kvůli těmto vlastnostem se používá **poměrně vzácně** – hodí se jen v určitých aplikacích.

Tags: otazka26
<!--ID: 1749327902380-->
END

---


START
FIT-Card

Jaké směrování používá $Q_n$ hyperkrychle? Které kolektivní operace jsou podporované?

Back:

- **e-cube směrování** - když posíláme zprávu z vrcholu $a$ do $b$, tak jdeme zprava a vzdy změníme jeden bit, který se liší od řetězce $b$ (tím že zprávu pošleme na příslušného souseda) 
- existují optimální algoritmy pro **všechny kolektivní operace**

Tags: otazka26
<!--ID: 1749327902382-->
END

---



START
FIT-Card

Věta: Jaká topologie je $Q_n$? Kolik automorfizmů v ní je?

Back:

![](../../Assets/Pasted%20image%2020250402092311.png)

Tags: otazka26
<!--ID: 1746518365160-->
END

---


START
FIT-Card

Věta: Pro vrcholy $u,v$, kolik je automorfismů?

Back:

![](../../Assets/Pasted%20image%2020250402092336.png)

Tags: otazka26
<!--ID: 1746518365162-->
END

---


START
FIT-Card

Lemma: Počet uzlů ve vzdálenosti od zadaného uzlu

Back:

![](../../Assets/Pasted%20image%2020250402092427.png)

Tags: otazka26
<!--ID: 1746518365165-->
END

---


START
FIT-Card

Lemma: Kolik existuje různých nejkratších cest mezi dvěma uzly $u$ a $v$

Back:

![](../../Assets/Pasted%20image%2020250402092453.png)

Tags: otazka26
<!--ID: 1746518365167-->
END

---


START
FIT-Card

Lemma: Kolik existuje uzlově disjunktních cest $P(u,v)$?

Back:

![](../../Assets/Pasted%20image%2020250402092524.png)

Tags: otazka26
<!--ID: 1746518365170-->
END

---


START
FIT-Card

Jaký je hlavní nedostatek hyperkrychlí?

Back:

**logaritmický stupeň a škálovatelnost pouze po mocninách dvojky** = abych rozšířil topologii, musím zdvojnásobit počet uzlů, což je overkill ve většině případů

Proto se moc nepoužívají a když už tak pouze nízkodimenzionální.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402092601.png)
<!-- DetailInfoEnd -->

Tags: otazka26
<!--ID: 1746518365172-->
END

---


START
FIT-Card

Definice: **Mřížka** $M(z_1, \dots, z_n)$

- čemu odpovídají vrcholy
- čemu odpovídají hrany
- speciální případ

Back:

- $M(z_1, \dots, z_n)$ = $n$-rozměrná **mřížka** rozměrů $z_1, \dots, z_n$
- vrcholy jsou dány souřadnicemi $(a_1, \dots, a_n)$, kde $0 \le a_i \le z_i - 1$, vrcholů je $\prod z_i$
- hrany vedou mezi dvojicemi vrcholů, které se liší v jedné souřadnici právě o jedna
- speciální případ, pokud se všechna $z_i$ rovnají: $M^n(z)$ = **$z$-ární $n$-krychle**

![](../../Assets/Pasted%20image%2020250402092638.png)

Tags: otazka27
<!--ID: 1746518365175-->
END

---

START
FIT-Card

Kolik má hran mřížka $M(z_1, \dots, z_n)$?

Back:

$$\sum_i^n (z_i-1)\prod_{j=1, j \neq i}^n z_j$$

Tags: otazka27
<!--ID: 1749396114405-->
END

---

START
FIT-Card

Jaký má stupeň každý vrchol mřížky $M(z_1, \dots, z_n)$?

Back:

$$n \leq \text{stupeň} \leq n + j$$

$j  = |\{z_i : z_i > 2\}|$

Tags: otazka27
<!--ID: 1749396114410-->
END

---

START
FIT-Card

Jaký je průměr grafu mřížky $M(z_1, \dots, z_n)$?

Back:

$$\sum_{i=1}^n(z_i-1)$$
Tags: otazka27
<!--ID: 1749396114413-->
END

---

START
FIT-Card

Jaká je bisekční šířka mřížky $M(z_1, \dots, z_n)$?

Back:

![](../../Assets/Pasted%20image%2020250608171009.png)

Tags: otazka27
<!--ID: 1749396114416-->
END

---

START
FIT-Card

Je regulární mřížka $M(z_1, \dots, z_n)$?

Back:

**Nope**

Tags: otazka27
<!--ID: 1749396114419-->
END

---

START
FIT-Card

Je uzlově symetrická mřížka $M(z_1, \dots, z_n)$?

Back:

**Nope**

Tags: otazka27
<!--ID: 1749396114421-->
END

---

START
FIT-Card

Je hierarchicky rekurzivní mřížka $M(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka27
<!--ID: 1749396114424-->
END

---

START
FIT-Card

Je ortogonální mřížka $M(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka27
<!--ID: 1749396114427-->
END

---

START
FIT-Card

Je uzlově/hranově/optimálně souvislá mřížka $M(z_1, \dots, z_n)$?

Back:

**optimálně souvislá**

Tags: otazka27
<!--ID: 1749396114430-->
END

---

START
FIT-Card

Je bipartitní/vyvážená bipartitní mřížka $M(z_1, \dots, z_n)$?

Back:

**bipartitní**

Tags: otazka27
<!--ID: 1749396114433-->
END

---


START
FIT-Card

Je mřížka $M(z_1, \dots, z_n)$ **hamiltonovská**?

Back:

hamiltonovská$\iff$aspoň jedno $z_i$ je sudé

Tags: otazka27
<!--ID: 1749396114436-->
END

---


START
FIT-Card

Jaké směrování se používá v mřížce $M(z_1, \dots, z_n)$?

Back:

Dimenzně uspořádané (XY routing v 2-D a XYZ routing v 3-D)

Zpráva jde vždy nejprve ve směru první dimenze, pak druhé, pak třetí... až do cíle.

Tags: otazka27
<!--ID: 1749396114438-->
END

---

START
FIT-Card

Pro co existují v mřížce $M(z_1, \dots, z_n)$ algoritmy?

Back:

existují topologicky optimální algoritmy pro mnoho problémů

Tags: otazka27
<!--ID: 1749396114441-->
END

---


START
FIT-Card

Co znamená, že má mřížka $M(z_1, \dots, z_n)$ Manhattonovskou vzdálenost?

Back:

Tzn. vzdálenost mezi dvěma body se počítá tak, že jeden krok je vždy ve směru nějaké dimenze (nemůžu jít diagonálně).

$\text{Manhattan}(a, b) = \sum_{i=1}^{n} |a_i - b_i|$

pro body $a = (a_1, a_2, \dots, a_n)$ a $b = (b_1, b_2, \dots, b_n)$ v $n$-rozměrném prostoru

Tags: otazka27
<!--ID: 1749396114444-->
END

---


START
FIT-Card

Jaké má speciální vlastnosti mřížka $M(z_1, \dots, z_n)$? (2)

Back:

- **Manhattonská vzdálenost**
- Hamiltonovská$\iff$aspoň jedno $z_i$ je sudé

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402092756.png)
<!-- DetailInfoEnd -->

Tags: otazka27
<!--ID: 1746518365178-->
END

---


START
FIT-Card

Jaké směrování se používá v mřížce $M(z_1, \dots, z_n)$?

Back:

Dimenzně uspořádané (XY routing v 2-D a XYZ routing v 3-D)

Zpráva jde vždy nejprve ve směru první dimenze, pak druhé, pak třetí... až do cíle.

Tags: otazka27
<!--ID: 1749328373610-->
END

---


START
FIT-Card

Definice: $n$-rozměrný toroid $K(z_1, \dots, z_n)$?

Back:

- $K(z_1, \dots, z_n)$ = $n$-rozměrný **toroid** rozměrů $z_1, \dots, z_n$
- vrcholy jsou stejné jako v mřížce
- hrany vedou stejně jako v mřížce a navíc “od posledního k prvnímu”
- speciální případ, pokud se všechna $z_i$ rovnají: $K^n(z)$ = **$z$-ární $n$-toroid**

![](../../Assets/Pasted%20image%2020250402092944.png)

Tags: otazka28
<!--ID: 1746518365180-->
END

---


START
FIT-Card

Jaké má speciální vlastnosti toroid $K(z_1, \dots, z_n)$? (3)

Back:

- **hamiltonovský**
- vzdálenost je **manhattanská** (když rozdíly modulíme $z_i$)
- jedna z **komerčně nejúspěšnějších topologií**

Tags: otazka28
<!--ID: 1746518365183-->
END

---

START
FIT-Card

Kolik má vrcholů toroid $K(z_1, \dots, z_n)$?

Back:

$$\prod_{i=1}^n z_i$$

Tags: otazka28
<!--ID: 1749400670370-->
END

---

START
FIT-Card

Kolik má hran toroid $K(z_1, \dots, z_n)$?

Back:

$$n \cdot \prod_{i=1}^n z_i$$

Tags: otazka28
<!--ID: 1749400670384-->
END

---

START
FIT-Card

Jaký má stupeň každý vrchol toroid $K(z_1, \dots, z_n)$?

Back:

$$2n$$

Tags: otazka28
<!--ID: 1749400670386-->
END

---

START
FIT-Card

Jaký je průměr grafu toroidu $K(z_1, \dots, z_n)$?

Back:

$$\sum_{i=1}^n ⌊z_i/2⌋$$

(přibližně poloviční oproti $M$)

Tags: otazka28
<!--ID: 1749400670389-->
END

---

START
FIT-Card

Jaká je bisekční šířka toroidu $K(z_1, \dots, z_n)$?

Back:

$$2\text{bw}_e(M(\dots))$$

(dvojnásobná oproti $M$)

Tags: otazka28
<!--ID: 1749400670392-->
END

---

START
FIT-Card

Je regulární toroid $K(z_1, \dots, z_n)$?

Back:

Ano, $2n$-regulární

Tags: otazka28
<!--ID: 1749400670394-->
END

---

START
FIT-Card

Je uzlově symetrický toroid $K(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka28
<!--ID: 1749400670397-->
END

---

START
FIT-Card

Je hierarchicky rekurzivní toroid $K(z_1, \dots, z_n)$?

Back:

**Ano**, ale nelze rozložit na stejnorozměrné toroidy.

Tags: otazka28
<!--ID: 1749400670400-->
END

---

START
FIT-Card

Je ortogonální toroid $K(z_1, \dots, z_n)$?

Back:

**Ano**

Tags: otazka28
<!--ID: 1749400670402-->
END

---

START
FIT-Card

Je bipartitní/vyvážený bipartitní toroid $K(z_1, \dots, z_n)$?

Back:

vyvážený bipartitní$\iff$všechny $z_i$ jsou sudé

Tags: otazka28
<!--ID: 1749400670408-->
END

---

START
FIT-Card

Jaké směrování se používá v toroidu $K(z_1, \dots, z_n)$?

Back:

Asi stejné jako v mřížce $M$

Tags: otazka28
<!--ID: 1749400670410-->
END

---

START
FIT-Card

Pro co existují v toroidu $K(z_1, \dots, z_n)$ algoritmy?

Back:

existují topologicky optimální algoritmy pro mnoho problémů

Tags: otazka28
<!--ID: 1749328373623-->
END

---


START
FIT-Card

Lemma: symetričnost kružnice

Back:

![](../../Assets/Pasted%20image%2020250402093209.png)

Tags: otazka28
<!--ID: 1746518365185-->
END

---


START
FIT-Card

Věta: uzlově symetrický toroid

Back:

![](../../Assets/Pasted%20image%2020250402093231.png)

Tags: otazka28
<!--ID: 1746518365188-->
END

---


START
FIT-Card

Věta: bipartitní toroid

Back:

![](../../Assets/Pasted%20image%2020250402093249.png)

Tags: otazka28
<!--ID: 1746518365190-->
END

---


START
FIT-Card

Lemma: Jaké jsou uzlově disjunktní cesty v $K(z_1, \dots, z_n)$

Back:

![](../../Assets/Pasted%20image%2020250402093302.png)

Tags: otazka28
<!--ID: 1746518365193-->
END

---


START
FIT-Card

Jaké je porovnání hyperkrychlí, mřížek a toroidů?

Back:

![](../../Assets/Pasted%20image%2020250402093404.png)
<!--ID: 1746518365196-->
END

---


START
FIT-Card

Co jsou řídké grafy? Jací jsou 2 reprezentanti?

Back:

![](../../Assets/Pasted%20image%2020250402093443.png)
<!--ID: 1746518365199-->
END

---


START
FIT-Card

Jaké mají společné vlastnosti řídké hyperkubické sítě?

Back:

![](../../Assets/Pasted%20image%2020250402093500.png)
<!--ID: 1746518365202-->
END

---


START
FIT-Card

Jak vypadá zabalený motýlek dimenze $n$?

Back:

![](../../Assets/Pasted%20image%2020250402093522.png)
<!--ID: 1746518365204-->
END

---


START
FIT-Card

Věta: symetričnost $wBF_n$

Back:

![](../../Assets/Pasted%20image%2020250402093539.png)
<!--ID: 1746518365207-->
END

---


START
FIT-Card

Věta: $\text{diam} (wBF_n) = \ ?$

Back:

![](../../Assets/Pasted%20image%2020250402093605.png)
<!--ID: 1746518365210-->
END

---


START
FIT-Card

Jaké další vlastnosti má $wBF_n$

Back:

- $wBF_n$ je řídký graf s optimálním průměrem
- $wBF_n$ není hierarchicky rekurzivní
- $wBF_n$ je vyvážený bipartitní graf když n je sudé
- $wBF_n$ je Hamiltonovský graf

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250402093731.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365213-->
END

---


START
FIT-Card

Jak vypadá obyčejný motýlek dimenze $n$ ($oBF_n$)?

Back:

![](../../Assets/Pasted%20image%2020250402093756.png)
<!--ID: 1746518365216-->
END

---


START
FIT-Card

Jaké jsou vlastnosti obyčejného motýlka?

Back:

![](../../Assets/Pasted%20image%2020250402093813.png)
<!--ID: 1746518365219-->
END

---


START
FIT-Card

Definice: Normální hyperkubický algoritmus

Back:

![](../../Assets/Pasted%20image%2020250402093830.png)
<!--ID: 1746518365221-->
END

---


START
FIT-Card

Definice: Přímý a nepřímý motýlek

Back:

![](../../Assets/Pasted%20image%2020250402093856.png)
<!--ID: 1746518365224-->
END

---


START
FIT-Card

Jak funguje směrování v topologii motýlek?

Back:

![](../../Assets/Pasted%20image%2020250402093916.png)
<!--ID: 1746518365226-->
END

---


START
FIT-Card

Jak funguje obousměrný motýlek?

Back:

![](../../Assets/Pasted%20image%2020250402093935.png)
<!--ID: 1746518365229-->
END

---


START
FIT-Card

Jak souvisí obousměrný motýlek a tlustý strom?

Back:

![](../../Assets/Pasted%20image%2020250402093958.png)
<!--ID: 1746518365232-->
END

---


START
FIT-Card

Jaké jsou vlastnosti tlustého stormu?

Back:

![](../../Assets/Pasted%20image%2020250402094013.png)
<!--ID: 1746518365235-->
END

---


START
FIT-Card

Jak vypadá 3 stupňová CLosova topologie $CL(m,n,r)$?

Back:

![](../../Assets/Pasted%20image%2020250402094036.png)
<!--ID: 1746518365237-->
END

---


START
FIT-Card

Jaký je význam Closovy topologie?

Back:

![](../../Assets/Pasted%20image%2020250402094051.png)
<!--ID: 1746518365240-->
END

---


START
FIT-Card

Kdy je $CL(m,n,r)$ striktně neblokující?

Back:

![](../../Assets/Pasted%20image%2020250402094117.png)
<!--ID: 1746518365243-->
END

---


START
FIT-Card

Kdy je $CL(m,n,r)$ představitelná?

Back:

![](../../Assets/Pasted%20image%2020250402094141.png)
<!--ID: 1746518365246-->
END

---


START
FIT-Card

Jak funguje topologie Dragonfly?

Back:

![](../../Assets/Pasted%20image%2020250402094157.png)
<!--ID: 1746518365249-->
END

---


START
FIT-Card

Uveď příklad skupiny v $DF(a,p,h)$

Back:

![](../../Assets/Pasted%20image%2020250402094218.png)
<!--ID: 1746518365252-->
END

---


START
FIT-Card

Jaké jsou základní vlastnosti topologie dragonfly?

Back:

![](../../Assets/Pasted%20image%2020250402094238.png)
<!--ID: 1746518365255-->
END

---


START
FIT-Card

Jak funguje směrování v $DF(a,p,h)$

Back:

![](../../Assets/Pasted%20image%2020250402094300.png)
<!--ID: 1746518365258-->
END

---


START
FIT-Card

Jak funguje propojení skupin $DF(a,p,h)$

Back:

![](../../Assets/Pasted%20image%2020250402094319.png)
<!--ID: 1746518365261-->
END

---

![](../../Assets/Pasted%20image%2020250402094331.png)
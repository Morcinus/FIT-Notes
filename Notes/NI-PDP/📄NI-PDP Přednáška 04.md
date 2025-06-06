---
created: 2025-03-13T09:30:25
title: "High performance OpenMP"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska04 status-toReview


START
FIT-Card

Co je časově náročnější? Provedení operace v CPU nebo nahrání těch informací z paměti?

Back:

Nahrání informací z paměti je časově náročnější.

Například z RAM do CPU je latence 40x větší než latence z L1 keše.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250313101411.png)
![](../../Assets/Pasted%20image%2020250313101359.png)
<!-- ExampleEnd -->
<!--ID: 1746599653027-->
END

---



START
FIT-Card

Na co se dělí/klasifikují paralelizovatelné algoritmy? (2)

Back:

- **Výpočetně intenzivní algoritmy** - čas procesoru strávený výpočtem nad daty je větší než čas nutný na přesun dat z paměti do CPU
- **Pamětově intenzivní algoritmy** - čas procesoru strávený výpočtem nad daty je menší než čas nutný na přesun dat z paměti do CPU

Tags: otazka09
<!--ID: 1746599653035-->
END

---


START
FIT-Card

Co jsou například **výpočetně intenzivní algoritmy**?(3)

Back:

- násobení matic
- faktorizace matic
- prohledávání stavového prostoru pro NP-těžké úlohy

Tags: otazka09
<!--ID: 1746599653042-->
END

---


START
FIT-Card

Co jsou například **paměťově intenzivní algoritmy**? (4)

Back:

- skalární součin
- dynamické programování
- Fourierova transformace
- spousta $O(n)$ algoritmů

Tags: otazka09
<!--ID: 1746599653049-->
END

---


START
FIT-Card

Jaké jsou 2 hlavní benchmarky procesorů? x

Back:

- **HLP** (LINPACK)
- **HPCG** - násobení obří řídké matice vektorem (paměťově intenzivní úlohy)
	- Např. předpovědi počasí je počítání řídkých matic
<!--ID: 1749197208330-->
END

---


START
FIT-Card

Jaké jsou základní podmínky optimalizace sekvenčních kódů? (4)

Back:

- Maxim**alizovat počet výpočetních operací na 1 načtený bajt**
- **Maximalizovat keš paměť**
- **Zohlednit, že se načítají celé bloky keše** (např. 64B)
- Čemu se vyvarovat:
	- výpadkům keše kvůli **střídání přístupu k rozměrným datovým strukturám**
	- **nepřímá adresace** - způsobuje výpadky keše

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313102743.png)
<!-- DetailInfoEnd -->

Tags: otazka09
<!--ID: 1746599653056-->

END

---


START
FIT-Card

Jaké jsou hlavní zdroje neefektivity OpenMP kódů? (6)

Back:

- **nevyvážená zátěž vláken** (např. hodně vláken dlouho čeká na bariérách)
- **zbytečně častá synchronizace** (např. moc bariér a kritických sekcí)
- **nevyužití paralelismu** (např. rozdělení for cyklu na méně iterací než mám vláken)
- **režie vláken** (např. zbytečné vytváření a rušení vláken nebo `schedule(dynamic)`)
- **významná sekvenční část**
- **nevyužívání cachí** (např. častý zápis do nacachovaných proměnných, **falešné sdílení**)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313102900.png)
<!-- DetailInfoEnd -->

Tags: otazka09
<!--ID: 1746599653063-->

END

---


START
FIT-Card

Co je **falešné sdílení**?

Back:

Vlákna zapisují na různé, ale blízké adresy, takže se trefují do stejného bloku cache

![](../../Assets/Pasted%20image%2020250313103140.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250313103150.png)
<!-- ExampleEnd -->
Tags: otazka09
<!--ID: 1746599653071-->

END

---


START
FIT-Card

U čeho typicky vzniká falešné sdílení?

Back:

Typicky vzniká u **datového paralelismu**

(protože typicky přistupujeme k blízkým datům)

Tags: otazka09
<!--ID: 1746599653078-->

END

---


START
FIT-Card

Jak se dá snížit dopad falešného sdílení?

Back:

Použít `schedule(static)`.

Tím se práce rozhodí mezi vlákna a nepřistupují tolik k těm blízkým datům.

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020250313103303.png)
<!-- ExplanationEnd -->
Tags: otazka09
<!--ID: 1746599653086-->

END

---


START
FIT-Card

Jak se dá kompletně zamezit falešnému sdílení? (3)

Back:

1. Splnění **podmínky zarovnání**
2. Pro velká pole nastavit `chunk_size` tak, aby každý proces měl celý blok cache
3. Pro malá pole přidat **jalovou výplň**, aby se každý prvek nafouknul do velikosti bloku cache 

Tags: otazka09
<!--ID: 1749197198571-->
END

---


START
FIT-Card

Jak přesně funguje **podmínka zarovnání**?

Back:

![](../../Assets/Pasted%20image%2020250606100254.png)

Pro velká pole:
![](../../Assets/Pasted%20image%2020250606100305.png)

Tags: otazka09
<!--ID: 1749197198577-->
END

---


START
FIT-Card

Jak se dá **odstranit falešné sdílení pro velká pole**?

Back:

- Do 1 keš bloku zapisuje právě jedno vlákno
- Pole v paměti je zarovnáno stejně jako bloky keše

Pro velká pole:
![](../../Assets/Pasted%20image%2020250606100305.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313103414.png)
<!-- DetailInfoEnd -->

Tags: otazka09
<!--ID: 1749197208350-->
END

---


START
FIT-Card

Jak se dá odstranit falešné sdílení pro malá pole?

Back:

Musíme "nafouknout" to pole tak, aby každý prvek odpovídal velikosti bloku keše.

Pro malá pole:
![](../../Assets/Pasted%20image%2020250606100418.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313103627.png)
![](../../Assets/Pasted%20image%2020250313103700.png)
<!-- DetailInfoEnd -->

Tags: otazka09
<!--ID: 1749197208353-->
END

---


START
FIT-Card

Jaké jsou typicky příklady jednoduchých problémů co jsme brali.

Back:

![](../../Assets/Pasted%20image%2020250313103951.png)

Tags: otazka10
<!--ID: 1746599653092-->
END

---


START
FIT-Card

Co je úloha **výpočtu histogramu**? Jak funguje sekvenční algoritmus?

Back:

**Úloha**: spočítat četnosti prvků z intervalu $[0,\mathrm{range}-1]$ v poli $A$

![](../../Assets/Pasted%20image%2020250313103749.png)

Tags: otazka10
<!--ID: 1746599653099-->
END

---


START
FIT-Card

Jakou má sekvenční složitost úloha **výpočtu histogramu**? 

Back:

$$O(n) + O(\mathrm{range})$$
<!--ID: 1749200460522-->
END

---


START
FIT-Card

Jak se dá paralelizovat **výpočet histogramu** pomocí **sdíleného histogramu**?

Back:

1. inicializace histogramu na $0$
2. pak `parallel for shared(histogram)` a `atomic update` pro inkrementaci

![](../../Assets/Pasted%20image%2020250606101248.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313103815.png)
<!-- DetailInfoEnd -->

Tags: otazka10
<!--ID: 1746599653106-->
END

---


START
FIT-Card

Jaké jsou u paralelizace **výpočtu histogramu** pomocí **sdíleného histogramu**:
- výhody (2)
- nevýhody (1)

Back:

Výhody:
- Není nutná dodatečná paměť ani výpočet
- Nenastávají žádné současné zápisy

Nevýhody:
- Díky **nepřímé indexaci** bude náhodně docházet k výpadkům keší bloků pole `histogram`

Tags: otazka10
<!--ID: 1746599653113-->

END

---


START
FIT-Card

Jakou má složitost paralelizace **výpočtu histogramu** pomocí **sdíleného histogramu**?

Back:
$$O(\mathrm{range}) + O(n/p)$$

Tags: otazka10
<!--ID: 1746599653114-->

END

---


START
FIT-Card

Jak se dá paralelizovat **výpočet histogramu** pomocí **lokálního histogramu**?

Back:

1. inicializace histogramu v každém vlákně
2. pak si vlákna rozdělí pole A v prvním parallel for a vypočítají mezisoučty
3. nakonec si rozdělí histogram a ve druhém parallel for zredukují mezivýsledky z lokálních histogramů do jednoho

![](../../Assets/Pasted%20image%2020250313103854.png)

![](../../Assets/Pasted%20image%2020250313103905.png)
Tags: otazka10
<!--ID: 1749198077711-->
END

---


START
FIT-Card

Jakou má složitost paralelizace **výpočtu histogramu** pomocí **lokálního histogramu**?

Kolikráti násobnou má paměťovou náročnost?

Back:
$$O(\mathrm{range}) + O(n/p) + O(\mathrm{range})$$

Inicializace, paralelní výpočet a paralelní redukce

Tags: otazka10
<!--ID: 1746599653120-->
END

---


START
FIT-Card

Jakou má **paměťovou náročnost** paralelizace **výpočtu histogramu** pomocí **lokálního histogramu** vůči **sdílenému histogramu**?

Back:

Paměťová náročnost: $p$-násobná

Tags: otazka10
<!--ID: 1749198077725-->
END

---


START
FIT-Card

Je **výpočet histogramu** výpočetně intenzivní nebo paměťově intenzivní?

Back:

**paměťově intenzivní**

Tags: otazka10
<!--ID: 1749198077728-->
END

---


START
FIT-Card

Co je úloha **násobení polynomů**? Jak funguje sekvenční algoritmus?

Back:

- Pole $A,B,C$ - obsahují koeficienty polynomů

![](../../Assets/Pasted%20image%2020250313104427.png)

Tags: otazka11
<!--ID: 1749200460528-->
END

---


START
FIT-Card

Jakou má sekvenční složitost úloha **násobení polynomů**? 

Back:

$$O(nm)$$

Tags: otazka11
<!--ID: 1749200460532-->
END

---



START
FIT-Card

Jaké jsou možnosti paralelizace u násobení polynomů?

Back:

- Paralelizace $A$ - vnějšího cyklu
- Paralelizace $B$ - vnitřního cyklu
- Paralelizace $C$ - dekompozice vstupního polynomu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313104526.png)
<!-- DetailInfoEnd -->

Tags: otazka11
<!--ID: 1746599653127-->
END

---


START
FIT-Card

Jak se dá paralelizovat **vnější cyklus** $A$ násobení polynomů?

Back:

- vlákna si rozdělí $A$ v `parallel for` nad vnějším cyklem
- všechna pak čtou ze všech částí $B$, takže i v zápisech do $C$ mohou být konflikty a je potřeba `atomic update`

![](../../Assets/Pasted%20image%2020250313104607.png)
![](../../Assets/Pasted%20image%2020250313104629.png)

Tags: otazka11
<!--ID: 1746599653134-->
END

---


START
FIT-Card

Jak se dá paralelizovat **vnitřní cyklus** $B$ násobení polynomů?

Back:

- vnější cyklus přes $A$ je sekvenční
- vlákna si rozdělí $B$ v `parallel for` nad vnitřním cyklem, takže i zapisované oblasti v $C$ jsou disjunktní

![](../../Assets/Pasted%20image%2020250313104644.png)
![](../../Assets/Pasted%20image%2020250313104655.png)
![](../../Assets/Pasted%20image%2020250313104706.png)

Tags: otazka11
<!--ID: 1746599653142-->
END

---


START
FIT-Card

Jaké jsou u paralelizace **vnitřního cyklu** u **násobení polynomů**:
- výhody (1)
- nevýhody (1)

Back:

Výhody:
- Zapisované oblasti v $C$ jsou disjunktní

Nevýhody:
- Vyžaduje větší režii

Tags: otazka11
<!--ID: 1749200460535-->
END

---


START
FIT-Card

Co lze navíc provést u paralelizace **vnitřního cyklu** u **násobení polynomů**

Back:

Když přesuneme parallel nad vnější cyklus, pool vláken se vytvoří jen jednou, ale falešné sdílení bude neodstranitelné

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250606103753.png)

Tags: otazka11
<!-- DetailInfoEnd -->
<!--ID: 1749200460538-->
END

---



START
FIT-Card

Jak se dá **paralelizovat polynom** $C$ při násobení polynomů?

Back:

- vnější cyklus přes indexy $C$ je `parallel for`
- vnitřní jde podle vzorečku $c_k = \sum_{l=\max(0,k-n)}^{\min(k,m)} a_l b_{k-l}$

m je stupeň A, n je stupeň B

![](../../Assets/Pasted%20image%2020250313104739.png)
![](../../Assets/Pasted%20image%2020250313104751.png)
![](../../Assets/Pasted%20image%2020250313104801.png)
![](../../Assets/Pasted%20image%2020250313104810.png)
![](../../Assets/Pasted%20image%2020250313104820.png)

Tags: otazka11
<!--ID: 1746599653149-->
END

---


START
FIT-Card

Jaký schedule lze zvolit u **paralelizace polynomu** $C$ při násobení polynomů? (2)

Jaký je nejlepší?
Co navíc pomůže?

Back:

- se `schedule(static)` budou “prostřední” vlákna výrazně víc zatížena
- se `schedule(dynamic)` bude docházet k falešnému sdílení a není nutné

nejlepší je `static` s `chunk_size = cache_line_size / sizeof(int)`

trochu pomůže spočítat `c_k` lokálně a zapsat ho jednorázově, ne inkrementálně

Tags: otazka11
<!--ID: 1749200460541-->
END

---


START
FIT-Card

Co je úloha **sekvenční násobení matic**?  Jak funguje sekvenční algoritmus?

Back:

úloha $MMM$: vynásobit stejně velké čtvercové $(n \times n)$ matice $A \times B = C​$

sekvenčně středoškolsky: $O(n^3)$ (tři for cykly, $n^2$ skalárních součinů délky $n$)

![](../../Assets/Pasted%20image%2020250313104839.png)

Tags: otazka12
<!--ID: 1746599653155-->
END

---


START
FIT-Card

Jak se dá paralelizovat **násobení matic**?

Back:

- paralelizace **vnějšího cyklu**
- paralelizace **prostředního cyklu**
- paralelizace **vnitřního cyklu**

Tags: otazka12
<!--ID: 1749200460545-->
END

---


START
FIT-Card

Jak se dá paralelizovat **vnější cyklus** u násobení matic?

Back:

rozdělení řádků $C$

`#pragma omp parallel for schedule(static)`

![](../../Assets/Pasted%20image%2020250313104859.png)

Tags: otazka12
<!--ID: 1746599653163-->
END

---


START
FIT-Card

Jaké jsou u paralelizace **vnějšího cyklu** u násobení matic:
- výhody (3)

Back:

- bezkolizní zápisy
- minimální synchronizace (jedna bariéra)
- linární zrychlení

Tags: otazka12
<!--ID: 1749200460548-->
END

---


START
FIT-Card

Jak se dá paralelizovat **vnitřní cyklus** u násobení matic?

Back:

![](../../Assets/Pasted%20image%2020250313104910.png)
![](../../Assets/Pasted%20image%2020250313104948.png)
![](../../Assets/Pasted%20image%2020250313104959.png)
![](../../Assets/Pasted%20image%2020250313105009.png)

Tags: otazka12
<!--ID: 1746599653171-->
END

---


START
FIT-Card

Jaké jsou u paralelizace **prostředního cyklu** u násobení matic:
- výhody (1)
- nevýhody (1)

Back:

- **Výhoda** bezkolizní zápisy
- **Nevýhoda** $n$ bariér
<!--ID: 1749200460551-->
END

---


START
FIT-Card

K čemu dojde u paralelizace **prostředního cyklu** u násobení matic:
- při použití `schedule(static)`
- při použití `schedule(static,1)`

Back:

**K čemu dojde:**
- se `schedule(static)` má lineární zrychlení
- se `schedule(static, 1)`dojde k falešnému sdílení

Tags: otazka12
<!--ID: 1749200460554-->
END

---


START
FIT-Card

Jak se dá trochu zrychlit **paralelizace prostředního cyklu** u násobení matic?

Back:

přesunutím `parallel` nad vnější cyklus - tzn. 1 **fork-join**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250606105228.png)
<!-- DetailInfoEnd -->

Tags: otazka12
<!--ID: 1749200460557-->
END

---


START
FIT-Card

Jak se dá paralelizovat **vnitřní cyklus** při násobení matic?

Back:

paralelizací vnitřního cyklu (rozdělení skalárního součinu) s `reduction(+:s)`

![](../../Assets/Pasted%20image%2020250313105019.png)

Tags: otazka12
<!--ID: 1746599653181-->
END

---


START
FIT-Card

Jak se dá trochu zrychlit **paralelizace prostředního cyklu** u násobení matic?

Back:

přesunutím `parallel` nad vnější cyklus - tzn. 1 **fork-join**

![](../../Assets/Pasted%20image%2020250313105106.png)

Tags: otazka12

END

---


START
FIT-Card

Jaké jsou u paralelizace **vnitřního cyklu** u násobení matic:
- nevýhody (1)

Back:

- **Nevýhoda** největší synchronizační režie ($n^2$ bariér a redukcí), s počtem vláken dokonce zpomaluje

Tags: otazka12
<!--ID: 1749200460561-->
END

---


START
FIT-Card

Jaké je **srovnání výkonnosti variant paralelního násobení** matic? (5)

Back:

1. **MMM-vnější** je nejlepší
2. **MMM-prostřední s fork join** - o trošku pomalejší
3. **MMM-prostřední** - o trošku pomalejší
4. **MMM-vnitřní s fork join** - výrazně pomalejší
5. **MMM-vnitřní** - výrazně pomalejší

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313105137.png)
<!-- DetailInfoEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313105149.png)
![](../../Assets/Pasted%20image%2020250313105201.png)
<!-- DetailInfoEnd -->

Tags: otazka12
<!--ID: 1746599653191-->
END

---


START
FIT-Card

Jaké jsou formáty pro uložení řídkých matic? (2)

Back:

- **souřadnicový** (COO)
- **komprimované řádké řádky** (CSR)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313110032.png)
<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1746599653202-->
END

---


START
FIT-Card

Jak funguje **souřadnicový formát** pro uložení řídkých matic COO?

Back:

Matice $A$ je reprezentována 3 poli:
- `A.RowInd[0..N-1]`  - obsahuje indexy **řádků** nenulových prvků $A$
- `A.ColInd[0..N-1]` - obsahuje indexy **sloupců** nenulových prvků $A$
- `A.Elems[0..N-1]` - obsahuje **hodnoty** nenulových prvků $A$

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250313110051.png)
<!-- ImageEnd -->

Tags: otazka13
<!--ID: 1746599653211-->
END

---


START
FIT-Card

Jak funguje **komprimované řádké řádky** pro uložení řídkých matic CSR?

Back:

Matice $A$ je reprezentována 3 poli:
- `A.RowStart[0..n]`  - indexy začátků řádků v `A.ColInd`
- `A.ColInd[0..N-1]` - obsahuje indexy **sloupců** nenulových prvků $A$
- `A.Elems[0..N-1]` - obsahuje **hodnoty** nenulových prvků $A$

(tzn. vše stejně jako u COO jen `A.RowStart` je jiný)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250606110906.png)
<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1746599653234-->
END

---


START
FIT-Card

Co je úloha $SpMVM$?

Back:

Vypočítat $y=Ax$, tedy **násobení matice vektorem**

($A$ je matice $n \times n$, $N$ je počet jejích nenulových prvků, $n \le N \ll n^2$)

Tags: otazka13
<!--ID: 1749201699764-->
END

---


START
FIT-Card

Je úloha $SpMVM$ paměťově nebo výpočetně intenzivní?

Back:

**paměťově**

Tags: otazka13
<!--ID: 1749201699777-->
END

---


START
FIT-Card

Jak funguje sekvenční **SpMVM** v COO?

Back:

Jeden for cyklus přes společný index polí a v něm `y[A.RowInd[k]] += A.Elems[k] * x[A.ColInd[k]]`

![](../../Assets/Pasted%20image%2020250313110122.png)
![](../../Assets/Pasted%20image%2020250313110134.png)

Tags: otazka13
<!--ID: 1746599653219-->
END

---


START
FIT-Card

Jaká je složitost sekvenčního **SpMVM** v COO?

Back:

$O(N)$

Tags: otazka13
<!--ID: 1749201699781-->
END

---


START
FIT-Card

Jak funguje paralelní **SpMVM** v COO? 

Jaký schedule musí být? K čemu bude docházet? Je to efektivní?

Back:

- `parallel for` u každého cyklu
- nutný `atomic update`
- bude docházet k **falešnému sdílení**

- `libovolným schedule`

**neefektivní** (pro malá p pomalejší než sekvenční, pro větší p jen mírné zrychlení)

![](../../Assets/Pasted%20image%2020250313110151.png)

Tags: otazka13
<!--ID: 1746599653226-->
END

---

START
FIT-Card

Jak funguje sekvenční násobení matic v CSR? Je rychlejší nebo pomalejší než COO?

Back:

- dva for cykly, vnější přes řádky, vnitřní přes prvky řádku a v něm `sum += A.Elems[k] * x[A.ColInd[k]]`
- 2× rychlejší než COO

![](../../Assets/Pasted%20image%2020250313110221.png)

Tags: otazka13
<!--ID: 1746599653242-->
END

---


START
FIT-Card

Jak funguje paralelní **SpMVM** v CSR? Na čem hodně závisí?

Back:

- chceme paralelizovat vnější cyklus, aby vlákna zapisovala do disjunktních oblastí
- volba rozdělování iterací hodně ovlivňuje zrychlení

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313110310.png)
![](../../Assets/Pasted%20image%2020250313110318.png)
![](../../Assets/Pasted%20image%2020250313110420.png)
![](../../Assets/Pasted%20image%2020250313110538.png)
![](../../Assets/Pasted%20image%2020250313110629.png)

<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1746599653249-->
END

---


START
FIT-Card

Jaké jsou možnosti volby `schedule` u paralelního **SpMVM** v CSR? Jaké jsou jejich vlastnosti?

Back:

- se `schedule(static)` může být zátěž vláken nevyvážená a hrozí falešné sdílení
- se `schedule(static, 1)` je nevyváženost podobná a falešné sdílení ještě horší
- se `schedule(static, 16)` je nevyváženost horší, ale falešné sdílení lepší
- se `schedule(dynamic, X)` záleží vyváženost na matici a má to vyšší režii
	- falešné sdílení lze zmírnit nastavením `X` na násobek počtu prvků v cache bloku

Tags: otazka13
<!--ID: 1749201699784-->
END

---


START
FIT-Card

Jaké mají zrychlení různé volby `schedule` u paralelního **SpMVM** v CSR?

Back:

Zrychlení:
- `schedule(static)` - pro malá $p$ rozumné zrychlení, pro velká $p$ zpomalení (naráží na saturaci sběrnice)
- `schedule(static,1)` - jen mírné zrychlení nehledě na $p$ i typ matice
- `schedule(static,16)` - rozumné zrychlení, ale zdaleka ne lineární
- `schedule(dynamic, X)` - s `X=16` experimentálně trochu pomalejší než `static`

Tags: otazka13
<!--ID: 1749201699787-->
END

---


START
FIT-Card

Jak funguje **vyvažování při násobení** matic v CSR? Jaké má zrychlení?

Back:

rozdělení matice na pásy s podobnými počty nenulových prvků (např. tak, že si každé vlákno vypočte svůj ideální dělící bod a “zaokrouhlí” na celé řádky)

pro menší $p$ je zrychlení téměř lineární, pak začne narážet na saturaci sběrnice

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250313110657.png)
![](../../Assets/Pasted%20image%2020250313110713.png)

<!-- DetailInfoEnd -->

Tags: otazka13
<!--ID: 1746599653256-->
END

---


START
FIT-Card

Jak rychlé je COO pro p=4, p=12?

Back:

![](../../Assets/Pasted%20image%2020250313110920.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653263-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(static)?

Back:

![](../../Assets/Pasted%20image%2020250313110930.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653271-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(static,1)?

Back:

![](../../Assets/Pasted%20image%2020250313111032.png)
![](../../Assets/Pasted%20image%2020250313111507.png)END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(static,16)?

Back:

![](../../Assets/Pasted%20image%2020250313111059.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653278-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(dynamic,16)?

Back:

> "Nebuďte z toho smutný. Tyhle algoritmy budou vždycky pomalý. Běžte se proběhnout na Letnou. Užívejte si jara." - Tvrdík :D

![](../../Assets/Pasted%20image%2020250313111131.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653285-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, balanced?

Back:

![](../../Assets/Pasted%20image%2020250313111209.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653292-->
END

---

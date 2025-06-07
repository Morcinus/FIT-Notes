---
created: 2025-03-21T13:40:42
title: "Paralelní řazení v OpenMP"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska05 status-toReview


START
FIT-Card

Jaké vlastnosti má QuickSort? (4)

Back:

- **Datově citlivý** - rychlost závisí na vstupu
- **In-place**
- **Nestabilní** - nezachovává pořadí stejných prvků
- **Stačí operace** compare & swap

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250321134058.png)
<!-- DetailInfoEnd -->

Tags: otazka14
<!--ID: 1746599653590-->
END

---


START
FIT-Card

Jak vypadá sekvenční verze QuickSortu?

Back:

**seq_quicksort**:
- `if(lo<hi)`
- `long r = seq_partition_L(A,lo,hi)` - najde dělící bod
- `seq_quicksort(A, lo, r-1)`
- `seq_quicksort(A, r+1, hi)`

**seq_partition_L**
- `pivot = A[hi]` - poslední prvek je pivot
- `j = lo; iterace od lo do hi`
	- `if(A[j] < pivot) swap (A, i++, j)`
- `swap(A,i,hi)`
- `return i`

**swap**
- prohodí prvky

![](../../Assets/Pasted%20image%2020250321134512.png)

Tags: otazka14
<!--ID: 1746599653605-->
END

---


START
FIT-Card

Jak funguje **Lomutova varianta** partitioningu v QuickSortu?

Back:

![](../../Assets/Pasted%20image%2020250321134544.png)

![](../../Assets/Pasted%20image%2020250321134556.png)

Tags: otazka14
<!--ID: 1746599653613-->
END

---


START
FIT-Card

Jak se dá **paralelizovat quicksort**? Jaké to má problémy?

Back:

Pomocí funkčního paralelismu - `task` nad obě větve rekurzvního volání

Problémy: mnoho vláken, velká režie, rozdělení vstupního pole je stále sekvenční

![](../../Assets/Pasted%20image%2020250321134624.png)

Tags: otazka14
<!--ID: 1746599653621-->
END

---


START
FIT-Card

Jaké jsou další verze quicksortu?

Back:

- SGNU - sekvenční z knihovny Libstdc++
- PGNU - paralelní z knihovky Libstdc++
- SUV - sekvenční "učebnicový"
- PUV - púaralelní "učebnicový"
<!--ID: 1746599653629-->
END

---


START
FIT-Card

Jaké je srovnání SGNU, PGNU, SUV, PUV?

Back:

![](../../Assets/Pasted%20image%2020250321134817.png)
<!--ID: 1746599653637-->
END

---


START
FIT-Card

Proč je PUV výrazně pomalejší než PGNU?

Back:

![](../../Assets/Pasted%20image%2020250321134849.png)
<!--ID: 1746599653646-->
END

---


START
FIT-Card

Jak se dá PUV zlepšit? (3)

Back:

![](../../Assets/Pasted%20image%2020250321134900.png)

- Koncová rekurze - je to "zadarmo", stačí jen přeuspořádat kód
- Zavedení prahu - ke konci rekurze nemá cenu to počítat rekurzivně
<!--ID: 1746599653653-->
END

---


START
FIT-Card

Jak lze zrychlit quicksort?

Back:

- **tail call optimization** (viz dále)
- **zavedení prahu pro vytváření tasků** (viz dále)
- **paralelizace algoritmu rozdělování** (viz dále)
- **přiblížení pivota blízko mediánu** (např. výběrem mediánu z náhodného vzorku)
- **rozdělení počtu vláken** na levou a pravou podúlohu podle velikosti podúloh

Tags: otazka14
<!--ID: 1749202568493-->
END

---


START
FIT-Card

Jak funguje **Tail call optimization** (TCO) u quicksortu? Jaké složitosti tím docílíme?

Back:

QuickSort lze zrychlit nahrazením druhého rekurzivního volání iterací ve `while`

- Ušetříme počet rekurzivních volání a tedy počet vytvářených tasků
- Pokud je pivot skoromedián, snížíme počet rekurzivních volání z $O(n)$ na $O(\log n)$

![](../../Assets/Pasted%20image%2020250321134952.png)

Tags: otazka14
<!--ID: 1746599653660-->
END

---


START
FIT-Card

Jak funguje **Prahování task paralelismu** (ST) u quicksortu?

Back:

např. pokud je neseřazených čísel míň než $n/kp$, dopočítáme zbytek sekvenčně v aktuální úloze místo vytváření nových

![](../../Assets/Pasted%20image%2020250321135010.png)
![](../../Assets/Pasted%20image%2020250321135017.png)

Tags: otazka14
<!--ID: 1746599653667-->
END

---


START
FIT-Card

Jak funguje **Paralelizované rozdělování u quicksortu**? Jaké jsou předpoklady?

Back:

Předpoklady:
- Hodí se na to **Hoareova** varianta quicksortu (neutralizace z obou stran) než Lomutova
- vyžaduje vnořený OpenMP paralelismus (`omp_set_max_active_levels na víc než 1`)

Jak funguje:
- indexy levého a pravého prvku (`i`, `j`) budou sdílené proměnné, každé vlákno si od nich opakovaně odvozuje lokální `my_i` a `my_j` a nárokuje si tak dvojici prvků pro sebe
    - pro přečtení a in/dekrementaci `i` a `j` je nutný `atomic capture`
- to ale vede na obří režii s `atomic` a falešné sdílení, takže je lepší si místo prvků nárokovat celé disjunktní bloky (tzn. in/dekrementovat indexy o $K$ místo o $1$)
- na konci smyčky je potřeba `barrier`, pak neutralizace zbývajících (max. $p$) bloků a nakonec sekvenční úklid posledního špinavého bloku
- pivota neodkládáme stranou jako u neblokové varianty, jen si zapamatujeme hodnotu


![](../../Assets/Pasted%20image%2020250321135035.png)

Tags: otazka14
<!--ID: 1746599653679-->
END

---


START
FIT-Card

Jak vypadá Hoareova varianta quicksortu (partitioningu)?

(tohle tušit jen obecně)

Back:

todo shrnout obecně

![](../../Assets/Pasted%20image%2020250321135059.png)
![](../../Assets/Pasted%20image%2020250321135107.png)

Tags: otazka14
<!--ID: 1746599653687-->
END

---


START
FIT-Card

Jak se dá optimalizovat quicksort optimalizací pořadí vyhodnocení podmínek?

(tohle je v optimalizaci trochu detail)

Back:

![](../../Assets/Pasted%20image%2020250321135205.png)
<!--ID: 1746599653696-->
END

---


START
FIT-Card

Jak lze paralelizovat quicksort algoritmus (Hoareova)?

Back:

Pozn. vlákna mi budou zpracovávat různé části toho pole je velice důležitý, abych si pohlídal, aby mi nezpracovávali danou dvojici čísel najednou, jinak by došlo ke kolizi.

Hlavní myšlenka:
- Budeme mít globální i a j a vždy když si nějaké vlákno načte tyto prvky, updatne indexy tak, aby to už nečetlo jiné vlákno
	- Žádná dvě vlákna nesmí mít stejný 

![](../../Assets/Pasted%20image%2020250321135234.png)
![](../../Assets/Pasted%20image%2020250321135241.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250321135251.png)
![](../../Assets/Pasted%20image%2020250321135304.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599653704-->
END

---


START
FIT-Card

Proč není tento quicksort algoritmus korektní?
![](../../Assets/Pasted%20image%2020250321135323.png)

Back:

Musíme zajistit, aby zapisování do sdílených proměnných bylo atomické.

![](../../Assets/Pasted%20image%2020250321135328.png)
![](../../Assets/Pasted%20image%2020250321135341.png)
![](../../Assets/Pasted%20image%2020250321135347.png)
<!--ID: 1746599653713-->
END

---


START
FIT-Card

Proč je algoritmus par_partition_2 neefektivní?

Back:

Protože se tam furt lockují ty globální proměnné - volají se stovky atomic capute. Ta režie je obří.

Když už si nějaké vlákno "vysoutěží" přístup k té sdílené paměti, tak jim nedáme jeden prvek, ale rovnou $K$ prvků, ať může chvíli pracovat a nejde zase do té paměti.

![](../../Assets/Pasted%20image%2020250321135415.png)
<!--ID: 1746599653720-->
END

---


START
FIT-Card

Jak funguje sekvenční neutralizace 2 bloků Hoareova QuickSortu?

Back:

![](../../Assets/Pasted%20image%2020250321135447.png)
![](../../Assets/Pasted%20image%2020250321135456.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250321135506.png)
<!-- ExampleEnd -->
<!--ID: 1746599653729-->
END

---


START
FIT-Card

Jak se u paralelního QuickSortu vybírá pivot?

Back:

![](../../Assets/Pasted%20image%2020250321135529.png)
<!--ID: 1746599653738-->
END

---


START
FIT-Card

Jak se u paralelního quicksortu dělá vyvažování?

Back:

![](../../Assets/Pasted%20image%2020250321135542.png)
<!--ID: 1746599653746-->
END

---


START
FIT-Card

Je paralelní rozdělování složitá úloha?

Back:

![](../../Assets/Pasted%20image%2020250321135643.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250321135653.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599653752-->
END

---


START
FIT-Card

Jaké je srovnání QuickSort implementací?

Back:

![](../../Assets/Pasted%20image%2020250321135653.png)
<!--ID: 1746599653760-->
END

---

### Merge Sort


START
FIT-Card

Jaké vlastnosti má MergeSort? (3)

Back:

- **Datově necitlivý**
- **Out of place**
- **Stabilní**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250321134112.png)
<!-- DetailInfoEnd -->

Tags: otazka15
<!--ID: 1746599653597-->
END

---

START
FIT-Card

Jak vypadá učebnicová verze Merge Sortu? (SUV)

Back:

Máme pole $A$ délky $n$

**mergesort**
- Inicializuje pole $B[n]$ na hodnoty $A$čka
- sputí `mergesort_rec(B,0,n,A);`

**mergesort_rec**
- konec rekurze `if((hi-lo) <2) return;`
- spočtení prostředku `long middle = (hi+lo)/2`
- zavolání na levou část `mergesort_rec(A, lo, middle, B)`
- zavolání na levou část `mergesort_rec(A, middle, hi, B)`
- merge `merge(B, lo, middle, hi, A)`

**merge** (2-cestné slučování)
- `i = lo; j = middle`
- iterujeme $k$ mezi `lo..hi`
	- Vždy přiřazujeme jako první menší prvek
	- 1) Přiřazení prvku z první části (pokud jsme vyplýtvali pravé pole nebo je prvek menší):
	- `if((i<middle) && ((j >= hi) || (B[i] <= B[j]))) A[k] = B[i++];`
	- `else A[k] = B[j++];`

![](../../Assets/Pasted%20image%2020250321135717.png)

Tags: otazka15
<!--ID: 1746599653768-->
END

---


START
FIT-Card

Jak vypadá **přímočará (naivní) paralelizace merge sortu**? (PUV)

Back:

Uvnitř **mergesort**
- Před cykly `#pragma omp parallel`
- Před for `#pragma omp for`
- Před `mergesort_rec` dáme `#pragma omp single`

Uvnitř **mergesort_rec**:
- Před `mergesort_rec` dáme `#pragma omp task`
- Před `seq_merge` dáme `#pragma omp taskwait`

![](../../Assets/Pasted%20image%2020250321135735.png)

Tags: otazka15
<!--ID: 1746599653777-->
END

---


START
FIT-Card

Proč u MergeSortu nefunguje **naivní funkční paralelizace**?

Back:

- `taskwait` čeká na podvlákna a těžká práce je až za tím
- **vytváří se obří množství tasků**, které v listech slučují **dvouprvková pole**
- **obrovské falešné sdílení**

Kvůli tomu je to **násobně pomalejší** (třeba 14 krát) než vůbec **sekvenční verze**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250321135825.png)
<!-- DetailInfoEnd -->

Tags: otazka15
<!--ID: 1749235012461-->
END

---


START
FIT-Card

Jaké je srovnání QuickSortu a MergeSortu a jejich verzí?

Back:

![](../../Assets/Pasted%20image%2020250321135825.png)
<!--ID: 1746599653784-->
END

---


START
FIT-Card

Jak funguje obecně QuickSort PUV?

Back:

![](../../Assets/Pasted%20image%2020250321135845.png)
<!--ID: 1746599653794-->
END

---


START
FIT-Card

Jak funguje obecně MergeSort PUV?

Back:

![](../../Assets/Pasted%20image%2020250321135857.png)
<!--ID: 1746599653802-->
END

---


START
FIT-Card

Co je důsledek toho jak funguje QuickSort a MergeSort?

Back:

![](../../Assets/Pasted%20image%2020250321135913.png)
<!--ID: 1746599653810-->
END

---


START
FIT-Card

Jaké jsou 3 možnosti zlepšení paralelního MergeSortu?

Back:

- **zavedením prahu** (stejně jako u quicksortu)
- **vytvářením nové úlohy jen pro levou polovinu** ("rozděl a půlku si nech")
- **paralelizací algoritmu dvoucestného slučování** (viz dále)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250321135945.png)
<!-- DetailInfoEnd -->

Tags: otazka15
<!--ID: 1746599653817-->
END

---


START
FIT-Card

Jak funguje MergeSort s metodou "**Prahování a Rozděl-a-PůlkuSiNech**"?

Back:

Prahování - Místo původní koncové podmínky dáme:
- `if((hi-lo) < threshold)`
	- `seq_mergesort_Rec(B, lo, hi,A)`
	- `return`

Rozděl a půlku si nech:
- `#pragma omp task` dáme pouze před levý `par_merge_sort_rec`

![](../../Assets/Pasted%20image%2020250321140019.png)
Tags: otazka15
<!--ID: 1746599653827-->
END

---


START
FIT-Card

Jaké je srovnání PUV+ST a PUV merge sortu?

Back:

![](../../Assets/Pasted%20image%2020250321140042.png)
<!--ID: 1746599653835-->
END

---


START
FIT-Card

Jak se dá u merge sortu paralelizovat operace `seq_merge`?

Back:

![](../../Assets/Pasted%20image%2020250321140112.png)
<!--ID: 1746599653843-->
END

---


START
FIT-Card

Jak funguje paralelizace algoritmu **2-cestného** slučování u MergeSortu? 

Back:

todo přepsat tak, aby mi to dávalo smysl

1. slučovaná seřazená pole $C, D$ délky $n/2$ si představme jako řádkové a sloupcové indexy matice, v níž jsou jedničky tam, kde sloupcový index $>$ řádkový, jinde nuly
2. všechny jedničky jsou v pravém horním rohu, od nul je dělí lomená čára (na obrázku tlustá modrá)
3. každé vlákno si najde svůj průsečík této lomené čáry s $p-1$ vedlejšími diagonálami matice (binárním dělením v čase $O(\log n)$) rozmístěnými ve vzdálenosti $n/2p$ od sebe
4. průsečíky promítneme (horizontálně/vertikálně) na strany matice a podle toho rozkouskujeme $C$ i $D$ na $p$ částí (označených např. $C_1$ až $C_p$ resp. $D_1$ až $D_p$)
5. $i$-té vlákno sekvenčně mergne $C_i$ a $D_i$, čímž vznikne $X_i$
6. zřetězme $X_1 \dots X_p$ → máme seřazené pole

![](../../Assets/Pasted%20image%2020250606202744.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250321140150.png)
![](../../Assets/Pasted%20image%2020250321140158.png)
![](../../Assets/Pasted%20image%2020250321140204.png)
<!-- DetailInfoEnd -->

Tags: otazka15
<!--ID: 1746599653850-->
END

---


START
FIT-Card

Jaká je u paralelního 2-cestného slučování merge sortu složitost najití vlastního průsečíku? Jakým algoritmem se to hledá?

Back:

Alogirmem **binární dělení**:
$$O(\log n)$$
Tags: otazka15
<!--ID: 1749286664601-->
END

---



START
FIT-Card

Jak funguje **merge sort** s $p$-cestným paralelním slučováním? (obecná myšlenka)

Back:

**Myšlenka:**
1. Rozsekáme vstupní pole na $n/p$ stejně velkých částí $S_1 \dots S_p$
2. Každé vlákno sekvenčně seřadí svoji část $S_i$ ($O(\frac n p \log \frac n p)$)
3. Potom začne $p$-cestné slučování

**p-cestné slučování**
Funguje podobně jako 2-cestné, ale obecněji:
1. Každé vlákno si najde **pole rozdělovačů** pomocí `Splitters_by_Rank(S, my_id*n/p)`
2. Na základě rozdělovačů si do pomocného pole (v `my_tuple[my_id]`) nahraje úseky z $S_0 \dots S_1$ (na obrázku jsou úseky označeny $\tau_i$)
3. Do pole $B$ pak na danou pozici nahraje sekvenčně mergnuté pomocné pole (merge je jako normální, ale nemergujou se 2 pole, ale p polí)

![](../../Assets/Pasted%20image%2020250606203342.png)

<!-- DetailInfoStart -->
4. Každé vlákno si stejně jako u 2-cestného najde **rozdělovač** (tam to byly ty průsečíky s lomennou čárou), který mi v každém poli $S_1 \dots S_p$ označí část $\tau_i$, kterou bude $i$-té vlákno zpracovávat. Zde bude rozdělovač **vektor** bodů v poli(to jsou jakoby průměty toho rozdělovače do těch částí pole). To najde funkce `Splitters_by_Rank(S,my_id*n/p)`.
	- Tyto části $\tau_i$ jsou pro každé vlákno **stejně velké**.
	- Pro všechny prvky $\tau_i$ platí, že jsou menší než $\tau_{i-1}$ (díky tomu až slijeme pole tak bude opět seřazené)
5. Každé vlákno pak sekvenčně sloučí všechny svoje části v $\tau_i$
6. Tyto části pak dáme za sebe a získáme seřazené pole

Podrobnější vysvětlení:
1. vstupní pole se rozřezá na pravidelné $p$-tiny
2. každé vlákno sekvenčně seřadí svoji $p$-tinu ($O(\frac n p \log \frac n p)$)
3. každé vlákno vypočítá svůj vektor rozdělovačů (jeden rozdělovač v každé seřazené $p$-tině) pomocí $\log n$ provedení $p$ instancí binárního vyhledávání ($O(p \log \frac n p \log n)$), funkce `Splitters_by_Rank(S,my_id*n/p)`
4. každé vlákno si z každé $p$-tiny vyřízne jeden úsek mezi svým a sousedním rozdělovačem
5. každé vlákno $p$-cestně sloučí svých $p$ úseků do vyhrazené části výstupu ($O(\frac n p \log p)$)
- pro malá $p$ a velká $n$ složitostně dominuje krok 2 → celková složitost je $O(\frac n p \log \frac n p)$
- na konci kroků 2 a 3 na sebe musí vlákna počkat (`barrier`)

![](../../Assets/Pasted%20image%2020250321140228.png)
![](../../Assets/Pasted%20image%2020250321140233.png)
![](../../Assets/Pasted%20image%2020250321140238.png)
<!-- DetailInfoEnd -->

Tags: otazka16
<!--ID: 1746599653860-->
END

---


START
FIT-Card

Jaká je složitost u paralelního p-cestného MergeSortu?

Back:

- Každé vlákno seřadí svoje pole $(O(\frac n p \log \frac n p))$
- Každé vlákno provede SplittersByRank $O(p \log \frac n p \log n)$
- Každé vlákno p-cestně sloučí výsledná pole $O(\frac n p \log p)$

$$T(n,p) = O\left( \frac n p \log \frac n p + p \log \frac n p \log n + \frac n p \log p \right)$$

Pro malá $p$ a velká $n$ dominuje úvodní seřazení a celková složitost je $O(\frac n p \log \frac n p)$

Tags: otazka16
<!--ID: 1749235012473-->
END

---


START
FIT-Card

Jak funguje **merge sort** s $p$-cestným paralelním slučováním? (konkrétní implementace)

Back:

Vstup: pole $A$, délka $n$

Implementace:
1. Alokujeme `B[n]`, `splitters[p][p]`, `my_tuple[p][n/p]`, `S[p][n/p]`
2. `#pragma omp parallel`
3. Získáme $S_i$ `S[my_id] = A[my_id*n/p .. (my_id+1)*n/p-1]`
4.  Sekvenčně sesortíme `S[my_id]`
5. `#pragma omp barrier`
6. Získáme splitters `splitters[my_id] = Splitters_By_Rank(S, my_id*n/p)`
7. `#pragma omp barrier`
8. `my_tuple[my_id]` přiřadíme subarrays
9. Na každý `my_tuple` se provede sekvenční $p$-cestný merge

![](../../Assets/Pasted%20image%2020250321140737.png)
![](../../Assets/Pasted%20image%2020250321140742.png)
![](../../Assets/Pasted%20image%2020250321140747.png)

Tags: otazka16
<!--ID: 1746599653868-->
END

---


START
FIT-Card

Jak u $p$-cestného MergeSortu funguje `Splitters_by_Rank`?

Back:

Vstup:
- celé seřazené sdílené pole $A$
- rank - index, kde začíná úsek $S_i$ v seřazeném poli
	- `rank = my_id*n/p`

Výstup:
- vektor $p$ rozdělovačů, kde počet prvků nalevo od nich je přesně rovno `rank`

Implementace:
1. Pole $L[p],R[p]$
2. **Inicializace** - Iterujeme $i$ mezi $0\dots p$
	1. `L[i]=0; R[i]=n/p-1`
		- Tzn. všechny `L[i]` nastavíme na nulu, všechny `R[i]` na konec té části pole $S_i$
3. `while exists i: L[i] < R[i]` (tzn. je tam ještě nějaký prostor nejistoty)
	1. $v$ = random pivot (elemet) v momentálním ohraničení $L[i] \dots R[i]$
	2. vždy zužuju
	3. `for` - pro každou sekci $S_i$
		- V každé sekci $S_i$ najdeme místo, kde jsou čísla menší než pivot a napravo větší nebo rovno než pivot. To uložíme do `m[i]`
		- Tato čísla `m[i]` spočítám pro všechny $S_i$ a sečtu je. Součet porovnám s `rank`.
		- Když je to větší než `rank`, tak nastavim `R[i] = m[i]`
		- Když je to menší než `rank`, tak nastavim `L[i] = m[i]`
		- Díky tomu posouvám takhle ty hranice dokud nedosáhnu přesně toho ranku.
- Vrátím vektor splitterů `L[0],...,L[p-1]`

![](../../Assets/Pasted%20image%2020250606203608.png)
![](../../Assets/Pasted%20image%2020250606203615.png)

Tags: otazka16
<!--ID: 1749235012476-->
END

---


START
FIT-Card

Jaké je srovnání Merge sort implementací?

Back:

![](../../Assets/Pasted%20image%2020250321140811.png)
<!--ID: 1746599653876-->
END

---

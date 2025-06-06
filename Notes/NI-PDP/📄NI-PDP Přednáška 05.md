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

Jaké vlastnosti má MergeSort?

Back:

![](../../Assets/Pasted%20image%2020250321134112.png)
Tags: otazka15
<!--ID: 1746599653597-->
END

---

START
FIT-Card

Jak vypadá učebnicová verze Merge Sortu? (SUV)

Back:

todo napsat si nějaký shrnutí

![](../../Assets/Pasted%20image%2020250321135717.png)

Tags: otazka15
<!--ID: 1746599653768-->
END

---


START
FIT-Card

Jak vypadá přímočará paralelizace merge sortu? (PUV)

Back:

![](../../Assets/Pasted%20image%2020250321135735.png)

Tags: otazka15
<!--ID: 1746599653777-->
END

---


START
FIT-Card

Proč u MergeSortu nefunguje naivní funkční paralelizace narozdíl od QuickSortu?

Back:

protože těžká práce (slučování) je až za rekurzivním voláním → v listech rekurze vzniká strašně moc OpenMP úloh, které slučují dvouprvková pole → obří falešné sdílení → násobné zpomalení proti sekvenční verzi

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

Todo vysvětlit vlastními slovy

Toto kombinuje prahování a rozděl a půlku si nech

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
2. všechny jedničky jsou v pravém horním rohu, od nul je dělí lomená čára
3. každé vlákno si najde svůj průsečík této lomené čáry s $p-1$ vedlejšími diagonálami matice rozmístěnými ve vzdálenosti $n/2p$ od sebe (v čase $O(\log n)$)
4. podle těchto průsečíků rozkouskujme $C$ i $D$ na $p$ částí (označených např. $C_1$ až $C_p$)
5. $i$-té vlákno sekvenčně sloučí $C_i$ a $D_i$, čímž vznikne $X_i$
6. zřetězme $X_1 \dots X_p$ → máme seřazené pole

- Ta matice je virtuální - reálně ji nekonstruujeme
- Je tam 0, když ten prvek nahoře je menší, je tam 1 když ten prvek nahoře je větší
- Potřebujeme spočítat nějaké oddělovače, kde:
	- každé vlákno dostane stejné množství čísel ke slučování
	- první vlákno dostane první chunk, druhé vlákno druhý atd.
- Každé vlákno si spočte svůj oddělovač
	- Každé vlákno si spočítá, kde jeho vedlejší diagonála (ty červený) protíná tu modrou čáru
- Potom mě zajímají místa, kde se 0 mění na 1 v té matici
- Jelikož jsou diagonály ekvidistantní (mají mezi sebou stejnou vzdálenost), je mezi nimi stejný počet průsečíků modré čáry

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

Jak funguje **slučování v merge sortu pomocí paralelního** **p-cestného** slučování?

Back:

- Myšlenka je rozdělit vstup do $n/p$ částí - každá pro jedno vlákno
- Každé vlákno si to pak sesortí a pak se řeší "slévání" těch sesortěných polí (prostě "máme zapomenout, jak funguje normální merge sort a přemýšlet o tom takhle")

Podrobnější:
1. vstupní pole se rozřezá na pravidelné $p$-tiny
2. každé vlákno sekvenčně seřadí svoji $p$-tinu ($O(\frac n p \log \frac n p)$)
3. každé vlákno vypočítá svůj vektor rozdělovačů (jeden rozdělovač v každé seřazené $p$-tině) pomocí $\log n$ provedení $p$ instancí binárního vyhledávání ($O(p \log \frac n p \log n)$), funkce `Splitters_by_Rank(S,my_id*n/p)`
4. každé vlákno si z každé $p$-tiny vyřízne jeden úsek mezi svým a sousedním rozdělovačem
5. každé vlákno $p$-cestně sloučí svých $p$ úseků do vyhrazené části výstupu ($O(\frac n p \log p)$)
- pro malá $p$ a velká $n$ složitostně dominuje krok 2 → celková složitost je $O(\frac n p \log \frac n p)$
- na konci kroků 2 a 3 na sebe musí vlákna počkat (`barrier`)

![](../../Assets/Pasted%20image%2020250606203342.png)

<!-- DetailInfoStart -->

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

$$O(\frac n p \log \frac n p)$$

Tags: otazka16
<!--ID: 1749235012473-->
END

---


START
FIT-Card

Jak vypadá p-cestné PMWMS merge sort?

Back:

todo sepsat vlastními slovy

![](../../Assets/Pasted%20image%2020250321140737.png)
![](../../Assets/Pasted%20image%2020250321140742.png)
![](../../Assets/Pasted%20image%2020250321140747.png)

Tags: otazka16
<!--ID: 1746599653868-->
END

---


START
FIT-Card

Jak u p-cestného MergeSortu funguje `Splitters_by_Rank`?

Back:

todo napsat vlastními slovy

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

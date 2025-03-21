---
created: 2025-03-21T13:40:42
title: "Paralelní řazení v OpenMP"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska05 status-toReview


START
FIT-Card

Jaké vlastnosti má QuickSort?

Back:

![](../../Assets/Pasted%20image%2020250321134058.png)

END

---


START
FIT-Card

Jaké vlastnosti má MergeSort?

Back:

![](../../Assets/Pasted%20image%2020250321134112.png)

END

---


START
FIT-Card

Jak vypadá sekvenční verze QuickSortu?

Back:

![](../../Assets/Pasted%20image%2020250321134512.png)

END

---


START
FIT-Card

Jak funguje Lomutova varianta partitioningu v QuickSortu?

Back:

![](../../Assets/Pasted%20image%2020250321134544.png)

![](../../Assets/Pasted%20image%2020250321134556.png)

END

---


START
FIT-Card

Jak se dá paralelizovat quicksort?

Back:

Pomocí funkčního paralelismu
![](../../Assets/Pasted%20image%2020250321134624.png)

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

END

---


START
FIT-Card

Jaké je srovnání SGNU, PGNU, SUV, PUV?

Back:

![](../../Assets/Pasted%20image%2020250321134817.png)

END

---


START
FIT-Card

Proč je PUV výrazně pomalejší než PGNU?

Back:

![](../../Assets/Pasted%20image%2020250321134849.png)

END

---


START
FIT-Card

Jak se dá PUV zlepšit? (3)

Back:

![](../../Assets/Pasted%20image%2020250321134900.png)

- Koncová rekurze - je to "zadarmo", stačí jen přeuspořádat kód
- Zavedení prahu - ke konci rekurze nemá cenu to počítat rekurzivně

END

---


START
FIT-Card

Jak funguje Tail call optimization (TCO) u quicksortu?

Back:

![](../../Assets/Pasted%20image%2020250321134952.png)

END

---


START
FIT-Card

Jak funguje Prahování task paralelismu (ST) u quicksortu?

Back:

![](../../Assets/Pasted%20image%2020250321135010.png)
![](../../Assets/Pasted%20image%2020250321135017.png)

END

---


START
FIT-Card

Jak funguje Paralelizované rozdělování u quicksortu?

Back:

![](../../Assets/Pasted%20image%2020250321135035.png)

END

---


START
FIT-Card

Jak vypadá Hoareova varianta quicksortu (partitioningu)?

Back:

![](../../Assets/Pasted%20image%2020250321135059.png)
![](../../Assets/Pasted%20image%2020250321135107.png)

END

---


START
FIT-Card

Jak se dá optimalizovat quicksort optimalizací pořadí vyhodnocení podmínek?

(tohle je v optimalizaci trochu detail)

Back:

![](../../Assets/Pasted%20image%2020250321135205.png)

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

END

---


START
FIT-Card

Proč je algoritmus par_partition_2 neefektivní?

Back:

Protože se tam furt lockují ty globální proměnné - volají se stovky atomic capute. Ta režie je obří.

Když už si nějaké vlákno "vysoutěží" přístup k té sdílené paměti, tak jim nedáme jeden prvek, ale rovnou $K$ prvků, ať může chvíli pracovat a nejde zase do té paměti.

![](../../Assets/Pasted%20image%2020250321135415.png)

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


END

---


START
FIT-Card

Jak se u paralelního QuickSortu vybírá pivot?

Back:

![](../../Assets/Pasted%20image%2020250321135529.png)

END

---


START
FIT-Card

Jak se u paralelního quicksortu dělá vyvažování?

Back:

![](../../Assets/Pasted%20image%2020250321135542.png)

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


END

---


START
FIT-Card

Jaké je srovnání QuickSort implementací?

Back:

![](../../Assets/Pasted%20image%2020250321135653.png)

END

---

### Merge Sort


START
FIT-Card

Jak vypadá učebnicová verze Merge Sortu? (SUV)

Back:

![](../../Assets/Pasted%20image%2020250321135717.png)

END

---


START
FIT-Card

Jak vypadá přímočará paralelizace merge sortu? (PUV)

Back:

![](../../Assets/Pasted%20image%2020250321135735.png)

END

---


START
FIT-Card

Jaké je srovnání QuickSortu a MergeSortu a jejich verzí?

Back:

![](../../Assets/Pasted%20image%2020250321135825.png)

END

---


START
FIT-Card

Jak funguje obecně QuickSort PUV?

Back:

![](../../Assets/Pasted%20image%2020250321135845.png)

END

---


START
FIT-Card

Jak funguje obecně MergeSort PUV?

Back:

![](../../Assets/Pasted%20image%2020250321135857.png)

END

---


START
FIT-Card

Co je důsledek toho jak funguje QuickSort a MergeSort?

Back:

![](../../Assets/Pasted%20image%2020250321135913.png)

END

---


START
FIT-Card

Jaké jsou 3 možnosti zlepšení paralelního MergeSortu?

Back:

![](../../Assets/Pasted%20image%2020250321135945.png)

END

---


START
FIT-Card

Jak funguje MergeSort s metodou "Prahování a Rozděl-a-PůlkuSiNech"? (PUV+ST)

Back:

![](../../Assets/Pasted%20image%2020250321140019.png)

END

---


START
FIT-Card

Jaké je srovnání PUV+ST a PUV merge sortu?

Back:

![](../../Assets/Pasted%20image%2020250321140042.png)

END

---


START
FIT-Card

Jak se dá u merge sortu paralelizovat operace `seq_merge`?

Back:

![](../../Assets/Pasted%20image%2020250321140112.png)

END

---


START
FIT-Card

Jak funguje slučování v merge sortu pomocí paralelního **2-cestného** slučování? 

Back:

- Ta matice je virtuální - reálně ji nekonstruujeme
- Je tam 0, když ten prvek nahoře je menší, je tam 1 když ten prvek nahoře je větší
- Potřebujeme spočítat nějaké oddělovače, kde:
	- každé vlákno dostane stejné množství čísel ke slučování
	- první vlákno dostane první chunk, druhé vlákno druhý atd.
- Každé vlákno si spočte svůj oddělovač
	- Každé vlákno si spočítá, kde jeho vedlejší diagonála (ty červený) protíná tu modrou čáru
- Potom mě zajímají místa, kde se 0 mění na 1 v té matici
- Jelikož jsou diagonály ekvidistantní (mají mezi sebou stejnou vzdálenost), je mezi nimi stejný počet průsečíků modré čáry

![](../../Assets/Pasted%20image%2020250321140150.png)
![](../../Assets/Pasted%20image%2020250321140158.png)
![](../../Assets/Pasted%20image%2020250321140204.png)

END

---


START
FIT-Card

Jak funguje slučování v merge sortu pomocí paralelního **p-cestného** slučování?

Back:

- Myšlenka je rozdělit vstup do $n/p$ částí - každá pro jedno vlákno
- Každé vlákno si to pak sesortí a pak se řeší "slévání" těch sesortěných polí (prostě "máme zapomenout, jak funguje normální merge sort a přemýšlet o tom takhle")

![](../../Assets/Pasted%20image%2020250321140228.png)
![](../../Assets/Pasted%20image%2020250321140233.png)
![](../../Assets/Pasted%20image%2020250321140238.png)
1. Nahoře je vstup
2. Potom si to každé vlákno seřadí
3. ???
4. Profit

Ehm na přednášce to vysvětlil dost rychle, takže jsem to nestihnul popsat vlastními slovy :D 

END

---


START
FIT-Card

Jak vypadá p-cestné PMWMS merge sort?

Back:

![](../../Assets/Pasted%20image%2020250321140737.png)
![](../../Assets/Pasted%20image%2020250321140742.png)
![](../../Assets/Pasted%20image%2020250321140747.png)


END

---


START
FIT-Card

Jaké je srovnání Merge sort implementací?

Back:

![](../../Assets/Pasted%20image%2020250321140811.png)

END

---

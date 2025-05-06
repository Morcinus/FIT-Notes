---
created: 2025-02-27T09:17:14
title: Úvod do OpenMP
up:
  - "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska02 status-toReview


START
FIT-Card

Co je OpenMP?

Back:

Knihovna pro paralelní programování. Je to jakby vyšší úroveň nad pthreads (která je v Cčku)
<!--ID: 1746518365423-->
END

---


START
FIT-Card

Na jakém principu funguje OpenMP?

Back:

**Fork join model**
- Vždy se task rozdělí (forkne) do více jobů, ty se přiřadí vláknům.
- Potom se to joinne zpátky

![](../../Assets/Pasted%20image%2020250227095821.png)
<!--ID: 1746518365425-->
END

---

START
FIT-Card

Mažou se vlánka v OpenMP?

Back:

Ne, vlákna jsou uložena v thread poolu a jen se jim přiřazují tasky.

<!-- ExplanationStart -->
Mazání a vytváření vláken by trvalo moc dlouho.
<!-- ExplanationEnd -->
<!--ID: 1746518365428-->
END

---


START
FIT-Card

Jaký přepínač je potřeba pro vygenerování vícevláknového kódu pomocí OpenMP?

Back:

Pro gcc překladač
`-f openmp`
<!--ID: 1746518365431-->
END

---


START
FIT-Card

Jaká je hlavička, kterou musím includnout pro použití OpenMP?

Back:

```
#include <omp.h>
```
<!--ID: 1746518365433-->
END

---


START
FIT-Card

Co je model sdílené paměti s **volnější konzistencí**?

Back:

Není striktně zajištěno, že to co vidí každé vlákno je stejně viděno i ostatními vlákny.

Abych to zajistil, musím si to nějak synchronizovat.
<!--ID: 1746518365436-->
END

---


START
FIT-Card

Jak v OpenMP vypadá direktiva?

Back:

```
#pragma omp direktiva klauzule1 klauzule2
```
<!--ID: 1746518365439-->
END

---


START
FIT-Card

Jak v OpenMP funguje `paralell`?

Back:

![](../../Assets/Pasted%20image%2020250227100625.png)

1. Vytvoří množinu vláken, která jde do dalšího kódu současně. 
2. Na konci bloku je skrytá **bariéra**.
3. Jakmile všechna vlákna dosáhnou bariéry, pokračuje se v původním vláknu. Ostatní vlákna se nesmažou, ale stanou se neaktivníma a čekají na práci (thread pool).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227100716.png)
![](../../Assets/Pasted%20image%2020250227100758.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365442-->
END

---


START
FIT-Card

Jak funguje klauzule `shared(seznam)`?

Back:

- Proměnná existuje před danou oblastí kódu. 
- Proměnná je stále sdílena mezi všemi vlákny
- Když ji vlákno přepíše, změnu vidí všechna ostatní vlákna

Programátor tedy musí zajistit ošetření konfliktů

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227101235.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365445-->
END

---


START
FIT-Card

Jak funguje klauzule `private(seznam)`?

Back:

- Proměnná před blokem se nakopíruje instance pro každé vlákno.
- Když skončí vlákno, instance zmizí

Tedy funguje to jako když předávám funkci parametry hodnotou.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227101244.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365447-->
END

---


START
FIT-Card

Jak funguje klauzule `firstprivate(seznam)`?

Back:

Jako `private(seznam)`, ale umožňuje inicializovat počáteční hodnotu té instance.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227101251.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365450-->
END

---


START
FIT-Card

Jak funguje klauzule `default(shared|none)`?

Back:

- `default(shared)` - pokud jsem v direktivě nevyjmenoval proměnné, které existují před blokem, budou defaultně shared
- `default(none)` - pokud jsem v direktivě nevyjmenoval proměnné, které existují před blokem, nebudou defaultně sdílené
<!--ID: 1746518365452-->
END

---


START
FIT-Card

Když udělám klauzuli v OpenMP na ukazatel, aplikuje se na ukazatel nebo na ten objekt?

Back:

Aplikuje se pouze na ten ukazatel!
<!--ID: 1746518365455-->
END

---


START
FIT-Card

Co je klauzule `reduction(operator:seznam)` v OpenMP?

Back:

Po dokončení výpočtu se na proměnnou aplikuje daný operátor.

<!-- ExampleStart -->
Tady se po konci for cyklu sečtou všechny hodnoty result z všech podvláken.
![](../../Assets/Pasted%20image%2020250227101619.png)
<!-- ExampleEnd -->


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227101534.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365458-->
END

---


START
FIT-Card

Jaké jsou způsoby implementace paralelní redukce?

Back:

![](../../Assets/Pasted%20image%2020250227101927.png)
<!--ID: 1746518365460-->
END

---


START
FIT-Card

Jak funguje direktiva `threadprivate(seznam)`?

Back:

Je to jako `private(seznam)`, ale přežívá jednotlivé oblasti kódu (tzn. nezanikne po skončení daného bloku).

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250227102036.png)
<!-- ExampleEnd -->


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227102024.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365464-->
END

---


START
FIT-Card

Definice: **vlákno**

Back:

**Vlákno (Thread):** Entita provádění s vlastním zásobníkem a přidruženou statickou pamětí, nazývanou **threadprivate** paměť.
<!--ID: 1746518365467-->
END

---


START
FIT-Card

Definice: **Počáteční vlákno**

Back:

**Počáteční vlákno (Initial thread):** Vlákno, které začne vykonávat OpenMP program.
<!--ID: 1746518365469-->
END

---

START
FIT-Card

Definice: **Skupina soutěžících vláken (contention group)**

Back:

**Skupina soutěžících vláken (Contention group):** Počáteční vlákno a všechna jeho potomkovská vlákna.
<!--ID: 1746518365472-->
END

---


START
FIT-Card

Definice: **Aktuální tým (Current team)**

Back:

**Aktuální tým (Current team):** Všechna vlákna v týmu vykonávajícím nejvnitřnější obklopující paralelní oblast.
<!--ID: 1746518365475-->
END

---


START
FIT-Card

Definice: **Vláknově bezpečná rutina (Thread-safe routine)**

Back:

**Vláknově bezpečná rutina (Thread-safe routine):** Rutina, která vykonává zamýšlenou funkci i při současném vykonávání více vlákny.
<!--ID: 1746518365478-->
END

---


START
FIT-Card

Algoritmus: Jak se stanoví počet vláken pro paralelní oblast?

Back:

![](../../Assets/Pasted%20image%2020250227102451.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227102459.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365480-->
END

---


START
FIT-Card

Co jsou **řídící proměnné** v OpenMP?

Back:

Určují, jakým způsobem se chová systém (při vytváření vláken atd.)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227102702.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365483-->
END

---


START
FIT-Card

Jaké jsou řídící proměnné (4)?

Back:

- `dyn-var` - počet vláken v oblasti není striktně daný, ale může se měnit
- `nthreads-var` - kolik vláken chci, aby se spustilo v dané oblasti
- `thread-limit-var` - maximální počet vláken
- `max-active-levels-var` - maximální počet zanořených vláken

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227102713.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365486-->
END

---


START
FIT-Card

Algoritmus: stanovení počtu vláken v paralelní oblasti

(idk tohle snad asi nemusíme umět nazpaměť)

Back:

![](../../Assets/Pasted%20image%2020250227102909.png)
<!--ID: 1746518365489-->
END

---


START
FIT-Card

Jak funguje for cyklus v OpenMP?

Back:

![](../../Assets/Pasted%20image%2020250227103247.png)
<!--ID: 1746518365491-->
END

---


START
FIT-Card

Jaké jsou klauzule for cyklu v OpenMP?

Back:

- `schedule()` - upřesňuje způsob přiřazení iterací cyklu vláknům
- `collapse(i)` - pokud máme víceúrovňový cyklus
- `private(seznam) | firstprivate(seznam) | lastprivate(seznam) | shared(seznam) | reduction(operator:seznam)`
	- `lastprivate()` - hodnota bude rovna hodnotě proměnné v poslední iteraci cyklu
- `nowait` - pokud to tam nedám, tak všechna vlákna, co počítali for loop, budou čekat až do konce iteračního výpočtu. Nowait umožní vyskočit z těla toho cyklu a nečekat na ostatní
<!--ID: 1746518365494-->
END

---


START
FIT-Card

Jaké jsou typy plánování `schedule()` v OpenMP?

Back:

- **static** - každý dostane n/p iterací
- 

![](../../Assets/Pasted%20image%2020250227103712.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250227104119.png)
![](../../Assets/Pasted%20image%2020250227104125.png)
![](../../Assets/Pasted%20image%2020250227104130.png)
![](../../Assets/Pasted%20image%2020250227104136.png)
![](../../Assets/Pasted%20image%2020250227104140.png)
![](../../Assets/Pasted%20image%2020250227104146.png)
![](../../Assets/Pasted%20image%2020250227104157.png)
<!-- ExampleEnd -->
<!--ID: 1746518365497-->
END

---


START
FIT-Card

Jak se prakticky liší použití static, dynamic a guided schedule?

Back:

![](../../Assets/Pasted%20image%2020250227104511.png) 
<!--ID: 1746518365499-->
END

---


START
FIT-Card

Jaké jsou možnosti paralelizace víceúrovňových cyklů u **obdélníkových problémů** (= dva cykly)? (4)

Back:

- **Pouze vnějšího cyklu** - paralelizuje se vnější cyklus, vnitřní se provádí v každém vláknu jako kus kódu
- **Transformace** - vnitřní interval se pomocí `collapse(2)` transformuje na první úroveň a díky tomu jakoby vznikne jediný cyklus, který se pak paralelizuje
- **Paralelizace vnitřního cyklu** - skutečně se paralelizuje vnitřní cyklus
- **Paralelizace vnějšího i vnitřního cyklu** - paralelizují se oba

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250227104836.png)
![](../../Assets/Pasted%20image%2020250227104841.png)
<!-- ExampleEnd -->


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227104943.png)
![](../../Assets/Pasted%20image%2020250227104949.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365502-->
END

---


START
FIT-Card

Co z těchto paralelizací bude většinou nejlepší?

![](../../Assets/Pasted%20image%2020250227104836.png)
![](../../Assets/Pasted%20image%2020250227104841.png)

Back:

Typicky ta **(5)**, protože 6 a 7 jsou hendikepovaný bariérama.
<!--ID: 1746518365504-->
END

---


START
FIT-Card

Jaké jsou možnosti paralelizace víceúrovňových cyklů u **trojúhelníkových problémů** (=3 cykly)? (2)

Back:

Dvě možnosti paralelizace vnitřního cyklu:

![](../../Assets/Pasted%20image%2020250227105120.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227105218.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365507-->
END

---


START
FIT-Card

Jak se dá paralelizovat pomocí **task paralelismu**?

Back:

Rozdělím úlohu na podproblémy, které pak můžu paralelizovat.

Dělá se to jednoduše tak, že tam nacpu direktivu task.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227110308.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365509-->
END

---


START
FIT-Card

Jak funguje konstrukce task?

Back:

![](../../Assets/Pasted%20image%2020250227110328.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250227110340.png)
![](../../Assets/Pasted%20image%2020250227110347.png)
![](../../Assets/Pasted%20image%2020250227110357.png)
<!-- ExampleEnd -->
<!--ID: 1746518365512-->
END

---


START
FIT-Card

Jaké jsou základní OpenMP operace?

Back:

- `omp_get_num_procs()` - vrátí počet CPU jader, která jsou k dispozici pro OpenMP
- `omp_get_thread_num()` - vrátí index aktuálního vlákna
- `omp_get_num_threads()` - vrátí počet vláken v aktuální oblasti
- `omp_set_num_threads(int i)` - změní počet vytvořených vláken v následujících paralelních oblastech na hodnotu parametru $i$
- `omp_get_wtime()` - vrátí číslo, které udává uběhnutý čas od nějakého okamžiku v minulosti.
<!--ID: 1746518365515-->
END

---


START
FIT-Card

Jaké jsou hlavní synchronizační direktivy v OpenMP? (7)

Back:

![](../../Assets/Pasted%20image%2020250227110920.png)
<!--ID: 1746518365518-->
END

---


START
FIT-Card

Co je `#pragma omp barrier`?

Back:

![](../../Assets/Pasted%20image%2020250227110751.png)

Pozn. bariéry jsou normálně implicitně skryté.
<!--ID: 1746518365520-->
END

---


START
FIT-Card

Co je `#pragma omp single`?

Back:

![](../../Assets/Pasted%20image%2020250227110803.png)
<!--ID: 1746518365523-->
END

---


START
FIT-Card

Co je `#pragma omp master`?

Back:

![](../../Assets/Pasted%20image%2020250227110833.png)
<!--ID: 1746518365526-->
END

---


START
FIT-Card

Jak funguje direktiva atomic?

Back:

Atomická operace, která zajišťuje, že se provede read-modify-write, aniž by do toho kdokoliv jiný zasáhnul.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227111019.png)
![](../../Assets/Pasted%20image%2020250227111026.png)
![](../../Assets/Pasted%20image%2020250227111032.png)
![](../../Assets/Pasted%20image%2020250227111039.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365528-->
END

---


START
FIT-Card

Jaké jsou typy atomických operací? (4)

Back:

- **Atomické čtení**
- **Atomické psaní**
- **Atomický update** - to typicky člověk potřebuje
- **Atomický capture**
<!--ID: 1746518365531-->
END

---


START
FIT-Card

Jak funguje direktiva cancel?

Back:

"Jdete na houby a pokud narazíte na hřiba, jde se domů, protože nám stačí jeden hřib." - Tvrdík :D

![](../../Assets/Pasted%20image%2020250227111826.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250227111821.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365534-->
END

---


START
FIT-Card

Jak funguje direktiva eureka?

Back:

![](../../Assets/Pasted%20image%2020250227111839.png)
<!--ID: 1746518365537-->
END

---

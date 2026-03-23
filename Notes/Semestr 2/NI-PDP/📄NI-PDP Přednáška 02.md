---
created: 2025-02-27T09:17:14
title: Úvod do OpenMP
up:
  - "[[📖NI-PDP]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDP prednaska02 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Co je **OpenMP**?

Back:

OpenMP je high-level API pro programování vícevláknových aplikací nad sdílenou pamětí.

Tags: otazka05
<!--ID: 1746518365423-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Na jakém principu funguje OpenMP?

Back:

**Fork join model**

- V paralelní oblasti se vytvoří **tým paralelně běžících vláken**, které provádějí kód paralelní oblasti současně
- Potom se to joinne zpátky
- Pořád běží jedno **hlavní vlákno** sekvenčně

![](../../../Assets/Pasted%20image%2020250227095821.png)

Tags: otazka05
<!--ID: 1746518365425-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Mažou se vlánka v OpenMP?

Back:

Ne, vlákna jsou **uložena v thread poolu** a jen se jim přiřazují tasky.

<!-- ExplanationStart -->

Mazání a vytváření vláken by trvalo moc dlouho.

<!-- ExplanationEnd -->

Tags: otazka05
<!--ID: 1746518365428-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké typy paralelismu podporuje OpenMP? (2)

Back:

**data paralelismus** i **task paralelismus**

Tags: otazka05
<!--ID: 1749133110206-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je model sdílené paměti s **volnější konzistencí**? Jak lze vynutit synchronizaci?

Back:

- Vlákna si lokálně udržují (kešují) **kopie sdílených proměnných**
- Když do nich lokálně zapisují, nemusí nutně hned zapsat do sdílené paměti.
- Tzn. vlákna mohou dočasně vidět jinou hodnotu sdílené proměnné
- Můžu **vynutit synchronizaci** příkazem `flush()`

Tags: otazka05
<!--ID: 1746518365436-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký přepínač je potřeba pro vygenerování vícevláknového kódu pomocí OpenMP?

Back:

Pro gcc překladač
`-f openmp`

Tags: otazka05
<!--ID: 1746518365431-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká je hlavička, kterou musím includnout pro použití OpenMP?

Back:

```
#include <omp.h>
```

Tags: otazka05
<!--ID: 1746518365433-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakou syntax mají obecně direktivy v OpenMP?

Back:

```
#pragma omp direktiva klauzule1 klauzule2
```

Tags: otazka05
<!--ID: 1746518365439-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak v OpenMP funguje `paralell`? (syntax + jak funguje interně)

Back:

![](../../../Assets/Pasted%20image%2020250227100625.png)

1. Vytvoří **tým vláken**, která jde do dalšího kódu současně.
2. Na konci bloku je skrytá **bariéra**.
3. Jakmile všechna vlákna dosáhnou bariéry, pokračuje se v původním vláknu. Ostatní vlákna se nesmažou, ale stanou se neaktivníma a **zařadí se do thread poolu**.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227100716.png)
![](../../../Assets/Pasted%20image%2020250227100758.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365442-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje klauzule `shared(seznam)`?

Back:

- Proměnná existuje před danou oblastí kódu.
- Proměnná je stále sdílena mezi všemi vlákny
- Když ji vlákno přepíše, změnu vidí všechna ostatní vlákna

Programátor tedy musí zajistit ošetření konfliktů

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227101235.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365445-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje klauzule `private(seznam)`?

Back:

- Proměnná před blokem se **nakopíruje neinicalizovaná instance pro každé vlákno**.
- Když skončí vlákno, instance zmizí

Tedy funguje to jako když předávám funkci parametry hodnotou.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227101244.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365447-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje klauzule `firstprivate(seznam)`?

Back:

Jako `private(seznam)`, ale každému vláknu to inicializuje proměnnou s hodnotou původní proměnné.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227101251.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365450-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje klauzule `default(shared|none)`?

Back:

- `default(shared)` - pokud jsem v direktivě nevyjmenoval proměnné, které existují před blokem, budou defaultně shared
- `default(none)` - pokud jsem v direktivě nevyjmenoval proměnné, které existují před blokem, nebudou defaultně sdílené

Tags: otazka05
<!--ID: 1746518365452-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Když udělám klauzuli v OpenMP na ukazatel, aplikuje se na ukazatel nebo na ten objekt?

Back:

Aplikuje se pouze na ten ukazatel!

Tags: otazka05
<!--ID: 1746518365455-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je klauzule `reduction(operator:result)` v OpenMP?

Back:

Každá proměnná `result` se nakopíruje do každého vlákna jako **private**, inicializuje na $0$, na konci paralelní oblasti se na každou proměnnou aplikuje operátor a výsledek se uloží do původní proměnné.

Můžu takhle např. v cyklu sečíst všechny hodnoty result ze všech podvláken.

<!-- ExampleStart -->

Tady se po konci for cyklu sečtou všechny hodnoty result z všech podvláken.
![](../../../Assets/Pasted%20image%2020250227101619.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227101534.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365458-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou způsoby implementace paralelní redukce? (2)

Back:

- **Lineární** - vlákna zapíší lokální proměnné do sdíleného pole, po bariéře se vypočítá výsledek
- **Logaritmická** - v každém kroku **vyžaduje bariéru**

Proto OpenMP využívá hlavně lineární

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227101927.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365460-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje direktiva `threadprivate(proměnná)`?

Back:

Je to jako `private(proměnná)`, ale přežívá jednotlivé oblasti kódu - tzn. každé vlákno pak má tuto proměnnou i přes další paralelní oblasti.

Pomocí `copyin(proměnná)` se daná proměnná nastaví na hodnotu z hlavního vlákna. Je potřeba to udělat po zavolání `threadprivate`.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250227102036.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227102024.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365464-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je funkce `omp_get_num_threads()`?

Back:

Zjistí počet vláken v dané paralelní oblasti včetně hlavního vlákna.

Tags: otazka05
<!--ID: 1749135989759-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je direktiva `if(podminka)`?

Back:

Umožňuje spustit paralelní oblast pokud je splněna podmínka. Pokud není splněna, spustí se pouze v jednom vláknu.

Tags: otazka05
<!--ID: 1749135989779-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **vlákno**

Back:

**Vlákno (Thread):** Entita provádění s **vlastním zásobníkem** a přidruženou **statickou pamětí**, nazývanou threadprivate paměť.

Tags: otazka05
<!--ID: 1746518365467-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Počáteční vlákno**

Back:

**Počáteční vlákno (Initial thread):** Vlákno, které začne vykonávat OpenMP program.

Tags: otazka05
<!--ID: 1746518365469-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Skupina soutěžících vláken (contention group)**

Back:

**Skupina soutěžících vláken (Contention group):** Počáteční vlákno a všechna jeho potomkovská vlákna.

Tags: otazka05
<!--ID: 1746518365472-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Aktuální tým (Current team)**

Back:

**Aktuální tým (Current team):** Všechna vlákna v týmu vykonávajícím nejvnitřnější obklopující paralelní oblast.

Tags: otazka05
<!--ID: 1746518365475-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Vláknově bezpečná rutina (Thread-safe routine)**

Back:

**Vláknově bezpečná rutina (Thread-safe routine):** Rutina, která vykonává zamýšlenou funkci i při současném vykonávání více vlákny.

Tags: otazka05
<!--ID: 1746518365478-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Algoritmus: Jak se stanoví počet vláken pro paralelní oblast?

Back:

![](../../../Assets/Pasted%20image%2020250227102451.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227102459.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365480-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **řídící proměnné** (Internal Control Variables) v OpenMP?

Back:

Určují, jakým způsobem se chová OpenMP program (při vytváření vláken atd.)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227102702.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365483-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **řídící proměnné** v OpenMP? (4)

Back:

- `dyn-var` - počet vláken v oblasti není striktně daný, ale může se měnit
- `nthreads-var` - kolik vláken chci, aby se spustilo v dané oblasti
- `thread-limit-var` - maximální počet vláken
- `max-active-levels-var` - maximální počet zanořených vláken

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227102713.png)

<!-- DetailInfoEnd -->

Tags: otazka05
<!--ID: 1746518365486-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje for cyklus v OpenMP?

Back:

`#pragma omp for klauzule1, klauzule2,...`
(příp. `#pragma omp parallel for klauzule1, klauzule2,...`)

- Je to forma **datového (iteračního) paralelismu**
- Na konci cyklu je implicitní bariéra

Tags: otazka06
<!--ID: 1746518365491-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **klauzule for cyklu** v OpenMP? (5)

Back:

- `schedule()` - upřesňuje způsob přiřazení iterací cyklu vláknům
- `collapse(i)` - u víceúrovňového cyklu kolik vrstev cyklů má zkolabovat do jednovrstvého iterátoru
- `private(seznam) | firstprivate(seznam) | lastprivate(seznam) | shared(seznam) | reduction(operator:seznam)`
  - `lastprivate()` - hodnota bude rovna hodnotě proměnné v poslední iteraci cyklu
- `ordered` - iterace musí být vykonávány v sekvenčním pořadí
- `nowait` - pokud to tam nedám, tak všechna vlákna, co počítali for loop, budou čekat až do konce iteračního výpočtu. Nowait umožní vyskočit z těla toho cyklu a nečekat na ostatní

Tags: otazka06
<!--ID: 1746518365494-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy plánování `schedule(type, chunk_size)` v OpenMP? (5)

Back:

- **static** - každé vlákno staticky dostane `chunk_size` iterací. Pokud není definován, tak $n/p$ iterací.
- **dynamic** - dynamicky se přidělují `chunk_size` bloky cyklu. Pokud není definován, tak bloky velikosti $1$.
- **guided** - dynamicky bloky $x$ iterací, kde $x = \max(\lceil\textrm{\#nepřidělených iterací}/p\rceil,\text{chunk-size})$
- **runtime** - rozhodne se až při runtimu podle hodnoty systémové proměnné `OMP_SCHEDULE`
- **auto** - rozhodne kompilátor nebo běhové prostředí

“staticky” = všechno se rozdělí předem
“dynamicky” = jakmile vlákno dokončí přidělenou várku, dostane další

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227103712.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250227104119.png)
![](../../../Assets/Pasted%20image%2020250227104125.png)
![](../../../Assets/Pasted%20image%2020250227104130.png)
![](../../../Assets/Pasted%20image%2020250227104136.png)
![](../../../Assets/Pasted%20image%2020250227104140.png)
![](../../../Assets/Pasted%20image%2020250227104146.png)
![](../../../Assets/Pasted%20image%2020250227104157.png)

<!-- ExampleEnd -->

Tags: otazka06
<!--ID: 1746518365497-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se prakticky liší použití **static, dynamic a guided schedule**? Kdy jsou jaké výhodné?

Back:

- **static** - nízká režie, vhodné pokud každá iterace je podobně časově náročná
- **dynamic** - vyšší režie, dobré když jsou iterace různě časově náročné
- **guided** - vhodné pokud doba provádění iterací postupně roste

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227104511.png)

<!-- DetailInfoEnd -->

Tags: otazka06
<!--ID: 1746518365499-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou možnosti paralelizace víceúrovňových cyklů u **obdélníkových problémů** (= dva cykly)? (4)

Back:

- **Pouze vnějšího cyklu** - paralelizuje se vnější cyklus, vnitřní se provádí v každém vláknu jako kus kódu
- **Transformace** - vnitřní interval se pomocí `collapse(2)` transformuje na první úroveň a díky tomu jakoby vznikne jediný cyklus, který se pak paralelizuje
- **Paralelizace vnitřního cyklu** - skutečně se paralelizuje vnitřní cyklus
- **Paralelizace vnějšího i vnitřního cyklu** - paralelizují se oba

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250227104836.png)
![](../../../Assets/Pasted%20image%2020250227104841.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227104943.png)
![](../../../Assets/Pasted%20image%2020250227104949.png)

<!-- DetailInfoEnd -->

Tags: otazka06
<!--ID: 1746518365502-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co z těchto paralelizací bude většinou nejlepší?

![](../../../Assets/Pasted%20image%2020250227104836.png)
![](../../../Assets/Pasted%20image%2020250227104841.png)

Back:

Typicky ta **(5)**, protože 6 a 7 jsou hendikepovaný bariérama.

Tags: otazka06
<!--ID: 1746518365504-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou možnosti paralelizace víceúrovňových cyklů u **trojúhelníkových problémů** (=3 cykly)? (2)

Back:

Dvě možnosti paralelizace vnitřního cyklu:

![](../../../Assets/Pasted%20image%2020250227105120.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227105218.png)

<!-- DetailInfoEnd -->

Tags: otazka06
<!--ID: 1746518365507-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak v OpenMP funguje **task paralelismus** (funkční paralelismus)?

- Jaká je direktiva
- Co je úloha (3)
- Jak funguje přidělování úloh

Back:

`#pragma omp task`

- **úloha** (task) = ukazatel na kód + vstupní data + datová struktura, kam konzument (vlákno) vloží svoje ID
- Přidělování úloh funguje na principu **producent-konzument**
  - vlastnické vlákno (které narazí na direktivu) vygeneruje jako producent synovskou úlohu, vloží ji do task poolu, odtud si ji vyzvedne volné vlákno jako konzument a začne pracovat
  - vhodné i pro rekurzivní “rozděl a panuj” (ale nastartovat rekurzi musí jen jedno vlákno!)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227110308.png)

<!-- DetailInfoEnd -->

Tags: otazka07
<!--ID: 1746518365509-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké klauzule má `task` paralelismus v OpenMP? (4)

Back:

- `if(podminka)` - pokud je podmínka splněna, producent může synovskou úlohu sám provést nebo odložit do poolu, jinak ji sám sekvenčně provede (a svoji úlohu pozastaví)
- `default(shared|none)`, `private(seznam)`, `firstprivate(seznam)`, `shared(seznam)`,...
- `final(výraz)` → pokud $exp == true$, nebudou se generovat nové úlohy do poolu
- `priority(výraz)` → přiřadí synovské úloze prioritu

![](../../../Assets/Pasted%20image%2020250227110328.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250227110340.png)
![](../../../Assets/Pasted%20image%2020250227110347.png)
![](../../../Assets/Pasted%20image%2020250227110357.png)

<!-- ExampleEnd -->

Tags: otazka07
<!--ID: 1746518365512-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co dělá `#pragma omp taskwait`?

Back:

rodičovská úloha čeká na doběhnutí všech synů při task paralelismu

Tags: otazka07
<!--ID: 1749140734242-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou základní OpenMP operace? (3)

`omp_...()`

Back:

- `omp_get_num_procs()` - vrátí počet CPU jader, která jsou k dispozici pro OpenMP
- `omp_get_thread_num()` - vrátí index aktuálního vlákna
- `omp_get_num_threads()` - vrátí počet vláken v aktuální oblasti

Další které jsem se rozhodl nepamatovat:

- `omp_set_num_threads(int i)` - změní počet vytvořených vláken v následujících paralelních oblastech na hodnotu parametru $i$
- `omp_get_wtime()` - vrátí číslo, které udává uběhnutý čas od nějakého okamžiku v minulosti.

Tags: otazka07
<!--ID: 1746518365515-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou hlavní synchronizační direktivy v OpenMP? (7)

Back:

- `barrier`
- `master`
- `single`
- `critical`
- `atomic`
- `taskwait`
- `flush()`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227110920.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1746518365518-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je `#pragma omp barrier`?

Back:

Vlákna zde usnou a čekají na všechna ostatní

- implicitně na konci každé paralelní oblasti a single bloku

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227110751.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1746518365520-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je `#pragma omp single`?

Back:

Tento blok kódu provádí jen jedno (libovolné) vlákno, ostatní čekají na konci bloku

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227110803.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1746518365523-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je `#pragma omp master`?

Back:

Tento blok kódu provádí jen hlavní vlákno, ostatní skipnou a **okamžitě pokračují**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227110833.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1746518365526-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje direktiva `#pragma omp atomic`?

Back:

Atomická operace, která zajišťuje, že se provede **read-modify-write**, aniž by do toho kdokoliv jiný zasáhnul.

Např. inkrementace čítače.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227111019.png)
![](../../../Assets/Pasted%20image%2020250227111026.png)
![](../../../Assets/Pasted%20image%2020250227111032.png)
![](../../../Assets/Pasted%20image%2020250227111039.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1746518365528-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy atomických operací? Aneb na co lze aplikovat `atomic` (4)

Back:

Vždy to je `#pragma omp atomic [write|read|update|capture]`

- **Atomické čtení**
- **Atomické psaní**
- **Atomický update** - read, modify, write
- **Atomický capture** - read, modify, write s tím že navíc načtu starou hodnotu do lokální proměnné, kterou můžu po bloku využít

<!-- ExampleStart -->

```c++
// Capture
int my_variable;
#pragma omp atomic capture
{
    my_variable = global_index;
    global_index += 1;
}

// Update - nemůžu uložit do lokální proměnné
#pragma omp atomic update
global_index += 1;
```

<!-- ExampleEnd -->

Tags: otazka08
<!--ID: 1746518365531-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje direktiva `#pragma omp cancel`?

- k čemu je
- popiš podrobnější syntax

Back:

Předčasné opuštění paralelní oblasti - aka zastavení výpočtu ve všech vláknech.

`#pragma omp cancel [parallel | for | taskgroup] if [(vyraz)]`

- `[parallel | for | taskgroup]` říká co přesně má být ukončeno
- `if` - ukončení se provede pokud platí výraz

"Jdete na houby a pokud narazíte na hřiba, jde se domů, protože nám stačí jeden hřib." - Tvrdík :D

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250227111821.png)
![](../../../Assets/Pasted%20image%2020250605200523.png)

<!-- DetailInfoEnd -->

Tags: otazka08
<!--ID: 1746518365534-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kdy kontrolují ostatní vlákna jestli byl zavolán `cancel`? (3)

Back:

- Na bariérách
- Při direktivách cancel
- Ve stornovacích bodech (cancellation point)

Tags: otazka08
<!--ID: 1746518365537-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá přidat stornovací bod pro `cancel`?

Back:

`#pragma omp cancellation point for`

Zde se pak bude kontrolovat i při `for`

Tags: otazka08
<!--ID: 1749146750659-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje direktiva `flush()`?

Back:

Propsání aktuálních hodnot daných sdílených proměnných do sdílené paměti

Tags: otazka08
<!--ID: 1749146764895-->

END

---

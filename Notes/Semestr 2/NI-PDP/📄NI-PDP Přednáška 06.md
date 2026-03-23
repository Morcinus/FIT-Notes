---
created: 2025-03-30T10:10:58
title: "Úvod do MPI"
up: "[[📖NI-PDP]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDP prednaska06 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Definice: **MPI**

Back:

- **MPI** (_Message Passing Interface_) = systém pro zasílání zpráv mezi **procesy** aplikace
  - jen funkce, wrapper nad překladačem, speciální nástroje pro spuštění, komunikace zasíláním zpráv, všechny proměnné jsou privátní

![](../../../Assets/Pasted%20image%2020250330101300.png)

Tags: otazka17
<!--ID: 1746518365264-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší OpenMP a MPI?

Back:

V MPI jsou **knihovní funkce** a ne direktivy.

- **OpenMP** = API pro programování **vícevláknových** aplikací na **jednom uzlu**
  - direktivy a funkce, přepínač překladače, přímé spuštění, komunikace pomocí sdílené paměti, proměnné mohou být sdílené
- **MPI** (_Message Passing Interface_) = systém pro zasílání zpráv mezi **procesy** aplikace
  - jen funkce, wrapper nad překladačem, speciální nástroje pro spuštění, komunikace zasíláním zpráv, všechny proměnné jsou privátní

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330101553.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365267-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší překlad programů OpenMP a MPI?

Back:

V OpenMP je přímá podpora v překladačích pomocí přepínačů `g++ -fopenmp`
V MPI jsou wrappery překladačů `mpic++`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330101856.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365269-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší spouštění programu OpenMP a MPI?

Back:

Počet vláken OpenMP lze nastavit pomocí proměnné prostředí
Počet vláken MPI lze nastavit pomocí přepínačů

![](../../../Assets/Pasted%20image%2020250330101925.png)
<!--ID: 1746518365272-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší spouštění programu OpenMP a MPI?

Back:

- U OpenMP se spouští přímo přeložený program
- U MPI se používají speciální spouštěcí nástroje `mpirun`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330102814.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365275-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Na kolika jádrech lze maximálně pustit OpenMP vs MPI program? Kolik mají programy maximálně paměti?

Back:

![](../../../Assets/Pasted%20image%2020250330102935.png)

Tags: otazka17
<!--ID: 1746518365277-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší komunikace vláken v MPI a OpenMP?

Back:

OpenMP = mohou mít **sdílenou paměť**
MPI = komuinikují pomocí **zpráv**, všechny **proměnné jsou privátní**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103108.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365280-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou možnosti tvorby programů MPI+OpenMP? Je vhodné MPI+OpenMP kombinovat? (3)

Back:

- **Model pouze MPI** - na každém **jádru/CPU/uzlu** běží 1 nebo několik MPI procesů které se **nedělí** na vlákna.
- **Model MPI+OpenMP** - na každém **uzlu/CPU** běží 1 nebo několik MPI procesů, které se pomocí OpenMP dělí na vlákna, která běží na **jádrech**.
- **Hybrid** - 1 OpenMP vlákno na jádro dává u hodně aplikací lepší výkon než MPI model s 1 procesem na jádro.

dnešní clustery mají vícejádrová CPU → OpenMP a MPI je výhodné kombinovat

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103143.png)

<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365282-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká je typická architektura MPI programů? Jaký přístup je typicky lepší? (2)

Back:

- **1 MPI proces na výpočetní uzel** - proces se rozdělí na vlákna aby odpovídala počtu jader výpočetního uzlu
- **1 MPI proces na CPU** - proces se rozdělí na vlákna aby odpovídala počtu jader v CPU.

Druhý přístup má často lepší výkon, protože je lepší přístup k datům, protože vlákna sdílejí hlavní paměť.

![](../../../Assets/Pasted%20image%2020250330103159.png)

Tags: otazka17
<!--ID: 1746518365285-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby se dá nastavit míra spolupráce **MPI a OpenMP**? (4)

Back:

Pro spuštění spolupráce je třeba zavolat `MPI_Init_thread` a vybrat míru spolupráce:

- `MPI_THREAD_SINGLE` → žádné dělení na vlákna
- `MPI_THREAD_FUNNELED` → jen hlavní vlákno volá MPI (jednoportový model)
- `MPI_THREAD_SERIALIZED` → volání MPI je kritická sekce (jednoportový model)
- `MPI_THREAD_MULTIPLE` → všechna vlákna volají MPI bez omezení (všeportový model)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250330103220.png)
![](../../../Assets/Pasted%20image%2020250330103232.png)

<!-- ExampleEnd -->

Tags: otazka17
<!--ID: 1746518365287-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co dělá funkce `MPI_Init_thread`?

Back:

"Očuchá" systém a zjistí, co je k dispozici.

Tags: otazka17
<!--ID: 1746518365290-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá přeložit MPI+OpenMP program?

Back:

![](../../../Assets/Pasted%20image%2020250330103258.png)
<!--ID: 1746518365292-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou verze MPI?

Back:

![](../../../Assets/Pasted%20image%2020250330103318.png)
<!--ID: 1746518365295-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou skupiny procesů v MPI?

Back:

- Každý MPI proces spadá do aspoň jedné skupiny procesů
- Procesy v rámci skupiny jsou číslovány (`rank`) od 0
- Existuje skupina co obsauje všechny procesy
- Můžeme vytvářet nové skupiny

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103334.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365301-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou komunikátory v MPI? Co je intra a inter komunikátor? Jaký je default intra-komunikátor?

Back:

- Každá MPI funkce má jako parametr **komunikátor**
- Komunikátor je množina procesů, v rámci níž probíhá komunikace
- **Intra-komunikátor** je komunikátor asociovaný s konkrétní **skupinou procesů**
- `MPI_COMM_WORLD` je předdefinovaný intra komunikátor pro všechny procesy
- **Inter-komunikátor** asociovaný s dvěma skupinami, určuje komunikaci procesů mezi těmito skupinami

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103347.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365305-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Comm_rank`?

Back:

![](../../../Assets/Pasted%20image%2020250330103404.png)

```c++
int proc_num;
MPI_Comm_Rank(MPI_COMM_WORLD, &proc_num);
```

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250330103424.png)

<!-- ExampleEnd -->

Tags: otazka18
<!--ID: 1746518365308-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Comm_size`?

Back:

![](../../../Assets/Pasted%20image%2020250330103417.png)

```c++
int num_procs;
MPI_Comm_Size(MPI_COMM_WORLD, &num_procs);
```

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250330103424.png)

<!-- ExampleEnd -->

Tags: otazka18
<!--ID: 1746518365311-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší **2-bodové** vs **kolektivní komunikační** operace?

Back:

![](../../../Assets/Pasted%20image%2020250330103445.png)

Tags: otazka18
<!--ID: 1746518365314-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší **blokující** vs **neblokující** komunikační operace?

Back:

![](../../../Assets/Pasted%20image%2020250330103501.png)

Tags: otazka18
<!--ID: 1746518365317-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje základní **2-bodová komunikace** mezi procesy?

Back:

- Zdrojový proces volá `MPI_Send` kde určí cílový proces
- Cílový proces volá `MPI_Recv` kde určí zdrojový proces

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103533.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365319-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká je syntax funkce `MPI_Send`? (6 parametrů)

Back:

`MPI_Send(*buf, count, datatype, dest, tag, comm)`

- `buf` - ukazatel na data (proměnnou/pole)
- `count` - počet posílaných dat (1 pro proměnnou nebo počet prvků pole)
- `datatype` - datový typ `MPI_Datatype` (např. `MPI_INT`)
- `dest` - `rank` (číslo) cílového procesu v rámci komunikátoru
- `tag` - značka zprávy
- `comm` - komunikátor (např. `MPI_COMM_WORLD`)

pokud je count > 1, musí být všechny prvky za sebou a stejného typu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103551.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365322-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká se syntax funkce `MPI_Recv`? (7)

Back:

`MPI_Recv(*buf, count, datatype, source, tag, comm, *status)`

- `buf` - ukazatel na data kam se budou ukládat (proměnnou/pole)
- `count` - počet přijímaných dat (1 pro proměnnou nebo počet prvků pole)
- `datatype` - datový typ `MPI_Datatype` (např. `MPI_INT`)
- `source` - `rank` (číslo) cílového procesu v rámci komunikátoru (např. `MPI_ANY_SOURCE`)
- `tag` - značka zprávy (např. `MPI_ANY_TAG`)
- `comm` - komunikátor (např. `MPI_COMM_WORLD`)
- `status` - ukazatel na **stavový objekt**

pokud je count > 1, musí být všechny prvky za sebou a stejného typu

- `datatype` je typu `MPI_Datatype` (např. MPI_INT, lze vytvořit vlastní)
- `source` může být `MPI_ANY_SOURCE`, `tag` může být `MPI_ANY_TAG`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103609.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365325-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je přesně `MPI_Datatype`?

Back:

Specifikace datového typu přenášených hodnot.

MPI definuje pro základní datové typy: `MPI_CHAR`, `MPI_INT`, `MPI_UNSIGNED_LONG` apod.

Dají se vytvořit nové pro struktury pomocí `MPI_Type_create` (pro primitivní) nebo `MPI_Type_create_struct` (pro struct) atd.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103639.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365327-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá přenášet větší množství dat u 2 bodové komunikace?

Back:

Na místo:

- `*buf` dám ukazatel na pole
- `count` dám na počet prvků

Pozor, všechny prvky musí být stejného `MPI_Datatype`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103702.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365330-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak volají MPI funkce **zdrojový** a **cílový proces** u 2-bodové komunikace?

Back:

![](../../../Assets/Pasted%20image%2020250330103722.png)
<!--ID: 1746518365333-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují **značky přenášených dat**? (tag)

Back:

Odesílatel nastaví `tag` typicky na nějaký `int`.

Příjemce může přijmout zprávu konkrétního tagu (např. tag `0`) nebo libovolný tag `MPI_ANY_TAG`.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330103937.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365336-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Stavový objekt** v 2-bodové komunikaci? Co z něj můžem získat? Co když nás nezajímá?

Back:

Uděláme **stavový objekt** `MPI_Status status` a do `MPI_Recv` se passne `&status`.

Lze z něj získat:

- `status.MPI_SOURCE` - rank zdrojového procesu
- `status.MPI_TAG` - tag přijaté zprávy
- Pomocí funkce `MPI_Get_count(*status, datatype, *count)` počet přijatých prvků

Pokud mě status nezajímá, lze do `*status` předat `MPI_STATUS_IGNORE`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330104003.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365339-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Na co se dá využít dobře **stavový objekt**?

Back:

Příjemce zná maximální délku zprávy, ale může přijít kratší - on pak může délku zjistit po přijetí.

Potom může zmenšit dané pole, aby odpovídalo skutečným prvkům

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330104023.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365342-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá implementovat Master-Slave program v MPI?

Back:

![](../../../Assets/Pasted%20image%2020250330104057.png)
![](../../../Assets/Pasted%20image%2020250330104108.png)
![](../../../Assets/Pasted%20image%2020250330104118.png)
<!--ID: 1746518365345-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **komunikační módy** a jaké jsou komunikační módy blokujících operací? (4)

Back:

Komunikační mód určuje, kdy nastane návrat z blokující funkce.

- **standard mode** (`MPI_Send`) → po přijetí dat příjemcem nebo zkopírování do bufferu
  - MPI samo rozhodne mezi buffered a synchronous → lepší přenositelnost
- **buffered mode** (`MPI_Bsend`) → po zkopírování do bufferu
  - jako jediný je lokální operací (= návrat nezávisí na připravenosti příjemce)
- **synchronous mode** (`MPI_Ssend`) → po iniciaci přijetí dat příjemcem
- **ready mode** (`MPI_Rsend`) → jako `Send`, ale vrátí chybu, pokud příjemce nezavolal `MPI_Recv`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330104144.png)

<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365348-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kdo vybírá komunikační mód?

Back:

![](../../../Assets/Pasted%20image%2020250330104832.png)
<!--ID: 1746518365351-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **standardní mód**?

Back:

![](../../../Assets/Pasted%20image%2020250330104855.png)
<!--ID: 1746518365353-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Buffered mode**?

Back:

![](../../../Assets/Pasted%20image%2020250330104919.png)
<!--ID: 1746518365356-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Synchronous mode**?

Back:

![](../../../Assets/Pasted%20image%2020250330104930.png)
<!--ID: 1746518365358-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Ready mode**?

Back:

![](../../../Assets/Pasted%20image%2020250330104941.png)
<!--ID: 1746518365361-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Motivace pro standardní mód

Back:

![](../../../Assets/Pasted%20image%2020250330105001.png)
<!--ID: 1746518365364-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou blokující komunikační operace?

Back:

![](../../../Assets/Pasted%20image%2020250330105045.png)
<!--ID: 1746518365366-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **neblokující komunikační operace**? Jaká je jejich **výhoda** oproti **blokujícím**?

Back:

- **neblokující** = MPI funkce se vrátí hned po iniciaci operace, dokončení je nutné testovat
- **výhoda oproti blokujícím**: snižují riziko deadlocku, páry volání se mohou překrývat

Tags: otazka19
<!--ID: 1749237784654-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou neblokující komunikační operace? (5)

Back:

- `MPI_Isend`
- `MPI_Ibsend`
- `MPI_Issend`
- `MPI_Irsend`
- `MPI_Irecv`

![](../../../Assets/Pasted%20image%2020250330105101.png)

Tags: otazka19
<!--ID: 1746518365369-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je potřeba brát v potaz u **bufferu** při neblokujících MPI operacích?

Back:

**Buffer odesílaných dat** nelze po zavolání neblokující funkce **měnit**, dokud není **explicitně otestováno dokončení** dané operace.

**Buffer přijímaných dat** nelze po zavolání neblokující funkce **použít**, dokud není **explicitně otestováno dokončení** dané operace.

Tags: otazka19
<!--ID: 1749304503322-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje použití `MPI_Request`, `MPI_Test` a `MPI_Wait` u neblokujícího odesílání zpráv?

Back:

Neblokující funkci předáme navíc parametr `*request` typu `*MPI_Request`

Můžeme otestovat, zda je request vykonaný:

```c++
MPI_Status status; int flag;
MPI_Test(*request, *flag, *status);
```

Až otestujeme a flag bude `true`, můžeme buffer použít.

Nebo můžeme počkat na dokončení operace

```c++
MPI_Status status;
MPI_Wait(*request, *status)
```

Wait čeká a až skončí čekání, můžeme rovnou buffer použít

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105132.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1746518365372-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Testany` a `MPI_Waitany`?

Back:

`MPI_Testany` a `MPI_Waitany` pokud stačí libovolná operace z množiny (`MPI_Request[]`)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105326.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1749237784668-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Testall` a `MPI_Waitall`?

Back:

`MPI_Testall` a `MPI_Waitall` pokud potřebujeme všechny operace z množiny

`MPI_Waitall(3, requests, statuses)`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105326.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1749237784671-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze získat stavový objekt u neblokujícího příjmu?

Back:

![](../../../Assets/Pasted%20image%2020250330105228.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250330105242.png)

<!-- ExampleEnd -->
<!--ID: 1746518365375-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Proč jsou důležité neblokující komunikační operace?

Back:

Při složitějších komunikacích může u blokujících operací dojít k zablokování (protože čekají v deadlocku). Neblokující operace se tomu můžou vyhnout, umožňují překrývání komkunikací.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105305.png)

<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1746518365378-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje hromadné dokončení neblokujících operací?

Back:

![](../../../Assets/Pasted%20image%2020250330105326.png)
<!--ID: 1746518365380-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou komunikační módy neblokujících operací?

Back:

![](../../../Assets/Pasted%20image%2020250330105348.png)
<!--ID: 1746518365383-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje funkce `MPI_Sendrecv`?

Back:

![](../../../Assets/Pasted%20image%2020250330105413.png)
![](../../../Assets/Pasted%20image%2020250330105547.png)

Tags: otazka19
<!--ID: 1746518365386-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Sendrecv_replace`?

Back:

![](../../../Assets/Pasted%20image%2020250330105600.png)
<!--ID: 1746518365389-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je v MPI **úloha cyklický posuv**?

Back:

úloha: každý proces pošle zprávu pravému sousedovi (a poslední prvnímu)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105625.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1746518365391-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak by se **neměl** řešit **cyklický posuv v MPI**?

Back:

špatně: zavolat ve všech vláknech MPI_Send a pak MPI_Recv → může vést k deadlocku

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105625.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1749324086051-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakými **způsoby lze řešit cyklický posuv**? (4)

Back:

- nejprve posílají sudé procesy lichým, potom naopak
- pomocí `MPI_Bsend`
- pomocí `MPI_Isend`
- pomocí `MPI_Sendrecv`

Tags: otazka22
<!--ID: 1746518365394-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze řešit cyklický posuv pomocí:
nejprve posílají sudé procesy lichým, potom naopak

Back:

`bool even = proc_num % 2`

- pokud je `even`, bude první `MPI_Send`, pak `MPI_Recv`
- pokud není, bude první `MPI_Recv`, pak `MPI_Send`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105730.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1749324086056-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze řešit cyklický posuv pomocí: `MPI_Bsend`

Back:

musím buffer připravit `MPI_Buffer_attach` a pak uvolnit `MPI_Buffer_detach`

![](../../../Assets/Pasted%20image%2020250608103723.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105738.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1749324086059-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se používá `MPI_Buffer_attach` a `MPI_Buffer_detach`? Dej příklad

Back:

```c++
int buffer;
int buffer_size = sizeof(int)+MPI_BSEND_OVERHEAD;
MPI_Buffer_attach(buffer, buffer_size);
... // Používání bufferu, není potřeba ho nijak referencovat
MPI_Buffer_detach(&buffer, &buffer_size);
```

Tags: otazka22
<!--ID: 1749373579982-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze řešit cyklický posuv pomocí: `MPI_Isend`

Back:

![](../../../Assets/Pasted%20image%2020250608104316.png)

Případně lze i dát `MPI_Irecv` a po něm normální `MPI_Send`.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105746.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1749324086062-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze řešit cyklický posuv pomocí: `MPI_Sendrecv`

Back:

![](../../../Assets/Pasted%20image%2020250608104711.png)

Každý proces se chová jako 2-portový, tzn. je schopný přijmout data zleva a **současně** vyslat data doprava.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105802.png)

<!-- DetailInfoEnd -->

Tags: otazka22
<!--ID: 1749324086065-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké řešení cyklického posuvu je nejlepší?

Back:

nejjednodušší a nejlepší je `MPI_Sendrecv`

Tags: otazka22
<!--ID: 1749324086068-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je sondování příchodu zprávy?

Back:

Testování příchodu zprávy, aniž by byla přijata.

Tags: otazka20
<!--ID: 1749237784674-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké parametry má funkce `MPI_Probe`? (4) Jak to funguje?

Back:

Blokující funkce, která čeká dokud nepřijde zpráva, která by odpovídala daným parametrům. Jen detekuje, že zpráva přišla, ale nepřečte ji (zpráva tam zůstane).

`MPI_Probe(source, tag, comm, *status)`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105837.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1746518365398-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké parametry má funkce `MPI_Iprobe`? (5) Jak funguje?

Back:

Vrátí se hned, nastaví `flag=true`, pokud zpráva existuje.

`MPI_Iprobe(source, tag, comm, *flag, *status)`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105837.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1746518365400-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké parametry má funkce `MPI_Improbe`? (6) Jak funguje?

Back:

`MPI_Message message`
`MPI_Improbe(source, tag, comm, *flag, *message, *status)`

Mokud existuje přijatelná zpráva, v `message` se vrátí handle na tuto zprávu, kterou pak může přijmout `MPI_Mrecv()`.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105956.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1746518365403-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké parametry má funkce `MPI_Mrecv`? (5) Jak funguje?

Back:

`MPI_Mrecv(void *buf, MPI_Count count, MPI_Datatype datatype, MPI_Message *message, MPI_Status *Status)`

Jak funguje:
Přijme danou zprávu do bufferu.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330105956.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1749237784677-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Na co se dají **využít funkce** pro testování příchodu zprávy? (2)

Back:

1. **Přijímání "volitelných zpráv"** - např. předčasné ukončení výpočtu při nalezení řešení jiným procesem
2. **Zjištění velikosti zprávy** před alokací bufferu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330110024.png)

<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1746518365406-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak obecně funguje **ošetřování chyb v MPI programu**?

- jaké chyby řeší a neřeší
- jak se získávají chybové/success kódy
- kdo a kdy obsluhuje chyby

Back:

- MPI předpokládá **spolehlivou infrastrukturu**, takže neřeší chyby komunikace a procesů → pokud infrastruktura spolehlivá není, musí to ošetřit programátor
- chyby však mohou vznikat např. **nesprávným voláním MPI funkcí** a při **nedostatku zdrojů**
- téměř každá funkce vrací jako **návratovou hodnotu** buď `MPI_SUCCESS` nebo **chybový kód** (z něj lze získat třídu a text a je potřeba pro obsluhu chyby)
- obsluhu chyby lze navázat na různé typy objektů, např. na **komunikátor** či **soubor** (`MPI_File`)
- obsluha chyby se volá ještě před návratem neúspěšné funkce

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330110117.png)
![](../../../Assets/Pasted%20image%2020250330110122.png)
![](../../../Assets/Pasted%20image%2020250330110131.png)

<!-- DetailInfoEnd -->

Tags: otazka21
<!--ID: 1746518365409-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké **obsluhy chyb jsou předdefinovány** v MPI? (3)

Back:

1. `MPI_ERRORS_ARE_FATAL` násilně ukončí celý program (všechny procesy volají `MPI_ABORT`)
   - defaultně navázaná jako reakce na chybu na `MPI_COMM_WORLD`
   - návratové hodnoty nemají smysl, protože k návratu vůbec nedojde
2. `MPI_ERRORS_RETURN` vrátí chybový kód, ale stav výpočtu po chybě není definován
3. `MPI_ERRORS_ABORT` násilně ukončí procesy spojené s chybovým komunikátorem

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330110203.png)
![](../../../Assets/Pasted%20image%2020250330110210.png)

<!-- DetailInfoEnd -->

Tags: otazka21
<!--ID: 1746518365412-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dají vytvořit kódy obsluhy chyby v MPI? (4)

Back:

MPI implemetace nebo uživatel mohou přidat další obsluhy:

- `MPI_Comm_create_errhandler` – Vytvoří nový obslužný (callback) mechanismus pro zachytávání chyb komunikátoru.
- `MPI_Comm_set_errhandler` – Nastaví daný obslužný mechanismus chyb pro specifikovaný komunikátor.
- `MPI_Comm_get_errhandler` – Získá aktuálně nastavený obslužný mechanismus chyb pro daný komunikátor.
- `MPI_Errhandler_free` – Uvolní paměť spojenou s obslužným mechanismem chyb, pokud už není používán.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250330110310.png)

<!-- DetailInfoEnd -->

Tags: otazka21
<!--ID: 1746518365414-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_Comm_set_errhandler`? Jaké pak můžou být např. error kódy u `MPI_ERRORS_RETURN`?

Back:

`MPI_Comm_set_errhandler(komunikátor, typ_handleru)`

Např. `MPI_ERR_COMM`, `MPI_ERR_COUNT`, `MPI_ERR_TAG`

![](../../../Assets/Pasted%20image%2020250330110328.png)

Tags: otazka21
<!--ID: 1746518365417-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje magický čtverec v MPI?

Back:

![](../../../Assets/Pasted%20image%2020250330110350.png)
![](../../../Assets/Pasted%20image%2020250330110354.png)
<!--ID: 1746518365420-->

END

---

### MPI paralelní systémy souborů

START
FIT-Card

(FIT-Notes flashcard)

Jak je možné zapisovat do file systému pomocí MPI? Co je potřeba aby to šlo?

Back:

v normálním filesystému nejde paralelně zapisovat do souboru z více MPI procesů najednou

je potřeba:

- **paralelní souborový systém** (**PSS**)
- **MPI-I/O funkce** - umožňuje více procesům zapisovat do stejného souboru

Tags: otazka23
<!--ID: 1749325172967-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou například paralelní souborové systémy?

Back:

Lustre, GPFS

Tags: otazka23
<!--ID: 1749373579997-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká je knihovna nad MPI-I/O? K čemu slouží? Jak zpřístupňuje uživateli file systém?

Back:

**HDF5**

**Umožňuje pohodlnější práci se soubory**

Soubory:

- **Abstraktní hierarchická struktura HDF5 objektů**
- **HDF5 skupina** (něco jako adresář)
- skupina obsauje **HDF5 linky** (odkazy na objekty)
- **HDF5 objekty** (reprezentují ty soubory)

Tags: otazka23
<!--ID: 1749373580008-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Přes co jsou mapovány části souboru v paralelních systémech souborů?

Back:

části souboru jsou mapovány přes **I/O uzly** (**object storage server**, **OSS**)
na **koncová úložná zařízení** (**object storage target**, **OST**)

Tags: otazka23
<!--ID: 1749325172982-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kdy se vyplatí uložení souborů na **více OST**?

Back:

uložení souboru na více OST se vyplatí se jen pro velké soubory, jinak zpomaluje

Tags: otazka23
<!--ID: 1749325172984-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je implicitní error handler pro `MPI_File`?

Back:

`MPI_ERRORS_RETURN`

Tags: otazka23
<!--ID: 1749373580016-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou funkce v `MPI-I/O`? (7)

Back:

- `MPI_File`
- `MPI_File_seek`
- `MPI_File_read`
- `MPI_File_write`
- `MPI_File_read_at`
- `MPI_File_write_at`
- `MPI_Exscan`

Tags: otazka23
<!--ID: 1749325172987-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_File`?

Back:

`MPI_File` reprezentuje soubor (`MPI_File_open`, `MPI_File_close`)

- lze na něj navázat obsluhu chyby, defaultní je `MPI_ERRORS_RETURN`
- otevření souboru se provádí kolektivně přes `MPI_File_open`

příklad:
`MPI_File_open(MPI_COMM_WORLD, "data.bin", MPI_MODE_CREATE|MPI_MODE_WRONLY, MPI_INFO_NULL, &fh);`

Tags: otazka23
<!--ID: 1749325172989-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_File_seek`?

Back:

`MPI_File_seek` nastavuje “kurzor” v souboru pro daný proces

- posouvá pozici pro další čtení/zápis na relativní offset

<!-- ExampleStart -->

`MPI_File_seek(file, 100, MPI_SEEK_SET);` posune kurzor na bajt 100

<!-- ExampleEnd -->

Tags: otazka23
<!--ID: 1749325172992-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_File_read` a `MPI_File_write`? Jakou to má syntax?

Back:

`MPI_File_read` čte soubor, `MPI_File_write` píše do souboru

- čte/zapisuje od aktuální pozice kurzoru, blocking operace

příklad:
`MPI_File_read(file, buf, 10, MPI_INT, MPI_STATUS_IGNORE);`

Tags: otazka23
<!--ID: 1749325172995-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `MPI_File_read_at` a `MPI_File_write_at`?

Back:

`MPI_File_read_at` a `MPI_File_write_at` nastavují kurzor + čtou/píšou

- operace probíhá nezávisle na předchozí pozici kurzoru

příklad:
`MPI_File_write_at(fh, offset, buf, count, MPI_INT, MPI_STATUS_IGNORE);`

Tags: otazka23
<!--ID: 1749325172997-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Když paralelně píšou MPI procesy do jednoho souboru, jak to funguje?

Back:

![](../../../Assets/Pasted%20image%2020250608110044.png)

při paralelním zápisu zapisuje každý proces na svém offsetu

- ten si předpočítá pomocí PPS (paralelní prefixový součet, `MPI_Exscan`)

příklad:
`MPI_Exscan(&my_count, &offset, 1, MPI_INT, MPI_SUM, MPI_COMM_WORLD);`

![](../../../Assets/Pasted%20image%2020250608110104.png)
![](../../../Assets/Pasted%20image%2020250608110113.png)

Tags: otazka23
<!--ID: 1749325173000-->

END

START
FIT-Card

(FIT-Notes flashcard)

Jaké parametry má `MPI_File_open`? (5)

Back:

`MPI_File_open(...)`:

- `comm`
- `file name`
- `mód` - `MPI_MODE_CREATE|MPI_MODE_WRONLY`
- `MPI_INFO_NULL`
- `*file` (`MPI_File` pointer)

Tags: otazka23
<!--ID: 1749374459973-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké parametry má `MPI_File_close`?

Back:

Jen `&file` (`MPI_File`)

Tags: otazka23
<!--ID: 1749374459981-->

END

---

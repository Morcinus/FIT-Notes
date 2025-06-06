---
created: 2025-03-30T10:10:58
title: "Úvod do MPI"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska06 status-toReview


START
FIT-Card

Definice: **MPI**

Back:

- **MPI** (_Message Passing Interface_) = systém pro zasílání zpráv mezi **procesy** aplikace
    - jen funkce, wrapper nad překladačem, speciální nástroje pro spuštění, komunikace zasíláním zpráv, všechny proměnné jsou privátní

![](../../Assets/Pasted%20image%2020250330101300.png)

Tags: otazka17
<!--ID: 1746518365264-->
END

---


START
FIT-Card

Jak se liší OpenMP a MPI?

Back:

V MPI jsou **knihovní funkce** a ne direktivy.

- **OpenMP** = API pro programování **vícevláknových** aplikací na **jednom uzlu**
    - direktivy a funkce, přepínač překladače, přímé spuštění, komunikace pomocí sdílené paměti, proměnné mohou být sdílené
- **MPI** (_Message Passing Interface_) = systém pro zasílání zpráv mezi **procesy** aplikace
    - jen funkce, wrapper nad překladačem, speciální nástroje pro spuštění, komunikace zasíláním zpráv, všechny proměnné jsou privátní

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330101553.png)
<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365267-->
END

---


START
FIT-Card

Jak se liší překlad programů OpenMP a MPI? 

Back:

V OpenMP je přímá podpora v překladačích pomocí přepínačů `g++ -fopenmp`
V MPI jsou wrappery překladačů `mpic++`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330101856.png)
<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365269-->
END

---


START
FIT-Card

Jak se liší spouštění programu OpenMP a MPI?

Back:

Počet vláken OpenMP lze nastavit pomocí proměnné prostředí
Počet vláken MPI lze nastavit pomocí přepínačů

![](../../Assets/Pasted%20image%2020250330101925.png)
<!--ID: 1746518365272-->
END

---


START
FIT-Card

Jak se liší spouštění programu OpenMP a MPI?

Back:

- U OpenMP se spouští přímo přeložený program
- U MPI se používají speciální spouštěcí nástroje `mpirun`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330102814.png)
<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365275-->
END

---


START
FIT-Card

Na kolika jádrech lze maximálně pustit OpenMP vs MPI program? Kolik mají programy maximálně paměti?

Back:

![](../../Assets/Pasted%20image%2020250330102935.png)

Tags: otazka17
<!--ID: 1746518365277-->
END

---


START
FIT-Card

Jak se liší komunikace vláken v MPI a OpenMP?

Back:

OpenMP = mohou mít **sdílenou paměť**
MPI = komuinikují pomocí **zpráv**, všechny **proměnné jsou privátní**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330103108.png)
<!-- DetailInfoEnd -->

Tags: otazka17
<!--ID: 1746518365280-->
END

---


START
FIT-Card

Jaké jsou možnosti tvorby programů MPI+OpenMP? Je vhodné MPI+OpenMP kombinovat?  (3)

Back:

![](../../Assets/Pasted%20image%2020250330103143.png)

dnešní clustery mají vícejádrová CPU → OpenMP a MPI je výhodné kombinovat

Tags: otazka17
<!--ID: 1746518365282-->
END

---


START
FIT-Card

Jaká je typická architektura MPI programů? (2)

Back:

![](../../Assets/Pasted%20image%2020250330103159.png)

Tags: otazka17
<!--ID: 1746518365285-->
END

---


START
FIT-Card

Jakými způsoby se dá zkombinovat **MPI a OpenMP**? (4)

Back:

- je nutné zavolat `MPI_Init_thread` a vybrat míru spolupráce:
	- `MPI_THREAD_SINGLE` → žádné dělení na vlákna
	- `MPI_THREAD_FUNNELED` → jen hlavní vlákno volá MPI (jednoportový model)
	- `MPI_THREAD_SERIALIZED` → volání MPI je kritická sekce (jednoportový model)
	- `MPI_THREAD_MULTIPLE` → všechna vlákna volají MPI bez omezení (všeportový model)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250330103220.png)
![](../../Assets/Pasted%20image%2020250330103232.png)
<!-- ExampleEnd -->

Tags: otazka17
<!--ID: 1746518365287-->
END

---


START
FIT-Card

Co dělá funkce `MPI_Init_thread`?

Back:

"Očuchá" systém a zjistí, co je k dispozici.

Tags: otazka17
<!--ID: 1746518365290-->
END

---

START
FIT-Card

Jak se dá přeložit MPI+OpenMP program?

Back:

![](../../Assets/Pasted%20image%2020250330103258.png)
<!--ID: 1746518365292-->
END

---


START
FIT-Card

Jaké jsou verze MPI?

Back:

![](../../Assets/Pasted%20image%2020250330103318.png)
<!--ID: 1746518365295-->
END

---


START
FIT-Card

Co jsou skupiny procesů v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330103334.png)

Tags: otazka18
<!--ID: 1746518365301-->
END

---


START
FIT-Card

Co jsou komunikátory v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330103347.png)

Tags: otazka18
<!--ID: 1746518365305-->
END

---


START
FIT-Card

Jak funguje `MPI_Comm_rank`?

Back:

![](../../Assets/Pasted%20image%2020250330103404.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250330103424.png)
<!-- ExampleEnd -->

Tags: otazka18
<!--ID: 1746518365308-->
END

---


START
FIT-Card

Jak funguje `MPI_Comm_size`?

Back:

![](../../Assets/Pasted%20image%2020250330103417.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250330103424.png)
<!-- ExampleEnd -->

Tags: otazka18
<!--ID: 1746518365311-->
END

---


START
FIT-Card

Jak se liší **2-bodové** vs **kolektivní komunikační** operace?

Back:

![](../../Assets/Pasted%20image%2020250330103445.png)

Tags: otazka18
<!--ID: 1746518365314-->
END

---


START
FIT-Card

Jak se liší **blokující** vs **neblokující** komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330103501.png)

Tags: otazka18
<!--ID: 1746518365317-->
END

---


START
FIT-Card

Jak funguje základní **2-bodová komunikace** mezi procesy?

Back:

![](../../Assets/Pasted%20image%2020250330103533.png)

Tags: otazka18
<!--ID: 1746518365319-->
END

---


START
FIT-Card

Jaká je syntax funkce `MPI_Send`?

Back:

todo popsat parametry vlastními slovy

`MPI_Send(*buf, count, datatype, dest, tag, comm)`

pokud je count > 1, musí být všechny prvky za sebou a stejného typu
- `datatype` je typu `MPI_Datatype` (např. MPI_INT, lze vytvořit vlastní)
- `tag` může být `MPI_ANY_TAG`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330103551.png)
<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365322-->
END

---


START
FIT-Card

Jaká se syntax funkce `MPI_Recv`?

Back:

todo popsat parametry vlastními slovy

`MPI_Recv(*buf, count, datatype, source, tag, comm, *status)`

pokud je count > 1, musí být všechny prvky za sebou a stejného typu
- `datatype` je typu `MPI_Datatype` (např. MPI_INT, lze vytvořit vlastní)
- `source` může být `MPI_ANY_SOURCE`, `tag` může být `MPI_ANY_TAG`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330103609.png)
<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365325-->
END

---


START
FIT-Card

Co je přesně `MPI_Datatype`?

Back:

![](../../Assets/Pasted%20image%2020250330103639.png)

Tags: otazka18
<!--ID: 1746518365327-->
END

---


START
FIT-Card

Jak se dá přenášet větší množství dat u 2 bodové komunikace?

Back:

![](../../Assets/Pasted%20image%2020250330103702.png)

Tags: otazka18
<!--ID: 1746518365330-->
END

---


START
FIT-Card

Jak volají MPI funkce **zdrojový** a **cílový proces** u 2-bodové komunikace?

Back:

![](../../Assets/Pasted%20image%2020250330103722.png)

Tags: otazka18
<!--ID: 1746518365333-->
END

---


START
FIT-Card

Jak fungují **značky přenášených dat**? (tag)

Back:

![](../../Assets/Pasted%20image%2020250330103937.png)

Tags: otazka18
<!--ID: 1746518365336-->
END

---


START
FIT-Card

Jak funguje **Stavový objekt** v 2-bodové komunikaci?

Back:

- `*status` je ukazatel na **stavový objekt** typu `MPI_Status`
- obsahuje **číslo zdrojového procesu** a **tag** přijaté zprávy
- lze z něj získat **počet přijatých prvků** přes `MPI_Get_count(*status, datatype, *count)`
- pokud mě nezajímá, lze do `*status` předat `MPI_STATUS_IGNORE`

![](../../Assets/Pasted%20image%2020250330104003.png)

Tags: otazka18
<!--ID: 1746518365339-->
END

---


START
FIT-Card

Jaké je důležité **využití stavového objektu**?

Back:

![](../../Assets/Pasted%20image%2020250330104023.png)

Tags: otazka18
<!--ID: 1746518365342-->
END

---


START
FIT-Card

Jak se dá implementovat Master-Slave program v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330104057.png)
![](../../Assets/Pasted%20image%2020250330104108.png)
![](../../Assets/Pasted%20image%2020250330104118.png)
<!--ID: 1746518365345-->
END

---


START
FIT-Card

Jaké jsou komunikační módy blokujících operací? (4)

Back:

Komunikační mód určuje, kdy nastane návrat z blokující funkce.

- **standard mode** (`MPI_Send`) → po přijetí dat příjemcem nebo zkopírování do bufferu
	- MPI samo rozhodne mezi buffered a synchronous → lepší přenositelnost
- **buffered mode** (`MPI_Bsend`) → po zkopírování do bufferu
	- jako jediný je lokální operací (= návrat nezávisí na připravenosti příjemce)
- **synchronous mode** (`MPI_Ssend`) → po iniciaci přijetí dat příjemcem
- **ready mode** (`MPI_Rsend`) → jako `Send`, ale vrátí chybu, pokud příjemce nezavolal `MPI_Recv`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330104144.png)
<!-- DetailInfoEnd -->

Tags: otazka18
<!--ID: 1746518365348-->
END

---


START
FIT-Card

Kdo vybírá komunikační mód?

Back:

![](../../Assets/Pasted%20image%2020250330104832.png)
<!--ID: 1746518365351-->
END

---


START
FIT-Card

Jak funguje **standardní mód**?

Back:

![](../../Assets/Pasted%20image%2020250330104855.png)
<!--ID: 1746518365353-->
END

---


START
FIT-Card

Jak funguje **Buffered mode**?

Back:

![](../../Assets/Pasted%20image%2020250330104919.png)
<!--ID: 1746518365356-->
END

---


START
FIT-Card

Jak funguje **Synchronous mode**?

Back:

![](../../Assets/Pasted%20image%2020250330104930.png)
<!--ID: 1746518365358-->
END

---


START
FIT-Card

Jak funguje **Ready mode**?

Back:

![](../../Assets/Pasted%20image%2020250330104941.png)
<!--ID: 1746518365361-->
END

---


START
FIT-Card

Motivace pro standardní mód

Back:

![](../../Assets/Pasted%20image%2020250330105001.png)
<!--ID: 1746518365364-->
END

---


START
FIT-Card

Jaké jsou blokující komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330105045.png)
<!--ID: 1746518365366-->
END

---


START
FIT-Card

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

Jaké jsou neblokující komunikační operace? (5)

Back:

- `MPI_Isend`
- `MPI_Ibsend`
- `MPI_Issend`
- `MPI_Irsend`
- `MPI_Irecv`

![](../../Assets/Pasted%20image%2020250330105101.png)

Tags: otazka19
<!--ID: 1746518365369-->
END

---


START
FIT-Card

Jak funguje `MPI_Request`, `MPI_Test` a `MPI_Wait`?

Back:

neblokující funkce mají parametr `*request` typu `*MPI_Request` → ten lze předat do `MPI_Test(*request, *flag, *status)` nebo `MPI_Wait(*request, *status)` → až z nich získám stavový objekt (ne rovnou z `MPI_Irecv`) → `buf` můžu použít až po `MPI_Wait` nebo pokud `flag` z `MPI_Test` je `true`

![](../../Assets/Pasted%20image%2020250330105132.png)

Tags: otazka19
<!--ID: 1746518365372-->
END

---


START
FIT-Card

Jak funguje `MPI_Testany` a `MPI_Waitany`?

Back:

`MPI_Testany` a `MPI_Waitany` pokud stačí libovolná operace z množiny (`MPI_Request[]`)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330105326.png)
<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1749237784668-->
END

---


START
FIT-Card

Jak funguje `MPI_Testall` a `MPI_Waitall`?

Back:

`MPI_Testall` a `MPI_Waitall` pokud potřebujeme všechny operace z množiny

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330105326.png)
<!-- DetailInfoEnd -->

Tags: otazka19
<!--ID: 1749237784671-->
END

---


START
FIT-Card

Jak lze získat stavový objekt u neblokujícího příjmu?

Back:

![](../../Assets/Pasted%20image%2020250330105228.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250330105242.png)
<!-- ExampleEnd -->
<!--ID: 1746518365375-->
END

---


START
FIT-Card

Proč jsou důležité neblokující komunikační operace?

Back:

todo vytáhnout nějaké klíčové body

![](../../Assets/Pasted%20image%2020250330105305.png)

Tags: otazka19
<!--ID: 1746518365378-->
END

---


START
FIT-Card

Jak funguje hromadné dokončení neblokujících operací?

Back:

![](../../Assets/Pasted%20image%2020250330105326.png)
<!--ID: 1746518365380-->
END

---


START
FIT-Card

Jaké jsou komunikační módy neblokujících operací?

Back:

![](../../Assets/Pasted%20image%2020250330105348.png)
<!--ID: 1746518365383-->
END

---


START
FIT-Card

Jak funguje funkce `MPI_Sendrecv`?

Back:

![](../../Assets/Pasted%20image%2020250330105413.png)
![](../../Assets/Pasted%20image%2020250330105547.png)

Tags: otazka19
<!--ID: 1746518365386-->
END

---


START
FIT-Card

Jak funguje `MPI_Sendrecv_replace`?

Back:

![](../../Assets/Pasted%20image%2020250330105600.png)
<!--ID: 1746518365389-->
END

---


START
FIT-Card

Jak funguje permutace cyklický posuv?

Back:

![](../../Assets/Pasted%20image%2020250330105625.png)
<!--ID: 1746518365391-->
END

---


START
FIT-Card

Jak by se měl korektně řešit cyklický posuv?

Back:

![](../../Assets/Pasted%20image%2020250330105730.png)
![](../../Assets/Pasted%20image%2020250330105738.png)
![](../../Assets/Pasted%20image%2020250330105746.png)
![](../../Assets/Pasted%20image%2020250330105802.png)
![](../../Assets/Pasted%20image%2020250330105812.png)
<!--ID: 1746518365394-->
END

---


START
FIT-Card

Co je sondování příchodu zprávy?

Back:

Testování příchodu zprávy, aniž by byla přijata

Tags: otazka20
<!--ID: 1749237784674-->
END

---


START
FIT-Card

Jaká je syntax funkce `MPI_Probe`? Jak to funguje?

Back:

čeká na přijatelnou zprávu

`MPI_Probe(source, tag, comm, *status)`


![](../../Assets/Pasted%20image%2020250330105837.png)

Tags: otazka20
<!--ID: 1746518365398-->
END

---


START
FIT-Card

Jaká je syntax funkce `MPI_Iprobe`? Jak funguje?

Back:

Vrátí se hned.

`MPI_Iprobe(source, tag, comm, *flag, *status)`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330105837.png)
<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1746518365400-->
END

---


START
FIT-Card

Jaká je syntax funkce `MPI_Improbe`? Jak funguje?

Back:

`MPI_Improbe(source, tag, comm, *flag, *message, *status)` sonduje “s rezervací” → pokud existuje přijatelná zpráva, v `message` se vrátí handle na tuto zprávu, kterou pak může přijmout `MPI_Mrecv(*buf, count, datatype, *message, *status)`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330105956.png)
<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1746518365403-->
END

---


START
FIT-Card

Jaká je syntax funkce `MPI_Mrecv`? Jak funguje?

Back:

`MPI_Mrecv(void *buf, MPI_Count count, MPI_Datatype datatype, MPI_Message *message, MPI_Status *Status)`

Jak funguje:
todo vypsat

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330105956.png)
<!-- DetailInfoEnd -->

Tags: otazka20
<!--ID: 1749237784677-->
END

---


START
FIT-Card

Jak se dají využít funkce pro testování příchodu zprávy? (2)

Back:

![](../../Assets/Pasted%20image%2020250330110024.png)

Tags: otazka20
<!--ID: 1746518365406-->
END

---


START
FIT-Card

Jak obecně funguje ošetřování chyb v MPI programu?

Back:

- MPI předpokládá spolehlivou infrastrukturu, takže neřeší chyby komunikace a procesů → pokud infrastruktura spolehlivá není, musí to ošetřit programátor
- chyby však mohou vznikat např. nesprávným voláním MPI funkcí a při nedostatku zdrojů
- téměř každá funkce vrací jako návratovou hodnotu buď `MPI_SUCCESS` nebo chybový kód (z něj lze získat třídu a text a je potřeba pro obsluhu chyby)
- obsluhu chyby lze navázat na různé typy objektů, např. na komunikátor či soubor
- obsluha chyby se volá ještě před návratem neúspěšné funkce

todo možná prolítnout ještě detail a mrknout jestli tam není něco dalšího zajímavého

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330110117.png)
![](../../Assets/Pasted%20image%2020250330110122.png)
![](../../Assets/Pasted%20image%2020250330110131.png)

<!-- DetailInfoEnd -->

Tags: otazka21
<!--ID: 1746518365409-->
END

---


START
FIT-Card

Jaké **obsluhy chyb jsou předdefinovány** v MPI? (3)

Back:

1. `MPI_ERRORS_ARE_FATAL` násilně ukončí celý program (všechny procesy volají `MPI_ABORT`)
    - defaultně navázaná jako reakce na chybu na `MPI_COMM_WORLD`
    - návratové hodnoty nemají smysl, protože k návratu vůbec nedojde
2. `MPI_ERRORS_RETURN` vrátí chybový kód, ale stav výpočtu po chybě není definován
3. `MPI_ERRORS_ABORT` násilně ukončí procesy spojené s chybovým komunikátorem

![](../../Assets/Pasted%20image%2020250330110203.png)
![](../../Assets/Pasted%20image%2020250330110210.png)

Tags: otazka21
<!--ID: 1746518365412-->
END

---


START
FIT-Card

Jak se dají vytvořit kódy obsluhy chyby v MPI? (4)

Back:

MPI implemetace nebo uživatel mohou přidat další obsluhy:
- `MPI_Comm_create_errhandler`
- `MPI_Comm_set_errhandler`
- `MPI_Comm_get_errhandler`
- `MPI_errhandler_free`

![](../../Assets/Pasted%20image%2020250330110310.png)

Tags: otazka21
<!--ID: 1746518365414-->
END

---


START
FIT-Card

Jak funguje `MPI_Comm_set_errhandler`?

Back:

![](../../Assets/Pasted%20image%2020250330110328.png)

Tags: otazka21
<!--ID: 1746518365417-->
END

---


START
FIT-Card

Jak funguje magický čtverec v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330110350.png)
![](../../Assets/Pasted%20image%2020250330110354.png)
<!--ID: 1746518365420-->
END

---

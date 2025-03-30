---
created: 2025-03-30T10:10:58
title: "Úvod do MPI"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska06 status-toReview


START
FIT-Card

Definice: MPI

Back:

![](../../Assets/Pasted%20image%2020250330101300.png)

END

---


START
FIT-Card

Jak se liší OpenMP a MPI?

Back:

V MPI jsou knihovní funkce a ne direktivy.

![](../../Assets/Pasted%20image%2020250330101553.png)

END

---


START
FIT-Card

Jak se liší překlad programů OpenMP a MPI

Back:

V OpenMP je přímá podpora v překladačích pomocí přepínačů
V MPI jsou "obálky" překladačů

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330101856.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak se liší spouštění programu OpenMP a MPI (?

Back:

Počet vláken OpenMP lze nastavit pomocí proměnné prostředí
Počet vláken MPI lze nastavit pomocí přepínačů

![](../../Assets/Pasted%20image%2020250330101925.png)

END

---


START
FIT-Card

Jak se liší spouštění programu OpenMP a MPI?

Back:

- U OpenMP se spouští přímo přeložený program
- U MPI se používají speciální spouštěcí nástroje

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330102814.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Na kolika jádrech lze maximálně pustit OpenMP vs MPI program? Kolik mají programy maximálně paměti?

Back:

![](../../Assets/Pasted%20image%2020250330102935.png)

END

---


START
FIT-Card

Jak se liší komunikace vláken v MPI a OpenMP?

Back:

OpenMP = mohou mít sdílenou paměť
MPI = komuinikují pomocí zpráv, všechny proměnné jsou privátní

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250330103108.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou možnosti tvorby programů? (3)

Back:

![](../../Assets/Pasted%20image%2020250330103143.png)

END

---


START
FIT-Card

Jaká je typická architektura MPI programů?

Back:

![](../../Assets/Pasted%20image%2020250330103159.png)

END

---


START
FIT-Card

Jak se dá zkombinovat MPI a OpenMP?

Back:

![](../../Assets/Pasted%20image%2020250330103220.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250330103232.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Jak se dá přeložit MPI+OpenMP program?

Back:

![](../../Assets/Pasted%20image%2020250330103258.png)

END

---


START
FIT-Card

Jaké jsou verze MPI?

Back:

![](../../Assets/Pasted%20image%2020250330103318.png)

END

---


START
FIT-Card

Co jsou skupiny procesů v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330103334.png)

END

---


START
FIT-Card

Co jsou komunikátory v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330103347.png)

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

END

---


START
FIT-Card

Jak se liší 2-bodové vs kolektivní komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330103445.png)

END

---


START
FIT-Card

Jak se liší blokující vs neblokující komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330103501.png)

END

---


START
FIT-Card

Jak funguje základní 2-bodová komunikace mezi procesy?

Back:

![](../../Assets/Pasted%20image%2020250330103533.png)

END

---


START
FIT-Card

Jaká je syntax funkce `MPI_Send`?

Back:

![](../../Assets/Pasted%20image%2020250330103551.png)

END

---


START
FIT-Card

Jaká se syntax funkce `MPI_Recv`?

Back:

![](../../Assets/Pasted%20image%2020250330103609.png)

END

---


START
FIT-Card

Jak funguje `MPI_Datatype`?

Back:

![](../../Assets/Pasted%20image%2020250330103639.png)

END

---


START
FIT-Card

Jak funguje **množství přenášených dat** u 2 bodové komunikace?

Back:

![](../../Assets/Pasted%20image%2020250330103702.png)

END

---


START
FIT-Card

Jak funguje zdrojový a cílový proces u 2-bodové komunikace?

Back:

![](../../Assets/Pasted%20image%2020250330103722.png)

END

---


START
FIT-Card

Jak fungují **značky přenášených dat**?

Back:

![](../../Assets/Pasted%20image%2020250330103937.png)

END

---


START
FIT-Card

Jak funguje **Stavový objekt** v 2-bodové komunikaci?

Back:

![](../../Assets/Pasted%20image%2020250330104003.png)

END

---


START
FIT-Card

Jak funguje Důležité využití stavového objektu?

Back:

![](../../Assets/Pasted%20image%2020250330104023.png)

END

---


START
FIT-Card

Jak se dá implementovat Master-Slave program v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330104057.png)
![](../../Assets/Pasted%20image%2020250330104108.png)
![](../../Assets/Pasted%20image%2020250330104118.png)

END

---


START
FIT-Card

Jaké jsou komunikační módy blokujících operací?

Back:

- **standardní mód**
- **buffered mode**
- **synchronous mode**
- **ready mode**
- 

![](../../Assets/Pasted%20image%2020250330104144.png)

END

---


START
FIT-Card

Kdo vybírá komunikační mód?

Back:

![](../../Assets/Pasted%20image%2020250330104832.png)

END

---


START
FIT-Card

Jak funguje **standardní mód**?

Back:

![](../../Assets/Pasted%20image%2020250330104855.png)

END

---


START
FIT-Card

Jak funguje **Buffered mode**?

Back:

![](../../Assets/Pasted%20image%2020250330104919.png)

END

---


START
FIT-Card

Jak funguje **Synchronous mode**?

Back:

![](../../Assets/Pasted%20image%2020250330104930.png)

END

---


START
FIT-Card

Jak funguje **Ready mode**?

Back:

![](../../Assets/Pasted%20image%2020250330104941.png)

END

---


START
FIT-Card

Motivace pro standardní mód

Back:

![](../../Assets/Pasted%20image%2020250330105001.png)

END

---


START
FIT-Card

Jaké jsou blokující komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330105045.png)

END

---


START
FIT-Card

Jaké jsou neblokující komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330105101.png)

END

---


START
FIT-Card

Jak funguje `MPI_Request`, `MPI_Test` a `MPI_Wait`?

Back:

![](../../Assets/Pasted%20image%2020250330105132.png)

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

END

---


START
FIT-Card

Proč jsou důležité neblokující komunikační operace?

Back:

![](../../Assets/Pasted%20image%2020250330105305.png)

END

---


START
FIT-Card

Jak funguje hromadné dokončení neblokujících operací?

Back:

![](../../Assets/Pasted%20image%2020250330105326.png)

END

---


START
FIT-Card

Jaké jsou komunikační módy neblokujících operací?

Back:

![](../../Assets/Pasted%20image%2020250330105348.png)

END

---


START
FIT-Card

Jak funguje funkce `MPI_Sendrecv`?

Back:

![](../../Assets/Pasted%20image%2020250330105413.png)
![](../../Assets/Pasted%20image%2020250330105547.png)


END

---


START
FIT-Card

Jak funguje `MPI_Sendrecv_replace`?

Back:

![](../../Assets/Pasted%20image%2020250330105600.png)

END

---


START
FIT-Card

Jak funguje permutace cyklický posuv?

Back:

![](../../Assets/Pasted%20image%2020250330105625.png)

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

END

---


START
FIT-Card

Jak funguje sondování příchodu zprávy `MPI_Iprobe` a `MPI_Probe`

Back:

![](../../Assets/Pasted%20image%2020250330105837.png)

END

---


START
FIT-Card

Jaké jsou požadavky na implementaci `MPI_Iprobe` a `MPI_Probe`

Back:

![](../../Assets/Pasted%20image%2020250330105902.png)

END

---


START
FIT-Card

Jak funguje sondování s rezervací pro budoucí Receive?

Back:

![](../../Assets/Pasted%20image%2020250330105956.png)

END

---


START
FIT-Card

Jak se dají využít funkce pro testování příchodu zprávy? (2)

Back:

![](../../Assets/Pasted%20image%2020250330110024.png)

END

---


START
FIT-Card

Jak se dají ošetřovat chyby v MPI programu?

Back:

![](../../Assets/Pasted%20image%2020250330110117.png)
![](../../Assets/Pasted%20image%2020250330110122.png)
![](../../Assets/Pasted%20image%2020250330110131.png)

END

---


START
FIT-Card

Jaké obsluhy chyb jsou předdefinovány v MPI? (3)

Back:

![](../../Assets/Pasted%20image%2020250330110203.png)
![](../../Assets/Pasted%20image%2020250330110210.png)

END

---


START
FIT-Card

Jak se dají vytvořit kódy obsluhy chyby v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330110310.png)

END

---


START
FIT-Card

Jak funguje `MPI_Comm_set_errhandler`?

Back:

![](../../Assets/Pasted%20image%2020250330110328.png)

END

---


START
FIT-Card

Jak funguje magický čtverec v MPI?

Back:

![](../../Assets/Pasted%20image%2020250330110350.png)
![](../../Assets/Pasted%20image%2020250330110354.png)

END

---

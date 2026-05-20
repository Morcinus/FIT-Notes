---
created: 2026-05-20T19:41:23
title: Příprava na státnice
up:
  - "[[📖NI-PDP]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDP prednaska11 status-toReview

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní násobení hustých matic
Migration Status: done
-->
START
NI-SZZ

Jak funguje paralelní násobení hustých matic pomocí Cannonova algoritmu?

Back:

1. obě matice rozdělíme **šachovnicově**
2. $i$-tý řádek $A$ se posune o $i$ pozic doleva a $i$-tý sloupec B o $i$ pozic nahoru
3. každý proces dostane ten samý dílek šachovnice z obou matic
4. v $\sqrt p$ iteracích každý proces vynásobí své dva dílky, počká na ostatní a pak pošle svůj dílek $A$ doleva a svůj dílek $B$ nahoru
5. nakonec nezapomenu posunout obě matice do původního stavu

![](../../../Assets/Pasted%20image%2020260520194300.png)
<!--ID: 1779299206134-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní násobení hustých matic
Migration Status: done
-->
START
NI-SZZ

Jaké vlastnosti má **Cannonův algoritmus**? (3)

Back:

- **systolický algoritmus** (informace se posílají až ve chvíli, kdy je to potřeba)
- **paměťově optimální** (každý dílek se v každé iteraci vyskytuje v systému právě jednou)
- **lineárně škálovatelný**
<!--ID: 1779299206142-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní násobení hustých matic
Migration Status: done
-->
START
NI-SZZ

Jaká síť je ideální pro **Cannonův algoritmus**?

Back:

ideální síť je **toroid** (abychom mohli posílat doleva a nahoru “přes okraj”)
<!--ID: 1779299206144-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní násobení hustých matic
Migration Status: done
-->
START
NI-SZZ

Pomocí jakých MPI operací se implementuje **Cannonův algoritmus**?

Back:

- `MPI_Cart_create` → přeorganizuje komunikátor do 2D toroidu
- `MPI_Cart_coords` → každý proces zjistí svoje souřadnice v toroidu
- `MPI_Cart_shift` → vypočítá ranky uzlů “o $i$ doleva” a “o $i$ nahoru”
- `MPI_Send_recv_replace` → odešle dílek a rovnou přijme jiný
<!--ID: 1779299206147-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní mocninná metoda
Migration Status: done
-->
START
NI-SZZ

Jak funguje **paralelní mocninná metoda**?

Back:

- mocninná metoda je iterační algoritmus, který k (řídké) čtvercové matici $A$ najde dominantní (v absolutní hodnotě největší) vlastní číslo a odpovídající vlastní vektor
    - začíná s libovolným nenulovým vektorem $x$ a mnohokrát násobí $y = Ax$
<!--ID: 1779299206150-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní mocninná metoda
Migration Status: done
-->
START
NI-SZZ

Jak funguje Mocninná metoda s **náhodným mapováním matice**?

Back:

**náhodné mapování matice**
1. každý proces si vezme libovolné prvky z $A$
2. každý vynásobí své prvky příslušným prvkem $x$ a ukládá do svého lokálního $y$
3. `Allreduce` sesbírá z lokálních $y$ výsledný vektor $y$
4. každý proces si normalizuje $y$
<!--ID: 1779299206153-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní mocninná metoda
Migration Status: done
-->
START
NI-SZZ

Jak funguje **Mocninná metoda s řádkovým mapováním matice**?

Back:

1. každý proces si vezme $n/p$ řádků z $A$
2. každý vynásobi své řádky a ukládá do svojí části $y$
3. `Allgather` sesbírá části $y$ rovnou do nového $x$
4. normalizuje se $x$
5. zkontroluje se kritérium konvergence a příp. se to celé opakuje znovu…
<!--ID: 1779299206156-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní mocninná metoda
Migration Status: done
-->
START
NI-SZZ

Jaká je výhoda **Mocninné metody s řádkovým mapováním matice**?

Back:

není potřeba paměť navíc pro $y$, experimentálně je to násobně rychlejší
<!--ID: 1779299206159-->
END

---

<!--
Exam Note ID: NI-SPOL-18
Exam Note Section Name: Paralelní mocninná metoda
Migration Status: done
-->
START
NI-SZZ

Jak funguje **Mocninná metoda se šachovnicovým mapováním**?

Back:

- $y$ žije na diagonále $A$

1. sloupcový `Bcast` rozdá části $y$ do všech řádků
2. každý proces vynásobí svůj dílek
3. řádkový `Reduce` sesbírá dílčí výsledky zpátky na diagonálu
4. procesy na diagonále normalizují $y$ pomocí `Allreduce`
5. zkontroluje se kritérium konvergence a příp. se to celé opakuje znovu…

- tzn. je potřeba komunikovat ve třech směrech (řádkově, sloupcově, po diagonále)

![](../../../Assets/Pasted%20image%2020260520194609.png)
<!--ID: 1779299206162-->
END

---

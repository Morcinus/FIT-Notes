---
created: 2025-03-08T14:23:38
title: "Paralelní prohledávání stavového prostoru"
up: "[[📖NI-PDP]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDP prednaska03 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Co je koncový stav, přípustný mezistav a řešení (přípustný koncový stav)?

Back:

![](../../../Assets/Pasted%20image%2020250308143014.png)
<!--ID: 1746599653886-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké datové struktury se používají u BFS a DFS?

Back:

- **BFS** - fronta (FIFO)
- **DFS** - zásobník (LIFO)
<!--ID: 1746599653895-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **3** typy **Prohledávání kombinatorického stavového prostoru**?

Back:

![](../../../Assets/Pasted%20image%2020250308143215.png)
<!--ID: 1746599653903-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 4 kritéria/parametry, která řešíme při prohledávání stavového prostoru?

Back:

![](../../../Assets/Pasted%20image%2020250308143354.png)

1. Jak problém umožňuje prořezávání (návraty)
2. Jestli musíme prostor procházet celý
3. Jestli je hloubka prohledávaného prostoru konečná nebo nekonečná
4. Co si v zásobníku potřebujeme pamatovat, aby se to dalo paralelizovat
<!--ID: 1746599653911-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje DFS s jednoduchým návratem (SB-DFS)?

Back:

Cílem je nalézt koncový stav, který vyhovuje daným požadavkům.

![](../../../Assets/Pasted%20image%2020250308143734.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250308143747.png)

<!-- ExampleEnd -->
<!--ID: 1746599653918-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje DFS s metodou větví a řezů (BB-DFS)?

Back:

Je to jako SB-DFS, ale přidáme k tomu cenovou funkci. Díky tomu můžeme agresivněji prořezávat.

![](../../../Assets/Pasted%20image%2020250308143825.png)
<!--ID: 1746599653926-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je problém lineárního programování?

Back:

![](../../../Assets/Pasted%20image%2020250308144057.png)
![](../../../Assets/Pasted%20image%2020250308144110.png)
![](../../../Assets/Pasted%20image%2020250308144117.png)
<!--ID: 1746599653935-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 2 tyoy BB-DFS podle úplnosti prohledávacího prostoru?

Back:

- **ASB-DFS** - vždy úplné prohledávání
- **FSB-DFS** - úplné v závislosti na vstupních datech

![](../../../Assets/Pasted%20image%2020250308145320.png)
<!--ID: 1746599653943-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby může být omezený prohledávací prostor?

Back:

- Stromový stavový prostor - vždy omezená hloubka
- Cyklický stavový prostor - může tam být zacyklení

![](../../../Assets/Pasted%20image%2020250308145522.png)
![](../../../Assets/Pasted%20image%2020250308145531.png)
<!--ID: 1746599653950-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se prohledává cyklický stavový prostor?

Back:

**Iterativním prohlubováním** - PP-DFS
<!--ID: 1746599653957-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje PP-DFS?

Back:

![](../../../Assets/Pasted%20image%2020250308145611.png)
![](../../../Assets/Pasted%20image%2020250308145622.png)
<!--ID: 1746599653963-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje DFS v stavovém prostoru s neomezenou hloubkou?

Back:

Známe cílový stav, ale nevíme jak se tam dostat a ten prostor je tak velký, že to musíme zjišťovat chytřeji, než jen jednoduchým procházením:
![](../../../Assets/Pasted%20image%2020250308150356.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250308150407.png)

<!-- ExampleEnd -->
<!--ID: 1746599653969-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou možnosti struktury zásobníku?

Back:

![](../../../Assets/Pasted%20image%2020250308151839.png)

Červené je to minimum, co si musím v zásobníku pamatovat. Ty modré prvky jsou optional, ale dělá se to.
<!--ID: 1746599653976-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se dá rozdělovat rovnoměrně zátěž mezi výpočetní uzly?

Back:

Naivní řešení:
Uděláme BFS v masteru, pomocí kterého vygenerujeme nějaké počáteční mezistavy, ty pak rozhodíme mezi vlákna.

**Má to zásadní problém:** Tím, že nevíme dopředu, jakou strukturu má ten stavový prostor, tak je možný, že to bude po rozdělení na výpočetní uzly **mnohem pomalejší**, než kdyby to dělal jeden uzel.

![](../../../Assets/Pasted%20image%2020250308152817.png)

![](../../../Assets/Pasted%20image%2020250308152649.png)
![](../../../Assets/Pasted%20image%2020250308152810.png)
<!--ID: 1746599653983-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké je anomální chování v případě FSB-DFS PKSP?

Back:

![](../../../Assets/Pasted%20image%2020250308152901.png)
<!--ID: 1746599653989-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby lze vyřešit to, že může mít stavový prostor různou strukturu?

Back:

- Dynamické vyvažování zátěže
- Dělení zásobníku
<!--ID: 1746599653996-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Dynamické vyvažování zátěže**?

Back:

![](../../../Assets/Pasted%20image%2020250308153013.png)
<!--ID: 1746599654003-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Dělení zásobníku**?

Back:

![](../../../Assets/Pasted%20image%2020250308153038.png)

> "Tak jsme skončili dřív. Můžete jít na pizzu." :D - Tvrdík
<!--ID: 1746599654011-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje paralelní algoritmus dynamického Master-Slave DFS?

Back:

"Detaily optimalizace budu teď ignorovat, budu to dělat úplně debilně." - Tvrdík :D

![](../../../Assets/Pasted%20image%2020250308153110.png)
![](../../../Assets/Pasted%20image%2020250308153142.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250308154018.png)
![](../../../Assets/Pasted%20image%2020250308154026.png)
![](../../../Assets/Pasted%20image%2020250308154033.png)
... kdyžtak další slidy jsou v prezentaci

<!-- ExampleEnd -->
<!--ID: 1746599654018-->

END

---

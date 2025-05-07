---
created: 2025-03-13T09:30:25
title: "High performance OpenMP"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska04 status-toReview


START
FIT-Card

Co je časově náročnější? Provedení operace v CPU nebo nahrání těch informací z paměti?

Back:

Nahrání informací z paměti je časově náročnější.

Například z RAM do CPU je latence 40x větší než latence z L1 keše.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250313101411.png)
![](../../Assets/Pasted%20image%2020250313101359.png)
<!-- ExampleEnd -->
<!--ID: 1746599653027-->
END

---



START
FIT-Card

Na co se dělí algoritmy z hlediska paralelizovatelných algoritmů? (2)

Back:

- **Výpočetně intenzivní algoritmy** - čas procesoru strávený výpočtem nad daty je větší než čas nutný na přesun dat z paměti do CPU
- **Pamětově intenzivní algoritmy** - čas procesoru strávený výpočtem nad daty je menší než čas nutný na přesun dat z paměti do CPU
<!--ID: 1746599653035-->
END

---


START
FIT-Card

Jaké jsou 2 hlavní benchmarky procesorů?

Back:

- **HLP** (LINPACK)
- **HPCG** - násobení obří řídké matice vektorem
	- Např. předpovědi počasí je počítání řídkých matic
<!--ID: 1746599653042-->
END

---


START
FIT-Card

Jaké jsou základní podmínky optimalizace sekvenčních kódů? (4)

Back:

![](../../Assets/Pasted%20image%2020250313102743.png)
<!--ID: 1746599653049-->
END

---


START
FIT-Card

Jaké jsou hlavní zdroje neefektivity OpenMP kódů?

Back:

![](../../Assets/Pasted%20image%2020250313102900.png)

- Rozdělit rozumně vpočet, aby byla všechna jádra furt vytížná
- Vyhnout se synchronizaci co nejvíc (taskwait, bariéru)
- Vysoká režie - nepřepínat moc práci vláken
- Amdahlův zákon - po určitém počtu už nemá smysl přidávat vlákna
- Neefektvní sdílení
	- Falešné sdílení
<!--ID: 1746599653056-->
END

---


START
FIT-Card

Co je falešné sdílení?

Back:

![](../../Assets/Pasted%20image%2020250313103140.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250313103150.png)
<!-- ExampleEnd -->

<!--ID: 1746599653063-->
END

---


START
FIT-Card

Jak se dá snížit dopad falešného sdílení?

Back:

Použít schedule static

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020250313103303.png)
<!-- ExplanationEnd -->
<!--ID: 1746599653071-->
END

---


START
FIT-Card

Jak se dá odstranit falešné sdílení pro velká pole?

Back:

- Do 1 keš bloku zapisuje právě jedno vlákno
- Pole v paměti je zarovnáno stejně jako bloky keše

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313103414.png)
<!-- DetailInfoEnd -->

<!--ID: 1746599653078-->
END

---


START
FIT-Card

Jak se dá odstranit falešné sdílení pro malá pole?

Back:

Musíme "nafouknout" to pole tak, aby každý prvek odpovídal velikosti bloku keše.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313103627.png)
![](../../Assets/Pasted%20image%2020250313103700.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599653086-->
END

---


START
FIT-Card

Jaké jsou typicky příklady jednoduchých problémů co jsme brali.

Back:

![](../../Assets/Pasted%20image%2020250313103951.png)
<!--ID: 1746599653092-->
END

---


START
FIT-Card

Co je histogram?

Back:

![](../../Assets/Pasted%20image%2020250313103731.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313103749.png)
<!-- DetailInfoEnd -->

<!--ID: 1746599653099-->
END

---


START
FIT-Card

Jak se dá zparalelizovat sdílený histogram?

Back:

![](../../Assets/Pasted%20image%2020250313103815.png)
<!--ID: 1746599653106-->
END

---


START
FIT-Card

Jak se dá zparalelizovt lokální histogram?

Back:

![](../../Assets/Pasted%20image%2020250313103854.png)
![](../../Assets/Pasted%20image%2020250313103905.png)
<!--ID: 1746599653113-->
END

---


START
FIT-Card

Jak funguje sekvenční násobení polynomů?

Back:

![](../../Assets/Pasted%20image%2020250313104427.png)
<!--ID: 1746599653120-->
END

---


START
FIT-Card

Jaké jsou možnosti paralelizace u násobení polynomů?

Back:

![](../../Assets/Pasted%20image%2020250313104526.png)
<!--ID: 1746599653127-->
END

---


START
FIT-Card

Jak se dá paralelizovat vnější cyklus násobení polynomů?

Back:

![](../../Assets/Pasted%20image%2020250313104607.png)
![](../../Assets/Pasted%20image%2020250313104629.png)
<!--ID: 1746599653134-->
END

---


START
FIT-Card

Jak se dá paralelizovat vnitřní cyklus násobení polynomů?

Back:

![](../../Assets/Pasted%20image%2020250313104644.png)
![](../../Assets/Pasted%20image%2020250313104655.png)
![](../../Assets/Pasted%20image%2020250313104706.png)
<!--ID: 1746599653142-->
END

---


START
FIT-Card

Jak se dá paralelizovat polynom C při násobení polynomů?

Back:

![](../../Assets/Pasted%20image%2020250313104739.png)
![](../../Assets/Pasted%20image%2020250313104751.png)
![](../../Assets/Pasted%20image%2020250313104801.png)
![](../../Assets/Pasted%20image%2020250313104810.png)
![](../../Assets/Pasted%20image%2020250313104820.png)
<!--ID: 1746599653149-->
END

---


START
FIT-Card

Jak funguje sekvenční násobení matic?

Back:

![](../../Assets/Pasted%20image%2020250313104839.png)
<!--ID: 1746599653155-->
END

---


START
FIT-Card

Jak se dá paralelizovat vnější cyklus u násobení matic?

Back:

![](../../Assets/Pasted%20image%2020250313104859.png)

<!--ID: 1746599653163-->
END

---


START
FIT-Card

Jak se dá paralelizovat vnitřní cyklus u násobení matic?

Back:

![](../../Assets/Pasted%20image%2020250313104910.png)
![](../../Assets/Pasted%20image%2020250313104948.png)
![](../../Assets/Pasted%20image%2020250313104959.png)
![](../../Assets/Pasted%20image%2020250313105009.png)

<!--ID: 1746599653171-->
END

---


START
FIT-Card

Jak se dá paralelizovat k cyklus při násobení matic?

Back:

![](../../Assets/Pasted%20image%2020250313105019.png)
![](../../Assets/Pasted%20image%2020250313105106.png)

<!--ID: 1746599653181-->
END

---


START
FIT-Card

Jaké je srovnání výkonnosti variant paralelního násobení matic?

Back:

![](../../Assets/Pasted%20image%2020250313105137.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250313105149.png)
![](../../Assets/Pasted%20image%2020250313105201.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599653191-->
END

---


START
FIT-Card

Jak se dají násobit řídké matice?

Back:

![](../../Assets/Pasted%20image%2020250313110032.png)
<!--ID: 1746599653202-->
END

---


START
FIT-Card

Co je souřadnicov formát matic COO?

Back:

![](../../Assets/Pasted%20image%2020250313110051.png)
<!--ID: 1746599653211-->
END

---


START
FIT-Card

Jak funguje sekvenční násobení matice v COO?

Back:

![](../../Assets/Pasted%20image%2020250313110122.png)
![](../../Assets/Pasted%20image%2020250313110134.png)
<!--ID: 1746599653219-->
END

---


START
FIT-Card

Jak funguje paralelní násobení matice v COO?

Back:

![](../../Assets/Pasted%20image%2020250313110151.png)
<!--ID: 1746599653226-->
END

---


START
FIT-Card

Co je formát CSR?

Back:

![](../../Assets/Pasted%20image%2020250313110206.png)
<!--ID: 1746599653234-->
END

---


START
FIT-Card

Jak funguje sekvenční násobení matic v CSR?

Back:

![](../../Assets/Pasted%20image%2020250313110221.png)
<!--ID: 1746599653242-->
END

---


START
FIT-Card

Jak funguje paralelní násobení v CSR?

Back:

![](../../Assets/Pasted%20image%2020250313110310.png)
![](../../Assets/Pasted%20image%2020250313110318.png)
![](../../Assets/Pasted%20image%2020250313110420.png)
![](../../Assets/Pasted%20image%2020250313110538.png)
![](../../Assets/Pasted%20image%2020250313110629.png)
<!--ID: 1746599653249-->
END

---


START
FIT-Card

Jak funguje vyvažování při násobení matic v CSR?

Back:

![](../../Assets/Pasted%20image%2020250313110657.png)
![](../../Assets/Pasted%20image%2020250313110713.png)
<!--ID: 1746599653256-->
END

---


START
FIT-Card

Jak rychlé je COO pro p=4, p=12?

Back:

![](../../Assets/Pasted%20image%2020250313110920.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653263-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(static)?

Back:

![](../../Assets/Pasted%20image%2020250313110930.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653271-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(static,1)?

Back:

![](../../Assets/Pasted%20image%2020250313111032.png)
![](../../Assets/Pasted%20image%2020250313111507.png)END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(static,16)?

Back:

![](../../Assets/Pasted%20image%2020250313111059.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653278-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, schedule(dynamic,16)?

Back:

> "Nebuďte z toho smutný. Tyhle algoritmy budou vždycky pomalý. Běžte se proběhnout na Letnou. Užívejte si jara." - Tvrdík :D

![](../../Assets/Pasted%20image%2020250313111131.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653285-->
END

---


START
FIT-Card

Jak rychlé je COO pro CSR, balanced?

Back:

![](../../Assets/Pasted%20image%2020250313111209.png)
![](../../Assets/Pasted%20image%2020250313111507.png)
<!--ID: 1746599653292-->
END

---

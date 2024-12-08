---
created: 2024-12-08T12:49:20
title: Benchmarky
up:
  - "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB prednaska09 status-toReview

### Benchmarks, ACID, Tuning

START
FIT-Card

Jaké jsou typy bechmarků a co znamenají?

Back:

- **microbenchmark** - zaměřuje se na konkrétní aspekt databázového systému (např. práce s cache, jenom insert příkazy, jenom update příkazy)
- **komplexní benchmarky**

END

---


START
FIT-Card

Co je TPC?

Back:

Transaction Processing Council (něco jako W3C ale pro databáze)
- skupina lidí a firem, které se vyjadřují k tomu, jak by se měly sestavovat a provádět benchmarky (a další věci kolem databází)

<!-- ExampleStart -->
Členové jsou např. Microsoft, Lenovo, Cisco, Nvidia, AMD atd.
<!-- ExampleEnd -->


END

---


START
FIT-Card

Jak funguje TPC-C benchmark?

Back:

- Máme nějaký obchod s databází
- Nad ním máme jasně zadefinované operace a transakce
- Je definovaná zátěž té databáze a jednotlivá data

Následně:
- Spustí se simulace, která to bude škálovat a zatěžovat
	- Tím postupně získávám informace o tom, jak moc lze databázi škálovat atd.
- Jakmile naškáluju až do limitu mého hardwaru, nechám to chvíli bežet a zaznamenám výsledky benchmarku

<!-- ImageStart -->
**Takto vypadá da databáze**
![](../../Assets/Pasted%20image%2020241208133108.png)

![](../../Assets/Pasted%20image%2020241208133101.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Jaké jsou metriky TPC-C bechmarku, které se sledují? (2)

Back:

- $tpmC$ - new-order transaction rate = při maximálním zatížení databáze, kolik jsem schopný zpracovat nových objednávek
- $\$/tpmC$ - kolik mě jedna nová objednávka stojí peněz 

END

---


START
FIT-Card

Jaké jsou typy transakcí v TCP-C benchmarku? (5)

Back:

- New order
- payment
- delivery
- order-status
- stock-level

END

---


START
FIT-Card

Jak funguje simulace v TPC-C?

Back:

Mám různé transakce (new-order) atd. Mám simulaci zákazníka (terminál), ten s určitou náhodností posílá requesty:
1. Nějaká šance, že pošle konkrétní dotaz (new order, payment atd.)
2. Nějakou dobu "přemýšlí" nad objednávkou
3. Potom pošle request

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241208133525.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Jaká je kritika TPC-C benchmarku?

Back:

Že je moc jednoduchý a nepřesný.

END

---


START
FIT-Card

Na co slouží benchmarky TPC-E a TPC-C? Na OLTP nebo OLAP?

Back:

Na **OLTP**

END

---

### TPC-E


START
FIT-Card

Jaké metriky se sledují u benchmarku TPC-E?

Back:

- TPsE - transactions per second u jakékoliv transakce
- Price/TPsE

END

---

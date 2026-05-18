---
created: 2024-12-08T12:49:20
title: Benchmarky
up:
  - "[[📖NI-PDB]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDB prednaska09 status-toReview


### Benchmarks, ACID, Tuning

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy bechmarků a co znamenají?

Back:

- **microbenchmark** - zaměřuje se na konkrétní aspekt databázového systému (např. práce s cache, jenom insert příkazy, jenom update příkazy)
- **komplexní benchmarky**
<!--ID: 1735205748903-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je TPC?

Back:

Transaction Processing Council (něco jako W3C ale pro databáze)

- skupina lidí a firem, které se vyjadřují k tomu, jak by se měly sestavovat a provádět benchmarky (a další věci kolem databází)

<!-- ExampleStart -->

Členové jsou např. Microsoft, Lenovo, Cisco, Nvidia, AMD atd.

<!-- ExampleEnd -->
<!--ID: 1735205748906-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

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
![](../../../Assets/Pasted%20image%2020241208133108.png)

![](../../../Assets/Pasted%20image%2020241208133101.png)

<!-- ImageEnd -->
<!--ID: 1735205748908-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou metriky TPC-C bechmarku, které se sledují? (2)

Back:

- $tpmC$ - new-order transaction rate = při maximálním zatížení databáze, kolik jsem schopný zpracovat nových objednávek
- $\$/tpmC$ - kolik mě jedna nová objednávka stojí peněz
<!--ID: 1735205748911-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy transakcí v TCP-C benchmarku? (5)

Back:

- New order
- payment
- delivery
- order-status
- stock-level
<!--ID: 1735205748913-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje simulace v TPC-C?

Back:

Mám různé transakce (new-order) atd. Mám simulaci zákazníka (terminál), ten s určitou náhodností posílá requesty:

1. Nějaká šance, že pošle konkrétní dotaz (new order, payment atd.)
2. Nějakou dobu "přemýšlí" nad objednávkou
3. Potom pošle request

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241208133525.png)

<!-- ImageEnd -->
<!--ID: 1735205748916-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká je kritika TPC-C benchmarku?

Back:

Že je moc jednoduchý a nepřesný.
<!--ID: 1735205748918-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: OLTP vs. OLAP databáze
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Na co slouží benchmarky TPC-E a TPC-C? Na OLTP nebo OLAP?

Back:

Na **OLTP**
<!--ID: 1735205748921-->

END

---

### TPC-E

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Na jaké téma je zaměřený TPC-E?

Back:

Jako příklad je obchodování společnosti, která se zabývá obchodováním s akciema a managování uživatelských účtů.
<!--ID: 1735205748923-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké metriky se sledují u benchmarku TPC-E?

Back:

- $TPsE$ - transactions per second u **jakékoliv** transakce
- $Price/TPsE$
<!--ID: 1735205748926-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší TPC-E od TPC-C?

Back:

TPC-E je složitější, je tam větší rozmanitost transakcí atd.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241220111540.png)
![](../../../Assets/Pasted%20image%2020241220111612.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205748929-->

END

---

> "V podstatě, když se o tom budeme bavit, ať už u zkoušky nebo nebo u státnic, tak mi jde o to, abyste věděli, proč máme komplexní benchmarky, že ty komplexní benchmarky mají nějakej příběh, abyste dokázali popsat vlastně jak to zhruba vypadá? Jo, to znamená zhruba tu. Datovou sadu, jak se to škáluje zhruba ty transakce a že tam je někde nějakej treshold, kterej je vyjádřený tím, že fajn, když ta odezva toho databázového systému na nějakej typ transakce už je větší než tahleta než těhle těch třeba 5 vteřin, tak to znamená, že už jsme dosáhli saturace jo v týhle chvíli se odečítají ty výsledky. Tohle mě bohatě stačí, když budete k těm benchmarkům vědět." - Valenta, poslední přednáška, 17. minuta

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká je nevýhoda TPC-C

Back:
<!--ID: 1735205748931-->

END

---

### TPC-H

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je příklad OLAP benchmarku?

Back:

$TPC-H$
<!--ID: 1735205748934-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je velký rozdíl TPC-H benchmarku oproti těm ostatním?

Back:

Máme databázi fixní velikosti
<!--ID: 1735205748936-->

END

---

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké metriky se měří u TPC-H bechmarku?

Back:

- $QphH@Size$ - Composite Query-perHour performance metric
- $\$/QphH@Size$ - Price/Performance metric

$Size$ je velikost databáze.

<!-- DetailInfoStart -->

Size typicky jsou desítky GB až 1 TB cca

<!-- DetailInfoEnd -->
<!--ID: 1735205748939-->

END

---

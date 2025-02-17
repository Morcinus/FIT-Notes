---
created: 2025-02-17T16:17:23
title: "Úvod"
up: "[[📖NI-PDP]]"
---

TARGET DECK: NI-PDP
FILE TAGS: NI-PDP prednaska01 status-toReview


START
FIT-Card

Definice: **Paralelní počítač**

Back:

![](../../Assets/Pasted%20image%2020250217162543.png)

END

---


START
FIT-Card

Jaké jsou části hierarchie výpočetního paralelismu?

Back:

![](../../Assets/Pasted%20image%2020250217162814.png)

<!-- ExplanationStart -->
- **SMP** - několik procesorů, co fyzicky sdílejí paměť
- **Klastr** - propojení několika SMP serverů
- **Paralelní superpočítače** - je jich fakt málo na světě
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217163355.png)

Fun fact: 30 let se výkon počítačů zvyšuje exponenciálně
![](../../Assets/Pasted%20image%2020250217163634.png)

K čemu jsou dobré superpočítače? Např. na předpovědi počasí.
![](../../Assets/Pasted%20image%2020250217163837.png)
<!-- DetailInfoEnd -->

END

---

### Modely paralelních systémů


START
FIT-Card

Jaké jsou 4 modely paralelních systémů?

Back:

- **Modely výpočetního stroje**
- **Modely architektury** - toky dat, propojovací sítě
- **Výpočetní modely** - analytický model architektury pro navrhování a verifikaci paralelních programů
- **Programovací modely**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217164134.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je SIMD?

Back:

- Uzly mají lokální paměti
- Uzly synchronně přijímají společný proud instrukcí, které mohou buď provádět nebo ignorovat

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217164219.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je MIMD?

Back:

- Jednotka, která je samostatný počítač.
- Je schopna asynchronně provádět operace nezávisle na dalších uzlech.

Je pak potřeba mít něco, co tyto uzly řídí.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217164500.png)
<!-- DetailInfoEnd -->

END

---

#### Architektura

##### Z hlediska paměti

START
FIT-Card

Jaké jsou možnosti organizace paměti?

Back:

- **Sdílená paměť** - jeden procesor něco zapíše, druhý si to přečte
	- Výhoda: jednoduché na programování
- **Distribuovaná paměť** - každé zařízení má vlastní paměť, může přistupovat jen do své
	- Výhoda: unlimited škálování
	- Nevýhoda: výrazně složitější na programování
- **S virtuálně sdílenou pamětí** - paměť je fyzicky distribuovaná, ale procesor ji vidí jako že má k dispozici sdílenou paměť
	- Hardware "zamaskuje" to, že je to distribuovaná paměť 

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217164723.png)
<!-- DetailInfoEnd -->


END

---

##### Z hlediska propojovacích sítí

START
FIT-Card

Jaké jsou typy modely paralelní architektury se **sdílenou pamětí** podle **propojovací sítě**?

Back:

- **multiprocesorová sběrnice**
- **křížový přepínač**
- **nepřímá vícestupňová propojovací síť**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217165208.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou typy modely paralelní architektury s **distribuovanou pamětí** podle **propojovací sítě**?

Back:

![](../../Assets/Pasted%20image%2020250217165341.png)


END

---

### PRAM

START
FIT-Card

Co je PRAM?

Back:

Obecný model paralelního výpočtu
- RAM = random access **machine**
- Všechny procesory jsou synchronizované

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217165648.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jaké jsou **3 základní instrukce** v PRAMu?

Back:

- **čtení** - čtou ze sdílené paměti
- **zápis** - zapisují do sdílené paměti
- **lokální operace** - cokoliv lokálně ve svojí paměti

(nebo ten stroj nedělá nic)

END

---


START
FIT-Card

Jaké jsou způsoby řešení časově závislých chyb?

Back:

- **EREW-PRAM**: Programátor zaručí, že se to nestane
	- Exclusive Read, Exclusive Write
- **CREW-PRAM**
- **CRCW-PRAM** - může se současně číst a zapisovat

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217170014.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou možnosti zaručení **CRCW-PRAM**?

Back:

- **Priority-CRCW-PRAM** - procesory mají pevné priority, dokončení zápisu je povoleno procesoru s nejvyšší prioritou
- **Arbitrary CRCW-PRAM**
- **Common-CRCW-PRAM** - všem procesorům je dovoleno dokončit zápis, když jsou všechny zapisované hodnoty stejné

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217170024.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co je asynchronní PRAM (APRAM)?

Back:

- Každý procesor má svoje hodiny, svoji rychlost
- Nejsme schopni to dopředu nijak předvídat

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217170251.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaká synchronizace se používá u APRAMu?

Back:

**Bariérová synchronizace**
- Procesory se musí potkat na nějaké bariéře. Všechny procesy čekají, dokud se nedokončí poslední operace, potom se "prorazí bariéra" a počítá se dál.

<!-- DetailInfoStart -->
Bariéra je docela drahá.
![](../../Assets/Pasted%20image%2020250217170833.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou 2 možnosti implementace bariéry?

Back:

![](../../Assets/Pasted%20image%2020250217170907.png)

END

---

#### Programovací model


START
FIT-Card

Jaké jsou typy programovacích modelů?

Back:

- Datový/iterační - např. iterace nad poli
- Funkční paralelismus - např. rekurze
- Paralelní programovací šablony

END

---


START
FIT-Card

Co je programovací model: **datový/iterační paralelismus**? 

Back:

- Datově nezávislé iterace cyklu mohou být prováděny současně samostatnými procesory

![](../../Assets/Pasted%20image%2020250217171003.png)

END

---


START
FIT-Card

Co je programovací model: **funkční paralelismus**?

Back:

Jakoby paralelizace rekurzivních volání.

![](../../Assets/Pasted%20image%2020250217171134.png)

END

---


START
FIT-Card

Co je programovací model: paralelní programovací šablony?

Back:

- **Pipelining** - máme pipu, a protýkají data, každý uzel se stará o nějakou část procesování
- **Fork join** - task se vždy rozdělí, paralelně vypočte a pak se zase sjednotí
- **Master-Slave** - master přidělí práci, slaves počítají
- **Client-server** - klient zadá práci, server odpovídá
- **Producent-konzument** - producent vkládá tasky do zásobárny úloh, konzumet si je odebírá
- **Single Program Multiple Data** (SPMD) - nejběžnější, vlákna provádějí asynchronně tentýž statický kód

![](../../Assets/Pasted%20image%2020250217171303.png)

END

---

### Měřítka složitosti sekvenčních algoritmů
= něco jako teorie složitosti paralelních výpočtů


START
FIT-Card

Jaké jsou složitosti u sekvenčních algoritmů?

Back:

![](../../Assets/Pasted%20image%2020250217171916.png)

<!-- ExplanationStart -->
Máme vyřešit problém. Ten se dá vyřešit sekvenčními algoritmy.
<!-- ExplanationEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250217171948.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Definice: Paralelní časová složitost

Back:

![](../../Assets/Pasted%20image%2020250217172311.png)

$p$ je počet procesorů, nebo jader, nebo vláken (podle toho co zrovna řeším)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217172323.png)
<!-- DetailInfoEnd -->

Důsledek: když programuju paralelně, je lepší mít procesory co nejvyváženější (aby měly podobný výkon)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250217172552.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Z čeho se skládá $T(n,p)$?

Back:

- **výpočetní kroky** - aritmetické, logické, atd.
- **komunikační kroky** - přenos, výměna dat mezi procesory

END

---


START
FIT-Card

Definice: Paralelní cena

Back:

![](../../Assets/Pasted%20image%2020250217172611.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217172623.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
Doba, jak dlouho jsem využíval všechny procesory. Například když mi někdo poskytne část superpočítače, tak ho bude zajímat, kolik procesorů jsem jak dlouho využíval. Je mu ale jedno, co jsem tam dělal a jak moc jsem je využíval.
<!-- ExampleEnd -->


END

---


START
FIT-Card

Lemma: výpočet $C(n,p)$

Back:

![](../../Assets/Pasted%20image%2020250217172704.png)

<!-- ProofStart -->
![](../../Assets/Pasted%20image%2020250217172714.png)
<!-- ProofEnd -->

END

---


START
FIT-Card

Definice: Cenová optimalita

Back:

![](../../Assets/Pasted%20image%2020250217173209.png)

END

---


START
FIT-Card

Definice: Paralelní zrychlení

Back:

![](../../Assets/Pasted%20image%2020250217173224.png)

END

---


START
FIT-Card

Lemma: výpočet $S(n,p)$

Back:

![](../../Assets/Pasted%20image%2020250217173245.png)

<!-- ProofStart -->
![](../../Assets/Pasted%20image%2020250217173257.png)
<!-- ProofEnd -->


END

---


START
FIT-Card

Definice: lineární paralelní zrychlení

Back:

![](../../Assets/Pasted%20image%2020250217173319.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217173326.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co je **superlineární zrychlení**?

Back:

![](../../Assets/Pasted%20image%2020250217173356.png)

END

---


START
FIT-Card

Definice: Spodní mez na paralelní čas

Back:

![](../../Assets/Pasted%20image%2020250217173424.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250217173442.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Definice: Paralelní efektivnost

Back:

![](../../Assets/Pasted%20image%2020250217173520.png)

Je to v procentech (0 až 1). 

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217173601.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Lemma: zrychlení na jádro

Back:

![](../../Assets/Pasted%20image%2020250217173537.png)

<!-- ProofStart -->
![](../../Assets/Pasted%20image%2020250217173547.png)
<!-- ProofEnd -->


END

---


START
FIT-Card

Definice: **konstantní efektivnost**

Back:

![](../../Assets/Pasted%20image%2020250217173756.png)

END

---


START
FIT-Card

Věta: **Paralelní optimalita výkonnosti**

Back:

![](../../Assets/Pasted%20image%2020250217173813.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250217173845.png)
![](../../Assets/Pasted%20image%2020250217173857.png)
![](../../Assets/Pasted%20image%2020250217173909.png)
![](../../Assets/Pasted%20image%2020250217174046.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Definice: Paralelní škálovatelnost

Back:

![](../../Assets/Pasted%20image%2020250217174325.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250217174340.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Definice: Amdahlův zákon

Back:

![](../../Assets/Pasted%20image%2020250217174435.png)

END

---


START
FIT-Card

Definice: Gustafsonův zákon

Back:

![](../../Assets/Pasted%20image%2020250217174519.png)

END

---


START
FIT-Card

Definice: silná škálovatelnost a slabá škálovatelnost

Back:

![](../../Assets/Pasted%20image%2020250217174616.png)

END

---


START
FIT-Card

Definice: Izoefektivní funkce

Back:

![](../../Assets/Pasted%20image%2020250217174635.png)
![](../../Assets/Pasted%20image%2020250217174642.png)

END

---

![](../../Assets/Pasted%20image%2020250217174659.png)
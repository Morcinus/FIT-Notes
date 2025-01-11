---
created: 2024-10-22T09:42:02
title: "CAP theorém, BAsE, replication, sharding"
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB prednaska05 status-toReview

### Škálování

START
FIT-Card

Co je škálovatelnnost?

Back:

Schopnost systému se vyrovnat s narůstajícím množstvím dat nebo požadavků.
<!--ID: 1736497489067-->
END

---


START
FIT-Card

Co je vertikální škálování?

Back:

Snažíme se posílit **jeden server** (jeden node), co už máme tím, že navýšíme nějaký paramety.

<!-- ExampleStart -->
Přidáme procesory, ramky.
<!-- ExampleEnd -->
<!--ID: 1736497489075-->
END

---


START
FIT-Card

Jaké problémy jsou s vertikálním škálováním?

Back:

- Je to **dražší** - výdaje se zvyšují exponenciálně
- **Vendor lock** - je jen pár společností, co se tím zabývá (např Oracle)
- **Performance limits** - i silnější mašiny mají své limity
<!--ID: 1736497489080-->
END

---


START
FIT-Card

Kdy je dobrý vertikální škálování?

Back:

Když už ten hardware mám a neočekávám exponenciální růst.

<!-- ExampleStart -->
Třeba na čvutu vím, že počet studentů nebude růst exponenciálně -> dává smysl škálovat vertikálně 
<!-- ExampleEnd -->
<!--ID: 1736497489085-->
END

---


START
FIT-Card

Co je horizontální škálování?

Back:

Zasadíme do systému více uzlů (nodes).
<!--ID: 1736497489090-->
END

---


START
FIT-Card

Co za typ databází se typicky používá na hoizontální škálování?

Back:

NoSQL
<!--ID: 1736497489095-->
END

---


START
FIT-Card

Jaké jsou **nevýhody horizontálního škálování**?

Back:

**Výrazně to komplikuje celý systém**.

<!-- ExampleStart -->
Musí se řešit datová konzistence, zotavování z chyb, distribuce dat atd. Všechno je to složitější.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241022095614.png)
<!-- DetailInfoEnd -->
<!--ID: 1736497489100-->
END

---


START
FIT-Card

Co je cluster?

Back:

Množina **nodes**, založená na **shared-nothing** architektuře

<!-- ExplanationStart -->
**shared-nothing** = každý node má vlastní operační systém, vlastní hardware a komunikuje s ostatními nody pomocí zpráv
<!-- ExplanationEnd -->
<!--ID: 1736497489104-->
END

---

### Distribuční modely

START
FIT-Card

Jaké jsou dvě techniky distribuce dat a co znamenají?

Back:

- **sharding** - vezmu databázi a rozdělím ji na kousky do jednotlivých uzlů
- **replikace** - mám stejná data na jiných nodes

<!-- DetailInfoStart -->
Ta replikace se udělá typicky třeba na 3 nodech
<!-- DetailInfoEnd -->
<!--ID: 1736497489109-->
END

---


START
FIT-Card

Jak se typicky rozdělí data v shardování?

Back:

Typicky související data, ke kterým se přistupuje najednou, by měly být uchovány na stejné node
<!--ID: 1736497489113-->
END

---


START
FIT-Card

Čeho se snažím dosáhnout u shardování?

Back:

- Přístupy ke každé node by měly být vybalancovaný
- Balanced workload (read and write requests)
- Respect physical location _(např. data pro američany dám na server do ameriky)_
<!--ID: 1736497489117-->
END

---


START
FIT-Card

Jaké jsou shardovací strategie?

Back:

- **mapping structures**
- **general rules**

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241022101216.png)
<!-- ExplanationEnd -->
<!--ID: 1736497489122-->
END

---


START
FIT-Card

Proč je obtížné shardování?

Back:

- Pro read i write requesty musíme rozhodnout, ke které shardě se přistoupí
- Občas vypadne nějaký node
<!--ID: 1736497489127-->
END

---

#### Replikace

START
FIT-Card

Jaké jsou dva přístupy replikace?

Back:

- **Master-slave**
- **Peer-to-peer**
<!--ID: 1736497489132-->
END

---


START
FIT-Card

Co je **replikační faktor**?

Back:

Počet kopií u replikace. Typicky je nízký (třeba 3 nody)
<!--ID: 1736497489137-->
END

---


START
FIT-Card

Co je master slave architektura?

Back:

- Máme 1 **master node**, tam lze zapisovat
- Máme **slave nodes**, z těch lze číst

Z mastera se to automaticky popíše do slaves

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241022101613.png)
<!-- ImageEnd -->
<!--ID: 1736497489142-->
END

---


START
FIT-Card

Jaké jsou problémy v **master-slave** architektuře?

Back:

- Než se změna zpropaguje do slaves, je tam okno, kde klient nezíská aktuální data.
- Když vypadne master node, je to průšvih
<!--ID: 1736497489147-->
END

---


START
FIT-Card

Co je peer-to-peer architektura?

Back:

Máme několik uzlů, u všech lze zapisovat i číst.
<!--ID: 1736497489152-->
END

---


START
FIT-Card

Jaké jsou nevýhody u peer to peer architektury?

Back:

**Konzistence** - je třeba dobrá synchronizace, aby nedocházelo ke konfliktům.
<!--ID: 1736497489157-->
END

---



START
FIT-Card

Dá se kombinovat replikace a sharding?

Back:

Ano!

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241022102302.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241022102647.png)
<!-- DetailInfoEnd -->
<!--ID: 1736497489163-->
END

---

### CAP theorem


START
FIT-Card

Jaké jsou základní předpoklady pro CAP theorém?

Back:

- Musí se jednat o distribuovaný systém se shardingem a replikací
- Read a write operace jsou dělány na jednom agregátu
<!--ID: 1736497489168-->
END

---


START
FIT-Card

Co říká CAP theorem?

Back:

![](../../Assets/Pasted%20image%2020241022102913.png)

CAP = Consistency, Availability, Partition tolerance
<!--ID: 1736497489172-->
END

---


START
FIT-Card

Co je consistency v CAP theorému?

Back:

Čtení a zápis musí být atomický

<!-- DetailInfoStart -->
s![](../../Assets/Pasted%20image%2020241022103146.png)
<!-- DetailInfoEnd -->
<!--ID: 1736497489177-->
END

---


START
FIT-Card

Co je availability v CAP theorému?

Back:

Pokud noda běží, musí odpovídat na requesty

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241022103235.png)
<!-- DetailInfoEnd -->
<!--ID: 1736497489182-->
END

---


START
FIT-Card

Co je partition tolerance v CAP theoremu?

Back:

Je možný, že nějaká node na chvíli vypadne. Distribuovaný systém by měl být vůči tomuhle odolný,
<!--ID: 1736497489187-->
END

---


START
FIT-Card

Jaké jsou 3 praktické provedení CAP theoremu?

Back:

Vždy se zaměřím na dvě vlastnosti:

- **CA** - tradiční databáze (Postgres)
- **CP** - tohle se moc nepoužívá v databázích
- **AP** - šidí se konzistence

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241022103437.png)
![](../../Assets/Pasted%20image%2020241022103559.png)
<!-- DetailInfoEnd -->
<!--ID: 1736497489192-->
END

---


START
FIT-Card

Co je ACID?

Back:

![](../../Assets/Pasted%20image%2020241022103618.png)
<!--ID: 1736497489198-->
END

---


START
FIT-Card

Co je BASE?

Back:

![](../../Assets/Pasted%20image%2020241022103636.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241022103752.png)
<!-- DetailInfoEnd -->
<!--ID: 1736497489203-->
END

---


START
FIT-Card

Co je consistency?

Back:

![](../../Assets/Pasted%20image%2020241022103910.png)
<!--ID: 1736497489209-->
END

---


START
FIT-Card

Co je write consistency?

Back:

![](../../Assets/Pasted%20image%2020241022103926.png)
<!--ID: 1736497489213-->
END

---


START
FIT-Card

Co je read consistency?

Back:

![](../../Assets/Pasted%20image%2020241022103948.png)
<!--ID: 1736497489219-->
END

---


START
FIT-Card

Co je strong consistency?

Back:

![](../../Assets/Pasted%20image%2020241022104006.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241022104335.png)
<!-- ExampleEnd -->
<!--ID: 1736497489224-->
END

---

![](../../Assets/Pasted%20image%2020241022104344.png)
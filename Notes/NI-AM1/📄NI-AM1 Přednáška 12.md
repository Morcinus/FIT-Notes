---
created: 2024-12-20T13:08:16
title: "xxx"
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1 prednaska12 status-toReview

START
FIT-Card

Co je reverse proxy?

Back:

Dělá requesty na back-end systémy "jménem klienta".

Klient tak pošle jeden request na reverzní proxy a proxy pak např. pošle 3 requesty do systémů a pošle klientovi odpověď.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241220131832.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241220131902.png)

<!-- ExampleEnd -->
<!--ID: 1735205749881-->
END

---


START
FIT-Card

Jak funguje HTTP Sticky Sessions?

Back:

Když mám servery které nejsou stateless, tak na reverse proxy musím přeposílat requesty klientů furt na ty samé servery (pokud jsou stateful, tak to je jedno).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241220131915.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749883-->
END

---



START
FIT-Card

Jak funguje **health check** load balanceru?

Back:

Jednou za čas zkontroluju, jestli beží daný server. Pokud neběží, tak ho vyřadím ze seznamu serverů, kam přeposílám requesty.

<!-- DetailInfoStart -->
Health checking je obecně důležitý mechanismus. Můžu health měnit i na základě vnitřního stavu aplikace (např. v aplikaci nefunguje něco úplně ideálně, tak nechci, aby se mi posílalo tolik requestů -> nastavím nižší health služby).

![](../../Assets/Pasted%20image%2020241220133326.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749886-->
END

---


START
FIT-Card

Jak funguje **Round-Robin** algoritmus?

Back:

Máme index a seznam serverů. Postupně rozesílám 

1. Přijde request, přečtu `sessionId`
2. Pokud `sessionId` je v `sticky sessions` array, pošlu request na daný server
	- Pokud tam není, pošlu ho na server podle momentálního indexu a zařadím `sessionId` do `sticky sessions`

![](../../Assets/Pasted%20image%2020241220134549.png)
<!--ID: 1735205749889-->
END

---


START
FIT-Card

Jaká je nevýhoda Round-Robin algoritmu?

Back:

Nevím, jak moc jsou servery zatížený. Každý server může být např. jinak silný, co se týče CPU. Round robin tak zatěžuje servery rovnoměrně, což ale není ideální. 
<!--ID: 1735205749891-->
END

---


START
FIT-Card

Co je **Least Connections** algoritmus na load balanceru?

Back:

Zjistím, jak jsou servery zatížené podle **počtu aktivních requestů**. Např. když nějaký server má 30 aktivních requestů (na které se čeká) a druhý 10, tak to pošlu na ten se 10, protože vím, že ten není tak zatížený.
<!--ID: 1735205749893-->
END

---


START
FIT-Card

Co je **Least Time** algoritmus na load balanceru?

Back:

![](../../Assets/Pasted%20image%2020241220134132.png)
<!--ID: 1735205749896-->
END

---


START
FIT-Card

Jaké jsou 3 další možnosti, jak lze vybírat servery na Load Balanceru?

Back:

![](../../Assets/Pasted%20image%2020241220134357.png)
<!--ID: 1735205749898-->
END

---


START
FIT-Card

Co je **floating IP address**? Jak funguje?

Back:

Mám 2 load balancery, jeden normální a jeden záložní. Když normální vypadne, tak se IP adresa přepne na ten náhradní.

Jak to funguje:
Máme router, který je ve stejné síti jako ty load balancery. Pomocí ARP protokolu se zjišťuje, na jakou MAC adresu se mají posílat requesty co jdou na danou IP adresu.

Díky tomu ARP protokolu se to přepne, když jeden server vypadne.
<!--ID: 1735205749901-->
END

---


START
FIT-Card

Co je **session persistance**?

Back:

Když mám jeden load balancer, tak mám single point of failure. Proto typicky třeba mám více load balancerů. Potom je ale potřeba tu session neuchovávat na load balanceru.

Proto tu **session** uchovávám někde **jinde**.
<!--ID: 1735205749903-->
END

---


START
FIT-Card

Jak lze zajistit **session persistance**?

Back:

- Buď pomocí **Session DB persistance** - session se uloží do databáze, když load balancer vypadne, druhý si to načte z DB
- Nebo pomocí **In-memory replication** - session je jako cookie

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241220135717.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749906-->
END

---


START
FIT-Card

Jak funguje In-Memory Replication?

Back:

Když se zakládá session, zkopíruje se vždy ta informace rovnou k druhému load balanceru.

1. Server 1 vypadne
2. Server 2 se hned nastaví jako hlavní, sessions se opět začnou replikovat na nějaký další server...

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241220150912.png)
![](../../Assets/Pasted%20image%2020241220150906.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749909-->
END

---

### Performance Tuning

START
FIT-Card

Proč je důležitý mít hodně přesný monitoring systému?

Back:

Využiju to, když:
1. Něco nefunguje a potřebuju **rychle identifikovat**, kde je problém (např. že je zahlcený spoj s databází)
2. Typicky se mi třeba postupně něco zpomaluje tím, jak mi narůstají data nebo uživatelé. Já potřebuju mít **historii**, abych mohl sledovat trendy v mé databázi. Pak můžu např. sledovat, že se mi postupně zvyšuje latence. To nejsem schopný zjistit, když nemám dlouhodobý monitoring 
<!--ID: 1735205749911-->
END

---


START
FIT-Card

Jaké jsou základní kroky monitoringu?

Back:

1. **Sběr dat**
2. **Uložení**
3. **Zobrazení**
<!--ID: 1735205749914-->
END

---


START
FIT-Card

Na jakých místech bych měl monitorovat?

Back:

1. **Aplikační server** - log files
2. **Operační systém** - otevřené sockety, paměť, context switching, I/O performance, CPU usage
3. **Databáze** - SQL skripty pro sběr metrik
<!--ID: 1735205749916-->
END

---


START
FIT-Card

Jaké technologie se dají využít pro monitoring?

Back:

- **Vendoři aplikačních serverů** typicky nabízí monitoringy (GCP, Azure,...)
- **Aplikace** - AppDynamics, Oracle Enterprise Manager, Splunk
- Google stackdriver, Amazon AWS CloudWatch

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241220153229.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749919-->
END

---

### Doplňující informace


START
FIT-Card

Jaký status kód je pro "`Unauthorized`"?

Back:

`401`
<!--ID: 1736674205778-->
END

---


START
FIT-Card

Jaký status kód je pro `Accepted`?

Back:

`202`
<!--ID: 1736674205782-->
END

---


START
FIT-Card

Jaký **status kód a message** je pro to, když chce v rámci concurrency control server odmítnout klienta, že klient nemá aktuální data (na základě if-unmodified-since nebo if-match)?

Back:

`412 Precondition Failed`
<!--ID: 1736674205785-->
END

---


START
FIT-Card

Jaký **status kód a message** je pro to, když server chce říct klientovi, že se resource nezměnil (na základě etagu nebo last modified)?

Back:

`304 Not Modified`
<!--ID: 1736674205788-->
END

---

START
FIT-Card

Jaké **headery** dává typicky **server** do response pro **cachování**? (3)

Back:

- `Cache-Control` - nastavení cachování
- `Last-Modified`
- `ETag`
<!--ID: 1736676401156-->
END

---

START
FIT-Card

Jaké **headery** dává typicky **klient** do requestu pro **cachování**? (2)

Back:

- `If-Modified-Since`
- `If-None-Match`
<!--ID: 1736676401170-->
END

---

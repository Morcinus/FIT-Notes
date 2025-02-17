---
created: 2024-12-09T09:16:44
title: High Availability and Performance
up:
  - "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1 prednaska11 status-toReview

START
FIT-Card

Co z pohledu uživatele znamená výkon aplikace?

Back:

Uživatel by neměl pocítit změnu ve výkonu aplikace nezávisle na počtu requestů/uživatelů.
<!--ID: 1735205749757-->
END

---


START
FIT-Card

Jak lze dosáhnout **dobrého výkonu** aplikace? (3)

Back:

- **Infrastruktura** - škálovatelnost, failover, cluster architectures
- **Ladění výkonu** (performance tuning) - Aplikační server, operační systém, správa paměti...
- **Service configuration** - paralelní processing, optimalizace procesů
<!--ID: 1735205749759-->
END

---


START
FIT-Card

Co je throttling?

Back:

Nastavím aplikaci tak, aby omezovala počet requestů, které je ochotná přijmout. Zbytek prostě nepřijme.

Říkám tím, že aplikace byla vytvořna na maximálně daný počet requestů
<!--ID: 1735205749762-->
END

---


START
FIT-Card

Jaké dvě metriky sledujeme, co se týče výkonu aplikace?

Back:

- **škálovatelnost** - schopnost systému se nafouknout
- **availability** - dostupnost (např. $99.9987\%$ - cca 44 sekund downtime za rok)
<!--ID: 1735205749764-->
END

---


START
FIT-Card

Jaké jsou dva typy škálování?

Back:

- **horizontální** - zvýšíme počet instancí aplikace
- **vertikální** - přidáváme výkon (hardware, paměť, cpu...)

<!-- DetailInfoStart -->
Vertikální může být složitější, protože když např. přidám nové CPU, musím systém restartovat, což někdy může být problém
<!-- DetailInfoEnd -->
<!--ID: 1735205749766-->
END

---


START
FIT-Card

Co je SLA?

Back:

Service Level Agreement - garantuju availability

<!-- DetailInfoStart -->
Pokud to nedodržím, zákazník např. dostane slevu
<!-- DetailInfoEnd -->
<!--ID: 1735205749769-->
END

---


START
FIT-Card

Co je pojem **High Availability**?

Back:

Systém je sám schopný reagovat na chyby a incidenty.

<!-- ExampleStart -->
Když spadne instance serveru, aplikace pokračuje a např. se to automaticky nahodí zpátky.
<!-- ExampleEnd -->
<!--ID: 1735205749771-->
END

---


START
FIT-Card

Co je **application failover**?

Back:

Když instance aplikace failne a není dostupná, kopie failnutý aplikace dokončí tu práci. 
<!--ID: 1735205749774-->
END

---


START
FIT-Card

Co je **load balancing**?

Back:

Distribuují se requesty na několik instancí serveru
<!--ID: 1735205749776-->
END

---

### Performance Metrics


START
FIT-Card

Jaké performance metriky se sledují u komunikace klient-server?

Back:

- **Response time** - $\text{round trip time} - \text{service processing time}$
- **QPS** - queries/requests per second
	- počet requestů, které přichází do systému za sekundu
	- dá se zlepšit cachováním
<!--ID: 1735205749779-->
END

---

### Zpracovávání requestů

#### Synchronní IO
START
FIT-Card

Co je model **synchronní IO**? Jaké **2 typy connnections** existují?

Back:

Komunikace probíhá synchronně:
- **inbound connection** - přijde request, server vytvoří **vlákno**, které zpracuje požadavek a odpoví
- **outbound connection** - přistupuju z aplikačního serveru do databáze.

V dnešní době se to dělá následovně:
- Systém dostane request, pošle query do databáze.
- Na úrovni mezi aplikační vrstvou a databází je synchronní připojení. Jedna funkce requestu 1 přistupuje do databáze, ostatní funkce do přistupují do databáze čekají.

Problém:
- Když chci spočíst server processing time, tak to není vypovídající, protože např. zpracování requestu reálně zabere 20ms, ale protože čeká kvůli synchronním IO v databázi, než ostatní requesty přestanou přistupovat do databáze. Kvůli tomu mi pak request zabere třeba 1020ms, protože čekal na ostatní requesty.

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241209101338.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749781-->
END

---


START
FIT-Card

Jak se řeší pomalé synchronní IO?

Back:

Když např. nemůžu ovlivnit synchronní přístup do databáze (protože ji spravuje někdo jiný), spočítám si, kolik requestů za sekundu průměrně přijímá můj server.

Potom vytvořím tolik **vláken**. Můžu potom třeba udělat to, že budou mít sdílený **thread pool** do databáze.

<!-- ExampleStart -->
Mám 20 requestů za sekundu, rozběhnu si 20 vláken, 1 thread pool do databáze s 20 vlákny.
<!-- ExampleEnd -->
<!--ID: 1735205749784-->
END

---


START
FIT-Card

Jaká je nevýhoda synchronního IO?

Back:

Když se mi najednou zpomalí databáze (kterou já nemám pod kontrolou, ale spravuje ji někdo jiný), nemůžu s tím nic udělat - nemůžu to nijak naškálovat tak, abych splňoval SLA a požadovanou availability.

<!-- DetailInfoStart -->
Mohl bych teoreticky navýšit počet spojení do databáze, ale to nemůžu dělat neomezeně.
<!-- DetailInfoEnd -->
<!--ID: 1735205749786-->
END

---


START
FIT-Card

Jak se dá vyřešit to, když mám synchronní přístup do databáze ale ta databáze je pomalá (a my nemáme kontrolu nad tou databází)?

Back:

Nastavím tam **timeout**. Díky tomu mi request vypadne s nějakou chybou a přestane to **blokovat** ostatní requesty.
<!--ID: 1735205749789-->
END

---


START
FIT-Card

Jak funguje **fronta requestů** před tím než se jim přiřadí vlákna?

Back:

1. Přijde mi request
2. Zařadí se do fronty (např. s kapacitou 100)
3. Request čeká na to, až mu bude přiřazeno vlákno pro přístup do databáze.
4. Pokud je kapacita fronty plná, rovnou se requesty odmítají (díky čemuž to je rychlejší, protože se nezatěžuje ten systém, když vím, že bych to stejně nestíhal zpracovávat)
<!--ID: 1735205749792-->
END

---

#### Asynchronní IO
START
FIT-Card

Jak funguje Asynchronní IO?

Back:

Používám **jedno vlákno** pro přístup do databáze/filesystému pro obsloužení všech requestů.

Když funkce provádí IO operaci (read write), vlákno se přepíná mezi úlohami.

Např.
1. Funkce $A$ požádá o přečtení databáze
2. Vlákno o to požádá databázi a čeká na odpověď, má volný čas
3. Mezitím začne obsluhovat požadavek funkce $B$

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241209101321.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749794-->
END

---


START
FIT-Card

Jaká je výhoda Node v Javascriptu?

Back:

Na **outbound connections** umožňuje dělat asynchronní IO.

Používají se k tomu callback funkce. Když vlákno dokončí operaci, zavolá mezitím jinou funkci.
<!--ID: 1735205749796-->
END

---

### 

START
FIT-Card

Jak funguje zpracovávání požadavků v synchronním IO? (Na tohle se nebude ptát - na ty pojmy.. chce spíš znát ten princip, což je už na jiných kartičkách)

Back:

- **Muxer** - poslouchá na TCP portu a přijíma requesty
- **Request queue** - fronta, kam se zařazují requesty
- **Thread pool** - vlákna, která jsou přiřazena vždy jednomu požadavku
	- Mají různé stavy (active, standby, idle, hogging, stuck)
	- **hogging** - vlákno zpracovává IO operaci
	- **stuck** - vlákno čeká déle než povolenou dobu na IO operaci
- **Work manager** - konfigurace maximálního počtu vláken a kapacity 
<!--ID: 1735205749799-->
END

---

### Load balancing

START
FIT-Card

Jaké jsou typy loadbalancerů? (4)

Back:

- **DNS-based** load balancer
- **NAT-based** load balancer - pracují na transportní vrstvě
	- Tohle používá Kubernetes
- **Reverse-proxy load balancer**
	- Běží na aplikační vrstvě
	- Např. nginx, JSession
- **Client-side load balancer**
	- Klient sám rozposílá requesty na různé servery
<!--ID: 1735205749804-->
END

---


START
FIT-Card

Jak funguje NAT-based load balancer?

Back:
 
Funguje principem DNAT - na úrovni síťové vrstvy přepisuje destinations jednotlivých paketů, díky tomu takhle rozhazuje pakety mezi několik serverů.

- **SNAT** - "source NAT" - přepisuje adresu zdroje
- **DNAT** - "destination NAT" - přepisuje adresu cíle
<!--ID: 1735205749806-->
END

---


START
FIT-Card

Jak funguje DNS Load balancer?

Back:

Využívá se DNS Round Robin
- DNS record má hodně IP adres
- DNS postupně střídá IP adresy v odpovědích
<!--ID: 1735205749809-->
END

---


START
FIT-Card

Jak funguje Forward Proxy?

Back:

Mechanismus, který umožňuje přistupovat do sítě
- Když jako klient přistupuju k adrese, vím kam chci přistoupit.
- Přístup jde skrze forward proxy
	- Ta může například request zakázat, cachovat atd.

<!-- ExampleStart -->
Ve firmě můžu mít nakonfigurovanou proxy, aby omezovala přístup do internetu. Např. abych zakázal určité stránky atd. 
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241209104338.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749812-->
END

---

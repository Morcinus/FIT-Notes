---
created: 2025-03-20T16:37:01
title: "Idk"
up: "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska06 status-toReview

![](../../Assets/Pasted%20image%2020250320163829.png)


START
FIT-Card

Co jsou **big data**?

Back:

**Velké množství** (**rychle měnících** se) **potenciálně hodnotných** dat, která se nedají dobře managovat tradičními způsoby.
<!--ID: 1748438655130-->
END

---


START
FIT-Card

Co jsou **3Vs** v big data?

Back:

- **volume** - obrovské množství
- **velocity** - rychle přibývají
- **variety** - různé formáty
- (existují další Vs)
<!--ID: 1748438655142-->
END

---


START
FIT-Card

Co jsou **structured, semistructured a nonstructured data**?

Back:

- **structured** - tabulky, předdefinovaná schémata, relační databáze,...
- **semistructured** - JSON, XML, grafy, NoSQL, grafové databáze
	- Schéma není vynuceno
- **nonstructured** - obrázky, audio, social media atd.
<!--ID: 1748438655145-->
END

---



START
FIT-Card

Jaké jsou 3 hlavní tools pro Big data?

Back:

- Hadoop
- Spark
- Kafka
<!--ID: 1746599651249-->
END

---


START
FIT-Card

Jaký je rozdíl mezi **vertikálním** a **horizontálním škálováním**?

Back:

- **vertikální** - zvyšujeme výkon jednoho serveru
- **horizontální** - zvyšujeme počet instancí aplikace

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250528150424.png)
<!-- ImageEnd -->
<!--ID: 1748438655148-->
END

---


START
FIT-Card

Jaké jsou **2 typy data processingu**?

- co to je
- co se sleduje za metriku
- co je efektivnější
- co se používá za tool

Back:

- **Batch processing**
	- zpracuju **hodně dat najednou** např. jednou za den
	- sleduje se **throughput** - kolik zpracovaných records za čas
	- efektivnější zpracovávání
	- např. Hadoop, Spark
- **Stream processing**
	- data se zpracovávají **průběžně** (téměř real-time)
	- sleduje se **latency** - čas od začátku po konec processingu
	- méně efektivní zpracovávání (protože to musí být real-time)
	- např. Kafka, Spark
<!--ID: 1748438655151-->
END

---


START
FIT-Card

Co je **Hadoop**?

Back:

Open source platforma pro distribuované zpracovávání velkého množství dat.
<!--ID: 1746599651256-->
END

---


START
FIT-Card

Jaké části má **Hadoop**? (4)

Back:

- **Hadoop Common** - obsahuje hadoop knihovny
- **Hadoop Distributed File System** (HDFS) - distribuovaný file system na více zařízeních
- **Hadoop YARN** - spravuje resources v clusterech a scheduling uživatelských úloh
- **Hadoop MapReduce** - implementace MapReduce modelu pro zpracování velkých dat
<!--ID: 1746599651290-->
END

---


START
FIT-Card

Jaké jsou části **HDFS**? (2)

Back:

- **NameNode** - "mozek systému", obsahuje metadata o tom, kde je co uloženo
- **DataNode** - jsou tam uloženy datové bloky
	- jsou typicky replikovány
	- mají dobrou škálovatelnost

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250320164622.png)
<!-- ImageEnd -->
<!--ID: 1746599651309-->
END

---


START
FIT-Card

Jaké jsou hlavní vlastnosti **Hadoopu**?

Back:

- **Replication factor** - na kolik různých data nodů se data uloží
	- Díky tomu je fault tolerant
- **Scalable** - dobře se škáluje
- **Large files** - obsahuje obří data
<!--ID: 1746599651326-->
END

---


START
FIT-Card

Jak funguje **Hadoop MapReduce**? (5 fází)

Back:

1. **Splitting** - Rozseká se vstup na více menších chunků
2. **Mapping** - data se transformují na mapu (key value pairs)
3. **Shuffling** - Data se sesortí a groupnou podle klíče
4. **Reducing** - Reducer zprocesuje každou část key-value párů
5. **Final result** - Data se opět spojí do jednoho výsledku

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250320165222.png)
<!-- ImageEnd -->
<!--ID: 1746599651340-->
END

---


START
FIT-Card

Jak funguje **Hadoop YARN**?

Back:

Komponenta v Hadoopu, co spravuje systémové prostředky a umožňuje spouštět výpočetní úlohy v clusteru

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250320165433.png)
<!-- ImageEnd -->
<!--ID: 1746599651353-->
END

---


START
FIT-Card

Co je Apache **Spark**?

Back:

Je to **in-memory** výpočetní rámec pro distribuované zpracovávání dat.
- Je rychlejší než **MapReduce** (díky in-memory méně I/O operací)
- Lze použít pro batch processing i streaming
- Často používaný pro **machine learning** nebo **grafové výpočty**
- Dá se spustit v Hadoopu
<!--ID: 1746599651268-->
END

---


START
FIT-Card

Co je Apache **Kafka**?

Back:

Distribuovaná platforma pro zpracovávání data streamů v reálném čase.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250528152441.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599651280-->
END

---


START
FIT-Card

Jaký engine se pro big data používá nejvíce?

Back:

Apache **Spark**
<!--ID: 1746599651366-->
END

---


START
FIT-Card

Jak funguje **Kafka high level architecture**?

Back:

- **Producer** - aplikace co generuje zprávy (označené nějakým topicem)
- **Kafka cluster** - Obsahuje "brokers" (servery), každý broker spravuje data a ukládá je do **topiců**
- **Consumer** - aplikace co čte zprávy z topiců

Topic je jakoby fronta zpráv. Kafka zprávy nemaže po přečtení, ale třeba po 7 dnech.

![](../../Assets/Pasted%20image%2020250320170453.png)
<!--ID: 1746599651409-->
END

---


START
FIT-Card

Jaké jsou **4 role v bigdata**?

Back:

- **DevOps engineer** - automatizuje data workflows a pipelines atd.
- **Data Analyst** - dělá reporting a analýzy pro byznys
- **Data engineer** - spravuje processing a workflow dat
- **Data Scientist** - dělá statistiky, data mining, predikce, atd.
<!--ID: 1746599651427-->
END

---

START
FIT-Card

Co jsou **Databricks**?

Back:

- **Cloudová platforma pro analýzu a zpracovávání dat** (integrace s AWS, GCP, Azure)
- je to **Lakehouse** = data lake + data warehouse 
- Je to "all in one" - big data zpracovávání, datové inženýrství, machine learning, business intelligence v jednom prostředí

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250528153525.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599651490-->
END

---


START
FIT-Card

Co jsou **Snowflakes**?

Back:

- **Cloudový datový sklad**
- Slouží k **rychlému dotazování** nad velkými objemy dat
- Více zaměřený na business intelligence, reporting a datovou analýzu
- je to drahý jak debil

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250320171852.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599651499-->
END

---


![](../../Assets/Pasted%20image%2020250320173244.png)
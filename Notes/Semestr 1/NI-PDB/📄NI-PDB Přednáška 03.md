---
created: 2024-10-08T12:08:53
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB prednaska03 status-toReview

### Big Data

START
FIT-Card

Co jsou **big data**?

Back:

Big data jsou **velké množství** dat, která **rychle nabývají** a jsou **různorodý**.

<!-- ExampleStart -->
- **Social media networks** - hromada dat
- **Scientific instruments** - zpracování dat z teleskopů, výzkumů atd.
- **Mobilní zařízení** - trackování úplně všeho
- **Senzorové technologie** - IoT
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241008121653.png)
<!-- DetailInfoEnd -->

<!-- OtherInfoStart -->
![](../../../Assets/Pasted%20image%2020241008121202.png)
<!-- OtherInfoEnd -->
<!--ID: 1728921214687-->
END

---


START
FIT-Card

Jaké jsou **příklady big data**? (4)

Back:

- **Social media networks** - hromada dat
- **Scientific instruments** - zpracování dat z teleskopů, výzkumů atd.
- **Mobilní zařízení** - trackování úplně všeho
- **Senzorové technologie** - IoT
<!--ID: 1728921214689-->
END

---

START
FIT-Card

Jaké jsou **7 hlavní charakteristiky big data**?

Back:

- **Volume** - velké množství dat
- **Velocity** - rychle nabývají data
- **Variety** (complexity) - data mají různou strukturu
- **Veracity** (uncertainty) - nejistota dat, nakolik můžu datům důvěřovat
- **Value** - musí být hodnotná pro byznys (nemá cenu uchovávat něco nepodstatnýho)
- **Validity** - podobný jako veracity
- **Volatility** - čas, po jakou dobu by měla být data uchována

- Cardinality
- Continuity
- Complexity

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241008122821.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214692-->
END

---

### NoSQL databases


START
FIT-Card

Čeho je zkratka **OLTP**?

Back:

**Online Transaction Processing**
<!--ID: 1728921214695-->
END

---


START
FIT-Card

Čeho je zkratka **OLAP**?

Back:

**Online Analytical Processing**
<!--ID: 1728921214697-->
END

---


START
FIT-Card

Co znamená **NoSQL**?

Back:

**NoSQL movement** = hledání alternativ pro řešení problémů, pro které je SQL špatný

<!-- ExampleStart -->
Např. mám NoSQL, které se zaměřuje na grafy, škálování atd.
<!-- ExampleEnd -->


<!-- DetailInfoStart --> 
Tohle je pro srovnání relační databáze
![](../../../Assets/Pasted%20image%2020241009142251.png)
![](../../../Assets/Pasted%20image%2020241009142331.png)
![](../../../Assets/Pasted%20image%2020241009142427.png)
![](../../../Assets/Pasted%20image%2020241009142507.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214701-->
END

---


START
FIT-Card

Jaké typické vlastnosti mají NoSQL databáze? (4)

Back:

- **dobře horizontálně škálovatelné**
- **schema free** - nemají striktní schéma
- **eventually consistent** - není tam strong konzistence
- **pro obrovská množství dat**
<!--ID: 1728921214704-->
END

---


START
FIT-Card

Jaké jsou **hlavní typy** NoSQL databází? (4)

Back:

- **key-value** storage
- **wide column** storage
- **document** storage
- **Graph** databáze

Vedlejší typy
- XML databáze
- Objektové databáze
- RDF
<!--ID: 1728921214706-->
END

---


START
FIT-Card

Co jsou multimodelové databáze?

Back:

To, když mi database engine umožňuje ukládat data do **jedné databáze** ve více **datových modelech**.

<!-- ExplanationStart -->
Díky tomu si můžu použít několik databázových modelů přesně na ta data, na která jsou vhodná.

Dá se to taky řešit tak, že mám prostě více databází - to je v reálných projektech dost časté.
<!-- ExplanationEnd -->
<!--ID: 1728921214709-->
END

---


#### Key-value storage
START
FIT-Card

Co jsou **key-value stores**?

Back:

V storage je **key** a **value** (s libovolnou hodnotou).

<!-- DetailInfoStart -->
Je to hrozně jednoduchý a díky tomu dobře škálovatelný.

![](../../../Assets/Pasted%20image%2020241011102321.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214712-->
END

---


START
FIT-Card

Kdy je například dobrý použít **key-value** storage?

Back:

Obecně na data, ke kterým potřebuju jen přistupovat pomocí **klíče** a nemusím řešit jejich vztahy a komplexnější dotazy.

<!-- ExampleStart -->
- Session data
- Uživatelský informace
- Obecně kdykoliv kdy potřebuju přistupovat pouze pomocí klíče (a neřeším vztahy atd.)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011102425.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214715-->
END

---

#### Document stores


START
FIT-Card

Co je **document store**?

Back:

Mám **hierarchickou strukturu dokumentů** (typicky JSON a XML).
- Každý dokument má unique identifier
<!--ID: 1728921214718-->
END

---


START
FIT-Card

Na co je dobrý **document store**?

Back:

Tam kde je třeba ukládat **větší množství** dokumentů s podobným schématem.

<!-- ExampleStart -->
Event logging, content management systems, web analytics, e-commerce applications,...
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011103230.png)
![](../../../Assets/Pasted%20image%2020241011103239.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214721-->
END

---


#### Wide Column stores

START
FIT-Card

Co je **wide column store**?

Back:

Máme **column family** (table).
- Jednotlivé řádky tabulky jsou podobné, ale ne nutně stejné (nějaké sloupečky jsou optional)
- Atributů v jednom řádku je hodně (desítky až stovky) -> proto wide column
- Přistupuju pomocí **klíče** a pár conditions. Není tam tolik možností jako u WHERE v SQL.

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011103622.png)
![](../../../Assets/Pasted%20image%2020241011103658.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214724-->
END

---


START
FIT-Card

Kdy je dobré použít **white column** storage?

Back:

Pro data, která mají podobná schémata, ale nevyžadují ACID a komplexní queries (SUM, AVG, joining,...)

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241011103929.png)
<!-- ExampleEnd -->
<!--ID: 1728921214727-->
END

---

#### Graph databases


START
FIT-Card

Co jsou **grafové databáze**?

Back:

Modelované jako **graf**:
- **Nodes** (real-world entities)
- **Relationships** (hrany).

Uzly i hrany mohou mít **properties**.
<!--ID: 1728921214730-->
END

---



START
FIT-Card

Kdy je vhodné používat **grafové databáze**?

Back:

Když moje data mají strukturu **grafu**, obzvlášť, když potřebuju ten graf potom **prohledávat** grafovými algoritmy (např. hledání nejkratší cesty atd.).

<!-- ExampleStart -->
Vhodné pro sociální sítě, routing, recommendation engines, lingvistické stromy atd.

Prostě vhodné pro grafové struktury.
<!-- ExampleEnd -->


<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011104638.png)
![](../../../Assets/Pasted%20image%2020241011104257.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214733-->
END

---

#### XML databáze

START
FIT-Card

Co jsou **XML databáze**?

Back:

Podobné jako **document storage**, ale pomocí XML

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011104826.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214736-->
END

---

#### RDF Stores


START
FIT-Card

Co jsou **RDF storage**?

Back:

Mám **komponenty** složené z:
- subject
- predicate
- object

Každý komponent reprezentuje **tvrzení** o reálném světě.

Pak to reprezentuje graf.
<!--ID: 1728921214739-->
END

---

#### Fičury NoSQL


START
FIT-Card

Co je **agregate**?

Back:

Datová jednotka s komplexní strukturou.

<!-- ExampleStart -->
V dokumentových databázích to je například daný dokument. U relačních databází to je řádek (n-tice).
<!-- ExampleEnd -->
<!--ID: 1728921214741-->
END

---


START
FIT-Card

Co znamená **aggregate-ignorant** a **aggregate-oriented**?

Back:

- **aggregate-ignorant** - relační, grafové databáze
- **aggregate-oriented** - key-value, document, white column

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011105443.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214745-->
END

---


START
FIT-Card

Jaké jsou **2 typy škálování databází** a co znamenají?

Back:

- **horizontální** - koupim další node, který zařadím do sítě
- **vertikální** (nahoru) - koupím silnější hardware (nebo větší množství místa atd.) 
<!--ID: 1728921214748-->
END

---


START
FIT-Card

Jaké jsou dva typy **data distribution** v databázích?

Back:

- **sharding** - rozdělení databáze na výpočetní uzly
- **replication** - více kopií agregátu

<!-- ExplanationStart -->
Výhodou je pak zvýšený výkon.
<!-- ExplanationEnd -->


<!-- DetailInfoStart -->
Často se dělá obojí

![](../../../Assets/Pasted%20image%2020241011105820.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214751-->
END

---


START
FIT-Card

Co je fičura **automated processes** v NoSQL databázích?

Back:

Snaha všechno **automatizovat**, aby se nemuseli trénovat administrátoři pro správu databáze, ale aby si to db engine dělal všechno sám.

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011105956.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214753-->
END

---


START
FIT-Card

Co je **relaxed consistency** v NoSQL?

Back:

Není nutné, aby byla data furt konzistentní (ACID), ale jsou eventually konzistentní (BASE).

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011110101.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214756-->
END

---


START
FIT-Card

Co je **schemaless** vlastnost v NoSQL databázích?

Back:

Není striktně vynocované schéma v databázích.

<!-- ExampleStart -->
Dokumentové databáze např. nemají striktně danou strukturu JSON dokumentů.

Ano, můžu validovat JSON pomocí JSON schema, ale nemusím.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241011110203.png)
<!-- DetailInfoEnd -->
<!--ID: 1728921214759-->
END

---


START
FIT-Card

Rada do života od Valenty:
Jak prorazit s IT produktem v IT byznysu?

Back:

1. Vydat to jako **Open Source**, vybudovat **komunitu**
2. Pak vytvořit **Community Edition** za free a placenou **Enterprise Edition**

Takhle můžu prorazit s novou technologií, ostatními způsoby to prakticky moc nejde.
<!--ID: 1728921214761-->
END

---


START
FIT-Card

Jakých je **5 klíčových výhod NoSQL** přístupu?

Back:

- **Škálování** - jednoduše se horizontálně škáluje
- **Volume** - vhodné pro velké množství dat
- **Administrátoři** - nejsou tolik potřeba, protože se vše automatizuje
- **Economics** - o neco levnější než klasické SQL
- **Flexibility** - nejsou striktní data schemata 
<!--ID: 1728921214764-->
END

---


START
FIT-Card

Jakých je **5 klíčových nevýhod NoSQL** přístupu?

Back:

- **Maturity** - není tak zaběhlé a ověřené jako SQL
- **Support** - limitovaná podpora
- **Administrace** - občas obtížné na instalaci a údržbu
- **Analytiky** - není taková podpora jako u SQL
- **Expertise** - malé množství expertů
<!--ID: 1728921214767-->
END

---


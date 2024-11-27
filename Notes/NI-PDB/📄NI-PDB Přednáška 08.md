---
created: 2024-11-27T16:28:56
title: "Key-value"
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB prednaska08 status-toReview


START
FIT-Card

Jak obecně funguje key-value data model?

Back:

Mám klíč (id) a pomocí něho přistupuju k value.

END

---


START
FIT-Card

Jaké bývají klíče v key-value databázích?

Back:

- real-world identifikátory - email, login name atd.
- automaticky generované - např. auto increment

END

---


START
FIT-Card

Co je expirace key v key-value databázi?

Back:

Můžu danému key nastavit expiraci. Po vypršení expirace se objekt automaticky smaže.

END

---


START
FIT-Card

Jaký je například key-value store?

Back:

RiakKV (tím se zde zabýváme)

END

---


START
FIT-Card

Jak vypadá data model key-value databáze?

Back:

![](../../Assets/Pasted%20image%2020241127173023.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241127173101.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Co je bucket type v key-value databázi?

Back:

![](../../Assets/Pasted%20image%2020241127173128.png)

END

---


START
FIT-Card

Co je bucket v key-value databázi?

Back:

![](../../Assets/Pasted%20image%2020241127173142.png)

END

---


START
FIT-Card

Co je objekt v key-value databázi?

Back:

Key-value pár.

END

---


START
FIT-Card

Co bývá u objektů uloženo v key-value databázi kromě key-value?

Back:

metadata (např. MIME - content type)

END

---


START
FIT-Card

Jaké jsou 2 možnosti designu key-value databází?

Back:

Multiple buckets - každý typ entity v jiném bucketu
Single bucket - vše v jednom. Zde se potom typicky před klíč dává typ toho objektu. Např. `actor_trojan`, `movie_medvidek`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127173418.png)
<!-- DetailInfoEnd -->


END

---

### CRUD operace


START
FIT-Card

Pomocí čeho se komunikuje s Riak databází?

Back:

Hlavně pomocí **HTTP API**

END

---


START
FIT-Card

Co se používá v Riaku pro **create**?

Back:

**POST** nebo **PUT**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127173724.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co se používá v Riaku pro **update**?

Back:

**PUT**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127173724.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co se používá v Riaku pro **read**?

Back:

GET

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127173833.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co se používá v Riaku pro **delete**?

Back:

DELETE

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127173904.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak se dá v Riaku getnout seznam dostupných bucketů?

Back:

`GET /buckets?buckets=true`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127174019.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak se dá v Riaku getnout seznam dostupných keys?

Back:

`GET /buckets/[:bucketName]/keys?keys=true`

<!-- DetailInfoStart -->
Pozn. tenhle JSON může být dost obrovskej.
![](../../Assets/Pasted%20image%2020241127174114.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak se dá v Riaku getnout/nastavit/smazat properties daného bucketu?

Back:

Pomocí GET, PUT, DELETE  na `/buckets/[:bucket]/props`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127174252.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241127174247.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Jaké jsou bucket properties?

Back:

- `n_val` - replikační faktor
- `r/w` - read / write quorum
- `search_index`
- `datatype` - např. counter, set, map (viz další kartičky)
- `allow_mult` - povolení sibling objects

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127174416.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaký typ systému je Riak?

Back:

AP systém -> mohou vznikat konflikty

END

---


START
FIT-Card

Co jsou CRDT typy?

Back:

Convergent Replicated Data Types
- Zavedeme datové typy a konkrétní povolené operace a v případě konfliktů jak se to má resolvenout

END

---


START
FIT-Card

Jaké CRDT typy implementuje Riak?

Back:

Counter, set, map, register, flag,...

END

---

#### Data Types


START
FIT-Card

Co je **Counter** CRDT?

Back:

Integer, který umožňuje inkrementovat nebo dekrementovat. Nemůžu nastavit konkrétní hodnotu.

Konvergenční pravidlo:
- Postupně se aplikují inkrementy/dekrementy

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127174746.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **Set** CRDT?

Back:

Umožňuje přidávání/odebírání prvků z množiny.

Konvergenční pravidlo:
- Přidávání vyhrává nad odebíráním

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127174937.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **Map** v CRDT?

Back:

Podobně jako set, ale jsou tam names a values. Mohu přidávat/odebírat

Konvergenční pravidlo:
- Přidání vyhrává nad odebíráním

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127174928.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **register** v CRDT?

Back:

Umožňuje ukládat jakoukoliv binární hodnotu.

Konvergenční pravidlo:
- Vyhrává ten co byl chronologicky nejmladší (aka ta nejnovější změna)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127175049.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **flag** v CRDT?

Back:

Boolean true nebo false.

Konvergenční pravidlo:
- `true` (enable) vždy vyhrává nad `false` (disable)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127175116.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak můžu accessnout datatype pro daný bucket?

Back:

Pomocí `/types/[:type]/buckets/[:bucket]/datatypes/[:key]`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127175347.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241127175354.png)
<!-- ExampleEnd -->


END

---

### Search 2.0


START
FIT-Card

Co je Search 2.0 v Riaku?

Back:

Možnost vyrobit si full-text indexy.

END

---


START
FIT-Card

Jak funguje Search 2.0?

Back:

Je tam technologie Solr. Když něco ukládám, Solr to zaindexuje. 

Když se pak dotazuju, Solr mi vrátí danou response

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127175627.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co jsou extractory v Riaku?

Back:

Parsery pro object values.

Např. JSON extractor je parser pro JSON

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127175727.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak funguje plain text extractor?

Back:

Data se ukládají jako text. To samé funguje např. pro JSON nebo XML.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127175753.png)
![](../../Assets/Pasted%20image%2020241127175819.png)
![](../../Assets/Pasted%20image%2020241127175824.png)
![](../../Assets/Pasted%20image%2020241127175828.png)
<!-- DetailInfoEnd -->


END

---

#### Indexing schema


START
FIT-Card

Jak funguje inicializace indexu v Solr?

Back:

1. Pomocí `PUT /search/index/[:indexName]` vytvořím index
2. Pomocí `PUT /buckets/actors/props` přidám index do bucketu (název indexu je v request body)
3. Solr si zaindexuje data

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127175939.png)
![](../../Assets/Pasted%20image%2020241127180056.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak se dá dotazovat nad Solr indexama?

Back:

`/search/query/index?parametr=value`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127180211.png)
![](../../Assets/Pasted%20image%2020241127180225.png)
![](../../Assets/Pasted%20image%2020241127180233.png)

Jak pak vypadá search request:

![](../../Assets/Pasted%20image%2020241127180417.png)
![](../../Assets/Pasted%20image%2020241127180420.png)

<!-- DetailInfoEnd -->

END

---

### Internal details


START
FIT-Card

Jak vypadá architektura Riak?

Back:

je to AP systém (tedy availability + partition tolerance)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127180532.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je Riak Ring?

Back:

Kruhová struktura, do které si riak mapuje klíče.

Podle toho se umisťují repliky záznamů tak, aby byl rovnoměrně rozdělené na tom kruhu.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127180542.png)
![](../../Assets/Pasted%20image%2020241127180718.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127180601.png)
<!-- ImageEnd -->


END

---

## Wide column databases


START
FIT-Card

Jaký je například databázový engine pro wide column databáze?

Back:

Cassandra

END

---


START
FIT-Card

Co je obecně pointa wide column databáze?

Back:

Je to databáze určená pro velké množství dat a pro velký množství uživatelských přístupů.

END

---


START
FIT-Card

Co je column family ve wide column databázi?

Back:

Tabulka, která je kolekcí **podobných řádek**

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241127182256.png)
![](../../Assets/Pasted%20image%2020241127182325.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Co je row ve wide column databázi?

Back:

Kolekce **columns**
Každý má row key

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241127182256.png)
![](../../Assets/Pasted%20image%2020241127182325.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Co je column ve wide column databázi?

Back:

Je to sloupeček.

Pozn. hodnoty zde mohou být i např. sets, lists, maps. Nemusí to být atomické.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241127182256.png)
![](../../Assets/Pasted%20image%2020241127182325.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Jak vypadá data model v Cassandře?

Back:

Instance -> keyspaces -> tables -> rows -> columns

- keyspaces
- table
- row
- column

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127181500.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jaké mohou mít hodnoty columns ve wide column databázích?

Back:

Všechno možný - text, integers, lists, tuples, maps, sets atd.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127182204.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jaká metadata jsou např. u sloupečků?

Back:

Např. time to live, timestamps atd.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127182432.png)
<!-- DetailInfoEnd -->


END

---

### CQL


START
FIT-Card

Jaké jsou jazyky pro komunikaci s Cassandrou?

Back:

Jazyk **CQL** a command line shell **CQLSH**

END

---

#### DDL Statements


START
FIT-Card

Jak můžu vytvořit keyspace v Cassandře?

Back:

`CREATE KEYSPACE`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127182635.png)
![](../../Assets/Pasted%20image%2020241127182644.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak můžu vytvořit tabulku v Cassandře?

Back:

`CREATE TABLE`

Na rozdíl od SQL musím specifikovat primární klíč

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127182706.png)
![](../../Assets/Pasted%20image%2020241127182722.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké mohou být klíče v Cassandře?

Back:

- **Primární klíče**
	- **Partition key** - aspoň jeden sloupeček
	- **Clustering columns** -

END

---

---
created: 2025-01-17T09:33:57
title: "Příprava ke zkoušce"
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB-Exam
FILE TAGS: NI-PDB

### Optmalizace SQL

START
FIT-Card

Co je to **cost-based optimalizace** a jak se využijí **statistiky o databázových objektech** při cost-based optimalizaci?

Back:

**Co je cost-based optimalizace:**
- Na základě struktury dotazu se udělá **execution plan** (strom operací)
- Každý plán má **cost** - počet I/O bloků k procesování
- Optimalizace = hledání **nejlepšího plánu** (spočtení costs a vybrání nejlepšího)

**Využití statistik:**
- Slouží k **odhadu/výpočtu** ceny **operací** a pak **celkového plánu**

<!-- ExampleStart -->
**Statistiky:**
Například pokud statistika nad indexem napovídá, že v převážná většina řádků má hledanou hodnotu, může být index ignorován, protože sekvenční průchod může být rychlejší než náhodný průchod (z důvodu doby vystavování hlaviček disků).
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250118101326.png)
<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145101-->
END

---

START
FIT-Card

Jak vypadá **zpracování SQL dotazu** (fáze zpracování dotazu, kde a jak se při nich dá optimalizovat)?

Pozn. fáze zpracovávání dotazu jsem nikde nenašel - plz pokud někdo tušíte, co by to mohlo být, tak mi to napište a já to fixnu.

Back:

**Fáze:** (tohle je částečně z ChatGPT:)
- **Parsing** - provede se syntaktická a sémantická analýza, výsledkem je abstract syntaxt tree (AST)
- **Optimalizace** - výstupem je optimalizovaný prováděcí plán
- **Execution** - vykoná se dotaz
- **Formátování výsledku** - zformátuje se a pošle se výsledek

**Kde se dá optimalizovat**:
- **Fáze Optimalizace**:
	- **indexy** - jejich přidání/upravování
	- **sledování systémových statistik** a úprava konfigurace podle nich
	- "hinty" pro optimaliztor (např. jaký join algoritmus použít)
- **Fáze Execution**:
	- **paralelní zpracování**
	- **uložení dat** - partitioning, clustery atd.
	- **caching**
	- **materializované pohledy**

Pozn. hodně věcí, co se dá optimalizovat ve fázi optimalizace logicky ovlivní i fázi execution.

Tags: reviewed
<!--ID: 1737106145106-->
END

---

START
FIT-Card

Vysvětlete rozdíl mezi **heap table** a **index-organized table**.

Back:

**Heap table**:
- sama o sobě nemá **žádný index**
- pořadí bloků je vpodstatě náhodné
- nové záznamy vyplňují prázdná místa
- pokud máme "heap table with index", tak má v listech ROWID, podle kterého se najde datový blok a řádek

**Index-organized table**:
- Funguje podobně jako index, ale má v listech rovnou **celé řádky**.

**Srovnání**:
- IOT může být rychlejší (menší počet I/O operací)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250118104335.png)
![](../../Assets/Pasted%20image%2020250118104321.png)
![](../../Assets/Pasted%20image%2020250118104305.png)
<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1737106145109-->
END

---

START
FIT-Card

Vysvětlete rozdíl mezi **heap table** a **cluster**.

Back:

**Heap table**:
- pořadí bloků je vpodstatě náhodné (nemají žádné pořadí/organizaci)
- nové záznamy vyplňují prázdná místa
- Může být heap table with index

**Cluster**
- Řádky z jedné nebo více tabulek, které spolu souvisí, jsou **uloženy u sebe** ve stejném bloku.
- K řádkům se pak přistupuje pomocí **cluster key**
- Díky tomu je rychlejší dotazování

**Srovnání**:
- Cluster může být rychlejší, protože např. data, co se často joinují jsou fyzicky u sebe.

<!-- ExampleStart -->
- **Heap Table with Index:**
	- A table of customers with an index on `customer_id`.
	- To find a customer, the database looks up the index to locate the row in the table.
- **Cluster:**
	- A cluster that stores `customers` and `orders` tables based on the `customer_id`.
	- Rows for a customer and their orders are stored physically close, so joining or querying them is faster.
<!-- ExampleEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250118105226.png)
<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1737106145112-->
END

---

START
FIT-Card

Vysvětlete rozdíl mezi **B-tree** a **bitmap** indexem, příklady vhodného použití obou typů indexů.

Back:

**B-Tree index**_:
- Vyvážený strom, v listu je klíč a adresa řádku s daty
- Vyvažování stromu dělá DBMS na pozadí
- DML operace jsou drahé
- Vhodné využití:
	- Sloupce s **vysokou kardinalitou** (např. jména)
	- **Vhodné pro OLTP**

**Bitmap:**
- bitmapa = binární matice všech záznamů a všech možných indexovaných hodnot
- Pro platné kombinace je v buňce jednička, jinak nula (viz obrázek)
- DML operace jsou velmi drahé
- Vhodné využití:
	- Sloupce s **nízkou kardinalitou** (např. pohlaví, kategorie)
	- Vhodné pro **datové sklady**

<!-- ImageStart -->
**B-Tree**
![](../../Assets/Pasted%20image%2020250118105604.png)

**Bitmap**
![](../../Assets/Pasted%20image%2020250118105945.png)
Když pak například spustím `SELECT` dle roku výroby, stačí jen vybrat řádky, kde je hodnota nastavená na `1`:
![](../../Assets/Pasted%20image%2020250118110005.png)
<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1737106145114-->
END

---

START
FIT-Card

Jaké jsou **typické statistiky pro tabulky** v relační databázi a jak se udržují když se pomocí DML mění data?

Back:

**Statistiky:**
Základní:
- `nR` - počet řádků v relaci $R$
- `V(A,R)` - počet různých hodnot $A$ v relaci $R$
- `pR` - počet stránek v relaci $R$
- `bR` - block factor - průměrný počet řádků, co se vejdou do jednoho bloku

Rozšířené:
- min and max values
- histogramy

**Udržování při změně dat:**
- Neaktuální statistiky způsobují nesprávný výpočet ceny dotazů
- Statistiky se nikdy živě nemění při DML operacích (to by příliš zatěžovalo stroj)
- Automaticky se přepočítávají enginem když databáze není busy (idle time)

<!-- DetailInfoStart -->
Připomenutí: DML = Data Manipulation Language

![](../../Assets/Pasted%20image%2020250118110727.png)
![](../../Assets/Pasted%20image%2020250118110721.png)
![](../../Assets/Pasted%20image%2020250118110951.png)
<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145117-->
END

---

START
FIT-Card

Jaké jsou **typické statistiky pro B-tree indexy** a jak se udržují když se pomocí DML mění data?

Back:

**Statistiky:**
Máme relaci $R$ s klíčem $A$:
- `f(A,R)` - faktor větvení - průměrný počet potomků vnitřního uzlu (typicky 50-150)
- `I(A,R)` - hloubka stromu (typicky 2-3)
- `p(A,R)` - počet listových bloků

**Rozšířené statistiky**:
- **Clustering factor** - počet bloků, co se musí přečíst, abych získal sesortěná data (podle klíče indexu)

**Udržování při změně dat**: (stejné jako u tabulek)
- Neaktuální statistiky způsobují nesprávný výpočet ceny dotazů
- Statistiky se nikdy živě nemění při DML operacích (to by příliš zatěžovalo stroj)
- Automaticky se přepočítávají enginem když databáze není busy (idle time)

Tags: reviewed
<!--ID: 1737106145120-->
END

---

START
FIT-Card

Co jsou to přístupové cesty (**access paths**) při vyhodnocování SQL dotazů? Uveďte příklady.

Back:

**Co jsou access paths**:
- Specifikují **cestu**, jak databázový stroj přistoupí k datům v tabulkách/indexech při provádění dotazu.

**Příklady**:
- **no-index** (full-table scan) - Databáze čte všechny řádky v tabulce, aby našla data odpovídající dotazu.
- **unique index** - pokud existuje unikátní index na sloupci
- **non-unique index** - pokud neexistuje unikátní index na sloupci, najdou se všechny řádky splňující danou podmínku
- **composed index** - skládá se z více sloupců

Potom jsou ještě index query only a base table query u nerovnostních dotazů, ale to mi přišlo jako už moc velký detail.

<!-- ExampleStart -->
**no-index**: 
`SELECT * FROM zamestnanci WHERE jmeno = 'Karel';`

**unique index**:
`SELECT * FROM zamestnanci WHERE id_zamestnance = 101;`

**non-unique index**:
`SELECT * FROM zamestnanci WHERE oddeleni = 'IT';`

**composite index**:
`SELECT * FROM zamestnanci WHERE oddeleni = 'IT' AND jmeno = 'Karel';`

<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250118113443.png)

Tady je imo špatně ten dotaz. Mělo by tam být víc podmínek:
![](../../Assets/Pasted%20image%2020250118113501.png)
![](../../Assets/Pasted%20image%2020250118113508.png)
<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145122-->
END

---

START
FIT-Card

Jaké znáte **metody vyhodnocení spojení (join)** v relačních databázích? Naznačte jak probíhají.

Back:

**Metody:**
- **nested loop join**
- **merge join**
- **hash join**
- **join s využitím speciálních struktur**

Předpokládejme relaci $R$ a $S$ s atributem $a$ a dotaz:
`select * from R join S on (R.a=S.a);`

**Nested Loop Join:**
- Dva cykly v sobě s danou podmínkou

**Merge join:**
1. Sortne se $R$ podle $a$
2. Sortne se $S$ podle $a$
3. merge - čtou se postupně sesortěné řádky, pokud $R.a = S.a$, skončí se

**Hash join:**
1. Vybere se hash funkce (např.$\mod(k)$)
2. Na obě relace se aplikuje hash funkce
3. porovnají se pouze skupiny z $R$ a $S$, které mají stejný hash

**Join s využitím speciálních struktur:**
- Např. když $a$ je v $S$ klíčem, udělá se lookup řádku s $a$ podle **indexu**. Potom se jen proiteruje $R$
- atd. těhlech speciálních případů je hodně

Tags: reviewed
<!--ID: 1737106145125-->
END

---

START
FIT-Card

Co to je **prováděcí plán (execution plan)**, jak vypadá a kdy vzniká? Vyplatí se ho cachovat? Pokud ano, za jakých okolností?

Back:

**Prováděcí plán**:
- Stromová struktura, kde:
	- **listy** jsou **zdroje dat** (tabulky, indexy) nad kterými se použije nějaká **přístupová metoda**
	- **vnitřní uzly** jsou **základní relační operace**
	- **kořen** reprezentuje celý SELECT dotaz
- Vzniká u SELECT dotazů v **optimalizační fázi** před tím, než se dotaz spustí

**Ano, vyplatí se cachovat pokud**:
- **opakovaně spouštíme stejný dotaz**
- **u složitých dotazů** nad hodně tabulkami, kde vytváření plánu zabírá moc času
- **pokud se data příliš nemění**, plán bude pravděpodobně stále efektivní

Tags: reviewed
<!--ID: 1737106145128-->
END

---

START
FIT-Card

Jaká je základní **strategie pro tvorbu prováděcího plánu**? Jsou situace, kdy se vyplatí spíše full-table scan přístup namísto index-based? Případně uveďte.

Pozn. tuhle kartičku jsem si trochu vycucal z prstu (a fitwiki a chatgpt), protože v přednáškách se o tom nic nepíše.

Back:

**Strategie:**
1. Analýza dotazu - rozložení dotazu do stromové struktury
2. Strom se sestaví na základě:
	- **Výběru strategie přístupu k datům** - (index based, full table scan atd.)
	- **Výběr strategie JOINování** - nested loop, hash, merge
	- **Použití podmínek z dotazu** - filtry, rozsahy atd.
	- **Zohlednění statistik** - např. velikost tabulky atd. 
	- **Použití hintů** - můžeme vynutit v konfiguraci určitou strategii

**Jsou situace, kdy se vyplatí full-table scan?**
- Ano, například: (podle chatgpt a fitwiki)
	- Když je **tabulka malá**
	- Když dotaz vrací **většinu řádků tabulky** (např. 20-30%)

Tags: reviewed
<!--ID: 1737106145130-->
END

---

START
FIT-Card

**Operace řazení**, v jakých situacích se používá, jaké jsou parametry pro odhad ceny řazení.

Back:

**Používá se například u:**
- merge joinu
- taky pro `DISTINCT`, `ORDER BY`, `HAVING`, set operace

**Parametry:**
- pR - počet stránek v relaci
- M - počet bloků, které se vejdou do paměti (RAM) při sortění

Statistiky sortění, které jsou důležité pro systém:
- počet **in memory sortů**
- počet **2 run sortů**
- počet **multi run**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250118121653.png)
<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145133-->
END

---

START
FIT-Card

**Postup při ladění výkonu DB serveru** (jak zjistíme co vázne, jak zvolíme SQL dotazy pro ladění?

Back:

1. **Sběr dat** - databáze se zatíží běžným provozem, logují se statistiky
2. **Analýza dat** - hledá se např. četnost SQL dotazů, řazení, atd.
3. **Optimalizace vybraných SQL příkazů**
	1. **Stanoví se základní metriky** před optimalizací 
	2. Je třeba porozumět **prováděcímu plánu** a **statistikám**
	3. **Provedou se optimalizace** - typicky úprava/přidání indexů, úprava uložení dat, hinty pro optimalizátor, materializované pohledy
	4. Změří se, jestli se **metriky zlepšily**

<!-- DetailInfoStart -->
Zdroj: https://courses.fit.cvut.cz/NI-PDB/lectures/10-benchmarks-acid-tuning/index.html#_db-server-tuning
<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145135-->
END

---

### OLTP vs OLAP, ORDBMS

START
FIT-Card

Vysvětlete rozdíly mezi **OLTP a OLAP** databází.

Back:

**OLTP: online transaction processing**

- je technologie uložení dat v databázi, která umožňuje jejich co nejsnadnější a nejbezpečnější modifikaci v mnoha uživatelském prostředí. Jedná se o přístup používaný v současné době v převážné většině databázových aplikací (historicky ještě poměrně nedávno dokonce ve všech databázových aplikacích).
- Např. eshop, kos – současně pracuje mnoho uživatelů, transakční aktivita uživatelů je nízká, transakce jsou náhodné a krátké
- SQL dotazy jsou stejné, liší se pouze v parametrech
- provadeci plan sa cachuje
- data vetsinou v 3NF

**OLAP: online analytical processing**

- je technologie uložení dat v databázi, která umožňuje uspořádat velké objemy dat tak, aby byla data přístupná a srozumitelná uživatelům zabývajícím se analýzou obchodních trendů a výsledků (Business Intelligence).
- OLAP nepoužívá na rozdíl od OLTP normalizované uložení dat v 3NF formě – data jsou v uložena tak, aby umožňovala rychlou realizaci složitých dotazů, časté je zdvojené (redundantní) uložení, které by v případě OLTP komplikovalo provádění změn v datech,
- OLAP používá podstatně více indexů než OLTP – opět to souvisí se zaměřením, kde indexy umožňují rychlé provedení složitých dotazů,
- OLAP na rozdíl od OLTP často používá předpočítané agregované a odvozené hodnoty.
<!--ID: 1737106145138-->
END

---

START
FIT-Card

Vysvětlete, případně uveďte na příkladech hlavní **přínos objektově relačních databázových systémů** oproti čistě relačním.

Back:

Je to rozšíření klasického relačního modelu o objektové prvky (databáze umí pracovat s objekty, existují v ní uživatelsky definované datové typy apod.).

\*\*

RDBMS pros

- powerful OLTP processing
- availability
- access rights
- administration tools
- standardized language (DML, DDL)
- concurrency
- integrity

OODBMS pros

- complex objects processing
- recursive structures
- abstract data types
- API to OO languages
- complex (long-time) transactions

Viz. [https://courses.fit.cvut.cz/NI-PDB/tutorials/01-opakovani-a-ordbms/ordbms/index.html](https://courses.fit.cvut.cz/NI-PDB/tutorials/01-opakovani-a-ordbms/ordbms/index.html)\*\*
<!--ID: 1737106145141-->
END

---

START
FIT-Card

Vysvětlete co je **reference na objekt (typ REF)** v objektově-relačních databázích. Jaký je rozdíl mezi referencí na objekt a cizím klíčem?

Back:

A REF is a logical pointer or reference to a row object that you can construct from an object identifier (OID).

You can use the REF to obtain, examine, or update the object. You can change a REF so that it points to a different object of the same object type hierarchy or assign it a null value.

REFs are Oracle Database built-in data types. REFs and collections of REFs model associations among objects, particularly many-to-one relationships, thus reducing the need for foreign keys. REFs provide an easy mechanism for navigating between objects.

- REF je podobný ukazateli v programovacích jazycích, protože neodkazuje pouze na hodnotu, ale na konkrétní objekt jako celek.
- Foreign key - Odkazuje na konkrétní hodnotu primárního klíče v jiné (nebo téže) tabulce.

[https://docs.oracle.com/database/121/JJDBC/oraoor .htm#JJDBC28567](https://docs.oracle.com/database/121/JJDBC/oraoor.htm#JJDBC28567)

**[![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdQIU3HPMZDtOiQBOJTPyp5WEy9jvtiQtVqrV6M5lU6mK3syW_F651m6yLaaYfTtQg-vHU0NhU3Jm7M-8a-Sej5HcqISPGck9NyyAebR97-1LFv2wSEQudHKPmn2OkhyyTOi2mqVWYp2VSVWL6_ELy3FMY?key=MR9RTuBxYyWmpndNFWTOiQ)](https://docs.oracle.com/database/121/JJDBC/oraoor.htm#JJDBC28567)**
<!--ID: 1737106145144-->
END

---

START
FIT-Card

Vysvětlete rozdíl mezi relační tabulkou obsahující **uživatelem definovaný datový typ** a **objektovou tabulkou**.

Back:

**Uživatelem definovaný datový typ** může být vícehodnotový atribut, strukturovaný atribut nebo jejich kombinace. Také mohou mít členské metody.  
(Object types and other user-defined data types allow you to define data types that model the structure and behavior of the data in their applications.)

[https://docs.oracle.com/cd/A91034_01/DOC/server.901/a88856/c14ordb.htm](https://docs.oracle.com/cd/A91034_01/DOC/server.901/a88856/c14ordb.htm)

**Relační tabulka** obsahuje sloupce, jejich typ může být buď předdefinovaný typ nebo uživatelem definovaný datový typ.  
(Objects that are stored as columns of a relational table, or are attributes of other objects, are called [column object](https://docs.oracle.com/database/121/ADOBJ/glossary.htm#CHDGJBJH)s. [Example 1-2](https://docs.oracle.com/database/121/ADOBJ/adobjint.htm#CIHCBDHG) shows the contacts table which stores an instance of the person_typ object.)

**Objektová tabulka** obsahuje pouze objekty - instance uživatelem definovaného datového typu. ([object table](https://docs.oracle.com/cd/B28359_01/appdev.111/b28371/glossary.htm#CHDGBJDA) - A table in which each row represents an object, which is referred to as a [row object](https://docs.oracle.com/database/121/ADOBJ/glossary.htm#CHDCGBAB). See ["Creating and Using Object Tables"](https://docs.oracle.com/database/121/ADOBJ/adobjint.htm#CHDHIEFH))

The key difference is that an object table can optionally contain an additional object identifier (OID) column and index.[[...]](https://docs.oracle.com/cd/B28359_01/appdev.111/b28371/adobjdes.htm#i443361)

Objects that have meaning outside of the relational database in which they are contained, or objects that are shared among more than one relational database object, should be made referenceable as row objects. That is, such objects should be stored as a row object in an object table instead of in a column of a relational table. [[...]](https://docs.oracle.com/database/121/ADOBJ/adobjint.htm#ADOBJ7025)\*\*
<!--ID: 1737106145146-->
END

---

START
FIT-Card

V jakém jsou vztahu **objektově-relační databázový stroj** a **ORM (object-relational mapping) technologie**? (co to řeší, kdy je co vhodné)

Back:

Obě se snaží umožnit přímé ukládání objektů do databáze (resp. umožnit pracovat s uloženými daty jako s objekty)

**ORDBMS**

- rozšíření klasického relačního modelu o objektové prvky (databáze umí pracovat s objekty, existují v ní uživatelsky definované datové typy apod.)
- Umožňuje přirozené uložení a manipulaci s objekty přímo v databázi (např. složité datové typy, dědičnost, metody na úrovni databáze).
- Primárně se snaží **minimalizovat nesoulad** mezi objekty v aplikaci a tabulkami v databázi tím, že databáze podporuje nativně objekty a jejich vztahy.

**ORM**

- mapování objektů na klasické relační tabulky
- software převede objekt na tabulková data, která následně uloží v relační databázi
- při čtení software z databáze získá tabulková data a na jejich základě instanciuje objekty
- v DB nejsou objekty, ale obyčejné tabulky → ORM vlastně s DB vůbec nesouvisí
- Umožňuje mapovat třídy a jejich atributy na tabulky a sloupce, takže vývojář může pracovat s databází prostřednictvím objektů, aniž by musel psát přímo SQL dotazy.

Kdy je co vhodné?

**Použití ORDBMS:**

- Složité datové modely: Potřebujete pracovat s komplexními typy dat (např. multimédia, geografická data, hierarchické struktury).
- Lepší výkon: Potřebujete zpracovat logiku přímo na úrovni databáze (např. metody, funkce nebo složité indexy na objektové typy).

**Nevýhody**:

- Vyšší složitost správy databáze.

**Použití ORM**:

- Rychlý vývoj aplikací: Pokud je potřeba rychle vytvořit aplikaci a pracovat s daty bez psaní SQL.
- Tradiční relační databáze: Když vaše aplikace používá klasický RDBMS a databáze není připravena na práci s objekty.

**Nevýhody**:

- Výkonnostní režie, zvláště u složitých dotazů.
<!--ID: 1737106145149-->
END

---

### CAP, BASE, ACID, BigData

START
FIT-Card

Uveďte a vysvětlete **CAP theorém**.

Back:

**Předpoklady**: máme
- Distribuovaný systém se **shardingem a replikací**
- Operace čtení a zápisu **pouze na jednom agregátu**

**CAP vlastnosti:**
- **konzistence** (Consistency): Operace pro čtení a zápis musí být spouštěny atomicky (po operaci zápisu vidí všechny readery stejná data)
- **dostupnost** (Availability): Pokud node funguje, musí reagovat na požadavky
- **odolnost k přerušení** (Partition tolerance): systém musí fungovat, i když se izolují dvě nebo více sad uzlů (když mi třeba vypadne uzel)

**CAP theorém říká:**
Není možné, aby distribuovaný systém poskytoval záruku všech tří vlastností (consistency, availability, partition tolerance) zároveň. Vždy může garantovat nejvýše 2 z těchto vlastností.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250118123624.png)
![](../../Assets/Pasted%20image%2020250118123629.png)
![](../../Assets/Pasted%20image%2020250118123635.png)
![](../../Assets/Pasted%20image%2020250118123642.png)
<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145151-->
END

---

START
FIT-Card

Vysvětlete rozdíly mezi koncepcí **ACID a BASE**.

Back:

**Rozdíly:**
- **ACID**:
	- **Konzistence je důležitější než availability**
	- Pesimistický přístup
	- Typický pro **relačních databázích**
- **BASE**
	- **Availibility je důležitější než konzistence**
	- Optimistický přístup
	- Typický pro **NoSQL databáze**
	- Umožňuje **lepší škálovatelnost**, která není s ACIDem možná

**ACID**:
- **Atomicity** - Transakce se úspěšně provede celá nebo vůbec.
- **Consistency** - Před transakcí a po ní je databáze v konzistentním (validním) stavu
- **Isolation** (Independence) - Operace uvnitř transakce neovlivní ostatní transakce.
- **Durability** - Provedené změny jsou bezpečně (perzistentně) uloženy.

**BASE**:
- **Basically Available** - Systém jako celek je neustále dostupný.
- **Soft-state** - Systém není plně deterministický a je v toku (nestabilní), po zápisu mohou nějakou dobu číst starou hodnotu
- **Eventually consistent** - Systém bude za nějaký čas konzistentní (obvykle v řádu milisekund).

Tags: reviewed
<!--ID: 1737106145154-->
END

---

START
FIT-Card

Co je to **horizontální a co vertikální škálování** databáze a jak souvisí s CAP?

Back:

**Vertikální**:
- **Přidávání zdrojů** k jednomu uzlu v systému (CPU, RAM, disky,...)
- Výhoda: **Jednoduché na provedení**
- Nevýhody: **limitované škálování** (hardwarem), **dražší**, **single point of failure**

**Horizontální:**
- **Přidávání uzlů** v systému
- Výhoda: **levnější, neomezené škálování (teoreticky), flexibilní škálování**
- Nevýhoda: hodně navyšuje komplexitu systému (synchronizace uzlů, konzistence dat atd.)

**Jak souvisí s CAP**:
- CAP nám popisuje vlastnosti distribuovaných systémů při horizontálním škálování

Tags: reviewed
<!--ID: 1737106145157-->
END

---

START
FIT-Card

Jak lze použít **CAP theorém ke klasifikaci databázových strojů**? Uveďte příklady databázových strojů, které znáte a pokuste se je klasifikovat na základě CAP theorému.

Back:

**CA** (Consistency-Availablility)
- **zachovávají ACID vlastnosti**
- mohou nastat výpadky (bez partition tolerance)
- klasické relační databáze
- **MySQL, PostgreSQL**, BigTable

**CP** (Consistency-Partition Tolerance)
- upřednostňují konzistenci nad dostupností => distributed locking
- typicky maximalizují i dostupnost (vysoce dostupné DB)
- **MongoDB**, Redis

**AP** (Availability-Partition Tolerance)
- upřednostňují dostupnost nad konzistencí = **BASE vlastnosti**
- data jsou typicky konzistentní v řádu milisekund → eventuálně konzistentní DB
- **Cassandra**, **RiakKV**

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXch_NVqX68_B8u5AQy3l8by3XsopfRNwxO1hp6BhLioQvxUt9p_47lPdT8Twxicf8Kp_J2ZA7KPhTTggIPE-Up6X6T4wgJ2fkAqmOx7oSL2Kzebw24m1MI13JGR6wCbRzwiwY9KVp5f1hRg6CEutcU4V3Y?key=MR9RTuBxYyWmpndNFWTOiQ)**

Tags: reviewed
<!--ID: 1737106145159-->
END

---

START
FIT-Card

Jaký je **rozdíl mezi replikací a technikou sharding**? Jsou to techniky, které se vzájemně vylučují nebo se mohou doplňovat?

Back:

**Sharding:**
- rozdělím systém na různé části (uzly)
- každý uzel má na starost jinou část dat
- Cíl: **zvýšit množství dat**, **zvýšit performance**

**Replikace:**
- stejná data na různých uzlech
- Cíl: **zvýšit performace**, **zvýšit toleranci vůči failu** (zamezit single point of failure)

**Obě techniky mohou být použity zároveň**. NoSQL systémy typicky automaticky dělají oboje.

Tags: reviewed
<!--ID: 1737106145162-->
END

---

START
FIT-Card

Co je to **silná a slabá konsistence** v NoSQL databázích? Jak souvisí s CAP?

Back:

**Silná konzistence** - používá přístup ACID, data musí být **vždy** ve validním stavu před transakcí i po transakci

**Slabá konzistence** - typicky bývá "eventually consistent". Když se provede změna, to může trvat, než uživatelé tu změnu uvidí.

**CAP**:
- U AP - slabá konzistence
- U CA, CP - silná konzistence

Tags: reviewed
<!--ID: 1737106145165-->
END

---

START
FIT-Card

Vysvětlete co je **"quorum"** a jak se používá k zajištění silné či slabé konzistence?

Back:

Řekněme, že máme distribuovaný systém s uzly.
- Quorum je číslo, které určuje, kolik uzlů musí být zapojeno do čtení/zápisu pro zpracování daného požadavku.
- **Čím vyšší quorum, tím víc se blížím k silné konzistenci.**

Mějme $N$ nodů.

**Write quorum**:
- Idea: jeden write request se propíše na $W$ nodů (na většinu nodů)
- Typicky $W > N/2$
	- $W$ - počet nodů, kam se zapíše
	- $N$ celkem nodů

**Read quorum**:
- Idea: přečte se $R$ nodů, vybere se nejnovější výsledek
- Typicky $R > N - W$

Proč to tak funguje:
- Kvůli podmínce u write quora bude vždy při čtení mít alespoň jeden node aktuální verzi záznamu.

Tags: reviewed
<!--ID: 1737106145167-->
END

---

START
FIT-Card

Jak jsou charakterizována **BigData** (3V+)?

Back:

Hlavní 4V:
- **Volume** - množství dat se zvyšuje exponenciálně (ne lineárně)
- **Variety** - data mají různé formáty, typy a struktury
- **Velocity** - nová data přibývají rychle a je třeba je rychle zpracovávat
- **Veracity** - data jsou často nekonzistentní, nekompletní, nepřesný

Další:
- **Value** - data jsou potenciálně hodnotná pro byznys
- **Validity** - správnost a přesnost dat
- **Volatility** - doba, po jakou by měla být data uchovávána a spravována 
- Cardinality
- Continuity
- Complexity

Tags: reviewed
<!--ID: 1737106145170-->
END

---

### Porovnávání DB modelů

START
FIT-Card

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a dokumentové databáze**.

Back:

Dokument:

- je samopopisná, hierarchická stromová struktura (JSON, XML)
- je identifikovaný unikátním klíčem, dokumenty jsou organizovane do kolekcí

dotaz. Pattern: Create Update Remove a document

Klady:

- Schema-less
- Faster creation and care
- No foreign keys
- Open formats
- Built-in versioning

Zápory:

- Consistency-Check Limitations
- Atomicity weaknesses
- Security

Příklady: MongoDB, Couchbase, DynamoDB

ANO: logging, blogy, weby, analytika, e-commerce (struktury s podobnou schemou)

NE: množinové operace s množstvím dokumentů, nebo pokud se často mění schéma

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdKBQeuP6EDxkkvi8kRLPI3iSSAqkR_F230KX3De_5EQ-Mw57GCuxPwm94H0-rXWARnvlRoezvbLdcyxCRzO6wgRXQ5GG3hQQ7YiboVv0pKbQ5-FtlVUtuzSWl4Lq8z-nB0swEHd6HCynsvbkXeAeWVj2Hx?key=MR9RTuBxYyWmpndNFWTOiQ)
<!--ID: 1737106145172-->
END

---

START
FIT-Card

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a XML-nativní databáze**.

Back:

XMLka, stromova struktura, dokumenty ako kolekcie
Xpath, XQuery (nadstavba xpath),
Hodí se na malé a středně velké databáze
Nehodí se na hodně propojená data a bigdata

#### suitable for

- small and middle size documents
- collections (set of documents)
- data exchange
- validation of input/output
- data pipeline processing
- data processed by machines and humans

#### not suitable for

- big data
- fast data transfer huge pieces of data
- highly connected data
- Aplikace ktera požaduje strong consistency
<!--ID: 1737106145175-->
END

---

START
FIT-Card

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a key-value databáze**.

Back:

KV: key-value pary. O value nevie stroj nic, Kluc identifikuje.
Skvely vykon, dobre sa skaluje, ale nemozem sa ale pytat podla value, len podla key
K-v páry mohou být po určité době automaticky z db smazány (TTL) – user session, eshop

ANO: session, profily, preferencie, kosiky nakupne
NIE: relacie - vztahy medzi entitami, vyhladavat podla value.

Key-Value

- velmi dobře škálovatelná a rychla
- „jednoúčelová“ - podle klíče vrátí hodnotu - velmi optimalizovaná
- neumožňuje složitější dotazy pracující s hodnotami (hodnoty jsou black box)
- nehodí se na vztahy mezi hodnotami, množinové operace apod.

Relační

- „univerzální“, vhodná pro většinu použití
- špatně se škáluje
- umožňuje joiny a složitější dotazy, agregace atd.

Redis, RiakKV
<!--ID: 1737106145178-->
END

---

START
FIT-Card

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a grafové databáze**.

Back:

Grafy - vrchol a hrana
Snazi sa popisat realitu
Non-transact - malo velkych grafov
Transactional - vela malych gr. (Problematicke, horsie jak strom)
Grafove algoritmy, traverzovanie, base query

**Traversal Framework**

- Najdu si uzel a pak udělám nějakou operaci od toho uzlu.
- Java API, práce s objekty.
- Procházení do hloubky, do šířky.

**Property Graph**

- orientovaný, labeled (= jak uzly tak hrany mají labely), multigraph (= mezi dvěma uzly může být více hran)
- **Uzel**
  - Má unikátní identifikátor.
  - Může mít více labels.
  - Má set vlastností (key → value).
- **Hrana**
  - Má unikátní identifikátor.
  - Může mít jenom jeden label.
  - Má set vlastností (key → value).

**ANO**: social network routing, location-based service, recommendation, chemi
**NIE**: batch, velke grafy
<!--ID: 1737106145180-->
END

---

START
FIT-Card

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a sloupcové (wide-column) databáze**.

Back:

Jsou podobné relačním databázím, mají řádky identifikované rowkey. Jednotlivé řádky však nemusí mít stejné sloupce, a mohou obsahovat komplexnější data: (Tuples, Lists, Sets, Maps, User-defined Types, …) [[obrázek]](https://www.ksi.mff.cuni.cz/~svoboda/courses/201-MIE-PDB/lectures/MIEPDB16-Lecture-11-Cassandra.pdf#page=10)

Column family - kolekcia riadkov, kt. su podobne ale nie identicke

Stlpce do skupin - col name, col val, TS, …

Např. Cassandra

**ANO**: paralelne spracovanie - select sa prelozi na job paralelny (MapReduce), logging, content management, blog,…

**NIE**: rozsirene relacne aj ked sa zda, nie moc na joiny, transakcne spracovania, ACID, agregace

Advantages:

- Scalability
- Compression
- Very responsive
  Disadvantages:
- Online transactional processing is usually not as good
- Incremental data loading
- Row-specific queries are usually bad (wide columns are hard/impossible to index)
<!--ID: 1737106145183-->
END

---

START
FIT-Card

Uveďte výhody a nevýhody přístupů **schema-free a schema aware databází**.

Back:

**schema-aware**

- **výhody**
  - definice uložených dat - víme, co v DB může být
  - pokročilé indexování, optimalizace → možnost vytváření efektivních dotazů
  - kontrola validity (integrity) dat
  - Query by Example - můžeme zjistit, jak vypadá obsah databáze
- **Nevýhody**
  - nutné vytvořit a udržovat schéma (a aplikace, které s DB pracují) → menší flexibilita

**schema-free**

- **výhody**
  - flexibilita
  - snadnost použití a údržby (ale s tou údržbou to není úplně pravda, zase když je třeba něco globálně změnit, schéma by se hodilo)
- **nevýhody**
  - nevíme, co je v db (struktura dat není určena) → zmatenost
  - db nekontroluje integritu dat
  - chybí pokročilé optimalizace dotazů
<!--ID: 1737106145185-->
END

---

### Probírané DB stroje

START
FIT-Card

Vysvětlete koncepci databázového stroje **MongoDB**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

Back:

Popis JSON (k-v) : array, object, string, …
BSON: zapise sa do binary kodu
Data model: Dokumenty do kolekcii
ObjectID, sort, CRUD nad kolekciou, MR, indexy
Sharding a master-slave replikacia

ANO: Open-source, high availability, eventual consistency, good data manipulation, dobre pre web, sharding, scalability
NIE: data redundancia (problem s konzistenciou), transactions, joins, indexing, limited data size, duplicates, high memory usage

[https://www.knowledgenile.com/blogs/pros-and-cons-of-mongodb/](https://www.knowledgenile.com/blogs/pros-and-cons-of-mongodb/)
<!--ID: 1737106145188-->
END

---

START
FIT-Card

Vysvětlete koncepci databázového stroje **Cassandra**. Uveďte jeho silné stránky a uveďte příklady, kde je jeho použití vhodné a kdy je naopak nevhodné.

Back:

Cassandra má uživatelsky definované datové typy. U každého řádku můžete nastavit jeho životnost. Každý řádek má Timestamp poslední modifikace.

Cassandra is a NoSQL database and a wide-column store. It is a distributed database management system designed to handle large amounts of data across multiple data centers or in the cloud.

Cassandra offers a solution to manage the continued massive write-data growth while ensuring greater flexibility, performance, scalability, and reliability.

Cassandra will be the best option in the following cases:

- You have to work with a massive amount of data.
- You have a lot of write operations
- There is a need for a distributed application.
- There are fewer secondary index needs.
- There is no need for connections or aggregates.

**Cons**:

- Cassandra does not support aggregates and complex queries.
- It doesn't fit for transactional data.
- Scanning data: Cassandra reads data pretty well. But it’s good at reading as long as you know the primary key of the data you want. If you don’t, Cassandra will have to scan all nodes to find what you need, which will take a while. And if the latency threshold is exceeded, the scan will not be completed at all
- When you want a lot of different types of queries or you can’t predict your data usage
- When you want strong ACID compliance
- When you want many-to-many mappings or join table
- When you don’t want a rigid schema

[https://medium.com/geekculture/system-design-solutions-when-to-use-cassandra-and-when-not-to-496ba51ef07a](https://medium.com/geekculture/system-design-solutions-when-to-use-cassandra-and-when-not-to-496ba51ef07a)
<!--ID: 1737106145190-->
END

---

START
FIT-Card

Vysvětlete koncepci databázového stroje **Neo4j**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

Back:

- Neo4j pracuje nad grafy a jejich hranami, kterým lze přidat properties
- Hodí se například na sociální sítě nebo propojená data kde lze i využít jeho traversal framework
- Nehodí se na data kde jsou potřeba agregace, sortování apod
- Cílem je aby to bylo ACID.
- Je to zaběhlý tech. → 10 let.
- Vlastní deklarativní dotazovací jazyk Cypher
- Umožňuje mít **schema**. Postavená kolem konceptu **labels**.
- Taky dovoluje mít constraints. (Bacha, zavedení constraintu je blokující nad celou databází!)
- **Indexy**: no má je ![LOL](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfUOm8t3W1G9hMiB3rHP374xE53ENLLmNZ8JCBaAfGI29_LM3offGzeUYuwmA3Ct62nDvSg94D2FnUDpPQEfIcRYrl0K50WSPU5ukbpbCMX0lLSx-jPkCKBBgqN9kXcM3oOlEdj8NvvsNzl-w4ZYzF-JqY?key=MR9RTuBxYyWmpndNFWTOiQ) – Dělají se nad properties.
- The database is scalable through data partitioning into pieces known as shards.
- High availability provided through continuous backups and rolling upgrades.
- Multiple instances of databases are separable while remaining on one dedicated server, providing a high level of security.
- Neo4j uses the Cypher graph query language, which is programmer friendly.
- Query speed only dependent on the number of concrete relationships, and not on the amount of data
- Clear and manageable representation of relationships
- Flexible and agile structures
- Viz . [https://www.ionos.com/digitalguide/hosting/technical-matters/graph-database/](https://www.ionos.com/digitalguide/hosting/technical-matters/graph-database/)
- [https://phoenixnap.com/kb/graph-database](https://phoenixnap.com/kb/graph-database)
<!--ID: 1737106145193-->
END

---

START
FIT-Card

Uveďte koncepci databázového stroje **RiakKV**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

Back:

- key-value store distributed database
- Stores keys into buckets = a namespace for key
- Je dobrý například pro data ze senzorů, která velmi rychle rostou a jsou high read/write nebo pro ukládání uživatelů a jejich preferencí
- Key-value store by šlo také použít jako cache (redis cache)
- Není dobrý pokud je potřeba data agregovat, třídit nebo s jejich hodnotu jakkoli více pracovat (protože value je black box)

[http://www.ksi.mff.cuni.cz/~svoboda/courses/2015-2-MIE-PDB/lectures/Lecture-12-Key-Value-Databases-Riak-Redis.pdf#page=8](http://www.ksi.mff.cuni.cz/~svoboda/courses/2015-2-MIE-PDB/lectures/Lecture-12-Key-Value-Databases-Riak-Redis.pdf#page=8)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfLpyr3BItPDrvFaVKEnESF34sleCqKsyCy5t9R4vSTwZ1_8XEhmlKwNrMyiPSPzB_x49w2fIHZ2pg6Flc5t9sUk6z_crqNAKsWbmG-VlpTUAJIow7M-oQpd6uYHwGtRREBsV354EGqqwZ66D6QiSzh0YM?key=MR9RTuBxYyWmpndNFWTOiQ)

Data model
• The most simple NoSQL database type
Works as a simple hash table (mapping)
• **Key‐value pairs**

Key (id, identifier, primary key)

- Value: binary object, black box for the database system  
  Query patterns
- Create,update or remove value for a given key
- Get Value For Given Key Characteristics
- Simple Model ⇒ great performance, easily scaled,...
- Simple Model ⇒ not for complex queries for complex data

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfHOUD8JKPGJl9x-xH7qH9bEDzXjUw5Htg6rM83491lLaftfsByyA9ft-UyEfTjCcgjVkPSIseaF_IcqmF4MqU5oEsu-zgbmzE2EzdXsBUOG-gRuRwLVdV-j6dnEGSMeGiasAYg5freEv23LO7q55zx6xw?key=MR9RTuBxYyWmpndNFWTOiQ)
![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdBkYg-nVK7G7eTQd1lDPcOPEtVn8PSaq3XsRx9pApQfdHXHJFFyTN3OY9q_qyR-aCE7d8PmnfhJI3NEdAo6BsmxoN1b4tw13XUulTcNdtRDJE8fWGEs8hOGSYyR06dRvK52h7d8LtqNHS2JR6DUpCvQvs?key=MR9RTuBxYyWmpndNFWTOiQ)
<!--ID: 1737106145196-->
END

---

### Probírané jazyky

START
FIT-Card

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **Cypher**.

Back:

- dotazování a updatování nad grafovou databází Neo4j
- deklarativní (popisujeme co chceme), inspirováno SQL
- Zaklad - subgraph pattern matching
- ASCII art inspired syntax
- () - nodes
- <--, --, --> - relationships
- Klauzule se daji temer libovolne retezit (chaining)
- START, MATCH, WHERE, RETURN, CREATE, DELETE, SET

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcfsyUuHIX44rdpqQqIThDodsiATene3QL5wCQzAuv0W8mruoJ7aCH51Nq6gLXUqaGUV2JDX-8b_GJFPwhyVllb2giV0Wp4x4oTq3w2Q_YWcq-jSXdOEEFFXiJT4sZplCFDjIWh24f6e5WhstjVXQGr56k?key=MR9RTuBxYyWmpndNFWTOiQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeFEa_zpNLvqbAvnAMAg_6BTNPTMswdwdyoO-c5azFBCyJXWzoZfizbyz3dkgGyMpm8-zDzVgkvD_PfnkqkzH9x_2uhlNZyrt14XaHxPy-oapXwXiMEobISWT3qig4AMHdbEPomkKlOgX5_44ddfYISrBA?key=MR9RTuBxYyWmpndNFWTOiQ)
<!--ID: 1737106145198-->
END

---

START
FIT-Card

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **XQuery**.

Back:

- XQuery operuje nad stromovou strukturou xml dokumentů nebo relačních databází
- Je nadstavba XPath umožňující složitější konstrukty
- Velmi komplexní dotazovací XML jazyk. Jsou v něm obsaženy téměř všechny konstrukce XPathu (používají se XPathové výrazy na dotazování uzlů).
- Nové jazykové konstrukce v XQuery (oproti XPathu):
  - konstruktory
  - FLWOR (For, Let, Where, Order by, Return)
  - Kvantifikátory (some|every … in … satisfies …)
  - If-then-else
  - effective boolean value

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfnor2e8KEbdVkQbkllQRld1Ni5rDECIR_ALkkRXkZXIHVTPe81zwlIvDW63tyeyrLq2tdhzydkZl8Dl52Zb4T4mLIv89LAWtSN3kxw616oqGVPLAH1zIylpjr-gNTUQukRzmtgdFyaE-Zap_fdQj8wVrw?key=MR9RTuBxYyWmpndNFWTOiQ)

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXeRg48m-JB3fYFSZOCvdvw8xUVs1Fic-5w_NiBOfZGWNw6KhWMgqAfwN4VlppbvKoQm_ncGn1nWW95TKCweNnufeqoLIz3GjoQzmTAeNDWxsGCgZyqD_EH7ScOglmiKL6gxwNlArn8lLtEeDBxesNo6_w?key=MR9RTuBxYyWmpndNFWTOiQ)
<!--ID: 1737106145201-->
END

---

START
FIT-Card

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **MongoDB**.

Back:

- vychází z JavaScriptu, tečková notace
- umí CRUD  (Create, Read, Update, Delete), MapReduce
- db - handle na databázové spojení
- movies - kolekce
- **find(selekce, projekce)** - metoda (jako SELECT), může být například update atd.
- selekce - podle čeho filtruju výsledky
- projekce - jaké atributy mají být ve výsledku
- **sort(key_obj)** - řazení, 1 = ASC, -1 = DESC
- **pretty()** - jen formátuje výstup, aby byl čitelnější (řádky, odsazení)

```
db.movies.find(
    {
        year: { $gte: 2000, $lte: 2005 },
        director: { $exists: 1 }
    },
    { _id: 1 }
).sort(
    { rating: -1, year: 1 }
).pretty();

```

Advanced querying in MongoDB: aggregate()

- Syntax: db.collection.aggregate(pipeline, options)
- pipeline: array, a sequence of data aggregation operations or stages, see [here](https://www.mongodb.com/docs/manual/reference/operator/aggregation-pipeline#).
- options: optional argument, document, for specifying options, for example: collation, comment, read/write concern and others.
- A full list of aggregation operators for reference: [aggregation operators](https://www.mongodb.com/docs/manual/reference/operator/aggregation/).

Example: calculate the totals of shipped orders per customer and sort them in descending order:

```
db.orders.aggregate([
{ $match: { status: "shipped" } },
{ $group: { _id: "$cust_id", total: { $sum: "$amount" } } },
{ $sort: { total: -1 } }
])
```

- Aggregate() can be used to perform "join". In this case [$lookup](https://www.mongodb.com/docs/manual/reference/operator/aggregation/lookup/#mongodb-pipeline-pipe.-lookup) stage is used, syntax:

```
{
   $lookup:
     {
       from: <collection to join>,
       localField: <field from the input documents>,
       foreignField: <field from the documents of the "from" collection>,
       as: <output array field>
     }
}
```
<!--ID: 1737106145203-->
END

---

### Databázové benchmarky

START
FIT-Card

Charakterizujte rozdíly mezi tzv. **micro a complex benchmarkem** v databázích.

Back:

Micro-benchmarking uses artificial workloads that test a particular type of operation, for example, performing a single type of file system I/O, database query, CPU instruction, or system call. The advantage is the simplicity: narrowing the number of components and code paths involved results in an easier target to study and allows performance differences to be root-caused quickly. Tests are also usually repeatable, because variation from other components is factored out as much as possible. Micro-benchmarks are also usually quick to test on different systems. And because they are deliberately artificial, micro-benchmarks are not easily confused with real workload sim

Complex benchmark testují výkon databáze v “real-world” podmínkách jako celek za určitých podmínek a situací viz další otázky níže.
<!--ID: 1737106145206-->
END

---

START
FIT-Card

Co je **TPC** a jak souvisí s databázovými benchmarky?

Back:

Je nezisková organizace Transaction Processing Performance Council (TPC), která definuje různé benchmark testy databází (například TPC-C, TPC-H nebo TPC-E).
<!--ID: 1737106145209-->
END

---

START
FIT-Card

Vysvětlete princip benchmarku **TPC-C**. Co je výstupem benchmarku?

Back:

- Metoda pro měření a porovnávání výkonu OLTP (Online Transaction Processing = běžná práce s daty - vytváření, úprava..) systémů (= testuje hardware i software).
- Metriky: new-order transactions per minute (tpmC) a price/performance ($/tpmC)
- simuluje kompletní výpočetní prostředí, ve kterém lidé vykonávají transakce proti databázi kolem aktivit (transakcí) objednávkového prostředí
- benchmark simuluje aktivitu dodavatele, ale TPC-C není limitován na tento segment byznysu, ale vhodně reprezentuje firmy spravující, prodávající a distribuující produkty nebo služby
- 5 typů transakcí (pravděpodobnost výběru)
- New-order: nová objednávka
- Payment: aktualizace účtu zákazníka
- Delivery: doručení objednávek (batch transakce)
- Order-status: zjištění stavu poslední zákazníkovy objednávky
- Stock-level: monitoring stavu skladu
- 9 tabulek, různá velikost, atributy, vztahy (viz [schéma](http://www.tpc.org/information/sessions/sigmod/sld009.htm))
- UPDATE, INSERT, DELETE, ABORT; přístup přes primární a sekundární klíč
- požadavky na čas odpovědi: 90 % transakcí ⇐5s, stav skladu ⇐20s
- online i odložené transakce
- více terminálových sessions (definuje fullscreen uživatelské rozhraní)
- dodržování ACID transakcí
<!--ID: 1737106145212-->
END

---

START
FIT-Card

Vysvětlete princip benchmarku **TPC-E**. Co je výstupem benchmarku?

Back:

- Metoda pro simulaci zatížení OLTP (Online Transaction Processing = běžná práce s daty - vytváření, úprava..) aplikace u makléřské firmy/obchod na burze
- Motivace: TPC-C byl příliš jednoduchý, měřil na příliš málo tabulek, data vypadala uměle, používal málo typů transakcí
- Metriky: transakce zpracované serverem za vteřinu (tpsE) a price/tpsE
- OLTP benchmark používá databázi k simulaci makléřské firmy se zákazníky generujícími transakce o obchodech, dotazy na účty, průzkumy trhu, vykonává objednávky pro zákazníky a aktualizuje údaje o účtech
- škálovatelný pro potřeby konkrétního prostředí, definuje potřebný počet transakcí na systém
- navrženo pro podporu široké škály OLTP systémů, nejen makléřské firmy
- Používá pseudoreálná data
- Aplikuje integritní omezení na úrovni DB
- Celý benchmark se zaměřuje na centrální databázi, která provádí operace vztahující se ke klientským účtům dané firmy. TPC-E modeluje aktivitu firmy, která musí spravovat klientské účty, provádět obchodní operace klientů a být odpovědná za interakce zákazníků s finančními trhy. Ačkoli je model metody TPC-E zaměřen na makléřskou firmu, tak databázové schéma, transakce i implementační pravidla byly navrženy tak, aby reprezentovaly širokou variaci moderních OLTP systémů.
- 33 tabulek
- [Specifikace](https://www.tpc.org/tpc_documents_current_versions/current_specifications5.asp)
<!--ID: 1737106145214-->
END

---

START
FIT-Card

Vysvětlete princip benchmarku **TPC-H**. Co je výstupem benchmarku?

Back:

- benchmark pro databáze k podpoře rozhodování, práce s velkými objemy dat, vysoce komplexní dotazy; periodické aktualizace, provoz databáze 24/7
- OLAP (Online Analytical Processing = málo transakcí, zejména SELECT, složité dotazy, agregace) benchmark
- byznysově orientované ad-hoc dotazy, konkurentní modifikace dat
- dotazy a data v databázi vybrané pro široké průmyslové užití
- Metriky: Composite Query-per-Hour (QphH@Size), reflektuje více aspektů možností systému ke zpracování dotazů a $/QphH@Size
- velikost databáze proti vykonávaným dotazům, výkon při zpracování sekvenčně a paralelně
- Velikost db je fixní

Hodnota výsledku reflektuje několik různých aspektů jak je systém schopen provést  požadovaný dotaz. Tyto aspekty zahrnují:

- zvolenou velikost databáze oproti zvoleným dotazům
- výpočetní výkon na jednom stream
- propustnost dotazu pro více uživatelů najednou
  Obecně platí, že čím vyšší číslo, tím lepší.

Doplnení: Bylo by super kouknout na [https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-pdb/pdb_vzor_2011-05-10](https://www.fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-pdb/pdb_vzor_2011-05-10)\*\*
<!--ID: 1737106145217-->
END

---

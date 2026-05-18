---
created: 2025-01-17T09:33:57
title: "Příprava ke zkoušce"
up: "[[📖NI-PDB]]"
---

TARGET DECK: archive
FILE TAGS: NI-PDB


### Optmalizace SQL

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Optimalizace řízená odhadem ceny (cost-based optimization)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je to **cost-based optimalizace** a jak se využijí **statistiky o databázových objektech** při cost-based optimalizaci?

(větší otázka)

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

![](../../../Assets/Pasted%20image%2020250118101326.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145101-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Optimalizace řízená odhadem ceny (cost-based optimization)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak vypadá **zpracování SQL dotazu** (fáze zpracování dotazu, kde a jak se při nich dá optimalizovat)?

(větší otázka)

Back:

**Fáze:** (tohle je částečně z ChatGPT:)

- **Parsing** - syntaktická a sémantická analýza, kontrola práv, výsledek prováděcí plán
- **Bind** - přiřazení konkrétních hodnot parametrům
- **Execution** - vykoná se prováděcí plán
- **Fetch** - získá se výsledek a předá se aplikaci

**Kde se dá optimalizovat**:

- **Fáze Parsing**:
  - **indexy** - jejich přidání/upravování
  - **sledování systémových statistik** a úprava konfigurace podle nich
  - "hinty" pro optimaliztor (např. jaký join algoritmus použít)
- **Fáze Execution**:
  - **Uložení dat dat** - partitioning, clustery atd.
  - **paralelní zpracování**
  - **caching**
  - **materializované pohledy**

Tags: reviewed
<!--ID: 1737106145106-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Statistiky databázových objektů
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete rozdíl mezi **heap table** a **index-organized table**.

(větší otázka)

Back:

**Heap table**:

- sama o sobě nemá **žádný index**
- pořadí bloků je vpodstatě náhodné
- nové záznamy vyplňují prázdná místa
- pokud máme "heap table with index", tak má v listech ROWID, podle kterého se najde datový blok a řádek

**Index-organized table**:

- Funguje podobně jako index, ale má v listech rovnou **celé řádky**

**Srovnání**:

- Index-organized table může být rychlejší (menší počet I/O operací, protože jsou data rovnou ve stromu)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250118104335.png)
![](../../../Assets/Pasted%20image%2020250118104321.png)
![](../../../Assets/Pasted%20image%2020250118104305.png)

<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1737106145109-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Statistiky databázových objektů
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete rozdíl mezi **heap table** a **cluster**.

(větší otázka)

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
- **Cluster:** - A cluster that stores `customers` and `orders` tables based on the `customer_id`. - Rows for a customer and their orders are stored physically close, so joining or querying them is faster.
<!-- ExampleEnd -->

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250118105226.png)

<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1737106145112-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Statistiky databázových objektů
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete rozdíl mezi **B-tree** a **bitmap** indexem, příklady vhodného použití obou typů indexů.

(větší otázka)

Back:

**B-Tree index**:

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
![](../../../Assets/Pasted%20image%2020250118105604.png)

**Bitmap**
![](../../../Assets/Pasted%20image%2020250118105945.png)
Když pak například spustím `SELECT` dle roku výroby, stačí jen vybrat řádky, kde je hodnota nastavená na `1`:
![](../../../Assets/Pasted%20image%2020250118110005.png)

<!-- ImageEnd -->

Tags: reviewed
<!--ID: 1737106145114-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Statistiky databázových objektů
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **typické statistiky pro tabulky** v relační databázi a jak se udržují když se pomocí DML mění data?

(větší otázka)

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

![](../../../Assets/Pasted%20image%2020250118110727.png)
![](../../../Assets/Pasted%20image%2020250118110721.png)
![](../../../Assets/Pasted%20image%2020250118110951.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145117-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Statistiky databázových objektů
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **typické statistiky pro B-tree indexy** a jak se udržují když se pomocí DML mění data?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Metody přístupu k datům a jejich cena
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou to přístupové cesty (**access paths**) při vyhodnocování SQL dotazů? Uveďte příklady.

(větší otázka)

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

![](../../../Assets/Pasted%20image%2020250118113443.png)

Tady je imo špatně ten dotaz. Mělo by tam být víc podmínek:
![](../../../Assets/Pasted%20image%2020250118113501.png)
![](../../../Assets/Pasted%20image%2020250118113508.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145122-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Metody vyhodnocení spojení a jejich cena
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké znáte **metody vyhodnocení spojení (join)** v relačních databázích? Naznačte jak probíhají.

(větší otázka)

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

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Prováděcí plány (execution plans)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co to je **prováděcí plán (execution plan)**, jak vypadá a kdy vzniká? Vyplatí se ho cachovat? Pokud ano, za jakých okolností?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Prováděcí plány (execution plans)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká je základní **strategie pro tvorbu prováděcího plánu**? Jsou situace, kdy se vyplatí spíše full-table scan přístup namísto index-based? Případně uveďte.

Pozn. tuhle kartičku jsem si trochu vycucal z prstu (a fitwiki a chatgpt), protože v přednáškách se o tom nic nepíše.

(větší otázka)

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

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Prováděcí plány (execution plans)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

**Operace řazení**, v jakých situacích se používá, jaké jsou parametry pro odhad ceny řazení.

(větší otázka)

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

![](../../../Assets/Pasted%20image%2020250118121653.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145133-->

END

---

<!--
Exam Note ID: NI-SI-16
Exam Note Section Name: Prováděcí plány (execution plans)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

**Postup při ladění výkonu DB serveru** (jak zjistíme co vázne, jak zvolíme SQL dotazy pro ladění?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: OLTP vs. OLAP databáze
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete rozdíly mezi **OLTP a OLAP** databází.

(větší otázka)

Back:

Obě jsou technologie uložení dat v databázi.

**OLTP** - online transaction processing

- Většina aplikací.
- Hodně uživatelů **čte** a **mění** data.
- Systémy optimalizované pro rychlé, krátké transakce, např. vkládání, aktualizace a mazání dat.
- Např. e-shop, kos

**OLAP** - online analytical processing

- Systémy optimalizované pro analytické zpracovávání, zaměřené na efektivní **čtení a analýzu** velkého množství dat.
- Data nebývají "hezky" uspořádána (podle 3NF).. Typicky tam bývá hodně redundance, díky čemuž je čtení vysoce efektivní (ale zápis je pain in the ass)
- Např. business intelligence, reportování, analytické systémy
<!--ID: 1737106145138-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Objektově-relační
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete, případně uveďte na příkladech hlavní **přínos objektově relačních databázových systémů** oproti čistě relačním.

(větší otázka)

Back:

Je to rozšíření klasického relačního modelu o **objektové prvky** (databáze umí pracovat s objekty, existují v ní uživatelsky definované datové typy apod.).

**Hlavní přínosy OODMBS** (oproti RDBMS):

- **Komplexnější datové typy** (objekty) často lépe reflektují real-world entity
- **Rekurzivní struktury** - dobře se ukládají datové struktury (stromy, grafy)
- **Abstraktní datové typy** - Je možné vytvářet vlastní typy a jejich metody
- **API pro OOP jazyky** - velice dobře se používá s OOP jazykama
- **Komplexní (dlouhé) transakce** - lépe je zpracovává než RDBMS
<!--ID: 1737106145141-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Objektově-relační
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete co je **reference na objekt (typ REF)** v objektově-relačních databázích. Jaký je rozdíl mezi referencí na objekt a cizím klíčem?

(větší otázka)

Back:

**REF** - reference na objekt

- **Ukazatel** na **celý objekt** (jako pointer v OOP)
- **Nevyžaduje spojování tabulek**, protože odkazuje přímo na celý objekt.

**Cizí klíč**

- **Hodnota** jiného primárního klíče (není to ukazatel)
- **Vyžaduje JOIN** operaci pro získání souvisejících dat.
<!--ID: 1737106145144-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Objektově-relační
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete rozdíl mezi relační tabulkou obsahující **uživatelem definovaný datový typ** a **objektovou tabulkou**.

(větší otázka)

Back:

**Uživatelsky definovaný datový typ v relační tabulce**:

- Je to **vícehodnotový atribut** (je to jakoby další tabulka, kde sloupce jsou atributy toho komplexnějšího typu)
- **Nemá metody** ani chování
- Data jsou uložena v **řádcích a sloupcích**
- **Výhoda**: je to jednodušší, než mít další tabulku, kterou bych musel JOINovat.

**Objektová tabulka:** (v ORDBMS)

- Každý řádek reprezentuje nějaký objekt, který může mít nejen data, ale i **metody**
- Objekty mohou mít mezi sebou **pointery**

Objektová tabulka je obecně více flexibilní, umožňuje ukládat nejen objekty, ale i určité metody/chování.
<!--ID: 1737106145146-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Objektově-relační
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

V jakém jsou vztahu **objektově-relační databázový stroj** a **ORM (object-relational mapping) technologie**? (co to řeší, kdy je co vhodné)

(větší otázka)

Back:

**Co řeší:**

- Oboje umožňuje pracovat s databází jako s nějakou kolekcí objektů.

**ORM**:

- Máme relační databázi a řádky tabulky se mapují (transformují) na objekty v nějakém OOP jazyce. Díky tomu můžu s databází pracovat jako s kolekcí objektů.
- Objekty jsou uloženy pouze jako **řádky tabulky**
- **Vhodné:**
  - Pro věšinu aplikací, tradiční relační databáze
  - Rychlý vývoj
  - Jednodušší data a dotazy

**ORDBMS**:

- **Přímo v databázi** jsou uloženy **objekty**, složené datové typy, metody, dědičnost,..
- **Vhodné**:
  - Pro komplexní typy dat
  - Lepší výkon pro složité typy
- **Nevýhoda:** - Komplexnější práce s databází
<!--ID: 1737106145149-->

END

---

### CAP, BASE, ACID, BigData

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: CAP teorém a NoSQL databáze
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte a vysvětlete **CAP theorém**.

(větší otázka)

Back:

**Předpoklady**: máme

- Distribuovaný systém se **shardingem a replikací**
- Operace čtení a zápisu **pouze na jednom agregátu**

**CAP vlastnosti:**

- **konzistence** (Consistency): Každý read (nad celým systémem) vrátí nejnovější data nebo error. (pozor, je to jiné než consistency v ACIDu!)
- **dostupnost** (Availability): Pokud node funguje, musí reagovat na požadavky
- **odolnost k přerušení** (Partition tolerance): systém musí fungovat, i přes výpadky v síti (např. že se nějaké zprávy mezi nodama nedoručují)

**CAP theorém říká:**
Není možné, aby distribuovaný systém poskytoval záruku všech tří vlastností (consistency, availability, partition tolerance) zároveň. Vždy může garantovat nejvýše 2 z těchto vlastností.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250118123624.png)
![](../../../Assets/Pasted%20image%2020250118123629.png)
![](../../../Assets/Pasted%20image%2020250118123635.png)
![](../../../Assets/Pasted%20image%2020250118123642.png)

<!-- DetailInfoEnd -->

Tags: reviewed
<!--ID: 1737106145151-->

END

---

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Koncepce BASE vs. ACID
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete rozdíly mezi koncepcí **ACID a BASE**.

(větší otázka)

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

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Horizontální vs. vertikální škálování
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je to **horizontální a co vertikální škálování** databáze a jak souvisí s CAP?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Klasifikace NoSQL databází z pohledu CAP teorému
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak lze použít **CAP theorém ke klasifikaci databázových strojů**? Uveďte příklady databázových strojů, které znáte a pokuste se je klasifikovat na základě CAP theorému.

(větší otázka)

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

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Replikace a sharding
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je **rozdíl mezi replikací a technikou sharding**? Jsou to techniky, které se vzájemně vylučují nebo se mohou doplňovat?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: CAP teorém a NoSQL databáze
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je to **silná a slabá konsistence** v NoSQL databázích? Jak souvisí s CAP?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: CAP teorém a NoSQL databáze
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete co je **"quorum"** a jak se používá k zajištění silné či slabé konzistence?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: CAP teorém a NoSQL databáze
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak jsou charakterizována **BigData** (3V+)?

(větší otázka)

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

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Jejich rozdíly a vhodné aplikace (aplikační domény)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a dokumentové databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
  - Konzistence dat, přesné "deterministické" chování
  - Jednoduše se s nimi pracuje
- **Nevýhoda:**
  - Špatně horizontálně škálovatelné
  - Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Dokumentová**:

- Data uložena v **dokumentech**, které mají hierarchickou strukturu
- Typicky dodržuje **BASE**
- **Výhoda:**
  - Škálovatelnost
  - Flexibilní schéma
  - Rychlost
  - Vhodné pro velké množství jednoduchých dotazů
  - Vhodné pro hierarchická data
- **Nevýhoda:** - Nekonzistence dat - kvůli BASE - Složité dotazy jsou méně efektivní než u relačních DB
<!--ID: 1737106145172-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Jejich rozdíly a vhodné aplikace (aplikační domény)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a XML-nativní databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
  - Konzistence dat, přesné "deterministické" chování
  - Jednoduše se s nimi pracuje
- **Nevýhoda:**
  - Špatně horizontálně škálovatelné
  - Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**XML**

- Data jsou uložena v XML formátu -> vhodné pro aplikace, co pracují s XML
- **Výhoda**:
  - Flexibilní schéma
  - Lepší škálování
  - Vhodné pro aplikace, které používají XML formát
  - Vhodné pro hierarchická data
- **Nevýhoda:** - Nekonzistence dat - kvůli BASE - Složité dotazy jsou méně efektivní než u relačních DB
<!--ID: 1737106145175-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Jejich rozdíly a vhodné aplikace (aplikační domény)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a key-value databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
  - Konzistence dat, přesné "deterministické" chování
  - Jednoduše se s nimi pracuje
- **Nevýhoda:**
  - Špatně horizontálně škálovatelné
  - Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Key-value:**

- Velmi jednoduchá struktura, data jsou uložena jako páry klíč-hodnota
- **Výhoda:**
  - Fakt hodně rychlý - operace čato v O(1)
  - Velmi dobré škálování
  - Flexibilní schéma
- **Nevýhoda:**
  - Žádné komplexní dotazy (žádné JOINy nebo agregace)
  - Určeno pro jednoduchá data, s komplexními daty/dotazy se hodně špatně pracuje

Obecně je **key-value** databáze taková hodně specifická. Extrémní **rychlost** a **škálovatelnost** ale pouze pro **jednoduchá data**.
<!--ID: 1737106145178-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Jejich rozdíly a vhodné aplikace (aplikační domény)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a grafové databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
  - Konzistence dat, přesné "deterministické" chování
  - Jednoduše se s nimi pracuje
- **Nevýhoda:**
  - Špatně horizontálně škálovatelné
  - Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Grafové**:

- Data jsou uložena ve formě grafu (uzly, hrany)
- **Výhoda:**
  - Hodí se pro modelování určitých struktur (např. znalosti, sociální sítě, doporučovací systémy atd.)
  - Flexibilní modelování vztahů a struktur
  - Optimalizované dotazy pro grafové struktury (např. vybírání podgrafů, hledání cest atd.)
  - Dobrá škálovatelnost
- **Nevýhoda:** - Méně efektivní pro "tabulková data" - Nižší podpora pro ACID - Prostě takový specifický use case
<!--ID: 1737106145180-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Jejich rozdíly a vhodné aplikace (aplikační domény)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte podstatné rozdíly (výhody a nevýhody) **relační a sloupcové (wide-column) databáze**.

(větší otázka)

Back:

**Relační**:

- Data jsou uložena v **tabulkách** (relacích) s **pevně definovanými schématy**
- Dodržuje se **ACID**
- Data se **normalizují** (snižuje se redundance, rozděluje se na menší tabulky)
- **Výhoda:**
  - Konzistence dat, přesné "deterministické" chování
  - Jednoduše se s nimi pracuje
- **Nevýhoda:**
  - Špatně horizontálně škálovatelné
  - Nízká flexibilita (mám striktní schéma) - nevhodné pro méně strukturovaná data (např. v datových skladech)

**Wide column**

- Řádky mají hromadu různých sloupců, každý řádek může obsahovat pouze některé sloupce
- **Výhody:**
  - Ideální pro čtení a analýzy
  - Flexibilní schéma
  - Vysoká škálovatelnost
  - Výborný výkon (pro zápis i čtení)
  - Vhodné pro big data, datové sklady
- **Nevýhody:** - Horší výkon pro kompexní dotazy - Omezená podpora pro ACID - Nevhodné pro OLTP (ale super pro OLAP)
<!--ID: 1737106145183-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Jejich rozdíly a vhodné aplikace (aplikační domény)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte výhody a nevýhody přístupů **schema-free a schema aware databází**.

(větší otázka)

Back:

**schema-aware** (např PostgreSQL):

- **Výhody**:
  - Přesně definovaná datová struktura, vysoká konzistence a validita
  - **Jednoduchost práce s databází**, protože v tom není takový chaos
  - Efektivnější dotazování u složitých dotazů
- **Nevýhody**:
  - Změny ve schématu jsou složité a časově náročné → menší flexibilita

**schema-free**

- **Výhody**
  - Flexibilní schéma, dá se jednoduššeji měnit
  - V určitých ohledech jednodušší údržba (jednodušší migrace a změny ve struktuře dat)
- **Nevýhody:** - Vyžaduje to více pečlivosti při práci s databází (konvence, dodržovat určitý pravidla) - jinak v tom může jednoduše vzniknout zmatená databáze - Horší optimalizace komplexních dotazů
<!--ID: 1737106145185-->

END

---

### Probírané DB stroje

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Příklady konkrétních NoSQL databází a jejich architektury
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete koncepci databázového stroje **MongoDB**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**MongoDB**

- NoSQL dokumentová databáze
- Data uložena v BSON (binární JSON)
- **Silné stránky**:
  - Vhodné pro **škálování** (Mongo podporuje sharding i replikaci)
  - Flexibilita
  - Vysoká dostupnost
  - Vysoký výkon
- **Vhodné použití**:
  - Aplikace, kde se často mění schéma dat (např. přidávání polí do dokumentů)
  - Aplikace s **mnoha daty** a **jednoduchými operacemi**
  - Např. mobilní aplikace, content management systémy, ...
- **Nevhodné použití** - Aplikace se složitými vztahy a dotazy (lepší je SQL) - Aplikace s méně daty (lepší je SQL) - Aplikace, které vyžadují hodně stabilitu a přesnost (lepší je SQL s ACID)
<!--ID: 1737106145188-->

END

---

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Příklady konkrétních NoSQL databází a jejich architektury
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete koncepci databázového stroje **Cassandra**. Uveďte jeho silné stránky a uveďte příklady, kde je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**Cassandra**

- Wide column databáze
- **Vhodné použití**:
  - Pro **obří množství jednoduchých dat** (big data)
  - Pro jednoduché dotazování
  - Když je třeba hodně škálovat
  - Když je třeba Flexibilní datový model
  - Když je třeba rychle zapisovat jednoduchá data
  - Např. **velké distribuované systémy** (Amazon to používá), **globální e-commerce platformy**, real-time analýzy, sledování aktivit
- **Nevhodné použití**: - Komplexní dotazy a vztahy (Lepší SQL) - Když máme nízký objem dat (lepší SQL nebo Mongo) - Když potřebujeme přesnost ve schématu (lepší SQL)
<!--ID: 1737106145190-->

END

---

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Příklady konkrétních NoSQL databází a jejich architektury
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Vysvětlete koncepci databázového stroje **Neo4j**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**Neo4j**:

- Pracuje se nad grafy (uzly + hrany)
- Hodí se na data, která mají komplexní vztahy, které lze reprezentovat grafy
- **Vhodné:**
  - Když máme data s **komplexními vztahy**
  - Když chceme **komplexní dotazy v grafu** (cesty, stromy, podstromy, ...)
  - Např. sociální sítě, doporučovací systémy, detekce podvodů (v bankovních transakcích), znalosti
- **Nevhodné:** - Pro aplikace **bez komplexních vztahů** - Pro **velké transakční systémy** - Pro **velké množství dat** s jednoduchými vztahy
<!--ID: 1737106145193-->

END

---

<!--
Exam Note ID: NI-SI-18
Exam Note Section Name: Příklady konkrétních NoSQL databází a jejich architektury
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Uveďte koncepci databázového stroje **RiakKV**. Uveďte jeho silné stránky a uveďte příklady, kdy je jeho použití vhodné a kdy je naopak nevhodné.

(větší otázka)

Back:

**RiakKV**:

- key-value store
- máme buckety, v nich hodnoty key-value
- **Vhodné**:
  - Pro data s jednoduchou strukturou a jednoduchými vztahy
  - Pro vysokou škálovatelnost
  - Vhodné pro vysokou flexibilitu
  - Vhodné pro systémy, které vyžadují vysokou dostupnost a odolnost
  - Např. velké e-commerce, sociální sítě, systémy pro analýzu dat v reálném čase
- **Nevhodné**: - Pro aplikace vyžadující silnou konzistenci - Aplikace se složitými dotazy nad strukturovanými daty - Pro složité datové typy
<!--ID: 1737106145196-->

END

---

### Probírané jazyky

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Cypher
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **Cypher**.

(větší otázka)

Back:

Cypher slouží pro dotazování nad grafovými databázemi, zejména nad Neo4j.

- Má deklarativní přístup, inspirováno SQL

Dotazovací jazyk:

- Vybíráme podgrafy splňující určité podmínky
- `()` reprezentuje node
- `<--, --, -->` reprezentuje vztah
- Používá se MATCH, RETURN, WHERE, WITH

Např. najde movie, kde hrál nějaký herec

```
MATCH (m:MOVIE)-[:PLAY]->(:ACTOR)
RETURN DISTINCT m;
```
<!--ID: 1737106145198-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: XQuery
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **XQuery**.

(větší otázka)

Back:

XQuery slouží k dotazování nad stromovou strukturou XML dokumentu.

- Je nadstavba XPath umožňující složitější konstrukty:
  - FLWOR - For, Let, Where, Order by, Return
  - Kvantifikátory - some, every, ...
  - If-then-else

**Např.** výběr všech elementů s tagem `<book>`

```xquery
for $book in doc("books.xml")//book
return $book
```
<!--ID: 1737106145201-->

END

---

<!--
Exam Note ID: NI-SI-17
Exam Note Section Name: Jejich typické konstrukce a vyjadřovací možnosti
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Krátce popište, případně vysvětlete na vhodných příkladech dotazovací jazyk **MongoDB**.

(větší otázka)

Back:

- Vychází z JavaScriptu, tečková notace
- db - handle na databázové spojení
- movies - kolekce
- **find(selekce, projekce)** - metoda (jako SELECT), může být například update atd.
- selekce - podle čeho filtruju výsledky
- projekce - jaké atributy mají být ve výsledku
- **sort(key_obj)** - řazení, 1 = ASC, -1 = DESC
- **pretty()** - jen formátuje výstup, aby byl čitelnější (řádky, odsazení)

```javascript
db.movies.find(
	{
		year: {$gte: 2000, $lte 2005},
		director: { $exists: 1 }
	},
	{ _id: 1 }
).sort(
	{ rating: -1, year: 1 }
)
```
<!--ID: 1737106145203-->

END

---

### Databázové benchmarky

<!--
Exam Note ID: NI-SI-19
Exam Note Section Name: Komplexní benchmarky (TPC-C, TPC-E, TPC-H) - princip a metriky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Charakterizujte rozdíly mezi tzv. **micro a complex benchmarkem** v databázích.

(větší otázka)

Back:

**Micro**:

- **Testované aspekty:**
  - Rychlost jednotlivých operací (např. čas potřebný k vložení jednoho záznamu, čtení z databáze, atd.).
  - Latence a propustnost při konkrétních operacích.
- **Výhody:**
  - Poskytuje detailní informace o výkonu jednotlivých operací nebo komponent databázového systému.
  - Usnadňuje porovnání výkonu mezi různými implementacemi nebo konfiguracemi pro konkrétní operace.
- **Nevýhody:**
  - Výsledky jsou často vysoce specifické a nemusí odrážet skutečný výkon systému v reálných aplikacích.
  - Nezohledňuje komplexní interakce mezi více operacemi nebo systémy.

**Complex**:

- **Testované aspekty:**
  - Výkon při běhu celé aplikace nebo systému.
  - Zátěžová testování při vysokém počtu uživatelů nebo požadavků.
  - Dlouhodobá stabilita a odolnost systému.
  - Měření latence a propustnosti v reálných podmínkách.
- **Výhody:**
  - Poskytuje ucelený pohled na výkon databázového systému v reálných podmínkách.
  - Zohledňuje vliv více operací a interakcí mezi součástmi systému.
- **Nevýhody:** - Může být složitější na nastavení a vyžaduje složitější testovací scénáře. - Výsledky mohou být ovlivněny externími faktory, jako jsou konfigurace hardwaru, síťové podmínky a další.
<!--ID: 1737106145206-->

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

Co je **TPC** a jak souvisí s databázovými benchmarky?

(větší otázka)

Back:

Je nezisková organizace Transaction Processing Performance Council (TPC), která definuje různé benchmark testy databází (například TPC-C, TPC-H nebo TPC-E).
<!--ID: 1737106145209-->

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

Vysvětlete princip benchmarku **TPC-C**. Co je výstupem benchmarku?

(větší otázka)

Back:

Slouží na **OLTP**:

- Máme nějaký obchod s databází
- Nad ním máme jasně zadefinované operace a transakce
- Je definovaná zátěž té databáze a jednotlivá data

Následně:

- Spustí se simulace, která to bude škálovat a zatěžovat
  - Tím postupně získávám informace o tom, jak moc lze databázi škálovat atd.
- Jakmile naškáluju až do limitu mého hardwaru, nechám to chvíli bežet a zaznamenám výsledky benchmarku

Metriky:

- $tpmC$ - new-order transaction rate = při maximálním zatížení databáze, kolik jsem schopný zpracovat nových objednávek
- $Price/tpmC$ - kolik mě jedna nová objednávka stojí peněz (za Price byl v názvu dosazený dolar)
<!--ID: 1737106145212-->

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

Vysvětlete princip benchmarku **TPC-E**. Co je výstupem benchmarku?

(větší otázka)

Back:

Slouží na **OLTP**:

Jako příklad je obchodování společnosti, která se zabývá obchodováním s akciema a managování uživatelských účtů.

TPC-E je složitější, je tam větší rozmanitost transakcí atd.

Metriky:

- $TPsE$ - transactions per second u **jakékoliv** transakce
- $Price/TPsE$
<!--ID: 1737106145214-->

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

Vysvětlete princip benchmarku **TPC-H**. Co je výstupem benchmarku?

(větší otázka)

Back:

Slouží pro OLAP
Máme databázi fixní velikosti

Máme tyto metriky:

- $QphH@Size$ - Composite Query-perHour performance metric
- $Price/QphH@Size$ - Price/Performance metric (za Price byl v názvu dosazený dolar)
  $Size$ je velikost databáze.
<!--ID: 1737106145217-->

END

---

---
created: 2025-01-17T09:33:57
title: "Příprava ke zkoušce"
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB-Exam
FILE TAGS: NI-PDB

### Optmailizace SQL

START
FIT-Card

Co je to **cost-based optimalizace** a jak se využijí **statistiky o databázových objektech** při cost-based optimalizaci?

Back:

DB pro každý dotaz vytvoří prováděcí plány. Operace v plánu mají cenu (cost - typicky počet nutných I/O bloků - operací). Pro každý plán se vypočítá jeho celková cena. Vybere se plán s nejnižší cenou.

Statistiky slouží k odhadu/výpočtu ceny na jednotlivé operace a celý plán provádění (cena se počítá na základě statistik a každý db stroj si ji počítá jinak). Například pokud statistika nad indexem napovídá, že v převážná většina řádků má hledanou hodnotu, může být index ignorován, protože sekvenční průchod může být rychlejší než náhodný průchod (z důvodu doby vystavování hlaviček disků) (například výpis mužů, pokud ve firmě pracují téměř výhradně muži)
<!--ID: 1737106145101-->
END

---

START
FIT-Card

Jak vypadá **zpracování SQL dotazu** (fáze zpracování dotazu, kde a jak se při nich dá optimalizovat)?

Back:

**Parse** - syntaktická a sémantická analýza, kontrola práv, výsledek prováděcí plán (v této fázi se optimalizuje)
**Bind** - namapování
**Execute** - provedení
**Fetch** - získání výsledku

- najskor spravi prevadzaci plan - strom (list -> koren) <- znamená vyberie najlepsi  plan - cost-based optimalizaciu
- Datove zdroje & pristupove metody
- operacie selekcia, projekcia, join,
- Neskor updatuje statistiky (o tabulkach a indexoch)

Velakrat staci obycajny podporny index nad inym stlpcom v tabulke.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcgEbTAQzyhuD_nZgIetYc6a2dmueSxc9oDlrjCAwBU9r3hlf-evXj6aDz8ewrLEf-l4qnmTCB87JHnIIzQ_7Q-q-MvNSvhJImTWP5atJfvaN7U3Njh1-lZI0v7JzTypECrhGOSPI-hPLZSWgBuTQ_Zc0T7?key=MR9RTuBxYyWmpndNFWTOiQ)

ChatGPT poradil:

Vyhýbejte se poddotazům, které mohou být přepsány na efektivnější JOINy nebo CTE.

Parse fáze:

- Indexy: Zajistěte, že na sloupech používaných v podmínkách WHERE, JOIN nebo GROUP BY jsou vytvořeny správné indexy.
- Statistiky: Udržujte aktuální statistiky databázového systému, které optimalizátor využívá pro odhad objemu dat (ceny).
- Hinty: Některé databáze umožňují přidat "hinty", které optimalizátoru říkají, jaké strategie použít (např. jaký JOIN algoritmus preferovat).

Execute fáze:

- Partitioning: Rozdělení tabulek na části (partitions), což může zrychlit přístup k datům.
- Caching: Pokud je dotaz často spouštěn, výsledky lze uložit do mezipaměti.
- Paralelismus: Využijte paralelní exekuci, pokud ji databáze podporuje.

Přednáška č. 10:

optimalizace vybraných SQL příkazů

- ladění/optimalizace může být provedena na různých úrovních
- základem je porozumění provaděcímu plánu nebo sledování systémových statistik
- porozumění prováděcímu plánu
- v drtivé většině úprava/přidání indexů
- úprava uložení dat - clustery, IOT
- "hinty" pro optimaliztor
- techniky pro optimáalizaci (neplatí obecně, např. Oracle)
- sledování systémových statistik
- úpravy konfigurace serveru (buffer cache, redolog cache, …​
- fyzická reorganizace (typicky paměť, disky, řadiče, …​)
- další možnosti
- materializované pohledy
<!--ID: 1737106145106-->
END

---

START
FIT-Card

Vysvětlete rozdíl mezi **heap table** a **index-organized table**.

Back:

Otázka je na index-organized table: Tá má podobnú štruktúru ako index ale s tým rozdielom, že v zázname obsahuje celý riadok. Pri Heap Table záznam v indexu obsahuje okrem index hodnoty (+ možno niečo interné) len ROWID, podľa ktorého následne musíme spracovať iný DB blok.

Výhody IOT: menší počet IO operácií

Nevýhody IOT: pokiaľ nechceme duplikáciu dát, tak je možné mať len jeden index

Lepší vysvětlení je zde: [https://docs.oracle.com/cd/A97630_01/appdev.920/a96590/adg07iot.htm#10072](https://docs.oracle.com/cd/A97630_01/appdev.920/a96590/adg07iot.htm#10072)  
Je to od Oraclu ale myslím si, že je to obecný koncept.

Vysvetleni z odkazu vys:

- Řádek v běžné tabulce má stabilní fyzické umístění. Jakmile je toto umístění stanoveno, řada se nikdy zcela nepohne. I když je částečně přesunuta přidáním nových dat, vždy existuje kus řádku na původní fyzické adrese - identifikovaný původním fyzickým rowid - ze kterého systém může najít zbytek řádku. Dokud řádek existuje, jeho fyzický rowid se nemění. Index v běžné tabulce ukládá data sloupců i rowid.
- Řádek v tabulce uspořádané podle indexu nemá stabilní fyzické umístění. Uchovává data v seřazeném pořadí v listech indexu B*-stromu postaveného na primárním klíči tabulky. Tyto řádky se mohou pohybovat, aby se zachovalo seřazené pořadí. Vložení může například způsobit přesun existujícího řádku do jiného slotu nebo dokonce do jiného bloku. Listy indexu B*-tree obsahují primární klíč a skutečná data řádku. Změny v datech tabulky – například přidání nových řádků nebo aktualizace či odstranění existujících řádků – vedou pouze k aktualizaci indexu.

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXegulIM9veZgOkmIGQ0YFjkyEptxLaKG5Eq4yrFGTBQcDWj5WoQGdJcAd5PZGItbX2htD-Lvf_OFm5jmiZGxlMPcnD_Io2dVJurURlMpUaDD-1vTaiEut81a1XSEyPBRNiJ8nBnmw?key=MR9RTuBxYyWmpndNFWTOiQ)**
<!--ID: 1737106145109-->
END

---

START
FIT-Card

Vysvětlete rozdíl mezi **heap table** a **cluster**.

Back:

Heap table: záznamy v tabulce nejsou seřazené, pokud k tabulce například přistoupíme přes index, může se stát, že pro jeden klíč budeme muset přečíst více bloků (je to proste klasicka tabulka).

Clustered table: podobne data ulozene spolu, efektivnejsie (caste dotazovanie na dept a emp.)

Neklastrovana tabulka: podobne data ulozene dalej od seba, zaberaju viac miesta

Z [https://docs.oracle.com/database/121/CNCPT/tablecls.htm#CNCPT608](https://docs.oracle.com/database/121/CNCPT/tablecls.htm#CNCPT608):

Cluster tabulek je skupina tabulek, které sdílejí společné sloupce a ukládají související data do stejných bloků.

Když jsou tabulky seskupeny, může jeden datový blok obsahovat řádky z více tabulek. Blok může například ukládat řádky z tabulek zaměstnanců i oddělení, nikoli pouze z jedné tabulky.

Klíč clusteru je sloupec nebo sloupce, které mají společné tabulky z clusteru. Například tabulky zaměstnanců a oddělení sdílejí sloupec department_id. Klíč klastru zadáváte při vytváření klastru tabulek a při vytváření každé tabulky přidané do klastru tabulek.

Cluster ([https://docs.oracle.com/cd/E18283_01/server.112/e17120/clustrs001.htm](https://docs.oracle.com/cd/E18283_01/server.112/e17120/clustrs001.htm)):
\*\*![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXfQ-7LR7FvTu2TaEEED3GXRTjqzIeA983xlp0cQth-CUCqmlDpvIKggdvJWusP6JycjX0UMDDfan_wYmHridG0D3G8ILhibrCcGP7FKmRkkpIcatK2cp-1vtKG_sKYQBA5FPlAqDIf4m27vWcmKCNj5J8vy?key=MR9RTuBxYyWmpndNFWTOiQ)
<!--ID: 1737106145112-->
END

---

START
FIT-Card

Vysvětlete rozdíl mezi **B-tree** a **bitmap** indexem, příklady vhodného použití obou typů indexů.

Back:

#### B-Tree Index:

- Hierarchická struktura stromu (Balanced Tree).
- Hodnoty jsou uspořádané ve stromové struktuře, což umožňuje efektivní vyhledávání, vložení a mazání.
- Každý uzel obsahuje klíče a ukazatele na potomky, přičemž listové uzly obsahují ukazatele na fyzická data.
- Hodí se, když je hodně různých hodnot ve sloupci (vysoká kardinalita) - např. ID, jméno

#### Bitmapový Index:

- Ukládá data ve formě bitových map, kde každý bit označuje přítomnost nebo nepřítomnost konkrétní hodnoty v určitém řádku.
- Každá jedinečná hodnota sloupce má svou vlastní bitovou mapu. T.j. pro bitmap index na sloupci se vytvoří 2D mapa.
- Struktura je plochá a není hierarchická.
- Hodí se, když je málo různých hodnot ve sloupci (nízká kardinalita) - např. pohlaví, kategorie

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcF145SpYQerBBWGth3WYwh7HOx7R4eTzA61VYsvM_rneIQWew3hCaJs8gnWVWDHLmo2oTR8u-fjaDVEMVZi_X4OW4qieF2aUtMJ-m8SJCrIzZe84WXrYoIT7AB5nygsQoPcUKIhzx7zRI3Hz8TRFk73y_Z?key=MR9RTuBxYyWmpndNFWTOiQ)
<!--ID: 1737106145114-->
END

---

START
FIT-Card

Jaké jsou **typické statistiky pro tabulky** v relační databázi a jak se udržují když se pomocí DML mění data?

Back:

Připomenutí: DML = Data Manipulation Language (třeba SQL)

**Heap table:**

- nR - number of rows or relation (R)
- pR - number of blocks/pages to store relation (R)
- V(A, R) - pocet rozdílných hodnot A v relaci R (tabulce)
- bR - Block factor - průměrný počet řádek, které se vejdou do jednoho bloku/stránky
- rozsirene: min/max values, histogramy

**Udržování při změně dat:**

- Neaktuální statistiky způsobují nesprávný výpočet ceny dotazů
- Statistiky se nikdy živě nemění při DML operacích (to by příliš zatěžovalo stroj)
- Automaticky se přepočítávají démonem když databáze není busy (idle time)
<!--ID: 1737106145117-->
END

---

START
FIT-Card

Jaké jsou **typické statistiky pro B-tree indexy** a jak se udržují když se pomocí DML mění data?

Back:

B-tree stats (index on relation R with key A):

- I(A, R) - hloubka B-stromu (typicky 2-3)
- f(A, R) - Faktor vetveni (typicky 50-150) - Faktor větvení je maximální počet ukazatelů (větví) v každém vnitřním uzlu B-stromu.
- p(A, R) - počet listových bloků
- rozsirene: Clustering factor: pocet blokov co musim navstivit, aby som mal roztriedene bloky podla klucu indexu (nízký při datech seřazených podle indexu)

Udržování při změně dat:

- Neaktuální statistiky způsobují nesprávný výpočet ceny dotazů
- Statistiky se nikdy živě nemění při DML operacích (to by příliš zatěžovalo stroj)
- Automaticky se přepočítávají démonem když databáze není busy (idle time)
<!--ID: 1737106145120-->
END

---

START
FIT-Card

Co jsou to přístupové cesty (**access paths**) při vyhodnocování SQL dotazů? Uveďte příklady.

Back:

An access path specifies the path chosen by a database management system to retrieve the requested tuples from a relation.

An access path may be either a sequential scan of the data file or an index scan with a matching selection condition when there are indexes that match the selection conditions in the query.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXcxqRKWIFM5petoI9JKd2txeYfDbreaWO3UHDTKXZtN5h_8PW_6lsWUMdn8xjJmZBs7rAPJIpVK3cePXyDuqYogXmOtHOf2Spxkc47KIeNdDHGOutzxcUKUtMAGESVP6J7m9WSBCZ7RZ8tFdQZ5gI6zaV0?key=MR9RTuBxYyWmpndNFWTOiQ)

Select \* from R where A = ‘x’ 
ak nemam index, tak to bude pocet bloko, v kt. Je ulozeny. <- Full Table scan
Ak unikatny index, tak pR/2
Ak neunikatny index: zavisi na clustering factor I(R, A) + n(A=x)

Select B from R where A = ‘x’
Composed index na R(A,B): cena hlbky stromu + pocet riadkov kdx na R(A,B), A uniq: I(R, (A,B)) <- hlbka idx. stromu
e hodnota riadku j;  -1
comp. id
Ak mam vacsitka/mensitka:
Listy su zretazene, takze sa to znizi. Ak ‘X’ je v strede, tak je to /2
<!--ID: 1737106145122-->
END

---

START
FIT-Card

Jaké znáte **metody vyhodnocení spojení (join)** v relačních databázích? Naznačte jak probíhají.

Back:

V typickém případě jsou spojované relace větší, než dostupná operační paměť (M). Čím více je dostupné paměti, tím méně I/O operací je potřeba.

(Block) Nested loop join: naprosto klasické vnořené cykly

Pokud pR = 2, pS = 3, M = 3, pak čteme do bloku M_1 první blok z R (1), v bloku M_2 iterujeme S (+ 3), opět načteme do bloku M_1 další blok z R (+ 1), v bloku M_2 opět iterujeme S (+ 3 = 6 I/O reads). I/O writes závisí i na blokovacích faktorech.

Pokud máme více dostupné operační paměti než 3 bloky, je nejefektivnější vybrat pro vnější smyčku menší tabulku, tu iterovat po (M-2) blocích a ve vnitřní smyčce iterovat větší tabulku po 1 bloku (zbývající 1 blok je vždy použit na výstup).

Merge join: zalezi na poctu behov

select \* from R join S on (R.a=S.a);

1. seřaď R podle a
2. seřaď S podle a
3. merge: čti seřazené relace, pokud R.a=S.a pak poskladej vysledek

(malokedy sa vojde do pamati) <- viac behov
ak pamati dost: 3\*(pR+pS) <- heuristiky
ak pamati nie dost: priority queue
Multi-run sort: rozdelit na kusky a sortovat a matchovat

Hash join

aplikuj hash func. Na atribut na kt. robim join.

urob partitions (chlieviky) <- potom NLJoin

snazime sa znizit pocet vzajomnych porovnani

- choose a hash function (usually mod(k))
- apply hash function to both relations (to join attribute)
- compare only groups from R and S with the same hash value

[https://bertwagner.com/wp-content/uploads/2018/12/Hash-Match-Join-Looping-1.gif](https://bertwagner.com/wp-content/uploads/2018/12/Hash-Match-Join-Looping-1.gif)

Special (idx lookup, common cluster)
<!--ID: 1737106145125-->
END

---

START
FIT-Card

Co to je **prováděcí plán (execution plan)**, jak vypadá a kdy vzniká? Vyplatí se ho cachovat? Pokud ano, za jakých okolností?

Back:

Vznika pri kazdom selecte/dotaze, je to strom toho, co stroj vykona - operacie selekcia, projekcia, join, sort, …

Kdy je vhodné cachovat prováděcí plán?

- Pokud je stejný dotaz (nebo dotaz se stejnou strukturou) prováděn opakovaně, cache může výrazně snížit režii optimalizace. Nebo například mnoho uživatelů naraz se dotazuje na to stejné.
- U velmi složitých dotazů s více tabulkami a složitou logikou, kde vytváření prováděcího plánu zabírá značné množství času.
- Pokud se datové distribuce v tabulkách příliš nemění, plán bude pravděpodobně stále efektivní
<!--ID: 1737106145128-->
END

---

START
FIT-Card

Jaká je základní **strategie pro tvorbu prováděcího plánu**? Jsou situace, kdy se vyplatí spíše full-table scan přístup namísto index-based? Případně uveďte.

Back:

Optimalizátor dotazu (Query Optimizer) v databázovém systému analyzuje různé možné strategie pro provedení SQL dotazu a vybere tu nejefektivnější na základě:

1. Statistiky dat:
   - Počet řádků v tabulce, počet jedinečných hodnot, distribuce dat, velikost tabulky apod.
1. Indexy:
   - Typy indexů, jejich selektivita a velikost.
1. Podmínky dotazu:
   - Použití filtrů, rozsahových podmínek, typy JOIN operací apod.
1. Náklady operací:
   - Náklady na čtení dat z disku (I/O), CPU náklady na zpracování, paměťové nároky atd.

Optimalizátor generuje více možných prováděcích plánů (případně všechny relevantní kombinace) a na základě odhadů nákladů vybere ten s nejnižšími náklady.

Selektivita dotazu (vyjadřuje procento řádků z celkového počtu řádků tabulky, které vyhovují predikátům v podmínce WHERE):

- Nízká selektivita: Velká část záznamů odpovídá dotazu (např. 80 %). → Vhodnější je full-table scan, protože většina dat musí být tak jako tak přečtena.
- Vysoká selektivita: Malá část záznamů odpovídá dotazu (např. 1 %). → Vhodnější je index scan, protože přes index lze efektivně nalézt jen potřebné záznamy.

Velikost tabulky:

- Malé tabulky → FTS - index je zbytečnej overhead
- Velké tabulky → Index, pokud je dotaz selektivní.

V prednáške bol tuším príklad, kde síce bol index nad tabuľkou, ale porovnanie v dotaze bolo blízko maxima (WHERE x < skoro MAX) a DBS si vybral full-table namiesto index-based.

Pokud máme heap s indexem a dotaz s WHERE A < x, pak se podle mě často vyplatí full table scan. V indexu jsou pouze rowid, musím si potom načíst příslušnou stránku z tabulky. Tabulka není seřazená, index je. Při procházení indexu budu muset opakovaně načítat stejné bloky tabulky, protože řádky, které jsou v tabulce vedle sebe, nejsou v indexu vedle sebe.

![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXdFmvya1m_u0_MKPt17tv8U0vDUBEZnDuMwFadov4nKelAbrCF0jRrdWnzHNKTLicAexLdEEClB2IuXW_5tfuslbNmrdheSWhrfjHQV2fbxTts-1OG7sHiwhYg3nMs0RmdGZux3T1sctPa3By-73jCfCJg?key=MR9RTuBxYyWmpndNFWTOiQ)

Ten statnicovy priklad mi prijde divny, proc by se mela lisit operace < a > ? [Tady](https://dba.stackexchange.com/questions/11679/when-is-a-full-table-scan-better-than-index-scan) uvadi duvody:

- Tabulka je mala
- Selektivita je nízká (stejne by se vratila vetsina tabulky)
- Pokud vracim hodne radku, musim delat lookup do tabulky a FTS muze byt levnejsi (podobne jako bod 2, a je to to, co jsem psal vyse nad “statnicema”)
<!--ID: 1737106145130-->
END

---

START
FIT-Card

**Operace řazení**, v jakých situacích se používá, jaké jsou parametry pro odhad ceny řazení.

Back:

Použití - operace DISTINCT, ORDER BY, HAVING, set operations, joiny atd.

Při operacích nad relacemi je typické, že se celé relace nevejdou do operační paměti. Tento problém řeší tzv. External sorting algoritmy, my jsme si ukazovali Multi-run sort (na Wikipedii nazývaný jako [External Merge Sort](https://en.wikipedia.org/wiki/External_sorting#External_merge_sort), přičemž z tohoto názvu by mělo být očividné, jak funguje).

Jako parametry sa používá velikost paměti M, počet bloků řazené relace.

Keby chcem LEN zoradit (distinct, order by, having, set operations)

Rozdelim na kusky, podla toho kolko je “multi”

Merge join zavisi na tom, ako to usortim

Ked v dotaze chcem dostat < alebo > ako nejaka hodnota.

Odhad: podla indexov, mnozstva zaznamov a kuskov toho sortu
<!--ID: 1737106145133-->
END

---

START
FIT-Card

**Postup při ladění výkonu DB serveru** (jak zjistíme co vázne, jak zvolíme SQL dotazy pro ladění?

Back:

- je třeba začít hledáním **typické zátěže**
  - je třeba ji získat při **běžném zatížení** tedy až po "zahřátí" databáze
  - existuje mnoho podpůrných nástrojů specifických pro konkrétní DBMS
    - PostgreSQL: stačí nastavit logování příkazů v configu (je tam prahová hodnota, delší příkazy se logují, default je 200ms)
    - MySQL: podobně jako PostgreSQL
    - Oracle: od verze 10g víceméně povinný diagnostický a sběrný nástroj Automated Workload Repository (AWR), pár detailů [zde](https://courses.fit.cvut.cz/NI-PDB/media/tutorials/oracle-monitoring-tuning.pdf).
- analýza získaných dat a vytipování problematických SQL příkazů
  - **pravidlo "90:10"** You can get 90 percent improvement with only 10 percent effort, but realizing that final 10 percent performance gain will take 90 percent of your tuning efforts.
  - Různé RDBMS poskytují různé prostředky:
    - PostgreSQL projekt [pgBadger](https://github.com/darold/pgbadger). Umožňuje analýzu četnosti SQL příkazů, různá řazení atd.
    - Oracle ADDM infrastruktura (Atomatic Database Diagnostic Monitor) a řada navázaných specializovaných nástrojů typu "Wizard"
- optimalizace vybraných SQL příkazů
  - postupovat po jednom
  - stanovit si měřitelné metriky, aby byl prokazatelný přínos
  - ladění/optimalizace může být provedena na různých úrovních
  - základem je **porozumění provaděcímu plánu** nebo **sledování systémových statistik**
    - porozumění prováděcímu plánu
      - v drtivé většině úprava/přidání indexů
      - úprava uložení dat - clustery, IOT
      - "hinty" pro optimalizátor
      - techniky pro optimalizaci (neplatí obecně, např. Oracle)
    - sledování systémových statistik
      - úpravy konfigurace serveru (buffer cache, redolog cache, …​)
      - fyzická reorganizace (typicky paměť, disky, řadiče, …​)
      - další možnosti
      - materializované pohledy
      - …​.

Viz [https://courses.fit.cvut.cz/NI-PDB/lectures/10-benchmark  s-acid-tuning/index.html#\_db-server-tuning](https://courses.fit.cvut.cz/NI-PDB/lectures/10-benchmarks-acid-tuning/index.html#_db-server-tuning)\*\*
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

Předpoklady

- Distribuovaný systém se shardingem a replikací
- Operace čtení a zápisu pouze na jednom agregátu

Tvrdí, že pro distribuovaný systém nemůže poskytovat více jak dvě záruky z těchto tří:

- **konzistence** (Consistency): Operace pro čtení a zápis musí být spouštěny atomicky (po operaci zápisu vidí všechny readery stejná data)
- **dostupnost** (Availability): Pokud node funguje, musí reagovat na požadavky
- **odolnost k přerušení** (Partition tolerance): systém musí fungovat, i když se izolují dvě  nebo více sad uzlů
<!--ID: 1737106145151-->
END

---

START
FIT-Card

Vysvětlete rozdíly mezi koncepcí **ACID a BASE**.

Back:

- ACID se zaměřuje na: Consistency + Availability (from CAP Theorem, Consistency over Availability, Pessimistic approach)

  - **Atomicity** - Transakce se úspěšně provede celá nebo vůbec.
  - **Consistency** - Zápis pouze pokud jsou splněna všechna omezení a podmínky (transakce převádí db z jednoho validního stavu do druhého validního stavu).
  - **Isolation** (Independence) - Operace uvnitř transakce neovlivní ostatní transakce.
  - **Durability** - Provedené změny jsou bezpečně (perzistentně) uloženy.

- BASE se zaměřuje na: Availability + Partition Tolerance (from CAP Theorem, Availability over Consistency, Optimistic approach)
  - **Basically Available** - Systém jako celek je neustále dostupný.
  - **Soft-state** - Systém není plně deterministický a je v toku (nestabilní), po zápisu mohou nějakou dobu číst starou hodnotu
  - **Eventually consistent** - Systém bude za nějaký čas konzistentní (obvykle v řádu milisekund).
  - **Strong consistency vs. Weak/Eventual consistency** – Strong je vždy konzistentní, ve weak ale existuje nějaký okno, kdy dva lidi mužou přečíst něco jiného.
<!--ID: 1737106145154-->
END

---

START
FIT-Card

Co je to **horizontální a co vertikální škálování** databáze a jak souvisí s CAP?

Back:

**Vertikalne**: updown, jeden node ako engine a pridávame vypocetnu silu.
dobre pre silnu konzistenciu
ma svoje limity; HW! Malo predavacov, je to specificke

- **Výhody**
  - netřeba řešit propojení více strojů a problémy s tím spojeny
- **Nevýhody**
  - upgrade mnohdy dražší, než koupě dalšího stroje
  - potenciální vendor lock-in (výkonné servery, infrastrukturu dělá jen pár výrobců)
  - nelze škálovat donekonečna

**Horizontalne**: skal. Smerom von - viac uzlov pridavame. Cenovo vyhodnejsie, flexibilnejsie ALE distribucia dat., komplexita clusteru, konzistencia, synchronizacia,

- **Výhody**
  - možné použít běžné stroje
  - nezávislost na výrobci
  - teoreticky neomezené škálování (ale stejně narazí na problémy s rychlostí sítě apod.)
- **Nevýhody**
  - nutné řešit synchronizaci strojů, problémy se sítí apod.
<!--ID: 1737106145157-->
END

---

START
FIT-Card

Jak lze použít **CAP theorém ke klasifikaci databázových strojů**? Uveďte příklady databázových strojů, které znáte a pokuste se je klasifikovat na základě CAP theorému.

Back:

**CA** (Consistency-Availablility)

- zachovávají ACID vlastnosti
- mohou nastat výpadky
- klasické relační databáze
- MySQL, BigTable, PostgreSQL

**CP** (Consistency-Partition Tolerance)

- upřednostňují konzistenci nad dostupností => distributed locking
- typicky maximalizují i dostupnost (vysoce dostupné DB)
- MongoDB, HyperTable, MemcacheDB, Redis

**AP** (Availability-Partition Tolerance)

- upřednostňují dostupnost nad konzistencí = BASE vlastnosti
- data jsou typicky konzistentní v řádu milisekund → eventuálně konzistentní DB
- Cassandra, SimpleDB, CouchDB, RiakKV, Web Cache, DNS

**![](https://lh7-rt.googleusercontent.com/docsz/AD_4nXch_NVqX68_B8u5AQy3l8by3XsopfRNwxO1hp6BhLioQvxUt9p_47lPdT8Twxicf8Kp_J2ZA7KPhTTggIPE-Up6X6T4wgJ2fkAqmOx7oSL2Kzebw24m1MI13JGR6wCbRzwiwY9KVp5f1hRg6CEutcU4V3Y?key=MR9RTuBxYyWmpndNFWTOiQ)**
<!--ID: 1737106145159-->
END

---

START
FIT-Card

Jaký je **rozdíl mezi replikací a technikou sharding**? Jsou to techniky, které se vzájemně vylučují nebo se mohou doplňovat?

Back:

**Sharding**: rozdelim do casti a kazdy server ma na starosti nejaku cast dat. Aj agregacie

- (diff data on diff nodes)

protirecenie: uniformne rozlozenie dat, balancovana zataz, respektovanie fyzickych lokalit

**Replication**: niekolko kopii data na niekolkych serveroch. Chcem rozdelit pre viac uzivatelov

- (Same data on diff nodes)

**Ano, tyto techniky se doplňují (například v MongoDB)**
<!--ID: 1737106145162-->
END

---

START
FIT-Card

Co je to **silná a slabá konsistence** v NoSQL databázích? Jak souvisí s CAP?

Back:

**Slabá konzistence** - nebo také případná konzistence. Každý kdo čte z databáze nemusí vidět vždy správně zapsaná všechna data.

**Silná konzistence**  - používá přístup ACID (Atomicity, Consistency, isolation, durability)

CAP:

- Upřednostnění dostupnosti nad konzistencí => slabá konzistence
- Upřednostnění konzistence nad dostupností => silná konzistence
<!--ID: 1737106145165-->
END

---

START
FIT-Card

Vysvětlete co je **"quorum"** a jak se používá k zajištění silné či slabé konzistence?

Back:

nfQuorum-based voting can be used as a replica control method, as well as a commit method to ensure transaction atomicity in the presence of network partitioning.

Quorum určuje počet nodů, které musí “potvrdit” resp. odpovědět na požadavek čtení nebo zápisu. Je to jeden ze způsobů, jak lze řídit úroveň konzistence, jak pro čtení, tak pro zápis.

Pro zajištění silné konzistence:

Write quorum (W > N/2): Jednoduše stačí, aby zápis získal nadpoloviční většinu hlasů. Jelikož každý node má právě jeden hlas, nemůže na různých strojích dojít k různým zápisům.

Read quorum (R > N - W): R + W > N, tedy alespoň jeden node z množiny R má aktuální data (náleží i do W). Jelikož díky předchozí podmínce nemůže proběhnout několik zápisů najednou, stačí podle časového razítka vrátit aktuálnější verzi dostupnou nodům v R.

Pokud nenastalo quorum, požadavek nemůže být proveden. [[1]](https://www.ksi.mff.cuni.cz/~svoboda/courses/231-NIE-PDB/lectures/NIEPDB-Lecture-05-Principles.pdf#page=45) [[2]](https://stackoverflow.com/a/7823201)
<!--ID: 1737106145167-->
END

---

START
FIT-Card

Jak jsou charakterizována **BigData** (3V+)?

Back:

Nie je definicia, z historie je to buzzword. Non-relational databaza

Nosql - nova generacia databaz, kde relacne db sa nehodia.
distribuovane, skalovatelne (hori, vert), snadná replikacia

- **Volume** (Scale)
  - Data volume is increasing exponentially, not linearly
  - Even large amounts of small data can result into Big Data
- **Variety** (Complexity)
  - Various formats, types, and structures (from semi-structured XML to unstructured multimedia)
- **Velocity** (Speed)
  - Data is being generated fast and needs to be processed fast
- **Veracity** (Uncertainty)
  - Uncertainty due to inconsistency, incompleteness, latency, ambiguities, or approximations
- **Value**
  - Business value of the data (needs to be revealed)
- **Validity**
  - Data correctness and accuracy with respect to the intended use
- **Volatility**
  - Period of time the data is valid and should be maintained
- **Cardinality**
- **Continuity**
- **Complexity**
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

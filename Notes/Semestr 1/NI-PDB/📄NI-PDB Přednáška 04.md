---
created: 2024-10-15T08:44:57
title: MongoDB
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB prednaska04 status-toReview

> [!info] Další užitečné materiály
> Podrobnější informace o advanced dotazování atd. zde: https://courses.fit.cvut.cz/NI-PDB/lectures/04-mongodb/index.html

### JSON

START
FIT-Card

Co je **JSON**?

Back:

**Otevřený standard pro strukturu dat.**
<!--ID: 1729236692764-->
END

---

START
FIT-Card

Co má větší **vyjadřovací schopnost**? JSON nebo XML?

Back:

**XML**

<!-- DetailInfoStart -->
Prakticky ale většina věcí jde udělat v JSONu, proto je dnes častěji používanější.
<!-- DetailInfoEnd -->
<!--ID: 1729236692774-->
END

---


START
FIT-Card

Má **objekt** v JSONu **setřízený** atributy nebo ne?

Back:

Atributy jsou **nesetřízené**.
<!--ID: 1729236692786-->
END

---


START
FIT-Card

Má **array** v JSONu **setřízené atributy** nebo ne?

Back:

Atributy jsou **setřízené**.
<!--ID: 1729236692794-->
END

---


START
FIT-Card

Jaké **hodnoty** může mít atribut v JSONu?

Back:

- `boolean`
- `number`
- `string`
- `null`
- `array`
- `object`
<!--ID: 1729236692803-->
END

---


START
FIT-Card

Může mít **JSON** hodnotu atributu `undefined`?

Back:

Ne, hodnoty, které jsou `undefined` jsou při vytváření JSONu ignorovány.
<!--ID: 1729236692814-->
END

---


START
FIT-Card

Jak se dá **validovat JSON dokument** (=jestli splňuje určité schéma)?

Back:

Pomocí **specifikace JSON Schema** můžu specifikovat a validovat JSON dokumenty.

<!-- DetailInfoStart -->
Prý se to nepoužívá ve 100% případů, protože vlastností JSONu je, že je "schema free" - tzn. nehrotí se tak, aby to přesně splňovalo dané schéma.

Samozřejmě v mnoha případech je potřeba to schéma validovat a tam se to používá.
<!-- DetailInfoEnd -->
<!--ID: 1729236692823-->
END

---

#### BSON

START
FIT-Card

Co je **BSON** a **kdy se používá**?

Back:

**Binární reprezentace JSONu**.

**Kdy se používá:**
- Když se JSON přenáší přes síť
- Když se JSON ukládá do databáze _(např. v MongoDB)_

<!-- ExplanationStart -->
Díky tomu je ten soubor pak menší. 
<!-- ExplanationEnd -->
<!--ID: 1729236692831-->
END

---
### MongoDB

START
FIT-Card

Co je **MongoDB**?

Back:

**Databázový engine** / **Databáze**, který pracuje s **JSON dokumenty** 

<!-- DetailInfoStart -->
- Podle Michala Valenty je dost profláklý a používaný
- Bylo to založeno v roce 2009 a podle Michala Valenty to už je mature projekt
<!-- DetailInfoEnd -->
<!--ID: 1729236692841-->
END

---


START
FIT-Card

S jakými dokumenty pracuje **MongoDB**?

Back:

S kolekcemi **JSON dokumentů**
<!--ID: 1729236692851-->
END

---

START
FIT-Card

Jaká je **struktura** MongoDB databáze?

Back:

- **Instance** - instance DB enginu
- **Database**
- **Collection**
- **Document**
<!--ID: 1729236692860-->
END

---


START
FIT-Card

V rámci čeho musí být `id` dokumentu? 

Back:

Musí být **unikátní** v rámci dané **kolekce**.

<!-- DetailInfoStart -->
Klíče (id) jsou **immutable**
<!-- DetailInfoEnd -->
<!--ID: 1729236692868-->
END

---


START
FIT-Card

Jaký **typ hodnot** může mít `id` v MongoDB?

Back:

Cokoliv kromě JSON array.

<!-- ExampleStart -->
Např. number, string,...

V 99% případů se používá **ObjectId** (ten je default) neboo UUID
<!-- ExampleEnd -->
<!--ID: 1729236692877-->
END

---


START
FIT-Card

Proč se v MongoDB **nedoporučuje** přidělovat IDčka **autoinkrementem**, ale např. pomocí **UUID**?

Back:

Protože ta databáze může být naškálovaná (na více místech), potom přidělování IDček bude složité.
<!--ID: 1729236692887-->
END

---


START
FIT-Card

Co je **ObjectId** v MongoDB?

Back:

**BSON typ**, který se používá pro idčka

<!-- DetailInfoStart -->
- Je defaultní v MongoDB
- Má 12 bytů
- Je velice rychlý na vygenerování
- "Likely unique" - tzn. když vytvořím dva dokumenty v jeden čas, je velice malá pravděpodobnost, že by měly stejné id
<!-- DetailInfoEnd -->
<!--ID: 1729236692896-->
END

---


START
FIT-Card

Co znamená `$` v MongoDB?

Back:

Označuje query operátor.

<!-- ExampleStart -->
`$gt` - greater than
<!-- ExampleEnd -->
<!--ID: 1729236692905-->
END

---

#### Modelování dat

START
FIT-Card

Jaké jsou **typy** vytváření relations v MongoDB a **jak fungují**? (2)

Back:

- **Reference**
	- Uložím do dokumentu Id jiného dokumentu.
	- Při hledání si zjistím Id a pak vyhledám další dokument
	- Dá se používat pro vazby `1:1`, `1:N`, `N:M`
- **Embedded document**
	- Do daného dokumentu si rovnou uložím část toho jiného dokumentu
	- Toto je extrémně rychlý na dotazování, ale pomalý na zapisování (protože musím updatnout všechna data)
	- Dá se používat pouze pro vazby `1:1` nebo `1:N`

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241015093540.png)
![](../../../Assets/Pasted%20image%2020241015093549.png)
<!-- DetailInfoEnd -->
<!--ID: 1729236692914-->
END

---

#### Operace v MongoDB


START
FIT-Card

Jak vypadá dotazování v MongoDB (obecně)?

Back:

Dotazuje se nad **jednou kolekcí**, **jedním příkazem** (případně celým scriptem).

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241015093917.png)
<!-- DetailInfoEnd -->
<!--ID: 1729236692926-->
END

---


START
FIT-Card

Jaké jsou **základní operace** v MongoDB databázi? (5)

Back:

- **insert** (`insertOne`, `insertMany`) - vytvoří nový dokument
- **replace** (`replaceOne`) - nahradí existující dokument
- **update** (`updateOne`, `updateMany`) - aktualizuje dokument
- **remove** (`deletOne`, `deleteMany`) - odstraní dokument
- **find** (`find`) - najde dokumenty v kolekci
<!--ID: 1729236692935-->
END

---

##### Insert
START
FIT-Card

Jak funguje vytváření kolekcí v MongoDB?

Back:

Můžu si kolekci vytvořit sám příkazem, ale dělá se to typicky tak, že normálně použiju **insert** a pokud ta kolekce neexistuje, tak ji MongoDB samo vytvoří. 
<!--ID: 1729236692945-->
END

---


START
FIT-Card

Musím v MongoDB zadávat při insertu **idčko** dokumentu?

Back:

Normálně se to nedělá, MongoDB si vygeneruje idčko samo.

_(ale samozřejmě můžu)_
<!--ID: 1729236692953-->
END

---

##### Replace

START
FIT-Card

Proč se používá `replace` v MongoDB, když chci přepsat celý dokument?

Back:

Protože je **rychlejší**, než update.

Proto pokud chci přepsat celý dokument, měl bych použít replace.
<!--ID: 1729236692961-->
END

---


START
FIT-Card

Jak funguje `replaceOne` a `replaceMany` v MongoDB?

Back:

1. Najde to všechny dokumenty co splňují danou query
2. Pokud je výsledek prázdný, defautlně to nic neudělá
3. Pokud to najde alespoň jeden dokument, tak
	1. V případě `replaceOne` to replacne první dokument, který to našlo
	2. V případě `replaceMany` to replacne všechny dokumenty, které to našlo

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241015095246.png)
![](../../../Assets/Pasted%20image%2020241015095252.png)
<!-- DetailInfoEnd -->
<!--ID: 1729236692970-->
END

---


START
FIT-Card

Co je **upsert** mode u replace v MongoDB?

`{ upsert: true }`

Back:

Pokud je `true`, tak v případě že neexistuje daný dokument, tak se záznam uloží.

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241015095508.png)
<!-- ExampleEnd -->
<!--ID: 1729236692981-->
END

---

##### Update


START
FIT-Card

Jak funguje **update** v MongoDB?

![](../../../Assets/Pasted%20image%2020241015095701.png)

Back:

1. Podle podmínky se najdou dokumenty
2. Na všech dokumentech se provede daná operace

**Dostupné operace:**
Nad základními proměnnými:
- `$set` - nastaví novou hodnotu
- `$unset` - vymaže parametr
- `$rename` - přejmenuje atribut
- `$inc` - inkrementuje
- `$mul` - vynásobí

Nad hodnotami:
- `$push` - přidá hodnotu do arraye
- `$addToSet` - jako push, ale pokud tam ta hodnota už je, tak se nevloží
- `$pop` - odebere z arraye první prvek
- `$pull` - odebere z arraye všechny itemy, co matchují danou query

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241015100318.png)
<!-- ExampleEnd -->
<!--ID: 1729236692990-->
END

---


START
FIT-Card

Co je upsert mode u `update` v MongoDB?

Back:

Pokud se nenajde daný dokument, tak se vyrobí.

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241015100329.png)
<!-- DetailInfoEnd -->
<!--ID: 1729236692999-->
END

---

##### Delete

Je easy, nedával jsem na to kartičky.

#### Find


START
FIT-Card

Jak funguje **find** v MongoDB?

Back:

```JavaScript
db.nazev_kolekce.find(
	{podmínka}, // selekce
	{atributy_k_zobrazeni} // projekce
)
```

<!-- ExampleStart -->
```JavaScript
db.movies.find(
	{ year: {$gt: 2005}},
	{ _id_: false, title: true }
)
```
<!-- ExampleEnd -->

**Dostupné operátory**:
<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241015101313.png)
![](../../../Assets/Pasted%20image%2020241015101325.png)
![](../../../Assets/Pasted%20image%2020241015101520.png)
![](../../../Assets/Pasted%20image%2020241015101526.png)
<!-- ExampleEnd -->
<!--ID: 1729236693007-->
END

---


START
FIT-Card

Co znamená **value equality** v MongoDB?

Back:

Hodnoty musí být **identické**, aby byly vybrány pomocí findu.

Pozor! **Záleží** na pořadí.

**Toto NEJSOU identické dotazy**
![](../../../Assets/Pasted%20image%2020241015101023.png)

<!-- ExampleStart -->
Toto taky nejsou stejné dotazy:
![](../../../Assets/Pasted%20image%2020241015101130.png)
<!-- ExampleEnd -->
<!--ID: 1729236693015-->
END

---


START
FIT-Card

Jak se dá vypořádat s **value equality** v MongoDB?

Back:

Pomocí **tečkové notace** pro objekty, pomocí **$all** pro arraye.

<!-- ExampleStart -->
Měl bych se dotazovat tím druhým způsobem.
![](../../../Assets/Pasted%20image%2020241015101210.png)
![](../../../Assets/Pasted%20image%2020241015101452.png)
<!-- ExampleEnd -->
<!--ID: 1729236693023-->
END

---

###### Dotazování na polích


START
FIT-Card

Bude tento dotaz vždy vracet array v MongoDB?

![](../../../Assets/Pasted%20image%2020241015101749.png)

Back:

Ne nutně, pokud mám někde přiřazenou jinou hodnotu než array, tak to může vrátit ji, pokud splňuje danou podmínku.

<!-- ExampleStart -->
Zde to vrátí hodnotu $3$, i když není array.
![](../../../Assets/Pasted%20image%2020241015101844.png)
Ta čárka je ořítko, kvůli tomu tam máme i $1$ a $4$
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241015102007.png)
<!-- DetailInfoEnd -->
<!--ID: 1729236693034-->
END

---

##### Projekce


START
FIT-Card

Co je **projekce** v MongoDB?

Back:

Vyberu dané atributy dokumentu, které chci vybrat.

Pozn. můžu například i slicovat array nebo brát rovnou první element, co matchuje podmínku.

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241015102406.png)
![](../../../Assets/Pasted%20image%2020241015102411.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241015102419.png)
<!-- ExampleEnd -->
<!--ID: 1729236693042-->
END

---

##### Modifikátory

START
FIT-Card

Co jsou **modifikátory** v MongoDB?

Back:

Umožňují mi modifikovat danou query.

<!-- ExampleStart -->
- `sort`
- `skip`
- `limit`

![](../../../Assets/Pasted%20image%2020241015102650.png)
![](../../../Assets/Pasted%20image%2020241015102655.png)
<!-- ExampleEnd -->
<!--ID: 1729236693050-->
END

---

#### Pokročilé dotazování


START
FIT-Card

K čemu jsou `$aggregate, $lookup, $unwind` funkce v MongoDB?

Back:

`$aggregate` můžu použít místo find a udělat tak komplexnější query

V rámci toho pak můžu použít `$lookup` a `$unwind`, které mi umožňí např. vyhledat podle reference daný dokument v jiné kolekci.
<!--ID: 1729236693058-->
END

---

---
created: 2024-11-05T18:24:41
title: Behavioral design patterns
up:
  - "[[📖NI-ADP]]"
---

TARGET DECK: NI-ADP
FILE TAGS: NI-ADP prednaska07 status-toReview

### Iterátor

START
FIT-Card

Co je **Iterator pattern**?

Back:

Cílem je oddělit strukturu toho objektu od jeho přístupu.

Iterátor má typicky funkci next, kterou jsem schopný přeskákat přes všechny prvky.

<!-- ImageStart -->
![](../../../Assets/Pasted%20image%2020241105182717.png)
<!-- ImageEnd -->
<!--ID: 1736497489515-->
END

---


START
FIT-Card

Co je **memento** design pattern?

Back:

Řeší problém ukládání a obnovování stavů. 

Dělají se snapshoty a můžu se k tomu vrátit

<!-- ExampleStart -->
Např. v Google dokumentech se mi to každou minutu uloží a můžu to do toho stavu obnovit.
<!-- ExampleEnd -->

<!-- ImageStart -->
![](../../../Assets/Pasted%20image%2020241105183029.png)
<!-- ImageEnd -->
<!--ID: 1736497489520-->
END

---

## Non-GOF vzory
### Multiton
START
FIT-Card

Co je **multiton** pattern?

Back:

Omezuje mi počet instancí, které můžu v programu mít.

<!-- DetailInfoStart -->
Tohle se obecně moc nepoužívá

Zero-one-infinity princip:
- Buď bych měl možnost mít nula instancí
<!-- DetailInfoEnd -->
<!--ID: 1736497489525-->
END

---

### Thread pool

START
FIT-Card

Co je thread pool?

Back:

Mám prostě nějakou množinu vláken, které můžu vyžívat.

<!-- ExampleStart -->
U databází typicky bývá několik vláken kterýma tam můžu přistupovat 
<!-- ExampleEnd -->

<!-- ImageStart -->
![](../../../Assets/Pasted%20image%2020241105184112.png)
<!-- ImageEnd -->
<!--ID: 1736497489530-->
END

---

### Mock Object

START
FIT-Card

Co je **Mock object** pattern?

Back:

Objekty, co implementují stejný interface, ale mockují ho.

<!-- DetailInfoStart -->
Dají se takhle mockovat APIčka, databáze, systémy atd.
<!-- DetailInfoEnd -->
<!--ID: 1736497489535-->
END

---

### Dependency injection


START
FIT-Card

Co je **dependency injection**?

Back:

Když mám servicu, tak by se neměla nikdy starat o **životní cyklus** jiné classy. Classy by měla vytvářet, ničit atd.

Jak lze docílit **dependency injection**?
- **konstruktorem** - předám to v konstruktoru
- **setterem** - hodím tam instanci toho objektu

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241105185103.png)
![](../../../Assets/Pasted%20image%2020241105185111.png)
<!-- ExampleEnd -->
<!--ID: 1736497489540-->
END

---

### Lazy loading


START
FIT-Card

Co je **lazy loading pattern**?

Back:

Službu nevytvářím při startu programu, ale až když ji potřebuju.

Nebo např. infinite scroll na frontendu. Uživateli načítám data až když se obrazovkou přiblíží k tomu contentu. Např. stránkování.
<!--ID: 1736497489544-->
END

---

### Null object

START
FIT-Card

Co je **null object**?

Back:

Když nechci používat null, tak si vytvořím null object. Nemusím pak dělat podmínky `if not null ...`, ale prostě na tom null objectu zavolám tu metodu jako na dalších objektech (např. v Array).

<!-- ImageStart -->
![](../../../Assets/Pasted%20image%2020241105185623.png)
<!-- ImageEnd -->
<!--ID: 1736497489548-->
END

---

### Marker interface


START
FIT-Card

Co je **marker interface** design pattern?

Back:

Označíme třídu interfacem.

<!-- ExampleStart -->
Např. `Serializable`

![](../../../Assets/Pasted%20image%2020241105185923.png)
<!-- ExampleEnd -->
<!--ID: 1736497489553-->
END

---

### Architektura


START
FIT-Card

Co je CLEAN architektura?

Back:

Snaha je vyvtářet závislosti směrem do centra toho programu.

- **prostřední vrstva** - entity
- **další vrstva** - byznys logika
- **interface adapters** - přijímají data odjinud a transformují to do místní reprezentace
- **frameworks and drivers** - 

![](../../../Assets/Pasted%20image%2020241105190549.png)
<!--ID: 1736497489558-->
END

---

### Hexagonální architektura


START
FIT-Card

Co je hexagonální architektura?

Back:

Máme porty (interfacy) a adaptéry (implementace interfaců). Tyhle dvě věci komunikují s okolním světem aplikace.

**Tohle je důležitý obrázek:**
- Pointa je, že aplikaci jsem schopný rozdělit do výřezů (na obrázku component). Každý výřez má pak vnější rozhraní pro komunikaci s okolním světem.
	- Když pak chci používat nějakou část aplikace, měl bych to používat pomocí toho rozhraní pro komunikaci s vnějším světem. Díky tomu pak nemám šílený dependencies napříč aplikací, ale se vším komunikuju "zvenku". 
![](../../../Assets/Pasted%20image%2020241105191403.png)

<!-- ImageStart -->
![](../../../Assets/Pasted%20image%2020241105191243.png)
<!-- ImageEnd -->
<!--ID: 1736497489563-->
END

---

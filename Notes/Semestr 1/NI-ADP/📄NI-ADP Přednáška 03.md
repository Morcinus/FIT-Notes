---
created: 2024-10-08T18:12:17
up: "[[📖NI-ADP]]"
---

TARGET DECK: NI-ADP
FILE TAGS: NI-ADP prednaska03 status-toReview


START
FIT-Card

Co je Dependency inversion principle (ze SOLID)?

Back:

**High-level** moduly by neměly být závislé na **low-level** modulech. Všechny moduly by měly být závislé na **abstrakcích**.


<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241008184541.png)
<!-- ExampleEnd -->
<!--ID: 1729237386354-->
END

---

### Separation of Concerns

START
FIT-Card

Co dělá separation of concerns?

Back:

Zaobývá se rozdělením zodpovědností z hlediska modulů a systémů.

Není o konkrétních třídách, ale modulech a systémech.
<!--ID: 1729237386357-->
END

---

### Law of Demeter

START
FIT-Card

Co je **Law of Demeter**?

Back:

Hlavní myšlenka: objekty by měly komunikovat jen s "nejbližšími objekty" a neměly by komunikovat s objekty, o kterých toho moc neví.

Jinými slovy, objekty by měly volat metody pouze na:
1. **Sobě** _(např. `this`)_
2. **Svých attributes** _(např. jiný objekt co je jako atribut)_
3. **Metodách předaných v argumentech**
4. **Objektech, které ten objekt vytváří**

**Co by se nemělo dělat:**
<!-- ExampleStart -->
**Řetězit kód přes několik různých tříd**
`String cityName = person.getAddress().getCity().getCityName();`

Protože se "bavím s objektama, které sám přímo neznám".
<!-- ExampleEnd -->

<!-- ImageStart -->
![](../../../Assets/Pasted%20image%2020241008190605.png)
<!-- ImageEnd -->
<!--ID: 1729237386360-->
END

---


START
FIT-Card

Je přidávání nových fičur **breaking change**?

Back:

Typicky **ne**.

**Modifikace** je breaking change, **rozšíření** aplikace ne.
<!--ID: 1729237386363-->
END

---

### Avoid premature optimization


START
FIT-Card

Co je **avoid premature optimization**?

Back:

**Neměl** bych se snažit **optimalizovat kód**, protože stejně nevím, co ten kompilátor provádí a většinou si to optimalizuje hodně sám.


<!-- ExplanationStart -->
V dnešní době jsou už kompilátory hoodně chytré, a když se snažím optimalizovat kód, tak to často stejně moc nezlepším.
<!-- ExplanationEnd -->
<!--ID: 1729237386365-->
END

---

### The boy scout rule


START
FIT-Card

Co je **the boy scout rule**?

Back:

Vždy nechat kód lepší, než jak jsem ho našel.
<!--ID: 1729237386368-->
END

---

### Principle of least astonishment


START
FIT-Card

Co je **principle of least astonishment** (least surprise)?

Back:

Měl bych systém navrhovat tak, aby **člověka nepřekvapoval**.

<!-- ExampleStart -->
Když mám třeba funkci `getUser()`, tak by to mělo získat usera. Pokud to bude něco měnit, validovat, tak to je blbě.

V UI/UX, když kliknu na Save, očekávám, že se mi to uloží.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
Měl bych:
- Být konzistentní s očekáváním člověka - metody by měly dělat to, co by člověk očekával
- Předvídatelnost atd.
<!-- DetailInfoEnd -->
<!--ID: 1729237386371-->
END

---

### Design patterns


START
FIT-Card

Jaký je rozdíl mezi design patternem a principem?

Back:

**Design pattern** - řeší konkrétní problém 
**Design princip** - obecný princip co dodržovat při kódění
<!--ID: 1729237386374-->
END

---

### Singleton

START
FIT-Card

Co je **singleton** design pattern?

Back:

- private constructor
- statická classa

Použití:
- v databázi

<!-- DetailInfoStart -->
Problém je u multithreadingu.

Problém je, že se to může chovat jako globální proměnná, když to člověk používá blbě

![](../../../Assets/Pasted%20image%2020241015181342.png)
<!-- DetailInfoEnd -->
<!--ID: 1729237386377-->
END

---


START
FIT-Card

Co je double check locking?

Back:

Dvakrát se checkne, jestli daná instance existuje. Jednou s mutexem, jednou bez.

Díky tomu nevolám mutex tolikrát (mutex je náročný).

```
if(ins == null) {

}

mutex_lock
if(ins == null) {
	ins = new Ins()
}

```
<!--ID: 1729237386380-->
END

---


### Factory pattern

START
FIT-Card

Jak funguje **factory pattern**?

Back:

Místo toho, abych volal `new`, volám factory metody, které vytváří dané objekty.

Factory je abstaktní classa, co má **abstraktní metodu** na vytvoření 

1. Máme abstraktní třídu, ze které potom ty potomci dědí a implementují ty create metody.

Výhoda:
- Mám vytváření objektů na jednom místě.

![](../../../Assets/Pasted%20image%2020241015182258.png)
<!--ID: 1729237386383-->
END

---

### Abstract factory


START
FIT-Card

Jak funguje **abstract factory**?

Back:

Mám abstraktní factory, z ní pak můžu dělat konkrétní factories pro konkrétní objekty.

<!-- ExampleStart -->
Máme hru angry birds, ta má hromadu různých verzí (Angry birds classic, galaxy atd.). Jediný v čem se prakticky liší jsou obrázky.

Já použiju core mechaniky tý hry a pak měním jen textury.

Můžu pak mít abstract factory obecně pro ty obrázky. Pak si udělám konkrétní factory pro verzi classic, pro verzi galaxy atd.

Tohle můžu dělat pak se vším v té hře - herní mechaniky atd.

Pak můžu jednoduše "vytvořit novou hru" tím, že tam zasázím jiné **factories**.

![](../../../Assets/Pasted%20image%2020241015183657.png)
<!-- ExampleEnd -->
<!--ID: 1729237386386-->
END

---

### Builder


START
FIT-Card

Jak funguje **Builder** pattern?

Back:

Používá se u objektů, co mají stejný základ, ale mají hromadu **optional atributů**. Díky builderu nemusím mít hromadu nepřehledných konstruktorů.

Jak funguje:
1. Na builderu zavolám metody, které nastaví ty optional hodnoty.
2. Pak zavolám build a ono mi to vrátí hotový objekt

<!-- ExampleStart -->
Kde se to prakticky používá:
- Např. můžu mít funkci "addComponent" ve scéně, ono to nahází komponenty do scény a pak to teprve vyhodí tu scénu.


![](../../../Assets/Pasted%20image%2020241015183947.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
Nevýhoda:
- Když rozšířím objekt o další atribut, musím rozšířit i ten builder
<!-- DetailInfoEnd -->
<!--ID: 1729237386389-->
END

---

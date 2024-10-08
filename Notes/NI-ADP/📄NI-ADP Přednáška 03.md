---
created: 2024-10-08T18:12:17
up: "[[📖NI-ADP]]"
---

TARGET DECK: NI-ADP
FILE TAGS: NI-ADP


START
FIT-Card

Co je Dependency inversion principle (ze SOLID)?

Back:

**High-level** moduly by neměly být závislé na **low-level** modulech. Všechny moduly by měly být závislé na **abstrakcích**.


<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241008184541.png)
<!-- ExampleEnd -->


END

---

### Separation of Concerns

START
FIT-Card

Co dělá separation of concerns?

Back:

Zaobývá se rozdělením zodpovědností z hlediska modulů a systémů.

Není o konkrétních třídách, ale modulech a systémech.

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
![](../../Assets/Pasted%20image%2020241008190605.png)
<!-- ImageEnd -->



END

---


START
FIT-Card

Je přidávání nových fičur **breaking change**?

Back:

Typicky **ne**.

**Modifikace** je breaking change, **rozšíření** aplikace ne.

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


END

---

### The boy scout rule


START
FIT-Card

Co je **the boy scout rule**?

Back:

Vždy nechat kód lepší, než jak jsem ho našel.

END

---

### Principle of least astonishment


START
FIT-Card

Co je **principle of least astonishment** (least surprise)?

Back:

Měl bych systém navrhovat tak, aby **člověka nepřekvapoval**.


<!-- DetailInfoStart -->
Měl bych:
- Být konzistentní s očekáváním člověka - metody by měly dělat to, co by člověk očekával
- Předvídatelnost atd.
<!-- DetailInfoEnd -->


<!-- ExampleStart -->
V API designu, když mám třeba funkci `getUser()`, tak by to získat usera. Pokud to bude něco měnit, tak to je blbě.

V UI/UX, když kliknu na Save, očekávám, že se mi to uloží.
<!-- ExampleEnd -->



END

---

### Design patterns


START
FIT-Card

Jaký je rozdíl mezi design patternem a principem?

Back:

**Design pattern** - řeší konkrétní problém 
**Design princip** - obecný princip co dodržovat při kódění

END

---

### Singleton

START
FIT-Card



Back:



END

---


### Prototype

START
FIT-Card



Back:



END

---

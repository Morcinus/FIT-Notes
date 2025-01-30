---
created: 2025-01-28T12:35:12
title: "Příprava ke zkoušce"
up: "[[📖NI-ADP]]"
---

TARGET DECK: NI-ADP-Exam
FILE TAGS: NI-ADP

## NI-SI-1 - Design Principles
### DRY
START
FIT-Card

Vysvětli design princip **DRY** - co to znamená a proč by se to mělo dodržovat.

Back:

**Don't repeat yourself**
= neopakovat se v kódu, dokumentaci a testech.

**Proč:**
- Zvyšuje to náročnost údržby
- Zvyšuje to výskyt bugů
- Znemožňuje to efektivně dělat změny v kódu
<!--ID: 1738239851883-->
END

---

### KISS
START
FIT-Card

Vysvětli design princip **KISS** - co to znamená a proč by se to mělo dodržovat.

Back:

**Keep It Simple Stupid**
= Kód by se měl být co nejjednodušší

**Proč:**
- Lépe se v kódu orientuje (není potřeba tolik znalostí o codebase), díky tomu je např. možné jednoduššeji zařadit nové lidi do daného projektu
- Komplexní kód se hůř testuje, debuguje, udržuje, rozšiřuje

<!-- ExampleStart -->
Například se dá kód rozpadnout do menších částí.
<!-- ExampleEnd -->
<!--ID: 1738239851887-->
END

---

### YAGNI
START
FIT-Card

Vysvětli design princip **YAGNI** - co to znamená a proč by se to mělo dodržovat (4 costs).

Back:

**You Ain’t Gonna Need It**
= Měli bychom programovat pouze věci, které jsou momentálně potřeba nebo 100% víme, že budou potřeba.

**Proč:**
- Špatně se odhaduje, co bude potřeba v budoucnu, požadavky se hodně mění. To co si myslíme, že bude potřeba teď, nemusí být potřeba později.
- Costs:
	- **cost of building** = strávíme čas na něčem co možná ani nevyužijeme
	- **cost of delay** = zpomalíme tím projekt, protože jsme se mohli věnovat něčemu jinému
	- **cost of carry** = budeme mít od začátku složitější systém, což je horší na údržbu, debuggování, rozšiřování atd.
	- **cost of repairs** = v době, kdy to bude potřeba, pravděpodobně daná funkcionalita stejně bude mít hodně technical debt
<!--ID: 1738239851890-->
END

---

### SOLID
START
FIT-Card

Vysvětli design princip **SOLID** - z jakých pojmů se to skládá?

Back:

**SOLID**
- **Single responsibility** = třída by měla mít jednu zodpovědnost
- **Open-closed** = třídy by měly být otevřené pro rozšíření, uzavřené pro modifikaci
- **Liskov Substitution** = pokud $S$ je podtypem $T$, potom všude kde se používá objekt $T$, můžu použít bez změny programu i objekt $S$
- **Interface Segregation** = Klienti by neměli být nuceni záviset na metodách, které nepoužívají.
- **Dependency Inversion** = High-level moduly by neměly záviset na low-level modulech. Obojí by mělo záviset na abstrakci.
<!--ID: 1738239851893-->
END

---

#### Single Responsibility
START
FIT-Card

Vysvětli **Single Responsibility** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Single Responsibility**
= třída by měla mít jednu zodpovědnost

**Proč:**
- Méně bugů - když se vyskytne bug, tak se pak bude týkat konkrétní (izolované) části programu
- Jednodušší úpravy, údržba,...

<!-- DetailInfoStart -->
Z courses:
![](../../Assets/Pasted%20image%2020250128131429.png)
If a Class has many responsibilities, it increases the possibility of bugs because making changes to one of its responsibilities, could affect the other ones without you knowing.

**Goal**

This principle aims to separate behaviours so that if bugs arise as a result of your change, it won’t affect other unrelated behaviours.
<!-- DetailInfoEnd -->
<!--ID: 1738239851895-->
END

---

#### Open-closed
START
FIT-Card

Vysvětli **Open-closed** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Open-closed**
= třídy by měly být otevřené pro rozšíření, uzavřené pro modifikaci

**Proč:**
- když přidáváme fičury, tak spíš neuděláme bugy ve starých

<!-- DetailInfoStart -->
Z courses:
![](../../Assets/Pasted%20image%2020250128131647.png)
Changing the current behaviour of a Class will affect all the systems using that Class.

If you want the Class to perform more functions, the ideal approach is to add to the functions that already exist NOT change them.

**Goal**

This principle aims to extend a Class’s behaviour without changing the existing behaviour of that Class. This is to avoid causing bugs wherever the Class is being used.
<!-- DetailInfoEnd -->
<!--ID: 1738239851898-->
END

---

#### Liskov Substitution
START
FIT-Card

Vysvětli **Liskov Substitution** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Liskov Substitution**
= pokud $S$ je podtypem $T$, potom všude kde se používá objekt $T$, můžu použít bez změny programu i objekt $S$

**Proč:**
- Cílem je vynutit konzistenci tak, aby rodiče a potomci mohli být použiti stejným způsobem

<!-- DetailInfoStart -->
Z courses
![](../../Assets/Pasted%20image%2020250128131830.png)
When a **child** Class cannot perform the same actions as its **parent** Class, this can cause bugs.

If you have a Class and create another Class from it, it becomes a **parent** and the new Class becomes a **child.** The **child** Class should be able to do everything the **parent** Class can do. This process is called **Inheritance**.

The **child** Class should be able to process the same requests and deliver the same result as the **parent** Class or it could deliver a result that is of the same type.

The picture shows that the **parent** Class delivers Coffee(it could be any type of coffee). It is acceptable for the **child** Class to deliver Cappuccino because it is a specific type of Coffee, but it is NOT acceptable to deliver Water.

If the **child** Class doesn’t meet these requirements, it means the **child** Class is changed completely and violates this principle.

**Goal**

This principle aims to enforce consistency so that the parent Class or its child Class can be used in the same way without any errors.

<!-- DetailInfoEnd -->

<!--ID: 1738239851901-->
END

---

#### Interface Segregation
START
FIT-Card

Vysvětli **Interface Segregation** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Interface Segregation**
= Klienti by neměli být nuceni záviset na metodách, které nepoužívají.

**Proč:**
- Funkcionality by měly být rozděleny do menších částí tak, aby třída používala _pouze_ to, co skutečně potřebuje
- Díky tomu méně bugů, menší komplexita kódu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250128132217.png)
When a Class is required to perform actions that are not useful, it is wasteful and may produce unexpected bugs if the Class does not have the ability to perform those actions.

A Class should perform only actions that are needed to fulfil its role. Any other action should be removed completely or moved somewhere else if it might be used by another Class in the future.

**Goal**

This principle aims at splitting a set of actions into smaller sets so that a Class executes ONLY the set of actions it requires.
<!-- DetailInfoEnd -->
<!--ID: 1738239851903-->
END

---

#### Dependency Inversion
START
FIT-Card

Vysvětli **Dependency Inversion** princip (ze SOLID) - co to znamená a proč by se to mělo dodržovat.

Back:

**Dependency Inversion**
1. High-level moduly by neměly záviset na low-level modulech. Obojí by mělo záviset na abstrakci.
2. Abstrakce by neměly záviset na detailech. Detaily by měly záviset na abstrakcích (viz vysvětlení).

**Proč:**
- Cílem je aby třídy závisely na rozhraních a ne přímo na dalších třídách. Díky tomu je jednodušší kód měnit.

<!-- DetailInfoStart -->
Z courses:
![](../../Assets/Pasted%20image%2020250128132632.png)
Firstly, let’s define the terms used here more simply

**High-level Module(or Class)**: Class that executes an action with a tool.

**Low-level Module (or Class)**: The tool that is needed to execute the action.

**Abstraction**: Represents an interface that connects the two Classes.

**Details**: How the tool works

This principle says a Class should not be fused with the tool it uses to execute an action. Rather, it should be fused to the interface that will allow the tool to connect to the Class.

It also says that both the Class and the interface should not know how the tool works. However, the tool needs to meet the specification of the interface.

**Goal**

This principle aims at reducing the dependency of a high-level Class on the low-level Class by introducing an interface.
<!-- DetailInfoEnd -->

<!--ID: 1738239851906-->
END

---

### POLA
START
FIT-Card

Vysvětli design princip **POLA** - co to znamená a proč by se to mělo dodržovat.

Back:

**Principle of least astonishment**
= Výsledky dané funkce by měly být jasný. konzistentní a předvídatelný podle názvu funkce a dalších informací

**Proč:**
- S kódem se lépe pracuje, když je předvídatelný
<!--ID: 1738239851909-->
END

---

### TBSR

START
FIT-Card

Vysvětli design princip **TBSR** - co to znamená a proč by se to mělo dodržovat.

Back:

**The Boy Scout Rule**
= Nechat kód lepší než jsme ho našli

**Proč:**
- Díky tomu se postupně zbavujeme tech debtu, aniž bychom museli stopnout veškerou práci a dělat obří refaktoring
<!--ID: 1738239851911-->
END

---
### Tech debt

START
FIT-Card

Vysvětli co je **Tech debt** - co to je, jaké má kvadranty?

Back:

**Technical debt:**
= za cenu rychlosti produkujeme horší kód

Pozn. tech debt se může vytvářet i sám (tím že zastarávají technologie atd.) - není to nutně to, že jsme "odfláknuli práci".

**Kvadranty:**
- Úmyslný/Neúmyslný
- Lehkovážný/Rozumný

Např.
- Úmyslný a lehkovážný - "Nemáme čas na design"
- Úmyslný a rozumný - "Neuděláme to, ale počítáme s dopady"
- Neúmyslný a lehkovážný - "Co je layering?"
- Neúmyslný a rozumný - "Teď víme, že jsme to měli udělat jinak" (např. najdeme lepší řešení až po tom, co jsme to udělali)
<!--ID: 1738239851914-->
END

---

### Separation of Concerns
START
FIT-Card

Vysvětli design princip **SoC** - co to znamená a proč by se to mělo dodržovat.

Back:

**Separation of Concerns**
= části systému by měly být roděleny podle jejich účelu

Např.
- Layered architecture
- HTML/CSS/JavaScript
- Třídy - single responsibility principle

**Proč:**
- Systém je tak přehlednější, lépe se udržuje, debuguje atd.
<!--ID: 1738239851917-->
END

---


START
FIT-Card

Vysvětli design princip **LoD** - co to znamená a proč by se to mělo dodržovat.

Back:

**Law of Demeter**
= Objekty by měly volat metody na třídách, které přímo používají. Neměli by volat metody "ob jednu" třídu (viz obrázek).

**Proč:**
- Dělá to kód míň komplikovaným

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250128140241.png)
<!-- ImageEnd -->

<!-- ExplanationStart -->
An object can call methods that are apart of:

- the same object
- a parameter passed into the method
- an object created within its method
- an object it owns
- a global variable
<!-- ExplanationEnd -->
<!--ID: 1738239851920-->
END

---

### APO
START
FIT-Card

Vysvětli design princip **APO** - co to znamená a proč by se to mělo dodržovat.

Back:

**Avoid Premature Optimization**
= Neměli bychom předčasně zlepšovat věci.

Místo toho bychom měli nejdříve vyvinout funkční kód, pak až zjistit, které části potřebují optimalizaci.

**Proč:**
- Plýtváme zdroji na něčem co nevíme jeslti bude potřeba
- Zvyšujeme zbytečně komplexitu kódu

<!-- ExampleStart -->
- Vývojáři mají tendenci být perfekcionisti a snažit se udělat "perfektní/bezchybný kód"
<!-- ExampleEnd -->
<!--ID: 1738239851922-->
END

---

## NI-SI-2 - Vytvářecí návrhové vzory

START
FIT-Card

Jaké jsou **Vytvářecí návrhové vzory**? (5)

Back:

- **Abstract factory**
- **Builder**
- **Factory method**
- **Prototype**
- **Singleton**
<!--ID: 1738239851925-->
END

---

### Abstract factory

START
FIT-Card

K čemu slouží **Abstract factory** design pattern?

Back:

**Abstract Factory** is a creational design pattern that lets you produce families of related objects without specifying their concrete classes.

![](../../Assets/Pasted%20image%2020250130104609.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re creating a furniture shop simulator. Your code consists of classes that represent:
1. A family of related products, say: `Chair` + `Sofa` + `CoffeeTable`.
2. Several variants of this family. For example, products `Chair` + `Sofa` + `CoffeeTable` are available in these variants: `Modern`, `Victorian`, `ArtDeco`.
![](../../Assets/Pasted%20image%2020250130101347.png)
You need a way to create individual furniture objects so that they match other objects of the same family. Customers get quite mad when they receive non-matching furniture.
![](../../Assets/Pasted%20image%2020250130101404.png)
Also, you don’t want to change existing code when adding new products or families of products to the program. Furniture vendors update their catalogs very often, and you wouldn’t want to change the core code each time it happens.

**SOLUTION:**
The first thing the Abstract Factory pattern suggests is to explicitly declare interfaces for each distinct product of the product family (e.g., chair, sofa or coffee table). Then you can make all variants of products follow those interfaces. For example, all chair variants can implement the `Chair` interface; all coffee table variants can implement the `CoffeeTable` interface, and so on.
![](../../Assets/Pasted%20image%2020250130103201.png)
The next move is to declare the _Abstract Factory_—an interface with a list of creation methods for all products that are part of the product family (for example, `createChair`, `createSofa` and `createCoffeeTable`). These methods must return **abstract** product types represented by the interfaces we extracted previously: `Chair`, `Sofa`, `CoffeeTable` and so on.
![](../../Assets/Pasted%20image%2020250130103213.png)

The client code has to work with both factories and products via their respective abstract interfaces. This lets you change the type of a factory that you pass to the client code, as well as the product variant that the client code receives, without breaking the actual client code.

Say the client wants a factory to produce a chair. The client doesn’t have to be aware of the factory’s class, nor does it matter what kind of chair it gets. Whether it’s a Modern model or a Victorian-style chair, the client must treat all chairs in the same manner, using the abstract `Chair` interface. With this approach, the only thing that the client knows about the chair is that it implements the `sitOn` method in some way. Also, whichever variant of the chair is returned, it’ll always match the type of sofa or coffee table produced by the same factory object.

There’s one more thing left to clarify: if the client is only exposed to the abstract interfaces, what creates the actual factory objects? Usually, the application creates a concrete factory object at the initialization stage. Just before that, the app must select the factory type depending on the configuration or the environment settings.

<!-- ExplanationEnd -->
<!--ID: 1738239851927-->
END

---

START
FIT-Card

Jaká je struktura **Abstract factory** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130101218.png)

1. **Abstract Products** declare interfaces for a set of distinct but related products which make up a product family.
2. **Concrete Products** are various implementations of abstract products, grouped by variants. Each abstract product ( chair/sofa) must be implemented in all given variants (Victorian/Modern).
3. The **Abstract Factory** interface declares a set of methods for creating each of the abstract products.
4. **Concrete Factories** implement creation methods of the abstract factory. Each concrete factory corresponds to a specific variant of products and creates only those product variants.
5. Although concrete factories instantiate concrete products, signatures of their creation methods must return corresponding _abstract_ products. This way the client code that uses a factory doesn’t get coupled to the specific variant of the product it gets from a factory. The **Client** can work with any concrete factory/product variant, as long as it communicates with their objects via abstract interfaces.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130101325.png)
<!-- ExampleEnd -->
<!--ID: 1738239851930-->
END

---


START
FIT-Card

Jaké jsou výhody a nevýhody **Abstract factory** design patternu? (4 + 1)

Back:

✅ You can be sure that the products you’re getting from a factory are compatible with each other.
✅ You avoid tight coupling between concrete products and client code.
✅ _Single Responsibility Principle_. You can extract the product creation code into one place, making the code easier to support.
✅ _Open/Closed Principle_. You can introduce new variants of products without breaking existing client code.

❌ The code may become more complicated than it should be, since a lot of new interfaces and classes are introduced along with the pattern.
<!--ID: 1738239851933-->
END

---


### Builder

START
FIT-Card

K čemu slouží **Builder** design pattern?

Back:

**Builder** is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.

![](../../Assets/Pasted%20image%2020250130104618.png)

<!-- ExplanationStart -->
**PROBLEM:**

Imagine a complex object that requires laborious, step-by-step initialization of many fields and nested objects. Such initialization code is usually buried inside a monstrous constructor with lots of parameters. Or even worse: scattered all over the client code.

![](../../Assets/Pasted%20image%2020250130103521.png)

For example, let’s think about how to create a `House` object. To build a simple house, you need to construct four walls and a floor, install a door, fit a pair of windows, and build a roof. But what if you want a bigger, brighter house, with a backyard and other goodies (like a heating system, plumbing, and electrical wiring)?

The simplest solution is to extend the base `House` class and create a set of subclasses to cover all combinations of the parameters. But eventually you’ll end up with a considerable number of subclasses. Any new parameter, such as the porch style, will require growing this hierarchy even more.

There’s another approach that doesn’t involve breeding subclasses. You can create a giant constructor right in the base `House` class with all possible parameters that control the house object. While this approach indeed eliminates the need for subclasses, it creates another problem.

![](../../Assets/Pasted%20image%2020250130103533.png)

In most cases most of the parameters will be unused, making the constructor calls pretty ugly. For instance, only a fraction of houses have swimming pools, so the parameters related to swimming pools will be useless nine times out of ten.

**SOLUTION:**

The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called _builders_.

![](../../Assets/Pasted%20image%2020250130103548.png)

The Builder pattern lets you construct complex objects step by step. The Builder doesn’t allow other objects to access the product while it’s being built.

The pattern organizes object construction into a set of steps (`buildWalls`, `buildDoor`, etc.). To create an object, you execute a series of these steps on a builder object. The important part is that you don’t need to call all of the steps. You can call only those steps that are necessary for producing a particular configuration of an object.

Some of the construction steps might require different implementation when you need to build various representations of the product. For example, walls of a cabin may be built of wood, but the castle walls must be built with stone.

In this case, you can create several different builder classes that implement the same set of building steps, but in a different manner. Then you can use these builders in the construction process (i.e., an ordered set of calls to the building steps) to produce different kinds of objects.

For example, imagine a builder that builds everything from wood and glass, a second one that builds everything with stone and iron and a third one that uses gold and diamonds. By calling the same set of steps, you get a regular house from the first builder, a small castle from the second and a palace from the third. However, this would only work if the client code that calls the building steps is able to interact with builders using a common interface.

**Director**

You can go further and extract a series of calls to the builder steps you use to construct a product into a separate class called _director_. The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps.

Having a director class in your program isn’t strictly necessary. You can always call the building steps in a specific order directly from the client code. However, the director class might be a good place to put various construction routines so you can reuse them across your program.

In addition, the director class completely hides the details of product construction from the client code. The client only needs to associate a builder with a director, launch the construction with the director, and get the result from the builder.
<!-- ExplanationEnd -->
<!--ID: 1738239851935-->
END

---

START
FIT-Card

Jaká je struktura **Builder** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130103723.png)

1. The **Builder** interface declares product construction steps that are common to all types of builders.
2. **Concrete Builders** provide different implementations of the construction steps. Concrete builders may produce products that don’t follow the common interface.
3. **Products** are resulting objects. Products constructed by different builders don’t have to belong to the same class hierarchy or interface.
4. The **Director** class defines the order in which to call construction steps, so you can create and reuse specific configurations of products.
5. The **Client** must associate one of the builder objects with the director. Usually, it’s done just once, via parameters of the director’s constructor. Then the director uses that builder object for all further construction. However, there’s an alternative approach for when the client passes the builder object to the production method of the director. In this case, you can use a different builder each time you produce something with the director.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130103736.png)
<!-- ExampleEnd -->
<!--ID: 1738239851938-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Builder** design patternu? (3 + 1)

Back:

✅ You can construct objects step-by-step, defer construction steps or run steps recursively.

✅ You can reuse the same construction code when building various representations of products.

✅ _Single Responsibility Principle_. You can isolate complex construction code from the business logic of the product.

❌ The overall complexity of the code increases since the pattern requires creating multiple new classes.
<!--ID: 1738239851940-->
END

---


### Factory method

START
FIT-Card

K čemu slouží **Factory method** design pattern?

Back:

**Factory Method** is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

![](../../Assets/Pasted%20image%2020250130104630.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re creating a logistics management application. The first version of your app can only handle transportation by trucks, so the bulk of your code lives inside the `Truck` class.

After a while, your app becomes pretty popular. Each day you receive dozens of requests from sea transportation companies to incorporate sea logistics into the app.

![](../../Assets/Pasted%20image%2020250130103933.png)

Great news, right? But how about the code? At present, most of your code is coupled to the `Truck` class. Adding `Ships` into the app would require making changes to the entire codebase. Moreover, if later you decide to add another type of transportation to the app, you will probably need to make all of these changes again.

As a result, you will end up with pretty nasty code, riddled with conditionals that switch the app’s behavior depending on the class of transportation objects.

**SOLUTION:**
The Factory Method pattern suggests that you replace direct object construction calls (using the `new` operator) with calls to a special _factory_ method. Don’t worry: the objects are still created via the `new` operator, but it’s being called from within the factory method. Objects returned by a factory method are often referred to as _products._
![](../../Assets/Pasted%20image%2020250130104000.png)

At first glance, this change may look pointless: we just moved the constructor call from one part of the program to another. However, consider this: now you can override the factory method in a subclass and change the class of products being created by the method.

There’s a slight limitation though: subclasses may return different types of products only if these products have a common base class or interface. Also, the factory method in the base class should have its return type declared as this interface.
![](../../Assets/Pasted%20image%2020250130104013.png)

For example, both `Truck` and `Ship` classes should implement the `Transport` interface, which declares a method called `deliver`. Each class implements this method differently: trucks deliver cargo by land, ships deliver cargo by sea. The factory method in the `RoadLogistics` class returns truck objects, whereas the factory method in the `SeaLogistics` class returns ships.

![](../../Assets/Pasted%20image%2020250130104027.png)

The code that uses the factory method (often called the _client_ code) doesn’t see a difference between the actual products returned by various subclasses. The client treats all the products as abstract `Transport`. The client knows that all transport objects are supposed to have the `deliver` method, but exactly how it works isn’t important to the client.
<!-- ExplanationEnd -->
<!--ID: 1738239851942-->
END

---

START
FIT-Card

Jaká je struktura **Factory method** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130104037.png)

1. The **Product** declares the interface, which is common to all objects that can be produced by the creator and its subclasses.
2. **Concrete Products** are different implementations of the product interface.
3. The **Creator** class declares the factory method that returns new product objects. It’s important that the return type of this method matches the product interface.
	- You can declare the factory method as `abstract` to force all subclasses to implement their own versions of the method. As an alternative, the base factory method can return some default product type.
	- Note, despite its name, product creation is **not** the primary responsibility of the creator. Usually, the creator class already has some core business logic related to products. The factory method helps to decouple this logic from the concrete product classes. Here is an analogy: a large software development company can have a training department for programmers. However, the primary function of the company as a whole is still writing code, not producing programmers.
1. **Concrete Creators** override the base factory method so it returns a different type of product.
	- Note that the factory method doesn’t have to **create** new instances all the time. It can also return existing objects from a cache, an object pool, or another source.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130104130.png)
<!-- ExampleEnd -->
<!--ID: 1738239851945-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Factory method** design patternu? (3 + 1)

Back:

✅ You avoid tight coupling between the creator and the concrete products.

✅ _Single Responsibility Principle_. You can move the product creation code into one place in the program, making the code easier to support.

✅ _Open/Closed Principle_. You can introduce new types of products into the program without breaking existing client code.

❌ The code may become more complicated since you need to introduce a lot of new subclasses to implement the pattern. The best case scenario is when you’re introducing the pattern into an existing hierarchy of creator classes.
<!--ID: 1738239851947-->
END

---


### Prototype

START
FIT-Card

K čemu slouží **Prototype** design pattern?

Back:

**Prototype** is a creational design pattern that lets you copy existing objects without making your code dependent on their classes.

![](../../Assets/Pasted%20image%2020250130104639.png)

<!-- ExplanationStart -->
**PROBLEM:**
Say you have an object, and you want to create an exact copy of it. How would you do it? First, you have to create a new object of the same class. Then you have to go through all the fields of the original object and copy their values over to the new object.

Nice! But there’s a catch. Not all objects can be copied that way because some of the object’s fields may be private and not visible from outside of the object itself.

![](../../Assets/Pasted%20image%2020250130104235.png)

There’s one more problem with the direct approach. Since you have to know the object’s class to create a duplicate, your code becomes dependent on that class. If the extra dependency doesn’t scare you, there’s another catch. Sometimes you only know the interface that the object follows, but not its concrete class, when, for example, a parameter in a method accepts any objects that follow some interface.

**SOLUTION:**
The Prototype pattern delegates the cloning process to the actual objects that are being cloned. The pattern declares a common interface for all objects that support cloning. This interface lets you clone an object without coupling your code to the class of that object. Usually, such an interface contains just a single `clone` method.

The implementation of the `clone` method is very similar in all classes. The method creates an object of the current class and carries over all of the field values of the old object into the new one. You can even copy private fields because most programming languages let objects access private fields of other objects that belong to the same class.

An object that supports cloning is called a _prototype_. When your objects have dozens of fields and hundreds of possible configurations, cloning them might serve as an alternative to subclassing.

![](../../Assets/Pasted%20image%2020250130104301.png)

Here’s how it works: you create a set of objects, configured in various ways. When you need an object like the one you’ve configured, you just clone a prototype instead of constructing a new object from scratch.
<!-- ExplanationEnd -->
<!--ID: 1738239851950-->
END

---

START
FIT-Card

Jaká je **basic implementation** struktura **Prototype** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130104419.png)

1. The **Prototype** interface declares the cloning methods. In most cases, it’s a single `clone` method.
2. The **Concrete Prototype** class implements the cloning method. In addition to copying the original object’s data to the clone, this method may also handle some edge cases of the cloning process related to cloning linked objects, untangling recursive dependencies, etc.
3. The **Client** can produce a copy of any object that follows the prototype interface.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130104437.png)
<!-- ExampleEnd -->
<!--ID: 1738239851952-->
END

---


START
FIT-Card

Jaká je **prototype registry** struktura **Prototype** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130104444.png)

1. The **Prototype Registry** provides an easy way to access frequently-used prototypes. It stores a set of pre-built objects that are ready to be copied. The simplest prototype registry is a `name → prototype` hash map. However, if you need better search criteria than a simple name, you can build a much more robust version of the registry.
<!--ID: 1738239851955-->
END

---


START
FIT-Card

Jaké jsou výhody a nevýhody **Prototype** design patternu? (4 + 1)

Back:

✅ You can clone objects without coupling to their concrete classes.

✅ You can get rid of repeated initialization code in favor of cloning pre-built prototypes.

✅ You can produce complex objects more conveniently.

✅ You get an alternative to inheritance when dealing with configuration presets for complex objects.

❌ Cloning complex objects that have circular references might be very tricky.
<!--ID: 1738239851958-->
END

---


### Singleton

START
FIT-Card

K čemu slouží **Singleton** design pattern?

Back:

**Singleton** is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.

![](../../Assets/Pasted%20image%2020250130104553.png)

<!-- ExplanationStart -->
**PROBLEM:**
The Singleton pattern solves two problems at the same time, violating the _Single Responsibility Principle_:

**Ensure that a class has just a single instance**. Why would anyone want to control how many instances a class has? The most common reason for this is to control access to some shared resource—for example, a database or a file.

Here’s how it works: imagine that you created an object, but after a while decided to create a new one. Instead of receiving a fresh object, you’ll get the one you already created.

Note that this behavior is impossible to implement with a regular constructor since a constructor call **must** always return a new object by design.

![](../../Assets/Pasted%20image%2020250130104704.png)
**Provide a global access point to that instance**. Remember those global variables that you (all right, me) used to store some essential objects? While they’re very handy, they’re also very unsafe since any code can potentially overwrite the contents of those variables and crash the app.

Just like a global variable, the Singleton pattern lets you access some object from anywhere in the program. However, it also protects that instance from being overwritten by other code.

There’s another side to this problem: you don’t want the code that solves problem #1 to be scattered all over your program. It’s much better to have it within one class, especially if the rest of your code already depends on it.

Nowadays, the Singleton pattern has become so popular that people may call something a _singleton_ even if it solves just one of the listed problems.

**SOLUTION:**
All implementations of the Singleton have these two steps in common:

- Make the default constructor private, to prevent other objects from using the `new` operator with the Singleton class.
- Create a static creation method that acts as a constructor. Under the hood, this method calls the private constructor to create an object and saves it in a static field. All following calls to this method return the cached object.

If your code has access to the Singleton class, then it’s able to call the Singleton’s static method. So whenever that method is called, the same object is always returned.
<!-- ExplanationEnd -->
<!--ID: 1738239851961-->
END

---

START
FIT-Card

Jaká je struktura **Singleton** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130104742.png)

1. The **Singleton** class declares the static method `getInstance` that returns the same instance of its own class.

The Singleton’s constructor should be hidden from the client code. Calling the `getInstance` method should be the only way of getting the Singleton object.
<!--ID: 1738239851963-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Singleton** design patternu? (3 + 4)

Back:

✅ You can be sure that a class has only a single instance.

✅ You gain a global access point to that instance.

✅ The singleton object is initialized only when it’s requested for the first time.

❌ Violates the _Single Responsibility Principle_. The pattern solves two problems at the time.

❌ The Singleton pattern can mask bad design, for instance, when the components of the program know too much about each other.

❌ The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.

❌ It may be difficult to unit test the client code of the Singleton because many test frameworks rely on inheritance when producing mock objects. Since the constructor of the singleton class is private and overriding static methods is impossible in most languages, you will need to think of a creative way to mock the singleton. Or just don’t write the tests. Or don’t use the Singleton pattern.
<!--ID: 1738239851966-->
END

---

### Non-GoF vzory

START
FIT-Card

Jaké jsou **Non-GoF návrhové vzory**? (8)

Back:

- **Dependency injection**
- **Double-checked locking**
- **Lazy loading**
- **Marker interface**
- **Mock object**
- **Multiton**
- **Null object**
- **Thread pool**
<!--ID: 1738239851968-->
END

---


#### Double-checked locking

START
FIT-Card

Jak funguje **Double-checked locking**?

Back:

This pattern reduces the number of lock acquisitions by simply checking the locking condition beforehand. As a result of this, there’s usually a performance boost.

```java
public class Singleton {

    private Singleton() {} 

    private static volatile Singleton INSTANCE;
    public static Singleton getInstance() {
        if (INSTANCE == null) {
            synchronized (Singleton.class) {
                if (INSTANCE == null) {
                    INSTANCE = new Singleton();
                }
            }
        }
        return INSTANCE;
    }
}
```
<!--ID: 1738239851971-->
END

---


START
FIT-Card

Proč by člověk měl používat **Double-checked locking**?

Back:

- If there would be just one check, another thread can create new instance during instance creation actual thread.
- If there would be just two checks, it would be the same like with just one check.
- If there would be check and then lock, you could check for null, then you would try to lock critical part of that code but lock could by acquired at that specific moment so after acquiring the lock, you would overwrite existing instance.
- If you would first lock and then check, it would work but locking it every time is expensive.
<!--ID: 1738239851973-->
END

---

#### Thread pool

START
FIT-Card

Jak funguje **Thread pool**?

Back:

![](../../Assets/Pasted%20image%2020250130113831.png)

A Thread Pool is a design pattern which consists of a number N of threads running a number M of jobs concurrently. The main motivation behind using the pattern is to avoid the overhead associated with creating and destroying threads. The more straight-forward approach of handling M independent jobs would be to spawn a thread for each job and destroy the thread once the job is executed. However, in some use-cases, such as when the number M of jobs is big, and the jobs are relatively small, too many threads will be generated. In modern operating systems creating a thread or a process is an expensive operation, so avoiding it in those use-cases will improve the performance of the system as well as guarantee that the system won’t spawn too many processes. Instead of creating a thread for each task, thread pool normally creates threads one time at the beginning, and maintains the threads in running/sleeping condition throughout its lifetime. Tasks are passed to the worker threads one by one only when a worker thread is finished with the previous task and can accept a task.

**Performance**

The number of threads may be dynamically adjusted during the lifetime of an application based on the number of waiting tasks. For example, a web server can add threads if numerous web page requests come in and can remove threads when those requests taper down. The cost of having a larger thread pool is increased resource usage. The algorithm used to determine when to create or destroy threads affects the overall performance:

- Creating too many threads wastes resources and costs time creating the unused threads.
- Destroying too many threads requires more time later when creating them again.
- Creating threads too slowly might result in poor client performance (long wait times).
- Destroying threads too slowly may starve other processes of resources.
<!--ID: 1738239851976-->
END

---

#### Mock object
START
FIT-Card

Jak funguje **Mock object**?

Back:

A Mock Object is an object that substitutes for a real object. In object-oriented programming, mock objects are simulated objects that mimic the behavior of real objects in controlled ways.

![](../../Assets/Pasted%20image%2020250130113938.png)
<!--ID: 1738239851978-->
END

---

START
FIT-Card

Proč by člověk měl používat **Mock object**?

Back:

To break a dependency, and in so doing make the dependant object more easily testable.

We prefer to test one behavior at a time. Tests which test many behaviors at once are complex, and do not give very valuable information when they fail.

A tests must always test all those things which are not under its control, and therefore we must bring under the test’s control all those things which we do not wish to test.

- A test should have a single reason to fail. If we do not break dependencies, then a test can fail when one or more of the dependencies fail, even though the thing we want to test is working fine.
- A test should run fast, so it can be run frequently. A test with heavyweight dependencies cannot run fast.
- A test that requires a lot of objects to be instantiated will tend to be complex. Tests should be kept as simple as possible.

When is useful to use mock instead of real object:
- when the object supplies non-deterministic results (e.g. the current time or the current temperature)
- when it has states that are difficult to create or reproduce (e.g. a network error)
- when it is slow (e.g. a complete database, which would have to be initialized before the test)
- when it does not yet exist or may change behavior

<!-- ExampleStart -->
Mocks can be hand-crafted, or created by an automated tool. Here is an example of a hand-crafted mock.

The simplest form of a mock is one that returns a hard-coded value, or a value that is set via its constructor

![](../../Assets/Pasted%20image%2020250130114047.png)

This sort of mock is not _conditionable_ (the test cannot change the return value) and thus cannot be used to test various scenarios. Also, it is not _inspectable_ and therefore cannot be used to test workflows. But it may be adequate for a simple scenario. A slightly more capable mock would have methods for _conditioning_ and _inspection_.

![](../../Assets/Pasted%20image%2020250130114055.png)

One potential difficulty with creating mocks through direct inheritance, as shown above, is that it means the original dependency object will be instantiated at test-time, even though the ClassUnderTest will not be given a reference to it. This is due to the inherent behavior of the class loader; base classes are always instantiated to support the derived class when it is instantiated.

If this causes concern (the original dependency makes a heavyweight connection to a resource or is otherwise undesirable for testing), then an Interface or Abstract class should be used to represent the dependency, with the Mock as a totally separate implementation:

![](../../Assets/Pasted%20image%2020250130114102.png)

<!-- ExampleEnd -->
<!--ID: 1738239851981-->
END

---

#### Null object
START
FIT-Card

Jak funguje **Null object**?

Back:

The Null object pattern is a design pattern that simplifies the use of dependencies that can be undefined. This is achieved by using instances of a concrete class that implements a known interface, instead of null references. We create an abstract class specifying various operations to be done, concrete classes extending this class and a null object class providing do nothing implementation of this class and will be used seamlessly where we need to check null value.

![](../../Assets/Pasted%20image%2020250130114134.png)


The Null Object class is often implemented as a Singleton. Since a null object usually does not have any state, its state can’t change, so multiple instances are identical. Rather than use multiple identical instances, the system can just use a single instance repeatedly.
<!--ID: 1738239851983-->
END

---


## NI-SI-3 Strukturální návrhové vzory

START
FIT-Card

Jaké jsou **structural design patterns**? (7)

Back:

- **Adapter**
- **Bridge**
- **Composite**
- **Decorator**
- **Facade**
- **Flyweight**
- **Proxy**
<!--ID: 1738239851986-->
END

---


### Adapter

START
FIT-Card

K čemu slouží **Adapter** design pattern?

Back:

**Adapter** is a structural design pattern that allows objects with incompatible interfaces to collaborate.

![](../../Assets/Pasted%20image%2020250130105353.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re creating a stock market monitoring app. The app downloads the stock data from multiple sources in XML format and then displays nice-looking charts and diagrams for the user.

At some point, you decide to improve the app by integrating a smart 3rd-party analytics library. But there’s a catch: the analytics library only works with data in JSON format.

![](../../Assets/Pasted%20image%2020250130105404.png)

You could change the library to work with XML. However, this might break some existing code that relies on the library. And worse, you might not have access to the library’s source code in the first place, making this approach impossible.

**SOLUTION:**
You can create an _adapter_. This is a special object that converts the interface of one object so that another object can understand it.

An adapter wraps one of the objects to hide the complexity of conversion happening behind the scenes. The wrapped object isn’t even aware of the adapter. For example, you can wrap an object that operates in meters and kilometers with an adapter that converts all of the data to imperial units such as feet and miles.

Adapters can not only convert data into various formats but can also help objects with different interfaces collaborate. Here’s how it works:

1. The adapter gets an interface, compatible with one of the existing objects.
2. Using this interface, the existing object can safely call the adapter’s methods.
3. Upon receiving a call, the adapter passes the request to the second object, but in a format and order that the second object expects.

Sometimes it’s even possible to create a two-way adapter that can convert the calls in both directions.

![](../../Assets/Pasted%20image%2020250130105429.png)

Let’s get back to our stock market app. To solve the dilemma of incompatible formats, you can create XML-to-JSON adapters for every class of the analytics library that your code works with directly. Then you adjust your code to communicate with the library only via these adapters. When an adapter receives a call, it translates the incoming XML data into a JSON structure and passes the call to the appropriate methods of a wrapped analytics object.
<!-- ExplanationEnd -->
<!--ID: 1738239851988-->
END

---

START
FIT-Card

Jaká je **Object adapter** struktura **Adapter** design patternu?

Back:

This implementation uses the object composition principle: the adapter implements the interface of one object and wraps the other one. It can be implemented in all popular programming languages.
![](../../Assets/Pasted%20image%2020250130105441.png)

1. The **Client** is a class that contains the existing business logic of the program.
2. The **Client Interface** describes a protocol that other classes must follow to be able to collaborate with the client code.
3. The **Service** is some useful class (usually 3rd-party or legacy). The client can’t use this class directly because it has an incompatible interface.
4. The **Adapter** is a class that’s able to work with both the client and the service: it implements the client interface, while wrapping the service object. The adapter receives calls from the client via the adapter interface and translates them into calls to the wrapped service object in a format it can understand.
5. The client code doesn’t get coupled to the concrete adapter class as long as it works with the adapter via the client interface. Thanks to this, you can introduce new types of adapters into the program without breaking the existing client code. This can be useful when the interface of the service class gets changed or replaced: you can just create a new adapter class without changing the client code.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130105657.png)
<!-- ExampleEnd -->
<!--ID: 1738239851991-->
END

---


START
FIT-Card

Jaká je **Class adapter** struktura **Adapter** design patternu?

Back:

This implementation uses inheritance: the adapter inherits interfaces from both objects at the same time. Note that this approach can only be implemented in programming languages that support multiple inheritance, such as C++.

![](../../Assets/Pasted%20image%2020250130105641.png)

1. The **Class Adapter** doesn’t need to wrap any objects because it inherits behaviors from both the client and the service. The adaptation happens within the overridden methods. The resulting adapter can be used in place of an existing client class.
<!--ID: 1738239851994-->
END

---


START
FIT-Card

Jaké jsou výhody a nevýhody **Adapter** design patternu? (2 + 1)

Back:

✅ _Single Responsibility Principle_. You can separate the interface or data conversion code from the primary business logic of the program.

✅ _Open/Closed Principle_. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

❌ The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.
<!--ID: 1738239851996-->
END

---


### Bridge

START
FIT-Card

K čemu slouží **Bridge** design pattern?

Back:

**Bridge** is a structural design pattern that lets you split a large class or a set of closely related classes into two separate hierarchies—abstraction and implementation—which can be developed independently of each other.

![](../../Assets/Pasted%20image%2020250130105740.png)

<!-- ExplanationStart -->
**PROBLEM:**
_Abstraction?_ _Implementation?_ Sound scary? Stay calm and let’s consider a simple example.

Say you have a geometric `Shape` class with a pair of subclasses: `Circle` and `Square`. You want to extend this class hierarchy to incorporate colors, so you plan to create `Red` and `Blue` shape subclasses. However, since you already have two subclasses, you’ll need to create four class combinations such as `BlueCircle` and `RedSquare`.

![](../../Assets/Pasted%20image%2020250130105756.png)

Adding new shape types and colors to the hierarchy will grow it exponentially. For example, to add a triangle shape you’d need to introduce two subclasses, one for each color. And after that, adding a new color would require creating three subclasses, one for each shape type. The further we go, the worse it becomes.

**SOLUTION:**
This problem occurs because we’re trying to extend the shape classes in two independent dimensions: by form and by color. That’s a very common issue with class inheritance.

The Bridge pattern attempts to solve this problem by switching from inheritance to the object composition. What this means is that you extract one of the dimensions into a separate class hierarchy, so that the original classes will reference an object of the new hierarchy, instead of having all of its state and behaviors within one class.

![](../../Assets/Pasted%20image%2020250130105831.png)

Following this approach, we can extract the color-related code into its own class with two subclasses: `Red` and `Blue`. The `Shape` class then gets a reference field pointing to one of the color objects. Now the shape can delegate any color-related work to the linked color object. That reference will act as a bridge between the `Shape` and `Color` classes. From now on, adding new colors won’t require changing the shape hierarchy, and vice versa.
<!-- ExplanationEnd -->
<!--ID: 1738239851999-->
END

---

START
FIT-Card

Jaká je struktura **Bridge** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130105847.png)

1. The **Abstraction** provides high-level control logic. It relies on the implementation object to do the actual low-level work.
2. The **Implementation** declares the interface that’s common for all concrete implementations. An abstraction can only communicate with an implementation object via methods that are declared here.
	- The abstraction may list the same methods as the implementation, but usually the abstraction declares some complex behaviors that rely on a wide variety of primitive operations declared by the implementation.
3. **Concrete Implementations** contain platform-specific code.
4. **Refined Abstractions** provide variants of control logic. Like their parent, they work with different implementations via the general implementation interface.
5. Usually, the **Client** is only interested in working with the abstraction. However, it’s the client’s job to link the abstraction object with one of the implementation objects.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130105910.png)
<!-- ExampleEnd -->
<!--ID: 1738239852001-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Bridge** design patternu? (4 + 1)

Back:

✅ You can create platform-independent classes and apps.

✅ The client code works with high-level abstractions. It isn’t exposed to the platform details.

✅ _Open/Closed Principle_. You can introduce new abstractions and implementations independently from each other.

✅ _Single Responsibility Principle_. You can focus on high-level logic in the abstraction and on platform details in the implementation.

❌ You might make the code more complicated by applying the pattern to a highly cohesive class.
<!--ID: 1738239852004-->
END

---


### Composite

START
FIT-Card

K čemu slouží **Composite** design pattern?

Back:

**Composite** is a structural design pattern that lets you compose objects into tree structures and then work with these structures as if they were individual objects.

![](../../Assets/Pasted%20image%2020250130110008.png)

<!-- ExplanationStart -->
**PROBLEM:**
Using the Composite pattern makes sense only when the core model of your app can be represented as a tree.

For example, imagine that you have two types of objects: `Products` and `Boxes`. A `Box` can contain several `Products` as well as a number of smaller `Boxes`. These little `Boxes` can also hold some `Products` or even smaller `Boxes`, and so on.

Say you decide to create an ordering system that uses these classes. Orders could contain simple products without any wrapping, as well as boxes stuffed with products…and other boxes. How would you determine the total price of such an order?

![](../../Assets/Pasted%20image%2020250130110018.png)

You could try the direct approach: unwrap all the boxes, go over all the products and then calculate the total. That would be doable in the real world; but in a program, it’s not as simple as running a loop. You have to know the classes of `Products` and `Boxes` you’re going through, the nesting level of the boxes and other nasty details beforehand. All of this makes the direct approach either too awkward or even impossible.

**SOLUTION:**
The Composite pattern suggests that you work with `Products` and `Boxes` through a common interface which declares a method for calculating the total price.

How would this method work? For a product, it’d simply return the product’s price. For a box, it’d go over each item the box contains, ask its price and then return a total for this box. If one of these items were a smaller box, that box would also start going over its contents and so on, until the prices of all inner components were calculated. A box could even add some extra cost to the final price, such as packaging cost.

![](../../Assets/Pasted%20image%2020250130110030.png)

The greatest benefit of this approach is that you don’t need to care about the concrete classes of objects that compose the tree. You don’t need to know whether an object is a simple product or a sophisticated box. You can treat them all the same via the common interface. When you call a method, the objects themselves pass the request down the tree.

<!-- ExplanationEnd -->
<!--ID: 1738239852007-->
END

---

START
FIT-Card

Jaká je struktura **Composite** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130110036.png)

1. The **Component** interface describes operations that are common to both simple and complex elements of the tree.
2. The **Leaf** is a basic element of a tree that doesn’t have sub-elements.
	- Usually, leaf components end up doing most of the real work, since they don’t have anyone to delegate the work to.
3. The **Container** (aka _composite_) is an element that has sub-elements: leaves or other containers. A container doesn’t know the concrete classes of its children. It works with all sub-elements only via the component interface.
	- Upon receiving a request, a container delegates the work to its sub-elements, processes intermediate results and then returns the final result to the client.
4. The **Client** works with all elements through the component interface. As a result, the client can work in the same way with both simple or complex elements of the tree.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130110100.png)
<!-- ExampleEnd -->
<!--ID: 1738239852009-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Composite** design patternu? (2 + 1)

Back:

✅ You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.

✅ _Open/Closed Principle_. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

❌ It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.
<!--ID: 1738239852011-->
END

---


### Decorator

START
FIT-Card

K čemu slouží **Decorator** design pattern?

Back:

**Decorator** is a structural design pattern that lets you attach new behaviors to objects by placing these objects inside special wrapper objects that contain the behaviors.

![](../../Assets/Pasted%20image%2020250130110144.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re working on a notification library which lets other programs notify their users about important events.

The initial version of the library was based on the `Notifier` class that had only a few fields, a constructor and a single `send` method. The method could accept a message argument from a client and send the message to a list of emails that were passed to the notifier via its constructor. A third-party app which acted as a client was supposed to create and configure the notifier object once, and then use it each time something important happened.

![](../../Assets/Pasted%20image%2020250130110207.png)

At some point, you realize that users of the library expect more than just email notifications. Many of them would like to receive an SMS about critical issues. Others would like to be notified on Facebook and, of course, the corporate users would love to get Slack notifications.

![](../../Assets/Pasted%20image%2020250130110237.png)

How hard can that be? You extended the `Notifier` class and put the additional notification methods into new subclasses. Now the client was supposed to instantiate the desired notification class and use it for all further notifications.

But then someone reasonably asked you, “Why can’t you use several notification types at once? If your house is on fire, you’d probably want to be informed through every channel.”

You tried to address that problem by creating special subclasses which combined several notification methods within one class. However, it quickly became apparent that this approach would bloat the code immensely, not only the library code but the client code as well.

![](../../Assets/Pasted%20image%2020250130110242.png)

You have to find some other way to structure notifications classes so that their number won’t accidentally break some Guinness record.

**SOLUTION:**
Extending a class is the first thing that comes to mind when you need to alter an object’s behavior. However, inheritance has several serious caveats that you need to be aware of.

- Inheritance is static. You can’t alter the behavior of an existing object at runtime. You can only replace the whole object with another one that’s created from a different subclass.
- Subclasses can have just one parent class. In most languages, inheritance doesn’t let a class inherit behaviors of multiple classes at the same time.

One of the ways to overcome these caveats is by using _Aggregation_ or _Composition_ _Aggregation_: object A contains objects B; B can live without A.  
_Composition_: object A consists of objects B; A manages life cycle of B; B can’t live without A. instead of _ Inheritance_. Both of the alternatives work almost the same way: one object _has a_ reference to another and delegates it some work, whereas with inheritance, the object itself _is_ able to do that work, inheriting the behavior from its superclass.

With this new approach you can easily substitute the linked “helper” object with another, changing the behavior of the container at runtime. An object can use the behavior of various classes, having references to multiple objects and delegating them all kinds of work. Aggregation/composition is the key principle behind many design patterns, including Decorator. On that note, let’s return to the pattern discussion.

![](../../Assets/Pasted%20image%2020250130110302.png)

“Wrapper” is the alternative nickname for the Decorator pattern that clearly expresses the main idea of the pattern. A _ wrapper_ is an object that can be linked with some _target_ object. The wrapper contains the same set of methods as the target and delegates to it all requests it receives. However, the wrapper may alter the result by doing something either before or after it passes the request to the target.

When does a simple wrapper become the real decorator? As I mentioned, the wrapper implements the same interface as the wrapped object. That’s why from the client’s perspective these objects are identical. Make the wrapper’s reference field accept any object that follows that interface. This will let you cover an object in multiple wrappers, adding the combined behavior of all the wrappers to it.

In our notifications example, let’s leave the simple email notification behavior inside the base `Notifier` class, but turn all other notification methods into decorators.

![](../../Assets/Pasted%20image%2020250130110307.png)

The client code would need to wrap a basic notifier object into a set of decorators that match the client’s preferences. The resulting objects will be structured as a stack.

![](../../Assets/Pasted%20image%2020250130110315.png)

The last decorator in the stack would be the object that the client actually works with. Since all decorators implement the same interface as the base notifier, the rest of the client code won’t care whether it works with the “pure” notifier object or the decorated one.

We could apply the same approach to other behaviors such as formatting messages or composing the recipient list. The client can decorate the object with any custom decorators, as long as they follow the same interface as the others.

<!-- ExplanationEnd -->
<!--ID: 1738239852014-->
END

---

START
FIT-Card

Jaká je struktura **Decorator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130110322.png)

1. The **Component** declares the common interface for both wrappers and wrapped objects.
2. **Concrete Component** is a class of objects being wrapped. It defines the basic behavior, which can be altered by decorators.
3. The **Base Decorator** class has a field for referencing a wrapped object. The field’s type should be declared as the component interface so it can contain both concrete components and decorators. The base decorator delegates all operations to the wrapped object.
4. **Concrete Decorators** define extra behaviors that can be added to components dynamically. Concrete decorators override methods of the base decorator and execute their behavior either before or after calling the parent method.
5. The **Client** can wrap components in multiple layers of decorators, as long as it works with all objects via the component interface.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130110336.png)
<!-- ExampleEnd -->
<!--ID: 1738239852017-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Decorator** design patternu? (4 + 3)

Back:

✅ You can extend an object’s behavior without making a new subclass.

✅ You can add or remove responsibilities from an object at runtime.

✅ You can combine several behaviors by wrapping an object into multiple decorators.

✅ _Single Responsibility Principle_. You can divide a monolithic class that implements many possible variants of behavior into several smaller classes.

❌ It’s hard to remove a specific wrapper from the wrappers stack.

❌ It’s hard to implement a decorator in such a way that its behavior doesn’t depend on the order in the decorators stack.

❌ The initial configuration code of layers might look pretty ugly.
<!--ID: 1738239852020-->
END

---


### Facade

START
FIT-Card

K čemu slouží **Facade** design pattern?

Back:

**Facade** is a structural design pattern that provides a simplified interface to a library, a framework, or any other complex set of classes.
![](../../Assets/Pasted%20image%2020250130110418.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you must make your code work with a broad set of objects that belong to a sophisticated library or framework. Ordinarily, you’d need to initialize all of those objects, keep track of dependencies, execute methods in the correct order, and so on.

As a result, the business logic of your classes would become tightly coupled to the implementation details of 3rd-party classes, making it hard to comprehend and maintain.

**SOLUTION:**
A facade is a class that provides a simple interface to a complex subsystem which contains lots of moving parts. A facade might provide limited functionality in comparison to working with the subsystem directly. However, it includes only those features that clients really care about.

Having a facade is handy when you need to integrate your app with a sophisticated library that has dozens of features, but you just need a tiny bit of its functionality.

For instance, an app that uploads short funny videos with cats to social media could potentially use a professional video conversion library. However, all that it really needs is a class with the single method `encode(filename, format)` . After creating such a class and connecting it with the video conversion library, you’ll have your first facade.

<!-- ExplanationEnd -->
<!--ID: 1738239852023-->
END

---

START
FIT-Card

Jaká je struktura **Facade** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130110443.png)

1. The **Facade** provides convenient access to a particular part of the subsystem’s functionality. It knows where to direct the client’s request and how to operate all the moving parts.
2. An **Additional Facade** class can be created to prevent polluting a single facade with unrelated features that might make it yet another complex structure. Additional facades can be used by both clients and other facades.
3. The **Complex Subsystem** consists of dozens of various objects. To make them all do something meaningful, you have to dive deep into the subsystem’s implementation details, such as initializing objects in the correct order and supplying them with data in the proper format.
	- Subsystem classes aren’t aware of the facade’s existence. They operate within the system and work with each other directly.
4. The **Client** uses the facade instead of calling the subsystem objects directly.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130110500.png)
<!-- ExampleEnd -->
<!--ID: 1738239852026-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Facade** design patternu? (1 + 1)

Back:

✅ You can isolate your code from the complexity of a subsystem.

❌ A facade can become [a god object](https://courses.fit.cvut.cz/antipatterns/god-object) coupled to all classes of an app.
<!--ID: 1738239852029-->
END

---


### Flyweight

START
FIT-Card

K čemu slouží **Flyweight** design pattern?

Back:

**Flyweight** is a structural design pattern that lets you fit more objects into the available amount of RAM by sharing common parts of state between multiple objects instead of keeping all of the data in each object.

![](../../Assets/Pasted%20image%2020250130110545.png)

<!-- ExplanationStart -->
**PROBLEM:**
To have some fun after long working hours, you decided to create a simple video game: players would be moving around a map and shooting each other. You chose to implement a realistic particle system and make it a distinctive feature of the game. Vast quantities of bullets, missiles, and shrapnel from explosions should fly all over the map and deliver a thrilling experience to the player.

Upon its completion, you pushed the last commit, built the game and sent it to your friend for a test drive. Although the game was running flawlessly on your machine, your friend wasn’t able to play for long. On his computer, the game kept crashing after a few minutes of gameplay. After spending several hours digging through debug logs, you discovered that the game crashed because of an insufficient amount of RAM. It turned out that your friend’s rig was much less powerful than your own computer, and that’s why the problem emerged so quickly on his machine.

The actual problem was related to your particle system. Each particle, such as a bullet, a missile or a piece of shrapnel was represented by a separate object containing plenty of data. At some point, when the carnage on a player’s screen reached its climax, newly created particles no longer fit into the remaining RAM, so the program crashed.

![](../../Assets/Pasted%20image%2020250130110558.png)

**SOLUTION:**
On closer inspection of the `Particle` class, you may notice that the color and sprite fields consume a lot more memory than other fields. What’s worse is that these two fields store almost identical data across all particles. For example, all bullets have the same color and sprite.

![](../../Assets/Pasted%20image%2020250130110631.png)

Other parts of a particle’s state, such as coordinates, movement vector and speed, are unique to each particle. After all, the values of these fields change over time. This data represents the always changing context in which the particle exists, while the color and sprite remain constant for each particle.

This constant data of an object is usually called the _intrinsic state_. It lives within the object; other objects can only read it, not change it. The rest of the object’s state, often altered “from the outside” by other objects, is called the _extrinsic state_.

The Flyweight pattern suggests that you stop storing the extrinsic state inside the object. Instead, you should pass this state to specific methods which rely on it. Only the intrinsic state stays within the object, letting you reuse it in different contexts. As a result, you’d need fewer of these objects since they only differ in the intrinsic state, which has much fewer variations than the extrinsic.

![](../../Assets/Pasted%20image%2020250130110645.png)

Let’s return to our game. Assuming that we had extracted the extrinsic state from our particle class, only three different objects would suffice to represent all particles in the game: a bullet, a missile, and a piece of shrapnel. As you’ve probably guessed by now, an object that only stores the intrinsic state is called a flyweight.

<!-- ExplanationEnd -->
<!--ID: 1738239852031-->
END

---

START
FIT-Card

Jaká je struktura **Flyweight** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130110652.png)

1. The Flyweight pattern is merely an optimization. Before applying it, make sure your program does have the RAM consumption problem related to having a massive number of similar objects in memory at the same time. Make sure that this problem can’t be solved in any other meaningful way.
2. The **Flyweight** class contains the portion of the original object’s state that can be shared between multiple objects. The same flyweight object can be used in many different contexts. The state stored inside a flyweight is called _intrinsic._ The state passed to the flyweight’s methods is called _extrinsic._
3. The **Context** class contains the extrinsic state, unique across all original objects. When a context is paired with one of the flyweight objects, it represents the full state of the original object.
4. Usually, the behavior of the original object remains in the flyweight class. In this case, whoever calls a flyweight’s method must also pass appropriate bits of the extrinsic state into the method’s parameters. On the other hand, the behavior can be moved to the context class, which would use the linked flyweight merely as a data object.
5. The **Client** calculates or stores the extrinsic state of flyweights. From the client’s perspective, a flyweight is a template object which can be configured at runtime by passing some contextual data into parameters of its methods.
6. The **Flyweight Factory** manages a pool of existing flyweights. With the factory, clients don’t create flyweights directly. Instead, they call the factory, passing it bits of the intrinsic state of the desired flyweight. The factory looks over previously created flyweights and either returns an existing one that matches search criteria or creates a new one if nothing is found.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130110709.png)
<!-- ExampleEnd -->
<!--ID: 1738239852034-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Flyweight** design patternu? (1 + 2)

Back:

✅ You can save lots of RAM, assuming your program has tons of similar objects.

❌ You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.

❌ The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.
<!--ID: 1738239852036-->
END

---


### Proxy

START
FIT-Card

K čemu slouží **Proxy** design pattern?

Back:

**Proxy** is a structural design pattern that lets you provide a substitute or placeholder for another object. A proxy controls access to the original object, allowing you to perform something either before or after the request gets through to the original object.

![](../../Assets/Pasted%20image%2020250130110748.png)

<!-- ExplanationStart -->
**PROBLEM:**
Why would you want to control access to an object? Here is an example: you have a massive object that consumes a vast amount of system resources. You need it from time to time, but not always.

![](../../Assets/Pasted%20image%2020250130110758.png)

You could implement lazy initialization: create this object only when it’s actually needed. All of the object’s clients would need to execute some deferred initialization code. Unfortunately, this would probably cause a lot of code duplication.

In an ideal world, we’d want to put this code directly into our object’s class, but that isn’t always possible. For instance, the class may be part of a closed 3rd-party library.

**SOLUTION:**
The Proxy pattern suggests that you create a new proxy class with the same interface as an original service object. Then you update your app so that it passes the proxy object to all of the original object’s clients. Upon receiving a request from a client, the proxy creates a real service object and delegates all the work to it.

![](../../Assets/Pasted%20image%2020250130110809.png)

But what’s the benefit? If you need to execute something either before or after the primary logic of the class, the proxy lets you do this without changing that class. Since the proxy implements the same interface as the original class, it can be passed to any client that expects a real service object.

<!-- ExplanationEnd -->
<!--ID: 1738239852039-->
END

---

START
FIT-Card

Jaká je struktura **Proxy** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130110815.png)

1. The **Service Interface** declares the interface of the Service. The proxy must follow this interface to be able to disguise itself as a service object.
2. The **Service** is a class that provides some useful business logic.
3. The **Proxy** class has a reference field that points to a service object. After the proxy finishes its processing ( e.g., lazy initialization, logging, access control, caching, etc.), it passes the request to the service object.
4. The **Client** should work with both services and proxies via the same interface. This way you can pass a proxy into any code that expects a service object.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130110831.png)
<!-- ExampleEnd -->
<!--ID: 1738239852041-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Proxy** design patternu? (4 + 2)

Back:

✅ You can control the service object without clients knowing about it.

✅ You can manage the lifecycle of the service object when clients don’t care about it.

✅ The proxy works even if the service object isn’t ready or is not available.

✅ _Open/Closed Principle_. You can introduce new proxies without changing the service or clients.

❌ The code may become more complicated since you need to introduce a lot of new classes.

❌ The response from the service might get delayed.
<!--ID: 1738239852044-->
END

---

### Non-GoF vzory

#### Lazy loading

START
FIT-Card

Jak funguje **Lazy loading**?

Back:

Lazy loading is the practice of delaying load or initialization of resources or objects until they’re actually needed to improve performance and save system resources. For example, if a web page has an image that the user has to scroll down to see, you can display a placeholder and lazy load the full image only when the user arrives to its location. It also aims to reduce unnecessary work in an application that loads objects from a database, while avoiding loading aspects of the object that the application does not use.

The benefits of lazy loading include:

- Reduces initial load time – Lazy loading a webpage reduces page weight, allowing for a quicker page load time. Or loading
- Bandwidth conservation – Lazy loading conserves bandwidth by delivering content to users only if it’s requested.
- System resource conservation – Lazy loading conserves both server and client resources, because only some of the images, JavaScript and other code actually needs to be rendered or executed.

![](../../Assets/Pasted%20image%2020250130114401.png)
<!--ID: 1738239852047-->
END

---


START
FIT-Card

Jakými způsoby lze implementovat **lazy loading**? (4)

Back:

- **Lazy initialization** – This method sets objects to null. Object data is loaded only after and whenever invoking them, check if null, and if so, load object data.
- **Virtual proxy** – when accessing an object, call a virtual object with same interface as the real object. When the virtual object is called, load the real object, then delegate to it.
- **Ghost** – load an object in partial state, only using an identifier. The first time a property on the object is called, load the full data.
- **Value holder** – create a generic object that handles lazy loading behavior. This object should appear in place of an object’s data fields.
<!--ID: 1738239852050-->
END

---

#### Dependency injection


START
FIT-Card

Jak funguje **Dependency Injection**?

Back:

Classes often require references to other classes. For example, a `Car` class might need a reference to an `Engine` class. These required classes are called dependencies, and in this example the `Car` class is dependent on having an instance of the `Engine` class to run.

There are three ways for a class to get an object it needs:

1. The class constructs the dependency it needs. In the example above, `Car` would create and initialize its own instance of `Engine`.
2. Grab it from somewhere else. Frameworks and libraries can provide created instances of its classes.
3. Have it supplied as a parameter. The app can provide these dependencies when the class is constructed or pass them in to the functions that need each dependency. In the example above, the `Car` constructor would receive `Engine` as a parameter. The third option is dependency injection! With this approach you take the dependencies of a class and provide them rather than having the class instance obtain them itself.

<!-- ExampleStart -->
Here’s an example. Without dependency injection, representing a `Car` that creates its own `Engine` dependency in code looks like this:

```java
class Car {

  private Engine engine = new Engine();

  public void start() {
    engine.start();
  }
}

class MyApp {
  public static void main(String[] args) {
    Car car = new Car();
    car.start();
  }
}
```

This is not an example of dependency injection because the `Car` class is constructing its own `Engine`. This can be problematic because:

- `Car` and `Engine` are tightly coupled - an instance of `Car` uses one type of `Engine`, and no subclasses or alternative implementations can easily be used. If the `Car` were to construct its own `Engine`, you would have to create two types of `Car` instead of just reusing the same `Car` for engines of type `Gas` and `Electric`.
    
- The hard dependency on `Engine` makes testing more difficult. `Car` uses a real instance of `Engine`, thus preventing you from using a mock to modify `Engine` for different test cases.
    

What does the code look like with dependency injection? Instead of each instance of `Car` constructing its own `Engine` object on initialization, it receives an `Engine` object as a parameter in its constructor:

```java
class Car {

  private final Engine engine;

  public Car(Engine engine) {
    this.engine = engine;
  }

  public void start() {
    engine.start();
  }
}

class MyApp {
  public static void main(String[] args) {
    Engine engine = new Engine();
    Car car = new Car(engine);
    car.start();
  }
}
```

The main function uses `Car`. Because `Car` depends on `Engine`, the app creates an instance of `Engine` and then uses it to construct an instance of `Car`. The benefits of this DI-based approach are:

- Reusability of `Car`. You can pass in different implementations of `Engine` to `Car`. For example, you might define a new subclass of `Engine` called `ElectricEngine` that you want `Car` to use. If you use DI, all you need to do is pass in an instance of the updated `ElectricEngine` subclass, and `Car` still works without any further changes.
    
- Easy testing of `Car`. You can pass in test doubles to test your different scenarios. For example, you might create a test double of `Engine` called `FakeEngine` and configure it for different tests.
    

There are two major ways to do dependency injection:

- **Constructor Injection**. This is the way described above. You pass the dependencies of a class to its constructor.
    
- **Field Injection (or Setter Injection)**. With field injection, dependencies are instantiated after the class is created. The code would look like this:
    

```java
class Car {

  private Engine engine;

  public void setEngine(Engine engine) {
    this.engine = engine;
  }

  public void start() {
    engine.start();
  }
}

class MyApp {
  public static void main(String[] args) {
    Car car = new Car();
    car.setEngine(new Engine());
    car.start();
  }
}
```
<!-- ExampleEnd -->
<!--ID: 1738239852053-->
END

---


START
FIT-Card

Jak funguje **automatizovaná dependency injection**?

Back:

In the previous example, you created, provided, and managed the dependencies of the different classes yourself, without relying on a library. This is called _dependency injection by hand_, or _manual dependency injection_. In the `Car` example, there was only one dependency, but more dependencies and classes can make manual injection of dependencies more tedious. Manual dependency injection also presents several problems:

- For big apps, taking all the dependencies and connecting them correctly can require a large amount of boilerplate code. In a multi-layered architecture, in order to create an object for a top layer, you have to provide all the dependencies of the layers below it. As a concrete example, to build a real car you might need an engine, a transmission, a chassis, and other parts; and an engine in turn needs cylinders and spark plugs.
- When you’re not able to construct dependencies before passing them in — for example when using lazy initializations or scoping objects to flows of your app — you need to write and maintain a custom container (or graph of dependencies) that manages the lifetimes of your dependencies in memory.
    

There are libraries that solve this problem by automating the process of creating and providing dependencies. They fit into two categories:

- Reflection-based solutions that connect dependencies at runtime.
- Static solutions that generate the code to connect dependencies at compile time.
<!--ID: 1738239852055-->
END

---


## NI-SI-4 Vzory pro chování objektů


START
FIT-Card

Jaké jsou **vzory pro chování objektů**? (11)

Back:

- **Command**
- **Chain of Responsibility**
- **Interpreter**
- **Iterator**
- **Mediator**
- **Memento**
- **Observer**
- **State**
- **Strategy**
- **Template Method**
- **Visitor**
<!--ID: 1738239852058-->
END

---


### Command

START
FIT-Card

K čemu slouží **Command** design pattern?

Back:

**Command** is a behavioral design pattern that turns a request into a stand-alone object that contains all information about the request. This transformation lets you pass requests as a method arguments, delay or queue a request’s execution, and support undoable operations.

![](../../Assets/Pasted%20image%2020250130111117.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re working on a new text-editor app. Your current task is to create a toolbar with a bunch of buttons for various operations of the editor. You created a very neat `Button` class that can be used for buttons on the toolbar, as well as for generic buttons in various dialogs.

![](../../Assets/Pasted%20image%2020250130111134.png)

While all of these buttons look similar, they’re all supposed to do different things. Where would you put the code for the various click handlers of these buttons? The simplest solution is to create tons of subclasses for each place where the button is used. These subclasses would contain the code that would have to be executed on a button click.

![](../../Assets/Pasted%20image%2020250130111140.png)

Before long, you realize that this approach is deeply flawed. First, you have an enormous number of subclasses, and that would be okay if you weren’t risking breaking the code in these subclasses each time you modify the base `Button` class. Put simply, your GUI code has become awkwardly dependent on the volatile code of the business logic.

![](../../Assets/Pasted%20image%2020250130111144.png)

And here’s the ugliest part. Some operations, such as copying/pasting text, would need to be invoked from multiple places. For example, a user could click a small “Copy” button on the toolbar, or copy something via the context menu, or just hit `Ctrl+C` on the keyboard.

Initially, when our app only had the toolbar, it was okay to place the implementation of various operations into the button subclasses. In other words, having the code for copying text inside the `CopyButton` subclass was fine. But then, when you implement context menus, shortcuts, and other stuff, you have to either duplicate the operation’s code in many classes or make menus dependent on buttons, which is an even worse option.

**SOLUTION:**
Good software design is often based on the _principle of separation of concerns_, which usually results in breaking an app into layers. The most common example: a layer for the graphical user interface and another layer for the business logic. The GUI layer is responsible for rendering a beautiful picture on the screen, capturing any input and showing results of what the user and the app are doing. However, when it comes to doing something important, like calculating the trajectory of the moon or composing an annual report, the GUI layer delegates the work to the underlying layer of business logic.

In the code it might look like this: a GUI object calls a method of a business logic object, passing it some arguments. This process is usually described as one object sending another a _request_.

![](../../Assets/Pasted%20image%2020250130111158.png)

The Command pattern suggests that GUI objects shouldn’t send these requests directly. Instead, you should extract all of the request details, such as the object being called, the name of the method and the list of arguments into a separate _ command_ class with a single method that triggers this request.

Command objects serve as links between various GUI and business logic objects. From now on, the GUI object doesn’t need to know what business logic object will receive the request and how it’ll be processed. The GUI object just triggers the command, which handles all the details.

![](../../Assets/Pasted%20image%2020250130111202.png)

The next step is to make your commands implement the same interface. Usually it has just a single execution method that takes no parameters. This interface lets you use various commands with the same request sender, without coupling it to concrete classes of commands. As a bonus, now you can switch command objects linked to the sender, effectively changing the sender’s behavior at runtime.

You might have noticed one missing piece of the puzzle, which is the request parameters. A GUI object might have supplied the business-layer object with some parameters. Since the command execution method doesn’t have any parameters, how would we pass the request details to the receiver? It turns out the command should be either pre-configured with this data, or capable of getting it on its own.

![](../../Assets/Pasted%20image%2020250130111207.png)

Let’s get back to our text editor. After we apply the Command pattern, we no longer need all those button subclasses to implement various click behaviors. It’s enough to put a single field into the base `Button` class that stores a reference to a command object and make the button execute that command on a click.

You’ll implement a bunch of command classes for every possible operation and link them with particular buttons, depending on the buttons’ intended behavior.

Other GUI elements, such as menus, shortcuts or entire dialogs, can be implemented in the same way. They’ll be linked to a command which gets executed when a user interacts with the GUI element. As you’ve probably guessed by now, the elements related to the same operations will be linked to the same commands, preventing any code duplication.

As a result, commands become a convenient middle layer that reduces coupling between the GUI and business logic layers. And that’s only a fraction of the benefits that the Command pattern can offer!

<!-- ExplanationEnd -->
<!--ID: 1738239852060-->
END

---

START
FIT-Card

Jaká je struktura **Command** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111213.png)

1. The **Sender** class (aka _invoker_) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
2. The **Command** interface usually declares just a single method for executing the command.
3. **Concrete Commands** implement various kinds of requests. A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged.
	- Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.
4. The **Receiver** class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
5. The **Client** creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130111234.png)
<!-- ExampleEnd -->
<!--ID: 1738239852063-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Command** design patternu? (5 + 1)

Back:

✅ _Single Responsibility Principle_. You can decouple classes that invoke operations from classes that perform these operations.

✅ _Open/Closed Principle_. You can introduce new commands into the app without breaking existing client code.

✅ You can implement undo/redo.

✅ You can implement deferred execution of operations.

✅ You can assemble a set of simple commands into a complex one.

❌ The code may become more complicated since you’re introducing a whole new layer between senders and receivers.
<!--ID: 1738239852065-->
END

---


### Chain of Responsibility

START
FIT-Card

K čemu slouží **Chain of Responsibility** design pattern?

Back:

**Chain of Responsibility** is a behavioral design pattern that lets you pass requests along a chain of handlers. Upon receiving a request, each handler decides either to process the request or to pass it to the next handler in the chain.

![](../../Assets/Pasted%20image%2020250130111323.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re working on an online ordering system. You want to restrict access to the system so only authenticated users can create orders. Also, users who have administrative permissions must have full access to all orders.

After a bit of planning, you realized that these checks must be performed sequentially. The application can attempt to authenticate a user to the system whenever it receives a request that contains the user’s credentials. However, if those credentials aren’t correct and authentication fails, there’s no reason to proceed with any other checks.

![](../../Assets/Pasted%20image%2020250130111336.png)

During the next few months, you implemented several more of those sequential checks.
- One of your colleagues suggested that it’s unsafe to pass raw data straight to the ordering system. So you added an extra validation step to sanitize the data in a request.
- Later, somebody noticed that the system is vulnerable to brute force password cracking. To negate this, you promptly added a check that filters repeated failed requests coming from the same IP address.
- Someone else suggested that you could speed up the system by returning cached results on repeated requests containing the same data. Hence, you added another check which lets the request pass through to the system only if there’s no suitable cached response.

![](../../Assets/Pasted%20image%2020250130111341.png)

The code of the checks, which had already looked like a mess, became more and more bloated as you added each new feature. Changing one check sometimes affected the others. Worst of all, when you tried to reuse the checks to protect other components of the system, you had to duplicate some of the code since those components required some of the checks, but not all of them.

The system became very hard to comprehend and expensive to maintain. You struggled with the code for a while, until one day you decided to refactor the whole thing.

**SOLUTION:**
Like many other behavioral design patterns, the **Chain of Responsibility** relies on transforming particular behaviors into stand-alone objects called _handlers_. In our case, each check should be extracted to its own class with a single method that performs the check. The request, along with its data, is passed to this method as an argument.

The pattern suggests that you link these handlers into a chain. Each linked handler has a field for storing a reference to the next handler in the chain. In addition to processing a request, handlers pass the request further along the chain. The request travels along the chain until all handlers have had a chance to process it.

Here’s the best part: a handler can decide not to pass the request further down the chain and effectively stop any further processing.

In our example with ordering systems, a handler performs the processing and then decides whether to pass the request further down the chain. Assuming the request contains the right data, all the handlers can execute their primary behavior, whether it’s authentication checks or caching.

![](../../Assets/Pasted%20image%2020250130111401.png)

However, there’s a slightly different approach (and it’s a bit more canonical) in which, upon receiving a request, a handler decides whether it can process it. If it can, it doesn’t pass the request any further. So it’s either only one handler that processes the request or none at all. This approach is very common when dealing with events in stacks of elements within a graphical user interface.

For instance, when a user clicks a button, the event propagates through the chain of GUI elements that starts with the button, goes along its containers (like forms or panels), and ends up with the main application window. The event is processed by the first element in the chain that’s capable of handling it. This example is also noteworthy because it shows that a chain can always be extracted from an object tree.

![](../../Assets/Pasted%20image%2020250130111406.png)

It’s crucial that all handler classes implement the same interface. Each concrete handler should only care about the following one having the `execute` method. This way you can compose chains at runtime, using various handlers without coupling your code to their concrete classes.

<!-- ExplanationEnd -->
<!--ID: 1738239852068-->
END

---

START
FIT-Card

Jaká je struktura **Chain of Responsibility** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111411.png)

1. The **Handler** declares the interface, common for all concrete handlers. It usually contains just a single method for handling requests, but sometimes it may also have another method for setting the next handler on the chain.
2. The **Base Handler** is an optional class where you can put the boilerplate code that’s common to all handler classes.
	- Usually, this class defines a field for storing a reference to the next handler. The clients can build a chain by passing a handler to the constructor or setter of the previous handler. The class may also implement the default handling behavior: it can pass execution to the next handler after checking for its existence.
3. **Concrete Handlers** contain the actual code for processing requests. Upon receiving a request, each handler must decide whether to process it and, additionally, whether to pass it along the chain.
	- Handlers are usually self-contained and immutable, accepting all necessary data just once via the constructor.
4. The **Client** may compose chains just once or compose them dynamically, depending on the application’s logic. Note that a request can be sent to any handler in the chain—it doesn’t have to be the first one.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130111435.png)
<!-- ExampleEnd -->
<!--ID: 1738239852071-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Chain of Responsibility** design patternu? (3 + 1)

Back:

✅ You can control the order of request handling.

✅ _Single Responsibility Principle_. You can decouple classes that invoke operations from classes that perform operations.

✅ _Open/Closed Principle_. You can introduce new handlers into the app without breaking the existing client code.

❌ Some requests may end up unhandled.
<!--ID: 1738239852073-->
END

---


### Interpreter

START
FIT-Card

K čemu slouží **Interpreter** design pattern?

Back:

- Given a language, define a representation for its grammar along with an interpreter that uses the representation to interpret sentences in the language.
- Map a domain to a language, the language to a grammar, and the grammar to a hierarchical object-oriented design.

<!-- ExplanationStart -->
**PROBLEM:**
A class of problems occurs repeatedly in a well-defined and well-understood domain. If the domain were characterized with a “language”, then problems could be easily solved with an interpretation “engine”.

**SOLUTION:**
The Interpreter pattern discusses: defining a domain language (i.e. problem characterization) as a simple language grammar, representing domain rules as language sentences, and interpreting these sentences to solve the problem. The pattern uses a class to represent each grammar rule. And since grammars are usually hierarchical in structure, an inheritance hierarchy of rule classes maps nicely.

An abstract base class specifies the method `interpret()`. Each concrete subclass implements `interpret()` by accepting (as an argument) the current state of the language stream, and adding its contribution to the problem solving process.

<!-- ExplanationEnd -->
<!--ID: 1738239852076-->
END

---

START
FIT-Card

Jaká je struktura **Interpreter** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111600.png)

Interpreter suggests modeling the domain with a recursive grammar. Each rule in the grammar is either a ‘composite’ (a rule that references other rules) or a terminal (a leaf node in a tree structure). Interpreter relies on the recursive traversal of the Composite pattern to interpret the ‘sentences’ it is asked to process.

<!-- ExampleStart -->
PSEUDOCODE_IMAGE_HERE
<!-- ExampleEnd -->
<!--ID: 1738239852078-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Interpreter** design patternu? (1 + 1)

Back:

✅ The interpreter design pattern is great for relatively simple grammar interpretation, which doesn’t need to evolve and extend much.

❌ When the grammar is getting more complex, it becomes harder to maintain.
<!--ID: 1738239852081-->
END

---


### Iterator

START
FIT-Card

K čemu slouží **Iterator** design pattern?

Back:

**Iterator** is a behavioral design pattern that lets you traverse elements of a collection without exposing its underlying representation (list, stack, tree, etc.).

![](../../Assets/Pasted%20image%2020250130111638.png)

<!-- ExplanationStart -->
**PROBLEM:**
Collections are one of the most used data types in programming. Nonetheless, a collection is just a container for a group of objects.

![](../../Assets/Pasted%20image%2020250130111651.png)

Most collections store their elements in simple lists. However, some of them are based on stacks, trees, graphs and other complex data structures.

But no matter how a collection is structured, it must provide some way of accessing its elements so that other code can use these elements. There should be a way to go through each element of the collection without accessing the same elements over and over.

This may sound like an easy job if you have a collection based on a list. You just loop over all of the elements. But how do you sequentially traverse elements of a complex data structure, such as a tree? For example, one day you might be just fine with depth-first traversal of a tree. Yet the next day you might require breadth-first traversal. And the next week, you might need something else, like random access to the tree elements.

![](../../Assets/Pasted%20image%2020250130111656.png)

Adding more and more traversal algorithms to the collection gradually blurs its primary responsibility, which is efficient data storage. Additionally, some algorithms might be tailored for a specific application, so including them into a generic collection class would be weird.

On the other hand, the client code that’s supposed to work with various collections may not even care how they store their elements. However, since collections all provide different ways of accessing their elements, you have no option other than to couple your code to the specific collection classes.

**SOLUTION:**
The main idea of the Iterator pattern is to extract the traversal behavior of a collection into a separate object called an _iterator_.

![](../../Assets/Pasted%20image%2020250130111706.png)

In addition to implementing the algorithm itself, an iterator object encapsulates all of the traversal details, such as the current position and how many elements are left till the end. Because of this, several iterators can go through the same collection at the same time, independently of each other.

Usually, iterators provide one primary method for fetching elements of the collection. The client can keep running this method until it doesn’t return anything, which means that the iterator has traversed all of the elements.

All iterators must implement the same interface. This makes the client code compatible with any collection type or any traversal algorithm as long as there’s a proper iterator. If you need a special way to traverse a collection, you just create a new iterator class, without having to change the collection or the client.

<!-- ExplanationEnd -->
<!--ID: 1738239852083-->
END

---

START
FIT-Card

Jaká je struktura **Iterator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111712.png)

1. The **Iterator** interface declares the operations required for traversing a collection: fetching the next element, retrieving the current position, restarting iteration, etc.
2. **Concrete Iterators** implement specific algorithms for traversing a collection. The iterator object should track the traversal progress on its own. This allows several iterators to traverse the same collection independently of each other.
3. The **Collection** interface declares one or multiple methods for getting iterators compatible with the collection. Note that the return type of the methods must be declared as the iterator interface so that the concrete collections can return various kinds of iterators.
4. **Concrete Collections** return new instances of a particular concrete iterator class each time the client requests one. You might be wondering, where’s the rest of the collection’s code? Don’t worry, it should be in the same class. It’s just that these details aren’t crucial to the actual pattern, so we’re omitting them.
5. The **Client** works with both collections and iterators via their interfaces. This way the client isn’t coupled to concrete classes, allowing you to use various collections and iterators with the same client code.
	- Typically, clients don’t create iterators on their own, but instead get them from collections. Yet, in certain cases, the client can create one directly; for example, when the client defines its own special iterator.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130111745.png)
<!-- ExampleEnd -->
<!--ID: 1738239852086-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Iterator** design patternu? (4 + 2)

Back:

✅ _Single Responsibility Principle_. You can clean up the client code and the collections by extracting bulky traversal algorithms into separate classes.

✅ _Open/Closed Principle_. You can implement new types of collections and iterators and pass them to existing code without breaking anything.

✅ You can iterate over the same collection in parallel because each iterator object contains its own iteration state.

✅ For the same reason, you can delay an iteration and continue it when needed.

❌ Applying the pattern can be an overkill if your app only works with simple collections.

❌ Using an iterator may be less efficient than going through elements of some specialized collections directly.
<!--ID: 1738239852089-->
END

---


### Mediator

START
FIT-Card

K čemu slouží **Mediator** design pattern?

Back:

**Mediator** is a behavioral design pattern that lets you reduce chaotic dependencies between objects. The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.

![](../../Assets/Pasted%20image%2020250130111821.png)

<!-- ExplanationStart -->
**PROBLEM:**
Say you have a dialog for creating and editing customer profiles. It consists of various form controls such as text fields, checkboxes, buttons, etc.

![](../../Assets/Pasted%20image%2020250130111831.png)

Some of the form elements may interact with others. For instance, selecting the “I have a dog” checkbox may reveal a hidden text field for entering the dog’s name. Another example is the submit button that has to validate values of all fields before saving the data.

![](../../Assets/Pasted%20image%2020250130111835.png)

By having this logic implemented directly inside the code of the form elements you make these elements’ classes much harder to reuse in other forms of the app. For example, you won’t be able to use that checkbox class inside another form, because it’s coupled to the dog’s text field. You can use either all the classes involved in rendering the profile form, or none at all.

**SOLUTION:**
The Mediator pattern suggests that you should cease all direct communication between the components which you want to make independent of each other. Instead, these components must collaborate indirectly, by calling a special mediator object that redirects the calls to appropriate components. As a result, the components depend only on a single mediator class instead of being coupled to dozens of their colleagues.

In our example with the profile editing form, the dialog class itself may act as the mediator. Most likely, the dialog class is already aware of all of its sub-elements, so you won’t even need to introduce new dependencies into this class.

![](../../Assets/Pasted%20image%2020250130111853.png)

The most significant change happens to the actual form elements. Let’s consider the submit button. Previously, each time a user clicked the button, it had to validate the values of all individual form elements. Now its single job is to notify the dialog about the click. Upon receiving this notification, the dialog itself performs the validations or passes the task to the individual elements. Thus, instead of being tied to a dozen form elements, the button is only dependent on the dialog class.

You can go further and make the dependency even looser by extracting the common interface for all types of dialogs. The interface would declare the notification method which all form elements can use to notify the dialog about events happening to those elements. Thus, our submit button should now be able to work with any dialog that implements that interface.

This way, the Mediator pattern lets you encapsulate a complex web of relations between various objects inside a single mediator object. The fewer dependencies a class has, the easier it becomes to modify, extend or reuse that class.

<!-- ExplanationEnd -->
<!--ID: 1738239852092-->
END

---

START
FIT-Card

Jaká je struktura **Mediator** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130111915.png)

1. **Components** are various classes that contain some business logic. Each component has a reference to a mediator, declared with the type of the mediator interface. The component isn’t aware of the actual class of the mediator, so you can reuse the component in other programs by linking it to a different mediator.
2. The **Mediator** interface declares methods of communication with components, which usually include just a single notification method. Components may pass any context as arguments of this method, including their own objects, but only in such a way that no coupling occurs between a receiving component and the sender’s class.
3. **Concrete Mediators** encapsulate relations between various components. Concrete mediators often keep references to all components they manage and sometimes even manage their lifecycle.
4. Components must not be aware of other components. If something important happens within or to a component, it must only notify the mediator. When the mediator receives the notification, it can easily identify the sender, which might be just enough to decide what component should be triggered in return.
	- From a component’s perspective, it all looks like a total black box. The sender doesn’t know who’ll end up handling its request, and the receiver doesn’t know who sent the request in the first place.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130111934.png)
<!-- ExampleEnd -->
<!--ID: 1738239852094-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Mediator** design patternu? (4 + 1)

Back:

✅ _Single Responsibility Principle_. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.

✅ _Open/Closed Principle_. You can introduce new mediators without having to change the actual components.

✅ You can reduce coupling between various components of a program.

✅ You can reuse individual components more easily.

❌ Over time a mediator can evolve into a [God Object](https://courses.fit.cvut.cz/antipatterns/god-object).
<!--ID: 1738239852097-->
END

---


### Memento

START
FIT-Card

K čemu slouží **Memento** design pattern?

Back:

**Memento** is a behavioral design pattern that lets you save and restore the previous state of an object without revealing the details of its implementation.

![](../../Assets/Pasted%20image%2020250130112002.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re creating a text editor app. In addition to simple text editing, your editor can format text, insert inline images, etc.

At some point, you decided to let users undo any operations carried out on the text. This feature has become so common over the years that nowadays people expect every app to have it. For the implementation, you chose to take the direct approach. Before performing any operation, the app records the state of all objects and saves it in some storage. Later, when a user decides to revert an action, the app fetches the latest snapshot from the history and uses it to restore the state of all objects.

![](../../Assets/Pasted%20image%2020250130112019.png)

Let’s think about those state snapshots. How exactly would you produce one? You’d probably need to go over all the fields in an object and copy their values into storage. However, this would only work if the object had quite relaxed access restrictions to its contents. Unfortunately, most real objects won’t let others peek inside them that easily, hiding all significant data in private fields.

Ignore that problem for now and let’s assume that our objects behave like hippies: preferring open relations and keeping their state public. While this approach would solve the immediate problem and let you produce snapshots of objects’ states at will, it still has some serious issues. In the future, you might decide to refactor some of the editor classes, or add or remove some of the fields. Sounds easy, but this would also require changing the classes responsible for copying the state of the affected objects.

![](../../Assets/Pasted%20image%2020250130112023.png)

But there’s more. Let’s consider the actual “snapshots” of the editor’s state. What data does it contain? At a bare minimum, it must contain the actual text, cursor coordinates, current scroll position, etc. To make a snapshot, you’d need to collect these values and put them into some kind of container.

Most likely, you’re going to store lots of these container objects inside some list that would represent the history. Therefore the containers would probably end up being objects of one class. The class would have almost no methods, but lots of fields that mirror the editor’s state. To allow other objects to write and read data to and from a snapshot, you’d probably need to make its fields public. That would expose all the editor’s states, private or not. Other classes would become dependent on every little change to the snapshot class, which would otherwise happen within private fields and methods without affecting outer classes.

It looks like we’ve reached a dead end: you either expose all internal details of classes, making them too fragile, or restrict access to their state, making it impossible to produce snapshots. Is there any other way to implement the “undo”?

**SOLUTION:**
All problems that we’ve just experienced are caused by broken encapsulation. Some objects try to do more than they are supposed to. To collect the data required to perform some action, they invade the private space of other objects instead of letting these objects perform the actual action.

The Memento pattern delegates creating the state snapshots to the actual owner of that state, the _originator_ object. Hence, instead of other objects trying to copy the editor’s state from the “outside,” the editor class itself can make the snapshot since it has full access to its own state.

The pattern suggests storing the copy of the object’s state in a special object called _memento_. The contents of the memento aren’t accessible to any other object except the one that produced it. Other objects must communicate with mementos using a limited interface which may allow fetching the snapshot’s metadata (creation time, the name of the performed operation, etc.), but not the original object’s state contained in the snapshot.

![](../../Assets/Pasted%20image%2020250130112039.png)

Such a restrictive policy lets you store mementos inside other objects, usually called _caretakers_. Since the caretaker works with the memento only via the limited interface, it’s not able to tamper with the state stored inside the memento. At the same time, the originator has access to all fields inside the memento, allowing it to restore its previous state at will.

In our text editor example, we can create a separate history class to act as the caretaker. A stack of mementos stored inside the caretaker will grow each time the editor is about to execute an operation. You could even render this stack within the app’s UI, displaying the history of previously performed operations to a user.

When a user triggers the undo, the history grabs the most recent memento from the stack and passes it back to the editor, requesting a roll-back. Since the editor has full access to the memento, it changes its own state with the values taken from the memento.

<!-- ExplanationEnd -->
<!--ID: 1738239852099-->
END

---

START
FIT-Card

Jaká je struktura **Memento** design patternu - **Implementation based on nested classes**?

Back:

The classic implementation of the pattern relies on support for nested classes, available in many popular programming languages (such as C++, C#, and Java).
![](../../Assets/Pasted%20image%2020250130112125.png)

1. The **Originator** class can produce snapshots of its own state, as well as restore its state from snapshots when needed.
2. The **Memento** is a value object that acts as a snapshot of the originator’s state. It’s a common practice to make the memento immutable and pass it the data only once, via the constructor.
3. The **Caretaker** knows not only “when” and “why” to capture the originator’s state, but also when the state should be restored.
	- A caretaker can keep track of the originator’s history by storing a stack of mementos. When the originator has to travel back in history, the caretaker fetches the topmost memento from the stack and passes it to the originator’s restoration method.
4. In this implementation, the memento class is nested inside the originator. This lets the originator access the fields and methods of the memento, even though they’re declared private. On the other hand, the caretaker has very limited access to the memento’s fields and methods, which lets it store mementos in a stack but not tamper with their state.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130112208.png)
<!-- ExampleEnd -->
<!--ID: 1738239852102-->
END

---


START
FIT-Card

Jaká je struktura **Memento** design patternu - **Implementation based on an intermediate interface**?

Back:

There’s an alternative implementation, suitable for programming languages that don’t support nested classes (yeah, PHP, I’m talking about you).

![](../../Assets/Pasted%20image%2020250130112242.png)

1. In the absence of nested classes, you can restrict access to the memento’s fields by establishing a convention that caretakers can work with a memento only through an explicitly declared intermediary interface, which would only declare methods related to the memento’s metadata.
2. On the other hand, originators can work with a memento object directly, accessing fields and methods declared in the memento class. The downside of this approach is that you need to declare all members of the memento public.
<!--ID: 1738239852105-->
END

---

START
FIT-Card

Jaká je struktura **Memento** design patternu - **Implementation with even stricter encapsulation**?

Back:

There’s another implementation which is useful when you don’t want to leave even the slightest chance of other classes accessing the state of the originator through the memento.

![](../../Assets/Pasted%20image%2020250130112308.png)

1. This implementation allows having multiple types of originators and mementos. Each originator works with a corresponding memento class. Neither originators nor mementos expose their state to anyone.
2. Caretakers are now explicitly restricted from changing the state stored in mementos. Moreover, the caretaker class becomes independent from the originator because the restoration method is now defined in the memento class.
3. Each memento becomes linked to the originator that produced it. The originator passes itself to the memento’s constructor, along with the values of its state. Thanks to the close relationship between these classes, a memento can restore the state of its originator, given that the latter has defined the appropriate setters.
<!--ID: 1738239852107-->
END

---


START
FIT-Card

Jaké jsou výhody a nevýhody **Memento** design patternu? (2 + 3)

Back:

✅ You can produce snapshots of the object’s state without violating its encapsulation.

✅ You can simplify the originator’s code by letting the caretaker maintain the history of the originator’s state.

❌ The app might consume lots of RAM if clients create mementos too often.

❌ Caretakers should track the originator’s lifecycle to be able to destroy obsolete mementos.

❌ Most dynamic programming languages, such as PHP, Python and JavaScript, can’t guarantee that the state within the memento stays untouched.
<!--ID: 1738239852110-->
END

---


### Observer

START
FIT-Card

K čemu slouží **Observer** design pattern?

Back:

**Observer** is a behavioral design pattern that lets you define a subscription mechanism to notify multiple objects about any events that happen to the object they’re observing.

![](../../Assets/Pasted%20image%2020250130112355.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you have two types of objects: a `Customer` and a `Store`. The customer is very interested in a particular brand of product (say, it’s a new model of the iPhone) which should become available in the store very soon.

The customer could visit the store every day and check product availability. But while the product is still en route, most of these trips would be pointless.

![](../../Assets/Pasted%20image%2020250130112404.png)

On the other hand, the store could send tons of emails (which might be considered spam) to all customers each time a new product becomes available. This would save some customers from endless trips to the store. At the same time, it’d upset other customers who aren’t interested in new products.

It looks like we’ve got a conflict. Either the customer wastes time checking product availability or the store wastes resources notifying the wrong customers.

**SOLUTION:**
The object that has some interesting state is often called _subject_, but since it’s also going to notify other objects about the changes to its state, we’ll call it _publisher_. All other objects that want to track changes to the publisher’s state are called _subscribers_.

The Observer pattern suggests that you add a subscription mechanism to the publisher class so individual objects can subscribe to or unsubscribe from a stream of events coming from that publisher. Fear not! Everything isn’t as complicated as it sounds. In reality, this mechanism consists of 1) an array field for storing a list of references to subscriber objects and 2) several public methods which allow adding subscribers to and removing them from that list.

![](../../Assets/Pasted%20image%2020250130112416.png)

Now, whenever an important event happens to the publisher, it goes over its subscribers and calls the specific notification method on their objects.

Real apps might have dozens of different subscriber classes that are interested in tracking events of the same publisher class. You wouldn’t want to couple the publisher to all of those classes. Besides, you might not even know about some of them beforehand if your publisher class is supposed to be used by other people.

That’s why it’s crucial that all subscribers implement the same interface and that the publisher communicates with them only via that interface. This interface should declare the notification method along with a set of parameters that the publisher can use to pass some contextual data along with the notification.

![](../../Assets/Pasted%20image%2020250130112420.png)

If your app has several different types of publishers and you want to make your subscribers compatible with all of them, you can go even further and make all publishers follow the same interface. This interface would only need to describe a few subscription methods. The interface would allow subscribers to observe publishers’ states without coupling to their concrete classes.

<!-- ExplanationEnd -->
<!--ID: 1738239852113-->
END

---

START
FIT-Card

Jaká je struktura **Observer** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112426.png)

1. The **Publisher** issues events of interest to other objects. These events occur when the publisher changes its state or executes some behaviors. Publishers contain a subscription infrastructure that lets new subscribers join and current subscribers leave the list.
2. When a new event happens, the publisher goes over the subscription list and calls the notification method declared in the subscriber interface on each subscriber object.
3. The **Subscriber** interface declares the notification interface. In most cases, it consists of a single `update` method. The method may have several parameters that let the publisher pass some event details along with the update.
4. **Concrete Subscribers** perform some actions in response to notifications issued by the publisher. All of these classes must implement the same interface so the publisher isn’t coupled to concrete classes.
5. Usually, subscribers need some contextual information to handle the update correctly. For this reason, publishers often pass some context data as arguments of the notification method. The publisher can pass itself as an argument, letting subscriber fetch any required data directly.
6. The **Client** creates publisher and subscriber objects separately and then registers subscribers for publisher updates.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130112440.png)
<!-- ExampleEnd -->
<!--ID: 1738239852116-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Observer** design patternu? (2 + 1)

Back:

✅ _Open/Closed Principle_. You can introduce new subscriber classes without having to change the publisher’s code (and vice versa if there’s a publisher interface).

✅ You can establish relations between objects at runtime.

❌ Subscribers are notified in random order.
<!--ID: 1738239852123-->
END

---


### State

START
FIT-Card

K čemu slouží **State** design pattern?

Back:

**State** is a behavioral design pattern that lets an object alter its behavior when its internal state changes. It appears as if the object changed its class.

![](../../Assets/Pasted%20image%2020250130112522.png)

<!-- ExplanationStart -->
**PROBLEM:**
The State pattern is closely related to the concept of a _Finite-State Machine_.

![](../../Assets/Pasted%20image%2020250130112600.png)

The main idea is that, at any given moment, there’s a _finite_ number of _states_ which a program can be in. Within any unique state, the program behaves differently, and the program can be switched from one state to another instantaneously. However, depending on a current state, the program may or may not switch to certain other states. These switching rules, called _transitions_, are also finite and predetermined.

You can also apply this approach to objects. Imagine that we have a `Document` class. A document can be in one of three states: `Draft`, `Moderation` and `Published`. The `publish` method of the document works a little bit differently in each state:

- In `Draft`, it moves the document to moderation.
- In `Moderation`, it makes the document public, but only if the current user is an administrator.
- In `Published`, it doesn’t do anything at all.

![](../../Assets/Pasted%20image%2020250130112605.png)

State machines are usually implemented with lots of conditional statements (`if` or `switch`) that select the appropriate behavior depending on the current state of the object. Usually, this “state” is just a set of values of the object’s fields. Even if you’ve never heard about finite-state machines before, you’ve probably implemented a state at least once. Does the following code structure ring a bell?

```scala
class Document is
    field state: string
    // ...
    method publish() is
        switch (state)
            "draft":
                state = "moderation"
                break
            "moderation":
                if (currentUser.role == "admin")
                    state = "published"
                break
            "published":
                // Do nothing.
                break
    // ...
```

The biggest weakness of a state machine based on conditionals reveals itself once we start adding more and more states and state-dependent behaviors to the `Document` class. Most methods will contain monstrous conditionals that pick the proper behavior of a method according to the current state. Code like this is very difficult to maintain because any change to the transition logic may require changing state conditionals in every method.

The problem tends to get bigger as a project evolves. It’s quite difficult to predict all possible states and transitions at the design stage. Hence, a lean state machine built with a limited set of conditionals can grow into a bloated mess over time.

**SOLUTION:**
The State pattern suggests that you create new classes for all possible states of an object and extract all state-specific behaviors into these classes.

Instead of implementing all behaviors on its own, the original object, called _context_, stores a reference to one of the state objects that represents its current state, and delegates all the state-related work to that object.

![](../../Assets/Pasted%20image%2020250130112627.png)

To transition the context into another state, replace the active state object with another object that represents that new state. This is possible only if all state classes follow the same interface and the context itself works with these objects through that interface.

This structure may look similar to the [Strategy](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/strategy.html) pattern, but there’s one key difference. In the State pattern, the particular states may be aware of each other and initiate transitions from one state to another, whereas strategies almost never know about each other.

<!-- ExplanationEnd -->
<!--ID: 1738239852127-->
END

---

START
FIT-Card

Jaká je struktura **State** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112635.png)

1. **Context** stores a reference to one of the concrete state objects and delegates to it all state-specific work. The context communicates with the state object via the state interface. The context exposes a setter for passing it a new state object.
2. The **State** interface declares the state-specific methods. These methods should make sense for all concrete states because you don’t want some of your states to have useless methods that will never be called.
3. **Concrete States** provide their own implementations for the state-specific methods. To avoid duplication of similar code across multiple states, you may provide intermediate abstract classes that encapsulate some common behavior.
	- State objects may store a backreference to the context object. Through this reference, the state can fetch any required info from the context object, as well as initiate state transitions.
4. Both context and concrete states can set the next state of the context and perform the actual state transition by replacing the state object linked to the context.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130112651.png)
<!-- ExampleEnd -->
<!--ID: 1738239852130-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **State** design patternu? (3 + 1)

Back:

✅ _Single Responsibility Principle_. Organize the code related to particular states into separate classes.

✅ _Open/Closed Principle_. Introduce new states without changing existing state classes or the context.

✅ Simplify the code of the context by eliminating bulky state machine conditionals.

❌ Applying the pattern can be overkill if a state machine has only a few states or rarely changes.
<!--ID: 1738239852132-->
END

---


### Strategy

START
FIT-Card

K čemu slouží **Strategy** design pattern?

Back:

**Strategy** is a behavioral design pattern that lets you define a family of algorithms, put each of them into a separate class, and make their objects interchangeable.

![](../../Assets/Pasted%20image%2020250130112736.png)

<!-- ExplanationStart -->
**PROBLEM:**
One day you decided to create a navigation app for casual travelers. The app was centered around a beautiful map which helped users quickly orient themselves in any city.

One of the most requested features for the app was automatic route planning. A user should be able to enter an address and see the fastest route to that destination displayed on the map.

The first version of the app could only build the routes over roads. People who traveled by car were bursting with joy. But apparently, not everybody likes to drive on their vacation. So with the next update, you added an option to build walking routes. Right after that, you added another option to let people use public transport in their routes.

However, that was only the beginning. Later you planned to add route building for cyclists. And even later, another option for building routes through all of a city’s tourist attractions.

![](../../Assets/Pasted%20image%2020250130112746.png)

While from a business perspective the app was a success, the technical part caused you many headaches. Each time you added a new routing algorithm, the main class of the navigator doubled in size. At some point, the beast became too hard to maintain.

Any change to one of the algorithms, whether it was a simple bug fix or a slight adjustment of the street score, affected the whole class, increasing the chance of creating an error in already-working code.

In addition, teamwork became inefficient. Your teammates, who had been hired right after the successful release, complain that they spend too much time resolving merge conflicts. Implementing a new feature requires you to change the same huge class, conflicting with the code produced by other people.

**SOLUTION:**
The Strategy pattern suggests that you take a class that does something specific in a lot of different ways and extract all of these algorithms into separate classes called _strategies_.

The original class, called _context_, must have a field for storing a reference to one of the strategies. The context delegates the work to a linked strategy object instead of executing it on its own.

The context isn’t responsible for selecting an appropriate algorithm for the job. Instead, the client passes the desired strategy to the context. In fact, the context doesn’t know much about strategies. It works with all strategies through the same generic interface, which only exposes a single method for triggering the algorithm encapsulated within the selected strategy.

This way the context becomes independent of concrete strategies, so you can add new algorithms or modify existing ones without changing the code of the context or other strategies.

![](../../Assets/Pasted%20image%2020250130112758.png)

In our navigation app, each routing algorithm can be extracted to its own class with a single `buildRoute` method. The method accepts an origin and destination and returns a collection of the route’s checkpoints.

Even though given the same arguments, each routing class might build a different route, the main navigator class doesn’t really care which algorithm is selected since its primary job is to render a set of checkpoints on the map. The class has a method for switching the active routing strategy, so its clients, such as the buttons in the user interface, can replace the currently selected routing behavior with another one.

<!-- ExplanationEnd -->
<!--ID: 1738239852134-->
END

---

START
FIT-Card

Jaká je struktura **Strategy** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130112811.png)

1. The **Context** maintains a reference to one of the concrete strategies and communicates with this object only via the strategy interface.
2. The **Strategy** interface is common to all concrete strategies. It declares a method the context uses to execute a strategy.
3. **Concrete Strategies** implement different variations of an algorithm the context uses.
4. The context calls the execution method on the linked strategy object each time it needs to run the algorithm. The context doesn’t know what type of strategy it works with or how the algorithm is executed.
5. The **Client** creates a specific strategy object and passes it to the context. The context exposes a setter which lets clients replace the strategy associated with the context at runtime.
<!--ID: 1738239852137-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Strategy** design patternu? (4 + 3)

Back:

✅ You can swap algorithms used inside an object at runtime.

✅ You can isolate the implementation details of an algorithm from the code that uses it.

✅ You can replace inheritance with composition.

✅ _Open/Closed Principle_. You can introduce new strategies without having to change the context.

❌ If you only have a couple of algorithms and they rarely change, there’s no real reason to overcomplicate the program with new classes and interfaces that come along with the pattern.

❌ Clients must be aware of the differences between strategies to be able to select a proper one.

❌ A lot of modern programming languages have functional type support that lets you implement different versions of an algorithm inside a set of anonymous functions. Then you could use these functions exactly as you’d have used the strategy objects, but without bloating your code with extra classes and interfaces.
<!--ID: 1738239852140-->
END

---

### Template Method

START
FIT-Card

K čemu slouží **Template Method** design pattern?

Back:

**Template Method** is a behavioral design pattern that defines the skeleton of an algorithm in the superclass but lets subclasses override specific steps of the algorithm without changing its structure.

![](../../Assets/Pasted%20image%2020250130112928.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that you’re creating a data mining application that analyzes corporate documents. Users feed the app documents in various formats (PDF, DOC, CSV), and it tries to extract meaningful data from these docs in a uniform format.

The first version of the app could work only with DOC files. In the following version, it was able to support CSV files. A month later, you “taught” it to extract data from PDF files.

![](../../Assets/Pasted%20image%2020250130112940.png)

At some point, you noticed that all three classes have a lot of similar code. While the code for dealing with various data formats was entirely different in all classes, the code for data processing and analysis is almost identical. Wouldn’t it be great to get rid of the code duplication, leaving the algorithm structure intact?

There was another problem related to client code that used these classes. It had lots of conditionals that picked a proper course of action depending on the class of the processing object. If all three processing classes had a common interface or a base class, you’d be able to eliminate the conditionals in client code and use polymorphism when calling methods on a processing object.

**SOLUTION:**
The Template Method pattern suggests that you break down an algorithm into a series of steps, turn these steps into methods, and put a series of calls to these methods inside a single _template method._ The steps may either be `abstract`, or have some default implementation. To use the algorithm, the client is supposed to provide its own subclass, implement all abstract steps, and override some of the optional ones if needed (but not the template method itself).

Let’s see how this will play out in our data mining app. We can create a base class for all three parsing algorithms. This class defines a template method consisting of a series of calls to various document-processing steps.

![](../../Assets/Pasted%20image%2020250130112958.png)

At first, we can declare all steps `abstract`, forcing the subclasses to provide their own implementations for these methods. In our case, subclasses already have all necessary implementations, so the only thing we might need to do is adjust signatures of the methods to match the methods of the superclass.

Now, let’s see what we can do to get rid of the duplicate code. It looks like the code for opening/closing files and extracting/parsing data is different for various data formats, so there’s no point in touching those methods. However, implementation of other steps, such as analyzing the raw data and composing reports, is very similar, so it can be pulled up into the base class, where subclasses can share that code.

As you can see, we’ve got two types of steps:

- _abstract steps_ must be implemented by every subclass
- _optional steps_ already have some default implementation, but still can be overridden if needed

There’s another type of step, called _hooks_. A hook is an optional step with an empty body. A template method would work even if a hook isn’t overridden. Usually, hooks are placed before and after crucial steps of algorithms, providing subclasses with additional extension points for an algorithm.

<!-- ExplanationEnd -->
<!--ID: 1738239852142-->
END

---

START
FIT-Card

Jaká je struktura **Template Method** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113005.png)

1. The **Abstract Class** declares methods that act as steps of an algorithm, as well as the actual template method which calls these methods in a specific order. The steps may either be declared `abstract` or have some default implementation.
2. **Concrete Classes** can override all of the steps, but not the template method itself.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130113014.png)
<!-- ExampleEnd -->
<!--ID: 1738239852145-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Template Method** design patternu? (2 + 3)

Back:

✅ You can let clients override only certain parts of a large algorithm, making them less affected by changes that happen to other parts of the algorithm.

✅ You can pull the duplicate code into a superclass.

❌ Some clients may be limited by the provided skeleton of an algorithm.

❌ You might violate the _Liskov Substitution Principle_ by suppressing a default step implementation via a subclass.

❌ Template methods tend to be harder to maintain the more steps they have.
<!--ID: 1738239852147-->
END

---


### Visitor

START
FIT-Card

K čemu slouží **Visitor** design pattern?

Back:

**Visitor** is a behavioral design pattern that lets you separate algorithms from the objects on which they operate.

![](../../Assets/Pasted%20image%2020250130113142.png)

<!-- ExplanationStart -->
**PROBLEM:**
Imagine that your team develops an app which works with geographic information structured as one colossal graph. Each node of the graph may represent a complex entity such as a city, but also more granular things like industries, sightseeing areas, etc. The nodes are connected with others if there’s a road between the real objects that they represent. Under the hood, each node type is represented by its own class, while each specific node is an object.

![](../../Assets/Pasted%20image%2020250130113159.png)

At some point, you got a task to implement exporting the graph into XML format. At first, the job seemed pretty straightforward. You planned to add an export method to each node class and then leverage recursion to go over each node of the graph, executing the export method. The solution was simple and elegant: thanks to polymorphism, you weren’t coupling the code which called the export method to concrete classes of nodes.

Unfortunately, the system architect refused to allow you to alter existing node classes. He said that the code was already in production and he didn’t want to risk breaking it because of a potential bug in your changes.

![](../../Assets/Pasted%20image%2020250130113203.png)

Besides, he questioned whether it makes sense to have the XML export code within the node classes. The primary job of these classes was to work with geodata. The XML export behavior would look alien there.

There was another reason for the refusal. It was highly likely that after this feature was implemented, someone from the marketing department would ask you to provide the ability to export into a different format, or request some other weird stuff. This would force you to change those precious and fragile classes again.

**SOLUTION:**
The Visitor pattern suggests that you place the new behavior into a separate class called _visitor_, instead of trying to integrate it into existing classes. The original object that had to perform the behavior is now passed to one of the visitor’s methods as an argument, providing the method access to all necessary data contained within the object.

Now, what if that behavior can be executed over objects of different classes? For example, in our case with XML export, the actual implementation will probably be a little bit different across various node classes. Thus, the visitor class may define not one, but a set of methods, each of which could take arguments of different types, like this:

```javascript
class ExportVisitor implements Visitor is
    method doForCity(City c) { ... }
    method doForIndustry(Industry f) { ... }
    method doForSightSeeing(SightSeeing ss) { ... }
    // ...
```

But how exactly would we call these methods, especially when dealing with the whole graph? These methods have different signatures, so we can’t use polymorphism. To pick a proper visitor method that’s able to process a given object, we’d need to check its class. Doesn’t this sound like a nightmare?

```javascript
foreach (Node node in graph)
    if (node instanceof City)
        exportVisitor.doForCity((City) node)
    if (node instanceof Industry)
        exportVisitor.doForIndustry((Industry) node)
    // ...
}
```

You might ask, why don’t we use method overloading? That’s when you give all methods the same name, even if they support different sets of parameters. Unfortunately, even assuming that our programming language supports it at all (as Java and C# do), it won’t help us. Since the exact class of a node object is unknown in advance, the overloading mechanism won’t be able to determine the correct method to execute. It’ll default to the method that takes an object of the base `Node` class.

However, the Visitor pattern addresses this problem. It uses a technique called [Double Dispatch](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/visitor-double-dispatch.html), which helps to execute the proper method on an object without cumbersome conditionals. Instead of letting the client select a proper version of the method to call, how about we delegate this choice to objects we’re passing to the visitor as an argument? Since the objects know their own classes, they’ll be able to pick a proper method on the visitor less awkwardly. They “accept” a visitor and tell it what visiting method should be executed.

```javascript
// Client code
foreach (Node node in graph)
    node.accept(exportVisitor)

// City
class City is
    method accept(Visitor v) is
        v.doForCity(this)
    // ...

// Industry
class Industry is
    method accept(Visitor v) is
        v.doForIndustry(this)
    // ...
```

I confess. We had to change the node classes after all. But at least the change is trivial and it lets us add further behaviors without altering the code once again.

Now, if we extract a common interface for all visitors, all existing nodes can work with any visitor you introduce into the app. If you find yourself introducing a new behavior related to nodes, all you have to do is implement a new visitor class.

<!-- ExplanationEnd -->
<!--ID: 1738239852150-->
END

---

START
FIT-Card

Jaká je struktura **Visitor** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130113211.png)

1. The **Visitor** interface declares a set of visiting methods that can take concrete elements of an object structure as arguments. These methods may have the same names if the program is written in a language that supports overloading, but the type of their parameters must be different.
2. Each **Concrete Visitor** implements several versions of the same behaviors, tailored for different concrete element classes.
3. The **Element** interface declares a method for “accepting” visitors. This method should have one parameter declared with the type of the visitor interface.
4. Each **Concrete Element** must implement the acceptance method. The purpose of this method is to redirect the call to the proper visitor’s method corresponding to the current element class. Be aware that even if a base element class implements this method, all subclasses must still override this method in their own classes and call the appropriate method on the visitor object.
5. The **Client** usually represents a collection or some other complex object (for example, a [Composite](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/structural-patterns/composite.html) tree). Usually, clients aren’t aware of all the concrete element classes because they work with objects from that collection via some abstract interface.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250130113259.png)
<!-- ExampleEnd -->
<!--ID: 1738239852152-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Visitor** design patternu? (3 + 2)

Back:

✅ _Open/Closed Principle_. You can introduce a new behavior that can work with objects of different classes without changing these classes.

✅ _Single Responsibility Principle_. You can move multiple versions of the same behavior into the same class.

✅ A visitor object can accumulate some useful information while working with various objects. This might be handy when you want to traverse some complex object structure, such as an object tree, and apply the visitor to each object of this structure.

❌ You need to update all visitors each time a class gets added to or removed from the element hierarchy.

❌ Visitors might lack the necessary access to the private fields and methods of the elements that they’re supposed to work with.
<!--ID: 1738239852155-->
END

---

## Architektonické vzory
### MVC

START
FIT-Card

K čemu slouží **MVC** architektura?

Back:

**Model - View - Controller**

MVC can be used as design pattern as well as architecture. First it appeared as design patters when first GUI appeared. Later it became popular and people started to use the idea in “bigger picture” so it became architecture as well.

Basic idea is to split code into three parts based on their responsibilities:

- **Model**
- **View**
- **Controller**

![](../../Assets/Pasted%20image%2020250130115027.png)

<!-- ExplanationStart -->
Nowadays it’s hard to find out, which implementation of this design pattern/architecture is correct because everyone all over the world is “bending” it to his/her needs. No matter what, the idea stays the same and that is [Separation of Concerns](https://courses.fit.cvut.cz/NI-ADP/materials/design-principles/soc.html), loose coupling and high cohesion, etc.

![](../../Assets/Pasted%20image%2020250130115054.png)

**Model**

Model handles business part of application. It verifies data if they doesn’t break any rule (if they are valid). Model contains main logic so if we make changes in GUI part of application, it won’t affect business logic hence it won’t break core functionality.

**Controller**

Controller’s responsibility is handling user input and updating **Model**.

This part of application is responsible for handling user’s input and updating model.

**View**

This layer contains displaying logic. Typically it’s GUI but it doesn’t have to be. It could be just some interface user can communicate with.

<!-- ExplanationEnd -->
<!--ID: 1738239852157-->
END

---

START
FIT-Card

Jaká je struktura **MVC** architektury? (2 možnosti)

Back:

**Možnost 1:**
One way how MVC can be implemented is that **Controller** updates **View** when changes has been made.
![](../../Assets/Pasted%20image%2020250130115125.png)

**Možnost 2:**
Another way of implementation MVC is with **Model** telling **View** to update when changes has been made. This implementation usually uses [Observer pattern](https://courses.fit.cvut.cz/NI-ADP/materials/design-patterns/behavioral-patterns/observer.html), so **View** which is subscribed to **Model** gets updates whenever it is required.

![](../../Assets/Pasted%20image%2020250130115146.png)
<!--ID: 1738239852159-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **MVC** architektury? (3 + 1)

Back:

✅ Application is structured, so it is easier to read and maintain code.

✅ Business logic is separated from view logic. That allows us to change view logic without interfering/breaking core logic of application.

✅ We can have multiple **Views** for one **Model** and **Controller**.

❌ Tight coupling of **View** and **Controller**. That makes testing harder.
<!--ID: 1738239852162-->
END

---

### MVP

START
FIT-Card

K čemu slouží **MVP** architektura?

Back:

**Model - View - Presenter**

Model View Presenter (MVP) is an evolution of the traditional Model View Controller (MVC) to improve the separation of concerns and facilitate the automatic unit testing.

The typical interactions taking place in MVP architecture can be understood through the following:
![](../../Assets/Pasted%20image%2020250130115225.png)

<!-- ExplanationStart -->
**Model**
The model is an interface defining the data to be displayed or otherwise acted upon in the user interface. Model is the data layer which is responsible for handling the business logic and for the communication with the network and database layers. Model’s responsibilities include using APIs, caching data, managing databases and so on.

**Presenter**
The Presenter is responsible to act as the middleman between View and Model. It retrieves data from the Model and returns it formatted to the View. But unlike the typical MVC, it also decides what happens when you interact with the View. Due to this, the view and presenter work closely together, they need to have a reference to one another. Thus, the relationship between the Presenter and its corresponding View is defined in an interface. The Presenter is also decoupled directly from the View and talks to it through this interface. This is to allow mocking of the View and Presenter in a unit test.

**View**
The only thing that the view will do is to call a method from the Presenter every time there is an interface action. It is only responsible for presenting data in a way decided by the presenter. The functionality of view is typically reduced to a minimum such as simple validation, and it’s made as a passive component, by moving the business logic to the presenter. The view is also shielded from the model by delegating all the interaction to happen through the middleman presenter.

<!-- ExplanationEnd -->
<!--ID: 1738239852164-->
END

---

START
FIT-Card

Jaké jsou výhody **MVP** architektury? (3)

Back:

- Clear separation of responsibilities between components. This separation allows for an easier understanding and maintenance of the code base.
- Modularity. Modularity allows you to e.g. switch to a different implementation of view component in order to completely change application’s UI, while all other components remain intact.
- Easier testing. Since there are well defined boundaries between components, it becomes much easier to test each component in isolation (by e.g. mocking other components).

![](../../Assets/Pasted%20image%2020250130115309.png)
![](../../Assets/Pasted%20image%2020250130115313.png)
<!--ID: 1738239852167-->
END

---


### MVVM

START
FIT-Card

K čemu slouží **MVVM** architektura?

Back:

**Model - View - ViewModel**

![](../../Assets/Pasted%20image%2020250130115455.png)

This architecture is more similar to [MVP](https://courses.fit.cvut.cz/NI-ADP/materials/architectures/MVP.html) rather than [MVC](https://courses.fit.cvut.cz/NI-ADP/materials/architectures/MVC.html). It separates **View** from **Model** and they both communicates only with **ViewModel**. In comparison with [MVP](https://courses.fit.cvut.cz/NI-ADP/materials/architectures/MVP.html), **ViewModel** doesn’t know anything about **View**. It just provides data for **View** in a way, that **View** can subscribe to them so it knows, when changes has been made and that it should re-render itself.
<!--ID: 1738239852169-->
END

---

START
FIT-Card

Jaká je struktura **MVVM** architektury?

Back:

For these regular updates are usually used:

- Reactive programming
- Data Binding

![](../../Assets/Pasted%20image%2020250130115516.png)

<!-- ExampleStart -->
This is example of **MVVM** how it is used in android programming.
![](../../Assets/Pasted%20image%2020250130115556.png)
<!-- ExampleEnd -->
<!--ID: 1738239852172-->
END

---


### Client-server

START
FIT-Card

K čemu slouží **Client-server** architektura?

Back:

In client-server architecture, the client and the server are typically connected over a network, such as the internet. The client initiates a request to the server, which can be a request for data or a request to perform an action. The server receives the request, processes it, and sends back a response.

![](../../Assets/Pasted%20image%2020250130115951.png)
<!--ID: 1738239852174-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Client-server** architektury? (2 + 1)

Back:

**Výhody**:
There are several benefits to using client-server architecture. One benefit is that it allows for a separation of concerns, with the client responsible for the user interface and the server responsible for the business logic and data storage. This makes it easier to develop and maintain the application, as changes to one side of the application do not affect the other.

Another benefit is that it allows for scalability. If the server is designed to handle multiple clients concurrently, it can handle an increased load by adding more hardware or by distributing the load across multiple servers.

**Nevýhody:**
There are also some challenges to using client-server architecture. One challenge is that it requires a network connection between the client and the server, which can introduce latency and other issues. Another challenge is that the server may be a single point of failure, meaning that if the server goes down, the entire application may become unavailable.
<!--ID: 1738239852177-->
END

---


START
FIT-Card

Kdy se používá **Client-Server architektura**? (4)

Back:

- **Web Applications**: Most modern web applications use client-server architecture. In this case, the client is typically a web browser, and the server is a web server that serves up HTML, CSS, and JavaScript to the client. The client sends requests to the server to retrieve data or perform actions, and the server responds with the appropriate data or result.
- **Desktop Applications**: In this case, the client is the desktop application running on the user’s computer, and the server is a remote server that stores data and performs backend tasks. The desktop application sends requests to the server to retrieve data or perform actions, and the server responds with the appropriate data or result.
- **Mobile Apps**: Same as desktop applications, only the client is the mobile app running on the user’s device.
- **Online Games**: Online games often use client-server architecture to support multiplayer gameplay. In this case, the client is the game running on the user’s device, and the server is a game server that manages the game world and handles communication between players.
<!--ID: 1738239852180-->
END

---

### Microservices vs monolithic server

??? O tomhle nic není v předmětu


### Asynchronous messaging

START
FIT-Card

K čemu slouží **Asynchronous messaging** architektura?

Back:

A layer that allows heterogenous components to asynchronously communicate despite their differences

- Usually realized by a Message-oriented middleware (MOM)
- A message is an item of data that is sent to a specific destination
- A message-driven system concentrates on addressable recipients

Tight coupling with Publish-subscribe architecture

![](../../Assets/Pasted%20image%2020250130124045.png)

<!-- ExampleStart -->
- **Java Messaging Service (JMS)**
    - Standard messaging API for JAVA platform
    - Interoperability is only within Java and JVM languages like Scala, Groovy
    - Does not worry about wire level protocol
    - Supports messaging models with queues and topics
    - Supports transactions
    - Defines the message format (headers, properties and body)
- **.Net Messaging Service**
    - MS alternative to support their platform and programming languages

![](../../Assets/Pasted%20image%2020250130124107.png)
<!-- ExampleEnd -->

<!--ID: 1738239852182-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Asynchronous messaging** architektury? (3 + 2)

Back:

**Pros**
- ability to store (buffer), route, or transform messages while conveying them from senders to receivers
- by adding an administrative interface, you can monitor and tune performance => the messaging system, not components, resolves issues like interoperability, reliability, security, scalability and performance
- messages storing solves intermittent connectivity and sender/receiver failure problems

**Cons**
- Bus/Broker maintenance
- Many inter-application communications have an intrinsically synchronous aspect => a need for facilities to group a request and a response as a single pseudo-synchronous transaction
<!--ID: 1738239852185-->
END

---


### Blackboard architecture

START
FIT-Card

K čemu slouží **Blackboard architecture**?

Back:

How to design a system that integrates large and diverse specialized modules, and implements complex, non-deterministic control strategy.

- Blackboard
    - a structured global memory containing objects from the solution space
- Knowledge sources (agents)
    - specialized modules with their own representation
- Control component
    - selects, configures and executes modules

<!-- ExampleStart -->
- Useful for problems for which NO deterministic solution strategies are known
- Several specialised sub-systems assemble their knowledge to build a possibly partial or approximate solution
- Domains:
    - speech recognition
    - OCR
    - protein structure identification
    - sonar signals interpretation

**StackOverflow**
_StackOverflow is pretty much a Blackboard system, with developers as agents, sharing their expert knowledge about the undetermined problems set on the board._

**Speech recognition**
- Procedures (knowledge sources)
    - A procedure divides the waveform into segments (phones)
    - Another procedure checks the syntax of candidate phrases
    - …
- There is no consistent algorithm that combines all the necessary procedures for recognising speech
- Problem = ambiguities of spoken language:
    - noisy data
    - peculiarities of speakers
    - vocabulary
    - pronunciation
    - syntax
![](../../Assets/Pasted%20image%2020250130124453.png)

<!-- ExampleEnd -->
<!--ID: 1738239852187-->
END

---

START
FIT-Card

Používá se **Blackboard architecture**?

Back:

Ne, už se to nepoužívá, protože to bylo špatně škálovatelné na tehdejších počítačích.

<!-- DetailInfoStart -->
- solution for designing and implementing complex systems where heterogeneous modules have to be dynamically combined to solve a complex problem
- offers non-functional properties such as: reusability, changeability, robustness.
- allows multiple agents to work closer together on separate threads, polling and reacting when necessary
- The pattern was abandoned in past because:
    - Did not scale well to real problems on the available computers of the time
    - Most problems using blackboards are inherently NP-hard, so resist tractable solution by any algorithm in the large size limit
    - Blackboard was outperformed by statistical pattern recognition techniques, most notably by simple Hidden Markov Models
<!-- DetailInfoEnd -->
<!--ID: 1738239852189-->
END

---

### Rule-based architecture

START
FIT-Card

K čemu slouží **Rule-based architecture** architektura?

Back:

Rule-based architectures provide a means of codifying the problem-solving knowhow of human experts.

- The basic features of a rule-based architecture are essentially the features of a table-driven interpreter:
    - The pseudo-code to be executed, in this case the knowledge base
    - The interpretation engine, in this case the rule interpreter, the heart of the inference engine
    - The control state of the interpretation engine, in this case the rule and data element selector
    - The current state of the program running on the virtual machine, in this case the working memory.

![](../../Assets/Pasted%20image%2020250130124714.png)

<!-- ExampleStart -->
**Biochemical models of living organisms**
- Groups of mutually corresponding substances are subject to mutually corresponding interactions.
- BioNetGen, a widely used tool for rule-based modeling of biochemical reactions. It includes a language to describe chemical substances, including the states they can assume and the bindings they can undergo. These rules can be used to create a reaction model or to perform computer simulations directly on the rule set.
- The biochemical modeling framework Virtual Cell includes a BioNetGen interpreter.

![](../../Assets/Pasted%20image%2020250130124758.png)
<!-- ExampleEnd -->

<!--ID: 1738239852192-->
END

---

START
FIT-Card

Jaká je struktura **Rule-based architecture** architektury?

Back:

- Knowledge is stored as rules in the rule-base (also known as the knowledge base).
    - Rules are of the form: `IF condition THEN action`.
- The condition tests working memory, e.g. for the presence of certain symbols or patterns of symbols.
    - conditions are expressed logically as conjunctions (occasionally, disjunctions) of predicates, in some systems, some conditions correspond to sensor data
- The action can be a change in working memory or an external operation supported by the interpreter.
- Interpreter performs the **match-resolve-act** cycle:
    - **Match**: In this first phase, the left-hand sides of all rules are matched against the contents of working memory. As a result a conflict set is obtained, which consists of instantiations of all satisfied rules.
        - An instantiation of a rule is an ordered list of working megnory elements that satisfies the left-hand side of the production.
    - **Conflict-Resolution**: In this second phase, one of the rule instantiations in the conflict set is chosen for execution. If no rules are satisfied, the interpreter halts.
    - **Act**: In this third phase, the actions of the rule selected in the conflict-resolution phase are executed. These actions may change the contents o% working memory. At the end of this phase, execution returns to the first phase.
<!--ID: 1738239852194-->
END

---

### Publish-subscribe

START
FIT-Card

K čemu slouží **Publish-subscribe** architektura?

Back:

Publishers categorize published messages. Subscribers express interest in messages from a category and only receive messages that are of interest, without knowledge of publishers.

- subscribers typically receive only a subset of the total messages published
- the process of selecting messages for reception and processing is called filtering

Tight coupling with Asynchronous messaging

![](../../Assets/Pasted%20image%2020250130124958.png)
<!--ID: 1738239852197-->
END

---

START
FIT-Card

Jaké jsou 2 topologie **Publish-subscribe** architektury?

Back:

**Bus/Broker**

- publishers post messages to an intermediary message broker or event bus
- subscribers register subscriptions with that broker
- the broker performs the filtering and routing
- the broker may prioritize messages in a queue before routing

**Data Distribution Service (DDS)**

- each publisher and subscriber in the pub/sub system shares meta-data about each other via IP multicast.
- the publisher and the subscribers cache this information locally and route messages based on the discovery of each other in the shared cognizance
<!--ID: 1738239852199-->
END

---

START
FIT-Card

Jaká je struktura **Publish-subscribe** architektury?

Back:

**Filtering forms**
- Topic-based
    - Messages are published to “topics” or named logical channels. The publisher is responsible for defining that.
    - Subscribers receive all messages published to the topics to which they subscribe.
    - All subscribers to a topic will receive the same messages.
- Content-based
    - Messages are only delivered to a subscriber if the attributes or content of those messages match constraints defined by the subscriber.
    - The subscriber is responsible for classifying the messages.
- Hybrid
    - Some systems support a hybrid of the two; publishers post messages to a topic while subscribers register content-based subscriptions. to one or more topics.

**Registration time**
- Build time
    - For example: in GUI systems, subscribers can be coded to handle user commands (e.g., click of a button)
- Initialization time
    - For example: there are frameworks and software products using XML configuration files to register subscribers during system initialization
- Runtime
    - For example: database triggers, mailing lists, and RSS
<!--ID: 1738239852202-->
END

---

START
FIT-Card

Jaké jsou nevýhody **publish-subscribe** architektury? (2)

Back:

- **Message delivery issues**
    - Publishing recipes by subscribers
- **Limited maximum scalability of a pub/sub network**
    - Load surges: periods when subscriber requests saturate network throughput followed by periods of low message volume (underutilized network bandwidth)
    - Slowdowns: as more and more applications use the system (even if they are communicating on separate pub/sub channels) the message volume flow to an individual subscriber will slow
<!--ID: 1738239852204-->
END

---

## Mimo státnice

### Design patterny

#### Marker interface
START
FIT-Card

Jak funguje **Marker interface** kdy bychom ho měli používat?

Back:

Marker interface is empty interface, so it doesn’t force user to implement anything. It is used to distinguish special treated object.

**Use the Marker Interface pattern when**

you want to identify the special objects from normal objects (to treat them differently) you want to mark that some object is available for certain sort of operations

```java
package java.io;

public interface Serializable {
}
```

Another example in Java is **Cloneable**.
<!--ID: 1738239852207-->
END

---

#### Multiton

START
FIT-Card

Jak funguje **Multiton**? Kdy se používá?

Back:

Multiton pattern ensures there are a predefined amount of instances available globally. It is generalization of **Singleton pattern.**

![](../../Assets/Pasted%20image%2020250130114744.png)

**Kdy se používá:**
There must be a specific number of instances of a class, and they must be accessible to clients from a well-known access point.
<!--ID: 1738239852209-->
END

---

### Architektury


START
FIT-Card

Jak funguje **Clean architecture** architektura?

Back:

This architecture is similar to lot of other architectures. They vary in details but main idea behind it stays the same, which is separation of concerns by dividing software into layers.

- **Independent of Frameworks.** The architecture does not depend on the existence of some library of feature laden software. This allows you to use such frameworks as tools, rather than having to cram your system into their limited constraints.
- **Testable.** The business rules can be tested without the UI, Database, Web Server, or any other external element.
- **Independent of UI.** The UI can change easily, without changing the rest of the system. A Web UI could be replaced with a console UI, for example, without changing the business rules.
- **Independent of Database.** You can swap out Oracle or SQL Server, for Mongo, BigTable, CouchDB, or something else. Your business rules are not bound to the database.
- **Independent of any external agency.** In fact your business rules simply don’t know anything at all about the outside world.

![](../../Assets/Pasted%20image%2020250130125527.png)

<!-- DetailInfoStart -->
**Dependency rule**

The concentric circles represent different areas of software. In general, the further in you go, the higher level the software becomes. The outer circles are mechanisms. The inner circles are policies.

The overriding rule that makes this architecture work is The Dependency Rule. This rule says that source code dependencies can only point inwards. Nothing in an inner circle can know anything at all about something in an outer circle. In particular, the name of something declared in an outer circle must not be mentioned by the code in the an inner circle. That includes, functions, classes. variables, or any other named software entity.

By the same token, data formats used in an outer circle should not be used by an inner circle, especially if those formats are generate by a framework in an outer circle. We don’t want anything in an outer circle to impact the inner circles.

**Entities**

Entities encapsulate Enterprise wide business rules. An entity can be an object with methods, or it can be a set of data structures and functions. It doesn’t matter so long as the entities could be used by many different applications in the enterprise.

If you don’t have an enterprise, and are just writing a single application, then these entities are the business objects of the application. They encapsulate the most general and high-level rules. They are the least likely to change when something external changes. For example, you would not expect these objects to be affected by a change to page navigation, or security. No operational change to any particular application should affect the entity layer.

**Use Cases**

The software in this layer contains application specific business rules. It encapsulates and implements all of the use cases of the system. These use cases orchestrate the flow of data to and from the entities, and direct those entities to use their enterprise wide business rules to achieve the goals of the use case.

We do not expect changes in this layer to affect the entities. We also do not expect this layer to be affected by changes to externalities such as the database, the UI, or any of the common frameworks. This layer is isolated from such concerns.

We do, however, expect that changes to the operation of the application will affect the use-cases and therefore the software in this layer. If the details of a use-case change, then some code in this layer will certainly be affected.

**Interface Adapters**

The software in this layer is a set of adapters that convert data from the format most convenient for the use cases and entities, to the format most convenient for some external agency such as the Database or the Web. It is this layer, for example, that will wholly contain the MVC architecture of a GUI. The Presenters, Views, and Controllers all belong in here. The models are likely just data structures that are passed from the controllers to the use cases, and then back from the use cases to the presenters and views.

Similarly, data is converted, in this layer, from the form most convenient for entities and use cases, into the form most convenient for whatever persistence framework is being used. i.e. The Database. No code inward of this circle should know anything at all about the database. If the database is a SQL database, then all the SQL should be restricted to this layer, and in particular to the parts of this layer that have to do with the database.

Also in this layer is any other adapter necessary to convert data from some external form, such as an external service, to the internal form used by the use cases and entities.

**Frameworks and Drivers**

The outermost layer is generally composed of frameworks and tools such as the Database, the Web Framework, etc. Generally you don’t write much code in this layer other than glue code that communicates to the next circle inwards.

This layer is where all the details go. The Web is a detail. The database is a detail. We keep these things on the outside where they can do little harm.

**Only Four Circles**

No, the circles are schematic. You may find that you need more than just these four. There’s no rule that says you must always have just these four. However, The Dependency Rule always applies. Source code dependencies always point inwards. As you move inwards the level of abstraction increases. The outermost circle is low level concrete detail. As you move inwards the software grows more abstract, and encapsulates higher level policies. The inner most circle is the most general.

**Crossing boundaries**

At the lower right of the diagram is an example of how we cross the circle boundaries. It shows the Controllers and Presenters communicating with the Use Cases in the next layer. Note the flow of control. It begins in the controller, moves through the use case, and then winds up executing in the presenter. Note also the source code dependencies. Each one of them points inwards towards the use cases.

We usually resolve this apparent contradiction by using the Dependency Inversion Principle. In a language like Java, for example, we would arrange interfaces and inheritance relationships such that the source code dependencies oppose the flow of control at just the right points across the boundary.

For example, consider that the use case needs to call the presenter. However, this call must not be direct because that would violate The Dependency Rule: No name in an outer circle can be mentioned by an inner circle. So we have the use case call an interface (Shown here as Use Case Output Port) in the inner circle, and have the presenter in the outer circle implement it.

The same technique is used to cross all the boundaries in the architectures. We take advantage of dynamic polymorphism to create source code dependencies that oppose the flow of control so that we can conform to The Dependency Rule no matter what direction the flow of control is going in.

**What data crosses the boundaries**

Typically the data that crosses the boundaries is simple data structures. You can use basic structs or simple Data Transfer objects if you like. Or the data can simply be arguments in function calls. Or you can pack it into a hashmap, or construct it into an object. The important thing is that isolated, simple, data structures are passed across the boundaries. We don’t want to cheat and pass Entities or Database rows. We don’t want the data structures to have any kind of dependency that violates The Dependency Rule.

For example, many database frameworks return a convenient data format in response to a query. We might call this a RowStructure. We don’t want to pass that row structure inwards across a boundary. That would violate The Dependency Rule because it would force an inner circle to know something about an outer circle.

So when we pass data across a boundary, it is always in the form that is most convenient for the inner circle.
<!-- DetailInfoEnd -->
<!--ID: 1738239852212-->
END

---

#### Peer-to-peer

START
FIT-Card

K čemu slouží **Peer-to-peer** architektura?

Back:

Peer-to-Peer (P2P) architecture is a decentralized network architecture where each participant (peer) shares a part of their resources such as processing power, storage space, or network bandwidth, directly with other network participants. This architecture is unique because it does not require a central server; instead, each peer acts both as a client and a server. This design allows for direct sharing of files, data, or resources between peers.

<!-- ExampleStart -->
1. **BitTorrent**: A popular file-sharing protocol that uses P2P for distributing large amounts of data.
2. **Bitcoin**: A well-known cryptocurrency that operates on a P2P network for transaction verification and ledger maintenance.
3. **Skype**: Utilizes P2P technology for voice and video calls.
<!-- ExampleEnd -->
<!--ID: 1738239852214-->
END

---


START
FIT-Card

Kdy se například používá **Peer-to-peer** architektura? (5)

Back:

1. **File Sharing**: One of the most common uses of P2P architecture is file sharing, where users can share and download files directly from each other’s computers. Examples include BitTorrent and Napster.
2. **Cryptocurrencies**: Cryptocurrencies like Bitcoin use a P2P network for processing transactions and maintaining a decentralized ledger.
3. **Grid Computing**: P2P can be used for grid computing where the processing power of several computers is combined to work on complex tasks.
4. **Communication**: Applications like Skype and VoIP services utilize P2P for direct peer-to-peer communication.
5. **Content Distribution**: P2P networks are used by content delivery networks (CDNs) to distribute large files efficiently.
<!--ID: 1738239852217-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Peer-to-peer** architektury? (4+4)

Back:

Výhody:

1. **Scalability**: P2P networks can handle an increase in users and workload without requiring significant infrastructure investments.
2. **Robustness**: The decentralized nature makes P2P networks resistant to single points of failure.
3. **Cost-Effectiveness**: Reduced reliance on centralized servers can lower operational costs.
4. **Resource Sharing**: Efficient utilization of available bandwidth and storage.

Nevýhody:

1. **Security Risks**: Decentralization can pose security risks, as there is no central authority to monitor or control the data transfer.
2. **Inconsistent Performance**: The performance can vary depending on the peers’ capabilities and availability.
3. **Legal and Ethical Issues**: P2P networks can be misused for distributing pirated or illegal content.
4. **Complex Management**: Managing and troubleshooting a P2P network can be more complex than traditional networks.
<!--ID: 1738239852220-->
END

---

#### Master-slave architektura

START
FIT-Card

K čemu slouží **Master-slave** architektura?

Back:

The Master-Slave architecture is architecture where a master component controls one or more slave components. The master component sends requests or commands to the slave components, which execute these instructions and return results to the master. This architecture is commonly used to simplify complex processes, distribute workloads, and manage tasks efficiently.

![](../../Assets/Pasted%20image%2020250130130002.png)

<!-- ExampleStart -->
1. **Database Replication**: In database systems, the master database manages data and replicates it to one or more slave databases. This ensures data redundancy and high availability. ![](../../Assets/Pasted%20image%2020250130130021.png)
2. **Load Balancing**: In web server applications, the master server distributes client requests to multiple slave servers, balancing the load and enhancing performance.
3. **Parallel Processing**: For tasks requiring significant computational resources, this architecture can be used to parallelize the workload across multiple slave nodes.

Konkrétní examples:
- **Apache Hadoop**: Uses this architecture for distributed data processing.
- **MySQL Replication**: Implements master-slave replication for database redundancy.
- **Distributed Computing Frameworks**: Like Apache Spark, where the master node manages task distribution to worker nodes.
<!-- ExampleEnd -->
<!--ID: 1738239852222-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Master-slave** architektury? (3 + 3)

Back:

**Pros**
1. **Efficiency**: By distributing tasks, it enhances the overall efficiency and speed of the system.
2. **Scalability**: It’s easier to add more slave components to handle increased load.
3. **Fault Tolerance**: Failure of a slave component does not bring down the entire system.

**Cons**
1. **Single Point of Failure**: If the master fails, the entire system can become inoperative.
2. **Complexity**: Managing communication and synchronization between master and slaves can be complex.
3. **Scalability Limits**: The architecture can become bottlenecked by the master’s capacity.
<!--ID: 1738239852225-->
END

---

#### Pipe and filter architecture

START
FIT-Card

K čemu slouží **Pipe and filter** architektura?

Back:

The Pipe and Filter architecture is a design pattern used in software engineering, characterized by a series of processing elements (filters) connected by channels (pipes). Each filter processes data and passes it to the next filter in the pipeline. This pattern is commonly used for streaming data processing, where data is passed through a sequence of operations.

![](../../Assets/Pasted%20image%2020250130130241.png)

<!-- ExampleStart -->
1. **Data Processing:** Ideal for applications where data needs to be processed in stages, such as signal processing or text analysis.
2. **Streaming Applications:** Suitable for real-time data processing in streaming applications.
3. **Compiler Design:** Commonly used in compilers where different stages of compilation (lexical analysis, parsing, semantic analysis, etc.) are handled by separate filters.
4. **Image Processing:** Effective in scenarios where images are processed in a series of steps, like filters in photo editing software.

Konkrétní příklady:
1. **Unix Shell Commands:** Unix shell commands like `grep`, `awk`, and `sed` can be piped together to perform complex text processing tasks.
2. **Image Processing Pipeline:** A series of filters for tasks like noise reduction, color correction, and edge detection in a photo editing application.
3. **Data Analytics Pipeline:** In data analytics, filters can be used for cleansing, transforming, and aggregating data before analysis.
4. **Audio Processing:** In audio engineering, a series of filters are used for equalization, compression, and effects like reverb.
<!-- ExampleEnd -->
<!--ID: 1738239852227-->
END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Pipe and filter** architektury? (4 + 4)

Back:

**Pros**
1. **Modularity:** Encourages modular design, making the system easier to understand, maintain, and modify.
2. **Reusability:** Filters can be reused in different systems or in different configurations within the same system.
3. **Parallel Processing:** Different filters can process data simultaneously, leveraging multi-core processors for improved performance.
4. **Flexibility:** Easy to add, remove, or replace filters, allowing for flexible system design and adaptation to changing requirements.

**Cons**
1. **Performance Overhead:** The overhead of data passing between filters can impact performance, especially in high-throughput systems.
2. **Complexity in State Management:** Managing state across filters can be challenging, particularly in stateful filters.
3. **Debugging Difficulty:** Debugging can be difficult due to the distributed nature of processing.
4. **Limited Interactivity:** Not well-suited for interactive applications where immediate feedback is required, as data must pass through the entire pipeline.
<!--ID: 1738239852230-->
END

---

#### Event driven architecture

START
FIT-Card

K čemu slouží **Event driven** architektura?

Back:

In general, it is an architecture for distributed systems, that promotes asynchronous message communication rather than a request/response pattern.

![](../../Assets/Pasted%20image%2020250130130635.png)

An event can be defined as “a significant change in state”. For example, when a consumer purchases a car, the car’s state changes from “for sale” to “sold”. A car dealer’s system architecture may treat this state change as an event whose occurrence can be made known to other applications within the architecture. From a formal perspective, what is produced, published, propagated, detected or consumed is a (typically asynchronous) message called the event notification, and not the event itself, which is the state change that triggered the message emission. Events do not travel, they just occur. However, the term event is often used metonymically to denote the notification message itself, which may lead to some confusion. This is due to Event-driven architectures often being designed atop message-driven architectures, where such communication pattern requires one of the inputs to be text-only, the message, to differentiate how each communication should be handled.

This architectural pattern may be applied by the design and implementation of applications and systems that transmit events among loosely coupled software components and services. An event-driven system typically consists of event emitters (or agents), event consumers (or sinks), and event channels. Emitters have the responsibility to detect, gather, and transfer events. An Event Emitter does not know the consumers of the event, it does not even know if a consumer exists, and in case it exists, it does not know how the event is used or further processed. Sinks have the responsibility of applying a reaction as soon as an event is presented. The reaction might or might not be completely provided by the sink itself. For instance, the sink might just have the responsibility to filter, transform and forward the event to another component or it might provide a self-contained reaction to such event. Event channels are conduits in which events are transmitted from event emitters to event consumers. The knowledge of the correct distribution of events is exclusively present within the event channel. The physical implementation of event channels can be based on traditional components such as message-oriented middleware or point-to-point communication which might require a more appropriate transactional executive framework.

Building systems around an event-driven architecture simplifies horizontal scalability in distributed computing models and makes them more resilient to failure. This is because application state can be copied across multiple parallel snapshots for high-availability. New events can be initiated anywhere, but more importantly propagate across the network of data stores updating each as they arrive. Adding extra nodes becomes trivial as well: you can simply take a copy of the application state, feed it a stream of events and run with it.
<!--ID: 1738239852233-->
END

---


START
FIT-Card

Jaké jsou 2 topologie v **Event driven** architektuře?

Back:

**Mediator topology**

This topology is useful for events that have multiple steps and require some level of orchestration to process the event. The event mediator receives the initial event and orchestrates that event by sending additional asynchronous events to event channels to execute each step of process.

![Mediator topology](https://gitlab.fit.cvut.cz/chvostom/adpfiles/raw/master/mediatorB.jpg)

**Broker topology**

Broker topology is useful when you have a relatively simple event processing flow and you do not want (or need) central event orchestration. The message flow is distributed across the event processor components in a chain-like fashion through a lightweight message broker.

![](../../Assets/Pasted%20image%2020250130130718.png)
<!--ID: 1738239852235-->
END

---


START
FIT-Card

Jaké jsou výhody a nevýhody **Event driven** architektury? (4 + 1)

Back:

**Výhody:**
- Strong support for request
	- Any component can be introduced into a system simply by registering it for the events of that system.
- Easy system evolution
	- Components may be replaced by other components without affecting the interfaces of other components in the system.
- Well distributed
	- It is because an event can be almost anything and exist almost anywhere.
- Extreme loose coupling (within space, time and synchronization)
	- Events do not know which components will be affected by those events.
	- Provides a scalable infrastructure for information exchange and distributed workflows.
	- Components cannon make assumptions about order of processing, or even about what processing will occur as a result of their events.
		- For this reason, most implicit invocation systems also include explicit invocation (i.e., normal procedure call) as a complementary form of interaction.
**Nevýhody:**
- Tightly coupled to the semantics of the underlying event schema and values
	- The high degree of semantic heterogeneity of events makes it difficult to develop and maintain event-based systems.
<!--ID: 1738239852238-->
END

---

#### DevOps

START
FIT-Card

Jaké jsou 4 základní principy **DevOps**?

Back:

**Collaboration**

DevOps enables continuous communication between cross-functional and autonomous teams. Also, DevOps advocates for getting customer feedback early on during sprints to help inform expectations, thus guiding developers on what features to focus on to minimize revisions.

This principle also promotes end-to-end responsibility by ensuring that each DevOps architect knows their role and works toward supporting efficient implementations across the entire DevOps pipeline.

**Automation**

When you automate processes, you eliminate resource waste, excess effort, and unnecessary fiddling. Fortunately, it’s possible to automate many aspects of workflow, testing, and deployment. This reduces human error, saves time, and frees engineers to keep innovating.

Teams can use a variety of automation tools for specific tasks:

**Iteration**

The DevOps approach aims to facilitate rapid releases and encourages frequently committing code to a version control repository such as GitHub or BitBucket.

Should the build not pass testing, revision control allows engineers to revert to a working version of the code. Otherwise, an automation tool or engineer rapidly pushes code that passes a quality check into production.

A microservices architecture provides this flexibility, as different engineering teams can update various parts of an app simultaneously without affecting the rest of the app. This is the opposite of a monolithic architecture, which is hard to modify without affecting the entire application.

**Continuous Improvement**

DevOps thrives on incremental improvements derived from real-time user feedback, technology changes, use cases, and other sources. As you’ll see in the section below on DevOps components, this is a continuous process based on CI/CD principles.
<!--ID: 1738239852240-->
END

---

START
FIT-Card

Jaké jsou části **DevOps workflow**?

Back:

**1. Continuous Planning**

This is where teams and stakeholders from other departments identify what features need to be improved, look at prioritization, track progress visually (often using the agile method), and analyze opportunities and risks to figure out how to proceed.

This step in the process also introduces customer requirements so that Devs, Ops, and QAs can utilize them for continuous improvement.

**2. Continuous Integration (Collaborative Development)**

Continuous integration (CI) involves merging code from multiple development teams into one source code repository. All code changes are automatically tested to ensure all developers have access to valid and current code at all times.

In waterfall development, teams must wait for one team to complete a major update before doing their part, which slows releases.

**3. Continuous Testing**

Testing involves verifying that the code works and meets customer requirements as intended by the developers. The team uses automated tools to catch bugs faster to speed up the process.

**4. Continuous Delivery**

Continuous delivery (CD) involves building, testing, and packaging approved code for release into a production environment. CD enables rapid releases while ensuring tight security.

**5. Continuous Deployment**

Continuous delivery and continuous deployment are similar concepts; however, the latter uses automation for almost everything and is especially ideal for teams who have had some success practicing CI/CD.

Continuous deployment is the ultimate goal of DevOps, since automating most processes increases efficiency.

**6. Continuous Monitoring**

Monitoring isn’t just the last step in the DevOps process flow. Teams should be monitoring their workflows all of the time in order to catch bugs before releasing the code to production.

DevOps engineers use various tools that increase observability of the way architecture components work over time to tackle issues that elude manual and automated testing processes. These tools detect and report anomalies automatically, so that teams can correct the code before users encounter issues.
<!--ID: 1738239852243-->
END

---

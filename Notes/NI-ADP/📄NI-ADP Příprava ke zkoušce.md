---
created: 2025-01-28T12:35:12
title: "Příprava ke zkoušce"
up: "[[📖NI-ADP]]"
---

TARGET DECK: NI-ADP-Exam
FILE TAGS: NI-ADP status-toReview

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

END

---


## NI-SI-2 - Creational design patterns

START
FIT-Card

Jaké jsou **creational design patterns**? (5)

Back:

- **Abstract factory**
- **Builder**
- **Factory method**
- **Prototype**
- **Singleton**

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

END

---


START
FIT-Card

Jaká je **prototype registry** struktura **Prototype** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130104444.png)

1. The **Prototype Registry** provides an easy way to access frequently-used prototypes. It stores a set of pre-built objects that are ready to be copied. The simplest prototype registry is a `name → prototype` hash map. However, if you need better search criteria than a simple name, you can build a much more robust version of the registry.

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

END

---

START
FIT-Card

Jaká je struktura **Singleton** design patternu?

Back:

![](../../Assets/Pasted%20image%2020250130104742.png)

1. The **Singleton** class declares the static method `getInstance` that returns the same instance of its own class.

The Singleton’s constructor should be hidden from the client code. Calling the `getInstance` method should be the only way of getting the Singleton object.

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

END

---


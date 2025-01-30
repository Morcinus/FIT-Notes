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

END

---


START
FIT-Card

Jaká je **Class adapter** struktura **Adapter** design patternu?

Back:

This implementation uses inheritance: the adapter inherits interfaces from both objects at the same time. Note that this approach can only be implemented in programming languages that support multiple inheritance, such as C++.

![](../../Assets/Pasted%20image%2020250130105641.png)

1. The **Class Adapter** doesn’t need to wrap any objects because it inherits behaviors from both the client and the service. The adaptation happens within the overridden methods. The resulting adapter can be used in place of an existing client class.

END

---


START
FIT-Card

Jaké jsou výhody a nevýhody **Adapter** design patternu? (2 + 1)

Back:

✅ _Single Responsibility Principle_. You can separate the interface or data conversion code from the primary business logic of the program.

✅ _Open/Closed Principle_. You can introduce new types of adapters into the program without breaking the existing client code, as long as they work with the adapters through the client interface.

❌ The overall complexity of the code increases because you need to introduce a set of new interfaces and classes. Sometimes it’s simpler just to change the service class so that it matches the rest of your code.

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

END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Composite** design patternu? (2 + 1)

Back:

✅ You can work with complex tree structures more conveniently: use polymorphism and recursion to your advantage.

✅ _Open/Closed Principle_. You can introduce new element types into the app without breaking the existing code, which now works with the object tree.

❌ It might be difficult to provide a common interface for classes whose functionality differs too much. In certain scenarios, you’d need to overgeneralize the component interface, making it harder to comprehend.

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

END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Facade** design patternu? (1 + 1)

Back:

✅ You can isolate your code from the complexity of a subsystem.

❌ A facade can become [a god object](https://courses.fit.cvut.cz/antipatterns/god-object) coupled to all classes of an app.

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

END

---

START
FIT-Card

Jaké jsou výhody a nevýhody **Flyweight** design patternu? (1 + 2)

Back:

✅ You can save lots of RAM, assuming your program has tons of similar objects.

❌ You might be trading RAM over CPU cycles when some of the context data needs to be recalculated each time somebody calls a flyweight method.

❌ The code becomes much more complicated. New team members will always be wondering why the state of an entity was separated in such a way.

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

END

---


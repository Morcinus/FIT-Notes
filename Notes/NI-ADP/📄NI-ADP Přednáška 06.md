---
created: 2024-10-29T18:17:17
title: "Behavioral design patterns"
up: "[[📖NI-ADP]]"
---

TARGET DECK: NI-ADP
FILE TAGS: NI-ADP prednaska06 status-toReview
### Template method


START
FIT-Card

Co je **Template method** pattern?

Back:

Mám classu, v ní mám nějaký algoritmus (funkci). Z té funkci vytáhnu nějaký **kroky** do **zvláštních funkcích** (buď abstract nebo s nějakou defaultní implementací). 

Potom když podědím tu classu, tak si doimplementuju ty dané kroky (nebo tu abstraktní funkci).

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029182137.png)
<!-- ImageEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241029182052.png)
<!-- ExampleEnd -->
<!--ID: 1736497489570-->
END

---


START
FIT-Card

Jaký typ design patternu je **Template method** pattern?

Back:

**Behavioral pattern**
<!--ID: 1736497489575-->
END

---

### Mediator

START
FIT-Card

Co je **Mediator** design pattern?

Back:

Když mám hromadu class/services, které navzájem komunikují, tak v tom je chaos. Proto můžu udělat classu/servicu mediator, která zprostředkovává komunikaci mezi třídami/servicami.

Funguje tak, že má pro dané volání jasně předdefinované, co má zavolat dál.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029182513.png)

Obrázek chaosu :D
![](../../Assets/Pasted%20image%2020241029182452.png)
<!-- ImageEnd -->

**Výhody a nevýhody**
<!-- DetailInfoStart -->
✅ _Single Responsibility Principle_. You can extract the communications between various components into a single place, making it easier to comprehend and maintain.

✅ _Open/Closed Principle_. You can introduce new mediators without having to change the actual components.

✅ You can reduce coupling between various components of a program.

✅ You can reuse individual components more easily.

❌ Over time a mediator can evolve into a [God Object](https://courses.fit.cvut.cz/antipatterns/god-object).
<!-- DetailInfoEnd -->
<!--ID: 1736497489580-->
END

---

### Chain of responsibility


START
FIT-Card

Co je **Chain of responsibility** design pattern?

Back:

Posílám nějaký request/objekt řetězem, každý handler pak zajistí danou věc.

Např. autorizace, bezpečnost, validace, cachování atd.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029182820.png)
<!-- ImageEnd -->
<!--ID: 1736497489586-->
END

---


START
FIT-Card

Jaký je rozdíl mezi **Chain of responsibility a proxy**?

Back:

U chain of responsibility mám hodně těch class za sebou. Proxy mám jen jednu.
<!--ID: 1736497489591-->
END

---


START
FIT-Card

Posílá se v **chain of reponsibilty** ten stejný typ objektu nebo ten jiný?

Back:

Je stejný objekt napříč všema handlerama.
<!--ID: 1736497489596-->
END

---



START
FIT-Card

Má chain of responsibility lineární strukturu?

Back:

Ano, ale ne nutně vždy. Může to být i jako strom!

Např. když mám UI, můžu mít jednotlivé komponenty (handlery) ve stromové struktuře.
<!--ID: 1736497489602-->
END

---


### Observer


START
FIT-Card

Jak funguje **Observer** design pattern?

Back:

Mám observer, který sleduje danou aktivitu. Ten si udržuje kolekci listeners.

Když nastane ta událost, tak notifikuje všechny listeners.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029185939.png)
<!-- ImageEnd -->
<!--ID: 1736497489608-->
END

---

### Strategy


START
FIT-Card

Co je **Strategy pattern**?

Back:

Umožňuje mi vytvářet různé strategie k vykonání dané činnosti.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029190438.png)
![](../../Assets/Pasted%20image%2020241029190453.png)


![](../../Assets/Pasted%20image%2020241029190419.png)
<!-- ImageEnd -->
<!--ID: 1736497489613-->
END

---

### Command


START
FIT-Card

Co je **Command** design pattern?

Back:

Reprezentuju nějaký příkaz classou, pak mám jeho invoker a receiver.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029191644.png)
1. The **Sender** class (aka _invoker_) is responsible for initiating requests. This class must have a field for storing a reference to a command object. The sender triggers that command instead of sending the request directly to the receiver. Note that the sender isn’t responsible for creating the command object. Usually, it gets a pre-created command from the client via the constructor.
2. The **Command** interface usually declares just a single method for executing the command.
3. **Concrete Commands** implement various kinds of requests. A concrete command isn’t supposed to perform the work on its own, but rather to pass the call to one of the business logic objects. However, for the sake of simplifying the code, these classes can be merged. Parameters required to execute a method on a receiving object can be declared as fields in the concrete command. You can make command objects immutable by only allowing the initialization of these fields via the constructor.
4. The **Receiver** class contains some business logic. Almost any object may act as a receiver. Most commands only handle the details of how a request is passed to the receiver, while the receiver itself does the actual work.
5. The **Client** creates and configures concrete command objects. The client must pass all of the request parameters, including a receiver instance, into the command’s constructor. After that, the resulting command may be associated with one or multiple senders.

<!-- ImageEnd -->
<!--ID: 1736497489617-->
END

---

### State machine

START
FIT-Card

Co je **State** design pattern?

Back:

Reprezentuje stavový automat. V jednotlivých stavech (třídách) mám 

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029191914.png)
<!-- ImageEnd -->

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241029191940.png)
![](../../Assets/Pasted%20image%2020241029191949.png)

<!-- ExplanationEnd -->
<!--ID: 1736497489621-->
END

---

### Visitor


START
FIT-Card

Co je **Visitor** design pattern?

Back:

Todo doplnit

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241029192122.png)
<!-- ImageEnd -->
<!--ID: 1736497489625-->
END

---

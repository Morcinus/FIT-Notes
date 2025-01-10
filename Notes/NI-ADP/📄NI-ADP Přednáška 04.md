---
created: 2024-10-15T18:06:56
title: Structural design patterns
up: "[[📖NI-ADP]]"
---

TARGET DECK: NI-ADP
FILE TAGS: NI-ADP prednaska04 status-toReview
## Structrual design patterns


START
FIT-Card

Jaké jsou **structural design** patterny?

Back:

- Adapter
- Composite
- Proxy
- Fly Weight
- Facade
- Bridge
- Decorator
<!--ID: 1729237386333-->
END

---

### Adapter

START
FIT-Card

Jak funguje **adapter** design pattern?

Back:

<!-- ExampleStart -->
V aplikaci používám DocumentXML a chci to změnit na JSON.

Tak si udělám JSONToXMLAdapter, který bude dodržovat stejné rozhraní jako ta DocumentXML classa a budu ho tedy moct použít tam kde používám tu classu.
<!-- ExampleEnd -->
<!--ID: 1729237386336-->
END

---

### Proxy


START
FIT-Card

Jak funguje **proxy** design pattern?

Back:

Vložím **proxy** mezivrstvu mezi dvě části systému.

V rámci proxy můžu řešit všecho možný - logování, bezpečnost, cachování validace atd.

Jak to je naimplementované:
- Proxy má stejné chování jako kdyby tam byl ta reálná část toho projektu

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241015185224.png)
![](../../Assets/Pasted%20image%2020241015185240.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241015185322.png)
<!-- DetailInfoEnd -->
<!--ID: 1729237386339-->
END

---

### Fasáda


START
FIT-Card

Jak funguje **facade** design pattern?

Back:

Máme několik objektů, které potřebujeme používat, chceme nad nimi udělat jednodušší rozhraní/vrstvu.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241015190649.png)
<!-- ExampleEnd -->


<!-- DetailInfoStart -->
Je to hlavně kvůli čitelnosti kódu. Fasáda nám sdružuje dotazy a volání dalších funkcí.

![](../../Assets/Pasted%20image%2020241015190755.png)
<!-- DetailInfoEnd -->
<!--ID: 1729237386342-->
END

---


START
FIT-Card

Dávají se názvy design patternů do názvů tříd?

Back:

Není to nutný, ale je to většinou fajn, protože to zvyšuje čitelnost.
<!--ID: 1729237386345-->
END

---

### Composite

START
FIT-Card

Jak funguje **Composite design** pattern?

Back:

Mám hromadu objektů, které mám pod sebou a potřebuju spočíst jejich cenu.

<!-- DetailInfoStart -->
Nemusím házet všechny položky do pole a sčítat to, ale můžu na každém objektu zavolat metodu, aby spočetla sebe a objekty pod ní.
<!-- DetailInfoEnd -->


<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241015191939.png)
<!-- ImageEnd -->
<!--ID: 1729237386348-->
END

---

### Flyweight


START
FIT-Card

Jak funguje **flyweight** design pattern?

Back:

Hodně objektů sdílí stejnou classu.
<!--ID: 1729237386351-->
END

---

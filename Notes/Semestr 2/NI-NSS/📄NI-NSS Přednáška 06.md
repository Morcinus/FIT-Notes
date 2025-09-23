---
created: 2025-04-15T14:37:06
title: "Software Element Structures"
up: "[[📖NI-NSS]]"
---

TARGET DECK: NI-NSS
FILE TAGS: NI-NSS prednaska06 status-toReview


START
FIT-Card

Co je princip **Separating Cross-Cutting Concerns**?

Back:

Věci, které jsou napříč celým projektem (například autorizace, databáze, logging). Typicky se nějak napojíme k nějaké externí knihovně/frameworku. Podle tohoto principu bych měl vždy dělat nějaký interface mezi knihovnou a mým kódem tak, abych mohl kdykoliv tu knihovnu prohodit za nějakou jinou, aniž bych musel překódit vnitřnosti mého projektu (jen například překódím ten můj adaptér)
<!--ID: 1746599654158-->
END

---


START
FIT-Card

Co je **Element**?

Back:

Třída (a interfaces) a další třídy, které se starají o connections k dalším třídám nebo knihovnám

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020250415144703.png)
![](../../../Assets/Pasted%20image%2020250415144711.png)
<!-- ExampleEnd -->
<!--ID: 1746599654169-->
END

---


START
FIT-Card

Jaký **dopad** mají Elements na combinatorial effects?

Back:

Díky tomu, že mám codebase rozdělenou do skupin tříd, když udělám nějakou změnu v požadavku, stačí mi změnit jen věci v dané skupině tříd

Takhle to bylo původně:
![](../../../Assets/Pasted%20image%2020250415144736.png)

Takhle to vypadá, pokud zorganizuju systém do elementů:
![](../../../Assets/Pasted%20image%2020250415144841.png)
<!--ID: 1746599654179-->
END

---


START
FIT-Card

Jaké jsou **základní typy elementů**? (5)

Back:

![](../../../Assets/Pasted%20image%2020250415144906.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250415144916.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599654187-->
END

---


START
FIT-Card

Jaká je hlavní **nevýhoda Elementů**?

Back:

Vyžaduje to hoodně boilerplatu a repetetivních tříd
<!--ID: 1746599654195-->
END

---


START
FIT-Card

Co je **expansion** a **expanders**?

Back:

Deterministický process, kde se generuje kód
<!--ID: 1746599654202-->
END

---


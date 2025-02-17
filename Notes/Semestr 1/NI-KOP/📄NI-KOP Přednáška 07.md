---
created: 2024-11-13T13:12:44
title: "Randomizované algoritmy"
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP-2
FILE TAGS: NI-KOP prednaska07 status-toReview

START
FIT-Card

Co je **Monte Carlo** randomizovaný algoritmus?

Back:

**Monte Carlo algoritmy**
- Dosažený **výsledek je náhodná proměnná** (např. odpověď ano s 100% jistotou, odpověď ne s jistotou závislou na "effortu" a velikosti instance - viz příklad)
- **čas běhu pevný** pro danou instanci

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241113142545.png)

![](../../../Assets/Pasted%20image%2020241113142517.png)
<!-- ExampleEnd -->

Tags: core
<!--ID: 1735205749736-->
END

---


START
FIT-Card

Co je **Las Vegas** randomizovaný algoritmus?

Back:

**Las Vegas algoritmy**
Čas běhu je náhodná proměnná, výsledek vždy správný

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241113142553.png)

![](../../../Assets/Pasted%20image%2020241113142517.png)
<!-- ExampleEnd -->

Tags: core
<!--ID: 1735205749738-->
END

---


START
FIT-Card

Jak funguje Monte Carlo algoritmus pro SAT?

Back:

![](../../../Assets/Pasted%20image%2020241113143046.png)
<!--ID: 1735205749741-->
END

---


START
FIT-Card

Jaký typ algoritmu je Quicksort? Las vegas nebo Monte carlo?

Back:

**Las Vegas**

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241113143556.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749743-->
END

---


START
FIT-Card

Jak funguje randomizovaný B+ algoritmus (uzlové pokrytí)?

Back:

Problém:
Snažíme se najít minimální uzlové pokrytí, tzn. nejmenší množinu vrcholů, kde každá hrana grafu má alespoň jeden koncový uzel v této množině.

![](../../../Assets/Pasted%20image%2020241113143723.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241113144045.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749746-->
END

---


START
FIT-Card

Jaké jsou výhody randomizovaných algoritmů?

Back:

![](../../../Assets/Pasted%20image%2020241113144126.png)
<!--ID: 1735205749748-->
END

---


START
FIT-Card

Jaké jsou chyby u Monte Carlo algoritmů?

Back:

- Jednostranná ANO - odpověď ANO je správně s pravděpodobností $1$, odpověď ne je správně s pravděpodobností $p<1$
- Jednostranná NE - odpověď ANO je správně s pravděpodobností $p<1$, odpověď ne je správně s pravděpodobností $p=1$
- Oboustranná - obě odpovědi jsou správně s pravděpodobností $p<1$

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241113144340.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749751-->
END

---


START
FIT-Card

Co jsou **primární** a **sekundární** metriky u randomizovaných algoritmů? 

Back:

![](../../../Assets/Pasted%20image%2020241113144618.png)
<!--ID: 1735205749753-->
END

---

## Praktické nasazení heuristik (aka jak udělám DÚ2)

![](../../../Assets/KOP07%20Deploy.pdf)


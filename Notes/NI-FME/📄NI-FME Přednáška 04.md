---
created: 2025-03-12T11:02:46
title: "Correctness"
up: "[[📖NI-FME]]"
---

TARGET DECK: NI-FME
FILE TAGS: NI-FME prednaska04 status-toReview


START
FIT-Card

Jak se zapisují assertions?

Back:

- `assume` - musí zajistit ten co používá ten program (jako assert)
- `@` - musí zajistit daný program

<!-- ExampleStart -->
Nedělení nulou:
![](../../Assets/Pasted%20image%2020250312110808.png)

![](../../Assets/Pasted%20image%2020250312110717.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Kdy je průběh programu **regulární**?

Back:

![](../../Assets/Pasted%20image%2020250312111040.png)

END

---


START
FIT-Card

Kdy je průběh programu **správný**

Back:

![](../../Assets/Pasted%20image%2020250312111048.png)

END

---


START
FIT-Card

Jak se zapisuje přiřazení proměnný?

Back:

![](../../Assets/Pasted%20image%2020250312111413.png)

END

---


START
FIT-Card

Jak zjistíme, jeslti je program s předpoklady správný?
![](../../Assets/Pasted%20image%2020250312112755.png)

Back:

Sestavíme logickou formuli a zjistíme jestli je pravdivá
![](../../Assets/Pasted%20image%2020250312112805.png)

END

---


START
FIT-Card

Co je potřeba v tomto případě udělat sproměnnou x? (SSA)
![](../../Assets/Pasted%20image%2020250312112636.png)

Back:

Přejmenovat tak, aby nedocházelo ve formuli k přepisování hodnoty
![](../../Assets/Pasted%20image%2020250312112713.png)

END

---


START
FIT-Card

Jak se řeší přejmenovávání arraye?

Back:

![](../../Assets/Pasted%20image%2020250312113530.png)

END

---


START
FIT-Card

Jak zapíšu vstup programu?

Back:

![](../../Assets/Pasted%20image%2020250312113608.png)

END

---


START
FIT-Card

Co je first order formula v SSA?

Back:

Konjunktivní Formule, která reprezentuje daný program
![](../../Assets/Pasted%20image%2020250312114020.png)

END

---


START
FIT-Card

Definice: správný program

Back:

![](../../Assets/Pasted%20image%2020250312114101.png)

END

---


START
FIT-Card

Jak se kontroluje správnost programu s více assertions?

Back:

![](../../Assets/Pasted%20image%2020250312114632.png)
![](../../Assets/Pasted%20image%2020250312114618.png)

END

---


START
FIT-Card

Jak člověk ručně dokáže ověřovací podmínku?

Back:

![](../../Assets/Pasted%20image%2020250312115623.png)
![](../../Assets/Pasted%20image%2020250312115637.png)


END

---


START
FIT-Card

Jak obecně dokázat správnost programů bez řídících struktur? (2 kroky)

Back:

![](../../Assets/Pasted%20image%2020250312115742.png)

END

---

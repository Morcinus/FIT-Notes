---
created: 2024-10-07T13:59:30
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska03 status-toReview analyza2


START
FIT-Card

Postup: Jak najít extrémy funkce více proměnných?

Back:

1. Najdu **kritické body** (stacionární + ty, kde alespoň jedna parciální derivace neexistuje)
2. Pokud jsou **všechny 2. parciální derivace** v okolí stacionárního bodu $\textbf{b}$ spojité, najít **Hessovu matici**. Pokud je matice
	1. **pozitivně definitní**, pak je bod $\textbf{b}$ bodem ostrého lokálního **minima** 
	2. **negativně definitní**, pak je bod $\textbf{b}$ bodem ostrého lokálního **maxima**
	3. **indefinitní**, pak je bod $\textbf{b}$ sedlovým bodem (tj. není extrém)



<!-- DetailInfoStart -->
1. Hledat kritické body je samo o sobě **velice obtížné** a není jednotný algoritmus, co by to jednoduše vyřešil. Najít přesné body je proto velice těžké. Samozřejmě ty řešení, co máme na tomto předmětu, jsou jednoduché.
<!-- DetailInfoEnd -->
<!--ID: 1729237386264-->
END

---

![](../../Assets/Pasted%20image%2020241007144131.png)


START
FIT-Card

Co platí pro **Hessovu matici polynomů druhého stupně**?

Back:

Jejich **Hessova matice** je **konstantní**.

<!-- ExampleStart -->
Hessova matice je konstantní pro:
$f(x,y) = x^2+y^2$
$f(x,y) = x^2-y^2$
$f(x,y) = xy$
$f(x,y) = (x+y)^2$
<!-- ExampleEnd -->
<!--ID: 1729237386267-->
END

---

![](../../Assets/Pasted%20image%2020241007144956.png)![](../../Assets/Pasted%20image%2020241007145228.png)


START
FIT-Card

Je **Hessova matice**

definitní nebo indefinitní

Back:
<!--ID: 1729237386270-->
END

---



START
FIT-Card

Co platí, když má **Hessova matice** na diagonále nulu?

Back:

Pak není **pozitivně definitní** ani **negativně definitní**

(Může být semidefinitní nebo indefinitní)
<!--ID: 1729237386273-->
END

---


START
FIT-Card

Jak souvisí determinant s definitností

Back:

Když determinant vyjde pozitivní, tak je definitní

Když $a$ (levý horní roh matice) je kladný, je pozitivně definitní. Když je záporný, tak je negativně definitní.

Když determinant vyjde záporný, tak je matice indefinitní

Když determinant vyjde rovno nula, tak je semidefinitní
<!--ID: 1729237386276-->
END

---

![](../../Assets/Pasted%20image%2020241007153858.png)



![](../../Assets/Pasted%20image%2020241007154041.png)
---
created: 2024-10-11T11:16:03
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI

### Věta o implicitní funkci

START
FIT-Card

Věta: **o implicitní funkci**

Back:

![](../../Assets/Pasted%20image%2020241011111708.png)

<!-- ExplanationStart -->
**implicitní** = automaticky to existuje, ale není to 

Obecně v té větě jakoby "vykresluju vrstevnici" toho 3D grafu.

Máme funkci $f$ dvou proměnných a následující předpoklady:
- V bodě $(a,b)$ má funkce nulovou hodnotu
- V tom bodě funkce má nenulovou parciální derivaci podle druhý proměnný ($x_2$)

![](../../Assets/Pasted%20image%2020241011114719.png)

(a) Potom existuje čtvercové okolí toho bodu, ve kterém mám tu vrstevnici. Tedy pro každé $x$ (na ose $x_1$) existuje právě jedno (tedy bude to funkce, nebudou v grafu dvě hodnoty nad sebou) $x$ (na ose $x_2$), které splňuje $f(x_1,x_2)=0$. Tento předpis mi právě definuje tu funkci té vrstevnice.

Tu funkci té vrstevnice už můžu zapsat jako 2D funkci, protože ta hodnota je závislá na tom $x_1$, tedy můžu to psát jako $x_2 = \varphi(x_1)$

(b) Tu funkci z předchozího bodu můžu zderivovat a platí ta rovnice nahoře.

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
Nazývá se to "o implicitní funkci", protože ta funkce $\varphi(x)$ je implicitně schovaná v té funkci $f$. Ta rovnice $f(x,\varphi (x)) = 0$ právě v sobě implicitně schovává tu funkci $\varphi (x)$.
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
Máme následující 3D graf a já na něm chci na 2D ploše udělat **vrstevnici**. Ta funkce $\varphi (x)$ mi vykresluje v okolí bodu $B$ vrstevnici na té 2D ploše.

![](../../Assets/Pasted%20image%2020241011120135.png)
<!-- ExampleEnd -->


END

---

#### Cesta a implicitní funkce


START
FIT-Card

???

Back:

<!-- ExampleStart -->
Máme daný 3D graf (jakoby terén) a nakreslíme na něm cestu. Na tého cestě pak hledáme extrémy.

![](../../Assets/Pasted%20image%2020241011120811.png)
Červená elipsa vpravo je například ta cesta.

Další příklady:
![](../../Assets/Pasted%20image%2020241011120945.png)
![](../../Assets/Pasted%20image%2020241011121005.png)

<!-- ExampleEnd -->


END

---


START
FIT-Card

Co je obecně **úloha vázaného extrému minima**

Back:

![](../../Assets/Pasted%20image%2020241011123158.png)
![](../../Assets/Pasted%20image%2020241011123211.png)

<!-- ExplanationStart -->
Máme minimalizovat funkci $f$ za daných podmínek.

Máme $m$ **rovnostních vazeb (=vrstevnic)** (určených rovnicemi $g_j(x)= 0$).
Máme $p$ **nerovnostních vazeb (=vnitřky vrstevnic)** (určených funkcemi $h_k(x) \leq 0$)

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241011123820.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak se nazývají $f$, $g_j$ a $h_k$ v **úloze vázaného extrému minima**?

![](../../Assets/Pasted%20image%2020241011123158.png)

Back:

- $f$ - objektiovní/účelová/minimalizovaná/optimalizovaná funkce
- $g_j$ - rovnostní podmínka/vazba
- $h_k$ - nerovnostní podmínka/vazba

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241011123605.png)
<!-- DetailInfoEnd -->

END

---

#### Přípustná řešení a jiná formulace

START
FIT-Card

Definice: **lokální minimum vzhledem k množině**

Back:



END

---

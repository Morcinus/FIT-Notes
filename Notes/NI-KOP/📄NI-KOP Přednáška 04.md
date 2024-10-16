---
created: 2024-10-16T09:20:03
title: "NP-těžké a NP-úplné problémy"
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP

### Srovnávání problémů ve třídě
START
FIT-Card

Definice: **Problém je $X$-těžký** 

Back:

![](../../Assets/Pasted%20image%2020241016095346.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241016100240.png)

![](../../Assets/Pasted%20image%2020241016095433.png)
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **Problém je $X$-úplný**

Back:

![](../../Assets/Pasted%20image%2020241016095401.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241016100249.png)
![](../../Assets/Pasted%20image%2020241016095433.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Jak poznám který problém je **lehčí** a který **těžší**?

Back:

Máme instanci problému $\Pi_1$ a nechce se mi to řešit, tak to převedu **snadným převodem** na instanci problému $\Pi_2$, na který mám algoritmus na řešení a má **shodný výstup**.

Potom:
- Díky tomu jsme získali algoritmus na $\Pi_1$, který není horší než algoritmus $\Pi_2$
- $\Pi_1$ je **nejvýše tak těžký** jako $\Pi_2$
- $\Pi_2$ je **nejméně tak těžký** jako $\Pi_1$

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241016095740.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jak získám **nejtěžší problém** v nějaké třídě?

Back:

Nejtěžší problém je **ten, na který jdou převést všechny ostatní**.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241016100104.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co je **redukce** problému?

Back:

Převod instance problému $\Pi_1$ na instanci jiného problému $\Pi_2$ 

END

---

### Karpova redukce


START
FIT-Card

Definice: Rozhodovací problém $\Pi_1$ je **Karp-redukovatelný** na $\Pi_2$

Back:

![](../../Assets/Pasted%20image%2020241016100515.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241016100743.png)
![](../../Assets/Pasted%20image%2020241016100756.png)
![](../../Assets/Pasted%20image%2020241016100804.png)
![](../../Assets/Pasted%20image%2020241016100814.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Definice: $\Pi_1$ a $\Pi_2$ jsou **polynomiálně ekvivalentní**

Back:

![](../../Assets/Pasted%20image%2020241016100617.png)

END

---


START
FIT-Card

Věta: transitivita Karpovy redukce

Back:

![](../../Assets/Pasted%20image%2020241016100644.png)

<!-- InformallySaidStart -->
Když umím převést  $\Pi_1$ na $\Pi_2$  a $\Pi_2$ na $\Pi_3$, tak umím převést $\Pi_1$ na $\Pi_3$.
<!-- InformallySaidEnd -->


END

---

### Třída NP-úplný


START
FIT-Card

Definice: Problém je NP-těžký

Back:

![](../../Assets/Pasted%20image%2020241016101357.png)

END

---


START
FIT-Card

Definice: Problém je NP-úplný

Back:

![](../../Assets/Pasted%20image%2020241016101418.png)

END

---


START
FIT-Card

Důsledek: Nechť $\Pi \in NP, \exists \Pi' \in NPC, \Pi' \infty \Pi$, pak také

Back:

![](../../Assets/Pasted%20image%2020241016105736.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241016105745.png)
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Důsledek: NPC problémy a třída ekvivalence

Back:

![](../../Assets/Pasted%20image%2020241016105815.png)

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241016105826.png)
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Věta: **Cookova věta**

Back:

![](../../Assets/Pasted%20image%2020241016105841.png)

<!-- ExplanationStart -->
Toto je velice silná věta. Znamená to, že můžu libovolný NP problém převést na problém SATu. Proto se furt řeší v tomto předmětu SAT solvery.
<!-- ExplanationEnd -->


Důsledky:
![](../../Assets/Pasted%20image%2020241016105850.png)

<!-- ProofStart -->
![](../../Assets/Pasted%20image%2020241016110547.png)
<!-- ProofEnd -->

END

---


START
FIT-Card

Jaké jsou vztahy tříd $P, NP, NPC, NPH$?

Back:

![](../../Assets/Pasted%20image%2020241016110101.png)

END

---


START
FIT-Card

Definice: co-NP těžký a co-NP úplný

Back:

![](../../Assets/Pasted%20image%2020241016110201.png)

END

---


START
FIT-Card

Jaké jsou **výhody** a **nevýhody** NP problémů? (3 a 1)

Back:

**Výhody:**
- **"NP lehký problém"** - Problémy v NP nejsou horší než NP
- **Existující svědek** se dá efektivně **zkontrolovat**
- **Možnost převodu** na známé problémy není vyloučena!

**Nevýhody**:
- **Problém je v NPC** - exaktní řešení, v nejhorším případě, může být časově neúnostné

END

---


START
FIT-Card

Jak lze dokázat, že nějaký problém $\Pi$ je **NP-úplný**? (3)

Back:

- **Z definice** - nepraktický
- **Zvláštní případ** - Nějaký NP úplný problém je zvláštním případem toho mýho problému
- **Převodem SATu** - Když zvládnu zredukovat SAT na $\Pi$, je $\Pi$ NP-úplný 

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241016110845.png)
<!-- ImageEnd -->

<!-- ExampleStart -->
Příklad 1
![](../../Assets/Pasted%20image%2020241016111114.png)
![](../../Assets/Pasted%20image%2020241016111124.png)

Příklad 2
![](../../Assets/Pasted%20image%2020241016111509.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
Fun fact: Takhle v historii postupovaly důkazy
![](../../Assets/Pasted%20image%2020241016111339.png) 
<!-- DetailInfoEnd -->


END

---

### SAT a příbuzné problémy


START
FIT-Card

Jaké jsou **varianty** SATu?

Back:

- **Obecný SAT**
- **SAT pro CNF** (konjunktivní normální formu)
- **Obecná formule**

![](../../Assets/Pasted%20image%2020241016111738.png)

END

---


START
FIT-Card

Co je **problém plánování**?

Back:

![](../../Assets/Pasted%20image%2020241016112535.png)

<!-- ExplanationStart -->
částečné uspořádání = vím, která operace následuje za kterou
<!-- ExplanationEnd -->

END

---

### Třídy PO a NPO

START
FIT-Card

Definice: Program $M$ pro deterministický Turingův stroj **řeší optimalizační problém** v čase $t$, jesltiže ,...

Back:

![](../../Assets/Pasted%20image%2020241016112730.png)

END

---


START
FIT-Card

Definice: Program $M$ pro deterministický Turingův stroj **počítá optimalizační kritérium** problému $\Pi$ v čase $t$, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016112758.png)

END

---

#### NPO

START
FIT-Card

Definice: Optimalizační problém $\Pi$ **patří do třídy NPO**, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016112908.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241016112918.png)
<!-- ExampleEnd -->


END

---

#### Třída PO


START
FIT-Card

Definice: Optimalizační problém $\Pi$  patří do třídy PO, jesltiže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016113003.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241016113010.png)
<!-- ExampleEnd -->

END

---

### NP-Těžký problém a Turingova Redukce


START
FIT-Card

Definice: **Turingova redukce**

Problém $\Pi_1$ je Turing-redukovatelný na $\Pi_2$, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241016113205.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241016113250.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Definice: **NP-těžký** problém (pomocí turingovy redukce)

Back:

![](../../Assets/Pasted%20image%2020241016113319.png)

![](../../Assets/Pasted%20image%2020241016113324.png)

END

---


START
FIT-Card

Jaký je vztah tříd $P, NP, NPC, PO, NPO, NPH$?

Back:

![](../../Assets/Pasted%20image%2020241016113425.png)

END

---


START
FIT-Card

Nechť máme rozhodovací problém $TS$ a optimalizační problém $TSO$. Jaký mají vztah (z hlediska těžkosti problémů)?

Např.
- **TS** - existuje tůra délky nejvýše $B$?
- **TSO** - zkonstruuj nejkratší tůru

Back:

Jsou **ekvivalentní** z hlediska Truingovy redukce v polynomiálním čase.

<!-- ProofStart -->
**Důkaz TS -> TSO:**
- Triviální, prostě algoritmu TSO řeknu, aby mi jako output dal délku té tůry a tu porovnám s $B$

**Důkaz TSO -> TS:**
- Zavedeme pomocný problém TSE
![](../../Assets/Pasted%20image%2020241016114007.png)
![](../../Assets/Pasted%20image%2020241016114013.png)
![](../../Assets/Pasted%20image%2020241016114020.png)
![](../../Assets/Pasted%20image%2020241016114033.png)
![](../../Assets/Pasted%20image%2020241016114039.png)

<!-- ProofEnd -->

END

---

#### Redukce a třída NPH


START
FIT-Card

Jaký vztah je **NPH** a **co-NPH** v Karpově redukci?

Back:

Jsou **disjunktní**.

![](../../Assets/Pasted%20image%2020241016114520.png)

END

---

START
FIT-Card

Jaký vztah je **NPH** a **co-NPH** v Turingově redukci?

Back:

$\text{NPH} = \text{co-NPH}$

![](../../Assets/Pasted%20image%2020241016114549.png)

END

---


START
FIT-Card

Jaký je vztah tříd $P, NP, co-NP, NPH, co-NPH$?

Back:

![](../../Assets/Pasted%20image%2020241016114750.png)

END

---


START
FIT-Card

Jaké jsou dobré zprávy **optimalizačních problémů** v NP? (3)

Back:

Dobré:
- **Vztah rozhodovacího a optimalizačního problému**: Pokud je rozhodovací verze problému v NP, není optimalizační problém horší než NP, je tedy NP-lehký
- **Možnost kontroly** - Pokud je problém v NPO, existujcí řešení se dá efeketivně zkontrolovat, jeho optimalizační kritérium vypočítat
- **Pro NP není vyloučen převod rozhodovací -> optimalizační problém**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241016115217.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou špatné zprávy optimalizačního problému v NP?

Back:

- V NPH - exaktní řešení muže být v nejhorším případě časově neúnosné
- Optimalizační kritérium nelze vypočíst v polynomiálním čase

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241016115304.png)
<!-- DetailInfoEnd -->


END

---

### Třídy NPI a NP-NPC-P


START
FIT-Card

Co je třída **NP-intermediate** ($NPI$)?

Back:

Problémy, které nemohou mít polynomiální algoritmus (nemohou být v $P$) a **nemůže** na ně být převeden **SAT**

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241016115504.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jaký je příklad problému NPI?

Back:

**Hledání isomorfismu dvou grafů**

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241016115745.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Co je třída **NP-P-NPC**?

Back:

Problémy, pro které neumíme ani nalézt polynomiální algoritmus, ani na ně převést SAT.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241016115504.png)
<!-- ImageEnd -->

END

---

### Shrnutí
![](../../Assets/Pasted%20image%2020241016115924.png)


---
created: 2024-11-13T12:04:25
title: "Mocninná metoda a QR algoritmus"
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska10 status-toReview


START
FIT-Card

Co je třída **přímých metod**?

Back:

Metoda, co v **konečném počtu kroků** vrátí řešení.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241113120616.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je třída **iteračních metod**?

Back:

Konstruují posloupnost nějakých přibližných řešení. Chceme aby ta posloupnost **měla limitu**, která je **skutečným řešením** dané úlohy.

Ta metoda jakoby postupně "vylepšuje/zpřesňuje" to řešení.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241113120820.png)
<!-- DetailInfoEnd -->


END

---

#### Připomenutí lineární algebry


START
FIT-Card

Připomenutí: Co je **vlastní číslo matice** a **vlastní vektor matice**?

Back:

![](../../Assets/Pasted%20image%2020241113120949.png)

END

---


START
FIT-Card

Připomenutí: Co tvoří vlastní vektory matice $M$?

Back:

![](../../Assets/Pasted%20image%2020241113121014.png)

END

---


START
FIT-Card

Připomenutí: Jak se počítají **vlastní čísla matice**?

Back:

![](../../Assets/Pasted%20image%2020241113122213.png)

END

---


START
FIT-Card

Připomenutí: Kdy je matice diagonalizovatelná?

Back:

![](../../Assets/Pasted%20image%2020241113122403.png)

END

---


START
FIT-Card

Připomenutí: Co je na diagonále matice $D$ a co je ve sloupcích matice $P$?

![](../../Assets/Pasted%20image%2020241113122403.png)

Back:

![](../../Assets/Pasted%20image%2020241113122552.png)

END

---


START
FIT-Card

Definice: **norma**

Back:

![](../../Assets/Pasted%20image%2020241113122701.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241113122707.png)
![](../../Assets/Pasted%20image%2020241113122815.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Věta: **ekvivalence norem**

Back:

![](../../Assets/Pasted%20image%2020241113122842.png)

END

---

### Mocninná metoda

START
FIT-Card

K čemu slouží mocninná metoda?

Back:

![](../../Assets/Pasted%20image%2020241113123136.png)

END

---


START
FIT-Card

Jaké jsou předpoklady mocninné metody?

Back:

- Matice je diagonalizovatelná
- Můžeme označit vlastní čísla sestupně (viz níže)
- $\alpha_1 \neq 0$

![](../../Assets/Pasted%20image%2020241113123241.png)
![](../../Assets/Pasted%20image%2020241113123834.png)

END

---


START
FIT-Card

Jak funguje **mocninná metoda**? (obecně)

Back:

![](../../Assets/Pasted%20image%2020241113123657.png)

<!-- InformallySaidStart -->
Vezmu nějaký původní vektor a iterativně ho násobím maticí $M$.

Proto jsem schopný to napsat ve tvaru $M^k$ - odtud název mocninná metoda.
<!-- InformallySaidEnd -->


END

---


START
FIT-Card

Jak funguje mocninná metoda?

Back:


![](../../Assets/Pasted%20image%2020241113125152.png)
![](../../Assets/Pasted%20image%2020241113125159.png)
![](../../Assets/Pasted%20image%2020241113125205.png)
![](../../Assets/Pasted%20image%2020241113125211.png)


END

---


START
FIT-Card

Co je **kritérium zastavení** v mocninné metodě?

Back:

![](../../Assets/Pasted%20image%2020241113125232.png)

END

---

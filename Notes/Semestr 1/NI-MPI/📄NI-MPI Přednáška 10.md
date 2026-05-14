---
created: 2024-11-13T12:04:25
title: "Vlastní čísla Mocninná metoda a QR algoritmus"
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI prednaska10 status-toReview numerika1


<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je třída **přímých metod**?

Back:

Metoda, co v **konečném počtu kroků** vrátí řešení.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113120616.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749467-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je třída **iteračních metod**?

Back:

Konstruují posloupnost nějakých přibližných řešení. Chceme aby ta posloupnost **měla limitu**, která je **skutečným řešením** dané úlohy.

Ta metoda jakoby postupně "vylepšuje/zpřesňuje" to řešení.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113120820.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749469-->

END

---

#### Připomenutí lineární algebry

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Připomenutí: Co je **vlastní číslo matice** a **vlastní vektor matice**?

Back:

![](../../../Assets/Pasted%20image%2020241113120949.png)
<!--ID: 1735205749472-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Připomenutí: Co tvoří vlastní vektory matice $M$?

Back:

![](../../../Assets/Pasted%20image%2020241113121014.png)
<!--ID: 1735205749474-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Připomenutí: Jak se počítají **vlastní čísla matice**?

Back:

![](../../../Assets/Pasted%20image%2020241113122213.png)
<!--ID: 1735205749477-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Připomenutí: Kdy je matice diagonalizovatelná?

Back:

![](../../../Assets/Pasted%20image%2020241113122403.png)
<!--ID: 1735205749479-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Připomenutí: Co je na diagonále matice $D$ a co je ve sloupcích matice $P$?

![](../../../Assets/Pasted%20image%2020241113122403.png)

Back:

![](../../../Assets/Pasted%20image%2020241113122552.png)
<!--ID: 1735205749485-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **norma**

Back:

![](../../../Assets/Pasted%20image%2020241113122701.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241113122707.png)
![](../../../Assets/Pasted%20image%2020241113122815.png)

<!-- ExampleEnd -->
<!--ID: 1735205749489-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: **ekvivalence norem**

Back:

![](../../../Assets/Pasted%20image%2020241113122842.png)
<!--ID: 1735205749491-->

END

---

### Mocninná metoda

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

K čemu slouží mocninná metoda?

Back:

![](../../../Assets/Pasted%20image%2020241113123136.png)
<!--ID: 1735205749494-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou předpoklady mocninné metody?

Back:

- Matice je diagonalizovatelná
- Můžeme označit vlastní čísla sestupně (viz níže)
- $\alpha_1 \neq 0$

![](../../../Assets/Pasted%20image%2020241113123241.png)
![](../../../Assets/Pasted%20image%2020241113123834.png)
<!--ID: 1735205749497-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **mocninná metoda**? (obecně)

Back:

![](../../../Assets/Pasted%20image%2020241113123657.png)

<!-- InformallySaidStart -->

Vezmu nějaký původní vektor a iterativně ho násobím maticí $M$.

Proto jsem schopný to napsat ve tvaru $M^k$ - odtud název mocninná metoda.

<!-- InformallySaidEnd -->
<!--ID: 1735205749499-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **mocninná metoda**?

Back:

![](../../../Assets/Pasted%20image%2020241113125152.png)
![](../../../Assets/Pasted%20image%2020241113125159.png)
![](../../../Assets/Pasted%20image%2020241113125205.png)
![](../../../Assets/Pasted%20image%2020241113125211.png)
<!--ID: 1735205749502-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Numerická matematika
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **kritérium zastavení** v mocninné metodě?

Back:

![](../../../Assets/Pasted%20image%2020241113125232.png)
<!--ID: 1735205749504-->

END

---

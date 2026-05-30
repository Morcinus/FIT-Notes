---
created: 2024-11-13T11:01:13
title: "Strojová čísla"
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI prednaska09 status-toReview numerika1

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy chyb v matematice? (4)

Back:

- chyba **modelu** - řešíme to moc zjednodušeně (např. zanedbáváme tření)
- chyba **dat** - vstupní data nejsou přesná
- chyba **algoritmu** - nemusíme mít algoritmus, který v konečném počtu kroků najde přesné řešení
- **zaokrouhlovací** chyba - při výpočtu dochází k chybám (např. při aritmetických operacích)
<!--ID: 1735205749507-->

END

---

### Zaokrouhlovací chyby

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je vědecký zápis čísel?

Back:

Zápis ve tvaru:
$$x = \pm \textcolor{Cerulean}q \cdot2^\textcolor{Orange}e$$

- $\textcolor{Cerulean}q$ - **signifikant** (mantisa)
- $\textcolor{Orange}e$ - **exponent**

<!-- ExplanationStart -->

![](../../../Assets/Pasted%20image%2020241113111445.png)

<!-- ExplanationEnd -->
<!--ID: 1735205749509-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy zápisu vědeckého zápisu čísla (dle IEE-754)?

Back:

- **poloviční** (binary 16, half precision)
- **jednoduchá** (binary 32, single precision)
- **dvojitá** (binary 64, double precision)
- **čtyřnásobná** (binary 128, quadruple precision)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113111846.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749512-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Kolik bitů má poloviční přesnost (half precision) u $m,e$?

Back:

- $m = 10$
- $e = 5$

Tags: core

<!--ID: 1735812207565-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Kolik bitů má jednoduchá přesnost (single precision) u $m,e$?

Back:

- $m = 23$
- $e = 8$

Tags: core

<!--ID: 1735812207571-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Kolik bitů má dvojitá přesnost (double precision) u $m,e$?

Back:

- $m = 52$
- $e = 11$

Tags: core

<!--ID: 1735812207573-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Pokud $e = 2^d-1$ a $m \neq 0$, tak $x = \ ?$

Back:

$$x = \text{NaN}$$

<!--ID: 1735205749514-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Pokud $e = 2^d-1$ a $m = 0$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot \text{Inf}$$

<!--ID: 1735205749517-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Pokud $0 <e < 2^d-1$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot (1.m_2)_2 \cdot 2^{e-b}$$

(tzv. **normalizovaná čísla**)

<!--ID: 1735205749519-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Pokud $e = 0$ a $m \neq 0$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot (0.m_2)_2 \cdot 2^{1-b}$$

(tzv. **subnormální čísla**)

<!--ID: 1735205749522-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Pokud $e = 0$ a $m = 0$, tak $x = \ ?$

Back:

$$x = (-1)^s \cdot 0$$

<!--ID: 1735205749524-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je skrytá jednička?

Back:

Neukládáme první jedničku v mantise, protože je jasné, že tam musí být.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113112321.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749527-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Reprezentace čísel v počítači
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **strojová čísla**?

Back:

Reálná čísla, která lze reprezentovat podle standardu IEEE-754 (znaménko, mantisa, exponent) se nazývají **strojová čísla**.

Tzn. jsou to reálná čísla, co mají **konečný** binární rozvoj.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241113112511.png)
![](../../../Assets/Pasted%20image%2020241113112534.png)

<!-- ExampleEnd -->
<!--ID: 1735205749530-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **strojová přesnost**?

Back:

Strojová přesnost $\varepsilon_F$ je vzdálenost $1$ a nejbližšího většího čísla.

<!-- ExplanationStart -->

To mi jakoby říká jak přesný je ten můj zápis čísla.

Neformálně "jak velké jsou mezery mezi čísly" na té reálné ose, kterou ukládám.

![](../../../Assets/Pasted%20image%2020241113112923.png)

<!-- ExplanationEnd -->
<!--ID: 1735205749532-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je funkce `fl`?

Back:

Zobrazení $\mathbb{R} \rightarrow F$, které přiřadí každému $x \in \mathbb{R}$ "nejbližší" strojové číslo.

<!-- DetailInfoStart -->

Nejbližší je určeno podle vybrané strategie:

- k nejbližšímu
- k $\pm$ nekonečnu
- náhodně
- usekávání (zaokrouhlování směrem k nule)

<!-- DetailInfoEnd -->
<!--ID: 1735205749534-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **přetečení a podtečení**?

Back:

Pokud chci reprezentovat číslo mimo rozsah, dochází k **přetečení** nebo **podtečení**.

<!--ID: 1735205749537-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **absolutní chyba** a **relativní chyba**

Back:

![](../../../Assets/Pasted%20image%2020241113113306.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020241113113335.png)

<!-- ExerciseEnd -->
<!--ID: 1735205749539-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **zaokrouhlovací jednotka**?

Back:

![](../../../Assets/Pasted%20image%2020241113113706.png)
![](../../../Assets/Pasted%20image%2020241113113721.png)
![](../../../Assets/Pasted%20image%2020241113113731.png)

<!--ID: 1735205749542-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Tvrzení: $\text{fl}(x) = \ ?$

Back:

![](../../../Assets/Pasted%20image%2020241113113814.png)

<!--ID: 1735205749544-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Tvrzení: operace sčítání, odčítání, násobení a dělení

Back:

![](../../../Assets/Pasted%20image%2020241113114019.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113114028.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241113114332.png)
![](../../../Assets/Pasted%20image%2020241113114339.png)

<!-- ExampleEnd -->
<!--ID: 1735205749547-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **krácení** v kontextu chyb?

Back:

Tím že při výpočtu nemám dostatek cifer pro výpočet, tak je mantisa výsledku méně přesná.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241113114748.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241113115123.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749549-->

END

---

<!--
Exam Note ID: NI-SPOL-05
Exam Note Section Name: Chyby vznikající při výpočtech s pohyblivou řádovou čárkou
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Tvrzení: počet ztracených bitů při odečítání

(pozn. tohle asi není tak důležitý umět)

Back:

![](../../../Assets/Pasted%20image%2020241113114919.png)

<!-- ExplanationStart -->

Říká nám to, kolik bitů ztratíme, když se stane **krácení**.

<!-- ExplanationEnd -->
<!--ID: 1735205749552-->

END

---

![](../../../Assets/Pasted%20image%2020241113115144.png)

---
created: 2025-04-11T11:25:53
title: "Pravděpodobnosti pohlcení"
up: "[[📖NI-VSM]]"
---

TARGET DECK: archive
FILE TAGS: NI-VSM prednaska16 status-toReview red

START
FIT-Card

(FIT-Notes flashcard)

Mějme matici přechodů:
![](../../../Assets/Pasted%20image%2020250516155913.png)

Co mi říkají $U_{ij}$, $N_{ik}$ a $N_{i \circ }$?

Back:

![](../../../Assets/Pasted%20image%2020250516160210.png)

- $U_{ij}$ - Vezmu libovolný přechodný stav a chci zjistit pravděpodobnost, že první stav z $C$ (trvalých stavů) bude zrovna stav $j$
- $N_{ik}$ - střední počet přechodného stavu k, když začnu ve stavu i
  - Kolik času strávím ve stavu $k$ (kolikrát tam budu), než bude řetězec pohlcen v $C$
- $N_i$ - střední doba, jak dlouho trvá, než se pohltím do nějakého stavu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250411112710.png)

![](../../../Assets/Pasted%20image%2020250411112705.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250411112724.png)

<!-- ExampleEnd -->
<!--ID: 1746518364612-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: čas absorbce

Back:

![](../../../Assets/Pasted%20image%2020250411112735.png)

Označuje to čas, kdy přejdu z množiny přechodných stavů do trvalých.
<!--ID: 1746518364615-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: Je-li množina stavů $S$ konečná, pak... (čas absorbce)

Back:

![](../../../Assets/Pasted%20image%2020250411112756.png)
<!--ID: 1746518364618-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: $U_{ij}$

Back:

![](../../../Assets/Pasted%20image%2020250411112827.png)

![](../../../Assets/Pasted%20image%2020250516161230.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250411112835.png)

![](../../../Assets/Pasted%20image%2020250411130234.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518364620-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak získáme pravděpodobnost pohlcení na množině $C_r$?

(tzn. pravděpodobnost, že řetězec byl pohlcen tou množinou)

Back:

![](../../../Assets/Pasted%20image%2020250411112859.png)
<!--ID: 1746518364623-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Matice pravděpodobností pohlcení $U$ je řešením rovnice ...

Back:

![](../../../Assets/Pasted%20image%2020250411112906.png)

$R$ - matice přechodu z přechodových do trvalých stavů
$T$ - matice přechodu z přechodových do přechodových stavů

Matice přechodu:
![](../../../Assets/Pasted%20image%2020250516161641.png)
<!--ID: 1746518364626-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Lemma: $A$ je čtvercová matice $\implies$ $(I-A)$ je regulární

Back:

![](../../../Assets/Pasted%20image%2020250411112950.png)
<!--ID: 1746518364628-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Pro matici pravděpodobností pohlecní platí $U = \ ???$

(Aneb jak spočíst $\textbf{U}$)

Back:

![](../../../Assets/Pasted%20image%2020250411113028.png)

$I$ je jednotková matice

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250411113037.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364631-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak invertovat matici 2x2?

(pozn. hledání inverze se prý bude očas vyskytovat u zkoušky)

Back:

Napíšeme si to vedle matice $E$ a zgemujem.

Např.
![](../../../Assets/Pasted%20image%2020250522181145.png)
<!--ID: 1746518364634-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **počet návštěv stavu**

(na tohle se prý u zkoušky ptát nebudou, ale je fajn vědět co to cca je)

Back:

![](../../../Assets/Pasted%20image%2020250411113051.png)
<!--ID: 1746518364637-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **střední počet návštěv stavu**

Back:

![](../../../Assets/Pasted%20image%2020250411113106.png)

$W_k$ je počet návštěv stavu $k$
<!--ID: 1746518364640-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Co platí pro matici $N$? (resp. jak se dá spočítat)

Back:

![](../../../Assets/Pasted%20image%2020250411113123.png)

Pozn. $I$ je identita, tedy to, co jsme v jiných předmětech značili jako $E$

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250411113135.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364643-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **fundamentální matice řetězce**

Back:

![](../../../Assets/Pasted%20image%2020250411113151.png)

Pozn. $I$ je identita, tedy to, co jsme v jiných předmětech značili jako $E$
<!--ID: 1746518364647-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Pro střední dobu do pohlcení při startu v $i \in T$ platí $\dots$ (aka **jak se spočítá**)

$N_{i \circ}  = \ ?$

Back:

![](../../../Assets/Pasted%20image%2020250411113214.png)

Pozn. $I$ je identita, tedy to, co jsme v jiných předmětech značili jako $E$

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250411113224.png)

<!-- ExampleEnd -->
<!--ID: 1746518364649-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Limita matice $C^n$

Back:

![](../../../Assets/Pasted%20image%2020250411113245.png)
<!--ID: 1746518364652-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Limita matice $P^n$

Back:

![](../../../Assets/Pasted%20image%2020250411113300.png)

Ta $\widetilde{C}$ má v řádcích stacionární rozdělení podřetězce $C_r$ (viz detail).

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250411113309.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250411113245.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518364655-->

END

---

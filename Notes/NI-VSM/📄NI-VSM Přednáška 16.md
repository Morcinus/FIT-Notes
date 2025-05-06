---
created: 2025-04-11T11:25:53
title: "Pravděpodobnosti pohlcení"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska16 status-toReview

START
FIT-Card

Co je cílem pravděpodobností pohlcení?

Back:

- $U_{ij}$ - Vezmu libovolný přechodný stav a chci zjistit pravděpodobnost, že první stav z $C$ (trvalých stavů) bude zrovna stav $j$
- $N_{ik}$ - střední počet přechodného stavu k, když začnu ve stavu i
	- Kolik času strávím ve stavu $k$ (kolikrát tam budu), než bude řetězec pohlcen v $C$
- $N_i$ - střední doba, jak dlouho trvá, než se pohltím do nějakého stavu

![](../../Assets/Pasted%20image%2020250411112710.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250411112705.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250411112724.png)
<!-- ExampleEnd -->
<!--ID: 1746518364612-->
END

---


START
FIT-Card

Definice: čas absorbce

Back:

![](../../Assets/Pasted%20image%2020250411112735.png)

Označuje to čas, kdy přejdu z množiny přechodných stavů do trvalých.
<!--ID: 1746518364615-->
END

---


START
FIT-Card

Lemma: Je-li množina stavů $S$ konečná, pak...

Back:

![](../../Assets/Pasted%20image%2020250411112756.png)
<!--ID: 1746518364618-->
END

---


START
FIT-Card

Definice: $U_{ij}$

Back:

![](../../Assets/Pasted%20image%2020250411112827.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250411112835.png)

![](../../Assets/Pasted%20image%2020250411130234.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518364620-->
END

---


START
FIT-Card

Jak získáme pravděpodobnost pohlcení na množině $C_r$?

Back:

![](../../Assets/Pasted%20image%2020250411112859.png)
<!--ID: 1746518364623-->
END

---


START
FIT-Card

Věta: Matice pravděpodobností pohlcení $U$ je řešením rovnice ...

Back:

![](../../Assets/Pasted%20image%2020250411112906.png)

$R$ - matice přechodu mezi přechodnými a trvalými
$T$ - matice přechodu mezi přechodnými a přechodnými
<!--ID: 1746518364626-->
END

---


START
FIT-Card

Lemma: $A$ je čtvercová matice $\implies$ $(I-A)$ je regulární

Back:

![](../../Assets/Pasted%20image%2020250411112950.png)
<!--ID: 1746518364628-->
END

---


START
FIT-Card

Věta: Pro matici pravděpodobností pohlecní platí $U = \ ???$

Back:

![](../../Assets/Pasted%20image%2020250411113028.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250411113037.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364631-->
END

---


START
FIT-Card

Jak invertovat matici 2x2?

(pozn. hledání inverze se prý bude očas vyskytovat u zkoušky)

Back:

Stačí prohodit prvky diagonály `\` a omínusovat prvky diagonály `/` a pak to pronásobit:

![](../../Assets/Pasted%20image%2020250411131531.png)
<!--ID: 1746518364634-->
END

---


START
FIT-Card

Definice: **počet návštěv stavu**

(na tohle se prý u zkoušky ptát nebudou, ale je fajn vědět co to cca je)

Back:

![](../../Assets/Pasted%20image%2020250411113051.png)
<!--ID: 1746518364637-->
END

---


START
FIT-Card

Definice: **střední počet návštěv stavu**

Back:

![](../../Assets/Pasted%20image%2020250411113106.png)
<!--ID: 1746518364640-->
END

---


START
FIT-Card

Věta: Co platí pro matici $N$?

Back:

![](../../Assets/Pasted%20image%2020250411113123.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250411113135.png)
<!-- ExerciseEnd -->
<!--ID: 1746518364643-->
END

---


START
FIT-Card

Definice: **fundamentální matice řetězce**

Back:

![](../../Assets/Pasted%20image%2020250411113151.png)
<!--ID: 1746518364647-->
END

---


START
FIT-Card

Věta: Pro střední dobu do pohlcení při startu v $i \in T$ platí $\dots$

Back:

![](../../Assets/Pasted%20image%2020250411113214.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250411113224.png)
<!-- ExampleEnd -->
<!--ID: 1746518364649-->
END

---


START
FIT-Card

Limita matice $C^n$

Back:

![](../../Assets/Pasted%20image%2020250411113245.png)
<!--ID: 1746518364652-->
END

---


START
FIT-Card

Věta: Limita matice $P^n$

Back:

![](../../Assets/Pasted%20image%2020250411113300.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250411113309.png)
<!-- ExampleEnd -->
<!--ID: 1746518364655-->
END

---

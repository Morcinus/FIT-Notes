---
created: 2025-03-29T08:44:06
title: Testování hypotéz
up:
  - "[[📖NI-VSM]]"
---

TARGET DECK: archive
FILE TAGS: NI-VSM prednaska11 status-toReview blue

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Multinomické rozdělení**

Back:

![](../../../Assets/Pasted%20image%2020250329084510.png)

Mutlinomické rozdělení je jako binomické (např. házíme několikrát mincí), ale s více možnými výstupy (např. házíme několikrát kostkou).

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250329084519.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250520115857.png)

<!-- ExampleEnd -->
<!--ID: 1746599649731-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se spočte $EN_i$ u multinomického rozdělení?

Back:

![](../../../Assets/Pasted%20image%2020250329103530.png)
<!--ID: 1746599649738-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se spočte $\text{var} N_i$ multinomického rozdělení?

Back:

![](../../../Assets/Pasted%20image%2020250329103559.png)
<!--ID: 1746599649745-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se spočte $\text{cov }(N_i, N_j)$ multinomického rozdělení?

Back:

$$\text{cov}(N_i,N_j)=-np_ip_j$$
pro každé $i \neq j$
<!--ID: 1746599649752-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Pearsonova statistika

Back:

![](../../../Assets/Pasted%20image%2020250329084536.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250329084545.png)

<!-- DetailInfoEnd -->
<!--ID: 1746599649760-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se provede **test $\chi^2$ multinomického rozdělení** při známých parametrech?

Back:

1. Naměříme nějaké hodnoty, např. kolikrát padla na pětistranné kostce $1, 2, 3, 4, 5$
2. Chceme srovnat, že ty pravděpodobnosti odpovídají našem odhadům (např. naměřili jsme $p' = (19\%, 20\%, 21\%, 21\%, 19\%)$ a čekali bychom všude bude $20\%$)
3. Tzn. testujeme, že se mi shodují naměřené pravděpodobnosti s těmi, co bychom očekávali

![](../../../Assets/Pasted%20image%2020250520121548.png)
![](../../../Assets/Pasted%20image%2020250520121618.png)

$np_i$ je počet naměřených hodnot v daném binu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250329084640.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250329084649.png)

<!-- ExampleEnd -->
<!--ID: 1746599649767-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké kritérium musí být dodrženo pro provedení **testu $\chi^2$ multinomického rozdělení** při známých parametrech? (2 možnosti)

Back:

1. $np_i \geq 5$ pro každý "bin"
2. Nebo pokud $k \geq 3$ **Yarnoldovo kritérium**: $np_i \geq q$, kde $q$ je podíl tříd, pro které platí $np_i \lt 5$
<!--ID: 1747736448027-->

END

---

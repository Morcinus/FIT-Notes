---
created: 2025-04-11T14:05:04
title: "Klasifikace stavů markovského řetězce"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska14 status-toReview red


START
FIT-Card

Definice: **trvalý (rekurentní)** stav

Back:

![](../../Assets/Pasted%20image%2020250411140549.png)

<!-- ExplanationStart -->
Rekurentní stav = stav, do kterého se řetězec dřív nebo později určitě vrátí, pokud z něj jednou vyjde.
<!-- ExplanationEnd -->


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250411140613.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518364660-->
END

---



START
FIT-Card

Definice: **přechodný (transientní)** stav

Back:

![](../../Assets/Pasted%20image%2020250411140603.png)

<!-- ExplanationStart -->
Přechodný stav = stav, ze kterého když někdy vyjdu, tak není 100% jistý, že se do něj vrátím
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250411140613.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518364662-->
END

---


START
FIT-Card

Definice: **Čas první návštěvy**

Back:

![](../../Assets/Pasted%20image%2020250411140632.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250411140637.png)
<!-- ImageEnd -->
<!--ID: 1746518364665-->
END

---


START
FIT-Card

Definice $f_{ij}(n)$ a $f_{ij}$ - v kontextu první návštěvy stavů

Back:

![](../../Assets/Pasted%20image%2020250411140700.png)
<!--ID: 1746518364667-->
END

---


START
FIT-Card

Důsledek: Vztah $f_{ii}$ a přechodných a trvalých stavů

Back:

![](../../Assets/Pasted%20image%2020250411140723.png)
<!--ID: 1746518364670-->
END

---


START
FIT-Card

Definice: **Střední doba návratu** do stavu

Back:

![](../../Assets/Pasted%20image%2020250411140738.png)
<!--ID: 1746518364673-->
END

---


START
FIT-Card

Definice: **nenulový** a **nulový** stav

Back:

![](../../Assets/Pasted%20image%2020250411140753.png)

<!-- ExplanationStart -->
Nenulový - máme třeba stavy $A$ a $B$, mezi kterýma přeskakujeme. S nějakou střední hodnotou budu v tom savu

Nulový - máme např. nekonečně stavů $0,1,2,\dots$ a můžeme se posouvat o jeden dopředu nebo dozadu.

Když to odstartuju v $0$, tak se tam někdy vrátím, ale bude to za hrozně dlouho - střední hodnota bude nekonečno 
<!-- ExplanationEnd -->

<!--ID: 1746518364675-->
END

---


START
FIT-Card

Definice: **Periodicita stavu** (periodický a aperiodický stav)

Back:

![](../../Assets/Pasted%20image%2020250411140822.png)
<!--ID: 1746518364678-->
END

---


START
FIT-Card

Věta: čemu je rovna limita $\textbf{P}_{ii}(n)$ a $\textbf{P}_{ji}(n)$ u **aperiodického stavu**

Back:

![](../../Assets/Pasted%20image%2020250411140841.png)
<!--ID: 1746518364681-->
END

---


START
FIT-Card

Poznámka: čemu je rovna limita u **periodického stavu**

Back:

![](../../Assets/Pasted%20image%2020250411140857.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250411140907.png)
<!-- ExampleEnd -->
<!--ID: 1746518364684-->
END

---

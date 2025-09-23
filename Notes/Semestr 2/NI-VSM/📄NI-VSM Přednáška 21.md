---
created: 2025-05-01T14:20:08
title: "Nehomogenní Poissonův proces"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska21 status-toReview green


START
FIT-Card

Co znamená model náhodných příchodů?

Back:

Události náhodně nastávají v časovém rozmezí podle Uniformního rozdělení.

![](../../../Assets/Pasted%20image%2020250501142037.png)
<!--ID: 1746599649285-->
END

---


START
FIT-Card

Definice: proces příchodů do času $t$

Back:

![](../../../Assets/Pasted%20image%2020250501142100.png)

$L$ = jak dlouhý je čas

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250501142109.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649293-->
END

---


START
FIT-Card

Pozorování: Binomické přírustky u modelu náhodných příchodů

Back:

![](../../../Assets/Pasted%20image%2020250501142134.png)

Přírustky jsou jakoby ty skoky mezi těmi časy příchodu

<!-- ProofStart -->
![](../../../Assets/Pasted%20image%2020250501144223.png)
<!-- ProofEnd -->
<!--ID: 1746599649301-->
END

---


START
FIT-Card

Pozorování: Přírustky procesu a Poissonovo rozdělení (u modelu náhodných příchodů)

Back:

![](../../../Assets/Pasted%20image%2020250501142157.png)

<!-- ProofStart -->
![](../../../Assets/Pasted%20image%2020250501144349.png)
<!-- ProofEnd -->
<!--ID: 1746599649308-->
END

---


START
FIT-Card

Pozorování: Přírustky procesu a nezávislost (u modelu náhodných příchodů)

Back:

![](../../../Assets/Pasted%20image%2020250501142214.png)
<!--ID: 1746599649315-->
END

---


START
FIT-Card

Věta: $f_{T_1, \dots, T_n|N_t = n}(t_1, \dots, t_n) = \ ?$

Back:

![](../../../Assets/Pasted%20image%2020250501142312.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250501142322.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649323-->
END

---


START
FIT-Card

Důsledek: $P(N_s = m | N_t = n) = \ ???$

Back:

![](../../../Assets/Pasted%20image%2020250501142354.png)
<!--ID: 1746599649330-->
END

---


START
FIT-Card

Definice: Nehomogenní Poissonův proces

Back:

![](../../../Assets/Pasted%20image%2020250501142412.png)

Nehomogenní Proces = Umožňuje nám modelovat to, že události nastávají v nějakých časech častěji a v nějaké časy méně často.

Např. homogenní je radioaktivní rozpad, nehomogenní je příchod zákazníků do restaurace v průběhu dne

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250501142432.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649338-->
END

---


START
FIT-Card

Poznámka: Značení $\Lambda (t)$

Back:

![](../../../Assets/Pasted%20image%2020250501142513.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250501142521.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649344-->
END

---


START
FIT-Card

Věta: Nehomogenní Poisson a rozdělení času příchodu

Back:

![](../../../Assets/Pasted%20image%2020250501142617.png)

<!-- ImageStart -->
![](../../../Assets/Pasted%20image%2020250501142632.png)
<!-- ImageEnd -->
<!--ID: 1746599649352-->
END

---


START
FIT-Card

Důsledek: $P(N_s=m|N_t=n) = \ ???$ pro nehomogenní Poisson a rozdělení času příchodu

Back:

![](../../../Assets/Pasted%20image%2020250501142713.png)
<!--ID: 1746599649359-->
END

---


START
FIT-Card

Jak funguje dělení Poissonova procesu (thinning)?

Back:

1. Máme $\text{Poisson}(\lambda)$
2. Když nastane událost, můžeme s určitou pravděpodobností ji označit za určitý typ události
3. Procesy těch daných typů budou taky poissonovy s parametrem $\text{Poisson}(\lambda p_i)$

Vzniklé procesy se označují jako $\{N_t^{(i)}|t \geq 0\}$

![](../../../Assets/Pasted%20image%2020250501142731.png)
<!--ID: 1746599649366-->
END

---


START
FIT-Card

Věta: Procesy $\dots$ jsou nezávislé Poissonovy s intenzitou $\dots$

(procesy po provedení thinningu)

Back:

![](../../../Assets/Pasted%20image%2020250501142758.png)
<!--ID: 1746599649373-->
END

---


START
FIT-Card

Důsledek: Pokud platí ..., pak jsou procesy nezávislé Poissonovy procesy s intenzitou

Back:

![](../../../Assets/Pasted%20image%2020250501142837.png)
<!--ID: 1746599649380-->
END

---


START
FIT-Card

Jak funguje skládání Poissonových procesů? (superpozice)

Back:

1. Máme 2 poissonovské procesy s $\lambda_1$ a $\lambda_2$
2. Když je složíme, tak z toho vznikne $\text{Poisson}(\lambda_1+\lambda_2)$


![](../../../Assets/Pasted%20image%2020250501142902.png)
<!--ID: 1746599649388-->
END

---


START
FIT-Card

Věta: Proces $N_t = N_t^{(1)}+ N_t^{(2)}$

(skládání poissonovských procesů)

Back:

![](../../../Assets/Pasted%20image%2020250501142945.png)
<!--ID: 1746599649395-->
END

---


START
FIT-Card

Jak lze sestavit **nehomogenní Poissonův proces** pomocí **Nehomogenního dělení**?

Back:

1. Nagenerujeme si časy $\text{Poisson}(\lambda)$ - exponenciální časy mezi událostmi (modré puntíky)
2. Pro každý čas vygenerujeme náhodné číslo mezi $0$ a $1$, tedy $\text{Unif}(0,1)$
3. Zadefinujeme si funkci $p(t)$, která nám řekne, jestli daný bod podle vygenerovaného čísla přijmeme nebo ne
4. Přijmuté body nám pak tvoří **nehomogenní** $Poisson(\lambda p(t))$

Pozn. $\lambda p(t) = \lambda (t)$

![](../../../Assets/Pasted%20image%2020250501143006.png)

![](../../../Assets/Pasted%20image%2020250501143034.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250501143059.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649403-->
END

---

START
FIT-Card

Jak funguje systém $M|G|\infty$?
- na co se ptáme 
- čemu je rovna $p(s)$
- čemu je pak rovna střední hodnota?

Back:

Přijde požadavek a je v systému nějakou dobu. Já se ptám, jaká je pravděpodobnost, že v bodě $t$ tam ten požadavek ještě bude. 

Přijde požadavek v čase $s$ a my se ptáme, jaká je pravděpodobnost, že tam ještě bude v čase $t$. Tato pravděpodobnost je $p(s) := 1- G(t-s)$

To když dosadíme do nehomogenního thinningu, tak nám vyjde poisson se střední hodnotou
![](../../../Assets/Pasted%20image%2020250517162031.png)

Pro $t \rightarrow \infty$ to pak vychází $\frac{\lambda}{\mu}$
![](../../../Assets/Pasted%20image%2020250517162120.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250501143115.png)
![](../../../Assets/Pasted%20image%2020250501143124.png)
![](../../../Assets/Pasted%20image%2020250501143134.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649425-->
END

---

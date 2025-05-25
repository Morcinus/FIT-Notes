---
created: 2025-04-23T09:03:53
title: Systémy hromadné obsluhy
up:
  - "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska20 status-toReview green


START
FIT-Card

Definice: Model hromadné obsluhy

Back:

Nezapomenout na nezávislost - je to důležitý!

![](../../Assets/Pasted%20image%2020250423090622.png)

Pozn. takhle to chtějí popsat u zkoušky a u státnic.
<!--ID: 1746599649092-->
END

---


START
FIT-Card

Definice: **Proces hromadné obsluhy**

Back:

![](../../Assets/Pasted%20image%2020250423090638.png)
<!--ID: 1746599649104-->
END

---


START
FIT-Card

Co je $\varrho$ v systému hromadné obsluhy? Jak se spočte? Jaké může mít hodnoty?

Back:

$\varrho$ je hustota zákazníků

Jak se spočte
$$\varrho = \frac{\lambda}{c\mu}$$

- $\varrho > 1$, systém se přehltí (s pravděpodobností 1)
- $\varrho <1$, systém se ustálí na stabilním rovnovážném rozdělení

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020250423100453.png)

Je to jakoby hustota obsluhy.

Když je hustota 1, tak to je přesně na hranici toho, že to ten systém stíhá. Když to bude víc, tak to přehltí systém. (Když jsem na 1, tak ten systém bude hodně citlivý na nějaký mini přetížení).
<!-- DetailInfoEnd -->
<!--ID: 1746599649114-->
END

---


START
FIT-Card

Definice: **Kandallova notace** ($A|S|c$ notace)

Back:

![](../../Assets/Pasted%20image%2020250423090710.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250423090724.png)
<!-- ExampleEnd -->
<!--ID: 1746599649122-->
END

---


START
FIT-Card

Definice: **Poissonovo rozdělení** (Poissonova aproximace) - předpis, parametry, jak je definováno

Pozn. tohle je dobrý umět, tu definici, protože to bylo v jedné zkoušce z fitwiki :)

Back:

**Předpis**: $X \sim Poisson(\lambda)$
**Parametry**:
- $\lambda$ - počet pokusů
**Definice**:
- $P(X=k) = \frac{\lambda^k}{k!}e^{-\lambda}$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120403.png)
<!-- DetailInfoEnd -->
<!--ID: 1748105582469-->
END

---


START
FIT-Card

Jaká je střední hodnota **Poissonovo rozdělení**?

Back:

$$EX = \lambda$$
<!--ID: 1748105876213-->
END

---


START
FIT-Card

Jaký je rozptyl **Poissonovo rozdělení**?

Back:

$$varX=\lambda$$
<!--ID: 1748105876217-->
END

---


START
FIT-Card

Čemu je rovna střední doba příchodu a střední doba zpracování požadavku u systémů hromadné obsluhy?

Back:

Střední doba příchodu:
$EA = \frac{1}{\lambda}$

Střední doba zpracování:
$ES = \frac{1}{\mu}$

Tags: exam
<!--ID: 1748081595839-->
END

---


START
FIT-Card

Jak vypadá systém $M|M|1$?
- Matice intenzit
- Jak se spočte stacionární rozdělení

Back:

![](../../Assets/Pasted%20image%2020250423090738.png)
<!--ID: 1746599649130-->
END

---


START
FIT-Card

Věta: Existence stacionárního rozdělení pro $M|M|1$

Back:

![](../../Assets/Pasted%20image%2020250423090829.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250423090836.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649138-->
END

---


START
FIT-Card

Stacionární vlastnosti $M|M|1$:

Nechť je systém ve stacionárním stavu:
- Čemu je rovna $EN$ - střední počet zákazníků v systému
- Čemu je rovna $EN_s$ - střední počet zákazníků na serveru
- Čemu je rovna $EN_f$ - střední počet zákazníků ve frontě

Na tohle se nás prý můžou zeptat (ty střední hodnoty)

Back:

$$EN = \frac{\varrho}{1-\varrho}$$

$$EN_s = \varrho$$

$$EN_f = \frac{\varrho^2}{1-\varrho}$$


![](../../Assets/Pasted%20image%2020250423090859.png)
<!--ID: 1746599649145-->
END

---


START
FIT-Card

Definice: Doba čekání ve frontě

Back:

![](../../Assets/Pasted%20image%2020250423090921.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250423090929.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599649152-->
END

---


START
FIT-Card

Pozorování: Jaké rozdělení má u $M|M|1$ doba čekání ve frontě?

Back:

![](../../Assets/Pasted%20image%2020250423090951.png)
<!--ID: 1746599649160-->
END

---


START
FIT-Card

Jak vypadá systém $M|M|\infty$?
- Matice intenzit
- Jak se spočte stacionární rozdělení

Back:

![](../../Assets/Pasted%20image%2020250423091014.png)
<!--ID: 1746599649167-->
END

---


START
FIT-Card

Jak vypadá stacionární rozdělení pro systém $M|M|\infty$?

Back:

Aneb co mi toto říká je, že se ten celý systém chová jako Poissonovo rozdělení s tím parametrem $\lambda / \mu$.

![](../../Assets/Pasted%20image%2020250423091059.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250423091111.png)
<!-- ExampleEnd -->
<!--ID: 1746599649174-->
END

---


START
FIT-Card

Jak vypadá systém $M|M|c$?
- Matice intenzit

Back:

![](../../Assets/Pasted%20image%2020250423091133.png)
<!--ID: 1746599649182-->
END

---


START
FIT-Card

Pozorování: Jak vypadá stacionární rozdělení systému $M|M|c$?

Back:

![](../../Assets/Pasted%20image%2020250423091207.png)
<!--ID: 1746599649190-->
END

---


START
FIT-Card

Věta: **Littleho věta**

Back:

![](../../Assets/Pasted%20image%2020250423091224.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250423091239.png)
<!-- ExampleEnd -->

<!-- ProofStart -->
![](../../Assets/Pasted%20image%2020250423091258.png)
![](../../Assets/Pasted%20image%2020250423091305.png)
![](../../Assets/Pasted%20image%2020250423091316.png)
![](../../Assets/Pasted%20image%2020250423091325.png)
<!-- ProofEnd -->
<!--ID: 1746599649198-->
END

---


START
FIT-Card

Jak vypadá systém $G|G|1$?

Resp. jak se dostaneme k spočtení $\pi_0$?

Back:

![](../../Assets/Pasted%20image%2020250423091348.png)
<!--ID: 1746599649205-->
END

---


START
FIT-Card

Jak se spočte $EN$ v systému? 

Aneb střední počet požadavků/zákazníků v systému z dlouhodobého hlediska.

Back:

Pro $M|M|1$ ve stacionárním stavu:
$$EN = \sum_{n=0}^\infty n \pi_n = \frac{\rho}{1-\rho}$$

Pro $M|M|\infty$ je to jen $\rho$
<!--ID: 1747933518468-->
END

---

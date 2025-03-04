---
created: 2025-02-20T11:23:05
title: "Náhodné veličiny"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska02 status-toReview


START
FIT-Card

Lemma: funkce obecné náhodné veličiny

Back:

![](../../Assets/Pasted%20image%2020250220112343.png)

<!-- ExplanationStart -->
Když máme nějakou přímku $R$ (např. výšky studentů), tak můžu takhle složit několik těch zobrazení. Takhle to můžu řetězit a vždy dostanu opět náhodnou veličinu.

![](../../Assets/Pasted%20image%2020250220113342.png)

Typicky máme nějakou množinu $B$ v $\mathbb{R}$. Například množina $B$ jsou čísla mezi 170 a 180 (hledáme studenty co mají takovou výšku).

Pak typicky hledáme **vzor** té množiny $B$, tedy jevy (studenty), kteří mají takovou výšku.

![](../../Assets/Pasted%20image%2020250220112937.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Definice: **Střední hodnota** diskrétní náhodné veličiny $X$

Back:

![](../../Assets/Pasted%20image%2020250220114452.png)

END

---


START
FIT-Card

Definice: **Střední hodnota** spojité náhodné veličiny

Back:

![](../../Assets/Pasted%20image%2020250220114515.png)

END

---


START
FIT-Card

Definice: **Diskrétní rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220114611.png)

END

---


START
FIT-Card

Definice: **Spojité rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220114628.png)
![](../../Assets/Pasted%20image%2020250220114632.png)

END

---


START
FIT-Card

Věta: vlastnosti střední hodnoty (3)

Back:

![](../../Assets/Pasted%20image%2020250220114735.png)

<!-- ExplanationStart -->
1) Když je náhodná veličina nezáporná, tak střední hodnota je taky nezáporná
2) Když budu třeba náhodnou veličinu v stupních celsia transformovat na střední hodnotu ve Fahrenheitech, tak mi jednoduše stačí pronásobit tu $E$.. Tzn. můžu si jednoduše posouvat hodnoty náhodné veličiny a tu střední hodnotu o nějaké konstanty.
3) Prostě když mám konstantu, tak její střední hodnota je prostě ta konstanta
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **Rozptyl**

Back:

Pro náhodnou veličinu $X$ je definován jako:
$$\text{var } X = E(X-EX)^2=EX^2-(EX)^2$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220114937.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Definice: **Směrodatná odchylka**

Back:

![](../../Assets/Pasted%20image%2020250220114951.png)

END

---


START
FIT-Card

Čemu je rovno:
$$\text{var}(aX+b)= \ ???$$

Back:

$$\text{var}(aX+b)= \ a^2\text{var}X$$

END

---


START
FIT-Card

Jaký rozptyl má náhodná veličina rovna konstantě $c \in \mathbb{R}$

Back:

$$\text{var }c= 0$$

END

---


START
FIT-Card

Definice: $k$-tý moment

Back:

$$\mu_k = EX^k$$

END

---


START
FIT-Card

Definice: $k$-tý centrovaný moment

Back:

![](../../Assets/Pasted%20image%2020250220115502.png)

END

---


START
FIT-Card

Definice: koeficient šikmosti

Back:

![](../../Assets/Pasted%20image%2020250220115528.png)

END

---



START
FIT-Card

Definice: koeficient špičatosti

Back:

![](../../Assets/Pasted%20image%2020250220115543.png)

END

---


START
FIT-Card

Definice: $\alpha$-kvantil

Back:

![](../../Assets/Pasted%20image%2020250220115558.png)

END

---


START
FIT-Card

Definice: dolní kvartil, medián, horní kvartil

Back:

![](../../Assets/Pasted%20image%2020250220115621.png)

kde $q$ je kvantil.

END

---

### Rozdělení
#### Diskrétní rozdělení

START
FIT-Card

Definice: **Bernoulliho rozdělení** - předpis, parametry, jak je definováno

Back:

**Předpis**: $X \sim Be(p)$
**Parametry**:
- $p \in [0,1]$ = jaká je pravděpodobnost úspěchu
**Definice**:
- $P(X=1) = p$
- $P(X=0) = 1-p$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220115957.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co mi říká Bernoulliho rozdělení (vlastními slovy)?

Back:

Dělám několik pokusů (např. 20x hodím mincí), Bernoulliho rozdělení mi říká, jaká je pravděpodobnost, že pokus skončí "úspěchem" a "neúspěchem".

- Parametr $p$ mi typicky říká, jaká je šance úspěchu, 
- $0$ je typicky neúspěch
- $1$ úspěch

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220120027.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jaká je střední hodnota **Bernoulliho rozdělení**?

Back:

$$EX = p$$

END

---


START
FIT-Card

Jaký je rozptyl **Bernoulliho rozdělení**?

Back:

$$varX=p(1-p)$$

END

---


START
FIT-Card

Definice: **Binomické rozdělení** (=Alternativní rozdělení)? - předpis, parametry, jak je definováno

Back:

**Předpis**: $X \sim Binom(n,p)$
**Parametry**:
- $n$ - počet pokusů
- $p \in [0,1]$ = pravděpodobnost úspěchu u každého pokusu
**Definice**:
- $P(X=k) = {n \choose k}p^k(1-p)^{n-k}$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120113.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co mi říká binomické rozdělení? (vlastními slovy)

Back:

Dělám několik pokusů (např. 20x hodím mincí). Binomické rozdělení mi říká, jaké jsou pravděpodobnosti, že právě $k$ pokusů dopadlo úspěšně.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220120134.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jaká je střední hodnota **Binomického rozdělení**?

Back:

$$EX = np$$

END

---


START
FIT-Card

Jaký je rozptyl **Binomického rozdělení**?

Back:

$$varX=np(1-p)$$

END

---


START
FIT-Card

Definice: **Geometrické rozdělení** - předpis, parametry, jak je definováno

Back:


**Předpis**: $X \sim Geom(p)$
**Parametry**:
- $p \in (0,1)$ - pravděpodobnost úspěchu pokusu
**Definice**:
- $P(X=k) = p(1-p)^{k-1}$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120236.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co nám říká geometrické rozdělení?

Back:

Říká nám pravděpodobnost, že $k$ tý pokus byl **první úspěšný**.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220120256.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jaká je střední hodnota **Geometrického rozdělení**?

Back:

$$EX = \frac{1}{p}$$

END

---


START
FIT-Card

Jaký je rozptyl **Geometrického rozdělení**?

Back:

$$varX=\frac{1-p}{p^2}$$

END

---


START
FIT-Card

Definice: **Poissonovo rozdělení** (Poissonova aproximace) - předpis, parametry, jak je definováno

Back:

**Předpis**: $X \sim Poisson(\lambda)$
**Parametry**:
- $\lambda$ - počet pokusů
**Definice**:
- $P(X=k) = \frac{\lambda^k}{k!}e^{-\lambda}$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120403.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jaká je střední hodnota **Poissonovo rozdělení**?

Back:

$$EX = \lambda$$

END

---


START
FIT-Card

Jaký je rozptyl **Poissonovo rozdělení**?

Back:

$$varX=\lambda$$

END

---

#### Spojité rozdělení

START
FIT-Card

Definice: **rozvnoměrné rozdělení** - předpis, parametry, jak je definováno

Back:

**Předpis**: $X \sim Unif(a,b)$
**Parametry**:
- $a$ - dolní mez rozdělení
- $b$ - horní mez rozdělení
**Definice**:
- $f_X(x)=\frac{1}{b-1} \quad x \in (a,b)$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120502.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220120511.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Jaká je střední hodnota **rovnoměrného rozdělení**?

Back:

$$EX = \frac{a+b}{2}$$

END

---


START
FIT-Card

Jaký je rozptyl **rovnoměrného rozdělení**?

Back:

$$varX=\frac{(b-a)^2}{12}$$

END

---


START
FIT-Card

Definice: **Exponenciální rozdělení** - předpis, parametry, jak je definováno

Back:

**Předpis**: $X \sim Exp(\lambda)$
**Parametry**:
- $\lambda > 0$
**Definice**:
- $f_X(x) = \lambda e^{-\lambda x} \quad x \in [0, \infty)$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120558.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220120605.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Co nám říká exponenciální rozdělení?

Back:

Např. jak dlouho nám pravděpodobně vydží nějaký přístroj funkční

![](../../Assets/Pasted%20image%2020250220120605.png)

END

---


START
FIT-Card

Jaká je střední hodnota **exponenciálního rozdělení**?

Back:

$$EX=\frac{1}{\lambda}$$

END

---


START
FIT-Card

Jaký je rozptyl **exponenciálního rozdělení**?

Back:

$$varX=\frac{1}{\lambda^2}$$

END

---


START
FIT-Card

Definice: **Gaussovo** (normální) **rozdělení** - předpis, parametry, jak je definováno

Back:

**Předpis**: $X \sim N(\mu, \sigma^2)$
**Parametry**:
- $\mu$ - střední hodnota
- $\sigma^2$ - rozptyl
**Definice**:
_Pozn. tu hustotu $f_X(x)$ si pamatovat nemusíme, prý nám ten vzoreček v písemce dají, když ho budem potřebovat._

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120709.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220120730.png)
![](../../Assets/Pasted%20image%2020250220120737.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Jak se počítá distribuční funkce u Gaussova rozdělení?

Back:

Ta hustota se nedá zintegrovat => Distribuční funkce se značí $\Phi$ a její hodnoty najdeme v tabulkách.

END

---


START
FIT-Card

Jaký je rozptyl **Gaussova rozdělení**?

Back:

$$varX=\sigma^2$$

END

---

#### Nové funkce a rozdělení


START
FIT-Card

Definice: **Gamma funkce**

Back:

![](../../Assets/Pasted%20image%2020250220120839.png)

Je to jakoby takový "zobecněný faktoriál"

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220120905.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220120918.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Definice: **Gamma rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220120948.png)

<!-- ImageStart -->
Čím vyšší je $p$ tím víc se posouvá střední hodnota
![](../../Assets/Pasted%20image%2020250220121330.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

**Střední hodnota** Gamma rozdělení

Back:

$$EX = \frac{p}{a}$$

END

---


START
FIT-Card

**Rozptyl** gamma rozdělení

Back:

$$\text{var} X = \frac{p}{a^2}$$

END

---


START
FIT-Card

Jaké je gamma rozdělení pro $a = \lambda$ a $p=1$?

Back:

Je to **exponenciální rozdělení**.

END

---


START
FIT-Card

Co dostanu, když sečtu dvě nezávislé exponenciálně rozdělené náhodné veličiny? (**Erlangovo rozdělení**)

Back:

Dostanu gamma rozdělení s celočíselnou hodnotou $n$:
![](../../Assets/Pasted%20image%2020250220121222.png)

$p$čko ($n$) mi určuje, kolik exponenciálních rozdělení jsem sečetl

END

---


START
FIT-Card

Definice: **chí kvadrát rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220121537.png)

Je to gamma rozdělení s parametry s $a=\frac{1}{2}$ a $p=\frac{n}{2}$.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220122045.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

**Střední hodnota** **chí kvadrát rozdělení**

Back:

$$EX = n$$

END

---


START
FIT-Card

**Rozptyl chí kvadrát rozdělení**

Back:

$$\text{var} X = 2n$$

END

---


START
FIT-Card

Definice: **Studentovo rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220122103.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220122152.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

**Střední hodnota studentova rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220122122.png)

END

---


START
FIT-Card

**Rozptyl studentova rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220122137.png)

END

---

## Náhodné vektory


START
FIT-Card

Definice: **Náhodný vektor**

Back:

![](../../Assets/Pasted%20image%2020250220122406.png)

<!-- ExplanationStart -->
Prostě naskládám několik náhodných veličin (např. výška studenta, barva očí atd.) do vektoru.
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **Náhodná matice**

Back:

![](../../Assets/Pasted%20image%2020250220122425.png)

END

---


START
FIT-Card

Definice: **Sdružená distribuční funkce**

Back:

![](../../Assets/Pasted%20image%2020250220122725.png)

END

---


START
FIT-Card

Definice: **Sdružené diskrétní rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220123133.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220123316.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Definice: **Distribuční funkce** náhodného vektoru $X$ se sdruženým **diskrétním rozdělením**

Back:

![](../../Assets/Pasted%20image%2020250220123257.png)

END

---


START
FIT-Card

Definice: **Sdružené spojité rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220123341.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220123354.png)
<!-- DetailInfoEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250220125134.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Vlastnost sdruženého spojitého rozdělení:

Čemu je rovno $f_X(x)$?

Back:

![](../../Assets/Pasted%20image%2020250220123454.png)

END

---


START
FIT-Card

**Normalizační podmínka** pro sdružené spojité rozdělení

Back:

![](../../Assets/Pasted%20image%2020250220123513.png)

END

---


START
FIT-Card

Co platí pro 
![](../../Assets/Pasted%20image%2020250220124520.png)

Kde $B$ je Borelovská množina ("hezká brambora" podle Hrabáka :D)

Back:

![](../../Assets/Pasted%20image%2020250220124555.png)

END

---


START
FIT-Card

Kdy platí následující?
![](../../Assets/Pasted%20image%2020250220124640.png)

Back:

![](../../Assets/Pasted%20image%2020250220124653.png)

<!-- ExplanationStart -->
$ν_n(B) = 0$ znamená, že množina $B$ má míru $0$

Jinými slovy, když náhodný vektor $(X,Y)$ má spojité rozdělení, potom pravděpodobnost, že se $x$ trefí do té množiny $B$, je rovna nule.

Např. kdyby ta množina $B$ byla přímka a měl bych dvoudimenzionální prostor (tedy vektory s $X$ a $Y$).

![](../../Assets/Pasted%20image%2020250220125001.png)
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Co platí pro:
![](../../Assets/Pasted%20image%2020250220125112.png)

Back:

![](../../Assets/Pasted%20image%2020250220125117.png)

END

---

### Marginální rozdělení


START
FIT-Card

Definice: **marginální rozdělení**

Back:

![](../../Assets/Pasted%20image%2020250220125202.png)

Marginální rozdělení jakoby říká, že jsem změřil nějaké hodnoty (např. 10 různých veličin) a já si z toho vyberuj jen nějaké (např 2)

Marginální rozdělení nám jakoby říká souvislost těch dvou náhodných veličin

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250220125228.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Definice: **Marginální rozdělení náhodného vektoru je diskrétní**

Back:

![](../../Assets/Pasted%20image%2020250220125351.png)

END

---


START
FIT-Card

Definice: **Marginální rozdělení náhodné veličiny $X_i$ je diskrétní**

Back:

![](../../Assets/Pasted%20image%2020250220125356.png)
![](../../Assets/Pasted%20image%2020250220125401.png)

END

---


START
FIT-Card

Definice: **Marginální rozdělení náhodného vektoru je spojité**

Back:

![](../../Assets/Pasted%20image%2020250220125419.png)

END

---


START
FIT-Card

Definice: **Marginální rozdělení náhodné veličiny $X_i$ je diskrétní**

Back:

![](../../Assets/Pasted%20image%2020250220125436.png)
![](../../Assets/Pasted%20image%2020250220125430.png)

END

---


START
FIT-Card

Definice: **nezávislé náhodné veličiny**

Back:

![](../../Assets/Pasted%20image%2020250220125458.png)

END

---

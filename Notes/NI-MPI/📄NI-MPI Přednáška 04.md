---
created: 2024-10-11T11:16:03
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI

### Věta o implicitní funkci

START
FIT-Card

Věta: **o implicitní funkci**

Back:

![](../../Assets/Pasted%20image%2020241011111708.png)

<!-- ExplanationStart -->
**implicitní** = automaticky to existuje, ale není to 

Obecně v té větě jakoby "vykresluju vrstevnici" toho 3D grafu.

Máme funkci $f$ dvou proměnných a následující předpoklady:
- V bodě $(a,b)$ má funkce nulovou hodnotu
- V tom bodě funkce má nenulovou parciální derivaci podle druhý proměnný ($x_2$)

![](../../Assets/Pasted%20image%2020241011114719.png)

(a) Potom existuje čtvercové okolí toho bodu, ve kterém mám tu vrstevnici. Tedy pro každé $x$ (na ose $x_1$) existuje právě jedno (tedy bude to funkce, nebudou v grafu dvě hodnoty nad sebou) $x$ (na ose $x_2$), které splňuje $f(x_1,x_2)=0$. Tento předpis mi právě definuje tu funkci té vrstevnice.

Tu funkci té vrstevnice už můžu zapsat jako 2D funkci, protože ta hodnota je závislá na tom $x_1$, tedy můžu to psát jako $x_2 = \varphi(x_1)$

(b) Tu funkci z předchozího bodu můžu zderivovat a platí ta rovnice nahoře.

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
Nazývá se to "o implicitní funkci", protože ta funkce $\varphi(x)$ je implicitně schovaná v té funkci $f$. Ta rovnice $f(x,\varphi (x)) = 0$ právě v sobě implicitně schovává tu funkci $\varphi (x)$.
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
Máme následující 3D graf a já na něm chci na 2D ploše udělat **vrstevnici**. Ta funkce $\varphi (x)$ mi vykresluje v okolí bodu $B$ vrstevnici na té 2D ploše.

![](../../Assets/Pasted%20image%2020241011120135.png)
<!-- ExampleEnd -->


END

---

#### Cesta a implicitní funkce


START
FIT-Card

???

Back:

<!-- ExampleStart -->
Máme daný 3D graf (jakoby terén) a nakreslíme na něm cestu. Na tého cestě pak hledáme extrémy.

![](../../Assets/Pasted%20image%2020241011120811.png)
Červená elipsa vpravo je například ta cesta.

Další příklady:
![](../../Assets/Pasted%20image%2020241011120945.png)
![](../../Assets/Pasted%20image%2020241011121005.png)

<!-- ExampleEnd -->


END

---


START
FIT-Card

Co je obecně **úloha vázaného extrému minima**

Back:

![](../../Assets/Pasted%20image%2020241011123158.png)
![](../../Assets/Pasted%20image%2020241011123211.png)

<!-- ExplanationStart -->
Máme minimalizovat funkci $f$ za daných podmínek.

Máme $m$ **rovnostních vazeb (=vrstevnic)** (určených rovnicemi $g_j(x)= 0$).
Máme $p$ **nerovnostních vazeb (=vnitřky vrstevnic)** (určených funkcemi $h_k(x) \leq 0$)

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241011123820.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak se nazývají $f$, $g_j$ a $h_k$ v **úloze vázaného extrému minima**?

![](../../Assets/Pasted%20image%2020241011123158.png)

Back:

- $f$ - objektiovní/účelová/minimalizovaná/optimalizovaná funkce
- $g_j$ - rovnostní podmínka/vazba
- $h_k$ - nerovnostní podmínka/vazba

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241011123605.png)
<!-- DetailInfoEnd -->

END

---

#### Přípustná řešení a jiná formulace

START
FIT-Card

Definice: **lokální minimum vzhledem k množině**

Back:

![](../../Assets/Pasted%20image%2020241011133334.png)

<!-- ExplanationStart -->
Chceme minimalizovat funkci $f: \mathbb{R}^n\rightarrow \mathbb{R}$

$\cal{M}$ - množina, která splňuje dané podmínky (s tím $g_j$ a $h_k$)
Funkce $f$ v nějakém bodě $x^*$, který leží jak v té množině, tak v definičním oboru té funkce, nabývá lokálního minima vzhledem k množině $\cal{M}$, pokud existuje okolí, pro které platí ta podmínka.


<!-- ExplanationEnd -->

<!-- ExampleStart -->
$\cal{M}$ - modrá množina v tom půdorysu. Na té množině mám nějaké to okolí (v obrázku nakreslené modré kolečko). Funkce $f$ vzhledem k té množině nabývá lokálního minima na tom okolí.

$D_f$ je zde rovina určená osami $y$ a $x$
![](../../Assets/Pasted%20image%2020241011134736.png)

![](../../Assets/Pasted%20image%2020241011120945.png)
<!-- ExampleEnd -->

<!-- OtherInfoStart -->
Analogicky se definuje maximum a ostré extrémy.
<!-- OtherInfoEnd -->

END

---

### Metoda řešení při rovnostních vazbách
#### Lagrangeova funkce

START
FIT-Card

K čemu slouží Lagrangeova funkce?

Back:
**Popis příkladu:**
Máme nějakou funkci $f(x,y)$ a její vrstevnice (ty kroužky). Na té mapě vykreslíme cestu pomocí funkce $g(x,y)$.

Když protnu vrstevnici, tak nejsem na vrcholu (pokud nejsem na hřebenu)
. Potom to znamená, že na jedné straně vrstevnice jsem níž a na druhé výš. 

Tedy lokální extém na cestě může nastat pouze v místech, kde se dotýkám vrstevnice.

To že se dotýkám vrstevnice zjistím z toho, že cesta a vrstevnice mají stejnou tečnu. Tečny jsou kolmý na gradient. Neboli musím najít body takové, kde gradienty funkce $f$ a funkce $g$ jsou rovnoběžné. To jsou pak body podezřelé z extrému.

Když spočtem $\nabla L$ (gradient Lagrangeovy funkce) a budeme zkoumat, je gradient roven nule, tedy kdy mají jsou ty gradienty $f$ a $g$ rovnoběžné, tedy nacházíme body podezřelé z extrému. .

![](../../Assets/Pasted%20image%2020241011135242.png)

END

---



START
FIT-Card

Definice: **Lagrangeova funkce**

Back:

![](../../Assets/Pasted%20image%2020241011140028.png)

<!-- ExplanationStart -->
Lagrangeova funkce má $n+m$ proměnnch ($\textbf{x}$ je vektor o $n$, $\lambda$ je vektor o $m$ proměnných). Je definovaná jako funkce $f(\textbf{x})$ plus ty lambdy vynásobené těmi funkcemi $g_j$.
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **Lagrangeovy multiplikátory**

![](../../Assets/Pasted%20image%2020241011133516.png)

Back:

![](../../Assets/Pasted%20image%2020241011133509.png)

END

---

### Postačující podmínka existence ostrého lokálního minima pro rovnostní vazby

START
FIT-Card

Věta: **Postačující podmínka existence ostrého lokálního minima pro rovnostní vazby**

Back:

![](../../Assets/Pasted%20image%2020241011133549.png)

<!-- ExplanationStart -->
Ta podmínka s $\cal{M} \subset \bar{\cal{M}}$ znamená, že $f$ je definována na množině, která obklopuje $\cal{M}$ (mám tam jakoby pruh kolem $\cal{M}$.
![](../../Assets/Pasted%20image%2020241011141444.png)

Když jsou splňeny ty podmínky $x^*$, tak je pak lokální minimum.
(0) = ten bod je na naší cestě
(1) = splňuju vazební podmínku
(2) = mám nějakou vazbu (=cestu) a nezajímá mě, jaké jsou ostatní extrémy v terénu, zajímají mě jen ty směry té mojí cesty, tedy směry kolmé na gradient té cesty (proto tam je to omezení tím $\nabla g_j(x^*)\cdot v=0$)

Ta podmínka (2) mi zeslabuje tu finální nerovnici
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Jak se obecně používá Lagrangeova funkce?

Back:

1. Napíšeme si Lagrangeovu funkci $L$
2. Zderivujeme ji podle všech proměnných, čímž získáme $n+m$ rovnic
3. Rovnice vyřešíme
4. Koukneme se na všechny směry, co jsou kolmé na gradienty všech těch vazeb a spočteme $v^T\cdot \nabla^2_xL(x^*;\lambda^*)\cdot v$
5. Když to bude kladné, máme lokální maximum

END

---

### Metoda řešení při rovnostních vazbách i nerovnostních vazbách


START
FIT-Card

Co řeší metoda řešení při rovnostních vazbách i nerovnostních vazbách?

Back:

Mám nějakou cestu (vazbu), když jsem uvnitř ní (např. v tom kruhu), hledám minimum v daném okolí, které je také uvnitř té vazby.

Samotná vazba (ta kružnice) mě pak při výpočtech nezajímá.
![](../../Assets/Pasted%20image%2020241011144008.png)

END

---


START
FIT-Card

Definice: **Lagrangeova funkce** (i pro nerovnostní vazby)

Back:

![](../../Assets/Pasted%20image%2020241011144059.png)

END

---


START
FIT-Card

Definice: **Množina aktivních omezení**

Back:

![](../../Assets/Pasted%20image%2020241011133841.png)

Tedy $\cal{B}(x)$ jsou indexy nerovnostních vazeb takových, že $x$ je na hranici množiny $\set {x: h_k(x)\leq 0}$

<!-- ExplanationStart -->
Omezení mi určuje, kde jsem na hranici dané vazby

Např. když si vezmu bod na elipse, tak pro něj je ta vazba aktivní. Když si vezmu bod uvnitř elipsy, tak množina aktivních omezení je prázdná.

![](../../Assets/Pasted%20image%2020241011144507.png)
<!-- ExplanationEnd -->


END

---


### Postačující podmínka existence ostrého lokálního minima

START
FIT-Card

Věta: **Postačující podmínka existence ostrého lokálního minima** 

(tohle určitě prý bude u zkoušky)

Back:

![](../../Assets/Pasted%20image%2020241011133657.png)

<!-- ExplanationStart -->
(aktivní a neaktivní vazby) = buď je multiplikátor nulový nebo jsem na hranici té vazby
(2. derivace) = opět to potřebuju jen ve směrech mých vazeb
- U rovnostní vazby mi stačí aby to bylo ve směru té vazby
- U nerovnostních vazeb to musí platit v případě, že je ta vazba aktivní
(správný "směr" od hranice $\cal{M}$) = Tento bod mi to omezí tak abych vybíral jen body uvnitř té vazby (viz obrázek).

![](../../Assets/Pasted%20image%2020241011151014.png)

Ta podmínka (2) mi zeslabuje tu finální nerovnici
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Věta: **Postačující podmínka existence ostrého lokálního maxima**

Back:

![](../../Assets/Pasted%20image%2020241011133716.png)

END

---

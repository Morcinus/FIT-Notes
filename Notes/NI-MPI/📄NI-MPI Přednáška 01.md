---
created: 2024-10-11T09:42:36
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska01 status-toReview analyza1

START
Basic

Definice: **Norma**

Back:

![[Pasted image 20240923125214.png]]

Norma každému bodu přiřadí vzdálenost od počátku souřadnic.
<!--ID: 1728921214832-->
END

---


START
Basic

Jak se pomocí normy spočte vzdálenost dvou vektorů (bodů)?

Back:

$$d(x,y)=||x-y||$$

![[Pasted image 20240923132042.png]]

Důkaz:
1. Plyne z (1) věty o normě
2. Plyne z (2) věty o normě
3. $$d(x,z) = ||x-z||=||(x-y)(y-z)||\leq ||x-y||+||y-z||=d(x,y)+d(y,z)$$
<!--ID: 1728921214835-->
END

---


START
Basic

Jak se dá spočítat norma?

Back:
Pro $\textbf{x} = (x_1, x_2, \dots x_n) \in \mathbb{R}^n$ nebo ($\mathbb{C}^n$)
$$||\textbf{x}||_p=\sqrt[p]{\sum_{i=1}^n |x_i|^p}$$

<!-- DetailInfoStart -->
![[Pasted image 20240923132932.png]]

Vysvětlení součtový normy:
- Prostě jako kdybych se ve městě se silnicemi jako je mřížka snažil dostat z jednoho bodu do druhého. Nemůžu diagonálně, tak prostě sečtu jednotlivé hrany.

Maximová norma - každý vektor má maximální souřadici 1
<!-- DetailInfoEnd -->
<!--ID: 1728921214838-->
END

---


START
Basic

Definice: **Eukleidovská norma**

Back:

$$||\textbf{x}||_2=\sqrt[2]{\sum_{i=1}^n |x_i|^2}$$
![[Pasted image 20240923133757.png]]
<!--ID: 1728921214841-->
END

---


START
Basic

Definice: **$\delta-$okolí bodu**
 
Back:

![[Pasted image 20240923125350.png]]
![[Pasted image 20240923133817.png]]

Prostě "koule" kolem bodu
<!--ID: 1728921214844-->
END

---


START
Basic

Definice: **Hromadný bod**

Back:

![[Pasted image 20240923125332.png]]

<!-- ExplanationStart -->
_Jinými slovy:_
Ať vezmu libovolně malinký okolí kolem bodu $x$ (bez $x$), vždy v tom okolí najdu nějaké body z té množiny $M$.

_Např. hromadný bod_ bod na "kraji" množiny je hromadný bod, protože část jeho okolí bude v té množině.

_Např. bod co není hromadný_ Pokud ten bod je mimo množinu, tak nemůže být hromadným bodem, protože můžu najít malinkatý okolí, pro které to neplatí (tzn. průnik toho okolí s tou množinou M je prázdný).
<!-- ExplanationEnd -->
<!--ID: 1728921214846-->
END

---


START
Basic

Definice: Posloupnost má limitu, pokud ...

Back:

![[Pasted image 20240923125438.png]]
<!--ID: 1728921214849-->
END

---


START
Basic

Definice: **funkce více reálných proměnných**

Back:

![[Pasted image 20240923125515.png]]

Každému vektoru přiřadí nějaké číslo.

Např. $\mathbb{R}^2$ model terénu mám 2D plochu a každému bodu přiřadím výšku

Např. $\mathbb{R}^3$ model místnosti, kde každému bodu je přiřazena teplota v tom bodě
<!--ID: 1728921214852-->
END

---


START
Basic

Definice: **Graf funkce**

Back:

![[Pasted image 20240923125538.png]]

Např. mám 2D plochu a každému bodu, chci každému přiřadit hodnotu -> vznikne mi z toho 3D graf
<!--ID: 1728921214855-->
END

---


START
Basic

Definice: **limita funkce více proměnných**

Back:

![[Pasted image 20240923125601.png]]

Je to hormadný bod, protože kdyby byl izolovaný, tak by vůbec nemělo smysl se o tom bavit - nebylo by "z čeho" udělat tu limitu.
<!--ID: 1728921214857-->
END

---


START
Basic

Věta: Funkce $f$ má v hromadném bodě $\textbf{b}$ množiny $D_f$ limitu $L$ $\Leftrightarrow$  

(v praxi to asi nebude potřeba)

Back:

![[Pasted image 20240923125855.png]]
<!--ID: 1728921214864-->
END

---


START
Basic

Definice: **spojitá funkce v bodě**

Back:

![[Pasted image 20240923125929.png]]

Jako když mám plachtu a jeden bod by byl o 5 metrů nad ní a nebyl by na plachtě, nebylo by to tam spojitý.. Prostě analogicky jako v reálných číslech.
<!--ID: 1728921214869-->
END

---


START
Basic

Definice: **lokální minimum**, **ostré lokální minimum**, **globální minimum**

Back:

![[Pasted image 20240923140916.png]]

Analogicky jako u normálních funkcí
<!--ID: 1728921214871-->
END

---


START
Basic

Definice: Omezená, otevřená, uzavřená množina

Back:

![[Pasted image 20240923130106.png]]
<!-- ExplanationStart -->
Je to podobné jako u intervalů v $\mathbb{R}$.
- omezená - jakoby "není nekonečná"
- otevřená - není tam "hranice" té množiny
- uzavřená - jsou tam i hraniční body té množiny
<!-- ExplanationEnd -->

<!--ID: 1728921214874-->
END

---


START
Basic

Věta: Kdy má funkce globální minimu a maxium

Back:

![[Pasted image 20240923130131.png]]
<!--ID: 1728921214877-->
END

---

### Parciální derivace

START
Basic

Definice: **parciální derivace ve směru v bodě**

Back:

![[Pasted image 20240923130201.png]]

Co mi říká:
$$\frac{\partial f}{\partial x}$$
- zafixuju y souřadnici a mění se mi jen x souřadnice
- V tom grafu pak provedu derivaci​

![[Pasted image 20240923130229.png]]
<!--ID: 1728921214879-->
END

---


START
Basic

Definice: **Gradient funkce v bodě**

Back:

![[Pasted image 20240923130250.png]]

Neformálně:
V daném bodě to je směr nejvyššího růstu.

![[Pasted image 20240923130304.png]]
<!--ID: 1728921214882-->
END

---


START
Basic

Co je **grafické znázornění gradientu**? (na tohle se ptají u zkoušky!)

Back:

Formálně: Když udělám funkci ve směru v bodě, tak ta směrnice bude **největší**.

Tzn. u tohohle je ta levá strana nejvyšší?
![[Pasted image 20240930131518.png]]

Neformálně: "Směr **nejvyššího růstu** funkce".

![[Pasted image 20240930131042.png]]
<!--ID: 1728921214885-->
END

---


START
Basic

Definice: **Derivace funkce ve směru v v bodě**

Back:

![[Pasted image 20240923130329.png]]

V nějakém bodě $\textbf{b}$ se vychýlím o h a spočtu tu derivaci.
<!--ID: 1728921214887-->
END

---


START
Basic

Věta: **Výpočet derivace funkce** ve směru v bodě

Back:

![[Pasted image 20240923130408.png]]
![[Pasted image 20240930131445.png]]

Postup výpočtu:
1. Spočtu si gradient (pomocí parciálních derivací)
2. Vynásobím gradient se směrovým vektorem
3. Tím dostanu první derivaci

<!--ID: 1728921214890-->
END

---


START
Basic

Co je **tečná nadrovina** funkce v bodě? Jak vypadá její **rovnice**? Jak vypadá její **normálový vektor**?

(tohle bylo třeba v jedné rozstřelové otázce u zkoušky)

Back:

![[Pasted image 20240923130526.png]]

**Neformálně:**
Vytvořím rovinu v tom bodě (analogie tečny grafu ve 2d). Této rovině se říká tečná nadrovina. Je to to samé, jako kdybych v tom bodě sjednotil všechny tečny ve všech směrech v tom bodě.

Dovysvětlení:
Ta nadrovina je popsaná pomocí $(x_1,x_2,\dots,x_n, z)$.

![[Pasted image 20240923130551.png]]
<!--ID: 1728921214893-->
END

---

### Lokální extrémy

START
Basic

Věta: Nutná podmínka lokálnínho extrému

Back:

![[Pasted image 20240923130621.png]]

_Vysvětlení_
Je to analogicky jako u 2D grafů. Aby tam byl extrém, tak tam musí být nulová derivace. Tady ve 3D tam musí být derivace nulová ve všech směrech, tzn. všechny parciální derivace (gradient) musí být v bodě nulový.

Tzn. **gradient musí být nulový** - na každou stranu se nezvednu vůbec
<!--ID: 1728921214895-->
END

---


START
Basic

smazat

Back:

smazat

<!--ID: 1735549740242-->
END

---


START
Basic

Definice: **stacionární body**

Back:

Body, kde je gradient **nulový**.

<!-- DetailInfoStart -->
![[Pasted image 20240923130823.png]]
<!-- DetailInfoEnd -->

![[Pasted image 20240923130829.png]]
<!--ID: 1728921214901-->
END

---


START
Basic

Definice: **kritické body**

Back:

**Kritické body** = body podezřelé z extrému.

Jsou to body, ve kterých je **gradient nulový** nebo tam **neexistuje**.

<!-- DetailInfoStart -->
![[Pasted image 20240923130959.png]]
<!-- DetailInfoEnd -->
<!--ID: 1728921214904-->
END

---

START
Basic

Jaký je hlavní rozdíl mezi:
- parciální derivací v bodě ve směru
- derivací v bodě ve směru?

Back:

**Parciální derivace** je pouze ve směru nějaké osy ($x,y, \dots$) - zafixujeme všechny souřadnice (až na jednu) a derivujeme v jednom směru.

**Derivace v bodě ve směru** derivuje v libovolném směru určeném vektorem $v$. To dělá tak, že kombinuje všechny parciální derivace podle směru vektoru.

<!-- DetailInfoStart -->
**Parciální derivace**
![[Pasted image 20240923130201.png]]
![[Pasted image 20240923130229.png]]
**Derivace**
![[Pasted image 20240923130329.png]]
<!-- DetailInfoEnd -->
<!--ID: 1728921214907-->
END

---




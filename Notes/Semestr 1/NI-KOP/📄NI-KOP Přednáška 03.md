---
created: 2024-10-11T15:31:45
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP prednaska03 status-toReview


# Výpočetní modely

### Složitosti a metriky

START
FIT-Card

(FIT-Notes flashcard)

Jaké metriky se měří u výpočetních modelů?

Back:

- **výpočetní složitost** - čas výpočtu
- **paměťová složitost** - spotřeba paměti
<!--ID: 1728921215045-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby se měří **velikost** instance?

Back:

- **Hrubá míra** - počet prvků instance (uzlů, čísel, prvků množiny atd.)
- **Jemná míra** - počet bitů nutných k zakódování instance
<!--ID: 1728921215048-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se měří **čas výpočtu**?

Back:

- počet "typických operací"
- počet kroků **jednotného výpočetního modelu**
<!--ID: 1728921215051-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou například výpočetní modely? (3)

Back:

- **Turingův stroj**
- **RAM stroj**
- **Booleův obvod**
<!--ID: 1728921215053-->

END

---

### Turingův stroj

START
FIT-Card

(FIT-Notes flashcard)

Připomenutí: Jak funguje **Turingův stroj**?

Back:

Neomezená páska, mám tam zadaný program.

1. Přečte symbol
2. Zapíše symbol
3. Pohne hlavou doleva nebo doprava

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011153757.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215057-->

END

---

#### Řešení problémů

START
FIT-Card

(FIT-Notes flashcard)

Definice: Kdy deterministický **Turingův stroj** řeší rozhodovací problém $\Pi$

Back:

![](../../../Assets/Pasted%20image%2020241011154142.png)
<!--ID: 1728921215060-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Kdy deterministický **Turingův stroj** řeší rozhodovací problém $\Pi$ **v čase $t$**

Back:

![](../../../Assets/Pasted%20image%2020241011154225.png)
<!--ID: 1728921215064-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Kdy **Turingův stroj** řeší rozhodovací problém $\Pi$ **s pamětí $m$**

Back:

![](../../../Assets/Pasted%20image%2020241011154230.png)
<!--ID: 1728921215066-->

END

---

#### Kódování instance

START
FIT-Card

(FIT-Notes flashcard)

Jak se kóduje instance v Turingově stroji

Back:

Instance je řetězec $0$ a $1$ (tzn. $\set{0,1}^*$, problém je podmnožina takových řetězců, na které Turingův stroj odpoví "ano"

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011154616.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241011154627.png)

<!-- ExampleEnd -->
<!--ID: 1728921215069-->

END

---

### Třídy P, PSPACE a EXPTIME

START
FIT-Card

(FIT-Notes flashcard)

Definice: Rozhodovací problém **patří do třídy P**, když $\dots$

Back:

![](../../../Assets/Pasted%20image%2020241011154912.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1728921215072-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Rozhodovací problém **patří do třídy PSPACE**, když $\dots$

Back:

![](../../../Assets/Pasted%20image%2020241011154938.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1728921215075-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Rozhodovací problém **patří do třídy EXPTIME**, když $\dots$

Back:

![](../../../Assets/Pasted%20image%2020241011154951.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1728921215078-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah tříd PSPACE a EXPTIME?

Back:

$\text{PSPACE} \subset \text{EXPTIME}$

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1728921215081-->

END

---

### Třída NP

START
FIT-Card

(FIT-Notes flashcard)

Čeho je zkratka **NP** třídy problémů?

Back:

**Nedeterministicky polynomiální**
<!--ID: 1728921215084-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **nedeterministický Turingův stroj**?

Back:

Jako Turingův stroj, akorát to rozhodování dělá **nedeterministický automat**.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011155407.png)

<!-- DetailInfoEnd -->

<!-- InformallySaidStart -->

![](../../../Assets/Pasted%20image%2020241011155542.png)

<!-- InformallySaidEnd -->
<!--ID: 1728921215087-->

END

---

#### Řešení problému

START
FIT-Card

(FIT-Notes flashcard)

Definice: **nedeterministický Turingův stroj řeší rozhodovací problém $\Pi$ v čase $t$**

Back:

![](../../../Assets/Pasted%20image%2020241011155644.png)
<!--ID: 1728921215090-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Věta: Pokud **nedeterministický Turingův stroj** řeší problém $\Pi$ v čase $T(n)$, $\dots$

Back:

![](../../../Assets/Pasted%20image%2020241011155932.png)
<!--ID: 1728921215093-->

END

---

#### Třída NP pomocí NDT a certifikátu

START
FIT-Card

(FIT-Notes flashcard)

Definice: Rozhodovací problém $\Pi$ **patří do třídy NP**, jesltiže $\dots$ (nedeterministický Turingův stroj)

Back:

![](../../../Assets/Pasted%20image%2020241011160026.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1728921215095-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Rozhodovací problém $\Pi$ **patří do třídy NP**, jesltiže $\dots$ (certifikát/svědek)

Back:

![](../../../Assets/Pasted%20image%2020241011160112.png)
![](../../../Assets/Pasted%20image%2020241011160131.png)
<!--ID: 1728921215099-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze dokázat, že problém patří do třídy NP? (2)

Back:

1. Z definice nalezneme nedeterministický Turingův stroj, který každou instanci $I \in \Pi_{ANO}$ řeší v polynomiálním čase (z definice).
2. Dokážeme, že pro každou instanci $I \in \Pi_{ANO}$ problému existuje konfigurace $Y$ taková, že kontrola, zda je $Y$ řešením patří do $P$

Obě dvě varianty jsou z definice (každá z jiné)
<!--ID: 1731258463498-->

END

---

#### Hamiltonova kružnice

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje nedeterministický algoritmus pro nalezení Hamiltonovy kružnice? (neformálně)

**Hamiltonova kružnice** = kružnice v grafu, která obsahuje každý uzel

Back:

![](../../../Assets/Pasted%20image%2020241011160445.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011160524.png)

Vychází z této definice:
![](../../../Assets/Pasted%20image%2020241011160026.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215102-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Do jaké třídy problémů spadá problém nalezení Hamiltonovy kružnice?

Back:

Do **třídy NP**
<!--ID: 1728921215105-->

END

---

#### Polynomiální kontrola certifikátu

START
FIT-Card

(FIT-Notes flashcard)

Jak se provede polynomiální kontrola certifikátu u problému Hamiltonovy kružnice?

Back:

Jednoduše proiteruju uzly a hrany a zjistím, jestli tam není žádný uzel dvakrát.

To je problém se složitostí $O(|V|)$, tedy dle věty (viz níže) to je certifikát pro to, že Hamiltonova kružnice patří do NP.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011160725.png)

Vychází z této definice:
![](../../../Assets/Pasted%20image%2020241011160112.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215107-->

END

---

### Vztah tříd P a NP

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah **nedeterministickýho** a **deterministickýho Turingova stroje**?

Back:

Deterministický je zvláštním případem nedeterministického.

- **deterministický** - má přechodovou **funkci** (vždy max jeden následník)
- **nedeterministický** - má přechodovou **relaci** (může mít více následníků)

<!-- ExplanationStart -->

Deterministický stroj je zvláštním případem nedeterministického, kde následníkem každého stavu je nejvýše jeden stav.

Tzn. pokud se něco splní v deterministickým stroji, lze to splnit i v nedeterministickým.

<!-- ExplanationEnd -->

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241011161048.png)

<!-- ImageEnd -->
<!--ID: 1728921215113-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah problémů třídy P a NP?

Back:

$P \subset NP$

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241011161321.png)

![](../../../Assets/Pasted%20image%2020241110101356.png)

<!-- ImageEnd -->
<!--ID: 1728921215118-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké další problémy jsou mimo NP? (v rámci PSPACE)

Back:

- **Komplementární problémy NP** (co-NP) - podobné jako NP, ale trochu jiné
- **Polynomiální hyerarchie** - hierarchie mezi problémy P a PSPACE

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241011161456.png)

<!-- ImageEnd -->
<!--ID: 1728921215121-->

END

---

#### Komplementární problémy

START
FIT-Card

(FIT-Notes flashcard)

Co jsou komplementární problémy?

Back:

Vezmu NP problém a "otočíme ho".

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241011161600.png)

Např.
![](../../../Assets/Pasted%20image%2020241011161812.png)

<!-- ExampleEnd -->
<!--ID: 1728921215124-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak lze zkonstruovat **komplementární problém**?

Back:

Pokud mám problém "Existuje..." $\exists \dots$, přehodím to na $\forall \dots$

$\exists Y, R(I,Y) \Rightarrow \forall Y, \neg R(I,Y)$.

- vstupní proměnné zůstávají
- vytvoříme doplněk omezení (dle predikátové logiky)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011161940.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215127-->

END

---

### Svědkové

START
FIT-Card

(FIT-Notes flashcard)

Jaké svědky mají **NP problémy**?

Back:

Na otázku "Existuje konfigurace, která ..."

- Odpověď **ANO** - **krátký** svědek (**$\exists$-svědek**)
- Odpověď **NE** - **dlouhý** svědek

<!-- ExplanationStart -->

- Odpověď **ANO** - stačí mi najít tu konfiguraci (řeší se krátce)
- Odpověď **NE** - musím projít všechny konfigurace (řeší se dlouze)
  <!-- ExplanationEnd -->
<!--ID: 1728921215129-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké svědky mají **co-NP problémy**?

Back:

Na otázku "Pro všechny konfigurace platí, že ..."

- Odpověď **ANO** - **dlouhý** svědek **($\forall$-svědek)**
- Odpověď **NE** - **krátký** svědek

<!-- ExplanationStart -->

- Odpověď **ANO** - musím projít všechny konfigurace (řeší se dlouze)
- Odpověď **NE** - stačí mi najít tu konfiguraci, co je protipříkladem (řeší se krátce)
  <!-- ExplanationEnd -->
<!--ID: 1728921215132-->

END

---

#### Vztah třídy co-NP a P a NP

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah třídy **co-NP** a tříd **P** a **NP**? (popiš jak se protínají množiny na obrázku)

Back:

![](../../../Assets/Pasted%20image%2020241011162620.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241110101356.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215141-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký problém je například zároveň ve **třídě NP** a zároveň v **co-NP**?

Back:

**Faktorizace čísla jako rozhodovací problém:**
Dáno celé číslo $N$, existuje jeho prvočinitel, jehož poslední číslice je $7$?

![](../../../Assets/Pasted%20image%2020241011162546.png)
<!--ID: 1728921215144-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah tříd $P$ a $\text{co-P}$?

Back:

$P = \text{co-P}$

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011162939.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215147-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah tříd $P, NP, \text{co-NP}$?

Back:

$P \subseteq NP \cap \text{co-NP}$

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011163033.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215150-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co platí, pokud $P = NP$ ?

Back:

$$P = NP \implies NP = \text{co-NP}$$
<!--ID: 1728921215153-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co platí, pokud $\text{co-NP} \implies NP$?

Back:
$$P \neq NP$$

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011163209.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921215155-->

END

---

### Horší než NP

START
FIT-Card

(FIT-Notes flashcard)

Co je problém $\text{QSAT}_2$?

Back:

![](../../../Assets/Pasted%20image%2020241011163346.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241011163423.png)

<!-- ExampleEnd -->
<!--ID: 1728921215158-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je $\text{QSAT}_k$?

Back:

![](../../../Assets/Pasted%20image%2020241011163703.png)
<!--ID: 1728921215161-->

END

---

#### Polynomiální hyerarchie

START
FIT-Card

(FIT-Notes flashcard)

Definice: třída **Polynomiální hierarchie**

Back:

![](../../../Assets/Pasted%20image%2020241011163734.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241011163753.png)

<!-- DetailInfoEnd -->

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241011163840.png)

<!-- ImageEnd -->
<!--ID: 1728921215164-->

END

---

![](../../../Assets/Pasted%20image%2020241011163857.png)

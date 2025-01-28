---
created: 2024-11-27T13:55:50
title: "Simulovaná evoluce 1"
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP-2
FILE TAGS: NI-KOP prednaska09 status-toReview

START
FIT-Card

Jaká je analogie **simulované evoluce** (biologický systém a optimalizační problém)?

Back:

![](../../Assets/Pasted%20image%2020241127151314.png)
![](../../Assets/Pasted%20image%2020241127151350.png)

Tags: core
<!--ID: 1735205749650-->
END

---



START
FIT-Card

Jak vypadá proces simulované evoluce?

Back:

1. Máme populaci
2. **Selekce** - tím provedeme **intenzifikaci**, zvýšíme podíl **zdatných** jedinců
3. **Křížení** - zkombinujeme genetickou informaci do nových jedinců
4. **Mutace** - přidáme náhodný zdroj nové genetické informace -> **diverzifikace**
5. Máme populaci, můžeme skončit nebo pokračovat celé znovu

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127151531.png)
<!-- ImageEnd -->

Tags: core
<!--ID: 1735205749653-->
END

---


START
FIT-Card

Jaké jsou prostředky **diverzifikace** a **intenzifikace** v simulované evoluci?

Back:

- Prostředky **diverzifikace**: **mutace**
- Prostředky **intenzifikace**: **selekce**

Tags: core
<!--ID: 1735205749655-->
END

---

### Evoluční algoritmy


START
FIT-Card

Jaké jsou **4 hlavní strategie u simulované** evoluce?

Back:

- **genetický algoritmus**
- **genetické programování**
- **evoluční strategie**
- **evoluční programování**
<!--ID: 1737735239322-->
END

---


START
FIT-Card

Nad jakou reprezentací pracuje **genetický algoritmus**?

(tohle bude u zkoušky)

Back:

Nad **binárním řetěžcem**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127152336.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749658-->
END

---


START
FIT-Card

Nad jakou reprezentací pracuje **genetické programování**?

(tohle bude u zkoušky)

Back:

Nad **stromama**, programem, DFG (data flow graph)

Tags: core
<!--ID: 1735205749660-->
END

---


START
FIT-Card

Nad jakou reprezentací pracuje **evoluční strategie**?

(tohle bude u zkoušky)

Back:

Nad **vektorem reálných čísel a odchylek**

Tags: core
<!--ID: 1735205749663-->
END

---


START
FIT-Card

Nad jakou reprezentací pracuje **evolučního programování**?

(tohle bude u zkoušky)

Back:

Nad reprezentací **automatu**.

Tags: core
<!--ID: 1735205749665-->
END

---

### Generace


START
FIT-Card

Jakými způsoby lze nahradit starou generaci novou generací? (2)

Back:

- **náhrada** = nová generace nahradí starou
- **náhrada s elitismem** = nová generace nahradí starou, ale pár elitních jedinců zůstává
	- soutěž $\mu$ rodičů a $\lambda$ potomků, vyberu $\mu$ nových jedinců

Tags: core
<!--ID: 1735205749668-->
END

---


START
FIT-Card

Jak se typicky zachází s potomky u těchto strategií:
- **genetický algoritmus**
- **genetické programování**
- **evoluční strategie**
- **evoluční programování**

Back:

- **genetický algoritmus** - náhrada
- **genetické programování** - libovolné
- **evoluční strategie** - získám víc potomků, než jsem měl rodičů ($\lambda > \mu$)
- **evoluční programování** - získám víc potomků, než jsem měl rodičů ($\lambda > \mu$)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127152948.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749670-->
END

---

### Genetické algoritmy

#### Kódování


START
FIT-Card

Jak se reprezentují jedinci v genetických algoritmech?

Back:

Kódujou se pomocí binárního řetězce.

<!--ID: 1737735239334-->
END

---

#### Křížení

START
FIT-Card

Jak funguje jednobodové křížení?

Back:

Vezmu si bod v binární reprezentaci a vezmu jednu část z jednoho jedince a druhou část z druhého jedince.

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241127153426.png)
<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205749675-->
END

---


START
FIT-Card

Jak funguje dvoubodové křížení?

Back:

Náhodně zvolím dva body a mezi nimi tam vložím gen druhého jedince

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241127153504.png)
<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205749678-->
END

---


START
FIT-Card

Jak funguje uniformní křížení?

Back:

Udělám si mapu, co budu brát ze kterého jedince.

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241127153749.png)
<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205749680-->
END

---


START
FIT-Card

Jak funguje křížení pro permutační problémy (PMX)?

Back:

Náhodně si zvolím dva body. To co je mezi nima neprohazuju, ale použiju jako permutační tabulku.

Podle tabulky pak překóduju oba jedince.

Pozn. má to vlastnost, že z permutace mi to udělá znovu permutaci

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241127153936.png)

Zde:
- Ze sedmičky udělám dvojku (a obráceně), z devítky trojku (a obráceně), atd.

<!-- ExampleEnd -->

Tags: core
<!--ID: 1735205749683-->
END

---


START
FIT-Card

Jak funguje inverze v genetice?

Back:

![](../../Assets/Pasted%20image%2020241127154327.png)

Tags: core
<!--ID: 1735205749685-->
END

---

#### Mutace


START
FIT-Card

Jak funguje **mutace**?

Back:

1. Dám si všechny jedince vedle sebe (nuly a jedničky)
2. Zvolím náhodně několik indexů v celém řetězci a na nich flipnu bit.

Řídím si, kolik indexů vyberu a díky tomu řídím pravděpodobnost, že mi daný jedinec zmutuje.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127154527.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749688-->
END

---


START
FIT-Card

Jak funguje selekce v genetických algoritmech (množení)? 

Back:

1. Máme jedince
2. Podle optimalizačního kritéria spočtu jeho zdatnost
3. Podle zdatnosti spočtu pravděpodobnost výběru daného jedince
4. Náhodně vyberu jedince

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127154658.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749690-->
END

---


START
FIT-Card

Jak funguje selekční tlak?

Back:

Selekční tlak mi určuje pravděpodobnost výběru nejlepšího jedince.

<!-- ExplanationStart -->
![](../../Assets/Pasted%20image%2020241127154846.png)
<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205749693-->
END

---


START
FIT-Card

Jaký je vztah selekce a mutace?

Back:

Pomocí selekce ztrácím určité informace. Mutace mi to trochu kompenzuje, aby mi ty jedinci kompletně nezdegenerovali.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127154930.png)
![](../../Assets/Pasted%20image%2020241127155539.png)
<!-- ImageEnd -->

Tags: core
<!--ID: 1735205749695-->
END

---


START
FIT-Card

Co se stane, když mám velký selekční tlak?

Back:

Je nebezpečná degenerace populace (zasekne se v lokálním optimu).

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127155539.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127155259.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749698-->
END

---


START
FIT-Card

Co se stane, když mám malý sekvenční tlak?

Back:

Máme **pomalou konvergenci** -> dosáhnu lepšího výsledku, ale trvá dlouho

Hrozí i **divergence populace** - tzn. když budu mutovat tak moc, že mi to přehluší ty dobré geny, tak bude časem populace horší a horší a k dobrým výsledkům se moc nedostanu (protože mi to vždy přehluší ta mutace)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127155259.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749700-->
END

---


START
FIT-Card

Jak funguje **ruletový výběr**? (v selekčním tlaku)

Back:

Každému prvku dám pravděpodobnost výběru a roztočím ruletu a zvolím tím nějaký prvek.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127155711.png)
<!-- ImageEnd -->

Tags: core
<!--ID: 1735205749703-->
END

---


START
FIT-Card

Co je **univerzální stochastické vzorkování**? (v selekčním tlaku)

Back:

Mírná úprava ruletového výběru, aby to dávalo lepší výsledky

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127155821.png)
<!-- ImageEnd -->

Tags: core
<!--ID: 1735205749708-->
END

---


START
FIT-Card

Jaké jsou 3 **techniky u řízení selekčního tlaku pro ruletový výběr**?

Back:

- **lineární škálování** - Přepočítání zdatnosti lineární funkcí
- **ranking** - Použití pořadí ve zdatnosti místo zdatnosti
- **zkrácený výběr** - Prahování, zkrácený výběr

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127160029.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749713-->
END

---


START
FIT-Card

Jak funguje **lineární škálování**? (**Scaling**)

Back:

Mám 2 případy, kdy můžu chtít udělat lineární škálování:
- Mám skupinu s pár zdatnými a pak hodně špatnými jedinci, chci je "přiblížit víc k sobě", aby mi ty méně slabí tolik "neumírali" - díky tomu budu mít větší diverzifikaci, protože se budou moct dál křížit i slabí jedinci
- Mám skupinu, kde mám naopak všechny jedince hodně blízko sebe, co se zdatnosti týče a chci aby "byli dál od sebe" - naopak abych mezi nimi byl schopný lépe rozlišovat


Lineární škálování je funkce, která mi přepočítá zdatnosti jedinců tak, abych přeškáloval $Z_{min}$ a $Z_{max}$ na $Z_1$ a $Z_2$, díky čemuž ty míň schopný jedince přiblížím těm schopným (1) a nebo naopak je oddálím (2. případ).

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241127160520.png)
<!-- ExampleEnd -->

Tags: core
<!--ID: 1735205749716-->
END

---


START
FIT-Card

Jak se spočte výsledný selekční tlak?

Back:

$$c = \frac{Z_2}{nZ_{avg}}$$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127160915.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749718-->
END

---


START
FIT-Card

Jak lze zachovat průměrnou zdatnost při počítání selekčního tlaku?

Back:

Zdatnost spočtu pomocí $Z = a \cdot z + b$

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127161031.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127161047.png)
![](../../Assets/Pasted%20image%2020241127161053.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749720-->
END

---


START
FIT-Card

Jak funguje **ranking**?

Back:

Ranking je další možnost jak udělat něco jako lineární škálování.

Funguje to tak, že si nastavím nějakou čáru a zdatnosti přeškáluju tak, aby se dotýkaly té čáry.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127161525.png)
<!-- ImageEnd -->

Tags: core
<!--ID: 1735205749723-->
END

---


START
FIT-Card

Jak funguje **zkrácený výběr**? (truncation selection)

Back:

Určím nějaký práh a vyberu množství jedinců. Pokud je nad prahem, vezmu ho, pokud není, tak ne.

Je to méně přesné než ostatní možnosti.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241127161622.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127161632.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749725-->
END

---

#### Turnajový výběr


START
FIT-Card

Co je **Turnajový výběr**?

Back:

- Náhodně se vybere $r$ jedinců (turnaj) a z něj nejlepšího. 
- To se opakuje až do naplnění populace

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241127161852.png)
<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749728-->
END

---


START
FIT-Card

Jaké jsou různé **podmínky ukončení genetického algoritmu**? (aka jak rozhodnu, kdy algoritmus skončí)?

Back:

- Pevný počet generací
- Příznaky konvergence

Tags: core
<!--ID: 1735205749730-->
END

---

### Omezující podmínky

START
FIT-Card

Jaké jsou techniky pro omezující podmínky?

Back:

Standardní
- **trest smrti** - zmarněná práce konstrukce
- **oprava individua** - vnáší předpojatost
- **relaxace**

Specifické
- **doménové operátory** - udělají mi z permutace zase permutaci, z kružnice zase kružnici atd.
- **doménové reprezentace** a dekódery

Tags: core
<!--ID: 1735205749733-->
END

---


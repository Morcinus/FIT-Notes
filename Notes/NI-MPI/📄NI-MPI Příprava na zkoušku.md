---
created: 2025-01-01T11:51:55
title: "Příprava na zkoušku"
up: "[[📖NI-MPI)"
---

### Info

Tady je seznam všech příkladů, co jsem vyhrabal na fitwiki.

- Příklady s ✔️ mají ověřený výsledek
- U příkladů s❔si nejsem s řešením moc jistý
- Příklady s ⭐ jsou trošičku těžší, nebo tam je nějaký chyták

Pozn. příklady, co se v testech opakují jsem sem dal jen jednou.

> Kdybyste našli chybu nebo něco, tak prosím řekněte :D

> Stránka je work in progress - postupně budu přidávat další příklady

### Vypsané testy

✔️ - testy, u kterých jsem sem vypsal příklady

2021:
- [6. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-6 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-6") ✔️ (oddělení kladivo)
- [13. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-13 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-13")
  - skupina 1 ✔️ (oddělení oko)
  - skupina 2 ✔️ (oddělení letadlo)
- [20. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-20 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-20") ✔️ (oddělení palec)
- [27. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-27 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-27") ✔️(oddělení turbomotorka nebo co to sakra je :D)
- [3. 2. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-2-3 "škola:předměty:mi-mpi:mpi_zkouska_2021-2-3") ✔️ (oddělení nůžky)
- [10. 2. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-2-10 "škola:předměty:mi-mpi:mpi_zkouska_2021-2-10") ✔️ (magická hůlka Voldemorta)

### Malé příklady

#### Analýza

##### ✔️Otázka - 1. derivace počítání 1

![](../../Assets/Pasted%20image%2020241230142339.png)

###### Výsledek

1. spočtu gradient
2. Dosadím do rovnice pro derivaci funkce ($\nabla_vf(x)=\nabla f(x) \cdot v$)
3. Vyjde $(E)$
##### ✔️Otázka - 1. derivace počítání 2

![](../../Assets/Pasted%20image%2020241231165637.png)

###### Výsledek
- (A)

##### ✔️Otázka - 2. derivace počítání 2

![](../../Assets/Pasted%20image%2020241230160718.png)

###### Výsledek
- D

##### ✔️Otázka - 2. derivace počítání 2
![](../../Assets/Pasted%20image%2020250101143309.png)
###### Výsledek
- **(C)**
##### ✔️Otázka - definitnost matice 1

![](../../Assets/Pasted%20image%2020241230143437.png)

###### Výsledek

1. Spočtu vlastní čísla matice - matice se mi zredukuje na 2x2 (nuly se mi odstraní)
   - Determinant matice, kde diagonály odečtu $\lambda$, vyjádřím $\lambda$
2. Mám kvadratickou rovnici $\lambda^2-2\lambda-3$, tedy vlastní čísla budou $3, -1, 0, 0, \dots$
3. Vlastní čísla se liší, tedy je **indefinitní** (A)

##### ✔️Otázka - definitnost matice 2
![](../../Assets/Pasted%20image%2020250101162613.png)

###### Výsledek
Vlastní čísla vyjdou $4, 0, 0, \dots$
Tzn. je **pozitivně semidefinitní**
- **(C)** je správně
##### ✔️Otázka 3

![](../../Assets/Pasted%20image%2020241230145025.png)

###### Výsledek
- **(A)** - Vpodstatě přímo definice, jen trochu jinak zapsaný vnitřek té závorky

##### ✔️Otázka 4

![](../../Assets/Pasted%20image%2020241230154032.png)

###### Výsledek
- a) NE - závisí to na vlastních číslech
- b) ANO - viz věta 4.8
- c) NE - závisí to na vlastních číslech
- d) NE
- e) NE - jeden nulový prvek nemusí nutně ovlivnit definitnost

##### ✔️⭐ Otázka - lokální minimum

![](../../Assets/Pasted%20image%2020241230160828.png)

###### Výsledek
- A) 
- B) NE - matice by musela být pozitivně definitní
- **C) ANO**
- D) 
- E) NE - musí být kladná

##### ✔️❔Otázka - 2. derivace

![](../../Assets/Pasted%20image%2020241231155030.png)

###### Výsledek
- A) ANO - Triviálně plyne z definice negativní semidefinitnosti
- B) Ptfuj, tam má být Hessova matice
- C) NE
- D) Neee
- E) Ptfuj ani náhodou

##### ✔️⭐Otázka - 2. derivace 2
![](../../Assets/Pasted%20image%2020250101131842.png)

###### Výsledek
- A) NE
- B) NE
- C) Ne, musela by tam být Hessova matice, ne gradient
- D) Ne
- E) ANO

##### ✔️Otázka - nadrovina 1

Mějme funkci f : R 3 → R mající spojité všechny parciální derivace (a def. obor R 3 ). Jaký výrok o tečné nadrovině P na graf funkce f v bodě (a, b, c) ∈ R 3 je vždy pravdivý?
![](../../Assets/Pasted%20image%2020241231153324.png)

###### Výsledek

- A) Nevím odkud si tohle autor vytáhnul, ale nepřijde mi to pravdivý
- B) BULLSHIT
- **C) ANO** - Tohle je dle definice
- D) NE - takhle ta rovnice nevypadá
- E) NE

##### ✔️Otázka - nadrovina 2
![](../../Assets/Pasted%20image%2020250101131137.png)
###### Výsledek
- A) Nope, musela by tam být $-1$
- B) NE
- C) NE
- **D) ANO**
- E) NE

##### ✔️⭐Otázka - parciální derivace
![](../../Assets/Pasted%20image%2020250101163957.png)
###### Výsledek
- A) NE
- B) NE - Musel by tam být předpoklad, že v tom bodě existuje ta parciální derivace (dle věty 3.1)
- C) **ANO** - Ten vektor standardní báze mi "vybere" z toho gradientu tu i-tou derivaci.
- D) NE - v jiném směru to nemusí být kladné
- E) NE - a nevím proč

#### Algebra

##### ✔️Otázka 1 - počítání řádu grupy

![](../../Assets/Pasted%20image%2020241230140811.png)

###### Výsledek

Řešení:
![](../../Assets/Pasted%20image%2020241230141154.png)

Výsledek: 
- (A) 100
##### ✔️⭐❔Otázka - cyklická grupa 1
![](../../Assets/Pasted%20image%2020241230145712.png)

###### Výsledek
- A) Ne - $a^n = e$ platí pro každý prvek v grupě
- B) Ne - může to být i $2$ 
- C) ❔**ANO** - $a^k=e$, platí pro $k=n$ a může to platit i pro menší $k$, když se to cyklí dřív, takže pro $k|n$ kde $k \neq 1$
- D) Ne - inverzní prvek tam např. u generátoru je
- E) Ne - neplatí to pro všechny prvky

![](../../Assets/Pasted%20image%2020250104150403.png)

##### ✔️⭐Otázka - grupa 1

![](../../Assets/Pasted%20image%2020241230160935.png)

###### Výsledek

- A) NE - o tom nejsem obecně schopný nic říct
- B) NE - ne nutně
- C) NE - trochu to naráží na větu 32.1, ale imo to neplatí
- D) NE
- E) ANO - obal $a$ bude nějaká podgrupa. Když to je podgrupa, je to grupa. Když je to grupa, z věty 32.1, plyne, že musí existovat $k$ takové, že $a^k=e$

##### ✔️❔Otázka - grupa 2
![](../../Assets/Pasted%20image%2020250101141429.png)

###### Výsledek

> Tady si nejsem moc jistý spíš jsem pro D. Na fitwiki se lidi hádají, protože většina dala (D), ale nějaký frajer tvrdí, že to má být (C), protože prý u nekonečné grupy to nejsme schopni jednoznačně říct.

- A) Nope, muselo by to být $a^{2+n}$
- B) Nope, protože $a^n$ je neutrální prvek
- C) Ne?
- D) **Ano**, protože $a^{n-1}=a^n \cdot a^{-1} = a^{-1}$. Platí, že inverzní prvek generátoru grupy je taky generátor té grupy. Tedy se to rovná.
- E) Ne, to nedává smysl
##### ✔️Otázka - okruh polynomů

![](../../Assets/Pasted%20image%2020241230151334.png)

###### Výsledek

- a) NE - ?
- b) NE - Okruh může mít nekonečný počet prvků nad tělesem, který má konečné množství prvků.
- c) NE - nesplňuje podmínku uzavřenosti (grupoid), protože násobením dvou polynomů dostanu polynom vyššího stupně
- d) **ANO** - nenapadá mě, jak by se v $F[x]$ vzaly dělitelé nuly, když v $F$ nejsou
- e) NE

##### ✔️Otázka

![](../../Assets/Pasted%20image%2020241230153049.png)

###### Výsledek

1. Spočtu řád grupy pomocí eulerovy funkce = $30$
2. Dle Lagrangeovy věty, řád podgrupy musí dělit řád grupy, tedy můžou existovat $1, 2,3,5,6,10,15,30$
3. Tzn. **(C)**

##### ✔️⭐Otázka

![](../../Assets/Pasted%20image%2020241230154621.png)

###### Výsledek

- a) NE 1. Spočtu počet prvků grupy = 8. 2. Prvky jsou: 1,3,5,7,9,11,13,15 - 1 - nemůže být generátor - 3 - zacyklím se dřív - 5 - zacyklím se dřív - 7 - zacyklím se
- b) NE - podle Lagrangeovy věty, řád podgrupy musí dělit řád grupy
- **c) ANO** ![](../../Assets/Pasted%20image%2020241230160631.png)
- e) NE -
- d) NE - analogicky jako v a)

##### ✔️Otázka

![](../../Assets/Pasted%20image%2020241231161219.png)

###### Výsledek

![](../../Assets/Pasted%20image%2020241231162838.png)
![](../../Assets/Pasted%20image%2020241231162846.png)

- A) správně (i podle fitwiki i podle mě i podle chatgpt)

##### ✔️Otázka

![](../../Assets/Pasted%20image%2020241231163153.png)

###### Výsledek

Použijeme Eulerovu větu:
$a^{\varphi(n)} \equiv 1 \mod n$
1.  $\varphi(22)= 10$
2. $19^{10} \equiv 1 \mod 22$
3. dostaneme $19^4 \mod 22$
4. Pak je třeba to ručně vydělit

![](../../Assets/Pasted%20image%2020241231165459.png)
![](../../Assets/Pasted%20image%2020241231165511.png)
![](../../Assets/Pasted%20image%2020241231165524.png)
![](../../Assets/Pasted%20image%2020241231165532.png)
- **(D)**

##### ✔️Otázka

Mějme konečnou grupu G řádu n. Který z následujících výroků je vždy pravdivý?
![](../../Assets/Pasted%20image%2020241231145239.png)

###### Výsledek

- A) NE - bude obsahovat podgrupu, ale ne právě jednu
- B) NE - nejsou nutně **různé** - např. pro grupu $(\set e, \circ)$
- C) NE - to je blbost, autor asi upadnul na hlavu
- D) ANO - Je to kombinace několika vět: 1. Podgrupa má řád $p$, každá grupa prvočíselného řádu je cyklická 2. Všechny cyklické grupy stejného řádu jsou izomorfní.
- E) NE

##### ✔️Otázka

Mějme okruh R s operacemi + a · (v tomto pořadí), který má alespoň 2 prvky. Prvek 0 je neutrální vůči + a 1 vůči ·. Které z následujících tvrzení není pravdivé?
![](../../Assets/Pasted%20image%2020241231152732.png)

###### Výsledek
- A) PLATÍ
- B) PLATÍ
- C) PLATÍ
- D) NEPLATÍ - Tohle obecně platí u těles, ne u okruhů
- E) Např. $a=0$

##### ✔️Otázka - těleso

![](../../Assets/Pasted%20image%2020241231165606.png)

###### Výsledek
- A) NE - řád multiplikativní grupy tělesa je $n-1$
- **B) ANO**
- C) NE
- D) NE - viz věta 35.4
- E) NE - tohle bylo u věty, že $\mathbb{Z}_n^\times$ je cyklická

##### ✔️Otázka - těleso 2
![](../../Assets/Pasted%20image%2020250101133727.png)
###### Výsledek
- A) NE
- B) NE
- **C) ANO**
- D) NE
- E) NE
##### ✔️Otázka - homomorfismus 1

Nechť G = (M, ◦G) a H = (N, ◦H) jsou dvě grupy. Zobrazení φ : M → N je izomorfizmem grup G a H právě tehdy, když
![](../../Assets/Pasted%20image%2020241231154617.png)

###### Výsledek

- A) ANO
- B) NE - je to tam obráceně
- C) NE - bullshit
- D) NE - je to obráceně
- E) NE - bullshit. Tohle platí u izomorfismů, ale není to definice

##### ✔️⭐Otázka - homomorfismus 2
![](../../Assets/Pasted%20image%2020250101134321.png)
###### Výsledek
**TADY JE NEJSPÍŠ CHYBA V ZADÁNÍ - VŠECHNY JSOU ASI ŠPATNĚ**
- A) ANO - vlastní podgrupa bude mít řád menší než $n$
- B) NE
- C) NE - může to být surjektivní zobrazení
- D) NE nutně
- E) NE, grupy by musely být cyklické, aby se vůbec dalo na podobně hříšné myšlenky pomyslet

##### ✔️Otázka - diskrétní logaritmus (+)
![](../../Assets/Pasted%20image%2020250101134625.png)
###### Výsledek
1. Upravíme rovnici:
$119\cdot k \equiv 107 \pmod {122}$

2. Zjistíme inverzní prvek 119: Spočtem $119\cdot x \equiv 1 \pmod {122}$, tedy $\gcd(119,122)$ pomocí Eukleidova algoritmu, vyjde $x = 81$
3. Vynásobíme rovnici inverzním prvkem:
	- $k \equiv 107 \cdot 119^{-1} \pmod {122}$
	- $k \equiv 107 \cdot 81 \pmod {122}$
	- $k \equiv 8667 \pmod {122}$
- Zmodulíme a dostaneme zbytek po dělení 112: $k = 5$

Správně: **(C)**
#### Strojová čísla
##### ✔️Otázka - převod do binárky
![](../../Assets/Pasted%20image%2020241231153222.png)

###### Výsledek
$$
\begin{align*}
& \frac{4}{3} = 1 + \frac{1}{3} \\
& \tfrac{1}{3} \cdot 2 = \tfrac{2}{3}  \quad 0 \\
& \tfrac{2}{3} \cdot 2 = \tfrac{1}{3}  \quad 1 \\
& \dots \\
& \frac{4}{3} =1.\overline{01}_{2} 
\end{align*}
$$
- Po normalizaci první jednička zmizí
- Normalizovaná mantisa končí $1010$ a následovala by $1$. Kvůli tomu je třeba zaokrouhlit podle pravidla v zadání - zaokrouhluje se směrem od nuly, tedy poslední 4 číslice budou $1011$
- Správná odpověď: **(E)**


##### ✔️Otázka - převod do binárky 2
![](../../Assets/Pasted%20image%2020241230140315.png)
###### Výsledek
- (**C**)
##### ✔️Otázka - převod do binárky
![](../../Assets/Pasted%20image%2020241230152916.png)
###### Výsledek
- (**E**)
##### ✔️Otázka - poznej strojové číslo 1
![](../../Assets/Pasted%20image%2020250101144315.png)
###### Výsledek
Strojová čísla je konečná podmnožina **racionálních** (ne reálných) čísel. Tzn. neobsahuje např. čísla která mají nekonečný zápis (např. $1/3, \sqrt 2, \pi$)
- **(B)**

##### ✔️Otázka - poznej strojové číslo 2
![](../../Assets/Pasted%20image%2020241230152440.png)

###### Výsledek
- **B**
##### ✔️Otázka - poznej strojové číslo 3

![](../../Assets/Pasted%20image%2020241230152955.png)

###### Výsledek
- **A**
##### ✔️Otázka - poznej strojové číslo 3

![](../../Assets/Pasted%20image%2020241231154933.png)

###### Výsledek
- **A**

### Velké příklady

#### Analýza

##### ✔️ Otázka

![](../../Assets/Pasted%20image%2020241230152521.png)

###### Výsledek ✔️
Desmos graf: https://www.desmos.com/calculator/7t8g20f0el
Je třeba sestavit směrnice:
$$y_1 = \frac{z}{3}(x+2)$$
$$y_2 = \frac{z-2}{3}(x+2)+2$$
Integrál a výsledek pak vypadají takto:
$$\int_{-2}^{1}\int_{\tfrac{z}{3}(x+2)}^{\tfrac{z-2}{3}(x+2)+2}(x-3y)\,dy\,dx = -3(z+3)$$
(ověřeno Wolframem a fitwiki)
##### ⭐Otázka

![](../../Assets/Pasted%20image%2020241230161016.png)

###### Výsledek a)
![](../../Assets/Pasted%20image%2020241011133549.png)
###### Výsledek b) ⭐
![](../../Assets/Pasted%20image%2020250104184013.png)
Vychází to fakt hnusně, vyjde:
$$
\begin{align*}
& \lambda = -\tfrac{5}{16}, x=\tfrac{5}{2}, y=\tfrac{3}{2} \\
& \lambda = -\tfrac{3}{16}, x=-\tfrac{3}{2}, y= -\tfrac{5}{2} \\
\end{align*}
$$
To se pak dosadí do Hessovy matice a vyjde, že oba body jsou lokálním maximem, protože matice 

###### Výsledek b) ⭐ TODO
##### ✔️Otázka
![](../../Assets/Pasted%20image%2020241231154342.png)

###### Výsledek
Řešení od Spěváka
https://youtu.be/joPRkNN1rwA?si=2XTn57CpaG-S4qS6&t=3027

- a) Není extrém (failuje 2. derivace)
- b) Není extrém (failuje 1. derivace)
- c) Je ostré lokální maximum
- d) Je ostré lokální minimum (tip: jde použít Sylvestr)
##### Otázka
![](../../Assets/Pasted%20image%2020241231165656.png)

###### Výsledek a) ✔️
$$
\begin{align*}
& J_{\Psi}=\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}  \\
& \det J_{\Psi} = 2 
\end{align*}
$$
###### Výsledek b) ✔️
1. Pomocí dosazení bodů do rovnic pro $x,y$ získáme souřadnice bodů po substituci (obrázek: https://www.geogebra.org/calculator/gzxsrr2b)
2. Potom sestrojíme integrál a dopočítáme ([Wolfram](https://www.wolframalpha.com/input?i2d=true&i=Integrate%5BIntegrate%5B%5C%2840%29Power%5B%5C%2840%29u%2Bv%5C%2841%29%2C2%5D-Power%5B%5C%2840%29u-v%5C%2841%29%2C2%5D%5C%2841%292%2C%7Bu%2CDivide%5Bv%2C2%5D-1%2C1-Divide%5Bv%2C2%5D%7D%5D%2C%7Bv%2C0%2C2%7D%5D))
3. **Výsledek je 0**

Postup frajera na fitwiki:
![](../../Assets/Pasted%20image%2020250103173002.png)

##### Otázka
![](../../Assets/Pasted%20image%2020250101144934.png)

###### Výsledek

#### Algebra

##### ✔️⭐❔Otázka

![](../../Assets/Pasted%20image%2020241230152755.png)

###### Výsledek a) ✔️
![](../../Assets/Pasted%20image%2020241221092421.png)
###### Výsledek b) ✔️
$n-1 = 3^4-1=80$
###### Výsledek c) ⭐❔
Tady nevím, jak zjednodušit ten polynom. Došel jsem k tomuhle:
$(2x)^{192}=(2x)^{80}\cdot(2x)^{80}\cdot(2x)^{32}=1\cdot1\cdot(2x)^{32} \pmod{x^4+2x^3+2}$
dál nevím, jak to jednoduše udělat, ale dle fitwiki má vyjít $2x^3+x+2$

Potom pomocí REA má vyjít $221$, ale vycházelo mi to fakt nechutně a počítá se to tak hodinu..

###### Výsledek d) ⭐❔
![](../../Assets/Pasted%20image%2020250104180836.png)

##### Otázka

![](../../Assets/Pasted%20image%2020241230161004.png)

###### Výsledek a)✔️
Víme, že řád podgrupy bude buď $2$ nebo $13$ na základě Lagrangeovy věty.

Podgrupa řádu $2$ bude vypadat takto $\set {1, ?}$ (protože tam musí být neutrální prvek).

Jelikož jsme v $\mathbb{Z}_2$, nabízí se vyzkoušet třeba $2$ a hle, dvojka splňuje podmínku, že $2\cdot 2 = 1$.

Podgrupa má tedy prvky $\set {1,2}$. Když máme zdůvodnit, že jde o grupu, měli bychom nejspíš správně dokázat všechny vlastnosti z definice, tzn.:
- Jde o podmnožinu původních prvků - platí
- Jde o grupu - tam bychom ukázali, že platí vlastnosti:
	- grupoidu, pologrupy, monoidu a grupy.

###### Výsledek b) ✔️
Tady nevím, jak to myslí s tím že to je izomorfismus "okruhů", když $T$ je těleso. Znamená to, že z $T$ "udělám okruh" tak, že do multiplikativní grupy musím přidat zpátky nulu?

**Řešení, co mi dává smysl, ale asi nebude správně:**
Pokud bychom tam nulu nepřidávali (což by mi asi dávalo víc smysl), tak bychom mohli jednoduše argumentovat, že to nemůže být izomorfismus, protože to zobrazení nebude bijektivní, protože multiplikativní monoidy mají jiný počet prvků ($T$ má $26$ a $\mathbb{Z}_{27}$ má $27$.)

Jenže nevím co myslí tím "okruhem $T$", takže je možný, že tohle nepůjde říct.

**Řešení co asi bude správně:**
Ověříme že platí homomorfismus z definice (tohle je řešení nějakého týpka na fitwiki):
![](../../Assets/Pasted%20image%2020250103111817.png)

##### ✔️Otázka

![](../../Assets/Pasted%20image%2020241231154328.png)

###### Výsledek a)✔️
Prvků $n-1=26$
Generátorů $\varphi(n)=\varphi(26)=12$

Výsledek: $12$

###### Výsledek b)✔️
_Lepší postup:_
Lepší způsob je si uvědomit, že z Lagrangeovy věty pokud má mít prvek řád, znamená to, že se po nějaké době "zacyklí" (dostane se na neutrální prvek).

Tzn. vygeneruje mi to nějakou cyklickou podgrupu, tzn. dle Lagrangeovy musí řád podgrupy dělit řád grupy. Tzn. bude to buď $13$ nebo $2$. U tohoto prvku to $2$ určitě nebude, protože po dvou krocích jsme se nedostali na neutrální prvek.

Pro 13 si můžu uvědomit, že platí $x^{26} = 1 \mod x^{3}+ 2x+ 1$, což shodou okolností přesně sedí u našeho prvku $(x^{2})^{13}=1 \mod x^{3}+ 2x+ 1$.

Díky tomu jsme ověřili, že po $13$ krocích se to dostane na neutrální prvek. Dříve se to stát nemůže, protože pro $2$ to neplatí a ostatní generátory podgrupa nemůže mít. 

_Horší postup:_ Jde to bruteforcem vygenerovat všechny prvky, což ale zabere hodně času:
$$
\begin{align*}
& (x^{2})^{m}=1 \mod x^{3}+ 2x+ 1\\
& m=1: \quad  x^{2} \neq 1 \\
& m=2: \quad  x^{4} = x^{2} +2 \neq 1 \\
& m=3: \quad x^{6}  = x^{3}x^{3} = (x+2)^{2} = x^{2}+x+1 \neq 1 \\
& m=4: \quad x^{8} = x^{4}x^{4}  
\end{align*}
$$

###### Výsledek c) ✔️❔
Pomocí REA vyjde $2x^2+2x+1$, ale poslední nenulový řádek není 1, tzn. gcd není $1$, tzn $x^2$ **nemá inverzi**, asi?

##### ✔️Otázka
![](../../Assets/Pasted%20image%2020241231165713.png)

###### Výsledek a) ✔️
Nemá generátory, protože **není cyklická**. Z přednášky "Aditivní grupa $GF(p^n)$ není cyklická pro $n>1$".

###### Výsledek b) ✔️
Multiplikativní grupa bude mít řád $n-1 = 7$. Tato grupa bude cyklická. Bude tedy mít $\phi(7)=6$ generátorů.

Z $7$ prvků nám tedy stačí najít ten jeden, který není generátorem. Triviálně platí, že to bude $1$, protože když budu neustále násobit $1$, tak se nikam nedostanu. Stačí tedy vypsat všechny ostatní prvky: $010, 011, 100,101,110,111$ (nebude tam 000 a 001).

Inverze se dá počítat např. pro $x$:

**Pro aditivní grupu** triviálně platí, že inverze se počítá takto:
$1101-0010 = x^3+x^2+1-(x)=(x^2+1)+x^2+1-x=x$
Nebo si stačí uvědomit, že inverze k $x$ bude $x$ čistě z toho, že se pohybujeme v mod $2$.

**Pro multiplikativní grupu** použijeme REA a vyjde: $x^2+x$

**Výsledek tedy je:**
- generátory: $010, 011, 100,101,110,111$
- inverze v aditivní: $x$
- inverze v multiplikativní: $x^2+x$

###### Výsledek c) ⭐✔️
$001$ se mi musí zobrazit na neutrální prvek $0$.

Zaprvé, pro řád $r$ prvku $g$ z první grupy platí následující. Pro aditivní grupu platí druhé rovnítko.
$\phi(g^r)=\phi(g)^r= r \times \phi(g)$

Zadruhé, pro každý prvek homomorfismu musí platit, že řád $\varphi(a)$ musí dělit řád $a$. Aby bylo $\varphi(a)$ řádem v aditivní grupě, musí platit, že $\varphi(a) = 0$.

Když poskládáme podmínky dohromady, získáme následující rovnici:
Musí platit, že $7 \times \varphi(a) = 0$.

Všechny prvky krom $001$ mají řád $7$ (protože jsou generátory). 

Ověříme rovnici:
$$
\begin{align*}
& 7 \times 0 \pmod{10} = 0 \\
& 7 \times 1 \pmod{10} \neq 0 \\
& 7 \times 2 \pmod{10}\neq 0 \\
& 7 \times 3 \pmod{10}\neq 0 \\
& 7 \times 4 \pmod{10}\neq 0  \\
& \dots \\
& 7 \times 9 \pmod{10}\neq 0 \\
\end{align*}
$$
Tzn. jediný prvek, který to splňuje je $0$. Tzn. jediný homomorfismus, který existuje je takový, že se všechny prvky zobrazí do $0$. Je jediný, protože ostatní nesplňují podmínku.
##### ✔️Otázka
![](../../Assets/Pasted%20image%2020250101144918.png)

###### Výsledek a) ✔️
Postupně počítat mocniny x, dokud se nedostanu na neutrální prvek

<!-- Latex Equation -->
$$
\begin{align*}
& x^{m} \equiv 1 \mod x^{2}+1 \\
& x^{1} \equiv x \mod x^{2}+1 \\
& x^{2} = -1 =2  \\
& x^{3} \equiv x^{2+1}\equiv2x  \mod x^{2}+1 \\
& x^{4} \equiv x^{2+2}\equiv2 \cdot 2 \equiv 1 \mod x^{2}+1 \\
& m = 4
\end{align*}
$$

Výsledek je $4$.
###### Výsledek b) ✔️
REA s $x^2+1$ a $x$, výsledek vyjde $2x$.

Výsledek je $2x$

###### Výsledek c) ✔️
Vypsat všechny prvky:
00,01,02,10,11,12,20,21,22

U každého zkusit vynásobit:
<!-- Latex Equation -->
$$
\begin{align*}
& x^2 =2 \\
& x^3 = x^2x = 2x \\
& 00: 0^2 \cdot  x = 0 \quad \text{\small{NE}} \\
& 01: 1^{2}  \cdot  x = x \quad \text{\small{NE}} \\
& 02: 2^{2} \cdot x = x \quad \text{\small{NE}} \\
& 10: x^2 \cdot x = 2x \quad \text{\small{NE}} \\
& 11: (x+1)^2 x = x^3 +2x^2 +x = 2x+ 4 + x = 3x+4 = 1 \quad \text{\small{ANO}} \\
& \dots \\
& 22: (2x+2)^2 x = 1 \quad \text{\small{ANO}} \\
\end{align*}
$$

Výsledek: 
Platí pro:
$z = 11$ a $z = 22$

##### Otázka TODO
![](../../Assets/Pasted%20image%2020250103173928.png)
###### Výsledek

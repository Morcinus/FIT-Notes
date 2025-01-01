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
- **C) ANO** - znamená to (asi), že tím pádem Hessova matice musí být pozitivně definitní, což splňuje tu podmínku
- D) 
- E) NE - musí být kladná

##### ✔️❔Otázka - 2. derivace

![](../../Assets/Pasted%20image%2020241231155030.png)

###### Výsledek
- A) ANO?! - Tohle je údajně podle několika lidí na fitwiki správně, ale moc nevím proč.. Spíš mi přišlo, že by to mělo být pozitivně semidefinitní ale idk
- B) Ptfuj, tam má být Hessova matice
- C) NE??
- D) Neee
- E) Ptfuj ani náhodou

##### ✔️⭐Otázka - 2. derivace 2
![](../../Assets/Pasted%20image%2020250101131842.png)

###### Výsledek
- A) ANO
- B) NE
- C) Ne, musela by tam být Hessova matice, ne gradient
- D) Ne
- E) Ne

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
- C) ❔**ANO** - Ale nevím moc proč tbh
- D) Ne - inverzní prvek tam např. u generátoru je
- E) Ne - neplatí to pro všechny prvky

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
- (**D**)
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

##### Otázka

![](../../Assets/Pasted%20image%2020241230152521.png)

###### Výsledek

##### Otázka

![](../../Assets/Pasted%20image%2020241230161016.png)

###### Výsledek

##### Otázka

![](../../Assets/Pasted%20image%2020241231154342.png)

###### Výsledek

##### Otázka

![](../../Assets/Pasted%20image%2020241231165656.png)

###### Výsledek

##### Otázka
![](../../Assets/Pasted%20image%2020250101144934.png)

###### Výsledek

#### Algebra

##### Otázka

![](../../Assets/Pasted%20image%2020241230152755.png)

###### Výsledek fold

##### Otázka

![](../../Assets/Pasted%20image%2020241230161004.png)

###### Výsledek

##### Otázka

![](../../Assets/Pasted%20image%2020241231154328.png)

###### Výsledek

##### Otázka

![](../../Assets/Pasted%20image%2020241231165713.png)

###### Výsledek

##### Otázka
![](../../Assets/Pasted%20image%2020250101144918.png)

###### Výsledek
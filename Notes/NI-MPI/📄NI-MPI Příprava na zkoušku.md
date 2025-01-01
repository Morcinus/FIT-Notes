---
created: 2025-01-01T11:51:55
title: "Příprava na zkoušku"
up: "[[📖NI-MPI]]"
---
### Info
Tady je seznam všech příkladů, co jsem vyhrabal na fitwiki.
- Příklady s ✔️ mají ověřený výsledek
- U příkladů s ❔si nejsem s řešením moc jistý
- Příklady s ⭐ jsou trošičku těžší, nebo tam je nějaký chyták

>Kdybyste našli chybu nebo něco, tak prosím řekněte :D

> P.S. stránka je work in progress - postupně budu přidávat další příklady

### Vypsané testy

✔️ - testy, u kterých jsem sem vypsal příklady

2021:
- [6. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-6 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-6") ✔️ (oddělení kladivo)
- [13. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-13 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-13")
	- skupina 1 ✔️ (oddělení oko)
	- skupina 2 ✔️ (oddělení raketa)
- [20. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-20 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-20") ✔️ (oddělení palec)
- [27. 1. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-1-27 "škola:předměty:mi-mpi:mpi_zkouska_2021-1-27") ✔️(oddělení turbomotorka nebo co to sakra je :D)
- [3. 2. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-2-3 "škola:předměty:mi-mpi:mpi_zkouska_2021-2-3")
- [10. 2. 2021](https://fit-wiki.cz/%C5%A1kola/p%C5%99edm%C4%9Bty/mi-mpi/mpi_zkouska_2021-2-10 "škola:předměty:mi-mpi:mpi_zkouska_2021-2-10")

### Malé příklady

#### Analýza

##### ✔️Otázka 1

![[Pasted image 20241230142339.png]]

###### Výsledek

1. spočtu gradient
2. Dosadím do rovnice pro derivaci funkce ($\nabla_vf(x)=\nabla f(x) \cdot v$)
3. Vyjde $(E)$

##### ✔️Otázka

![[Pasted image 20241230160718.png]]

###### Výsledek

D

##### ✔️⭐ Otázka 2

![[Pasted image 20241230143437.png]]

###### Výsledek

1. Spočtu vlastní čísla matice - matice se mi zredukuje na 2x2 (nuly se mi odstraní)
   - Determinant matice, kde diagonály odečtu $\lambda$, vyjádřím $\lambda$
2. Mám kvadratickou rovnici $\lambda^2-2\lambda-3$, tedy vlastní čísla budou $3, -1, 0, 0, \dots$
3. Vlastní čísla se liší, tedy je indefinitní

##### ✔️❔Otázka 3

![[Pasted image 20241230145025.png]]

###### Výsledek

(A) - Tohle je správně podle asi 3 lidí na fitwiki, mně to moc nedává smysl protože $he_i$ je číslo a ne vektor, tím pádem mi to nedává smysl. Ale musí to být správně, když to tak má literally každý na fitwiki.

##### ✔️Otázka 4

![[Pasted image 20241230154032.png]]

###### Výsledek

a) NE - závisí to na vlastních číslech
b) ANO - viz věta 4.8
c) NE - závisí to na vlastních číslech
d) NE
e) NE - jeden nulový prvek nemusí nutně ovlivnit definitnost

##### ✔️⭐ Otázka

![[Pasted image 20241230160828.png]]

###### Výsledek

A)
B) NE - matice by musela být pozitivně definitní
**C) ANO** - znamená to (asi), že tím pádem Hessova matice musí být pozitivně definitní, což splňuje tu podmínku
D)
E)

##### ✔️❔Otázka

![[Pasted image 20241231155030.png]]

###### Výsledek

A) ANO?! - Tohle je údajně podle několika lidí na fitwiki správně, ale moc nevím proč.. Spíš mi přišlo, že by to mělo být pozitivně semidefinitní ale idk
B) Ptfuj, tam má být Hessova matice
C) NE??
D) Neee
E) Ptfuj ani náhodou

##### ✔️Otázka

Mějme funkci f : R 3 → R mající spojité všechny parciální derivace (a def. obor R 3 ). Jaký výrok o tečné nadrovině P na graf funkce f v bodě (a, b, c) ∈ R 3 je vždy pravdivý?
![[Pasted image 20241231153324.png]]

###### Výsledek

A) Nevím odkud si tohle autor vytáhnul, ale nepřijde mi to pravdivý
B) BULLSHIT
**C) ANO** - Tohle je dle definice
D) NE - takhle ta rovnice nevypadá
E) NE

##### Otázka

![[Pasted image 20241231165637.png]]

###### Výsledek

#### Algebra

##### ✔️Otázka 1

![[Pasted image 20241230140811.png]]

###### Výsledek

Řešení:
![[Pasted image 20241230141154.png]]

Výsledek: (A) 100

##### ✔️⭐❔Otázka 2

![[Pasted image 20241230145712.png]]

###### Výsledek

(C) podle fitwiki - ale nevím proč

##### ✔️⭐Otázka

![[Pasted image 20241230160935.png]]

###### Výsledek

A) NE - o tom nejsem obecně schopný nic říct
B) NE - ne nutně
C) NE - trochu to naráží na větu 32.1, ale imo to neplatí
D) NE
E) ANO - obal $a$ bude nějaká podgrupa. Když to je podgrupa, je to grupa. Když je to grupa, z věty 32.1, plyne, že musí existovat $k$ takové, že $a^k=e$

##### ✔️ Otázka

![[Pasted image 20241230151334.png]]

###### Výsledek

a) NE - nenapadá mě nic, proč by to tak mělo být
b) NE - Okruh může mít nekonečný počet prvků nad tělesem, který má konečné množství prvků.
c) NE - nesplňuje podmínku uzavřenosti (grupoid), protože násobením dvou polynomů dostanu polynom vyššího stupně
d) ANO

(D)

##### ✔️Otázka

![[Pasted image 20241230153049.png]]

###### Výsledek

1. Spočtu řád grupy pomocí eulerovy funkce = $30$
2. Dle Lagrangeovy věty, řád podgrupy musí dělit řád grupy, tedy můžou existovat $1, 2,3,5,6,10,15,30$
3. Tzn. **(C)**

##### ✔️⭐Otázka

![[Pasted image 20241230154621.png]]

###### Výsledek

a) NE 1. Spočtu počet prvků grupy = 8. 2. Prvky jsou: 1,3,5,7,9,11,13,15 - 1 - nemůže být generátor - 3 - zacyklím se dřív - 5 - zacyklím se dřív - 7 - zacyklím se
b) NE - podle Lagrangeovy věty, řád podgrupy musí dělit řád grupy
**c) ANO** ![[Pasted image 20241230160631.png]]
e) NE -
d) NE - analogicky jako v a)

##### ✔️Otázka

![[Pasted image 20241231161219.png]]

###### Výsledek

![[Pasted image 20241231162838.png]]
![[Pasted image 20241231162846.png]]

A) správně (i podle fitwiki i podle mě i podle chatgpt)

##### Otázka

![[Pasted image 20241231163153.png]]

###### Výsledek

![[Pasted image 20241231165459.png]]
![[Pasted image 20241231165511.png]]
![[Pasted image 20241231165524.png]]
![[Pasted image 20241231165532.png]]
**(D)**

##### ✔️Otázka

Mějme konečnou grupu G řádu n. Který z následujících výroků je vždy pravdivý?
![[Pasted image 20241231145239.png]]

###### Výsledek

A) NE - bude obsahovat podgrupu, ale ne právě jednu
B) NE - nejsou nutně **různé** - např. pro grupu $(\set e, \circ)$
C) NE - to je blbost, autor asi upadnul na hlavu
D) ANO - Je to kombinace několika vět: 1. Podgrupa má řád $p$, každá grupa prvočíselného řádu je cyklická 2. Všechny cyklické grupy stejného řádu jsou izomorfní.
E) NE

##### ✅Otázka

Mějme okruh R s operacemi + a · (v tomto pořadí), který má alespoň 2 prvky. Prvek 0 je neutrální vůči + a 1 vůči ·. Které z následujících tvrzení není pravdivé?
![[Pasted image 20241231152732.png]]

###### Výsledek

A) PLATÍ
B) PLATÍ
C) PLATÍ
D) NEPLATÍ - Tohle obecně platí u těles, ne u okruhů
E) Např. $a=0$

##### Otázka (todo)

![[Pasted image 20241231165606.png]]

###### Výsledek

##### Otázka

Nechť G = (M, ◦G) a H = (N, ◦H) jsou dvě grupy. Zobrazení φ : M → N je izomorfizmem grup G a H právě tehdy, když
![[Pasted image 20241231154617.png]]

###### Výsledek

A) ANO
B) NE - je to tam obráceně
C) NE - bullshit
D) NE - je to obráceně
E) NE - bullshit. Tohle platí u izomorfismů, ale není to definice

#### Strojová čísla

##### Otázka 1

![[Pasted image 20241230140315.png]]

##### Otázka 2

![[Pasted image 20241230152440.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241230152916.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241231153222.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241230152955.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241231154933.png]]

###### Výsledek

#### Vlastní čísla

#### Algoritmy a soustavy lin. rovnic

### Velké příklady

#### Analýza

##### Otázka

![[Pasted image 20241230152521.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241230161016.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241231154342.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241231165656.png]]

###### Výsledek

#### Algebra

##### Otázka

![[Pasted image 20241230152755.png]]

###### Výsledek fold

##### Otázka

![[Pasted image 20241230161004.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241231154328.png]]

###### Výsledek

##### Otázka

![[Pasted image 20241231165713.png]]

###### Výsledek

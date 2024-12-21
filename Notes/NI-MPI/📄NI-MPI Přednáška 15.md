---
created: 2024-12-21T09:23:08
title: "Algebra 4"
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska15 status-toReview


START
FIT-Card

Definice: $h(x)$ je největší společný dělitel polynomů $f(x), g(x)$, jestliže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241221092619.png)

Pozor, největší společný dělitel $h(x)$ není jednoznačný, těch polynomů může být více.

END

---


START
FIT-Card

Věta: Bézoutova rovnost pro polynomy

Back:

![](../../Assets/Pasted%20image%2020241221092333.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241221092340.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak najdu Bezoutovy koeficiety u $\gcd(f(x), g(x))$?

Back:

Pustím na to rozšířený Eukleidův algoritmus.

END

---


START
FIT-Card

Věta: Polynomial factor theorem

Back:

![](../../Assets/Pasted%20image%2020241221092400.png)

<!-- ExplanationStart -->
Kořen = když to dosadím, tak se polynom bude rovnat nule.
![](../../Assets/Pasted%20image%2020241221093714.png)
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Definice: **Ireducibilní polynom**

$P(x)$ je **ireducibilní** nad okruhem $K$, jesltiže $\dots$

Back:

![](../../Assets/Pasted%20image%2020241221092421.png)

<!-- ExplanationStart -->
Neboli jeden z těch polynomů je (nenulová) multiplikativní konstanta.
<!-- ExplanationEnd -->

<!-- ExampleStart -->
$x^2-10$ nad $\mathbb{Q}$ - nevyrobím dva polynomy tak, aby to byl součin dvou polynomů, kde ty koeficienty jsou z $\mathbb{Q}$.

Např. nad $\mathbb{R}$ není ireducibilní.
<!-- ExampleEnd -->


END

---


START
FIT-Card

Věta: Ireducibilní polynomy - co o nich víme

(pozn. tomuhle jsme se na přednášce moc nevěnovali, Starosta působil jako že to není tak důležitý, i když to explicitně neřekl)

Back:

![](../../Assets/Pasted%20image%2020241221092443.png)
![](../../Assets/Pasted%20image%2020241221094415.png)


END

---

### Konečná tělesa

START
FIT-Card

Definice: **konečné těleso**

Back:

![](../../Assets/Pasted%20image%2020241221092501.png)

<!-- ExampleStart -->
$\mathbb{Z}_p$ kde $p$ je prvočíslo je např. konečné těleso, se kterým nejvíce pracujeme.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241221092510.png)
![](../../Assets/Pasted%20image%2020241221092516.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Když máme $\mathbb{Z}_n$, kde $n$ není prvočíslo, může to být tělesem?

Back:

Ne! Jakmile $n$ není prvočíslo, potom $\mathbb{Z}_n$ nemůže být těleso.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241221095323.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Algoritmus: Jak se dá sestavit konečné těleso neprvočíselného řádu?

Back:

![](../../Assets/Pasted%20image%2020241221095458.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020241221101100.png)
<!-- ExerciseEnd -->


END

---


START
FIT-Card

Jak zistím, jeslti existuje inverzní prvek vůči násobení pro $h(x)$?

Back:

$P(x)$ je ireducibilní nad $T$ stupně $n$

Hledám $h(x)^{-1}, h(x) \in F$

1. Pomocí REA nad $T[x]$ spočtu $\gcd(h(x), P(x)) = u(x)\cdot h(x) + v(x) \cdot P(x)$
2. "Zmodulím to polynomem $P(x)$"
3. $\gcd(h(x), P(x)) \mod P(x) = (u(x)\cdot h(x) + v(x) \cdot P(x)) \mod P(x)$, obě strany jsou $\in F$, tedy náleží zbytkům po dělení tím číslem, kterým jsem modulil
4. v $F$:
	- $\gcd(h(x), P(x)) = u(x) \cdot h(x)$
	- Vím, že $\gcd$ bude polynom stupně $1$ (ty polynomy $h$ a $P$ jsou nesoudělné).
	- Tedy vlevo v rovnici bude nenulové číslo
	- Pak mi vyjde:
		- $h(x)^{-1}=(\gcd(h(x), P(x)))^{-1}\cdot u(x)$

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241221100849.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak mohu zjistit, že je polynom ireducibilní?

Back:

Najdu jeho kořen.


END

---


START
FIT-Card

Jak se sčítají polynomy?

Back:

![](../../Assets/Pasted%20image%2020241221101441.png)

END

---


START
FIT-Card

Jak se násobí polynomy?

Back:

![](../../Assets/Pasted%20image%2020241221101735.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241221101455.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Věta: Řádem konečného tělesa musí být $\dots$

Back:

![](../../Assets/Pasted%20image%2020241221102012.png)

END

---

START
FIT-Card

Důsledek: tělesa jakých řádů neexistují? (na tohle se ptají u zkoušky)

Back:

![](../../Assets/Pasted%20image%2020241221102416.png)

END

---


START
FIT-Card

Definice: Galoisovo těleso

Back:

![](../../Assets/Pasted%20image%2020241221102029.png)

END

---


START
FIT-Card

Jaký řád má aditivní a multiplikativní grupa tělesa $GF(p^n)$?

Back:

- Aditivní: $p^n$
- Multiplikativní: $p^{n}-1$

END

---


START
FIT-Card

Jaké neutrální prvky mají aditivní a multiplikativní grupa tělesa $GF(p^n)$?

Back:

- Aditivní: $0=00\dots 0 = 0^n$
- Multiplikativní: $00 \dots 1 = 0^{n-1}1$

END

---


START
FIT-Card

Jak se spočte inverze k prvku v aditivní a multiplikativní grupě tělesa $GF(p^n)$?

Back:

- Aditivní: inverze prvku $b_1b_2 \dots b_n$ je $(p-b_1)(p-b_2) \dots (p-b_n)$
- Multiplikativní: pomocí EEA v polynomiálním čase

END

---


START
FIT-Card

Je aditivní a multiplikativní grupa tělesa $GF(p_n)$ cyklická?

Back:

- Aditivní: pro $n>1$ není cyklická, platí $\forall v : (p+1) \times v = v$ resp. $p \times v = 0$
- Multiplikativní: je vždy cyklická

END

---

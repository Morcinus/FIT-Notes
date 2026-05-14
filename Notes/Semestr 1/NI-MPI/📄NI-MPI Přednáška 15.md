---
created: 2024-12-21T09:23:08
title: "Algebra 4"
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI prednaska15 status-toReview algebra4


<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: $h(x)$ je největší společný dělitel polynomů $f(x), g(x)$, jestliže $\dots$

Back:

![](../../../Assets/Pasted%20image%2020241221092619.png)

Pozor, největší společný dělitel $h(x)$ není jednoznačný, těch polynomů může být více.
<!--ID: 1735205749305-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: Bézoutova rovnost pro polynomy

Back:

![](../../../Assets/Pasted%20image%2020241221092333.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241221092340.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749307-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak najdu Bezoutovy koeficiety u $\gcd(f(x), g(x))$?

Back:

Pustím na to rozšířený Eukleidův algoritmus.

Tags: core
<!--ID: 1735205749310-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: Polynomial factor theorem (aneb prvek je kořen polynomu $\Leftrightarrow \dots$)

Back:

![](../../../Assets/Pasted%20image%2020241221092400.png)

<!-- ExplanationStart -->

Kořen = když to dosadím, tak se polynom bude rovnat nule.
![](../../../Assets/Pasted%20image%2020241221093714.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205749312-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Ireducibilní polynom**

$P(x)$ je **ireducibilní** nad okruhem $K$, jesltiže $\dots$

Back:

![](../../../Assets/Pasted%20image%2020241221092421.png)

<!-- ExplanationStart -->

Neboli jeden z těch polynomů je (nenulová) multiplikativní konstanta.

<!-- ExplanationEnd -->

<!-- ExampleStart -->

$x^2-10$ nad $\mathbb{Q}$ - nevyrobím dva polynomy tak, aby to byl součin dvou polynomů, kde ty koeficienty jsou z $\mathbb{Q}$.

Např. nad $\mathbb{R}$ není ireducibilní.

<!-- ExampleEnd -->

Tags: core
<!--ID: 1735205749315-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: Ireducibilní polynomy - co o nich víme

(pozn. tomuhle jsme se na přednášce moc nevěnovali, Starosta působil jako že to není tak důležitý, i když to explicitně neřekl)

Back:

![](../../../Assets/Pasted%20image%2020241221092443.png)
![](../../../Assets/Pasted%20image%2020241221094415.png)
<!--ID: 1735205749317-->

END

---

### Konečná tělesa

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **konečné těleso**

Back:

![](../../../Assets/Pasted%20image%2020241221092501.png)

<!-- ExampleStart -->

$\mathbb{Z}_p$ kde $p$ je prvočíslo je např. konečné těleso, se kterým nejvíce pracujeme.

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241221092510.png)
![](../../../Assets/Pasted%20image%2020241221092516.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749320-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Když máme $\mathbb{Z}_n$, kde $n$ není prvočíslo, může to být tělesem?

Back:

Ne! Jakmile $n$ není prvočíslo, potom $\mathbb{Z}_n$ nemůže být těleso.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241221095323.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749322-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Algoritmus: Jak se dá sestavit konečné těleso neprvočíselného řádu?

Back:

![](../../../Assets/Pasted%20image%2020241221095458.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020241221101100.png)

<!-- ExerciseEnd -->
<!--ID: 1735205749325-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Postup: Jak najdu inverzní prvek vůči násobení pro polynom $h(x)$ modulo $P(x)$?

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

![](../../../Assets/Pasted%20image%2020241221100849.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749327-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak mohu zjistit, že je polynom ireducibilní?

Back:

Zkusím najít jeho kořen. Pokud ho najdu, tak není ireducibilní.

<!-- ExplanationStart -->

Pokud najdu jeho kořen, znamená to, že lze ten polynom rozložit na dva polynomy nenulového stupně, kvůli čemuž z definice původní polynom není ireducibilní.

![](../../../Assets/Pasted%20image%2020241221092421.png)

<!-- ExplanationEnd -->

Tags: core
<!--ID: 1735205749330-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se sčítají polynomy?

Back:

Jenom stačí posčítat ty jednotlivé koeficienty $a_i$ a $b_i$.

![](../../../Assets/Pasted%20image%2020241221101441.png)

Tags: core
<!--ID: 1735205749332-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Okruhy polynomů, ireducibilní polynom
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se **násobí polynomy** mod $P(x)$?

Např.
$R(x)=x^3+x^2+1$
$S(x)=x^2+x$

Ireducibilní polynom $P(x)=x^4+x+1$

Back:

1. Vynásobíme polynomy ($1101$ a $0110$), vyjde nám $x^5+x^3+x^2+x$
2. Zmodulíme výsledek polynomem $P(x)$
   1. Položíme $P(x) = 0$ (protože když bych to modulil $P(x)$, tak to bude $0$) a vyjádříme nejvyšší mocninu (zde $x^4=-x^2-1$)
   2. Tu rovnici pak mohu násobit $x$ a tím získávat vyjádření polynomů o vyšších mocninách (např. $x^5=-x^2-x$)
   3. To jsem pak budu dosazovat do výsledku, dokud nedostanu polynom, co je v tom daném tělese $T$

![](../../../Assets/Pasted%20image%2020241227135810.png)
![](../../../Assets/Pasted%20image%2020241221101735.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241221101455.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749335-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Věta: Jaký řád musí mít konečné těleso?

Back:

$p^n$, kde $p$ je prvočíslo a $n$ je kladné celé číslo.

![](../../../Assets/Pasted%20image%2020241221102012.png)
<!--ID: 1735205749337-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Důsledek: tělesa jakých řádů neexistují? (na tohle se ptají u zkoušky)

Back:

![](../../../Assets/Pasted%20image%2020241221102416.png)
<!--ID: 1735205749340-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: Galoisovo těleso, charakteristika tělesa

Back:

![](../../../Assets/Pasted%20image%2020241221102029.png)

Tags: core
<!--ID: 1735205749342-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký řád má aditivní a multiplikativní grupa konečného tělesa ($GF(p^n)$)?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: $p^n$
- Multiplikativní: $p^{n}-1$ (nebude tam nula)

Tags: core
<!--ID: 1735205749345-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké neutrální prvky mají aditivní a multiplikativní grupa tělesa $GF(p^n)$?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: $0=00\dots 0 = 0^n$
  - Např. $000$
- Multiplikativní: $00 \dots 1 = 0^{n-1}1$
  - Např. $001$

Tags: core
<!--ID: 1735205749347-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak se spočte inverze k prvku v aditivní a multiplikativní grupě tělesa $GF(p^n)$?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: inverze prvku $b_1b_2 \dots b_n$ je $(p-b_1)(p-b_2) \dots (p-b_n)$
  - Např v $(\mathbb{Z}_3^+)^3 : 333-101 = 232$
- Multiplikativní: pomocí REA v polynomiálním čase

Tags: core
<!--ID: 1735205749350-->

END

---

<!--
Exam Note ID: NI-SPOL-02
Exam Note Section Name: Konečná tělesa
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Je aditivní a multiplikativní grupa tělesa $GF(p_n)$ cyklická?

(tohle bylo třeba u zkoušky!)

Back:

- Aditivní: **pro $n>1$ není cyklická**, platí $\forall v : (p+1) \times v = v$ resp. $p \times v = 0$
- Multiplikativní: **je vždy cyklická**

Tags: core
<!--ID: 1735205749352-->

END

---

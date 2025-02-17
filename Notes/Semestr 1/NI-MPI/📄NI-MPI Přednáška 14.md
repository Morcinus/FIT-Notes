---
created: 2024-11-29T14:08:05
title: Algebra 3
up:
  - "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska14 status-toReview


START
FIT-Card

Jaké jsou základní vlastnosti homomorfismu? (3)

Back:

- Neutrální prvek jedné grupy se homomorfismem zobrazí vždy na neutrální prvek té druhé grupy.
- Také inverze se zachovávají: $h(x^{-1}) = h(x)^{-1}$
- Je-li $h$ homomorfismus grupy $G$ do $H$, pak $h(G)$ je podgrupa v $H$.

<!-- ExampleStart -->
![](../../../Assets/Pasted%20image%2020241129143604.png)
<!-- ExampleEnd -->

Tags: algebra3 core
<!--ID: 1735205749248-->
END

---


START
FIT-Card

Věta: cyklické grupy a izomorfismus

Back:

![](../../../Assets/Pasted%20image%2020241129143626.png)

<!-- ProofStart -->
![](../../../Assets/Pasted%20image%2020241129143635.png)
<!-- ProofEnd -->

Tags: algebra3 core
<!--ID: 1735205749250-->
END

---


START
FIT-Card

Věta: existence neizomorfních grup řádu 4

Back:

![](../../../Assets/Pasted%20image%2020241129143723.png)

Tags: algebra3
<!--ID: 1735205749252-->
END

---


START
FIT-Card

Věta: Cayleyova

Back:

![](../../../Assets/Pasted%20image%2020241129144237.png)

<!-- ProofStart -->
![](../../../Assets/Pasted%20image%2020241129144244.png)
<!-- ProofEnd -->

Tags: algebra3
<!--ID: 1735205749255-->
END

---


START
FIT-Card

Definice: problém diskrétního logaritmu v grupě $G=(M, \cdot)$

(tohle asi nutně nemusíme umět přesně nazpaměť, bylo to v příkladech jak se využívají teorie grup v kryptografii)

Back:

![](../../../Assets/Pasted%20image%2020241129144326.png)

Tags: algebra3
<!--ID: 1735205749257-->
END

---

START
FIT-Card

Definice: problém diskrétního logaritmu v grupě $G=(M, +)$

(tohle asi nutně nemusíme umět přesně nazpaměť, bylo to v příkladech jak se využívají teorie grup v kryptografii)

Back:

![](../../../Assets/Pasted%20image%2020241129144331.png)

Tags: algebra3
<!--ID: 1735205749260-->
END

---
## Algebra 4

### Množiny se dvěmi binárními operacemi

#### Okruh


START
FIT-Card

Definice: Okruh

Back:

![](../../../Assets/Pasted%20image%2020241129150534.png)

Tags: algebra4 core
<!--ID: 1735205749262-->
END

---


START
FIT-Card

Názvosloví: komutativní okruh

Back:

Buď $R = (M, +, \cdot)$ okruh.

Je-li $\cdot$ komutativní, je $R$ **komutativní okruh**.

Tags: algebra4
<!--ID: 1735205749265-->
END

---


START
FIT-Card

Názvosloví: aditivní grupa okruhu $R$

Back:

Buď $R = (M, +, \cdot)$ okruh.

$(M, +)$ se nazývá **aditivní grupa** okruhu $R$ 

Tags: algebra4
<!--ID: 1735205749268-->
END

---

START
FIT-Card

Názvosloví: multiplikativní monoid okruhu $R$

Back:

Buď $R = (M, +, \cdot)$ okruh.

$(M, \cdot)$ se nazývá **multiplikativní monoid** okruhu $R$ 

Tags: algebra4
<!--ID: 1735205749270-->
END

---


START
FIT-Card

Názvosloví: neutrální prvek grupy $(M,+)$ v okruhu $R$

Back:

Neutrální prvek grupy $(M, +)$ se nazývá **nulový prvek**

Tags: algebra4
<!--ID: 1735205749273-->
END

---

START
FIT-Card

Názvosloví: neutrální prvek $(M,\cdot)$ v okruhu $R$

Back:

Neutrální prvek multiplikativního monoidu $(M, \cdot)$ se nazývá **jednička** a značí se $1$

Tags: algebra4
<!--ID: 1735205749275-->
END

---


START
FIT-Card

Definice: **Obor integrity**

Back:

![](../../../Assets/Pasted%20image%2020241129151040.png)

<!-- ExampleStart -->
**Co je obor integrity:**
$\mathbb{R}, \mathbb{Q}, \mathbb{C}, \mathbb{Z}$ jsou obory integrity, protože neexistují nenuloví dělitelé nuly, tj. pokud $a \cdot b = 0$, pak $a=0$ nebo $b=0$.

**Co není obor integrity**:
Maticový okruh $M_{2}(\mathbb{R})$ (2x2 maticed nad $\mathbb{R}$)
$$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad B=\begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix}$$
$$A \cdot B = 0, \quad  A \neq 0, \quad B \neq 0 $$

Tags: algebra4 core
<!--ID: 1735205749277-->
END

---


START
FIT-Card

Definice: **těleso**

Back:

![](../../../Assets/Pasted%20image%2020241129151056.png)

Tags: algebra4 core
<!--ID: 1735205749280-->
END

---


START
FIT-Card

Věta: Pokud pro $a,b$ z tělesa $T$ platí $ab =0$, potom $\dots$

Back:

![](../../../Assets/Pasted%20image%2020241221091852.png)

<!-- ProofStart -->
![](../../../Assets/Pasted%20image%2020241221091859.png)
<!-- ProofEnd -->

Tags: algebra4 core
<!--ID: 1735205749282-->
END

---


START
FIT-Card

Definice: **Homomorfismus okruhů**

Back:

![](../../../Assets/Pasted%20image%2020241221092010.png)

Tags: algebra4 core
<!--ID: 1735205749285-->
END

---


START
FIT-Card

Definice: **Homomorfismus těles**

Back:

![](../../../Assets/Pasted%20image%2020241221092014.png)

Tags: algebra4 core
<!--ID: 1735205749287-->
END

---


START
FIT-Card

Definice: **Izomorfismus okruhů/těles**

Back:

**Homomorfismus**, který je **bijekcí** se nazývá izomorfismus okruhů (resp. těles)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020241221092040.png)
<!-- DetailInfoEnd -->

Tags: algebra4
<!--ID: 1735205749290-->
END

---


START
FIT-Card

Definice: **izomorfní tělesa**

Back:

![](../../../Assets/Pasted%20image%2020241221092117.png)

Tags: algebra4
<!--ID: 1735205749292-->
END

---


START
FIT-Card

Definice: Polynom nad okruhem

Back:

![](../../../Assets/Pasted%20image%2020241221092135.png)

<!-- InformallySaidStart -->
Stejně jako v $\mathbb{R}$ máme polynomy, tak tohle je to samé, ale s prvky nějakého obecného okruhu.
<!-- InformallySaidEnd -->

Tags: algebra4
<!--ID: 1735205749294-->
END

---


START
FIT-Card

Věta: **Okruh polynomů**

Back:

![](../../../Assets/Pasted%20image%2020241221092158.png)

Tags: algebra4
<!--ID: 1735205749297-->
END

---

START
FIT-Card

Lemma: **o násobení polynomů** (aneb jaký stupeň mají polynomy po násobení)

Back:

![](../../../Assets/Pasted%20image%2020241221092231.png)

Tags: algebra4 core
<!--ID: 1735205749300-->
END

---


START
FIT-Card

Lemma: **o dělení polynomů**

Back:

![](../../../Assets/Pasted%20image%2020241221092247.png)

Tags: algebra4
<!--ID: 1735205749302-->
END

---


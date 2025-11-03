---
created: 2024-11-19T14:31:24
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceniCvičení 09 status-toReview


### Cvičení 16.9

![](../../../Assets/Pasted%20image%2020241119143213.png)

#### a)

<!-- Latex Equation -->

$$
\begin{align*}
& \text{a)} \\
& (\mathbb{Q}, \circ)  \quad a \circ b = a^{b} \\
& \text{\small{1. uzavřenost }}  \\
& a \circ b \in M \\
& a,b \in \mathbb{Q}  \\
& ?  \quad a^{b} \in \mathbb{Q}  \\
& \text{\small{Protipříklad:}}  \\
& a=2 \quad b=\tfrac{1}{2} \\
& a^{b} = 2^{\tfrac{1}{2}} = \sqrt{2} \notin \mathbb{Q} \\
& \\
& \text{b)} \\
& \text{\small{1. uzavřenost}}  \\
& a,b \in  \mathbb{N} \setminus  \set{0}  \\
& a^{b} \in \mathbb{N} \setminus   \set{0}  \\
& a^{b} \in \mathbb{N}  \\
& \text{\small{Grupoid}}  \\
& \text{\small{asociativnost}}  \\
& a,b,c \in \mathbb{M}  \\
& a \circ \left(b \circ  c \right) = \left(a \circ  b \right) \circ  c \\
& a = 2 \quad b=3 \quad c=4 \\
& 2^{3^{4}} = 2^{3^{4}} \\
& 2^{81} \neq 2^{12}  \\
& \Rightarrow \text{\small{asociativnost neplatí, není pologrupa  }}
& \text{c)} \\
& \left(\set{-1,1} , \circ \right)  \\
& a = -1  \quad b = 1 \\
& a^{a} = -1^{-1} = a \\
& a^{b} = -1^{1} = a \\
& b^{a} = 1^{-1} = b \\
& b^{b} = 1^{1} = b  \\
& \text{\small{1. uzavřenost platí}} \Rightarrow \text{\small{grupoid}}  \\
& \text{\small{2. asociativnost}} \\
& a \circ (b \circ c) = (a \circ b) \circ c \\
& \Rightarrow \text{\small{rozhoduje a, pologrupa}}  \\
& \text{\small{3. monoid}}  \\
& e \circ c = c \circ e = c \\
& e=1 \\
& 1^{-1} \neq -1^{1} \\
& e = -1 \\
& -1^{1} \neq  1^{-1}  \\
& \text{\small{Ani jeden prvek není neutrální}} \Rightarrow \text{\small{není monoid}}
\end{align*}
$$

### Cvičení 16.9d

<!-- Latex Equation -->

$$
\begin{align*}
& (\mathbb{R,\circ } ) \\
& a \circ b=a+b+1 \\
& \text{\small{1. uzavřenost platí}}  \\
& \text{\small{2. asociativnost}}  \\
& a \circ (b\circ c) = a \circ (b+c+1) = a+b+c+2=(a+b+1) \circ c = (a \circ b) \circ c \\
& \Rightarrow \text{\small{platí asociativnost}}  \\
& \text{\small{3.}}  \\
& e=-1 \quad (e \circ a ) = -1 +a +1 = a \\
& \Rightarrow \text{\small{Je monoid}}  \\
& \text{\small{4.}}  \\
& \forall a \exists a ^{-1} \in \mathbb{M}  \\
& a^{-1} = -a-2 \quad (-a-2) \circ a = -a +a -1=-1=e \\ \\
& \Rightarrow \text{\small{Je grupa}}  \\
& \circ \text{\small{ je komutativní - jedná se o abelovskou grupu}}
\end{align*}
$$

### Cvičení 16.9e

<!-- Latex Equation -->

$$
\begin{align*}
& \text{\small{1. uzavřenost}}  \\
& a \circ b = a+b+ab \quad \text{\small{Uzavřenost platí}} \\
& \text{\small{2. asociativnost}}  \\
& a \circ  (b \circ  c) = a \circ (b+c+bc) = a+b+c+bc+ab+ac+abc \\
& (a \circ b) \circ c = (a+b+ab) \circ c = a+b+c+bc+ab+ac+abc \\
& \Rightarrow \text{\small{Asociativnost platí, je pologrupa}}  \\
& \text{\small{3. monoid}}  \\
& e=0 \\
& e \circ a = 0 + a + 0 \cdot a = a \\
& \Rightarrow \text{\small{Je monoid}}  \\
& \text{\small{4. Inverze}} \\
& \text{\small{Inverzní prvek neexistuje}}  \\
& a +b+ab=0 \\
& a+b(1+a)=0 \\
& b = -\tfrac{a}{1+a} \Rightarrow a \neq -1 \\
& a=-1 \ \text{\small{nemá inverzi}} \\
& \Rightarrow \text{\small{nejedná se o grupu}}
\end{align*}
$$

### Cvičení 16.9f

<!-- Latex Equation -->

$$
\begin{align*}
& \text{\small{1. uzavřenost platí}}  \\
& \text{\small{2. asociativnost}} \\
& \text{\small{Protínají se v těžišti, není asociativní}}
\end{align*}
$$

### Cvičení 16.14i

![](../../../Assets/Pasted%20image%2020241119151220.png)

<!-- Latex Equation -->

$$
\begin{align*}
& M = \set{a + b + \sqrt{2} \ | a,b \in \mathbb{Q}} \\
& \text{\small{(i)}} \ (M,+) \ \text{\small{je grupa?}} \\
& m = a+b\sqrt{2}  \quad m+n \in M \\
& n=c+d\sqrt{2} \quad a+b\sqrt{2} +c+d\sqrt{2} = (a+c)+(b+d) \in M \\
& a,b,c,d \in \mathbb{Q}  \\
& \text{\small{2. asociativita}} \\
& u = f+h \sqrt{2}  \\
& m \circ (n \circ u) = (m \circ n) \circ u  \\
& = (a+c + f) + (b+d+h)\sqrt{2} = (m \circ n) \circ u \\
& \Rightarrow \text{\small{Asociativita platí}} \\
& \text{\small{3.}}  \\
& e = 0 = 0 +0\sqrt{2} \\
& \Rightarrow \text{\small{Je to monoid}} \\
& \text{\small{4.}}  \\
& m^{-1} = -a-b\sqrt{2}  \\
& \Rightarrow (M,+) \ \text{\small{tvoří abelovskou grupu}}
\end{align*}
$$

### Cvičení 16.14ii

<!-- Latex Equation -->

$$
\begin{align*}
& (M, \cdot ) \ \text{\small{je grupa?}} \\
& 1 \cdot m \cdot n = (a + b\sqrt{2} )(c+d\sqrt{2} ) \\
& = ac+(ad+bc)\sqrt{2}+2bd =(ac+2bd)+(ad+bc)\sqrt{2} \in M \\
& \text{\small{2. asociativnost}} \\
& (m \cdot n) \cdot u = (ac + 2bd)f + f (ad+bc)\sqrt{2} + (ac+2bd)h\sqrt{2}+2h(ad+bc)  \\
& = acf + 2bdf + 2🐍 + 2hbc+(adf+bcf+ach+2bda)\sqrt{2}  \\
&  \\
& m \cdot (n \cdot u)  \\
& = m \cdot \left[(cf+2dh)+(ch+df)\sqrt{2}  \right] \\
& = acf + 2bdf + 2🐍 + 2hbc+(adf+bcf+ach+2bda)\sqrt{2} \\
& \Rightarrow \text{\small{asociativnost jednodušeji z násobení v R}} \\
& \text{\small{3. monoid?}}  \\
& e=1=1+0\sqrt{2} \in M \\
& \Rightarrow \text{\small{Ano je to monoid}}  \\
& \text{\small{4.}}  \\
& m = a+b\sqrt{2}  \quad m^{-1} \tfrac{1}{a+b\sqrt{2}}\cdot \tfrac{a-b\sqrt{2}}{a-b\sqrt{2} }=\tfrac{a}{a^2 -2b^2}\sqrt{2}  \\
& \text{\small{Tady je problém když }} a^2 = \pm \sqrt{2}b \\
& \Rightarrow m = 0 + 0 \sqrt{2} \ \text{\small{nemá inverzi}}  \\
& (M \setminus \set{0}, \cdot ) \  \text{\small{je grupa}} \\
\end{align*}
$$

### Cvičení 16.15

<!-- Latex Equation -->

|     | a   | b   | c   | d   |
| --- | --- | --- | --- | --- |
| a   | a   | b   | c   | d   |
| b   | b   | a   | d   | c   |
| c   | c   | d   | a   | b   |
| d   | d   | c   | b   | a   |

<!-- Latex Equation -->

$$
\begin{align*}
& \text{\small{1. syntetická podle diagonály}}  \\
& \circ \text{\small{je komutativní}}  \\
& a \ \text{\small{je neutrální prvek}}  \\
& b,c,d \text{\small{jsou inverzní sami k sobě }} \\
& m ^{-1} =m  \\
& b \circ (c \circ d) = (b \circ c) \circ d \\
& \text{\small{Jedná se o Cayleyovu tabulku abelovské grupy}}
\end{align*}
$$

### Cvičení 16.16

<!-- Latex Equation -->

$$
\begin{align*}
& (M, \circ )  \\
& \set{e}  \quad e \circ e = e \quad \text{\small{řád 1 - platí komutativnost}} \\
& \set{e,a}  \quad a^{-1} =a \quad a \circ a =e \quad \text{\small{řád 2 - platí komutativnost}}  \\
& \set{e,a,a^{-1}}  \quad a^{-1} \circ a=a\circ a^{-1} =e \\
& \set{e,a,b}  \quad a \circ b = b \circ a  \quad  / a \circ  \\
&  \quad  \quad b =a \circ (b \circ a) \\
& \set{e,a,b} \text{\small{ nelze sestavit - viz tabulka dole }}
\end{align*}
$$

| $\circ$ | e   | a   | b   |
| ------- | --- | --- | --- |
| e       | e   | a   | b   |
| a       | a   | e   | ??? |
| b       | b   | ??? | e   |

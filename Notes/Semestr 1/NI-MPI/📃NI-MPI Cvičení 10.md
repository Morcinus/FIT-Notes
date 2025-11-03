---
created: 2024-11-26T14:33:42
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceni10 status-toReview


### Cvičení 17.2

<!-- Latex Equation -->

$$
\begin{align*}
& \left(Q \setminus \set{0} , \cdot  \right) \\
& N = \set{2k, k \in  \mathbb{Z} , k \neq 0} \\
& \text{\small{1)}}  \\
& N \subset M \\
& \text{\small Je grupa?} (N,\cdot ) \\
& 1 \notin N \Rightarrow \text{\small{Nejedná se o podgrupu}} \\
\end{align*}
$$

### Cvičení 17.2b

<!-- Latex Equation -->

$$
\begin{align*}
& N = \set{2k+1, k \in \mathbb{Z}} \\
& \text{\small{1) }} N \subset M \\
& \text{\small{2) }} (N,\cdot ) \\
& \text{\small{Chybí in verze vzhledem k násobení, není podgrupa}}
\end{align*}
$$

### Cvičení 17.2c

<!-- Latex Equation -->

$$
\begin{align*}
& N = \set{2^k, n \in \mathbb{Z}} \\
& \text{\small{1) }} N \subset M \\
& \text{\small{2) }} (N, \cdot ) \\
& \text{\small{a) }} a,b \in N, a \cdot  b = 2^{m} \cdot 2^{m} = 2^{m+n} \in N \\
& \text{\small{b) asoc.}}  \\
& \text{\small{c) }} 1 = 2^{0} \in N \\
& \text{\small{d) }} a=2^{m}  \quad q^{-1} = 2^{-m} \in N \\
& a^{-1} \cdot a = 2^{-m} \cdot 2^{m} =2^{0} =1=e \\
& \text{\small{e) komutativní}}  \\
& \Rightarrow (N,\cdot ) \text{\small{ je podgrupou}}
\end{align*}
$$

### Cvičení 17.2d

<!-- Latex Equation -->

$$
\begin{align*}
& N=\set{2^{n}\cdot 3^{m} ; n,m \in \mathbb{Z}  }  \\
& \text{\small{1) }} N \subset M \\
& \text{\small{2) }}  \\
& \text{\small{a) }}  \\
& a = 2^{n}3^{m}   \\
& b = 2^{k} 3^{l} \\
& a \circ b = 2^{n}3^{m}2^{k} 3^{l}=2^{n+k}3^{m+l} \in N \\
& \text{\small{b) asociativnost platí}}  \\
& \text{\small{c) }} 1 = 2^{0}3^{0} \in N \\
& \text{\small{d) }} a^{-1}=2^{-n}3^{-m}   \\
& \Rightarrow (N, \cdot ) \text{\small{ je podgrupou}}
\end{align*}
$$

### Cvičení 17.2e

<!-- Latex Equation -->

$$
\begin{align*}
& N = \set{\tfrac{1+2n}{1+2m} : n,m \in \mathbb{Z} }  \\
& \text{\small{1) }} N \subset M \\
& \text{\small{2) }}  \\
& \dots \\
& \Rightarrow \text{\small{Je podgrupa}}
\end{align*}
$$

### Cvičení 17.3

|     | a   | b   | c   | d   |
| --- | --- | --- | --- | --- |
| a   | a   | b   | c   | d   |
| b   | b   | a   | d   | c   |
| c   | c   | d   | a   | b   |
| d   | d   | c   | b   | a   |

<!-- Latex Equation -->

$$
\begin{align*}
& \\
& \text{Triviální podgrupy} \\
& \text{\small{řád 4: }} \set{a,b,c,d} \checkmark  \\
& \text{\small{řád 1: }} \set{a} \checkmark  \\
& \\
& \text{Další podgrupy} \\
& \text{\small{řád 2: }} \set{a, ?}  \\
& \set{a,b} \checkmark \\
& \set{a,c} \checkmark \\
& \set{a,d} \checkmark \\
& \text{\small{řád 3: }} \set{a, ?, ?}  \\
& \text{\small{Žádnou podgrupu nenajdem}} \\
\end{align*}
$$

### Cvičení 17.4

<!-- Latex Equation -->

$$
\begin{align*}
& G = \set{a+b\sqrt{2} ; a,b \in \mathbb{Q} , q \neq 0 \lor b \neq 0}  \\
& \text{\small{Je }} (G,\cdot ) \text{\small{ podgrupou }} (R \setminus \set{0} ; \cdot ) \text{\small{ ?}}  \\
& \text{\small{1) }} N \subset M \\
& \text{\small{2) Vlastnosti grupy:}} \\
& \text{\small{a) uzavřenost}}  \\
& m = a+b\sqrt{2}  \\
& n=c+d\sqrt{2}  \\
& m\cdot n = (a+b\sqrt{2})(c+d\sqrt{2}) = \\
& = (ac+2bd)+(bc+ad)\sqrt{2} \in \mathbb{Q}  \\
& \text{\small{Pozor, musíme ověřit abych nedostal }} 0  \\
& \text{\small{Víme z definice G že to jsou nenulová čísla a násobením nenulových reálných čísel nemohu dostat nulu}}  \\
& \text{\small{b) asociativita }} \checkmark \\
& \text{\small{c) neutrální prvek }}  \\
& 1=1+0\sqrt{2} \\
& \text{\small{d) inverze}}  \\
& m^{-1} = \tfrac{1}{a+b\sqrt{2} } \cdot \tfrac{a-b\sqrt{2} }{a-b\sqrt{2}} = \tfrac{a}{a^2 -2b^2 } -\tfrac{b}{a^2 -2b^2 } \sqrt{2}  \in \mathbb{G} \\
& \Rightarrow (G, \cdot ) \text{\small{ je podgrupou }} (R \setminus \set{0} ; \cdot )
& \text{\small{e) uzavřenost}} \\
\end{align*}
$$

### Cvičení 17.5

<!-- Latex Equation -->

$$
\begin{align*}
& (M, \circ ) \\
& G = \set{q \in M : a \text{\small{ je invertibilní}} } \\
& \text{\small{Je }} (G, \circ ) \text{\small{ grupa?}}  \\
& a \in G \land b \in G \xrightarrow{?} a \circ b \in G \\
& \\
& \text{\small{kandidát }} b^{-1} \circ a^{-1} \\
& (b^{-1} \circ a^{-1})\circ (a \circ b) =  \\
& = b^{-1} \circ (a^{-1}\circ a ) \circ b = \\
& =b^{-1} \circ  e \circ  b= b^{-1} \circ b \circ e \\
& (a \circ b) \circ (b^{-1} \circ a^{-1}) = a \circ a^{-1} =e \\
& \text{\small{oba prvky }} (a \circ b), (b^{-1} \circ a^{-1}) \text{\small{ leží v G }}  \\
& \\
& \text{Ověření vlastností grupy} \\
& \text{\small{a) uzavřenost }} \checkmark \\
& \text{\small{b) asociativita }} \checkmark \\
& \text{\small{a) neutrální prvek }} \checkmark \\
& \text{\small{a) inverzní prvek }} \checkmark  \\
& \Rightarrow (G,\circ ) \text{\small{ je grupa.}} \\
\end{align*}
$$

### Cvičení 18.1

![](../../../Assets/Pasted%20image%2020241126153003.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \mathbb{Z}_{15}^{+} = (M,+_{15}) \\
& M = \set{0,1,2,\dots 14}  \\
& \text{Generátory:} \\
& g=1 \checkmark \#<g> =\# \mathbb{Z}_{15}^{+} = 15 \\
& g = 14 \checkmark \\
& \text{\small{Dle Lagrangeovy věty řád podgrupy musí být dělitel řádu celé grupy. }}  \\
& \text{\small{Mohou existovat jen podgrupy řádů:}} \\
& 1,3,5,15 \\
& \text{\small{řád 3: }} \set{0,5,10} \\
& \text{\small{řád 5: }} \set{0,3,6,9,12}  \\
& \text{\small{Generátory jsou:}}  \\
& 1,2,4,7,8,11,13,14 \\ \\
& \text{\small{Ověření kolik jich má být:}}  \\
& \varphi(15) = \varphi(5) \varphi(3) = (5^1 -5^{0})(3^{1}-3^{0})=4\cdot 2=8 \\
& \\
& \text{Inverzní prvky:} \\
& a^{-1}=15-a\\
\end{align*}
$$

### Cvičení 18.2

![](../../../Assets/Pasted%20image%2020241126153024.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \text{\small{řády }} 3, 5, 7 \\
& 3\cdot 5\cdot 7 = 105 \\
& \mathbb{Z}_{105}^{+} \\
& \text{\small{podgrupa řádu 3: }} \set{0,35,70}  \\
& \text{\small{podgrupa řádu 5: }} \set{0,21,42,63,84}  \\
& \text{\small{podgrupa řádu 7: }} \set{0,15,30,45,60,75,90}  \\
\end{align*}
$$

### Cvičení 18.3a

<!-- Latex Equation -->

$$
\begin{align*}
& \left(\mathbb{Z,+}  \right)  \quad  \text{\small{množina }} \set{2}  \\
& \\
& \text{Řešení} \\
& (M, +) \quad M=\set{2k, k \in \mathbb{Z}}
\end{align*}
$$

### Cvičení 18.3b

<!-- Latex Equation -->

$$
\begin{align*}
& \left(\mathbb{Z,+}  \right)  \quad  \text{\small{množina }} \set{2,3}  \\
& \\
& \text{Řešení} \\
& 2^{-1} \circ 3^{1} =1 \quad \text{\small{je generátor }} \left(\mathbb{Z,+}  \right)\\
& M = \mathbb{Z}
\end{align*}
$$

### Cvičení 18.3c

<!-- Latex Equation -->

$$
\begin{align*}
& \left(\mathbb{Z,+}  \right)  \quad  \text{\small{množina }} \set{2,5}  \\
& \\
& \text{Řešení} \\
& 2^{-2} \circ 5^{1} =1 \quad \text{\small{je generátor }} \left(\mathbb{Z,+}  \right)\\
& M = \mathbb{Z}
\end{align*}
$$

### Cvičení 18.3d

<!-- Latex Equation -->

$$
\begin{align*}
& \left(\mathbb{Z,+}  \right)  \quad  \text{\small{množina }} \set{6,15}  \\
& \\
& \text{Řešení} \\
& \text{\small{nevyrobím }} 1 \text{\small{ ani }} -1 \\
& 6^{-2} \circ 15^{1} =3=\gcd{(6,15)} \\
& M = \set{3k, k \in \mathbb{Z}}
\end{align*}
$$

### Cvičení 18.3e

<!-- Latex Equation -->

$$
\begin{align*}
& \left(\mathbb{Z,+}  \right)  \quad  \text{\small{množina }} \set{n,m}, n \neq m  \\
& \\
& \text{Řešení} \\
& N=\set{a \cdot k, k \in \mathbb{Z}, a = \gcd{(n,m)}}  \\
\end{align*}
$$

### Cvičení 18.4

<!-- Latex Equation -->

$$
\begin{align*}
& \left(\mathbb{Z},+ \right)  \\
& N = \set{a\cdot k, a \in \mathbb{Z}, k \in \mathbb{Z}} \quad \text{\small{Řešení}} \\
&
\end{align*}
$$

### Cvičení 18.5

![](../../../Assets/Pasted%20image%2020241126154838.png)
![](../../../Assets/Pasted%20image%2020241126155651.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \mathbb{Z}_{11}^{\times} = (M, \times_{11} ) \\
& M = \set{1,2, 3,4,5,6,7,8,9,10}  \\
& \# \mathbb{Z}_{11}^{\times}=10 \\
& \\
& \text{Generátory} \\
& \text{\small{2 je generátor:}} \\
& 2^2 = 4 \\
& 2^3 = \\
& \dots \\
& \begin{rcases} 2^2 = 4 \\2^{5} = 2^{2} \cdot 2^{2} \cdot 2 = 4\cdot 4\cdot 2=10 \\ \end{rcases} \text{\small{ 2 je generátor}} \\
& \dots  \\
& 2^{10} = 1 \\
& \text{\small{možné řády podgrup: }} 2, 5 \\
& \text{\small{Chceme selektivně vybrat ty mocniny}} \\
& \text{\small{Hledáme čísla nesoudělná s 10: }} \\
& 1,3,7,9 \\
& \text{\small{Generátory:}}  \\
& 2^{1} = 2 \\
& 2^{3} = 8 \\
& 2^{7} = 7 \\
& 2^{9} = 6  \\
& \\
& \text{Inverzní prvky:} \\
& 1 \rightarrow 1 \\
& 2 \rightarrow 6 \\
& 3 \rightarrow 4 \\
& 4 \rightarrow 3 \\
& 5 \rightarrow 9 \\
& 6 \rightarrow 2 \\
& 7 \rightarrow 8 \\
& 8 \rightarrow 7 \\
& 9 \rightarrow 5 \\
& 10 \rightarrow 10 \\
\end{align*}
$$

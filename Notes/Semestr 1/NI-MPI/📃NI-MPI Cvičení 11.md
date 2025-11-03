---
created: 2024-12-10T14:32:55
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceni11 status-toReview


### Cvičení 20.1a

<!-- Latex Equation -->

$$
\begin{align*}
& a,b \in G  \quad \phi(a \circ_{G} b) = \phi(a) \circ_{H} \phi(b) \\
& \phi : G \rightarrow H \\
& f(n) = 3n+ 2 \\
& \phi:(\mathbb{Z}, + ) \rightarrow (\mathbb{R}, +) \\
& f(0) : = 2 \neq 0 \\
&  \\
& a = 0 \quad b = 0 \\
& \phi(a+b) = \phi (0+0)=\phi(0) = 2 \\
& \phi(0) + \phi(0) = 2+2=4 \\
& \Rightarrow \text{\small{Neplatí a není homomorfismus}} \\
\end{align*}
$$

### Cvičení 20.1b

<!-- Latex Equation -->

$$
\begin{align*}
& f(x) = 2^{x}  \\
& a=y \in  \mathbb{R}   \\
& b=z \in \mathbb{R}  \\
& f: (\mathbb{R},+ ) \rightarrow (\mathbb{R}^{+}, \cdot ) \\
& \begin{rcases} f(a+ b) =f(a) \cdot f(b) \\ f(y+ z) = 2^{y+ z} \\ f(g)\cdot f(z) = 2^{y}\cdot 2^{z}=2^{y+ z} \\ \end{rcases} \text{\small{Jedná se o homomorfismus}}   \\
&  \\
& \\
& \text{Je isomorfismus?} \\
& \text{\small{Musí být injektivní a surjektivní}} \\
& \begin{rcases} x \neq y \Rightarrow f(x) \neq f(y) \quad  \end{rcases}  \quad \text{\small{1. Injektivní zobrazení}} \\
& x \neq y \Rightarrow 2^{x} \neq 2^{y} \\
& 2^{x} = 2^{y} \Rightarrow x = y \\
& x = \log_{2}2^{x}  \quad y = log_{2}2^{x} \\
& \Rightarrow \text{\small{Je injektivní}} \\
&  \\
& \text{\small{2. Surjektivní}} \\
& \forall \in \mathbb{R}^{+} \exists x : 2^{x}= y  \\
& y \in R^{+}  \quad x = \log_{2}y \\
& \Rightarrow \text{\small{je bijektivní a tím pádem izomorfismus}} \\
&
\end{align*}
$$

### Cvičení 20.1c

<!-- Latex Equation -->

$$
\begin{align*}
& f:(\mathbb{R}^{n\times n}, +) \rightarrow(\mathbb{R},+) \\
& f(A)=a_{11} \\
& A,B \in \mathbb{R}^{n \times n}   \quad  f(A+ B) = f(A) + f(B)  \quad \checkmark \\
& \\
& \text{1. Injektivní} \\
& A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}  \quad B=\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}  \\
& f(A) = f(B) = 1 \\
& \Rightarrow \text{\small{NENÍ injektivní a není izomorfimus}} \\
&  \\
\end{align*}
$$

### Cvičení 22

<!-- Latex Equation -->

$$
\begin{align*}
& f : (\mathbb{R}_{reg}^{n \times n}, \cdot) \rightarrow (\mathbb{R}, \cdot) \\
& A,B \in \mathbb{R}_{reg}^{n \times n} \\
& \det (AB) = \det (A) \det (B) \\
& \phi (A) = \det A \\
&  \\
& \det A \neq 0 \\
& A \in \mathbb{R}_{reg} \\
& \alpha \in \mathbb{R} ,
A = \begin{pmatrix} \alpha_{1}  &  &  \\  & \dots   &  \\  &  &  \dots \end{pmatrix}  \\
& (\det A)^{k} \\
& f(A) = 0 \\
& A,B f(A \cdot B) = 0 \\
& f(A) \cdot f(b) = 0 \cdot  0 = 0  \\
& f(A) = 1 \\
& f(A \cdot B) = 1 \\
& f (A) \cdot f(B) = 1 \cdot 1 = 1 \\
\end{align*}
$$

### Cvičení 20.3

<!-- Latex Equation -->

$$
\begin{align*}
& \mathbb{Z}_{10}^{\times} = (M, \times_{10})  \quad M = \set{1,3,7,9} \\
& \mathbb{Z}_{5}^{\times} = (N, \times_{5} )    \quad N = \set{1,2,3,4} \\
& \phi(1) = 1 \\
\end{align*}
$$

> [!info]
> Neutrální prvek jedné grupy se musí zobrazit na neutrální prvek druhé grupy

<!-- Latex Equation -->

$$
\begin{align*}
& \varphi(4) = \varphi(2^{2}) = 4-2=2 \\
& \Rightarrow \text{\small{Obě grupy budou mít 2 generátory}} \\
&  \\
& \text{\small{Generátory:}} \\
& M - 3, 7 \\
& N - 2, 3 \\
&  \\
& g^{1} \ g^{2} \dots g^{\#M} \\
& \phi(g)=h: \\
& \phi(g^{2})=(\phi(g))^{2} \dots \phi(g^{\#M}) = (\phi(g))^{\#M} \\
&  \\
& \text{\small{Izomorfismus:}} \\
& \phi(1)=1 \\
& \phi(3)=2 \\
& \phi(9)=4 \\
& \phi(7)=3 \\
& \\
& \text{Je to jediná možnost? Ne. Můžeme to namapovat na druhý generátor.} \\
& \text{\small{Izomorfismus:}} \\
& \phi(1)=1 \\
& \phi(3)=3 \\
& \phi(9)=4 \\
& \phi(7)=2 \\
&
\end{align*}
$$

### Cvičení 20.5

<!-- Latex Equation -->

$$
\begin{align*}
& G = \mathbb{Z}_{5}^{+}  \quad M = \set{0,1,2,3,4} \quad \#G = 5  \\
& H = \mathbb{Z}_{13}^{\times} \quad  N = \set{1,2,3,4,5,6,7,8,9,10,11,12} \quad  \#H=12 \\
& \phi(0) = 1 \\
& \text{\small{ord}} (\phi(a)) \ | \ \text{\small{ord}}(a)   \\
& \gcd(5,12) = 1 \Rightarrow \text{\small{Jediný homomorfismus, který může fungovat:}} \\
& \phi(0) = 1 \\
& \phi(1) = 1 \\
& \phi(2) = 1\\
& \phi(3) = 1\\
& \phi(4) = 1 \\
& \forall a \in G:\text{\small{ord}} (\phi(a)) \ | \ \text{\small{ord}}(a) \\
& \text{\small{Podgrupa, kterou získáme v H musí mít řád 1.}} \\
\end{align*}
$$

### Cvičení 20.6

<!-- Latex Equation -->

$$
\begin{align*}
& \mathbb{Z}_{12}^{+}   \quad M = \set{0,1,\dots, 11} \quad \text{\small{řád 12}}  \\
& \mathbb{Z}_{6}^{+}   \quad N = \set{0,1,\dots,5}  \quad \text{\small{řád 6}} \\
& \phi(4) \neq 5 \quad \phi(0)=0 \\
& \set{0,4,8} \\
& \text{\small{ord}}(4) = 3 \\
& 5 -\text{\small{Je generátor }} N\\
& \text{\small{6 nedělí 3}} \\
& \Rightarrow \phi(4) = 5
\end{align*}
$$

### Cvičení 21.1

<!-- Latex Equation -->

$$
\begin{align*}
& 5^{x} \equiv 12 \pmod{23} \\
& \mathbb{Z}_{23}^{\times}   \quad M = \set{1,2,3, \dots , 12, \dots, 22} \quad \#22 \\
& 5^{x} \equiv 12 \\
& 5^{1} = 5 \\
& 5^{2} = 2  \\
& 5^{3} = 10 \\
& 5^{4} = 4 \\
& 5^{5} = 20 \\
& \dots  \\
& 5^{20} = 12 \\
\end{align*}
$$

### Cvičení 21.2

<!-- Latex Equation -->

$$
\begin{align*}
& \mathbb{Z}_{29}^{\times}  \\
& A: \\
& 8^{a} =24 \\
& n = (8^{a})^{b} = (8^{b})^{a}=15^{a}  \\
&  \\
& B: \\
& 8^{b} = 15 \\
& n = (8^{a})^{b} = 24^{b}   \\
&  \\
& 8^{1} = 8 \\
& 8^{2} = 6 \\
& 8^{3} = 19 \\
& \dots \\
& 8^{9} = 15 \\
& \Rightarrow b=9 \\
&  \\
& 24^{2} = 25 \\
& \dots  \\
& \text{\small{2. den týdne v 18 hodin hrob 131}} \checkmark \\
\end{align*}
$$

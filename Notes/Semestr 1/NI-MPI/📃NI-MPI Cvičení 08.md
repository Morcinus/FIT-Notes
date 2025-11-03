---
created: 2024-11-12T14:31:11
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceni08 status-toReview


### Strojová čísla

### Cvičení 15.1

![](../../../Assets/Pasted%20image%2020241112155432.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \\
& \text{a) -1/13} \\
& a = (-1)^{s} \cdot  \textcolor{Skyblue}{1. m} \cdot  \textcolor{Red}{2^{e-127}}   \\
& \\
& \text{Mocniny 2} \\
& 2^{3} = 8 \\
& 2^{2} = 4 \\
& 2^{1} = 2 \\
& 2^{0} = 1 \\
& 2^{-1} = \tfrac{1}{2} \\
& 2^{-2} = \tfrac{1}{4} \\
& 2^{-3} = \tfrac{1}{8} \\
& \dots \\
& \\
& \text{Znaménko} \\
& s = 1 \quad \text{\small{Pro záporné číslo}} \\
& \\
& \text{Počítání mantisy} \\
& a_{-1} =\tfrac{1}{13} : \tfrac{1}{2} =   \lfloor \tfrac{2}{13} \rfloor = 0 \\
& a_{-2} =\tfrac{2}{13} :\tfrac{1}{2} =\lfloor \tfrac{4}{13} \rfloor =0 \\
& a_{-3} =\lfloor \tfrac{8}{13}  \rfloor = 0 \\
& a_{-4} = \lfloor \tfrac{16}{13}  \rfloor = 1 \\
& a_{-5} = \lfloor \tfrac{6}{13}  \rfloor = 0 \\
& a_{-6} = \lfloor \tfrac{12}{13}  \rfloor = 0 \\
& a_{-7} = \lfloor \tfrac{24}{13}  \rfloor  = 1 \\
& a_{-8} = \lfloor \tfrac{22}{13}  \rfloor = 1 \\
& a_{-9} = \lfloor \tfrac{18}{13}  \rfloor = 1 \\
& a_{-10} = \lfloor \tfrac{10}{13}  \rfloor = 0 \\
& a_{-11} = \lfloor \tfrac{20}{13}  \rfloor = 1 \\
& a_{-12} = \lfloor \tfrac{14}{13}  \rfloor =1 \\
& a_{-13} = a_{-1} \quad \text{\small{Zde jsme se zacyklili}} \\
& \tfrac{1}{13} = 0.\overline{000100111011} \\
& = 1.\overline{001110110001} \cdot 2^{-4}  \quad \text{\small{Znormovali jsme to}} \\
& \\
& \text{\small{Mantisa tedy bude:}}  \\
& m = 00111011000100111011000 \quad \text{\small{23 číslic}} \\
& \\
& \text{Spočteme exponent} \\
& -4 = e - 127 \\
& e = 123 \\
& 123 : 128 = 0 \quad 123 \\
& 123 : 64 = 1  \quad 59 \\
& 59 : 32 = 1  \quad 27 \\
& 27 : 16 = 1  \quad 11 \\
& 11 : 8 = 1 \quad 3 \\
& 3 : 4 = 0 \quad 3 \\
& 3: 2 = 1  \quad 1 \\
& 1 : 1 = 0 \quad 0 \\
& e = 01111011
\end{align*}
$$

### Cvičení 15.1 b)

<!-- Latex Equation -->

$$
\begin{align*}
& \tfrac{1}{17}  \\
& \\
& \text{Znaménko} \\
& s = 0 \\
& \\
& \text{Mantisa} \\
& a_{-1} = \tfrac{1}{17} : \tfrac{1}{2} = \lfloor \tfrac{2}{17}  \rfloor = 0 \\ \\
& \text{\small{Ty jednotlivé kroky se dají počítat z hlavy:}} \\
& \tfrac{1}{17} = 0.\overline{00001111} \\
& = 1.\overline{11100001} \cdot 2^{-5} \quad \text{\small{normalizace}} \\
& \\
& \text{Exponent} \\
& -5 = e-127 \\
& e=122 = \left(01111010 \right)_{2}  \\
& \\
& \text{Celkem tedy} \\
& s = 0 \\
& e = 01111010 \\
& m = 11100001111000011110000 \\
\end{align*}
$$

### Cvičení 15.1 c)

<!-- Latex Equation -->

$$
\begin{align*}
& -\tfrac{1}{13} +\tfrac{1}{17} = - \left(\tfrac{1}{13} - \tfrac{1}{17} \right)  \\
& \textcolor{Lime}s = 1 \\
& \\
& \text{Sčítání} \\
& \tfrac{1}{13} = 1.00111011000100111011000 \cdot 2^{-4} \\
& -\tfrac{1}{17} = -0.111100001111000011110000 \cdot 2^{-4} \quad \text{\small{Převedli jsme to na stejný exponent šoupnutím doprava}} \\
&  \quad \ \ 1.00111011000100111011000 \cdot 2^{-4}  \\
& \underline{-0.111100001111000011110000} \cdot 2^{-4} \quad \text{\small{Odčítání pod sebou}} \\
&  \quad 0.01001010001000101100000 \cdot 2^{-4} \\
&  \\
& \textcolor{Blue}m = 001010001000101100000\textcolor{Orange}{00} \quad \text{\small{Poslední 2  bity jsme doplnili pomocí 0}} \\
& \\
& \text{Exponent} \\
& \textcolor{Orange}e - 127 = -6 \\
& \textcolor{Orange}e = 121 \\
& \textcolor{Orange}e = 01111001_{2}  \\
& \\
& \text{Celkem tedy} \\
& \underset{\textcolor{Lime}s}{\textcolor{Lime}{0}}\underset{\textcolor{Orange}e}{\textcolor{Orange}{01111001}}\underset{\textcolor{Blue}m}{\textcolor{Blue}{001010001000101100000}}  \\
&
\end{align*}
$$

### Grupoid, monoid, pologrupa, grupa

![](../../../Assets/Pasted%20image%2020241112153001.png)

### Cvičení 16.2a

![](../../../Assets/Pasted%20image%2020241112155407.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \text{Prosté funkce} \\
& M = \set{f(x), f \text{\small{je prostá}}, D_{f}= \mathbb{R}} \\
& a) f \circ g = f(g(x)) \\
& \\
& \text{Uzavřenost} f,g \in M \text{\small{?}}  \\
& \text{\small{Prostá funkce:}}  \\
& x_{1} \neq x_{2} \Rightarrow f(x_{1}) \neq  f(x_{2}) \\
& x_{1} \neq x_{2} \underbrace{\Rightarrow}_{g \text{\small{ prostá}}  }  g(x_{1}) \neq  g(x_{2}) \underbrace{\Rightarrow}_{f \text{\small{ prostá}}} f(g(x_{1})) \neq f(g(x_{2})) \\
& (f \circ g)(x_{1}) \neq (f \circ g)(x_{2}) \\
& (f \circ g)\text{\small{je prostá funkce}} \\
& D_{(f \circ g)} = \mathbb{R} \Rightarrow f \circ g \in M \\
\end{align*}
$$

### Cvičení 16.2b

<!-- Latex Equation -->

$$
\begin{align*}
& f^{-'} \in M \\
& \text{\small{protipříklad}} \ln{x} \\
& D_{\ln{x}} \neq \mathbb{R} \Rightarrow M \text{\small{není uzavřené vůči}} f^{-1}   \\
\end{align*}
$$

### Cvičení 16.2c

<!-- Latex Equation -->

$$
\begin{align*}
& \underbrace{e(x) = x}_{\text{\small{Neutrální prvek}} }   \quad e \circ f = f \circ e = f \\
& f \circ (g \circ h) = (f \circ g) \circ h \\
& f \circ g(h(x)) = f(g(h(x))) = (f \circ g)(h(x)) = (f \circ g) \circ h \\
& \Rightarrow \text{\small{Asociativnost platí}} \\
& \\
& \text{Závěr} \\
& (M, \circ) \text{\small{ je monoid.}}
\end{align*}
$$

### Cvičení 16.6

![](../../../Assets/Pasted%20image%2020241112155335.png)

<!-- Latex Equation -->

$$
\begin{align*}
& P = \set{p(x) = a_{0} + a_{1}x + a_{2} x^2 +a_{3}x^3 +\dots} \\
& p'(x) = a_{1} + 2a_{2} x + 3a_{3}x^2 +\dots \in P \\
& \Rightarrow \text{\small{Ano, P je uzavřená vzhledem k derivaci}}
\end{align*}
$$

### Cvičení 16.7

![](../../../Assets/Pasted%20image%2020241112155324.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \left(\set{1} , : \right) \text{\small{ je grupa, ale my chceme větší}} \\
& \\
& \text{Jak bude vypadat ta množina} \\
& \left(\set{1, -1} , : \right) \\
& \text{\small{Zkusíme uzavřenost:}}  \\
& 1:1=1 \\
& 1:(-1)=-1 \\
& -1:1=-1 \\
& -1:-1=1 \\
& \\
& \text{\small{Zkusíme asociativnost}} \\
& a \circ (b \circ c) = (a \circ b) \circ c \\
& \text{\small{Bude platit, jde jen o počet kladných a záporných jedniček}}  \\
& \\
& \text{\small{Zkusíme neutrální prvek}}  \\
& e=1  \quad e \circ a = a \circ e = a \\
& \\
& \text{\small{Je to grupa?}}  \\
& (1)^{-1}=1 \\
& (-1)^{-1} = -1 \\
& \\
& \text{\small{Je to Abelovská grupa?}} \\
& a \circ b = b \circ a \\
& 1:-1=-1:1=-1 \\
&
\end{align*}
$$

### Cvičení 18.8

<!-- Latex Equation -->

$$
\begin{align*}
& M \subset \mathbb{R}  \\
& M = \set{1,2,3, \dots ,0,-1,-2,-3, \dots } = \mathbb{Z}  \\
& (\mathbb{Z},+) \text{\small{je grupa}}
\end{align*}
$$

---
created: 2024-12-17T14:32:34
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceni13 status-toReview

### Cvičení 22.1

<!-- Latex Equation -->

$$
\begin{align*}
& \text{\small{a) celá čísla}}  \\
& a,b \in M \\
& \left(M, + \right) \quad \text{\small{Tvoří abelovskou grupu}} \\
& \left(M, \cdot  \right) \quad \text{\small{Tvoří monoid? Ne, }} 1 \notin M \\
& \Rightarrow \text{\small{Nejedná se o okruh}}   \\
&  \\
& \text{\small{b) }} M = \set{2k+ 1, k \in \mathbb{Z}} \\
&  \left(M, + \right)  \text{\small{ Dvě lichá čísla sečtením dají sudé }} \Rightarrow \text{\small{není ani grupoid}}  \\
&  \\
& \text{\small{c) Celá čísla }} M = \mathbb{Z} \\
& \left(M, + \right)  \quad \text{\small{Abelovská grupa}} \\
& \left(M, \cdot \right)  \quad \text{\small{monoid}} \\
& \text{\small{distributivní zákon}} \\
& a \cdot \left(b +  c \right) = a \cdot  b +  a \cdot  c \land \left(b +  c \right) \cdot  a = b \cdot  a +  c \cdot  a \\
& \text{\small{Platí pro sčítání a násobení celých čísel}} \\
& \Rightarrow \text{\small{Jedná se o okruh}} \\
&  \\
& \text{\small{d) }} M = \mathbb{Z}^+ \\
& \left(M, + \right) \quad \text{\small{Netvoří grupu, chybí prvky vůči sčítání }} \Rightarrow \text{\small{Netvoří orkuh}} \\
&  \\
& \text{\small{e) }} M = \mathbb{Q} \\
& \left(M, +  \right) \text{\small{abelovská grupa}}  \\
& \left(M, \cdot  \right) \text{\small{monoid}}  \\
& \text{\small{distributivní zákon}}  \\
& a \cdot \left(b +  c \right) = a \cdot  b +  a \cdot  c \land \left(b +  c \right) \cdot  a = b \cdot  a +  c \cdot  a \\ \\
& \text{\small{Platí pro }} a,b,c \in \mathbb{Q} \\
& \Rightarrow \text{\small{Je to okruh}} \\
\end{align*}
$$

### Cvičení 23.4

<!-- Latex Equation -->

$$
\begin{align*}
& GF(\textcolor{Orange}2^\textcolor{Green}2 ) \quad x^{2} + x- 1 \\
& \mathbb{Z}_{2} \\
\end{align*}
$$

$(M, +)$

| +   | 0   | 1   | x   | x+1 |
| --- | --- | --- | --- | --- |
| 0   | 0   | 1   | x   | x+1 |
| 1   | 1   | 0   | x+1 | x   |
| x   | x   | x+1 | 0   | 1   |
| x+1 | x+1 | x   | 1   | 0   |

- $0$ neutrální prvek (na diagonále)
- není cyklická - nemá generátor
- prvky jsou inverzní sami k sobě

$(M, \cdot)$

| $\cdot$ | 1   | x   | x+1 |
| ------- | --- | --- | --- |
| 1       | 1   | x   | x+1 |
| x       | x   | x+1 | 1   |
| x+1     | x+1 | 1   | x   |

Sick matematický tríček:

<!-- Latex Equation -->

$$
\begin{align*}
& x^2+x-1=0 \\
& x^{2} = -x +1 = x + 1 \\
& x(x+1) = x^{2} + x \\
& = x + 1 +x \\
& = 2x +1=1 \\
& (x+1)(x+1) = x^{2} + 2x + 1=x^{2} + 1= x + 1 + 1 = x
\end{align*}
$$

Vlastnosti:

- $\left(x+1 \right) ^{-1} = x$ (inverze)
- $x$ a $x+1$ jsou generátory

### Cvičení 23.5

<!-- Latex Equation -->

$$
\begin{align*}
& GF(\textcolor{Orange}3^{2}) \quad x^{2} -x -1 \\
& \Rightarrow \mathbb{Z}_{\textcolor{Orange}3}
\end{align*}
$$

| $\cdot$ | 1                  | 2                  | x    | x+1  | x+2                | 2x                 | 2x+1               | 2x+2               |
| ------- | ------------------ | ------------------ | ---- | ---- | ------------------ | ------------------ | ------------------ | ------------------ |
| 1       | $\textcolor{Red}1$ | 2                  | x    | x+1  | x+2                | 2x                 | 2x+1               | 2x+2               |
| 2       | 2                  | $\textcolor{Red}1$ | 2x   | 2x+2 | 2x+1               | x                  | x+2                | x+1                |
| x       | x                  | 2x                 | x+1  | 2x+1 | $\textcolor{Red}1$ | 2x+2               | 2                  | x+2                |
| x+1     | x+1                | 2x+2               | 2x+1 | 2    | x                  | x+2                | 2x                 | $\textcolor{Red}1$ |
| x+2     | x+2                |                    |      |      |                    |                    |                    |                    |
| 2x      | 2x                 |                    |      |      |                    |                    | $\textcolor{Red}1$ |                    |
| 2x+1    | 2x+1               |                    |      |      |                    | $\textcolor{Red}1$ |                    |                    |
| 2x+2    | 2x+2               |                    |      |      |                    |                    |                    |                    |

<!-- Latex Equation -->

$$
\begin{align*}
& x^{2}-x-1=0 \\
& x^{2} =x+1 \\
&  \\
& x(x+1)=x^{2}+x=x+1+x=2x+1 \\
& x(x+2) = x^{2}+2x = x+1+2x=3x+1=1 \\
& x(2x)=2x^{2}=2(x+1)=2x+2 \\
& x(2x+1)=2x^{2}+x =2(x+1)+x=2 \\
& x(2x+2)=2x^{2}+2x=2x+2+2x=x+2 \\
& 2x(2x+1)=4x^2+2x=x^2+2x=x+1+2x=1 \\
\end{align*}
$$

### Cvičení 23.6

![](../../../Assets/Pasted%20image%2020241217151722.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \text{\small{Ireducibilní?}} \\
& n=1 \\
& x \ \checkmark\\
& x+1 \ \checkmark\\
& n=2  \\ \\
& x^{2} \textcolor{Red}{=x\cdot x \quad \times} \\
& x^{2}+1 \\
& x^{2}+x  \\
& x^{2}+x +1 \\
&  \\
& n=3 \\
& x^{3} +  x^{2} +  x +  1 \textcolor{Red}{\quad \text{\small{ 1 je kořen, mohu vytknout }}(x+1) \times} \\
& x^3 + x^2 + x \textcolor{Red}{=x(x \dots) \times} \\
& x^3 + x^2+ 1 \checkmark \\
& x^3 + x^2 \textcolor{Red}{ \\ \times} \\
& x^3 + x+ 1 \checkmark \\
& x^3 + x \textcolor{Red}{ \\ \times}\\
& x^3 + 1 \textcolor{Red}{\quad \text{\small{ 1 je kořen, mohu vytknout }}(x+1) \times} \\
& x^3 \textcolor{Red}{ \\ \times} \\
&  \\
& n=4 \\
& x^{4}+ x^3 + x^2 + x+ 1 \checkmark \\
& x^{4}+ x^3 + x^2 + 1 \textcolor{Red}{\quad \text{1 je kořen} \times} \\
& x^{4}+ x^3  + x+ 1 \textcolor{Red}{\quad \text{1 je kořen} \times} \\
& x^{4}+ x^2 + x+ 1 \textcolor{Red}{\quad \text{1 je kořen} \times} \\
& x^{4}+ x^3 +  1 \checkmark \\
& x^{4}+  x^2 + 1 \textcolor{Red}{\quad \text{viz další test} \times} \\
& x^{4} + x+ 1 \checkmark \\
& x^{4}+ 1  \textcolor{Red}{\quad \text{1 je kořen} \times} \\
& +0 \quad \text{\small{Vynecháváme 8 polynomů, protože víme, že jsou ireducibilní}} \\
&   \\
& \text{\small{Další test:}}\\
& \left(x^{4} + x^{2} + 1\right) = (ax^2 + bx+ 1)(cx^2 + dx+ 1)  \\
& = acx^{4} + (ad+ bc)x^{3} + (bd+ a+ c)x^{2} + (b+ d)x+ 1 \\
&  \\
& ac=1 \Rightarrow a=1 \land c=1\\
& \begin{rcases}ad+ bc=0 \Rightarrow d+b=0 \\bd+ a+ c=1 \Rightarrow bd=1\end{rcases} \quad b=1 \land d=1 \\
& b+ d=0 \\
&  \\
& \Rightarrow \text{\small{Celkem 8 ireducibilních polynomů stupně }} n < 5
\end{align*}
$$

### Cvičení 23.8

<!-- Latex Equation -->

$$
\begin{align*}
& GF(2^{3})  \quad x^{3}+x+1 \\
& \text{\small{a) viz přednáška}} \\
& \text{\small{b) }} (010)^{-1} \\
& 010 \sim x \\
& \textcolor{Blue}{x^{2}x1}  \\
&  \\
& x^{-1} = ax^{2}+ bx+ c \\
& x(ax^{2}+bx+c)=1 \\
& ax^{3}+bx^{2}+cx=1 \\
& a(x+ 1)+ bx^{2}+ cx=1 \quad \quad x^{3}=-x-1 \equiv x+1 \quad \text{\small{v }} \mathbb{Z}_{2}\\
& bx^{2}+ (a+ c)x+ a=1 \begin{cases} b=0\\ a+c=0\\ a=1 \quad \Rightarrow c=1 \end{cases}  \\
&  \\
&  \\
& 100\cdot (010)^{-1}+010\cdot 010 \quad \quad (010)^{-1}=101 \sim x^{2}+1 =x^{-1}    \\
& x^{2}\cdot (x^{2}+ 1)=x^{4}+ x^{2} \quad \quad x^{4} = x(x+1)=x^{2}+x \\
& =x^{2}+ x + x^{2}=2x^{2}+ x=x \sim 010 \\
& x\cdot x=x^{2} \sim 100 \\
& 010+100=110 \\
\end{align*}
$$

### Cvičení 23.11

<!-- Latex Equation -->

$$
\begin{align*}
& GF(2^{4}) \quad x^{4}+x^{3}+1 \\
& \text{\small{a) }} (1100)^{-1} \sim x^{3} + x^{2} \\
& REA
\end{align*}
$$

REA:

|                     | $x^{4}+ x^{3}+1$    | $x^{3} + x^{2}$               |     |
| ------------------- | ------------------- | ----------------------------- | --- |
| $x^{4}+ x^{3}+1$    | $1$                 | $0$                           |     |
| $x^{3} + x^{2}$     | $2$                 | $1$                           | $x$ |
| $\textcolor{Blue}1$ | $\textcolor{Blue}1$ | $\textcolor{Blue}{-1\cdot x}$ |     |

<!-- Latex Equation -->

$$
\begin{align*}
& \textcolor{Blue}{1=\underline{1\cdot (x^{4}+ x^{3}+ 1)}- x(x^{3} + x^{2})} \\
& 1 = (-x)(x^{3}+x^{2}) \Rightarrow (x^{3}+ x^{2})^{-1}=-x=x
\end{align*}
$$

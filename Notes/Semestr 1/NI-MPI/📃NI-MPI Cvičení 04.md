---
created: 2024-10-15T14:31:16
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI cviceni03 status-toReview


### Cvičení 10.1

#### Zadání
<!-- Latex Equation -->
Najít minimum na kružnici o poloměru $2$
$$
\begin{align*}
f(x,y) = 3x-4y+3 && \text{rovina} \\
x^2+y ^2=4 && \text{kružnice}
\end{align*}
$$

#### Řešení
Tohle je jakoby promítnutí té kružnice z té roviny
![](../../../Assets/Pasted%20image%2020241015144053.png)
<!-- Latex Equation -->
$$
\begin{align*}
\nabla f = (3,-4) \\
y = \frac{-4}{3}x && \text{rovnice pro přímku v tom směru} \\
x ^2 ˇ+ \frac{16}{9}x^2 = 4 && \text{dosadím do rovnice kružnice} \\
x = \pm \frac{6}{5} \\
y = \pm \frac{8}{5} && \text{po dosazení} \\
\\
\left[\frac{6}{5}, -\frac{8}{5}\right], \left[-\frac{6}{5}, \frac{8}{5}\right]
\end{align*}
$$

#### b) Parametrizace

Zavedu parametr $\varphi$
<!-- Latex Equation -->
$$
\begin{align*}
x=2 \cos(\varphi) \\
y = 2 \sin(\varphi) \\
\varphi \in [0, 2\pi) \\\\
\text{Dosazení do f(x,y)}\\
f( \varphi ) = 6 \cos(\varphi) - 8 \sin(\varphi) + 3 \\
f'( \varphi ) = 6(-\sin(\varphi)) - 8 \cos(\varphi) \\
f'( \varphi ) = 0\\
\\
\text{Zkusím to vyjádřit} \\
-6 \sin(\varphi) = 8 \cos(\varphi)\\
\frac{\sin(\varphi)}{\cos(\varphi)} = -\frac{8}{6} = -\frac{4}{3} \\
\tan(\varphi) = -\frac{4}{3}\\
\\
\text{Z toho mi vyjdou body} \\
\left[ \frac{6}{5},- \frac{8}{5}\right], \left[ -\frac{6}{5},\frac{8}{5}\right]\\
\\
\text{Spočtu } f''(\varphi) \\
f''(\varphi) = -6 \cos(\varphi) +8 \sin(\varphi) \\
f''(B) > 0 && \text{ostré lokální minimum} \\
f''(A) < 0 && \text{ostré lokální maximum} \\


\end{align*}
$$


### Cvičení 10.2
<!-- Latex Equation -->
$$
\begin{align*}
\text{1 sestavíme Lagrangeovu funkci} \\
L(x,y,\lambda) = f(x,y) + \lambda g(x,y) \\= 3x-4y +3+\lambda\left(x ^2 +y ^2 -4 \right)\\ \\
g(x,y) = x ^2 +y ^2 - 4 \\
g(x,y) = 0 \\
\\ \text{2 Spočteme derivace} \\
\frac{\delta L}{\delta x} = 3 + 2 \lambda x = 0 && 2 \lambda x = -3 && x = -\frac{3}{2 \lambda}\\
\frac{\delta L}{\delta y} = -4 +2 \lambda y = 0 && 2 \lambda y = 4 && y = \frac{2}{\lambda}\\

\\ \text{Dosadím do vazby} \\
\frac{9}{4 \lambda ^2} +\frac{4}{ \lambda ^2} = 4 \\
\lambda = \pm \frac{5}{4}\\
\lambda_1=\frac{5}{4} && x_1 = -\frac{6}{5} && y_1 = \frac{8}{5} \\
A = [\frac{6}{5}, -\frac{8}{5}, -\frac{5}{4}] \\

\lambda_2=-\frac{5}{4} && x_2 = \frac{6}{5} && y_2 = -\frac{8}{5} \\
B = [-\frac{6}{5}, \frac{8}{5}, \frac{5}{4}] \\

\\ \text{3. Dosadíme doo Hessovy matice} \\
\nabla ^2 _x L(B) = \begin{pmatrix}2 \lambda & 0 \\0 &  2 \lambda \end{pmatrix} \\
\nabla ^2 _x L(B) = \begin{pmatrix} \frac{10}{4} & 0 \\0 &  \frac{10}{4} \lambda \end{pmatrix} && \implies \text{pozitivně definitní} \implies \text{ostré lokální minimum} \\
\nabla ^2 _x L(B) = \begin{pmatrix} -\frac{10}{4} & 0 \\0 &  -\frac{10}{4} \end{pmatrix} && \implies \text{negativně definitní} \implies \text{ostré lokální maximum} \\
\nabla g = \left(2x, 2y \right) \\
\\ \text{Kdyby vyšla indefinitní matice} \\
\\ \text{musím najít směrový vektor tečny} \\
\nabla g(B) = \left( -\frac{12}{5}, \frac{16}{5}\right)\\
v = \left(\frac{16}{5}, \frac{12}{5}\right)\\




\end{align*}
$$


### Cvičení 10.4
<!-- Latex Equation -->
$$
\begin{align*}
\\ \text{Zadání} \\
\text{Najděte lokální extrémy} \\
f(x,y) = xy \\
x + y = 1 && \text{podmínka} \\

\\ \text{1. vyjádříme funkci} \\
y = 1 - x \\


\end{align*} \\
$$![](../../Assets/Pasted%20image%2020241015152706.png)


<!-- Latex Equation -->
$$
\begin{align*}
\\ \text{2. spočteme potřebné věci} \\
L(x,y,\lambda) = xy + \lambda(x+y-1)\\
\frac{\delta L}{\delta x} = y + \lambda \\
\frac{\delta L}{\delta y} = x + \lambda \\
\nabla _x ^2 L = \begin{pmatrix}0 & 1 \\1 & 0\end{pmatrix} \\

\\ \text{Doplníme podmínky} \\
\frac{\delta L}{\delta x} = 0 && \rightarrow y + \lambda= 0 && y = -\lambda \\
\frac{\delta L}{\delta y} = 0 && \rightarrow x + \lambda && x = -\lambda \\
y = \frac{1}{2} && x = \frac{1}{2} \\
A = \left[ \frac{1}{2}, \frac{1}{2} , - \frac{1}{2}\right]

\\ \text{3. spočtem funkci g} \\
\nabla g(x,y) = (1,1) && \text{Gradient té roviny v tom bodě} \\
\nabla g(A) = (1,1) \\
\nabla g(A) \cdot v = 0 \\
v = \left(1, -1 \right) && \text{kolmý vektor na ten předchozí} \\

\\ \text{4. Zjistíme, jeslti to je maximum nebo minimum} \\
v ^{T} \nabla ^2 _xL(A) v = -2 < 0 \\
\implies \text{ostré lokální maximum}


\end{align*}
$$


### Cvičení 10.8
Tento příklad je poměrně pracný, ale je zajímavý jak se sestavuje $L$ funkce.

Tohle by se v ruce napapíře ne počítalo, to by bylo pro počítač
<!-- Latex Equation -->
$$
\begin{align*}
L(x,y,z, \lambda_1, \lambda_2) =\\
xyz + \lambda_1 (x +y +z -5)+\lambda_2 (xy +yz +xz -8)
\end{align*} \\

\nabla g_1 = (1,1,1) \\
\nabla g_2 = (y+z,x+z,x+y)
$$


### Cvičení 10.9
Chceme zjistit, že když se pohybuju po té vrstevnici, tak ten gradient $\nabla f$ bude **kolmý** na vektor ve směru tečny $t$

<!-- Latex Equation -->
$$
\begin{align*}
f: \mathbb{R} ^2 \rightarrow \mathbb{R} \\
V = \set{(x,v(x))} \\
\forall(x,y) \in V: f(x,y) = c \\

\\ \text{Vytvoříme funkci h, která bude popisovat množinu V} \\
h: \mathbb{R} \rightarrow \mathbb{R}^2 && x \rightarrow (x, v(x))  \\

Df = (\frac{\delta f}{\delta x}, \frac{\delta f}{\delta y}) \\
Dg = (1, v'(x)) \\

\frac{d f}{d x} = Df(g(x)) \cdot Dg(x)  \\
= (\frac{\delta f}{\delta x}, \frac{\delta f}{\delta y}) \cdot (1, v'(x)) && \text{viz dole} \\
= \frac{\delta f}{\delta x} \cdot 1 + \frac{\delta f}{\delta y} \cdot v'(x) \\
=0 \\

\\ \text{Klíčová myšlenka} \\
(\frac{\delta f}{\delta x}, \frac{\delta f}{\delta y}) = \nabla f \\
(1, v'(x)) = \nabla f


\end{align*}
$$


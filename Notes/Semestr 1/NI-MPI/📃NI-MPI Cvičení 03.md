---
created: 2024-10-08T14:47:38
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceni02 status-toReview


$\overset{\rightarrow T}{s}$

### 9.4

$\nabla A \overset{\rightarrow T}{T}$
$\delta$
$f(x,y,z) = xyz$
$b = (1,1,1)$
$\overset{\rightarrow T}{s} = \begin{pmatrix} \frac{1}{\sqrt{2}} \\ \frac{1}{\sqrt{2}} \\ 0 \\  \end{pmatrix}$

$\nabla ^2 f =$

$\frac{\delta f}{\delta x}$

### Cvičení 9.5

$$
\begin{align*}

f(x,y)=Ax^2+2Bxy+Cy^2 \\
\frac{\delta f}{\delta x}=2Ax+By \\
\frac{\delta f}{\delta y}=2Bx+Cy \\
b=(0,0)\\ \\

\nabla ^2 f = \begin{pmatrix}2A & 2B \\2B & 2B\end{pmatrix} = 2 \\\begin{pmatrix}A & B \\C & D\end{pmatrix} \\

\nabla f(b) = 0 \\

\text{Sylvestrovo kritérium} \\
\text{poz.def.} \implies \text{ostré lokální maximum} \\
A>0 \\
AC-B^2 \\

\text{poz.def.} \implies \text{ostré lokální minimum} \\
A


\end{align*}
$$

### Cvičení 9.6

$$
\begin{align*}
f(x,y) = x^2+3xy+y^2+16 \\
\frac{\delta f}{\delta x}=2x+3y = 0 \\
\frac{\delta f}{\delta y}=3x+2y = 0 \\

\text{Stacionární bod} [0,0] \\ \\

\nabla ^2 f = \begin{pmatrix}2 & 3 \\3 & 2\end{pmatrix} \\ \\

\det M_1 = 2 > 0 \\
\det M_2 = 4-9=-5 < 0 \\

\det \begin{pmatrix}2 - \lambda & 3 \\3 & 2-\lambda\end{pmatrix} =\\ (2-\lambda)^2-9=4-4\lambda + \lambda^2-9 = \lambda^2-4\lambda-5\\


\end{align*}
$$

### Cvičení 9.9

<!-- Latex Equation -->

$$
\begin{align*}
f(x,y,z) = || B'-B||=\sqrt{(x-b_x)^2+(y-by)^2+(z-bz)^2} \\
z^2=x^2+y^2 \\

\text{argmin g(x,y,z)} \\
z^2=x^2+y^2 \\

g'(x,y) = (x-1)^2+(y-2)^2+x^2+y^2 \\
= x^2-2x+1+y^2-4y+4+x^2+y^2 \\
= 2x^2+2y^2-2x-4y+5 \\
\\
\text{Dosadíme omezení do g} \\
\frac{\delta g}{\delta x} = 4x-2=0 \\
4x=2 \implies x= \frac{1}{2}, \quad [\frac{1}{2},1] \\
\frac{\delta g}{\delta y} = 4y-4=0 \\
4y=4 \implies y= 1 \\
\\
z^2=\frac{1}{4}+1=\frac{5}{4}, \quad z = \pm \frac{\sqrt{5}}{2} \\
\text{nejmenší vzdálenost od B v rámci dvojkužele} \\
z^2=x^2+y^2 \\
\text{mají body} [\frac{1}{2},\pm \frac{\sqrt{5}}{2}]\\
\nabla ^2 g = \begin{pmatrix}4 & 0 \\0 & 4\end{pmatrix} \text{je podle definice jedná se o minimum}

\end{align*}
$$

### Cvičení 9.10

<!-- Latex Equation -->

$$
\begin{align*}
V=abc=256cm ^3 \\
S=2ac+2bc+ab \\
\text{argmin} \ S(a,b,c) \\
c = \frac{256}{a} \\
S'(a,b) = \frac{512}{b} + \frac{512}{a} +ab \\
\frac{\delta S'}{\delta a} = -\frac{512}{a ^2} + b = 0 \quad b = \frac{512}{a ^2} \\ \\

\frac{\delta S'}{\delta b} = -\frac{512}{b^2} + a = 0 \\ \\

\text{Vyjádřím v rovnici} \\
-\frac{512}{512 \cdot 512} a ^4 + a = 0 \\
a (1- \frac{a ^3}{512}) = 0 \\
\frac{a ^3}{512} = 1 \\
a = 8 \\ \\

\text{Dosadíme do b} \\
b=\frac{512}{a ^2}=8 \\

\text{Optimální krabice je tedy} \\
a = 8 \\
b = 8 \\
c = 4 \\

\end{align*}
$$

<!-- Latex Equation -->

$$
\begin{align*}
\nabla ^2 S' = \begin{pmatrix}\frac{1024}{a ^3} & 1 \\1 & \frac{1024}{b ^3} \end{pmatrix} = \begin{pmatrix}2 & 1 \\1 & 2\end{pmatrix} \\ \\
\det M_1 = 2 > 0 \\
\det M_2 = 4-2= 2 > 0

\end{align*}
$$

### Cvičení x.x

<!-- Latex Equation -->

$$
\begin{align*}
2 _2
\end{align*}
$$

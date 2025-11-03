---
created: 2024-10-29T14:33:53
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceni06 status-toReview


### Cvičení 12.2

<!-- Latex Equation -->

$$
\begin{align*}
& f(x,y)= e ^{2x+y} \\
& D = \left[0,1 \right] \times \left[0,3 \right]  \\
&  \\
& \int \int_{D}  e ^{2x+y} dxdy= \int_{0}^{1} \left(\int_{0}^{3} e ^{2x+y} dy \right)dx \\
&  \\
& \text{Počítání} \\
& = \int_{0}^{1} \left(\int_{0}^{3} e^{2x} e^{y}  dy \right)dx \\
& = \int_{0}^{1} e^{2x} \left(\int_{0}^{3} e^{y} dy \right) dx \\
& = \int_{0}^{1} e^{2x} \left[e^{y} \right]_{0} ^{3} dx=\int_{0}^{1} e^{2x} \left(e^{3} -e^{0}  \right)dx = \left(e^{3} -1 \right)\int_{0}^{1} e^{2x} dx \\
& =\left(e^{3} -1 \right)\left[\tfrac{1}{2} e^{2x} \right]_{0} ^{1} =\tfrac{1}{2} \left(e^{3} -1 \right) \left(e^{2} -1 \right)
\end{align*}
$$

### Cvičení 12.3

<!-- Latex Equation -->

$$
\begin{align*}
& \int \int_{D} \sin(x+ y) dxdy=\int_{0}^{\pi} \left(\int_{0}^{2\pi } \sin(x+ y) dy \right) dx \\
& =\int_{0}^{\pi } \left[-\cos(x+ y)  \right]_{y=0} ^{y=2\pi }  dx \\
& \int_{0}^{\pi } -\left(\cos(x+2\pi ) -\cos(x)  \right)dx  \quad \text{\small{Ty kosíny se mi odečtou, protože jsou ve stejném místě }} \\
& =\int_{0}^{\pi } 0dx
\end{align*}
$$

### Cvičení 12.4

![](../../../Assets/Pasted%20image%2020241029150037.png)

<!-- Latex Equation -->

$$
\begin{align*}
& V = \int \int_{D} \left(x^{2} + y^{2}  \right) = \\
& = \int_{0}^{3} \left(\int_{-1}^{1} \left(x^2 + y^2 dy \right) dy \right)  \\
& = \int_{0}^{3} \left[x^2 y+ \tfrac{y^3 }{3}  \right]_{-1} ^{1} dx \\
& =\int_{0}^{3} \left(x^2 + \tfrac{1}{3} + x^2 + \tfrac{1}{3}  \right) dx \\
& = \int_{0}^{3} \left(2x^2 + \tfrac{2}{3}  \right)  \\
& =\left[2\tfrac{x^3}{3} + \tfrac{2}{3} x \right] _{0}^{3}  \\
& =18+2=20 \\
\end{align*}
$$

### Cvičení 12.5

 <!-- Latex Equation -->

$$
\begin{align*}
& D=\left[0,1 \right] \times \left[0,1 \right] \times \left[0,1 \right] \\
& \underset{D}{\int \int  \int}  \\
& = \int \left(\underset{D'}{\int \int} dx dy \right) dz \quad \text{\small{"Krouhání brambor"}} \\
& = \underset{D}{\int \int} \left(\int dz \right) dxdy \quad \text{\small{"Propichování prasátka mečem"}} \\
&  \\
&  \\
& \underset{D}{\int \int  \int} e^{x+ y+z} dxdydz \\
& = \underset{D}{\int \int  \int} e^{x} e^{y} e^{z} dxdydz \\
& = \underset{D'}{\int \int} \left(\int_{0}^{1} e^{x} e^{y} e^{z} dz \right) dxdy \\
& =\int_{0}^{1} \left(\int_{0}^{1} \left(\int_{0}^{1} e^{x} e^{y} e^{z} dz \right) dy \right) dx \\
& =\int_{0}^{1} \left(\int_{0}^{1} e^{x} e^{y} \left[e^{z} \right]_{0} ^{1} dy  \right) dx \\
& = (e-1)\int_{0}^{1} e^{x} \left[e^{y}  \right]_{0} ^{1} dx \\
& = (e-1)^2 \left[e^{x} \right]_{0}^{1}  \\
& = (e-1)^3
&
\end{align*}
$$

### Cvičení 13.2

<!-- Latex Equation -->

$$
\begin{align*}
& D = \begin{cases} 0 \leq x \leq \tfrac{1}{2}  \\ 0 \leq y \leq x^2 \end{cases} \quad \text{\small{Pro}} \left[x,y \right] \in \mathbb{R} ^2  \\
& \underset{D}{\int \int} (x+y)dxdy = \\
& = \int_{0}^{\tfrac{1}{2}} \left(\int_{0}^{x^2} \left(x+y \right)  dy\right) dx \\
& =\int_{0}^{\tfrac{1}{2}} \left[xy+\tfrac{y^2 }{2}  \right]_{y=0}^{y=x^2 } = \\
& = \int_{0}^{\tfrac{1}{2}} \left(x^3 + \tfrac{x^4}{2} \right) dx \\
& =\left[\tfrac{x^4}{4} + \tfrac{x^5}{10} \right]_{0}^{\tfrac{1}{2}} = \tfrac{1}{64} +\tfrac{1}{320} \\
& = \tfrac{6}{320} \\
& =\tfrac{3}{160}  \\
& \\
& \text{Druhá možnost řešení} \\
& D = \begin{cases} \sqrt{y}  \leq x \leq \tfrac{1}{2}  \\ 0 \leq y \leq \tfrac{1}{4}  \end{cases} \quad \text{\small{Pro}} \left[x,y \right] \in \mathbb{R}  \\
& \dots
\end{align*}
$$

### Cvičení 13.3

![](../../../Assets/Pasted%20image%2020241029153623.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \underset{D}{\int \int} (x+y)^2  \\
& \text{První varianta} \\
& D = \begin{cases} 0 \leq x\leq 2 \\ x \leq y \leq \tfrac{x}{2} +1 \end{cases} \quad [x,y] \in \mathbb{R} ^2 \\
& \\
& \text{(Druhá varianta)} \\
& D = \begin{cases} 0 \leq x\leq 2 \\ x \leq y \leq \tfrac{x}{2} +1 \end{cases} \quad [x,y] \in \mathbb{R} ^2 \\
& \\
& \text{První varianta} \\
& \underset{D}{\int \int} (x+y)^2 \\
& =\int_{0}^{2} \left(\int_{x}^{\tfrac{x}{2} +1} (x+y)^2 dy \right)dx  \\
& =\int_{0}^{2} \left[\tfrac{(x+y)^3}{3} \right]_{y=x}^{y=\tfrac{x}{2} +1} \\
& dx=\int_{0}^{2} \tfrac{(\tfrac{3}{2} x+1)^3 }{3}- \tfrac{(2x)^3}{3} dx \\
& = \tfrac{1}{3} \left[\tfrac{(\tfrac{3}{2} x+1)^4}{4\cdot \tfrac{3}{2}}  - \tfrac{(2x)^4}{8} \right] _{0}^{2}  \\
& = \tfrac{1}{3} \left(\tfrac{4^4 }{6}-2^5-\tfrac{1}{3} \right)  \\
& = \dots = \tfrac{21}{6}
\end{align*}
$$

### Cvičení 13.4

<!-- Latex Equation -->

$$
\begin{align*}
& \int_{0}^{1} \int_{x}^{1} xydydx \\
& =\int_{0}^{1} \left(\int_{x}^{1} xydy \right) dx \\
& =\int_{0}^{1} \left[x\tfrac{y^2 }{2} \right]_{y=x}^{y=1}dx \\
& =\int_{0}^{1} \left(\tfrac{1}{2} x-\tfrac{x^3}{2} \right)dx \\
& = \left[\tfrac{1}{2} x-\tfrac{x^3}{2} \right]_{x=0}^{x=1}=\tfrac{1}{8}
\end{align*}
$$

### Cvičení 13.6

![](../../../Assets/Pasted%20image%2020241029155334.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \underset{D}{\int \int} (x-y)dxdy \\
& D = \begin{cases} 2y \leq x\leq y+1 \\ 0 \leq y \leq 1 \end{cases} \quad [x,y] \in \mathbb{R} ^2 \\
& = \int_{0}^{1} \left(\int_{2y}^{y+1} (x-y) dx \right) dy \\
& = \int_{0}^{1}\left[\tfrac{x^2}{2} -xy \right]_{x=2y} ^{x=y+ 1} dy \\
& = \int_{0}^{1} \tfrac{(y+1)^2}{2} - y(y+1)-\tfrac{4y^2}{2} +2y^2dy \\
& = \int_{0}^{1} \left(\tfrac{y^2 + 2y+ 1}{2} - y^2 - y \right) dy \\
& = \int_{0}^{1} \left(-\tfrac{y^2 }{2} +\tfrac{1}{2}  \right) dy \\
& = \left[-\tfrac{y^3 }{6} +\tfrac{1}{2} y \right]_{0} ^{1}  \\
& = -\tfrac{1}{6} + \tfrac{1}{2} = \tfrac{2}{6} =\tfrac{1}{3}
\end{align*}
$$

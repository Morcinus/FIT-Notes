---
created: 2024-11-05T14:33:15
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI cviceni07 status-toReview


### Cvičení 14.3

![](../../../Assets/Pasted%20image%2020241105144626.png)

<!-- Latex Equation -->

$$
\begin{align*}
& (x,y) = (r\cdot \sin(\alpha),r\cdot \cos(\alpha)) \\
& x = r \cdot \cos (\alpha) \\
& y = r \cdot \sin (\alpha) \quad r > 0, \alpha \in \left[0, 2\pi \right]   \\
\end{align*}
$$

![](../../../Assets/Pasted%20image%2020241105144929.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \int \int \sqrt{\left(r\cdot \cos(\alpha) \right)^2 + \left(r\cdot \sin(\alpha) \right) ^2 } = |\det J_{4}(r,\alpha) | drd\alpha \\
& \varphi ^{-1}(D) = D \\
& \phi(r,\alpha) = (r\cdot \cos(\alpha), r \cdot \sin(\alpha)) \\
& J_{4}= \begin{pmatrix} -r\cdot \sin(\alpha) & r\cdot \cos(\alpha) \\ \cos(\alpha) & \sin(\alpha) \end{pmatrix}  \\
& \det J_{4} = -r\cdot \sin^2(\alpha) - r\cdot \cos^2 (\alpha) = -r \\
& \\
& \text{Spočíst integrál} \\ \\
& D' = \set{(r,\alpha)|rin[1,2],\alpha \in [\tfrac{\pi }{4},\tfrac{\pi }{3}]} \\
& \int \int r^2 drdx = \int_{1}^{2} r^2 dr\cdot \int_{\tfrac{\pi}{4} }^{\tfrac{\pi}{3}} = \tfrac{7}{3} \cdot \left(\tfrac{\pi}{3} -\tfrac{\pi }{4}  \right) = \tfrac{7}{3} \cdot \tfrac{\pi}{12} =\tfrac{7\pi}{36}
\end{align*}
$$

### Cvičení 14.5

<!-- Latex Equation -->

$$
\begin{align*}
& r \text{\small{ - Poloměr}}  \\
& \rho = (d) ^2 \\
& \iint\limits_{D} \rho(x,y)dxdy \\
& \rho(x,y) = x^2 + y^2 \\
& x-těžiště: \iint x \cdot \rho'(x,y)dxdy \\
& y-těžiště: \iint y \cdot \rho'(x,y)dxdy \\
& \rho'(x,y) = \frac{\rho(x,y)}{váha} \quad \text{\small{Tohle se použije úplně v závěru}} \\
&
& \\
& \text{a) Spočíst integrál} \\
& \iint r^2 \cdot r drd\alpha \quad[0,R] \times [0,\tfrac{\pi}{2} ] \\
& =\tfrac{R^4 }{4} \cdot \tfrac{\pi }{2} = \tfrac{\pi \cdot R^4 }{8}  \\
& \\
& \text{b) Spočíst finální integrál} \\ \\
& \iint \limits_{D} x \cdot \left(x^2 + y^2  \right)dxdy =\iint \limits_{D'}x^3 + xy^2 dxdy =  \\
& \int_{0}^{R}r^4dr \cdot \int_{0}^{\tfrac{\pi }{2}} \cos(\alpha)d\alpha  =\tfrac{R^5 }{5} \cdot (\sin(\tfrac{\pi}{2} ) )   \\
& x_{T} = \tfrac{\tfrac{R^5}{5} }{\tfrac{\pi \cdot R^4 }{8}}=  R \cdot \tfrac{8}{5\cdot \pi}  \quad \text{\small{Tohle je tedy x-ová souřadnice toho bodu těžiště}} \\
\end{align*}
$$

### Cvičení 14.6

![](../../../Assets/Pasted%20image%2020241105152936.png)

<!-- Latex Equation -->

$$
\begin{align*}
& x=r'\cdot \cos(\alpha)  \\
& y=r'\cdot \sin(\alpha) \\
& z=r\cdot \sin(\varphi) \\
&  \\
& r'=r\cdot \cos(\varphi)  \\ \\
& \psi:\\
& x=r\cdot \cos(\varphi) \cdot \cos(\alpha)  \\
& y=r\cdot \cos(\varphi) \cdot \sin(\alpha) \\
& z=r\cdot \sin(\varphi) \\
&  \\
& \alpha \in [0,2\pi] \quad r>0 \quad \varphi\in \left[-\tfrac{\pi }{2} , \tfrac{\pi }{2}  \right]  \\
&  \\
& \psi(r,\alpha,\varphi) = \left(r\cdot \cos(\varphi)\cdot \cos(\alpha), r \cdot \cos(\varphi) \sin(\alpha), r \cdot \sin(\varphi)     \right)  \\
& J_{4} = \begin{pmatrix} \cos(\varphi) \cos(\alpha)   & \cos(\varphi) \sin(\alpha)  & \sin(\varphi)  \\ -r\cdot \cos(\varphi) \sin(\alpha) & r\cdot \cos(\varphi)\cos(\alpha) & 0 \\ -r\cdot \sin(\varphi)\cos(\alpha) & -r\cdot \sin(\varphi) \sin(\alpha)  & r\cdot \cos(\varphi)  \end{pmatrix}  = \\
& = r^2 \left(\cos^2 (\varphi) \cdot \sin^2 (\varphi) \cdot 1+ \cos^2 (\varphi)\cdot \cos^2 (\varphi)\cdot 1    \right) = \\
& = r^2 \cos^2 (\varphi) \quad \text{\small{Tohle je blbě cos má být bez mocniny }} \\
& \\
& \int_{0}^{R} \int_{0}^{2\pi } \int_{-\tfrac{\pi }{2} }^{\tfrac{\pi }{2} } 1\cdot r^2 \cos^2 (\varphi) d\varphi d\alpha dr =  \\ \\
& = \tfrac{R^3 }{3} \cdot 2\pi \cdot \int_{-\tfrac{\pi}{2}}^{\tfrac{\pi}{2}} \cos(\varphi) d \varphi
\end{align*}
$$

### Cvičení 14.2

![](../../../Assets/Pasted%20image%2020241105155457.png)

<!-- Latex Equation -->

$$
\begin{align*}
& 0 \leq y-x \leq 1 \\
& 1 \leq x+y\leq 2 \\
& u = -x+y \\
& v = x+y \\
& x = r\alpha \\
& y = r\alpha \\
& \\
& \text{Spočíst integrál} \\
& x = \tfrac{v-u}{2}  \\
& y = \tfrac{u+v}{2} \\ \\
& J_{4} = \begin{pmatrix} -\tfrac{1}{2} & \tfrac{1}{2} \\ \tfrac{1}{2}  & \tfrac{1}{2} \end{pmatrix} \\
& \det J_{4} = -\tfrac{1}{2}  \\
& \\
& \iint\limits_{D}x\cdot y \ dxdy = \iint\limits_{D'} \tfrac{1}{4} \left(v^2 -u^2 \right) \cdot \tfrac{1}{2} \ dudv = \\
& = \tfrac{1}{8} \int_{1}^{2} \int_{0}^{1} v^2 -u^2 \ dudv= \tfrac{1}{8} \int_{1}^{2} v^2 -\tfrac{1}{3} dv
\end{align*}
$$

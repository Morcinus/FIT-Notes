---
created: 2024-10-17T09:16:59
title: Analýza vázané extrémy - příklady
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI

![](../../Assets/Pasted%20image%2020241017092333.png)
![](../../Assets/Pasted%20image%2020241017092348.png)

![](../../Assets/Pasted%20image%2020241017092358.png)

### Cvičení 10.3a
![](../../Assets/Pasted%20image%2020241017100307.png)
![](../../Assets/Pasted%20image%2020241017100433.png)

>[!info] Poznámka
>V tomto případě, jelikož je funkce v rovině rovnoběžné s osou $x$, můžu za $y$ jednoduše do rovnice dosadit $y=1$ a spočíst to jakoby ve $2D$ jako jednoduchou funkci $f(x)$ o jedné proměnné. 

<!-- Latex Equation -->
$$
\begin{flalign*}
& \text{1. Najdeme body podezřelé z extrému pomocí L} \\
& L\left( x , y , \lambda  \right) = \frac{x^3 }{3} - x+ y^2 + \lambda \left(y- 1  \right) \\ \\
& \text{\small{U rovnostních vazeb mi odpadá 3. a 5. bod definice.}} \\
& \nabla L\left( x^{*}  , y^{*} , \lambda ^{*} \right)  = 0 \Leftrightarrow \left( x^2 -1 , 2y+\lambda  , y-1 \right) \quad \text{\small{Zderivovali jsme podle jednotlivých složek}} \\
& = \left( 0 , 0 , 0 \right)  \\
& x = \pm 1 \\
& y = 1 \\
& \lambda = -2 \\
& \text{\small{Z toho máme 2 body podezřelé z extrému:}} \\
& \left( 1 , 1 , -2 \right) \\
& \left( - 1  , 1  , - 2  \right) \\
& \\
& \text{2. Spočteme Hessovu matici } L \\
& \nabla ^2_{x} L\left( x , y , \lambda  \right) =\begin{pmatrix} 2x & 0 \\ 0 & 2 \end{pmatrix} \quad \text{\small{Znovu jsme zderivovali dle toho jak funguje Hessova matice}} \\ \\
& \text{\small{Dosadíme první bod}}  \\
& x^{*} =1 ,y^{*} = 1 ,\lambda ^{*} =- 2 \\
& \nabla ^2_{x} L\left( 1 , 1 , -2 \right)  =\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}  \quad \text{\small{Jen dosadíme }} \\ \\
& \text{\small{Matice je pozitivně definitní}} \Rightarrow \text{\small{V tom bodě je ostré lokální minimum}} \\ \\
& \text{\small{Dosadíme druhý bod}}  \\
& x^{*} =-1 ,y^{*} = 1 ,\lambda ^{*} =- 2 \\
& \nabla ^2_{x} L\left( -1 , 1 , -2 \right)  =\begin{pmatrix} -2 & 0 \\ 0 & 2 \end{pmatrix}   \quad \text{\small{Jen dosadíme }} \\ \\
& \text{\small{Matice je indefinitní}} \Rightarrow \text{\small{Musíme se podívat, jak vypadá gradient}} \\
& \nabla g(x,y) = \left( 0 , 1 \right)\quad \text{\small{Teď budem hledat vektory kolmé na tento}} \\
& v\cdot \left( 0 , 1 \right) = 0 \\
& v = (a,0) \quad a \in \mathbb{R}  \\
& \text{\small{Musíme pronásobit to L těmi vektory}} \\
& \left( a , 0 \right) \begin{pmatrix} -2 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} a \\ 0 \end{pmatrix} = -2a^2 < 0 \\
& -2a^2 <0 \Rightarrow \text{\small{f v bodě nabývá ostrého lokálního maxima vzhledem k vazbě g}} 
\end{flalign*}
$$

### Cvičení 10.3b
![](../../Assets/Pasted%20image%2020241017145332.png)
<!-- Latex Equation -->
$$
\begin{align*}
& L\left( x , y , \lambda  \right) =\frac{x^3 }{3} -x+ y^2 + \lambda (y) \\
& \nabla L\left( x , y , \lambda  \right) \left( x^2 - 1 , 2 y+ \lambda , y \right) =\left( 0 , 0 , 0 \right)  \\
& y = 0, \lambda = 0 ,x= \pm 1  \\
& \text{\small{Body podezřelé z extrému:}}  \\
& \left( 1 , 0 , 0 \right)  \\
& \left( -1 , 0 , 0 \right)  \\
& \text{\small{Hessova Matice}} \\
& \nabla ^2_{x} L\left( x , y , \lambda  \right) =\begin{pmatrix} 2x & 0 \\ 0 & 2 \end{pmatrix} \\
& \nabla ^2_{x} L\left( 1 , 0 , 0 \right)  = \dots  \quad \text{\small{Analogicky jako v příkladě (a)}} \\
& \nabla ^2_{x} L\left( -1 , 0 , 0 \right)  = \dots \quad \text{\small{Analogicky jako v příkladě (a)}} \\
\end{align*}
$$

### Cvičení 10.3c
> [!info] Poznámka
> V tomto cvičení by nám dali na výběr nějaké body a nechtěli by po nás ty stacionární body hledat.

START
FIT-Card

Budou po nás u zkoušky chtít **počítat stacionární body**?

(Tzn. počítat soustavy rovnic o třech neznýmých)
![](../../Assets/Pasted%20image%2020241017150855.png)

Back:

**Ne**, bude to prý fungovat tak, že když to v testu bude, tak nám dají několik bodů a budeme muset **určit**, jestli jsou stacionární nebo ne.

Tzn. **dosadíme body do té soustavy rovnic** a najdeme $\lambda$, aby ta soustava platila.

Nemusíme to hledat, ale jen to dopočítáme (čímž se to ulehčí).

END

---





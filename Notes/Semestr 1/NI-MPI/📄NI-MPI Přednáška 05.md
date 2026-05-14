---
created: 2024-10-17T09:16:59
title: Analýza vázané extrémy - příklady
up: "[[📖NI-MPI]]"
---

TARGET DECK: archive
FILE TAGS: NI-MPI prednaska05 status-toReview analyza3


![](../../../Assets/Pasted%20image%2020241017092333.png)
![](../../../Assets/Pasted%20image%2020241017092348.png)

![](../../../Assets/Pasted%20image%2020241017092358.png)

### Cvičení 10.3a

![](../../../Assets/Pasted%20image%2020241017100307.png)
![](../../../Assets/Pasted%20image%2020241017100433.png)

> [!info] Poznámka
> V tomto případě, jelikož je funkce v rovině rovnoběžné s osou $x$, můžu za $y$ jednoduše do rovnice dosadit $y=1$ a spočíst to jakoby ve $2D$ jako jednoduchou funkci $f(x)$ o jedné proměnné.

<!-- Latex Equation -->

$$
\begin{align*}
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
\end{align*}
$$

### Cvičení 10.3b

![](../../../Assets/Pasted%20image%2020241017145332.png)

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

<!-- Latex Equation -->

$$
\begin{align*} \\
& \nabla _{x}L\left( x , y , \lambda  \right) =\left( x^2 - 1 + 2 \lambda x+ 2 \lambda  , 2 y+ 2 \lambda y \right)  \\
& \text{\small{Máme následující kritické body:}}  \\
& \left( 0 , 0 , \tfrac{1}{2} \right),\left( - 2 , 0 , \tfrac{3}{2}  \right),\left( -1 , 1 , -1 \right) ,\left( -1 , -1,  -1\right)  \\
&  \\
& \text{\small{Spočteme Hessovu Matici}} \\
& \nabla ^2 _{x}L\left( x , y , \lambda  \right) =\begin{pmatrix} 2x+2\lambda  & 0 \\ 0 & 2+2\lambda \\ \end{pmatrix}  \\
& \nabla ^2 _{x}L\left( 0 , 0 , \tfrac{1}{2} \right) = \begin{pmatrix} 1  & 0 \\ 0  & 3 \\ \end{pmatrix} \Rightarrow \left( 0 , 0 \right) \text{\small{ je lok. min. vzhledem k g}} \\
& \nabla ^2 _{x}L\left( - 2  , 0  , \tfrac{3}{2} \right) = \begin{pmatrix} - 1  & 0  \\ 0  & 5 \\ \end{pmatrix} \quad \text{\small{Musíme spočíst gradient}} \\
& \nabla g\left( x , y \right) = \left( 2 x+ 2 , 2 y \right)  \\
& \nabla g\left( -2 , 0 \right) = \left( -2 , 0 \right)  \\
& \left(a,b \right) \cdot \left(-2,0 \right) =-2a+0b=0 \\
& \left( 0 , b \right) \begin{pmatrix} - 1  & 0  \\ 0  & 5  \\ \end{pmatrix} \begin{pmatrix} 0  \\ b \\ \end{pmatrix} =5 b^2 >0 \text{\small{ pro }}  b \neq 0 \Rightarrow \text{\small{ostr. lok.min.}}  \\
&  \\
&  \\
& \nabla ^2 _{x}L\left( - 1  , 1  , - 1  \right) =\begin{pmatrix} - 4  & 0  \\ 0  & 0 \\  \end{pmatrix} \\
& \dots \text{\small{atd. stejně pro další body}}
\end{align*}
$$

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Budou po nás u zkoušky chtít **počítat stacionární body**?

(Tzn. počítat soustavy rovnic o třech neznýmých)
![](../../../Assets/Pasted%20image%2020241017150855.png)

Back:

**Ne**, bude to prý fungovat tak, že když to v testu bude, tak nám dají několik bodů a budeme muset **určit**, jestli jsou stacionární nebo ne.

Tzn. **dosadíme body do té soustavy rovnic** a najdeme $\lambda$, aby ta soustava platila.

Nemusíme to hledat, ale jen to dopočítáme (čímž se to ulehčí).
<!--ID: 1729236692597-->

END

---

### Cvičení 11.1

![](../../../Assets/Pasted%20image%2020241017153209.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \text{Zadání} \\
& f(x,y)=2x^2 + y \\
& h(x,y)=x^2 + y^2 -1 \leq 0  \\
& \\
& \text{Řešení} \\
& L(x,y,\mu) = 2x^2 + y+ \mu \left(x^2 + y^2 + 1  \right)  \\
& \tfrac{\delta L}{\delta x} = 4 x+ 2 \mu x \\
& \tfrac{\delta L}{\delta y} = 1 + 2 y\mu  \\
&  \\
& 2x(2+\mu ) = 0 \begin{cases} x=0 \\ \mu = - 2 \end{cases}   \\ \\
& 1+2y\mu =0  \\
& \text{\small{Platí: }} \mu = 0 \lor x^2 + y^2 = 1 \\
& \text{\small{a) Varianta }} x = 0 \\
& \text{\small{Dostáváme z toho body:}}  \\
& \left( 0 , 1 , -\tfrac{1}{2} \right) \\
& \left( 0  , - 1  , \tfrac{1 }{2 }  \right) \\
& \text{\small{b) Varianta }} \mu =-2 \\
& \text{\small{Dostáváme z toho bod:}}  \\
& \left( \pm \tfrac{\sqrt{15}}{4}, \tfrac{1}{4}, -2 \right)  \\
& \\
& \\
& \text{Spočteme Hessovu Matici} \\
& \nabla ^2 _{x}L\left( x , y , \mu  \right) =\begin{pmatrix} 4 + 2 \mu  & 0  \\ 0  & 2 \mu  \end{pmatrix}  \\
& \\
& \text{Dosadíme body} \\
& \nabla ^2 _{x}\left( 0 , 1 , -\tfrac{1}{2}  \right) =\begin{pmatrix} 3  & 0 \\ 0  & - 1  \end{pmatrix}  \\
& \nabla ^2_{x}L\left( 0  , - 1  , \tfrac{1 }{2 }  \right)  =\begin{pmatrix} 5  & 0  \\ 0  & 1  \end{pmatrix} \\
& \text{\small{Je pozitivně definitní}} \land \text{\small{multiplikátor (ten třetí prvek) je kladný}} \\
& \Rightarrow \text{\small{Je to ostré lokální minimum}}  \\
& \nabla ^2_{x}L\left( \pm \tfrac{\sqrt{15}}{4}, \tfrac{1}{4}, -2 \right)=\begin{pmatrix} 0 & 0 \\ 0 & 4 \end{pmatrix}  \\
& \dots \\
&  \\
& \nabla ^2_{x}\left( 0 , 1 , -\tfrac{1}{2}  \right) =\begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix}  \\
& \nabla h(x,y) = \left(2x,2y \right)  \\
& \nabla h(0,1) = (0,2)  \quad (a,0) \\
& \left( a , 0 \right) \begin{pmatrix} 3 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} a \\ 0 \end{pmatrix} 3a^2 >0  \quad \text{\small{pro }} a \neq 0 \\
& \text{\small{Máme podezření na ostré lokální minimum}}  \\
& \text{\small{\textbf{Pozor!} Máme nerovnostní vazbu a musíme zkontrolovat znaménko multiplikátoru}} \\
& \text{\small{Multiplikátor je záporný, jsem na špatné straně hranice a \textbf{není}  to tedy minimum!}}
\end{align*}
$$

### Cvičení 11.2

> [!info] Poznámka
> Tento příklad je zajímavý v tom, že nám tam vyjdou ty 4 body + ten stacionární bod je uprostřed jako sedlo a ten budeme muset vyloučit.

![](../../../Assets/Pasted%20image%2020241017155638.png)

<!-- Latex Equation -->

$$
\begin{align*}
& \text{Zadání} \\
& f(x,y)=\tfrac{x^3 }{3 } - x+ y^2  \\
& h(x,y)=x^2 + 2 x+ y^2 \leq 0  \\
& \\
& \text{Řešení} \\
& L\left( x , y , \mu  \right) = \tfrac{x^3 }{3 } - x+ y^2 + \mu \left(x^2 + 2 x+ y^2 \right) \\ \\
& \text{Když je vazba aktivní} \\
& \text{\small{Pro }} h(x,y)=0 \text{\small{ už máme body nalezené z předchozích úloh}} \\
& \left( x^{*} , y^{*}  , \mu ^{*}  \right) \in \set{\left( 0 , 0 , \tfrac{1}{2} \right),\left( -2 , 0 , \tfrac{3}{2}  \right) \left( -1 , 1 , -1 \right),\left( -1 , -1 , -1 \right)  } \\
& \\
& \text{Když vazba není aktivní} \\
& \text{\small{Je to to samý, jako kdybychom řešili tu úkolu \textbf{bez} té vazby.}}  \\
& \nabla_{x} L\left( x , y , 0 \right) = 0 \Leftrightarrow \begin{cases} x^2 - 1 = 0  && x= \pm 0  \\ 2 y= 0 && y= 0  \\
\end{cases}  \\
& \text{\small{Z toho dostanu body:}}  \\
& \left( 1 , 0 \right)  \\
& \left( -1 , 0 \right)  \\
& \text{\small{Musím ověřit že body splňují vazební podmínku }} h(x,y) \\
& \left( 1 , 0 \right) \quad \text{\small{Nesplňuje}} \\
& \left( -1 , 0 \right) \quad \text{\small{Splňuje}} \\
& \nabla ^2_{x}L(x,y)=\begin{pmatrix} 2 x & 0  \\ 0  & 2  \end{pmatrix}  \\
& \nabla ^2_{x}L(-1,0)=\begin{pmatrix} -2 & 0 \\ 0 & 2 \end{pmatrix}  \\
& \Rightarrow \text{\small{Vidíme, že to je indefinitní matice}}  \\
& \Rightarrow \text{\small{Když jsem uvnitř vazby a dostaneme sedlový bod,}}  \\
& \text{\small{ tak automaticky víme, že to není minimum nebo maximum!}}
\end{align*}
$$

<!--
Exam Note ID: NI-SPOL-03
Exam Note Section Name: Definitnost matic
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Když při **hledání extrémů** **nemáme aktivní vazbu** a vyjde nám **indefinitní matice**, co to znamená? Jaký **závěr** z toho můžeme vyvodit?
$$\nabla ^2_{x}L(-1,0)=\begin{pmatrix} -2 & 0 \\ 0 & 2 \end{pmatrix}$$

Back:

Vidíme, že matice je **indefinitní**. Jelikož je mimo aktivní vazbu (je uvnitř), znamená to, že to je **sedlový bod** a kvůli tomu to **nemůže** být **minimum** ani **maximum**.

<!-- ExplanationStart -->

Je to protože budou existovat body, které jsou **výše** nebo **níže**.
![](../../../Assets/Pasted%20image%2020241017162130.png)

**Červený** je ten stacionární bod, kde je matice **indefinitní**.
**Zelený** jsou ty ostatní stacionární body.

<!-- ExplanationEnd -->
<!--ID: 1729236692608-->

END

---

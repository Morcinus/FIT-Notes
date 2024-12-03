---
created: 2024-12-03T14:34:13
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI cviceni11 status-toReview

### Cvičení 18.7
<!-- Latex Equation -->
$$
\begin{align*}
& A = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} \\
& A^2 = A \cdot a = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}  \\
& A^3 =A^2 \cdot A = \begin{pmatrix} 1 & 0 & 3 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}  \\
& A^{k} = \begin{pmatrix} 1 & 0 & k \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}  \\
& A^0 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}  \\
& A^{-1} = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}  \\
& \text{\small{Zkouška:}}  \\
& A^{-1} \cdot A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix} = E \\
& \\
& \text{Grupa} \\
& \left(\set{A^k = \begin{pmatrix} 1 & 0 & k \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}, k \in \mathbb{Z}}, \cdot \right) \\
& \text{\small{a) Je cyklická?}} \\
& \text{\small{Je, generátor A.}} \\
& \text{\small{b) Je cyklická grupa }} \left(\mathbb{R}_{reg}^{3,3}, \cdot \right) \\
& \text{\small{Není.}} 
\end{align*}
$$

### Cvičení 18.11
<!-- Latex Equation -->
$$
\begin{align*}
& f,g \in S_{q} \\
& f = (2,4,5,6,3,1,8,9,7) \\
& g = (8,1,5,2,6,3,7,9,4) \\
& \text{\small{a) }} f \circ g = (9,2,3,4,1,5,8,7,6) \\
& \\
& \text{\small{b) }} \langle f \rangle \\
& e = (1,2,3,4,5,6,7,8,9) \\
& a = (\textcolor{Red}{2} ,\textcolor{Red}{4} ,3,\textcolor{Red}{6} ,5,\textcolor{Red}{1} ,7,8,9) \\
& b = (1,2,\textcolor{Red}{5},4,\textcolor{Red}{3} ,6,7,8,9) \\
& c = (1,2,3,4,5,6,\textcolor{Red}{8,9,7}) \\
& f = a \circ b \circ c=c \circ b \circ a \\
& f^{n} = (a \circ b \circ c)^{n} = a \circ b \circ c \circ a \dots \circ c = a ^{n} \circ b^{n} \circ c^{n}  \\
& f^{k} = e = a^{k} \circ b^{k} \circ c^{k}  \\
& k = \mathrm{lcm} (2,3,4)=12 \\
& \langle f \rangle \set{e,f,f^{1} ,\dots ,f^{n}} \subset S_{9} \\
& S_{9} \dots \text{\small{grupa všech permutací 9 prvků}} \\
& \\
& \text{\small{c) }} f^{100} \circ g^{100} =  \\
& f^{100} = f^{4} \quad \text{\small{Díky }} 100 \pmod{12} \\
& f^{4} = a^{n}\circ b^{n}\circ c^{n} = e \circ e \circ c = c \\
& \text{\small{Cyklus g:}}  \\
& r = (\textcolor{Red}{8} ,\textcolor{Red}{1}, 3, \textcolor{Red}{2}, 5,6,7, \textcolor{Red}{9}, \textcolor{Red}{4}) \\
& s = (1,2, \textcolor{Red}{5}, 4, \textcolor{Red}{6}, \textcolor{Red}{3}, 7,8,9 ) \\
& u = (1,2,3,4,5,6,7,8,9) = e \\
& g^{100} = g^{10} \quad 100 \pmod{15} \\
& g^{10} = r^{10}\circ s^{10} \circ u^{10} = e \circ s \circ e = s \\
& f^{100} \circ g^{100} = c \circ s = (1,2,5,4,6,3,8,9,7) \\
\end{align*}
$$

### Cvičení 18.12
<!-- Latex Equation -->
$$
\begin{align*}
& a,b \in G \\
& a^{3} = e \\
& b^{3} =e \\
& c = a \circ b \quad c^{3} \neq e \quad c \neq e \\
& c^{3} =  (a \circ b)\circ (a \circ b)\circ (a \circ b)= a \circ b \circ a \circ b \circ a \circ b \\
& \text{\small{pokud je komutativní }} \circ \\
& = a \circ a \circ a \circ b\circ b\circ b = a^{3} \circ b^{3} = e \circ e = e  \\
& \circ \text{\small{ musí být nekomutativní, tedy grupa není abelovská}} \\
&  \\
& a = \left(2,3,1,4 \right)  \quad a^{3} = e  \quad \mathrm{ord}(a)=3 \\
& b = \left(1,3,4,2 \right) \quad  b^{3} =e  \quad \mathrm{ord}(b)=3  \\
& a \circ b = \left(2,1,4,3 \right) \neq e  \quad \mathrm{ord}(a\circ b) = 2 \\
& G = S_{4} \\
& 
\end{align*}
$$

### Cvičení 19.1
<!-- Latex Equation -->
$$
\begin{align*}
& \mathbb{Z}_{23}^{\times}  \quad \# \mathbb{Z}_{23}^{\times} = 22 \\
& M = \set{1,2,\dots ,22}  \\
& p(\text{\small{generátor}}) = \tfrac{\text{\small{počet generátorů}} }{\# \mathbb{Z}_{23}^{\times}}  \\
& \text{\small{Potřebujem 2 věci: }}  \\
& \text{\small{1. Je grupa cyklická? Ano z věty 31.6 - }} p^1   \\
& \Rightarrow \text{\small{Má generátor}} \\
& \text{\small{Platí }} a^{k} \text{\small{je generátor}} \Leftrightarrow \gcd(k,n) = 1  \quad k \text{\small{ je nesoudělné s n, n je řád grupy}} \\
& 22=11 \cdot 2 \\
& k \in \set{1,3,5,7,9,13,15,17,19,21}  \\
& \varphi(22) = \varphi(11) \varphi(2) = 10 \cdot 1 = 10 \\
&  \\
&  p(\text{\small{generátor}}) = \tfrac{\text{\small{počet generátorů}} }{\# \mathbb{Z}_{23}^{\times}} = \tfrac{10}{22} =\tfrac{5}{11}
\end{align*}
$$

### Cvičení 19.5
<!-- Latex Equation -->
$$
\begin{align*}
& \mathbb{Z}_{18}^{\times} = \left(M, \times_{18}  \right) \\
& M = \set{1,5,7,11,13,17} \\
& \varphi(18) = \varphi(3^{2}) \varphi(2) = (9-3) \cdot 1 = 6 \\
& \text{\small{Má generátory?}}  \\
& 18=2 \cdot 3^{2} = 2p^{k} \Rightarrow \text{\small{Z věty 31.6 je cyklická}}  \\
& \text{\small{Věta 31.7 Kolik generátorů?}}  \\
& 6 = 2 \cdot 3 \\
& \varphi(6)=2\cdot 1=2 \\
& k \in \set{1,5}  \\
& \text{\small{Je 5 generátor?}}  \\
& \begin{rcases}5^{2} = 7 \\5^{3} = 17 \end{rcases} \neq 1 \Rightarrow \text{\small{z Lagrangeovy věty}} \Rightarrow 5 \text{\small{ je generátor}} \\
& 5^{1} = 5 \\
& 5^{5} = 5^{3} \cdot 5^{2} =17 \cdot 7=11
\end{align*}
$$
### Cvičení 19.6
<!-- Latex Equation -->
$$
\begin{align*}
& \mathbb{Z}_{30}^{\times} = \left(M, \times_{30}  \right) \\
& M = \set{1,7,11,13,17,19,23,29} \\
& \varphi(30) = 1 \cdot 2 \cdot 4 = 8 \\
& \text{\small{Z věty 31.6 }}  \mathbb{Z}_{30}^{\times} \text{\small{ není cyklická}} \Leftrightarrow \text{\small{nemá generátory}} \\
\end{align*}
$$

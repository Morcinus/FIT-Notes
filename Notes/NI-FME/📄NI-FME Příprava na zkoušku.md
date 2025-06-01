---
created: 2025-05-31T12:10:52
title: "Příprava ke zkoušce"
up: "[[📖NI-FME]]"
---

TARGET DECK: NI-FME-Exam
FILE TAGS: NI-FME-Exam prednaskaxx status-toReview


START
FIT-Card

Co při důkazech dělat když máme:
$$A \land B$$
v části **assumptions**?

Back:

Zvlášť dokázat $A$ a $B$

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$A \lor B$$
v části **assumptions**?

Back:

Assume $\neg A$ a dokázat $B$ 

(nebo obráceně - podle toho co se mi víc hodí)

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$A \Rightarrow B$$
v části **assumptions**?

Back:

Assume $A$ a dokázat $B$

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$\neg A$$
v části **assumptions**?

Back:

Assume $A$ a zkusit najít kontradikci

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$A \land B$$
v části **to prove**?

Back:

Dáme do assumptions $A$ i $B$

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$A \lor B$$
v části **to prove**?

Back:

Rozdělíme příklad na dvě části:
- V první assumneme $A$ a dokončíme důkaz
- V druhé assumneme $B$ a dokončíme důkaz

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$A \Rightarrow B$$
v části **to prove**?

Back:

Pokud platí $A$, dáme do assumptions i $B$

END

---


START
FIT-Card

Co při důkazech dělat když máme:
$$\exists x . A$$
v části **assumptions**?

Back:

Vybereme **term** $t$ a přiřadíme ho $x \leftarrow t$

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$\forall x . A$$
v části **assumptions**?

Back:

Vybereme **konstantu** $c$ a přiřadíme ji $x \leftarrow c$

END

---



START
FIT-Card

Co při důkazech dělat když máme:
$$\exists x . A$$
v části **to prove**?

Back:

Vybereme **konstantu** $c$ a přiřadíme ji $x \leftarrow c$

END

---

START
FIT-Card

Co při důkazech dělat když máme:
$$\forall x . A$$
v části **to prove**?

Back:

Vybereme **term** $t$ a přiřadíme ho $x \leftarrow t$

END

---


START
FIT-Card

Co značí jednotlivé argumenty $write$ u pole?

![](../../Assets/Pasted%20image%2020250531144520.png)

Back:

1. $a$ - pole do kterého zapisujeme
2. $i$ - index na který zapisujeme
3. $v$ - hodnotu kterou zapisujeme
4. $[j]$ - přistupujeme k $j$-tému prvku vytvořeného pole

Pozn. ta (4) tam nemusí být - to je jen spojené vytvoření pole a potom přístup k prvku

END

---


START
FIT-Card

Jaké jsou **axiomy pro pole** vlastními slovy? (3)

![](../../Assets/Pasted%20image%2020250531144407.png)

Back:

1. Pokud se rovnají indexy, potom se rovná hodnota, když přistupujeme k danému místu pole s těmi indexy
2. Pokud se indexy nerovnají, potom když zapíšeme prvek na $i$-tou pozici, tak to nezmění prvek na $j$-té pozici
3. Pokud se rovnají všechny prvky pole, tak se pak pole rovnají

END

---


START
FIT-Card

Jak ověřit ověřovací podmínku?

Back:

1. **Provedeme SSA** - buď v hlavě a nebo podle algoritmu
2. **Sestavíme ověřovací podmínku**
3. **Tu dokážeme že platí**

END

---


START
FIT-Card

Jak sestavit invariant ve smyčce?

![](../../Assets/Pasted%20image%2020250601103909.png)

Back:

**Pro invariant musí platit:**
1. Platí v první iteraci cyklu
2. Platí v jakékoliv iteraci cyklu
3. Platí i po dokončení cyklu

Plus v tomto příkladu je za cyklem assertion $@ \ l \gt 0$, takže ta musí být splněna taky.

![](../../Assets/Pasted%20image%2020250601111550.png)

END

---


START
FIT-Card

Když máme tento příklad, jak dojdeme k tomu, jestli je program "správný"?

![](../../Assets/Pasted%20image%2020250601111358.png)

Back:

Program je správný, pokud pro každou základní cestu platí její verifikační podmínka.

![](../../Assets/Pasted%20image%2020250601111458.png)

END

---


START
FIT-Card

Kdy je program partially correct?

Back:

Když všechny asserty platí při všech bězích programu

![](../../Assets/Pasted%20image%2020250601163921.png)

END

---


START
FIT-Card

When does a program terminate?

Back:

Když každý loop má konečně mnoho iterací.

Tzn. v loopu:
- máme proměnnou $v$, která se neustále snižuje

![](../../Assets/Pasted%20image%2020250601151954.png)

END

---


START
FIT-Card

Co je nejslabší a nejsilnější předpodmínka?

Back:

**Předpodmínka** = assume na začátku, co obsahuje všechny volné proměnné programu a jsou splněny všechny asserty (aka program je správný)

- **nejslabší** = ta, co je nejméně omezující, aby program ale stále platil

Např. 
$\textbf{assume } n \in N_0$ je nejslabší
$\textbf{assume } n \in (0,1)$ je silnější (můžu z toho vyvodit další věci)
$\textbf{assume} ⊥$ je nejsilnější (program program se nikdy nespustí, tzn. všechny asserty jsou splněny a je program korektní)

END

---

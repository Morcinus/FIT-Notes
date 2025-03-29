---
created: 2025-03-29T08:51:39
title: "Testování hypotéz"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska12 status-toReview


START
FIT-Card

Jak se provede test $\chi^2$ při neznámých parametrech?

Back:

![](../../Assets/Pasted%20image%2020250329084711.png)
![](../../Assets/Pasted%20image%2020250329084725.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250329084734.png)
![](../../Assets/Pasted%20image%2020250329084741.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Kolik prvků musí být "v každém chlívečku" u Chí kvadrát rozdělení?

Back:

V každém chlívečku by mělo být 5 prvků, aby se to blížilo nekonečnu.

![](../../Assets/Pasted%20image%2020250329113530.png)

END

---



START
FIT-Card

Definice: **kontingenční tabulka**

Back:

![](../../Assets/Pasted%20image%2020250329084806.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250329084822.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250329084831.png)
<!-- DetailInfoEnd -->

<!-- ExplanationStart -->
Background:
Řekněme, že máme test, uděláme si "chlívečky", ale po tom, co naměříme data, tak nám hodně chlívečků vyjde s méně prvky než 5.

V tu chvíli musím udělat to, co je statisticky trošku shady, a to je že ty chlívečky připravím podle toho, jaká jsou ty data.

Prý to je podobné jako když si natrénuju AI na nějaké množině dat a pak když to testuju, tak to testuju opět na té množině. Není to vyloženě chyba, ale bude mi to pak dávat trochu jiný výsledky.

Matice kontingenční tabulky:
Funguje to jako v předchozím případě, akorát pro dva rozměry - udělám si "chlívečky" ve 2d a sleduju kam se mi jaký vektor trefí. Pak to jen posčítám a udělám z toho statistiku

Vysvětlení vzorečku:
- Vždy bereme co jsme naměřili a odečteme od toho, co máme v nulové hypotéze

<!-- ExplanationEnd -->


END

---


START
FIT-Card

Jak se provádí test nezávislosti v kontingenčních tabulkách?

Back:

![](../../Assets/Pasted%20image%2020250329084855.png)

<!-- ExerciseStart -->
![](../../Assets/Pasted%20image%2020250329084907.png)
<!-- ExerciseEnd -->

END

---


START
FIT-Card

Co jsou testy NIST?

(Hrabák říkal, že se na to nebude tak moc ptát, že prý to bylo do předmětu zařazený na žádost lidí z jiné katedry :D)

Back:

Sada testů, která testuje, jestli generátor pseudonáhodných čísel je dostatečně dobrý - jestli skutečně dává nezávislá čísla.

Každý test testuje jiný aspekt té náhodnosti. My otestujeme všechno a všechny musíme nezamítnout (aby to prošlo).

Jsou v tom např. testy:
- Bloky nad/pod střední hodnotou
- Bloky nahoru/dolů

![](../../Assets/Pasted%20image%2020250329084927.png)

END

---


START
FIT-Card

Jak fungují bloky nad/pod střední hodnotou?

(Hrabák říkal, že se na to nebude tak moc ptát, že prý to bylo do předmětu zařazený na žádost lidí z jiné katedry :D)

Back:

Vytváříme bloky - vždy když podlezu nebo přelezu střední hodnotu, tak vytvořím nový blok (viz obrázek).

Počet bloků má cca normální rozdělení

![](../../Assets/Pasted%20image%2020250329084948.png)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250329130403.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Jak fungují bloky nahoru/dolů?

(Hrabák říkal, že se na to nebude tak moc ptát, že prý to bylo do předmětu zařazený na žádost lidí z jiné katedry :D)

Back:

Assumujeme, že pravděpodobnost, že dvě posobě jsou stejné je 0.

Dokud klesám/stoupám, jsem v jednom bloku.

![](../../Assets/Pasted%20image%2020250329085004.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250329085016.png)
<!-- DetailInfoEnd -->


END

---



START
FIT-Card

Definice: Co je histogram?

Back:

![](../../Assets/Pasted%20image%2020250329085347.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250329085356.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Definice: Jádrový odhad

Back:

Posadím na každý bod "jádro" - nějakou funkci (třeba normální rozdělení). Potom hodnoty posčítám a vyjde mi spojitá funkce.

![](../../Assets/Pasted%20image%2020250329085406.png)
![](../../Assets/Pasted%20image%2020250329085419.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250329085427.png)
<!-- ExampleEnd -->


END

---

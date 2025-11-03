---
created: 2025-03-29T08:51:39
title: "Testování hypotéz"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska12 status-toReview blue


START
FIT-Card

(FIT-Notes flashcard)

Jak se provede **test $\chi^2$ multinomického rozdělení při neznámých parametrech**?

Back:

Stejné jako při známých parametrech, akorát neznáme parametry daného rozdělení, takže parametry odhadneme a ty pak do testu dosadíme

![](../../../Assets/Pasted%20image%2020250520122726.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250329084725.png)
![](../../../Assets/Pasted%20image%2020250329084711.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250329084734.png)
![](../../../Assets/Pasted%20image%2020250329084741.png)

<!-- ExampleEnd -->
<!--ID: 1746518364800-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kolik prvků musí být "v každém chlívečku" u Chí kvadrát rozdělení?

Back:

V každém chlívečku by mělo být 5 prvků, aby se to blížilo nekonečnu.

![](../../../Assets/Pasted%20image%2020250329113530.png)
<!--ID: 1746518364802-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: **kontingenční tabulka** a **matice pravděpodobností**

Back:

1. Máme náhodný vektor $X=(Y,Z)^T$ - tzn. sledujeme 2 dimenze (např. pohlaví a oblíbený nápoj)
2. **Kontingenční tabulka** je tabulka s těma 2 dimenzema a naměřenýma hodnotama
3. **Matice pravděpodobností** je pak tabulka, kterou spočteme z té kontingenční. Říká nám, jaká je pravděpodobnost, že se trefíme do daného chlívečku

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250329084822.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250329084806.png)

![](../../../Assets/Pasted%20image%2020250329084831.png)

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
<!--ID: 1746518364805-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se provádí **test nezávislosti v kontingenčních tabulkách**?

Back:

Testujeme že se rovnají naměřené pravděpodobnosti očekávaným pravděpodobnostem

![](../../../Assets/Pasted%20image%2020250520124014.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250329084855.png)

<!-- DetailInfoEnd -->

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250329084907.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364808-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou testy NIST?

(Hrabák říkal, že se na to nebude tak moc ptát, že prý to bylo do předmětu zařazený na žádost lidí z jiné katedry :D)

Back:

Sada testů, která testuje, jestli generátor pseudonáhodných čísel je dostatečně dobrý - jestli skutečně dává nezávislá čísla.

Každý test testuje jiný aspekt té náhodnosti. My otestujeme všechno a všechny musíme nezamítnout (aby to prošlo).

Jsou v tom např. testy:

- Bloky nad/pod střední hodnotou
- Bloky nahoru/dolů

![](../../../Assets/Pasted%20image%2020250329084927.png)
<!--ID: 1746518364810-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují bloky nad/pod střední hodnotou?

(Hrabák říkal, že se na to nebude tak moc ptát, že prý to bylo do předmětu zařazený na žádost lidí z jiné katedry :D)

Back:

Vytváříme bloky - vždy když podlezu nebo přelezu střední hodnotu, tak vytvořím nový blok (viz obrázek).

Počet bloků má cca normální rozdělení

![](../../../Assets/Pasted%20image%2020250329084948.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250329130403.png)

<!-- ImageEnd -->
<!--ID: 1746518364813-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují bloky nahoru/dolů?

(Hrabák říkal, že se na to nebude tak moc ptát, že prý to bylo do předmětu zařazený na žádost lidí z jiné katedry :D)

Back:

Assumujeme, že pravděpodobnost, že dvě posobě jsou stejné je 0.

Dokud klesám/stoupám, jsem v jednom bloku.

![](../../../Assets/Pasted%20image%2020250329085004.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250329085016.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518364816-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Co je histogram?

Tohle imo prostě nemá cenu se nějak víc učit - je to to, co člověk dělá intuitivně a Hrabák to jen zmínil

Back:

![](../../../Assets/Pasted%20image%2020250329085347.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250329085356.png)

<!-- ExampleEnd -->
<!--ID: 1746518364818-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Definice: Jádrový odhad

Tohle Hrabák říkal, že jen tak zmínil, ale že to nebudem probírat

Back:

Posadím na každý bod "jádro" - nějakou funkci (třeba normální rozdělení). Potom hodnoty posčítám a vyjde mi spojitá funkce.

![](../../../Assets/Pasted%20image%2020250329085406.png)
![](../../../Assets/Pasted%20image%2020250329085419.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250329085427.png)

<!-- ExampleEnd -->
<!--ID: 1746518364821-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou Gaussovské směsi?

Tohle Hrabák říkal, že jen tak zmínil ve slidech, ale ani jsme to na přednášce neprobírali

Back:

![](../../../Assets/Pasted%20image%2020250411135458.png)

<!-- ExerciseStart -->

![](../../../Assets/Pasted%20image%2020250411135510.png)

<!-- ExerciseEnd -->
<!--ID: 1746518364824-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Přehled: Jaké všechny statistické testy jsme ve VSM probírali? (6)

Back:

Testy bez použití testové statistiky:

- **Pro střední hodnotu**
  - $\mu$ při známém rozptylu
  - $\mu$ při neznámém rozptylu

Základní test:

- **Jednoduchý test** - testujeme jestli $\mu$ nebo $\sigma^2$ odpovídá odhadům
  - $\mu$ při známém rozptylu
  - $\mu$ při neznámém rozptylu
  - $\sigma^2$

Více rozdělení:

- **Párový t-test** - testujeme $\mu_1 = \mu_2$, páry
  - při neznámém rozptylu (ten odhadnem z $Z$)
- **Dvouvýběrový t-test** - testujeme $\mu_1 = \mu_2$, může být různé množství
  - $\mu$ při stejných rozptylech $\sigma_1^2 = \sigma_2^2$
  - $\mu$ při různých rozptylech $\sigma_1^2 \neq \sigma_2^2$

Multinomické rozdělení:

- $\chi^2$ **test Multinomického rozdělení**
  - $p'=p$ při známých parametrech
  - $p'=p$ při neznámých parametrech
- **Kontingenční tabulka** - porovnáváme pravděpodobnosti
<!--ID: 1747739265159-->

END

---

---
created: 2025-04-15T14:55:13
title: "Expansion, Harvesting and Rejuvenation"
up: "[[📖NI-NSS]]"
---

TARGET DECK: archive
FILE TAGS: NI-NSS prednaska07 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Advanced Transformation** (aka vytvoření elementu)?

Back:

1. Máme nějaký **požadavek** na třídu
2. My uděláme tu **třídu**, uděláme encapsulation (version transparent)
3. Obklopíme třídu **dalšími třídami**, které bude třída využívat (tyto třídy pak např. komunikují s externími knihovnami nebo frameworky)
4. Díky tomu jsme vytvořili **Element** (což je skupina tříd)
<!--ID: 1746599654213-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Expansion**?

Back:

Pro každý element máme **template**. Z toho se pak udělá jeho **instance** na základě **parametrů** - požadavků, co jsme vytvořili v modelu/mirroru.
<!--ID: 1746599654221-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **updatování Element Structure**?

Back:

- Každý element mi například používá pomocí nějaké třídy externí knihovnu
- Když se ale rozhodnu tuto knihovnu změnit, musím změnit každý element, co mi tuto knihovnu využívá

Klíčový problém:

- Čím častěji updatuju struktury, tím více práce mám s tím updatováním
- Čím méně často updatuju struktury, tím více mi systém zastarává (protože např. nepoužívá nové technologie)

Proto je potřeba používat code generators, aby:

- Mi přegenerovaly struktury
- Ale aby mi zachovali custom kódy
<!--ID: 1746599654231-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Harvesting process**?

Back:

Máme nějakou codebase a chci udělat změnu. Než se přegenerují elementy, je potřeba "harvestnout" craftings (aka custom kódy a třídy), co mám v codebase a následně je injektovat zpátky (**rejuvenation**) na stejná místa, až se přegenerují elementy.

![](../../../Assets/Pasted%20image%2020250415151202.png)
<!--ID: 1746599654239-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou základní **4 dimenze variability NSS softwaru**?

Back:

![](../../../Assets/Pasted%20image%2020250415151425.png)
<!--ID: 1746599654246-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Čeho se docílí, pokud jsou dimenze softwaru správně separované?

Back:

Díky tomu nám potom množství verzí, které je třeba **udržovat**, **roste aditivně**, zatímco množství **dostupných verzí roste multiplikativně**.

Neboli co se to snaží říct je, že když máme code generation, separaci dimenzí a další úžasný NSS věci, tak můžu např. místo několika databází MySQL, Postgres, Mongo atd. to brát jako jednu kategorii "databáze". Tudíž pak můžu ten můj projekt vygenerovat s různými databázemi. To samé pro ostatní kategorie.

Takže:

- Udržujeme **aditivní** počet verzí - kategorie "databáze", "ui" atd.
- Ale máme **multiplikativní** množství softwarů co můžeme vygenerovat

Tbh mi to zní jako docela too good to be true a docela by mě zajímal ten shitstorm, co bude probíhat v pozadí toho "udržování" softwaru - Morčín :D

![](../../../Assets/Pasted%20image%2020250415151445.png)

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250415151632.png)

<!-- ExampleEnd -->
<!--ID: 1746599654253-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje deployment elementů napříč appliaction layers?

Back:

Různé třídy v rámci elementu se hodí například do různých layers v layered architecture.

V runtimu jsou pak ty třídy seskupeny do daných layers (v runtimu to není packagnutý v rámci toho jednoho elementu, ale rozhází se to do jednotlivých vrstev)

![](../../../Assets/Pasted%20image%2020250415151708.png)
![](../../../Assets/Pasted%20image%2020250415152048.png)
<!--ID: 1746599654260-->

END

---

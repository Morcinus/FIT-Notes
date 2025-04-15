---
created: 2025-04-15T14:55:13
title: "Expansion, Harvesting and Rejuvenation"
up: "[[📖NI-NSS]]"
---

TARGET DECK: NI-NSS
FILE TAGS: NI-NSS prednaska07 status-toReview


START
FIT-Card

Jak funguje **Advanced Transformation**?

Back:

1. Máme nějaký požadavek na třídu
2. My uděláme tu třídu, uděláme encapsulation (version transparent)
3. Obklopíme třídu dalšími třídami, které bude třída využívat (tyto třídy pak např. komunikují s externími knihovnami nebo frameworky)
4. Díky tomu jsme vytvořili Element (což je skupina tříd)

END

---


START
FIT-Card

Jak funguje Expansion?

Back:

Máme:
- Element Template
	- Z toho se pak udělá instance Elementu
	- Pro každý typ elementu máme jiný template
- Pro každou ElemenTemplate Classu

END

---


START
FIT-Card

Jak funguje updatování Element Structure?

Back:

- Každý element mi například používá pomocí nějaké třídy externí knihovnu
- Když se ale rozhodnu tuto knihovnu změnit, musím změnit každý element, co mi tuto knihovnu využívá

Klíčový problém:
- Čím častěji updatuju struktury, tím více práce mám s tím updatováním
- Čím méně často updatuju struktury, tím více mi systém zastarává (protože např. nepoužívá nové technologie)

Proto je potřeba používat code generators, aby:
- Mi přegenerovaly struktury
- Ale aby mi zachovali custom kódy

END

---


START
FIT-Card

Co je Harvesting process?

Back:

Máme nějakou codebase a chci udělat změnu. Než se přegenerují elementy, je potřeba "harvestnout" craftings (aka custom kódy a třídy), co mám v codebase a následně je injektovat zpátky (**rejuvenation**) na stejná místa, až se přegenerují elementy.

![](../../Assets/Pasted%20image%2020250415151202.png)

END

---


START
FIT-Card

Jaké jsou základní 4 dimenze softwaru?

Back:

![](../../Assets/Pasted%20image%2020250415151425.png)

END

---


START
FIT-Card

Čeho se docílí, pokud jsou dimenze softwaru správně separované?

Back:

Díky tomu nám potom množství verzí, které je třeba udržovat aditivně, zatímco množství dostupných verzí multiplikativní

![](../../Assets/Pasted%20image%2020250415151445.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250415151632.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Jak funguje deployment elementů napříč appliaction layers?

Back:

Různé třídy v rámci elementu se hodí například do různých layers v layered architecture.

V runtimu jsou pak ty třídy seskupeny do daných layers (v runtimu to není packagnutý v rámci toho jednoho elementu, ale rozhází se to do jednotlivých vrstev)

![](../../Assets/Pasted%20image%2020250415151708.png)
![](../../Assets/Pasted%20image%2020250415152048.png)

END

---

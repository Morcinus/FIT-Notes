---
created: 2025-09-29T13:39:16
title: "User Interface Design"
up: "[[📖NI-NUR]]"
---

TARGET DECK: NI-NUR
FILE TAGS: NI-NUR prednaska02 status-toReview


START
FIT-Card

Jaké je pravidlo ohledně zadavatele projektu?

Back:

Zadavatel nikdy neví, co chce :D

END

---


START
FIT-Card

Jaké jsou kroky designu?

Back:

1. **Basic product statement** - o čem projekt bude
2. **Business requirements**
3. **Persony**, jací uživatelé dělají jaké tasks
4. **User research** - use cases (přesně popsaný, co se děje)
5. **Lo-Fi prototyp**
6. **Hi-Fi prototyp**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250929134642.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak vypadá product statement?

Back:

**Být schopný odpovědět na**:
- co dělám (za produkt)
- co ten produkt dělá
- pro koho je ten projekt určen

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250929134805.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co jsou **business requirements**?

Back:

Dělí se na **funkční** a **nefunkční požadavky** (jako z SIček).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250929135033.png)
![](../../Assets/Pasted%20image%2020250929135053.png)
<!-- DetailInfoEnd -->


END

---

### Persony


START
FIT-Card

Co jsou v zásadě persony?

Back:

Formalizace určitých lidských vlastností.

<!-- DetailInfoStart -->
Je to důležité, protože si tím člověk vytváří **model** toho, jak ti lidé vypadají.

Tohle lidi dělají odjakživa (bohové, příběhy atd.).
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Měl by si člověk personu vymyslet nebo ji brát z existujících lidí?

Back:

Většinou by člověk měl dělat persony na zákadě typického uživatele, který už existuje.

ALE teoreticky lze i vyloženě na trhu vytvořit novou pesonu (jako Elon Musk vytvořil novou personu - člověka co chce elektro auto)

END

---


START
FIT-Card

Jak člověk najde persony? (2 způsoby)

Back:

Měl by je na trhu skutečně najít ty lidi.

- **Dotazníky** - ptáme se lidí, jaké jsou jejich hlavní problémy, potřeby, přání
- **Observace** - pokud jsou existující solutions, můžu je zkoumat - jak to funguje, jaké jsou issues, gaps, co by mohlo být lepší, jaké to má barvy

END

---


START
FIT-Card

Jaké jsou typické vlastnosti u person, které zkoumáme?

Back:

- **Jméno**
- **Age**
- **Gender**
- **Hobbies**
- **Typický den** - dá mi info např. kdy a jak by to uživatel používal
- **Short history**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250929140903.png)
![](../../Assets/Pasted%20image%2020250929140914.png)
![](../../Assets/Pasted%20image%2020250929140932.png)<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké navíc vlastnosti mohou být u Persony A?

Back:

- **Goals**: co jsou jeho cíle
- **Pain points**: jaké jsou jeho problémy

END

---



START
FIT-Card

Proč je věk důležitý u person?

Back:

Čím je člověk starší, tím méně je adaptivní.

END

---


START
FIT-Card

Proč jsou důležité **koníčky** a **typický den** u person?

Back:

Definují **chování** toho člověka, jak žije, **jak funguje** (např. ráno venčí psa -> v té době může používat appku apod.)

END

---


START
FIT-Card

Jaký je typicky Persona typu A a Persona typu B? 

Back:

Např. web fitu
- je primárně pro studenty - pro ty to hlavně vytváříme
- je sekundárně pro učitele

END

---


START
FIT-Card

Co je klíčové u Persony typu B?

Back:

Není pro ně primárně určené, ale s určitým painem jsou schopný tu aplikaci používat pro svoje účely. 

END

---


START
FIT-Card

Co nám poskytuje persona?

Back:

**Mentální model uživatele**

END

---


START
FIT-Card

Co je **mentální model uživatele**?

Back:

je to jakýsi program, který máme v mozku, podle kterého se chováme

Každý má v mozku jiné "algoritmy", jinak se dívají na svět apod.

END

---


START
FIT-Card

Jaké informace bychom měli dávat do person?

Back:

Takové, které nám jsou k **něčemu užitečné**.

<!-- ExampleStart -->
Např. je mi jedno, kolik ten člověk má dětí, když dělám nějakej eshop nebo tak
<!-- ExampleEnd -->


END

---

### Use Cases


START
FIT-Card

Jaký byl vývoj use casů v Historii?

Back:

- **Fully dressed** - ty klasické UML use casy, co byly mega podrobný (preconditions atd.) - ale to bylo zbytečně komplikovaný, milion duplicit a nepotřebných informací apod.
- **Cockburn's update** - rozdělil to do několika typů use casů a zjednodušil to (viz detail)
- **Casual** - Je to méně detailní než fully dressed use case. Má to tyto atributy: Title (goal), Primary Actor, Scope, Level, a optional Story (viz detail)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250929141311.png)
![](../../Assets/Pasted%20image%2020250929141359.png)
![](../../Assets/Pasted%20image%2020250929141614.png)

<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak se liší NI-NUR use casy od UML use casů? 

Back:

UML use casy správně obsahují milion detailů (preconditions atd.) - kvůli tomu se to přestalo tolik používat

END

---


START
FIT-Card

Jak se píše **Use Case** v NUR?

Back:

**Očekávání uživatele** - např. píšeme, že uživatel očekává, že tam zadá info do formuláře, ale neřeším konkrétní atributy, co člověk zadává.

V Use Casu bych **neměl psát fyzický vzhled toho systému**

Měli bychom to psát z pohledu uživatele, aby to bralo v potaz ten jejich **mentální model** (personu). Neměl bych to psát z pohledu, co dělá systém

END

---


START
FIT-Card

Co je **scénář** v NUR?

Back:

Scénář je psán z pohledu systému. Tam už řeším konkrétní atributy, co uživatel zadává, píšeme výsledek té akce.

END

---


START
FIT-Card

Píšou se use cases a scénáře u sebe?

Back:

Správně by se to nemělo dělat, protože scénář mi už popisuje to technologické řešení.

Správný workflow by měl být:
1. Sepsat všechny use casy
2. Sepsat scénáře
3. Udělat wireframy / návrh

END

---

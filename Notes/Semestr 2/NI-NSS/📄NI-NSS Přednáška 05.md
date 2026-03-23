---
created: 2025-04-15T14:12:54
title: "Design Theorems"
up: "[[📖NI-NSS]]"
---

TARGET DECK: archive
FILE TAGS: NI-NSS prednaska05 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Separation of Concerns** v kontextu NP?

Back:

V modulu/třídě by u sebe měly jen být funkce, které jsou related.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250415141720.png)
![](../../../Assets/Pasted%20image%2020250415141727.png)

<!-- ImageEnd -->
<!--ID: 1746518365546-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak docílit separation of concerns prakticky?

Back:

- Identifikvat místa, která se budou často měnit
- Používat správně Encapsulation
- Mít v modulech/třídách jen věci, které jsou related
<!--ID: 1746518365550-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Action Version Transparency**? Jak to aplikovat v praxi?

Back:

Různé funkce závisí na různých funkcích. Když změním jak funguje jedna funkce a interface není správně transparentní, musím změnit hromadu dalších funkcí

Jak to aplikovat v praxi:

- Buď máme **version transparent interface** = interface co se nemění
- Nebo máme **action versions** (tzn. neměníme existující funkce, ale přidáváme jejich nové verze - např. `CustomerV2`)

Pozn. není to jen v kódu. např. APIs to taky můžou dodržovat

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250415142052.png)
![](../../../Assets/Pasted%20image%2020250415142217.png)

<!-- ImageEnd -->
<!--ID: 1746518365553-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Data Version Transparency**? Jak to aplikovat v praxi?

Back:

Máme různá data v aplikaci, která se předávají ve funkcích. Ty funkce jsou pak závislé na těch datech (na třídách například).

Když se například změní konstruktor a struktura dat, tak musím změnit všechny třídy, které s daty pracují

Jak to aplikovat v praxi:

- Proper **encapsulation**
- **Stamp coupling should be preferred** (tzn. neměl bych metodám předávat atomické data typy, ale celé objekty)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250415142516.png)
![](../../../Assets/Pasted%20image%2020250415142524.png)
![](../../../Assets/Pasted%20image%2020250415142539.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518365555-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Separation of States**? Jak to aplikovat v praxi?

Back:
Máme různé funkce. Když změním nějakou funkci (i když má dobrý interface), je furt možný, že v nějaké situaci budu muset měnit ostatní - například když přidám novou exception, kterou funkce může vyhazovat.

Např. mám funkci `getExchangeRate`, která je používaná na 100 místech v kódu. Pokud bych změnil implementaci tak, že funkce bude nově vyhazovat nějakou novou exception, i když budu používat hezký interfaces, tak budu muset udělat 100 změn v kódu. (viz obrázek 1).

Jak to aplikovat v praxi:

- Musíme "vytáhnout" ten state management do jiné třídy, která se o něj bude starat. Např. exception handling vytáhnu do jiné třídy. Když pak přidám novou exception, tak to nebudu muset měnit na 100 místech, ale jen v jedné třídě.
- Udělat **workflow systems stateful**
  - Izolovat akce a state management
- **Odstranit callback nesting** - např. JS callback hell
- **Be careful with using automation dependencies** - jako např. Maven POM

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250415142906.png)
![](../../../Assets/Pasted%20image%2020250415142914.png)
![](../../../Assets/Pasted%20image%2020250415142921.png)
![](../../../Assets/Pasted%20image%2020250415142928.png)

<!-- ImageEnd -->
<!--ID: 1746518365558-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co přesně znamená low coupling a high cohesion v NST?

Back:

- **Low coupling** = low inter-modular coupling
  - Data Version Transparency
  - Action Version Transparency
  - Separation of States
- **High cohesion** = low intra-modular coupling
  - Separation of Concerns
  - Separation of States

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250415143556.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518365561-->

END

---

---
created: 2025-10-28T11:44:20
title: "Bad design"
up: "[[📖NI-NUR]]"
---

TARGET DECK: NI-NUR
FILE TAGS: NI-NUR prednaska08 status-toReview


START
FIT-Card

Co je UI design pattern "Overview plus detail"?

Back:

Když se snažíme organizovat content, je dobrý dát nejdřív overview a potom detailní informace.

Např. vlevo ikonka, vpravo ten content (nebo plný název)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028115932.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Extras on demand"?

Back:

Ukázat uživateli minimální množství informací a pokud chce detailnější nastavení nebo konfiguraci, ukázat mu to až po rozkliknutí.

Např. Google umožňí vyhledat a detailnější settings až potom

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120049.png)
![](../../Assets/Pasted%20image%2020251028120201.png)

<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Step by step instructions"?

Back:

Máme nějaký formulář nebo wizard a uživatel si to musí proklikat.

Prokliká hodně stránek, ale mnohem míň musí myslet, je to tak lepší.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120248.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Navigation"?

Back:

Máme nějaké menu, co nám umožňuje se pohybovat na stránce/v aplikaci

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120333.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Color coded sections"?

Back:

Každou sekci v UI uděláme jinou barvou (např. background color), aby se vizuálně lépe odlišovaly

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120348.png)
![](../../Assets/Pasted%20image%2020251028120423.png)

<!-- DetailInfoEnd -->



END

---


START
FIT-Card

Co je UI design pattern "Card stack - tabbed control"?

Back:

Máme taby (zeshora nebo na straně) a klikáním se přepínají panely.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120501.png)
![](../../Assets/Pasted%20image%2020251028120513.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Accordions (closable panels)"?

Back:

Rozklikávací panely

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120621.png)
![](../../Assets/Pasted%20image%2020251028120551.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Na co si člověk musí dát pozor při používání Accordions?

Back:

Aby to bylo dobře použitelný, musí toho contentu uprostřed Accordionu být málo! Nesmí tam být hodně contentu, jinak se s tím strašně špatně pracuje!

END

---


START
FIT-Card

Co je UI design pattern "Diagonal balance"?

Back:

Myšlenka je, že když rozříznu stránku diagonálně, tak uživatel jakoby postupuje při práci po té diagonále.

Tzn. počátek práce by měl být vlevo nahoře, konec práce vpravo dole

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120646.png)
![](../../Assets/Pasted%20image%2020251028120637.png)

<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co je UI design pattern "Liquid layout"?

Back:

Layout tak, že ten content zaplní obrazovku.

To se používá u textu/obrázků např.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120713.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou typy získávání inputu od uživatelů - UI patterns?

Back:

- **Forgiving Format**
- **Fill-in-the-Blanks**
- **Input Hints**
- **Input Prompt**
- **Dropdown Chooser**
- **Illustrated Choices**

END

---


START
FIT-Card

Co je UI design pattern "Forgiving format"?

Back:

Textfieldy by měly přijímat všechny možné formáty od uživatele (a pak si to zpracovat do konzistentního formátu po potvrzení formuláře).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120906.png)
![](../../Assets/Pasted%20image%2020251028120856.png)
<!-- DetailInfoEnd -->


END

---




START
FIT-Card

Co je UI design pattern "Fill in the blanks"?

Back:

Input fields jsou např. součástí věty a uživatel to vyplňuje

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028120934.png)
![](../../Assets/Pasted%20image%2020251028120925.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Input hints"?

Back:

Přidáváme nápovědy k textfieldům

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121001.png)
<!-- DetailInfoEnd -->

END

---

START
FIT-Card

Kam by se měla dávat nápověda k textfieldům?

Nahoru, dolu nebo jako placeholder?

Back:

1. **Nejlepší je dávat dolu pod textfield**.
2. Potom, kdyby bylo fakt málo místa (např. na mobilu), tak se to dá dát jako placeholder, ale vždy je lepší to dát pod.
3. Nahoru je to antipattern

END

---



START
FIT-Card

Co je UI design pattern "Input Prompt"?

Back:

Je to jako placeholder v textfieldech. Není to default value, ale podrobnější nápověda

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121036.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Kde by měly být v tabulce sloupce s nejpodstatnějšíma informacema?

Back:

Vlevo!

END

---


START
FIT-Card

Co je UI design pattern "Tables - Sortable Table"?

Back:

Tabulky, kde uživatel může sortovat podle sloupce.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121216.png)
![](../../Assets/Pasted%20image%2020251028121227.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Tables - Tree Table"?

Back:

Rozklikávatelný strom v tabulcy

Někdy to může být dobrý, ale obecně to je hrůza, protože to je komplexní a blbě se v tom orientuje.

Ten strom musí být vždy v nejlevějším sloupci (jinak to je naprosto nepochopitelný)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121251.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Tables - Alternating Row Colors"?

Back:

Řádky tabulek mají trošku odlišné barvy, aby se to dobře rozlišovalo.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121325.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Tables - Cascading Lists"?

Back:

Tohle prý není dobrý, protože tam těch seznamů pak je moc a musí člověk scrollovat horizontálně a je to hell.

Stromová strukutra (např. souborů) je rozdělena do seznamů vedle sebe

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121421.png)
![](../../Assets/Pasted%20image%2020251028121412.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Tables - Jump to Item"?

Back:

Člověk např. ve filebrowseru zmáčkne písmenko a ono to skočí na slovo co tím začíná.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121439.png)
![](../../Assets/Pasted%20image%2020251028121453.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Tables - Edit in Place"?

Back:


Možnost upravovat itemy tabulky in place.

Je to dost dobrý, ale ten text nesmí být velký!

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121830.png)
![](../../Assets/Pasted%20image%2020251028121526.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co je UI design pattern "Infinite list / lazy loading"?

Back:

Nekonečný list, co se po scrollu načte nebo se načte při "show more"

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028121905.png)
![](../../Assets/Pasted%20image%2020251028122038.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Je podle Pavlíčka lepší light theme nebo dark theme?

Back:

Prý to je podle něj obecně lepší, dokud to člověk vyloženě netargetuje (heavy metalová skupina, programátoři atd.)

END

---

### Tady jsme skončili

START
FIT-Card

Co je UI design pattern "Tables - Grid of equals"?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028122128.png)
![](../../Assets/Pasted%20image%2020251028122113.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Continuous Filter"?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028122231.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaké jsou UI design patterny "**Commands and Actions**"? (5)

Back:

- Multi-Level Undo
- Smart Menu Items
- Progress Indicator
- Constrained Resize
- Background images

END

---


START
FIT-Card

Co je UI design pattern "Multi-Level Undo"?

Back:

Máme historii kroků (buď přímo zobrazenou, nebo se dá dělat hodněkrát undo)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028122639.png)
![](../../Assets/Pasted%20image%2020251028122629.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Smart Menu Items"?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028122706.png)
![](../../Assets/Pasted%20image%2020251028122658.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Progress Indicator"?

Back:

Ukazuje progress, kolik práce bylo provedeno

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028122841.png)
![](../../Assets/Pasted%20image%2020251028122740.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je UI design pattern "Constrained Resize"?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028122903.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co je UI design pattern "Background Images"?

Back:

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020251028123130.png)
![](../../Assets/Pasted%20image%2020251028122934.png)
<!-- DetailInfoEnd -->

END

---

### Android Design Patterns

START
FIT-Card



Back:



END

---

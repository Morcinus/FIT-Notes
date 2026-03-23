---
created: 2025-10-26T15:28:17
title: Responsivní design
up: "[[📖NI-NUR]]"
---

TARGET DECK: archive
FILE TAGS: NI-NUR prednaska07 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

O čem byla dříve responsibilita?

Back:

Primárně byl návrh pro desktop a cílem bylo to zdrcnout na mobil
<!--ID: 1762184131219-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

O čem je teď responsibilita?

Back:

Designování pro různě velká zařízení - od hodinek až po obrovské televize.
<!--ID: 1762184131223-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se základně dělá responsivní design?

Back:

1. Rozdělíme design na desktopu do "bloků"
2. Ty pak házíme pod sebe na mobilu v dlouhou scrollovací nudli
   <!--ID: 1762184131227-->
   END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je problém u responsivity (proč nestačí jen rozdělit UI do bloků a naházet pod sebe)?

Back:

Jde o to, že:

- na desktopu mám typicky hlavní use case vpravo dole (ale ne úplně u hrany obrazovky)
- úplně v rozích dole mám vedlejší use casy

Když bych to hodil takhle na mobil, tak by to bylo blbě, protože na mobilu musím mít ten hlavní use case v rohu v pravo dole.

**Těhlech detailů tam vziká hodně**
Pak se dělá to, že buď:

- se vytvoří dva designy (drahý, ale dobrý UX)
- nebo se vybere, na jaké zařízení chceme cílit podle primární persony
  <!--ID: 1762184131230-->
  END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak souvisí persony s responsivitou?

Back:

Měl bych designovat podle toho, jaké zařízení bude primární persona používat.

Pokud primárně používá mobil, měl bych to dělat mobile-first. Pokud desktop, tak desktop first.
<!--ID: 1762184131233-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Podle jakých pravidel se pod sebe řadí bloky v responsivním designu?

Back:

Nahoře je důležitější než dole, vlevo je důležitější než vpravo.

Podle tohohle se to z desktopu nahází na mobil.
<!--ID: 1762184131237-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy práce s layouty u responsivního designu? (5)

Back:

- **Mostly fluid** - nahoře je důležitější než dole, vlevo je důležitější než vpravo
- **Column drop** - více sloupců s UI prvkama, sloupce se postupně hází pod sebe
- **Layout shifter** - pro každé zařízení se použije jiný layout (nejsložitější)
- **Tiny Tweaks** - jedno menu nahoře a jediný column - tohle je nejlepší pro jednoduché stránky
- **Off canvas** - sloupce se vytáhnou mimo obrazovku na menších zařízeních

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251026160123.png)
![](../../Assets/Pasted%20image%2020251026160207.png)
![](../../Assets/Pasted%20image%2020251026160219.png)
![](../../Assets/Pasted%20image%2020251026160513.png)
![](../../Assets/Pasted%20image%2020251026160827.png)

<!-- DetailInfoEnd -->
<!--ID: 1762184131240-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak dělat responsivní menu?

Back:

- Menu bychom obecně měli rozdělovat do **chunků**, protože tak mozek nejlépe vnímá různé sekce. Ty bychom měli oddělit whitespacem

Různé způsoby přeorganizování menu na jiných zařízeních:

- **Top navigation** - banner (logo) se přesune pod menu, menu se roztáhne na full width. Tohle je dobrý, pokud to menu nemá moc možností
- **Top nav and pull down** - v menu máme nejvíce používané akce a pak "tři tečky", které mi rozbalí dropdown s dalšími akcemi
- máme action bar, kde každá položka je drop down list (jako nahoře ve VS Code)
- **Left Nav Layout** - když má systém hodně options, tak by se mělo menu přesunout na mobilu do levého sloupce

<!-- DetailInfoStart -->

![](../../Assets/Pasted%20image%2020251026161443.png)
![](../../Assets/Pasted%20image%2020251026163015.png)
![](../../Assets/Pasted%20image%2020251026163007.png)

<!-- DetailInfoEnd -->
<!--ID: 1762184131243-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kdy bych měl v menu používat ikony?

Back:

Když těch možností je třeba 4-5 max. Když jich je víc, tak to je na nic, protože ten uživatel si už nebude pamatovat, co je co.
<!--ID: 1762184131246-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co znamená ta šipka v patě u action baru? Co by se mělo používat místo toho?

![](../../Assets/Pasted%20image%2020251026161751.png)

Back:

**Primární význam**: rozbalí ten panel

**Nevýhoda**: je to hůř přístupný, blbě se na to kliká. Lepší je udělat normální dropdown.
<!--ID: 1762184131249-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Proč je dobrý používat velký **bannery mezi** sekcema na webu?

Back:

Protože to uživateli "vygumuje mozek", když přechází mezi sekcemi.

![](../../Assets/Pasted%20image%2020251026164002.png)
<!--ID: 1762184131252-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Měl by člověk v UI používat dynamické měnění se stránky (např. carousel)?

Back:

Typicky ne, protože to zbytečně mate mozek uživatele a není to příjemný, co se týče UX.
<!--ID: 1762184131255-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak by se měly dělat responsivní images?

Back:

![](../../Assets/Pasted%20image%2020251026165953.png)
![](../../Assets/Pasted%20image%2020251026170004.png)
![](../../Assets/Pasted%20image%2020251026170016.png)

![](../../Assets/Pasted%20image%2020251026170023.png)
![](../../Assets/Pasted%20image%2020251026170035.png)
<!--ID: 1762184131259-->

END

---

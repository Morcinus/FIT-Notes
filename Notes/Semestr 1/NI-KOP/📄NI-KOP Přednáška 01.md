---
created: 2024-10-11T09:38:04
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP prednaska01 status-toReview

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **kombinatorická matematika**?

Back:

Matika, co se zajímá o **konečné** a **diskrétní** problémy, které mají:

- konečný počet **proměnných**
- konečný počet **hodnot** každé proměnné

-> tzn. dá se to bruteforcenout (ale není to vždy nejefektivnější)

![[Pasted image 20240923183912.png]]

![[Pasted image 20240923183924.png]]

<!--ID: 1728921215168-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **kombinatorický problém**? (svými slovy)

Back:

Problém co můžu vyřešit **zkoušením různých možností**.

<!--ID: 1728921215170-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **heuristika**? (svými slovy)

Back:

**Způsob** průchodu těch kombinací.

Člověk si vymyslí "takhle by to mohlo fungovat" a tak to budu dělat.

**Negarantuje to optimum**.

<!--ID: 1728921215173-->

END

---

### Problém a jeho charakteristika

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **problém** a **instance**?

Back:

- **Problém** - obecný problém
- **Instance** - konkrétní případ toho problému

Např.
![[Pasted image 20240923184031.png]]

<!--ID: 1728921215176-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Čím jsou charakterizovaný **problémy** (aka z čeho se skládá)? (5)

Back:

- **vstupní proměnné**
- **výstupní proměnné**
- **konfigurační proměnné** - parametry co ovlivňují strategii hledání řešení (např. maximální počet iterací v algoritmu - po 100 se to vypne)
- **omezení** - definuje co musí být splněno, aby řešení bylo považováno za správné (např. že nesmí přetéct batoh)
- (optional) **optimalizační kritérium** - definuje, které řešení je nejlepší. Typicky chceme něco minimalizovat nebo maximalizovat (např. maximalizace ceny věcí v batohu)

Např. u desky:
![[Pasted image 20240923184136.png]]

<!--ID: 1728921215179-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Čím jsou charakterizovaný **instance problémů**? (1)

Back:

- **ohodnocení vstupních proměnných**

![[Pasted image 20240923184125.png]]

<!-- ExampleStart -->

Například u **problému batohu**:

- **proměnná**: "seznam věcí v batohu"
- **ohodnocení proměnných**: seznam věcí s konkretními cenami a váhami

Je to jako kdybych definoval funkci v programování:

- **proměnná** - to co je v parametru funkce
- **ohodnocení vstupní proměnné** - argument - to co konkrétně dávám do té funkce

<!-- ExampleEnd -->
  <!--ID: 1728921215182-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Definice: **Konfigurační proměnné** (jaké mají 3 vlastnosti)

Back:

![[Pasted image 20240923184452.png]]

<!-- ExampleStart -->

**Konfiguraní proměnná** - např. maximální počet iterací v algoritmu - potom se algoritmus zastaví

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

Žádoucí vlastnosti konfiguračních proměnných:
![[Pasted image 20240923185826.png]]

<!-- DetailInfoEnd -->
<!--ID: 1728921215185-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Definice: **Konfigurace**

Back:

![[Pasted image 20240923184508.png]]

<!-- ExplanationStart -->

**Konfigurace** je například množina věcí, kterou vložíme do batohu.

Každá konfigurace je **možné řešení** (to se uvidí, když se to ověří **omezením**)

Když spouštím ten algoritmus, tak to prochází jednotlivýma konfiguracema (kombinacema).

<!-- ExplanationEnd -->
<!--ID: 1728921215188-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **omezení/omezující kritérium**?

Back:

Omezující kritérium říká (omezuje), **který výstup je řešením**.

<!--ID: 1728921215191-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Musí mít problém vždy **omezující kritéria**?

Back:

**Ano.**

Jinak bych nevěděl, co je správným řešením.

<!--ID: 1728921215193-->

END

---

### Problém batohu

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **problém batohu**?

Back:

![[Pasted image 20241001163035.png]]

<!-- InformallySaidStart -->

Jsem zloděj, vejdu do baráku a mám batoh, co mám omezenou kapacitu. Každá věc v baráku má cenu a váhu. Snažím se vybrat věci za největší cenu.

<!-- InformallySaidEnd -->

<!-- DetailInfoStart -->

![[Pasted image 20240923185901.png]]
![[Pasted image 20240923184550.png]]
![[Pasted image 20240923184558.png]]
![[Pasted image 20240923185102.png]]
![[Pasted image 20240923185111.png]]

<!-- DetailInfoEnd -->
<!--ID: 1728921215200-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Jakou **složitost** má **konstrukční problém batohu**?

Back:

$n \cdot \log n$

Bylo by to $n$, ale protože to musím sesortit při té konstrukci, je to $n \cdot \log n$

<!--ID: 1728921215204-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **problém obdélníkového pokrytí**? (rectangle tiling problem)

Back:

**Vstupní proměnné**:

- Máme $n \times n$ matici, kde je na každé pozici kladné číslo.
- Máme $p$ - počet obdélníků

**Omezení**:

- zakreslit do matice obdélníky, které se nepřekrývají

**Optimalizační kritérium**

- Váha obdélníku je součet čísel v obdélníku
- **Optimální řešení** je takové, kde **největší váha z obdélníků** je co **nejmenší**

<!-- DetailInfoStart -->

![[Pasted image 20241001165737.png]]
![[Pasted image 20241001170140.png]]

<!-- DetailInfoEnd -->
<!--ID: 1728921215207-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Definice: **Řešení**

Back:

![[Pasted image 20240923185653.png]]

<!--ID: 1728921215210-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Definice: **Optimální řešení**

Back:

![[Pasted image 20240923185721.png]]

<!--ID: 1728921215215-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Definice: **Suboptimální řešení**

Back:

![[Pasted image 20240923185747.png]]

<!--ID: 1728921215218-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **rozhodovací problém**, **konstruktivní problém**, **enumerační problém**, **početní problém**?

Back:

![[Pasted image 20240923190452.png]]

<!-- DetailInfoStart -->

![[Pasted image 20240923190537.png]]

<!-- DetailInfoEnd -->
<!--ID: 1728921215227-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **optmalizační konstruktivní problém**?

Back:

![[Pasted image 20240923190610.png]]

<!--ID: 1728921215232-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **optimalizační evaluační problém**?

Back:

![[Pasted image 20240923190631.png]]

<!-- ExampleStart -->

Např. snažíme se najít **délku** nejkratší cesty v grafu.

$C(Y)$ - délka cesty
$R(I,Y)$ - omezení na to, co považuju za cestu od toho jednoho uzlu k druhému

<!-- ExampleEnd -->
<!--ID: 1728921215235-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **optimalizační rozhodovací problém**?

Back:

![[Pasted image 20240923190644.png]]

<!--ID: 1728921215238-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **optimalizační početní problém**?

Back:

![[Pasted image 20240923190703.png]]

<!--ID: 1728921215241-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **optimalizační enumerační problém**?

Back:

![[Pasted image 20240923190721.png]]

<!--ID: 1728921215244-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Jak souvisí **rozhodovací problémy a jazyky**?

Back:

Rozhodovací problém = jazyk

![[Pasted image 20240923190757.png]]

<!--ID: 1728921215247-->

END

---

### Problém SAT

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **problém SAT**? (obecně)

Back:

U Booleovy formule řeším, jestli je splnitelná

Pozn. Formule typicky bývá v konjunktivním normálním tvaru

<!--ID: 1728921215250-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je problém Booleovy formule ($k$-SAT)?

Back:

SAT, kde je formule v konjunktivní normální formě a každá klauzule má **právě $k$ literálů**

Např. 2-SAT, 3-SAT atd.

<!-- ExampleStart -->

**2-SAT** bude řešit například tohle: $(x_1 \lor \neg x_2) \land (\neg x_1 \lor x_2)$

<!-- ExampleEnd -->
<!--ID: 1728921215253-->

END

---

### Typy problémů

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je na výstupu, pokud řeším **rozhodovací problém**?

Back:

**Odpověď ano/ne**

<!--ID: 1728921215256-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je na výstupu, pokud řeším **konstruktivní problém**?

Back:

**Vykonstruované řešení** (konkrétní **konfigurace**)

<!--ID: 1728921215258-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Vysvětli, co dělají jednotlivé verze SATu:

- **Rozhodovací verze**
- **Konstruktivní verze**
- **Enumerační verze**
- **Početní verze**

Back:

![[Pasted image 20240923191404.png]]

<!-- DetailInfoStart -->

![[Pasted image 20240923191522.png]]

<!-- DetailInfoEnd -->
<!--ID: 1728921215262-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Vysvětli, co dělají jednotlivé optimalizační verze SATu:

- **optimalizační rozhodovací verze**
- **optimalizační konstruktivní verze**
- **optimalizační enumerační verze**

Back:

![[Pasted image 20240923191453.png]]

<!-- DetailInfoStart -->

![[Pasted image 20240923191522.png]]

<!-- DetailInfoEnd -->
<!--ID: 1728921215265-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **max-weighted sat a max sat?**

Back:

- **Max weighted SAT** - snaží se maximalizovat počet splněných klauzulí, nezajímá ho splnění celé formule
- **Max SAT** - maximalizuje počet jedniček v řešení při splnění celé formule

![[Pasted image 20240923191647.png]]
![[Pasted image 20240923191704.png]]

<!--ID: 1728921215270-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **off-line** a **on-line** optimalizace?

Back:

![[Pasted image 20240923192112.png]]

<!--ID: 1728921215276-->

END

---

<!--
Exam Note ID: NI-SPOL-12
Exam Note Section Name: Experimentální vyhodnocení algoritmů, zejména randomizovaných
Migration Status: done
-->

START
FIT-Card

Co je **multikriteriální optimalizace** a **multimodální optimalizace**?

Back:

- **multikriteriální optimalizace** - mám více kritérií a chci vybírat různé možnosti
  - Např. spotřeba paliva v autobuse vs spokojení zákazníci
- **multimodální optimalizace** - hledám různá suboptimální řešení
  - Např. různé trasy pro plánování MHD řidičů, aby nebyli v práci znuděný (i když by bylo efektivnější, kdyby každý řidič jezdil furt tu samou trasu)

![[Pasted image 20240923192147.png]]

<!--ID: 1728921215279-->

END

---

![[Pasted image 20240923192500.png]]

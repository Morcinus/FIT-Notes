---
created: 2024-10-11T09:38:04
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP prednaska01 status-toReview

START
Basic

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

START
Basic

Co je **kombinatorický problém**?

Back:

Problém co můžu vyřešit **zkoušením těch možností**.
<!--ID: 1728921215170-->
END

---

START
Basic

Co je **heuristika**?

Back:

**Způsob** průchodu těch kombinací.

Člověk si vymyslí "takhle by to mohlo fungovat" a tak to budu dělat.

**Negarantuje to optimum**.
<!--ID: 1728921215173-->
END

---

### Problém a jeho charakteristika

START
Basic

Co je **problém** a **instance**?

Back:

- **Problém** - obecný problém
- **Instance** - konkrétní případ toho problému

Např.
![[Pasted image 20240923184031.png]]
<!--ID: 1728921215176-->
END

---


START
Basic

Čím jsou charakterizovaný **problémy** (aka z čeho se skládá)? (5)

Back:

- **vstupní proměnné**
- **výstupní proměnné**
- **konfigurační proměnné**
- **omezení**
- **optimalizační kritérium**, pokud je třeba

Např. u desky:
![[Pasted image 20240923184136.png]]
<!--ID: 1728921215179-->
END

---


START
Basic

Čím jsou charakterizovaný **instance problémů**? (1)

Back:

- **ohodnocení vstupních proměnných**

![[Pasted image 20240923184125.png]]
<!--ID: 1728921215182-->
END

---

START
Basic

Definice: **Konfigurační proměnné** (jaké mají 3 vlastnosti)

Back:

![[Pasted image 20240923184452.png]]
<!--ID: 1728921215185-->
END

---


START
Basic

Definice: **Konfigurace**

Back:

![[Pasted image 20240923184508.png]]
<!--ID: 1728921215188-->
END

---

START
Basic

Co je **omezení/omezující kritérium**?

Back:

Omezující kritérium říká (omezuje), **který výstup je řešením**.
<!--ID: 1728921215191-->
END

---


START
Basic

Musí mít problém vždy omezující kritéria?

Back:

**Ano.** 

Jinak bych nevěděl, co je správným řešením.
<!--ID: 1728921215193-->
END

---

### Problém batohu

START
Basic

Co říká **problém batohu**? (obecně)

Back:

Jsem zloděj, vejdu do baráku a mám batoh, co mám omezenou kapacitu. Každá věc v baráku má cenu a váhu. Snažím se vybrat věci za největší cenu.
<!--ID: 1728921215196-->
END

---


START
Basic

Co je **problém batohu**? (obecně)

Back:

![[Pasted image 20241001163035.png]]

![[Pasted image 20240923185901.png]]
![[Pasted image 20240923184550.png]]
![[Pasted image 20240923184558.png]]
![[Pasted image 20240923185102.png]]
![[Pasted image 20240923185111.png]]
<!--ID: 1728921215200-->
END

---

START
Basic

Jakou složitost má konstrukční problém batohu?

Back:

$n \cdot \log n$

Bylo by to $n$, ale protože to musím sesortit při té konstrukci, je to $n \cdot \log n$
<!--ID: 1728921215204-->
END

---


START
Basic

Co je **problém obdélníkového pokrytí**?

Back:

![[Pasted image 20240923185344.png]]
<!--ID: 1728921215207-->
END

---


START
Basic

Definice: **Řešení**

Back:

![[Pasted image 20240923185653.png]]
<!--ID: 1728921215210-->
END

---


START
Basic

Definice: **Optimální řešení**

Back:

![[Pasted image 20240923185721.png]]
<!--ID: 1728921215215-->
END

---


START
Basic

Definice: **Suboptimální řešení**

Back:

![[Pasted image 20240923185747.png]]
<!--ID: 1728921215218-->
END

---


START
Basic

Jaké jsou **žádoucí vlastnosti konfiguračních proměnných**? (4)

Back:

![[Pasted image 20240923185826.png]]
<!--ID: 1728921215221-->
END

---


START
Basic

Jaké jsou **verze problému batohu**? (5)

Back:

![[Pasted image 20240923190016.png]]
![[Pasted image 20240923190421.png]]
<!--ID: 1728921215224-->
END

---


START
Basic

Co je **Rozhodovací problém**, konstruktivní problém, enumerační problém, početní problém?

Back:

![[Pasted image 20240923190452.png]]
<!--ID: 1728921215227-->
END

---


START
Basic

Co musí umět konfigurační proměnné popsat?

Back:

![[Pasted image 20240923190537.png]]
<!--ID: 1728921215230-->
END

---


START
Basic

Co je optmalizační konstruktivní problém?

Back:

![[Pasted image 20240923190610.png]]
<!--ID: 1728921215232-->
END

---


START
Basic

Co je optimalizační evaluační problém?

Back:

![[Pasted image 20240923190631.png]]
<!--ID: 1728921215235-->
END

---


START
Basic

Co je optimalizační rozhodovací problém?

Back:

![[Pasted image 20240923190644.png]]
<!--ID: 1728921215238-->
END

---


START
Basic

Co je optimalizační početní problém?

Back:

![[Pasted image 20240923190703.png]]
<!--ID: 1728921215241-->
END

---


START
Basic

Co je optimalizační enumerační problém?

Back:

![[Pasted image 20240923190721.png]]
<!--ID: 1728921215244-->
END

---


START
Basic

Jak souvisí rozhodovací problémy a jazyky?

Back:

Rozhodovací problém = jazyk

![[Pasted image 20240923190757.png]]
<!--ID: 1728921215247-->
END

---

### Problém SAT

START
Basic

Co je **problém SAT**? (obecně)

Back:

U Booleovy formule řeším, jestli je splnitelná

Pozn. Formule typicky bývá v konjunktivním normálním tvaru
<!--ID: 1728921215250-->
END

---


START
Basic

Co je problém Booleovy formule (k-SAT)?

Back:

![[Pasted image 20240923190907.png]]
![[Pasted image 20240923191126.png]]
<!--ID: 1728921215253-->
END

---

### Typy problémů

START
Basic

Co je na výstupu, pokud řeším **rozhodovací problém**?

Back:

**Odpověď ano/ne**
<!--ID: 1728921215256-->
END

---

START
Basic

Co je na výstupu, pokud řeším **konstruktivní problém**?

Back:

**Vykonstruované řešení**
<!--ID: 1728921215258-->
END

---


START
Basic

Co znamenají jednotlivé verze ohodnocení SAT?
- Rozhodovací verze
- Konstruktivní verze
- Enumerační verze
- Početní verze

Back:

![[Pasted image 20240923191404.png]]
<!--ID: 1728921215262-->
END

---


START
Basic

Jaké jsou 3 optimalizační verze SAT a co znamenají?

Back:

![[Pasted image 20240923191453.png]]
<!--ID: 1728921215265-->
END

---


START
Basic

Jaké jsou verze SATu?

Back:

![[Pasted image 20240923191522.png]]
<!--ID: 1728921215267-->
END

---


START
Basic

Co je **max-weighted sat a max sat?**

Back:

![[Pasted image 20240923191647.png]]
![[Pasted image 20240923191704.png]]
<!--ID: 1728921215270-->
END

---


START
Basic

Existují problémy, které nevypadají jako kombinatorické?

Back:

**Ano**

![[Pasted image 20240923191845.png]]
![[Pasted image 20240923191907.png]]
![[Pasted image 20240923191915.png]]
![[Pasted image 20240923191927.png]]
<!--ID: 1728921215273-->
END

---


START
Basic

Co je off-line a on-line optimalizace?

Back:

![[Pasted image 20240923192112.png]]
<!--ID: 1728921215276-->
END

---


START
Basic

Co je **multikriteriální optimalizace** a **multimodální optimalizace**?

Back:

![[Pasted image 20240923192147.png]]
<!--ID: 1728921215279-->
END

---


![[Pasted image 20240923192500.png]]

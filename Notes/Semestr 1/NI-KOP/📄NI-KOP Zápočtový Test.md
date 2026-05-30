---
created: 2024-11-09T15:31:45
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP-Test test01 status-toReview


# Zápočtový test

### 09.11, 11:00 2023

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co jsou to výstupní proměnné kombinatorického problému (obecně)? Jak (příp. kdy) se tyto výstupní proměnné liší od konfiguračních?

Back:

- Výstupní proměnné dávají odpověď na zadání daného problému.
- Liší se když to je rozhodovací problém. Potom je výstupní proměnná **ano/ne**.
- Liší se když je je početní problém. Potom je výstupní proměnná **číslo** (např. kolik existuje řešení).
<!--ID: 1731175818386-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zformulujte nějakou NPC rozhodovací verzi problému nalezení maximální kliky v grafu za předpokladu, že jeho konstruktivní optimalizační verze je NPH a patří do NPO.

Formulace konstruktivní optimalizační verze: Nalezněte maximální úplný podgraf

Back:

Existuje takova klika v grafu G, aby pocet jejich vrcholu byl vetsi nez konstanta K?
<!--ID: 1731175818389-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$NPC \subset EXPTIME$

Back:

✅**Platí**
<!--ID: 1731175818392-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$NPC \subset PSPACE$

Back:

✅**Platí**
<!--ID: 1731175818394-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Certifikát všech NPH problémů lze zkontrolovat v polynomiálním čase (det. Turingovým strojem).

Back:

❌**Neplatí**
<!--ID: 1731175818399-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Omezující podmínky všech NP problémů je možno zkontrolovat v polynomiálním čase (det. Turingovým strojem)

Back:

✅**Platí**
<!--ID: 1731175818402-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

NPC problémy jsou ty nejtěžší rozhodovací kombinatorické problémy.

Back:

❌**Neplatí**
<!--ID: 1731175818405-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro třídu NP platí (za předpokladu, že platí $NP \neq P$):

- Je to třída všech nejtěžších kombinatorických problémů
- Je to třída pouze rozhodovacích problémů
- Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase

Back:

- ❌Je to třída všech nejtěžších kombinatorických problémů
- **✅Je to třída pouze rozhodovacích problémů**
- **✅Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase**
<!--ID: 1731175818407-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy ve třídě NP platí (za předpokladu, že platí $NP \neq P$):

- Jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem.
- Nejsou řešitelné v polynomiálním čase deterministickým Turingovým strojem.
- Jejich certifikát se dá zkontrolovat v polynomiálním čase deterministickým Turingovým strojem.

Back:

- **✅Jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem.**
- ❌Nejsou řešitelné v polynomiálním čase deterministickým Turingovým strojem.
- **✅Jejich certifikát se dá zkontrolovat v polynomiálním čase deterministickým Turingovým strojem.**
<!--ID: 1731175818410-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak lze dokázat, že daný problém patří do třídy NP (za předpokladu, že platí $NP ≠ P$)? _Napište alespoň 2 principiálně odlišné možnosti._

Back:

1. Z definice nalezneme nedeterministický Turingův stroj, který každou instanci $I \in \Pi_{ANO}$ řeší v polynomiálním čase (z definice).
2. Dokážeme, že pro každou instanci $I \in \Pi_{ANO}$ problému existuje konfigurace $Y$ taková, že kontrola, zda je $Y$ řešením patří do $P$

Obě dvě varianty jsou z definice (každá z jiné)
<!--ID: 1731175818413-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je dána rozhodovací verze _minimum bin packing_ problému:

„Je dána množina n věcí a pro každou věc její velikost. Je možné všechny věci umístit do nejvýše K kontejnerů o kapacitě B každý?“

a) Navrhněte konfigurační proměnné pro tento problém.
b) Jaká jsou omezení (constraints) pro tento problém?
c) Dokažte nebo vyvraťte, že tento problém patří do třídy NP.

Back:

**Konfigurační proměnné**:

- Seznam kontejnerů, v každém kontejneru množina věcí, které v něm jsou umístěny.

**Omezení**:

- V kontejneru nesmí věci překročit kapacitu
- Kontejnerů je maximálně K
- Každá věc je umístěna právě jednou (ne méně, ne více)

**Důkaz:**

- Je NP, pokud správnost nějaké konfigurace u každé instance lze ověřit v polynomiálním čase
- To zde platí, protože projít všechny kontejnery a zkontrolovat omezení je polynomiální složitost
<!--ID: 1731175818415-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí polynomiální Turingovy (Cookovy) redukce je možné:

Převést každou instanci libovolného NPC problému na instanci libovolného NP problému v polynomiálním čase

Back:

❌**Neplatí**
<!--ID: 1731175818418-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí **Karpovy redukce** je možné:

Převést každou instanci libovolného NPH problému na instanci nějakého NPC problému.

Back:

❌**Neplatí**
<!--ID: 1731175818421-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí polynomiální Turingovy (Cookovy) redukce je možné:

Převést každou instanci libovolného řešitelného kombinatorického problému na instanci nějakého NPC problému

Back:

❌**Neplatí**
<!--ID: 1731175818424-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy APX platí:

Lze pro ně najít APX redukci na nějaký NPO problém.

Back:

✅**Platí**
<!--ID: 1731175818427-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Navrhněte souvislý symetrický stavový prostor pro problém „Minimum Multiprocessor Scheduling Problem“. Co jsou zde stavy? Navrhněte konfigurační proměnné. Navrhněte operátory pro tento stavový prostor.

Formulace problému: „Dána množina $T$ úloh, m procesorů, doba trvání $l(t, i) ∈ Z$ pro každou úlohu $t ∈ T$ a procesor $i \in [1..m]$. Nalezněte mprocesorový plán pro $T$, tj. funkci f: $T→[1..m]$. Minimalizujte čas dokončení plánu, tj. maximum ze sum dob trvání $l(t, i)$ úloh naplánovaných na procesor, přes všechny procesory $i ∈ [1..m]$.”

Back:

konfiguracni promenne = pro kazdy procesor i prirazena posloupnost uloh t, ktere postupne zpracuje
stav = mnozina neprirazenych uloh + pro kazdy procesor i jeho posloupnost prirazenych uloh t
operatory

- pro procesor i pridej do posloupnosti prirazenych uloh jednu z neprirazenych uloh, t
- pro procesor i odeber z posloupnosti prirazenych uloh posledni z uloh, t, a vrat ji mezi neprirazene ulohy
<!--ID: 1731175818430-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy APX platí:

- Jsou podmnožinou PTAS problémů.

Back:

❌**Neplatí**
<!--ID: 1731175818433-->

END

---

### 01.11, 12:45 2022

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zformulujte nějakou NPC rozhodovací verzi problému nalezení minimálního uzlového pokrytí grafu za předpokladu, že jeho konstruktivní optimalizační verze je NPH a patří do NPO.

Formulace konstruktivní optimalizační verze: _Nalezněte minimální uzlové pokrytí, tj. takovou podmnožinu uzlů, že každá hrana grafu je incidentní aspoň s jedním uzlem z této množiny. Minimalizujte počet uzlů._

Back:

Existuje minimální uzlové pokrytí takové, že počet uzlů < k?
<!--ID: 1731175818436-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$P \subset EXPTIME$

Back:

✅**Platí**
<!--ID: 1731175818439-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$NPO \cap NPH = \emptyset$

Back:

❌**Neplatí**
<!--ID: 1731175818442-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$NPC \subset NPH$

Back:

✅**Platí**
<!--ID: 1731175818445-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

APX-úplné problémy mohou mít polynomiální aproximační algoritmus.

Back:

✅**Platí**
<!--ID: 1731175818447-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Optimalizační kritéria všech NPH problémů je možno spočítat v polynomiálním čase (det. Turingovým strojem).

Back:

❌**Neplatí**
<!--ID: 1731175818450-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Všechny NP úplné problémy jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem.

Back:

✅**Platí**
<!--ID: 1731175818453-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Všechny NP problémy jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem.

Back:

✅**Platí**
<!--ID: 1731175818456-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

NP problémy jsou ty nejtěžší rozhodovací kombinatorické problémy

Back:

❌**Neplatí**
<!--ID: 1731175818458-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Problémy v třídě NPI (za předpokladu, že platí $NP \neq P$):

- Neumíme řešit v polynomiálním čase (det. Turingovým strojem)
- Neumíme pro ně dokázat příslušnost k NPC
- Jejich omezující podmínky lze ověřit v polynomiálním čase (det. Turingovým strojem)

Back:

- ✅**Neumíme řešit v polynomiálním čase (det. Turingovým strojem)**
- ✅**Neumíme pro ně dokázat příslušnost k NPC**
- ✅**Jejich omezující podmínky lze ověřit v polynomiálním čase (det. Turingovým strojem)**
<!--ID: 1731175818461-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy ve třídě co-NP platí (za předpokladu, že platí $NP \neq P$):

- Nejsou řešitelné v polynomiálním čase (det. Turingovým strojem)
- Certifikát ANO-instancí lze ověřit v polynomiálním čase (det. Turingovým strojem)
- Omezující podmínky lze ověřit v polynomiálním čase (det. Turingový strojem)

Back:

- ❌Nejsou řešitelné v polynomiálním čase (det. Turingovým strojem)
- ❌Certifikát ANO-instancí lze ověřit v polynomiálním čase (det. Turingovým strojem)
- ✅**Omezující podmínky lze ověřit v polynomiálním čase (det. Turingový strojem)**
<!--ID: 1731175818464-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak lze dokázat, že daný problém patří do třídy NPC (za předpokladu, že platí $NP \neq P$)? Napište alespoň 2 principiálně odlišné možnosti.

Back:

Jsou 3 možnosti:

- Z definice - dokážu že je NP a že lze všechny NP problémy zredukovat na tento
- Zvláštní případ - Nějaký NP úplný problém je zvláštním případem toho mýho problému
- Převodem SATu - Když zvládnu zredukovat SAT na $\Pi$, je $\Pi$ NP-úplný
<!--ID: 1731175818467-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je dána rozhodovací verze problému obchodního cestujícího:

_„Lze nalézt uzavřenou túru procházející všemi městy právě jednou, délky k?"_

a) Navrhněte konfigurační proměnné pro tento problém.
b) Jaká jsou omezení (constraints) pro tento problém?
c) Dokažte nebo vyvraťte, že tento problém patií do třídy NP.

Back:

a) Vektor mést, který určuje pořadí, ve kterém byla navštívena

b) Každé město musí být navštíveno právé jednou

c) Kontrolu, že konfigurace splňuje omezení, můžeme provést v polynomiálním čase (stačí proiterovat seznam navštívených měst). Toto ověření je problém třídy P, problém je tedy NP.
<!--ID: 1731175818470-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Turingovy redukce (obecné) je možné:

Převést každou instanci libovolného NPC problému na instanci libovolného NP problému

Back:

✅**Platí**
<!--ID: 1731175818472-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Karpovy redukce je možné:
Převést každou instanci libovolného NPC problému na instanci nějakého P problému v exponenciálním čase.

Back:

❌**Neplatí**
<!--ID: 1731175818475-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Karpovy redukce je možné:

Převést každou instanci libovolného NPH problému na instanci nějakého NPC problému

Back:

❌**Neplatí**
<!--ID: 1731175818478-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy NPO platí:

Jsou podmnožinou APX problémů.

Back:

❌**Neplatí**
<!--ID: 1731175818481-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy NPO platí:

Lze pro ně najít APX redukci na nějaký PTAS problém.

Back:

❌**Neplatí**
<!--ID: 1731175818483-->

END

---

### 01.11, 16:15 2022

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co jsou to konfigurační proměnné kombinatorického problému? Jaké jsou na ně kladeny požadavky?

Back:

Jsou to proměnné, které nastavuje hrubá síla (bruteforce).

Musí jich být konečný počet a každá proměnná musí nabývat konečný počet hodnot.
<!--ID: 1731175818486-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Od konstruktivního optimalizačního problému nalezení maximální kliky v grafu odvoďte rozhodovací problém, který patři do co-NPC (za predpokladu, že původní problém je NPH a srovnatelné složitosti s NPC).

Formulace konstruktivní optimalizační verze: Naleznéľe maximální úplný podgraf.

Back:

Platí, že každý úplný podgraf má počet vrcholů menší, než k?
<!--ID: 1731175818489-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

APX-úplné problémy mohou mít polynomiální aproximační algoritmus

Back:

✅**Platí**
<!--ID: 1731175818492-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$P \subset NPI$

Back:

❌**Neplatí**
<!--ID: 1731175818495-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$NP = NPC \cup NPI$

Back:

❌**Neplatí**
<!--ID: 1731175818497-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$FPTAS \subset APX$

Back:

✅**Platí**
<!--ID: 1731175818500-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Všechny NPH problémy jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem.

Back:

❌**Neplatí**
<!--ID: 1731175818502-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Některé NPC problémy lze řešit v polynomiálním čase (det. Turingovým strojem).

Back:

❌**Neplatí**
<!--ID: 1731175818505-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

optimalizační kritéria všech NPO problémů je možno spočítat v polynomiálním čase (det. Turingovým strojem).

Back:

✅**Platí**
<!--ID: 1731175818507-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Některé NP problémy lze řešit v polynomiálním čase (det. Turingovým strojem)

Back:

✅**Platí**
<!--ID: 1731175818510-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro třídu NPI platí (za předpokladu, že platí $NP \neq P$):

- Problémy v této třídě neumíme řešit v polynomiálním čase (det Turingovým strojem).
- Je to třida těžších problémů, je NP.
- Patří do ní problémy, které nejsou ani v P, ani v NPC.

Back:

- ✅ **Problémy v této třídě neumíme řešit v polynomiálním čase (det Turingovým strojem).**
- ❌ Je to třida těžších problémů, je NP.
- ✅ **Patří do ní problémy, které nejsou ani v P, ani v NPC.**
<!--ID: 1731175818513-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je dána rozhodovací verze problému nalezení maximální kliky:

_„Existuje klika (úplný podgraf) v grafu G(V, E) o velikosti k IVI?"_

a) Navrhněte konfigurační proměnné pro tento problém.
b) Jaká jsou omezení (constraints) pro tento problém?
c) Dokažte nebo vyvratte, že tento problém patří do třídy NP

Back:

**Konfigurační proměnné**: bitové pole vybraných vrcholů

**Omezení**:

- Podgraf musí být úplný
- Podgraf musí mít právě V vrcholů

**Důkaz**:
Problém patří do NP, pokud lze v polynomiálním čase ověřit, že každá konfigurace splňuje řešení.

Zde stačí proiterovat 2D pole -> patří do NP.
<!--ID: 1731175818521-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Turingovy redukce (obecné) je možné:

Převést každou instanci libovolného NPH problému na instanci nějakého NPC problému.

Back:

✅**Platí**
<!--ID: 1731175818524-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Turingovy redukce (obecné) je možné:

Převést každou instanci libovolného NPC problému na instanci libovolného NP problému.

Back:

✅**Platí**
<!--ID: 1731175818526-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy APX platí:

Vždy patří do NPH.

Back:

❌**Neplatí**
<!--ID: 1731175818529-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy PTAS platí:

Existuje algoritmus řešící problémy s libovolně malou (nenulovou) chybou v polynomiálním čase (s velikostí instance).

Back:

✅**Platí**
<!--ID: 1731175818532-->

END

---

### 11.11, 09:15 2022

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zformulujte nějakou NPC rozhodovací verzi problému obchodního cestujícího za předpokladu, že jeho konstruktivní optimalizační verze je NPH a patří do NPO.

Back:

Existuje taková posloupnost měst, Že každé město je navštíveno právě jednou a délka túry je menší než K?
<!--ID: 1731175818535-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$NP \subset NPH$

Back:

❌**Neplatí**
<!--ID: 1731175818538-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$NP = NPC \cup NPI \cup P$

Back:

✅**Platí**
<!--ID: 1731175818541-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

$P \subset NPH$

Back:

❌**Neplatí**
<!--ID: 1731175818543-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

NPO-úplné problémy mohou mít polynomiální aproximační algoritmus

Back:

❌**Neplatí**
<!--ID: 1731175818546-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Certifikát všech NPC problémů je možno ověřit v polynomiálním čase (deterministickým Turingovým strojem).

Back:

✅**Platí**
<!--ID: 1731175818549-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Omezující podmínky všech NPC problémů je možno zkontrolovat v polynomiálním čase (det. Turingovým strojem).

Back:

✅**Platí**
<!--ID: 1731175818552-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Všechny NPH problémy jsou řešitelné v polynomiálním Čase nedeterministickým Turingovým strojem.

Back:

❌**Neplatí**
<!--ID: 1731175818554-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí $NP \neq P$)?

Optimalizační kritéria všech NPO problémů je možno spočítat v polynomiálním čase (det. Turingovým strojem).

Back:

✅**Platí**
<!--ID: 1731175818557-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro třídu NPC platí (za předpokladu, že platí $NP \neq P$):

- Je to třída všech nejtěžších kombinatorických problémů.
- Je to třída pouze rozhodovacích problémů.
- Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase.

Back:

- ❌Je to třída všech nejtěžších kombinatorických problémů.
- ✅**Je to třída pouze rozhodovacích problémů.**
- ✅**Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase.**
<!--ID: 1731175818560-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí polynomiální Turingovy (Cookovy) redukce je možné:

Převést každou instanci libovolného NPC problému na instanci nějakého P problému v exponenciálním Čase.

Back:

❌**Neplatí**
<!--ID: 1731175818572-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy FPTAS platí:

Jsou podmnožinou NPO problémů.

Back:

✅**Platí**
<!--ID: 1731175818574-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy FPTAS platí:

Lze pro ně najít APX redukci na nějaký NPO problém

Back:

✅**Platí**
<!--ID: 1731175818577-->

END

---

### Před 2020

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte platnost tvrzení (za předpokladu, že platí NP != P):

- P ⊂ NP
- coNP ⊂ NPC
- NP ⊂ EXPTIME
- NPC = NP ∩ NPH
- PTAS ⊂ NPO
- NPO-úplné problémy mohou mít polynomiální aproximační algoritmus

Back:

✅ **P ⊂ NP**  
❌ coNP ⊂ NPC  
✅ **NP ⊂ EXPTIME**  
✅ **NPC = NP ∩ NPH**  
✅ **PTAS ⊂ NPO**  
❌ NPO-úplné problémy mohou mít polynomiální aproximační algoritmus
<!--ID: 1731175818580-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte platnost tvrzení (za předpokladu, že platí NP != P):

- P ⊂ NPH
- co-NP ∩ NP = $\emptyset$
- NPC ⊂ NP
- NPI ⊂ NPC
- APX-úplné problémy mohou mít aproximační algoritmus
- NP ⊂ PSPACE

Back:

❌ P ⊂ NPH  
❌ co-NP ∩ NP = $\emptyset$
✅ **NPC ⊂ NP**  
❌ NPI ⊂ NPC  
✅ **APX-úplné problémy mohou mít aproximační algoritmus**  
✅ **NP ⊂ PSPACE**
<!--ID: 1731175818583-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte platnost tvrzení (za předpokladu, že platí NP != P):

- P ∩ NPC = $\emptyset$
- co-NP ⊂ EXPTIME
- NP ⊂ NPH
- NPC = NP ∩ NPH
- NPI ⊂ NP
- FPTAS ⊂ NPO

Back:

✅ **P ∩ NPC =**  
✅ **co-NP ⊂ EXPTIME**  
❌ NP ⊂ NPH  
✅ **NPC = NP ∩ NPH**  
✅ **NPI ⊂ NP**  
✅ **FPTAS ⊂ NPO**
<!--ID: 1731175818585-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte platnost tvrzení (za předpokladu, že platí NP != P):

- P ⊂ NPH
- co-NP ⊂ EXPTIME
- NPI ∩ NPC = $\emptyset$
- NPH ⊂ PSPACE
- NPC = NP ∩ NPH
- APX-úplné problémy mohou mít polynomiální aproximační algoritmus

Back:

❌ P ⊂ NPH
✅ **co-NP ⊂ EXPTIME**
✅ **NPI ∩ NPC =** $\emptyset$
✅ NPH ⊂ PSPACE
✅ **NPC = NP ∩ NPH**  
✅ **APX-úplné problémy mohou mít polynomiální aproximační algoritmus**
<!--ID: 1731175818588-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení (za předpokladu, že platí NP != P):

- co-NP ⊂ NPC
- NP ⊂ PSPACE
- NPC ⊂ NPH
- APX-úplné problémy mohou mít polynomiální aproximační algoritmus

Back:

❌ co-NP ⊂ NPC
✅ **NP ⊂ PSPACE**  
✅ **NPC ⊂ NPH**  
✅ **APX-úplné problémy mohou mít polynomiální aproximační algoritmus**
<!--ID: 1731175818591-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte platnost tvrzení (za předpokladu, že platí NP != P):

- NPI ⊂ NP
- co-NP ⊂ EXPTIME
- P ⊂ NPH
- NP = NPC ∩ NPI

Back:

✅ **NPI ⊂ NP**  
✅ **co-NP ⊂ EXPTIME**  
❌ P ⊂ NPH  
❌ NP = NPC ∩ NPI
<!--ID: 1731175818594-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení (za předpokladu, že platí NP != P):

- NPI ∩ NPC = $\emptyset$
- NPC = NP ∩ NPH
- co-NP ⊂ NPC
- P ⊂ NP
- FPTAS ⊂ NPO
- NPO-úplné problémy jsou ty nejtěžší optimalizační problémy
- NPO-úplné problémy jsou ty nejtěžší optimalizační problémy z NPO

Back:

✅ **NPI ∩ NPC =**  
✅ **NPC = NP ∩ NPH**  
❌ co-NP ⊂ NPC  
✅ **P ⊂ NP**  
✅ **FPTAS ⊂ NPO**  
❌ NPO-úplné problémy jsou ty nejtěžší optimalizační problémy  
✅ **NPO-úplné problémy jsou ty nejtěžší optimalizační problémy z NPO**
<!--ID: 1731175818597-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení (za předpokladu, že platí NP != P):

- NP ∩ NPC = $\emptyset$
- NPO ⊂ NPH
- P ⊂ co-NP
- NP = NPC ∪ NPI
- PTAS ⊂ NPO
- APX-úplné problémy jsou aproximativní

Back:

❌ NP ∩ NPC = $\emptyset$  
❌ NPO ⊂ NPH  
✅ **P ⊂ co-NP**  
❌ NP = NPC ∪ NPI
✅ **PTAS ⊂ NPO**  
✅ **APX-úplné problémy jsou aproximativní**
<!--ID: 1731175818600-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení (za předpokladu, že platí NP != P):

- P ⊂ NPC
- NP ⊂ NPH
- NPI ⊂ NPC
- NP ⊂ EXPTIME

Back:

❌ P ⊂ NPC  
❌ NP ⊂ NPH  
❌ NPI ⊂ NPC  
✅ **NP ⊂ EXPTIME**
<!--ID: 1731175818603-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Platí následující tvrzení (za předpokladu, že platí NP != P)?

- P ⊂ NPI

Back:

❌ P ⊂ NPI
<!--ID: 1731175818606-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro třídu NPI platí (za předpokladu, že platí NP != P):

- Problémy v této třídě neumíme řešit v polynomiálním čase (det. Turingovým strojem).
- Je to třída těžších problémů, než NP.
- Může být prázdná.

Back:

✅ **Problémy v této třídě neumíme řešit v polynomiálním čase (det. Turingovým strojem).**  
❌ Je to třída těžších problémů, než NP.  
❌ Může být prázdná.
<!--ID: 1731175818608-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí polynomiální Turingovy redukce **není možné** převést instanci kombinatorického problému Π1 na instanci kombinatorického problému Π2, pokud:

- Π1 je NPO optimalizační konstruktivní problém, Π2 je NPC rozhodovací problém.
- Π1 je NPC rozhodovací problém, Π2 je libovolný rozhodovací problém.
- Π1 je NPC rozhodovací problém, Π2 je NPO optimalizační konstruktivní problém.

Back:

❌ Π1 je NPO optimalizační konstruktivní problém, Π2 je NPC rozhodovací problém.  
✅ **Π1 je NPC rozhodovací problém, Π2 je libovolný rozhodovací problém.**  
✅ Π1 je NPC rozhodovací problém, Π2 je NPO optimalizační konstruktivní problém.
<!--ID: 1731175818611-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí polynomiální Turingovy redukce je možné:

- Převést instanci jakéhokoliv problému na instanci nějakého NPC problému v polynomiálním čase
- Převést instanci jakéhokoliv NPO-úplného konstruktivního optimalizačního problému na instanci jakéhokoliv NP-úplného rozhodovacího problému
- Převést instanci jakéhokoliv NP-úplného rozhodovacího problému na instanci nějakého P problému v exponenciálním čase
- Převést každou instanci jakéhokoliv NPH problému na instanci jakéhokoliv NPH problému v polynomiálním čase
- Převést každou instanci jakéhokoliv NP problému na instanci nějakého NPH problému v polynomiálním čase.
- Převést každou instanci jakéhokoliv NPO problému na instanci jakéhokoliv NPC rozhodovacího problému v polynomiálním čase
- Převést každou instanci jakéhokoliv problému na instanci nějakého NPC problému.
- V polynomiálním čase převést každou instanci jakéhokoliv NPO-úplného konstruktivního optimalizačního problému na instanci jakéhokoliv NP-úplného rozhodovacího problému.
- V exponenciálním čase převést instanci jakéhokoliv NPC rozhodovacího problému na instanci nějakého P problému.

Back:

❌ Převést instanci jakéhokoliv problému na instanci nějakého NPC problému v polynomiálním čase  
✅ **Převést instanci jakéhokoliv NPO-úplného konstruktivního optimalizačního problému na instanci jakéhokoliv NP-úplného rozhodovacího problému**  
❌ Převést instanci jakéhokoliv NP-úplného rozhodovacího problému na instanci nějakého P problému v exponenciálním čase  
❌ Převést každou instanci jakéhokoliv NPH problému na instanci jakéhokoliv NPH problému v polynomiálním čase  
✅ **Převést každou instanci jakéhokoliv NP problému na instanci nějakého NPH problému v polynomiálním čase.**  
✅ **Převést každou instanci jakéhokoliv NPO problému na instanci jakéhokoliv NPC rozhodovacího problému v polynomiálním čase**  
❌ Převést každou instanci jakéhokoliv problému na instanci nějakého NPC problému.  
✅ **V polynomiálním čase převést každou instanci jakéhokoliv NPO-úplného konstruktivního optimalizačního problému na instanci jakéhokoliv NP-úplného rozhodovacího problému.**  
❌ V exponenciálním čase převést instanci jakéhokoliv NPC rozhodovacího problému na instanci nějakého P problému.
<!--ID: 1731175818614-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Turingovy redukce je možné:

- Převést instanci jakéhokoliv problému na instanci NPH problému
- Převést instanci jakéhokoliv problému na instanci NPH problému v polynomiálním čase
- Převést instanci (NPH) rozhodovacího problému na instanci (NPC) konstruktivního optimalizačního problému
- Převést instanci konstruktivního optimalizačního problému na instanci rozhodovacího problému
- Dokázat, že daný rozhodovací problém patří do NPH
- Převést NPH problém na jiný NPH problém v polynomiálním čase
- Převést P problém na jiný P problém v polynomiálním čase
- Převést instanci NPC rozhodovacího problému na instanci NPH konstruktivního optimalizačního problému
- Převést instanci NPH konstruktivního optimalizačního problému na instanci NPC rozhodovacího problému
- Převést každou instanci libovolného NPC problému na instanci nějakého NP problému.
- Převést každou instanci libovolného NPC problému na instanci P problému v exponenciálním čase.
- Převést P problém na jiný P problém v polynomiálním čase

Back:

❌ Převést instanci jakéhokoliv problému na instanci NPH problému  
❌ Převést instanci jakéhokoliv problému na instanci NPH problému v polynomiálním čase  
✅ **Převést instanci (NPH) rozhodovacího problému na instanci (NPC) konstruktivního optimalizačního problému**  
✅ **Převést instanci konstruktivního optimalizačního problému na instanci rozhodovacího problému**  
✅ **Dokázat, že daný rozhodovací problém patří do NPH**  
✅ **Převést NPH problém na jiný NPH problém v polynomiálním čase**  
✅ **Převést P problém na jiný P problém v polynomiálním čase**  
✅ **Převést instanci NPC rozhodovacího problému na instanci NPH konstruktivního optimalizačního problému**  
✅ **Převést instanci NPH konstruktivního optimalizačního problému na instanci NPC rozhodovacího problému**  
✅ **Převést každou instanci libovolného NPC problému na instanci nějakého NP problému.**  
❌ **Převést každou instanci libovolného NPC problému na instanci P problému v exponenciálním čase.**  
✅ **Převést P problém na jiný P problém v polynomiálním čase**
<!--ID: 1731175818616-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí polynomiální Turingovy (Cookovy) redukce je možné:

- Převést každou instanci libovolného NPC problému na instanci nějakého P problému v exponenciálním čase
- Převést každou instanci libovolného řešitelného kombinatorického problému na instanci nějakého NPH problému.

Back:

❌ Převést každou instanci libovolného NPC problému na instanci nějakého P problému v exponenciálním čase  
❌ Převést každou instanci libovolného řešitelného kombinatorického problému na instanci nějakého NPH problému.
<!--ID: 1731175818619-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtnete platnost tvrzení (za předpokladu, že platí NP != P):

- Pro některé NPC problémy existuje polynomiální algoritmus (pro deterministický Turingův stroj)
- Certifikát všech NP problémů je možno zkontrolovat v polynomiálním čase (det. Turingovým strojem)
- co-NP úplné problémy nejsou těžší, než NPC.

Back:

❌ Pro některé NPC problémy existuje polynomiální algoritmus (pro deterministický Turingův stroj)  
✅ Certifikát všech NP problémů je možno zkontrolovat v polynomiálním čase (det. Turingovým strojem)  
✅ co-NP úplné problémy nejsou těžší, než NPC.
<!--ID: 1731175818622-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení (za předpokladu, že platí NP != P):

- Mezi NPH problémy patří ty nejtěžší rozhodovací kombinatorické problémy.
- Certifikát všech NPH problémů lze zkontrolovat v polynomiálním čase (det. T.S.)
- Certifikát některých NPC problémů nelze zkontrolovat v polynomiálním čase (det. T.S.)
- Některé NPC problémy lze řešit v polynomiálním čase (det. T.S.)
- co-NP problémy obecně nejsou těžší, než NP
- Pro některé NP problémy existuje polynomiální algoritmus (pro det. T.S.)
- Optimalizační kritéria všech NPH problémů je možno spočítat v polynomiálním čase (DTS)
- Optimalizační kritéria všech NPO problémů je možno spočítat v polynomiálním čase (DTS)

Back:

✅ Mezi NPH problémy patří ty nejtěžší rozhodovací kombinatorické problémy.  
❌ Certifikát všech NPH problémů lze zkontrolovat v polynomiálním čase (det. T.S.)  
❌ Certifikát některých NPC problémů nelze zkontrolovat v polynomiálním čase (det. T.S.)  
❌ Některé NPC problémy lze řešit v polynomiálním čase (det. T.S.)  
✅ co-NP problémy obecně nejsou těžší, než NP  
✅ Pro některé NP problémy existuje polynomiální algoritmus (pro det. T.S.)  
❌ Optimalizační kritéria všech NPH problémů je možno spočítat v polynomiálním čase (DTS)  
✅ Optimalizační kritéria všech NPO problémů je možno spočítat v polynomiálním čase (DTS)
<!--ID: 1731175818624-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \neq P$):

- NP úplné problémy jsou řešitelné v polynomiálním čase nedeter. Turing. strojem
- co-NP úplné problémy nejsou těžší, než NPC
- Omezující podmínky všech NPH problémů je možno zkontrolovat v polynomiálním čase (na DTS)
- Omezující podmínky všech NPC problémů je možno zkontrolovat v polynomiálním čase (na DTS)
- Všechny NPH problémy jsou řešitelné v polynomiálním čase NTS

Back:

- ✅ NP úplné problémy jsou řešitelné v polynomiálním čase nedeter. Turing. strojem
- ✅ co-NP úplné problémy nejsou těžší, než NPC
- ❌ Omezující podmínky všech NPH problémů je možno zkontrolovat v polynomiálním čase (na DTS)
- ✅ **Omezující podmínky všech NPC problémů je možno zkontrolovat v polynomiálním čase (na DTS)**
- ❌ Všechny NPH problémy jsou řešitelné v polynomiálním čase NTS
<!--ID: 1731175818627-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte pravdivost tvrzení (za předpokladu, že platí $NP \neq P$):

- NPC problémy jsou ty nejtěžší rozhodovací kombinatorické problémy.
- Certifikát všech NP úplných problémů je možno ověřit v polynomiálním čase (deterministickým Turingovým strojem),
- Pro některé NP problémy existuje polynomiální algoritmus (pro deterministický Turingův stroj).

Back:

- ❌ NPC problémy jsou ty nejtěžší rozhodovací kombinatorické problémy
- ✅ **Certifikát všech NP úplných problémů je možno ověřit v polynomiálním čase (deterministickým Turingovým strojem)**
- ✅ **Pro některé NP problémy existuje polynomiální algoritmus (pro deterministický Turingův stroj)**
<!--ID: 1731175818630-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy ve třídě NPC platí (za předpokladu, že platí $NP \neq P$):

- Nejsou řešitelné v polynomiálním čase deterministickým Turingovým strojem.
- Jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem.
- Jsou to ty nejtěžší rozhodovací problémy
- Jejich certifikát se dá zkontrolovat v polynomiálním čase (det. Turingovým strojem)
- Jejich optimalizační verze patří do NPH.

Back:

- ✅ **Nejsou řešitelné v polynomiálním čase deterministickým Turingovým strojem**
- ✅ **Jsou řešitelné v polynomiálním čase nedeterministickým Turingovým strojem**
- ❌ Jsou to ty nejtěžší rozhodovací problémy
- ✅ **Jejich certifikát se dá zkontrolovat v polynomiálním čase (det. Turingovým strojem)**
- ✅ **Jejich optimalizační verze patří do NPH**
<!--ID: 1731175818633-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení (za předpokladu, že platí $NP \neq P$):

- NPC problémy jsou ty nejtěžší rozhodovací kombinatorické problémy.
- NP problémy jsou ty nejtěžší rozhodovací kombinatorické problémy.
- Certifikát všech NPC problémů lze zkontrolovat v polynomiálním čase (det. T. S.).
- co-NP problémy jsou těžší, než NP.
- Omezující podmínky všech NPO problémů je možno zkontrolovat v polynomiálním čase (det. Turingovým strojem)
- Některé NP problémy lze řešit v polynomiálním čase (det. Turingovým strojem)
- Pro některé NP úplné problémy existuje polynomiální algoritmus (pro det. Turingův stroj).

Back:

- ❌ NPC problémy jsou ty nejtěžší rozhodovací kombinatorické problémy
- ❌ NP problémy jsou ty nejtěžší rozhodovací kombinatorické problémy
- ✅ **Certifikát všech NPC problémů lze zkontrolovat v polynomiálním čase (det. T. S.)**
- ❌ co-NP problémy jsou těžší, než NP
- ✅ **Omezující podmínky všech NPO problémů je možno zkontrolovat v polynomiálním čase (det. Turingovým strojem)**
- ✅ **Některé NP problémy lze řešit v polynomiálním čase (det. Turingovým strojem)**
- ❌ Pro některé NP úplné problémy existuje polynomiální algoritmus (pro det. Turingův stroj)
<!--ID: 1731175818635-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Třída NPC je:

- Třída těch nejtěžších existujících rozhodovacích problému
- Prǔsečíkem tříd NP a NPH
- Třída všech problémů, pro které neznáme polynomiální algoritmus (pro det. Turingův stroj)

Back:

- ❌ Třída těch nejtěžších existujících rozhodovacích problému
- ✅ **Prǔsečíkem tříd NP a NPH**
- ❌ Třída všech problémů, pro které neznáme polynomiální algoritmus (pro det. Turingův stroj)
<!--ID: 1731175818638-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro třídu NPC platí (za předpokladu, že platí $NP \neq P$):

- Je to třída těch nejtěžších kombinatorických problémů
- Je to třída pouze rozhodovacích problémů
- Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase

Back:

- ❌ Je to třída těch nejtěžších kombinatorických problémů
- ✅ **Je to třída pouze rozhodovacích problémů**
- ✅ **Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase**
<!--ID: 1731175818641-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Třída co-NP je:

- Třída všech takových problémů, pro které neznáme polynomiální algoritmus pro DTS
- Obsahuje některé problémy, pro které nelze ověřit certifikát ANO-instancí v polynomiálním čase (na DTS)
- Třída těžších problémů, než je NP.

Back:

- ❌ Třída všech takových problémů, pro které neznáme polynomiální algoritmus pro DTS
- ✅ **Obsahuje některé problémy, pro které nelze ověřit certifikát ANO-instancí v polynomiálním čase (na DTS)**
- ❌ Třída těžších problémů, než je NP.
<!--ID: 1731175818643-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro problémy patřící do třídy PTAS (polynomiální aproximační schéma) platí:

- Vždy patří do NPH
- PTAS ⊂ APX
- Existuje algoritmus řešící tyto problémy s libovolně malou chybou v polynomiálním čase (s velikostí instance)

Back:

- ❌ Vždy patří do NPH
- ✅ **PTAS ⊂ APX**
- ✅ **Existuje algoritmus řešící tyto problémy s libovolně malou chybou v polynomiálním čase (s velikostí instance)**
<!--ID: 1731175818650-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro problémy patřící do třídy PTAS (polynomiální aproximační schéma) platí:

- Existuje algoritmus řešící tyto problémy v polynomiálním čase exaktně
- Existuje algoritmus řešící tyto problémy v polynomiálním čase s libovolně malou chybou
- Patří do NPC
- Jsou podmnožinou APX
- Patří do NPH

Back:

- ❌ Existuje algoritmus řešící tyto problémy v polynomiálním čase exaktně
- ✅ **Existuje algoritmus řešící tyto problémy v polynomiálním čase s libovolně malou chybou**
- ❌ Patří do NPC
- ✅ **Jsou podmnožinou APX**
- ❌ Patří do NPH
<!--ID: 1731175818655-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy z třídy FPTAS platí:

- Existuje pro ně polynomiální aproximativní algoritmus.
- Lze je vyřešit s libovolně malou (nenulovou) chybou $\varepsilon$, za nutnou cenu exponenciálního růstu času s klesajícím $\varepsilon$.
- Lze pro ně najít APX redukci na nějaký PTAS problém
- Lze pro ně najít APX redukci na nějaký FPTAS problém
- Rozhodovací verze těchto problémů lze vyřešit v polynomiálním čase (det. T.S.).
- Vždy patří do NPH

Back:

- ✅ **Existuje pro ně polynomiální aproximativní algoritmus**
- ❌ Lze je vyřešit s libovolně malou (nenulovou) chybou $\varepsilon$, za nutnou cenu exponenciálního růstu času s klesajícím $\varepsilon$
- ✅ **Lze pro ně najít APX redukci na nějaký PTAS problém**
- ✅ **Lze pro ně najít APX redukci na nějaký FPTAS problém**
- ❌ Rozhodovací verze těchto problémů lze vyřešit v polynomiálním čase (det. T.S.)
- ❌ Vždy patří do NPH
<!--ID: 1731175818658-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy z třídy PTAS platí:

- Existuje pro ně polynomiální aproximativní algoritmus.
- Lze je vyřešit s libovolně malou (nenulovou) chybou $\varepsilon$, za cenu možného exponenciálního růstu času s klesajícím $\varepsilon$.
- Lze pro ně najít APX redukci na nějaký FPTAS problém.
- Jsou podmnožinou NPO problémů.

Back:

- ✅ **Existuje pro ně polynomiální aproximativní algoritmus**
- ✅ **Lze je vyřešit s libovolně malou (nenulovou) chybou $\varepsilon$, za cenu možného exponenciálního růstu času s klesajícím $\varepsilon$**
- ❌ Lze pro ně najít APX redukci na nějaký FPTAS problém
- ✅ **Jsou podmnožinou NPO problémů**
<!--ID: 1731175818660-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problémy patřící do třídy APX platí:

- Jsou podmnožinou NPO problémů

Back:

- ✅ **Jsou podmnožinou NPO problémů**
<!--ID: 1731175818663-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro třídu NP platí (za předpokladu, že platí NP != P):

- Je to třída těch nejtěžších kombinatorických problémů
- Je to třída pouze rozhodovacích problémů
- Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase

Back:

- ❌ Je to třída těch nejtěžších kombinatorických problémů
- ✅ **Je to třída pouze rozhodovacích problémů**
- ✅ **Certifikát všech problémů z této třídy lze ověřit v polynomiálním čase**
<!--ID: 1731175818668-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Karpovy redukce je možné:

- Převést každou instanci libovolného NP problému na instanci nějakého NPO problému.
- Převést každou instanci libovolného NP problému na instanci libovolného NPC problému v polynomiálním čase
- Převést každou instanci libovolného NPC problému na instanci libovolného NPC problému v polynomiálním čase
- Převést každou instanci libovolného NPC problému na instanci P problému v exponenciálním čase
- Převést každou instanci libovolného NPC problému na instanci libovolného NP problému v polynomiálním čase
- Převést každou instanci libovolného řešitelného kombinatorického problému na instanci nějakého NPH problému.

Back:

- ❌ Převést každou instanci libovolného NP problému na instanci nějakého NPO problému
- ✅ **Převést každou instanci libovolného NP problému na instanci libovolného NPC problému v polynomiálním čase**
- ✅ **Převést každou instanci libovolného NPC problému na instanci libovolného NPC problému v polynomiálním čase**
- ❌ Převést každou instanci libovolného NPC problému na instanci P problému v exponenciálním čase
- ❌ Převést každou instanci libovolného NPC problému na instanci libovolného NP problému v polynomiálním čase
- ❌ Převést každou instanci libovolného řešitelného kombinatorického problému na instanci nějakého NPH problému
<!--ID: 1731175818671-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pomocí Karpovy redukce je možné převést instanci kombinatorického problému Π1 na instanci kombinatorického problému Π2 pokud (obecně):

- Π1 je NPC rozhodovací problém, Π2 je NPC rozhodovací problém
- Π1 je NP rozhodovací problém, Π2 je NPC rozhodovací problém
- Π1 je NPO rozhodovací problém, Π2 je NPC rozhodovací problém
- Π1 je NPC rozhodovací problém, Π2 je NPO optimalizační konstruktivní problém
- Π1 je NPO optimalizační konstruktivní problém, Π2 je NPC rozhodovací problém
- Π1 je NPC rozhodovací problém, Π2 je NPO optimalizační konstruktivní problém.

Back:

- ✅ **Π1 je NPC rozhodovací problém, Π2 je NPC rozhodovací problém**
- ✅ **Π1 je NP rozhodovací problém, Π2 je NPC rozhodovací problém**
- ❌ Π1 je NPO rozhodovací problém, Π2 je NPC rozhodovací problém
- ❌ Π1 je NPC rozhodovací problém, Π2 je NPO optimalizační konstruktivní problém
- ❌ Π1 je NPO optimalizační konstruktivní problém, Π2 je NPC rozhodovací problém
- ❌ Π1 je NPC rozhodovací problém, Π2 je NPO optimalizační konstruktivní problém
<!--ID: 1731175818674-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Třída NPH je:

- Třída problémů, pro které lze zkontrolovat omezující podmínky v polynomiálním čase (det. Turingovým strojem).
- Třída také optimalizačních problémů.
- Patří do ní ty nejtěžší existující kombinatorické problémy.

Back:

- ❌ Třída problémů, pro které lze zkontrolovat omezující podmínky v polynomiálním čase (det. Turingovým strojem).
- ✅ **Třída také optimalizačních problémů.**
- ✅ **Patří do ní ty nejtěžší existující kombinatorické problémy.**
<!--ID: 1731175818676-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna 1) patří do:

- P
- NP
- NPC
- co-NP

Back:

- ❌ P
- ✅ **NP**
- ✅ **NPC**
- ❌ co-NP
<!--ID: 1731175818679-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Mějme logickou funkci zadanou jako součin součtů (POS, CNF). Rozhodovací problém určení kontradikce pro takto zadanou funkci (pro všechna ohodnocení proměnných je funkce rovna 0) patří do:

- P
- NP
- NPC
- co-NP

Back:

- ❌ P
- ❌ NP
- ❌ NPC
- ✅ **co-NP**
<!--ID: 1731175818681-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Mějme logickou funkci zadanou jako součet součinů (SOP, DNF). Rozhodovací problém určení splnitelnosti pro takto zadanou funkci (funkce může být rovna 1) patří do:

- P
- NP
- NPC
- co-NP

Back:

- ✅ **P**
- ✅ **NP**
- ❌ NPC
- ✅ **co-NP**
<!--ID: 1731175818684-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtnete platnost tvrzení (za předpokladu, že platí NP != P):

- Některé NP problémy lze řešit v polynomiálním čas na DTS
- Pro některé NP úplné problémy existuje polynomiální algoritmus (pro DTS)
- U všech co-NP problémů nelze ověřit certifikát ANO-instancí v polynomiálním čase

Back:

- ✅ **Některé NP problémy lze řešit v polynomiálním čas na DTS**
- ❌ Pro některé NP úplné problémy existuje polynomiální algoritmus (pro DTS)
- ✅ **U všech co-NP problémů nelze ověřit certifikát ANO-instancí v polynomiálním čase**
<!--ID: 1731175818687-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro problémy ve třídě NPH platí (za předpokladu, že platí NP != P):

- Vždy je možné zkontrolovat omezující podmínky v polynomiálním čase (na DTS)
- Neznáme pro ně polynomiální algoritmus pro DTS
- Patří mezi ně všechny optimalizační problémy srovnatelné složitosti s NPC

Back:

- ❌ Vždy je možné zkontrolovat omezující podmínky v polynomiálním čase (na DTS)
- ✅ **Neznáme pro ně polynomiální algoritmus pro DTS**
- ✅ **Patří mezi ně všechny optimalizační problémy srovnatelné složitosti s NPC**
<!--ID: 1731175818689-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Třída NPC je:

- Průsečíkem tříd NP a NPH
- Třída těch nejtěžších existujících rozhodovacích problémů
- Třída všech problémů, pro které neznáme polynomiální algoritmus (pro DTS)

Back:

- ✅ **Průsečíkem tříd NP a NPH**
- ❌ Třída těch nejtěžších existujících rozhodovacích problémů
- ❌ Třída všech problémů, pro které neznáme polynomiální algoritmus (pro DTS)
<!--ID: 1731175818692-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je dán problém Π. Máme dokázat, že algoritmus řešící tento problém je aproximativní. Musíme tedy dokázat, že:

- Pro každou instanci I algoritmus skončí v polynomiálním počtu kroků
- Relativní chyba (ε) algoritmu < 1
- Π ∈ NPC

Back:

- ✅ **Pro každou instanci I algoritmus skončí v polynomiálním počtu kroků**
- ✅ **Relativní chyba (ε) algoritmu < 1**
- ❌ Π ∈ NPC
<!--ID: 1731175818694-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je dán problém Π. Q(S) budiž hodnota optimalizačního kritéria řešení S instance I tohoto problému, dokázat, že algoritmus řešící tento problém je aproximativní. Musíme tedy:

- Pro každou instanci I algoritmus skončí v polynomiálním počtu kroků
- Relativní kvalita algoritmu je konečná
- Relativní kvalita algoritmu <1
- Π ∈ NP
- Relativní chyba algoritmu <1

Back:

- ✅ **Pro každou instanci I algoritmus skončí v polynomiálním počtu kroků**
- ✅ **Relativní kvalita algoritmu je konečná**
- ❌ Relativní kvalita algoritmu <1
- ❌ Π ∈ NP
- ✅ **Relativní chyba algoritmu <1**
<!--ID: 1731175818697-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro všechny problém patřící do třídy NPO platí:

- Lze pro ně najít APX redukci na nějaký APX problém.

Back:

- ❌ Lze pro ně najít APX redukci na nějaký APX problém.
<!--ID: 1731175818700-->

END

---

#### Stavový prostor

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Pro každou úplnou strategii prohledávání stavového prostoru platí:

- Nemusí vždy nalézt optimální řešení (i když existuje).
- Navštíví každý stav nejvýše jednou.
- Vždy projde všechny stavy.
- Je zaručeno, že každý stav navštíví max. jednou.
- Je např. metoda prvního zlepšení (“first improvement”).
- Vždy nalezne optimální řešení (pokud existuje).
- Je např. metoda „nejlepší nejdříve“ (best-first).
- Prohledá celý (případně efektivně ořezaný) stavový prostor, pokud neexistuje řešení.

Back:

- ❌ Nemusí vždy nalézt optimální řešení (i když existuje).
- ❌ Navštíví každý stav nejvýše jednou.
- ❌ Vždy projde všechny stavy.
- ❌ Je zaručeno, že každý stav navštíví max. jednou.
- ❌ Je např. metoda prvního zlepšení (“first improvement”).
- ✅ **Vždy nalezne optimální řešení (pokud existuje).**
- ✅ **Je např. metoda „nejlepší nejdříve“ (best-first).**
- ✅ **Prohledá celý (případně efektivně ořezaný) stavový prostor, pokud neexistuje řešení.**
<!--ID: 1731175818702-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zaškrtněte správná tvrzení. Systematická strategie prohledávání stavového prostoru:

- Vždy prohledá celý stavový prostor
- Navštíví každý stav pouze jednou
- Je např. metoda náhodná procházka (“random walk”)
- Navštíví každý prozkoumávaný stav nejvýše jednou

Back:

- ❌ Vždy prohledá celý stavový prostor
- ✅ **Navštíví každý stav pouze jednou**
- ❌ Je např. metoda náhodná procházka (“random walk”)
- ✅ **Navštíví každý prozkoumávaný stav nejvýše jednou**
<!--ID: 1731175818705-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je prohledávání do šířky (BFS) úplná strategie:

- Ano
- Ne

Back:

- ✅ **Ano**
- ❌ Ne
<!--ID: 1731175818708-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je prohledávání do hloubky (DFS) úplná strategie?

- Ano
- Ne

Back:

- ✅ **Ano**
- ❌ Ne
<!--ID: 1731175818710-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Je prohledávání do šířky (BFS) systematická strategie?

- Ano
- Ne

Back:

- ✅ **Ano**
- ❌ Ne
<!--ID: 1731175818713-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Nechť daná instance kombinatorického problému nemá řešení. Prohledá metoda „nejlepší nejdříve“ v takovém případě celý stavový prostor?

- Ano
- Ne

Back:

- ✅ **Ano**
- ❌ Ne
<!--ID: 1731175818715-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Metoda "nejlepší nejdříve" (best-first):

- Je hladová
- Je úplná
- Prohledá celý stavový prostor, pokud neexistuje řešení
- Používá frontu

Back:

- ❌ Je hladová
- ✅ **Je úplná**
- ✅ **Prohledá celý stavový prostor, pokud neexistuje řešení**
- ❌ Používá frontu
<!--ID: 1731175818718-->

END

---

#### Další

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Zjistím, že moje jednoduchá lokální metoda rychle uvázne v lokálním minimu. Problém řeším tím, že prohledávané okolí:

- Zmenším
- Zvětším

Back:

- ❌ Zmenším
- ✅ **Zvětším**
<!--ID: 1731175818726-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak zjistím, že moje jednoduchá lokální metoda má tendenci rychle uváznout v lokálním minimu?

- Při náhodných restartech vždy dojde ke stejnému výsledku
- Při náhodných restartech dosažený výsledek příliš závisí na počátečním stavu.

Back:

- ❌ Při náhodných restartech vždy dojde ke stejnému výsledku
- ✅ **Při náhodných restartech dosažený výsledek příliš závisí na počátečním stavu.**
<!--ID: 1731175818728-->

END

---

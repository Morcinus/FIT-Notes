---
created: 2024-11-05T16:23:36
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP cviceni07 status-toReview

### Výpisky od Kuby
- P problém = existuje algoritmus, který to řeší v polynomiálním čase na deterministickém turingovém stroji
    - Rozhodovací problémy
- PO problémy
    - Optimalizační problémy řešitelné v pol. čase det. turing. stroji
- NP
    - polynomiální čas, nedeterministický turingův stroj
- Problém je NP pokud
    - ho lze převést na známý problém, který je NP
    - V polynomiálním čase zkontrolujeme konfiguraci = ověřit, zda-li je to řešení (stačí nám ano)
        - Pokud to vyjde, tak tomu říkáme certifikát
    - Pokud nějak nalezneme konfiguraci, která mi dá odpověď na původní problém ano a dokážeme to v polynomiálním čase vyhodnotit, tak víme, že je odpověď ano
- NPO
    - Musíme být schponi spočítat v polynomálním čase optimalizační kritérium
    - Kontrola, že je to řešení platné - V polynomálním čase ověříme omezující podmínky
- V testu při důkazu, že je problém NPO
    - Odpověď je taková, že ukážeme, jak se to dělá
- CONP problém
    - Narozdíl od NP =
        - U NP máme ověření certifikátu, pokud certifikát najdeme, tak jsme hotoví a víme, že je odpověď ano
        - U CONP =pokud se zeptáme na konfiguraci a odpověď je ano, tak nám to nic neřekne (svědek).
    - CONP - začínají kvantifikátorem obecný
        - Jedná se o negaci NP
    - NP - začínají existenčním kvantifikátorem
    - Svědek
        - odpovídá na problém
            - U NP máme něco, čemu se říká krátký svědek
                - krátký = lze jej ověřit v polynomiálním čase s velikostí instance. Např. SAT = pro dané ohodnocení formule zjišťujeme, že je formule splněná. Umíme v polynomiálním čase. Pokud odpovíme -> končíme
            - U CONP - není krátký svědek, ale jen dlouhý svědek
                - dlouhý svědek = coSat = pr ovšechna ohodnocení formule je nesplněná -> exponenciálně mnoho formulí
- Veškeré P problémy jsou NP a co-NP
    - Vyhledávání v neseřazeném poli
        - NP problém - hledáme nějaké konkrétní číslo, pole je krátký svědek
        - CONP - ptáme se, zda-li tam nějaký prvek není, pole je certifikát
        - Obojí v čase O(n)
- Pokud NPI je prázdné, tak vše je řešitelné v polynomiálním čase = velký problém
- NPC = nejtěžší z NP
    - Nejtěžší => Každý problém z NP můžeme Karpovou redukcí převést na NPC
    - Nějaký problém z NPC převedeme na můj => pak je NPC
- SAT je NP úplný a vymyslel ho Cook
- Turingovou redukcí je možné skákat přes různé třídy hierarchie
    - Algoritmus můžeme volat klidně exponenciálně krát
- Cookova redukce = algoritmus voláme maximálně polynomiálně-krát
#### Ukázka převodu
- Snaha o převedení SAT na nezávislou množinu

## Toto cviko

![Seminar2-ConfigVar](../../Assets/Seminar2-ConfigVar.pdf)
### Stavový prostor
- Stavový prostor = dvojice stavů a akcí/přechody
- Pomocí operátorů dělám operace
- **Stav** = ohodnocení konfiguračních proměnných
- **Přechody** = operace

## Problémy
- Jak zvolit operátory? Abych nima byl schopný prolézt **celý** (rozumný) stavový prostor
- Neplést graf instance (např. u Hemiltonový kružnice) a graf stavového prostoru
### Batoh
- **Stav** - podmnožina věcí co jsou v batohu
- **Operátory** - přidat věc, odebrat věc

### Uzlové pokrytí
- **Stavy** - to samé
- **Operátory** - přidat uzel, odebrat uzel

### SAT
- **Stavy** 
- **Operátor** - flip

### Problém 
- **Stavy** - permutace měst 
- **Operace** - prohodit dva body (dvě města mezi sebou)
	- Stačí to?
		- Dokážu tím vygenerovat všechny permutace -> stačí

Pojmy:
**Relaxace** - povolíme neplatný řešení a místo toho to řešení nějak penalizujeme. Nějak = zhoršíme hodnotu optimalizačního kritéria na nějakou **vzdálenost** od platného řešení (tzn. jak moc je to blbě).
- Např. u batohu relaxace říká jak moc bude batoh přetížený 
**Penalizace** - povolíme neplatný řešení a nějak je penalizujeme. Např. každému nastavíme hodnotu na nula.
### Složitější věci

#### Minimum bin packing (aka popelnice)
- **Operace**: přesun konkrétní věci do konkrétní popelnice

Možnost druhá
- Pro každý bin budu mít seznam věcí které v něm jsou
- Operace: vezmu věc a šoupnu jí do jiné popelnice
- Tady je **zrada** <<< ❗❗❗ **Tohle si máme pamatovat**
	- Jsem schopný se dostat do všech stavů?
	- **Ano, ale musím mít na začátku všechny věci v jedné popelnici** = **musím mít definovaný počáteční stav**
		- Nesmí se mi stát, že tam nějaké věci nebudou
		- Nesmí se mi stát, že tam nějaké věci budou 2x

#### Minimum Rectangle Tiling
- Operace - změnění souřadnice rohu
- Bude mi to generovat i neplatný stavy, ale to mi nevadí
- Pokryje mi to všechny stavy
- penalizace!

#### Minimum Graph Motion Planning
- **Instance** = kde je robot a kde jsou překážky
- **Konfigurace** - posloupnost posunů
- **Operátory** - odebrání posledního tahu

#### Sokoban
- Nejtěžší kombinatorický problém
- **PSPACE**
- **Konfigurace** - posloupnost panáčka nebo pohybů beden
- **Operátor** - couvnu, udělám tah

#### Minimum Equivalent Boolean Formula
- Konfigurace = ta formule = **stav**
- Můžu si to rozepsat jako strom
	- -> operátory: prohození podstromů atd.

### Závěr
- Ve stavovém prostoru musí být
	- **Stavy**
	- **Operátory**
- Stavový prostor se snažím navrhnout
	- **Souvislý** - z každýho stavu se dostanu do každýho stavu
	- **Úplnej** - dokážu dojít do libovolnýho stavu (krom do stavů co nedávají smysl)
- Definovat jasně počáteční stav - někde to je fakt klíčový

### "Popojedem dál na kýble"

> [!info] Teď už se nebavíme o stavovém prostoru

#### The Bucket problem
- Máme kýble a kohoutek a dřez
- Kýble mají různé kapacity (objemy vody)
- Můžu celý kýbl naplnit, nebo ho celý vylejt
- Cílem je z počátečního stavu se dostat to nějakého cílového stavu

- Instance: 
	- kolik je kýblů
	- jak jsou velký
	- kolik vody v každém je
	- kolik mají být koncové objemy
- Konfigurace:
	- posloupnost přelití

0. (0,0)
1. (0,3)
2. (3,0)
3. (3,3)
4. (4,2)
5. (0,2)
6. (2,0)
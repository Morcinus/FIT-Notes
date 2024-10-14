---
created: 2024-10-06T10:20:35
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP

START
FIT-Card

Jaké provádíme typy **hodnocení algoritmů**? Co každý typ znamená? (2 typy)

Back:

- **Teorie**
	- Abychom algoritmus srovnali s dosud známými algoritmy, s optimem
	- Abychom porozuměli algoritmu
- **Aplikace**
	- Abychom určili vhodnost algoritmu pro zamýšlenou funkci

<!-- ExampleStart -->
- **Teorie** - horní asymptotická mez výpočetní složitosti
- **Aplikace** - průměrná výpočetní složitost na instancích
<!-- ExampleEnd -->
<!--ID: 1728204724953-->

END

---

START
FIT-Card

Jaké **2 typické analytické odpovědi** se snažíme získat při hodnocení algoritmů? 

Back:

- **Nejhorší případ, asymptotické meze**
- **Průměrný případ**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241006132512.png)
<!-- DetailInfoEnd -->
<!--ID: 1728205164742-->

END

---


START
FIT-Card

Proč se často hodnotí algoritmy experimentálně?

Back:

Protože jsou algoritmy **často moc složité** na to, aby se jednoduše určovala horní mez a další vlastnosti.
<!--ID: 1728241521223-->
END

---

START
FIT-Card

Co nás typicky zajímá za **otázky** při dělání experimentů? (3) 
Co z toho vyvodíme?

Back:

- **Složitost**
	- Z hlediska teorie
	- Z hlediska nasazení
- **Kvalita** řešení
- **Porozumění** - např. proč na určitých instancích algoritmus pracuje špatně

Otázky jsou typicky **závislost něčeho na něčem**
- Např. výpočetní čas na velikosti instance

Text nahoře
<!--ID: 1728222348180-->
END

---


START
FIT-Card

Jaké jsou **kroky experimentu**? (4)

Back:

Mám otázku co chci zjistit, provedu
1. **Plán experimentu**
2. **Provedení experimentu**
3. **Sběr dat** _(např. na instanci 324 to mělo nějakou kvalitu)_
4. **Interpretace výsledku** _(tzn. zobecním ta data)_

Tím získám odpověď.
<!--ID: 1728241521238-->
END

---


START
FIT-Card

Jaké metriky nás zajímají u **experimentu**?

Back:

- **Metriky vstupu**
- **Metriky výstupu**

<!-- ExplanationStart -->
**Metriky** jsou závislosti nějakých veličin na jiných. Např. časová závislost běhu programu na velikosti vstupu. 
<!-- ExplanationEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241006183047.png)
<!-- ImageEnd -->
<!--ID: 1728241521244-->
END

---


START
FIT-Card

Když hledáme metriku, hledáme typicky nějakou která **závisí** nebo **nezávisí** na detailech implementace?

Back:

Hledáme tu, která **nezávisí** na detailech implementace.


<!-- ExampleStart -->
Například **počet vyhodnocených konfigurací**.

![](../../Assets/Pasted%20image%2020241006185004.png)
<!-- ExampleEnd -->
<!--ID: 1728241521250-->
END

---


START
FIT-Card

Jaké jsou 2 typy vstupních metrik?

Back:

- Ty o kterých **víme** _(Např. u problému batohu víme počet věcí v batohu)_
- Ty o kterých **nevíme** _(Např. poměr věcí v batohu vůči jejich cenám)_

Ty co **nevíme** můžeme **objevovat**.
<!--ID: 1728241521256-->
END

---


START
FIT-Card

Co je metrika **Fázový přechod**?

Back:

**Pravděpodobnost splnitelnosti formule v závislosti na poměru počtu klauzulí k počtu proměnných.**
<!--ID: 1728241521262-->
END

---


START
FIT-Card

Co se rychle rozpozná u **fázového přechodu**?

Back:

- **Snadno řešitelné instance** vyřešeny rychle
- **Neřešitelné instance** rozpoznány rychle

<!-- ExplanationStart -->
Proč se tomu říká fázový přechod?
Když ohřívám led, tak je furt led (první fáze), dokud nedosáhne nad 0 stupňů. Pak se z něj stane voda (druhá fáze).
<!-- ExplanationEnd -->

<!-- ImageStart -->
- Instance s malým poměrem počtu klauzulí k proměnným, jsou lehké na řešení.
- Tam kde je těch klauzulí spousta, tak se naopak dobře identifikuje, že to není řešitelný. 

![](../../Assets/Pasted%20image%2020241006185826.png)
<!-- ImageEnd -->
<!--ID: 1728241521269-->
END

---

### Neznámé metriky


START
FIT-Card

Jakými způsoby lze získávat instance problému?

Back:

- **Generováním instancí** - _sám si je nageneruju_
- **Sběrem instancí**
<!--ID: 1728241521278-->
END

---


START
FIT-Card

Co musíme dodržet při **generování instancí** problému?

Back:

**Každá instance** se zadanou metrikou musí být **stejně pravděpodobná**.
<!--ID: 1728241521285-->
END

---


START
FIT-Card

Co je **variance** v metrikách?

Back:

To jak moc se mi mohou lišit jednotlivé instance od sebe.

<!-- ExampleStart -->
Např. když chci mít graf s 5 uzlama, tak těch možností, jak ten graf bude vypadat je poměrně dost.
<!-- ExampleEnd -->
<!--ID: 1728241521293-->
END

---

START
FIT-Card

Co znamená **potlačení variance**?

Back:

Tím, že nad **výstupními metrikami** z instancí provedu **statistické zpracování**, **potlačí** mi to ty variance, tedy nebude tolik vadit to, že se mi ty instance od sebe liší.

<!-- ExampleStart -->
Např. Když mám **velké množství** čísel, tak můžu statisticky získat **průměr** a nevadí mi tolik, jak moc se třeba čísla od sebe liší (tzn. jestli se zrovna vygenerovaly "hloupě" nebo "dobře").
<!-- ExampleEnd -->
<!--ID: 1728241521301-->
END

---

START
FIT-Card

Jaké jsou kroky **obecného vyhodnocení algoritmu**? (3+2)

Back:

**Získání instancí**
1. Mám **charakterizaci instancí**
2. Měním si nějakou zadanou **vstupní metriku**
3. Pro každou **hodnotu vstupní metriky** mi generátor dá nějakou **instanci**

**Měření výstupní metriky**
1. **Pustím algoritmus** _nad instancemi_
2. **Měřím výstupní metriku**
3. Z výstupní metriky **udělám statistiku**, _abych potlačil varianci v instancích_
4. Udělám **interpretaci** statistiky
<!--ID: 1728241521306-->
END

---

### Statistiky


START
FIT-Card

Jaké **statistiky** se pro **jednu hodnotu zadané metriky** často používají? (2)

Back:

- **průměr**
- **medián**
<!--ID: 1728241521313-->
END

---


START
FIT-Card

**Co bych měl** z hlediska **statistiky** udělat na **datech výstupní metriky**?

Back:

1. Měl bych zjistit **statistické rozložení** dat _(uniformní, Gaussovo atd.)_.
2. Z toho pak **spočíst** **rozptyl** a **směrodatnou odchylku**.

Díky tomu výsledky měření **zkomprimuju** do pár informací (rozložení, rozptyl, odchylka).
<!--ID: 1728241521319-->
END

---


START
FIT-Card

K čemu mi je získaná **statistika** při **hodnocení algoritmu**? 

Back:

Když mám dva algoritmy $A$ a $B$, tak je pak mohu srovnávat.
<!--ID: 1728241521324-->
END

---


START
FIT-Card

Jakými způsoby můžu srovnávat statistiky algoritmů?

Back:

Na základě **parametrů rozložení** (rozptyl, odchylka)
<!-- ExampleStart -->
- Když má $A$ lepší všechny parametry, je $A$ lepší
- Jinak nevíme
<!-- ExampleEnd -->

Na základě **dominance**
<!-- ExampleStart -->
- Když $A$ je pro každou instanci lepší nebo stejně dobrý než $B$, je $A$ lepší algoritmus
<!-- ExampleEnd -->

Je možné, že **nevíme**. Pak je třeba hlubší analýza.
<!--ID: 1728241521331-->
END

---

### Randomizované algoritmy na jedné instanci

START
FIT-Card

Jak se liší v **hodnocení randomizovaných algoritmů** od normálních algoritmů?

Back:

Měřené výstupní metriky jsou **náhodná čísla** a to **i na jedné instanci**.


<!-- ExplanationStart -->
To vypadá následovně:
1. **Mám jednu instanci**
2. **Pustím algoritmus**, ten má v sobě nějaký zdroj náhodnosti
3. **Dostanu metriku**, která i na jedné instanci je **náhodná**

Dále postupuju stejně jako u normálního algoritmu.
<!-- ExplanationEnd -->

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241006194252.png)
<!-- ImageEnd -->
<!--ID: 1728241521339-->
END

---

#### Odvozené metriky

START
FIT-Card

Co jsou **primární metriky**?

Back:

Přímo měřené hodnoty.

<!-- ExampleStart -->
Čas běhu algoritmu.
<!-- ExampleEnd -->
<!--ID: 1728241521346-->
END

---


START
FIT-Card

Co jsou **sekundární metriky** (=kvantitativní srovnání)?

Back:

To co získám statistickou metodou z primárních.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241006194753.png)
<!-- ExampleEnd -->
<!--ID: 1728241521352-->
END

---


START
FIT-Card

Co je **vizualizace** výstupních metrik? 

Back:

Různé grafy, histogramy atd.
<!--ID: 1728241521360-->
END

---


START
FIT-Card

Mám **randomizovaný algoritmus**, co pustím s **různými parametry** _(p=0.1,p=0.4)_ nad jednou instancí. Z toho dostanu následující grafy výstupních metrik.

**Co budu dělat dál?**

![](../../Assets/Pasted%20image%2020241006195042.png)

Back:

1. Sestavím si z hodnot **distribuční funkci**.
2. Z toho pak vykoukám závěr.


<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241006195347.png)

Na pravém grafu např. vidím, že jedna volba parametru je rychlejší pro hodnoty menší než $35$ a druhá volba pro hodnoty větší.

![](../../Assets/Pasted%20image%2020241006195737.png)
<!-- ExampleEnd -->
<!--ID: 1728241521369-->
END

---


START
FIT-Card

Co je **korekce na úspěšnost**?

Back:

Normálně distribuční funkce nebere v potaz neúspěšné pokusy.

**Jak to vyřeším:**
Spočtu pravděpodobnost, že algoritmus **úspěšně skončil** nejvýše v tom kroku.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241006195706.png)
<!-- DetailInfoEnd -->
<!--ID: 1728241521376-->
END

---

### Randomizované algoritmy na více instancích
START
FIT-Card

Jak se liší v **hodnocení randomizovaných algoritmů na více instancích** od randomizovaných algoritmů **na jedné instanci**?

Back:


<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241006195900.png)
<!-- ImageEnd -->
<!--ID: 1728241521383-->
END

---


START
FIT-Card

Proč se u **randomizovaného algoritmu** na **více instancí** dělá **statistika dvakrát**?

![](../../Assets/Pasted%20image%2020241006195935.png)

Back:

Protože mám **dva zdroje variance**
- Randomizace v algoritmu
- Variance z jednotlivých instancí 

Musím tedy provést **dvakrát potlačení variance**, tady provést "statistiku ze statistiky".
<!--ID: 1728241521389-->
END

---


START
FIT-Card

Jak ověřím, jestli u **randomizovaného algoritmu** na **více instancích** mám **spolehlivá data**?

Back:

Buď zjistím, jestli mají výsledky stejné rozdělení (viz BI-PST).

Nebo pro **každou instanci** spustím algoritmus **několikrát** _(např. 4x)_ a pak spočtu diferenci _(tzn. jak moc se od sebe výsledky liší)_
<!--ID: 1728241521396-->
END

---

#### Potlačení instancí

![](../../Assets/Pasted%20image%2020241006200924.png)


### Robustnost heuristiky

START
FIT-Card

Co je **robustnost heuristiky**?

Back:

**Robustnost** = závislost práce heuristiky na **popisu instance**

<!-- ExampleStart -->
Když SAT solveru na vstupu přeházím pořadí proměnných ve formuli (a Booleva funkce zůstane stejná), SAT solver dá **jiné řešení** v **jiném čase**.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
- Často je důvodem nerobustnosti reprezentace množin **vektorem**.
- Když mám v algoritmu vybírat prvek pro zpracování, měl bych to vybírat **náhodně**
<!-- DetailInfoEnd -->
<!--ID: 1728241521404-->
END

---


START
FIT-Card

Co například negativně ovlivňuje **robustnost heuristiky**? (2)

Back:

- Reprezentace množin **vektorem**.
- Když mám v algoritmu vybírat prvek pro zpracování, měl bych to vybírat **náhodně**. _Jinak to může v určitých případech být nerobustní_.
<!--ID: 1728241521409-->
END

---


START
FIT-Card

Jak se měří **robustnost heuristiky**?

Back:

1. Mám **jednu instanci**
2. Vymyslím si **náhodnou perturbaci** = např. náhodné proházení vstupních prvků
3. Dostanu statistiku, **měřím, jak moc velkou varianci způsobily perturbace**

Když zjistím, že je variance velká, mám malou robustnost v daném případě.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241006202422.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
Pozor, všechny perturbace by měly být stejně pravděpodobný!
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241006202913.png)
<!-- ExampleEnd -->
<!--ID: 1728241521415-->
END

---

### Inženýrská algoritmika (sbírání instancí)



START
FIT-Card

Proč nemůžu jednoduše zprůměrovat nebo udělat medián na datech založených na **sbírání instancí**?

Back:

Protože pak nemůžu **porovnávat algoritmy**, když by statistiky jiných algoritmů byly založené na jiných zdrojích instancí.

Formálně protože "**nemůžeme eliminovat neznámé zdroje variance**"

<!-- ExplanationStart -->
Např. já si udělám statistiku na instancích, na kterých můj algoritmus běží rychle a někdo jiný si udělá statistiku na instancích, na kterých to běží pomalu. Porovnávání těch statistik pak nedává smysl.
<!-- ExplanationEnd -->
<!--ID: 1728241521421-->
END

---

START
FIT-Card

K čemu jsou dobré **standardní sady instancí**?

Back:

Můžu statistiky pro algoritmus dělat na základě standardizovaných sad instancí. 

**Díky tomu pak můžu algoritmy porovnávat.**

<!-- ExampleStart -->
To pak umožňuje porovnávání algoritmů.

Např. můžu mít sadu instancí pro sortící algoritmy, SAT solvery atd.
<!-- ExampleEnd -->

<!-- OtherInfoStart -->
Různé sady jsou vhodné pro různé statistiky. Např. některé sady jsou sesbírány "z praxe" a některé jsou víc teoretické.

Když dělám pak algoritmus co se má používat v praxi, nemá třeba smysl ho pouštět na obřích teoretických instancích, na kterých reálně nikdy běžet nebude.

Je tedy třeba vybrat **vhodnou sadu instancí**
<!-- OtherInfoEnd -->
<!--ID: 1728241521427-->
END

---

### Prezentování výsledků experimentu

START
FIT-Card

Jaké klíčové vlastnosti by měl mít experiment?

Back:

- **Provedení** experimentu musí být **opakovatelné** _(aby se např. ověřilo, že v měření nebyla chyba)_
- **Sběr dat** musí umožnit **alternativní interpretaci** _(např. že algoritmus je hodně efektivní pro určitou podtřídu těch instancí)_
- **Prezentace experimentu** musí budit **důvěru** ve výsledek
	- Tzn. musí být kvalitní **návrh, interpretace** atd.
<!--ID: 1728241521442-->
END

---


START
FIT-Card

Co je IMRaD?

Back:

Zaběhlý způsob **strukturování** experimentu
<!--ID: 1728241521453-->
END

---


START
FIT-Card

Jaké části má **IMRaD**? (4)

Back:

- **Introduction** - _vylíčení situace, proč je třeba se něco dozvědět_
- **Methods** - popsání návrhu experimentu, použité instance a algoritmy
- **Results** - data, grafy
- **Discussion, Conclusion** - diskuze jestli je výsledek spolehlivý, závěr, odpověď na otázku

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241006205545.png)
<!-- ImageEnd -->

<!-- OtherInfoStart -->
Jak mít přesvědčivý experiment:
![](../../Assets/Pasted%20image%2020241006205811.png)
![](../../Assets/Pasted%20image%2020241006205906.png)
<!-- OtherInfoEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241006205646.png)
![](../../Assets/Pasted%20image%2020241006205655.png)
![](../../Assets/Pasted%20image%2020241006205706.png)
![](../../Assets/Pasted%20image%2020241006205714.png)
![](../../Assets/Pasted%20image%2020241006205726.png)
<!-- DetailInfoEnd -->
<!--ID: 1728241521460-->
END

---


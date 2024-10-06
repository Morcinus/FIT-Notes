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


END

---


START
FIT-Card

Jaké jsou 2 typy vstupních metrik?

Back:

- Ty o kterých **víme** _(Např. u problému batohu víme počet věcí v batohu)_
- Ty o kterých **nevíme** _(Např. poměr věcí v batohu vůči jejich cenám)_

Ty co **nevíme** můžeme **objevovat**.

END

---


START
FIT-Card

Co je metrika **Fázový přechod**?

Back:

**Pravděpodobnost splnitelnosti formule v závislosti na poměru počtu klauzulí k počtu proměnných.**

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

END

---

### Neznámé metriky

START
FIT-Card



Back:



END

---

---
created: 2024-10-11T09:39:53
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP cviceni02 status-toReview

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je konfigurace?

Back:

Dána tím problémem, nezávisí na algoritmu.

**Konfigurace může být řešením**

Např. u problému batohu je konfigurace "věci které jsou v batohu"
<!--ID: 1728921215283-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co se dělá při řešení problému hrubou silou?

Back:

Zkouší se všechny **konfigurace** a tím se najde to správné řešení.
<!--ID: 1728921215286-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je konfigurační proměnný?

Back:

To, jak tu konfiguraci popsat.

Konfigurace - obecná, abstraktní
Konfigurační proměnný - něco konkrétního

Např. u problému batohu jsou konfigurační proměnné např. bitový vektor, množina atd.
<!--ID: 1728921215289-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je důležité u konfiguračních proměnných?

Back:

Konečný počet v konečných diskrétních doménách
<!--ID: 1728921215292-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Back:

Každé řešení je nějak kódováno hodnotami konfiguračních proměnných.

![[Pasted image 20241001162807.png]]

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

![[Pasted image 20241001163222.png]]

Např. pro bitový vektor:
ano
ano
ano
enumerace - u bitového vektoru 001, 010,011,...
$2^n$ možností

Back:
<!--ID: 1728921215295-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je problém minimálního uzlového pokrytí?

Back:

V grafu se snažím najít takovou pormnožinu uzlů, že s s nimi sousedí všechny hrany.

![[Pasted image 20241001163625.png]]
<!--ID: 1728921215298-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je **problém obchodního cestujícího**?

Back:

Mám města (uzly) a cesty (hrany). Hledám cestu tak abych navštívil všechna města.

![[Pasted image 20241001163845.png]]
![[Pasted image 20241001164136.png]]
ano
ano
ano
třeba rekurzí
2! možností
<!--ID: 1728921215300-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Proč se u problému obchodního cestujícího používá permutace?

Back:

Protože vím, že tam budu mít všechny možnosti -> nevynechám žádné řešení.
<!--ID: 1728921215303-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je bin packing problém?

Back:

Mám množství, každá má nějakou velikost a chci je naházet do popelnic. Za popelnice se platí, tak jich chci co nejmíň.

Konfigurace - kam ty věci naházim.

![[Pasted image 20241001164333.png]]
![[Pasted image 20241001164824.png]]

- Počet možností: $m^{\text{počet věcí}}$
  - Nevím, kolik je $m$, takže si to omezím na $\text{počet věcí}^{\text{počet věcí}}$
- ![[Pasted image 20241001164833.png]]
- <!--ID: 1728921215306-->
  END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Trik: když narazím na problém, kdy nevím, kolik je optimalizační kritérium a hledám to optimum, nastavit si horní hranici

Např. mám $n$ věcí co chci rozházet do co nejméně $m$ popelnic.

Nemá pak smysl mít $m > n$, protože to logicky nebude to nejlepší řešení.

Back:
<!--ID: 1728921215309-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je rectangle tiling problem?

Back:

Mám síť a mám daný počet obdélníků.

Optimalizační kritérium:

- V instanci problému jsou v políčkách čísla
- Váha obdélníku je součet těch čtverečků
- Optimální řešení je pak ten součet všech obdélníků, který jen nejmenší

> "No, je to makačka na bednu no" - Fisher

![[Pasted image 20241001165737.png]]
![[Pasted image 20241001170140.png]]

- Enumerace:
- Počet možností:

Jak vygeerovat všechny konfigurační proměnné?

- Ta množina bude furt stejná. Můžu na těch 16 pozicích čísel prostě protočit všechny možnosti.
  - Ano, něco z toho nebudou platný řešení, ale to mě zatím netrápí.

Možnosti na špatný řešení:

- Budou se mi obdélníky překrývat
- Budu mít prázdné políčko

Druhá možnost jak na to jít:
![[Pasted image 20241001170745.png]]

Možnosti na špatný řešení:

- Když to nebudou obdélníky
<!--ID: 1728921215312-->

END

---

> "Tak a teď byly moje oblíbený a teď přijdou vaše neoblíbený."

> "Samozřejmě slušnej student se toho problému lekne a odevzdá prázdný papír. Teď se budu snažit, abyste se nebáli."

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

**Takovýhle problémy budou v písemkách a zkouškách!!**

Back:

Chceme udělat deterministický automat, co když má na stupu dva binární řřetězce, tak ten automat má rozpoznávat řetězce z P a odmítat řetězce z N.

Konfigurace - ten automat
Jak zakódovat konfiguraci (=conf. proměnné) - tabulka přechodů

Hrubá síla nám vygeneruje všechn existující automaty o n stavech. A jeden z nich bude ten správnej. Žádné řešení nám neuteče, když vygenerujem všechny automaty.

- Problém je, že těch automatů může být nekonečně mnoho.
- Je to podobný jako s popelnicema, můžu si omezit ty stavy

Tip: když dostanu nějaký příklad typu automaty, tak je fajn si z toho vymyslet nějaký

![[Pasted image 20241001171052.png]]
<!--ID: 1728921215315-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je problém minimum graph motion planning?

Back:

Mám robota v grafu. Chci robota dostat do cíle. V jednom tahu můžu pohnout robotem nebo odsunout překážku na jiné místo.

Konfigurace:

- chronologický seznam pohybů (je jedno, jestli se hýbe robot nebo překážka)

![[Pasted image 20241001171917.png]]
![[Pasted image 20241001172113.png]]
<!--ID: 1728921215318-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je problém sokoban?

Back:

Mám skladníka, šoupe bednama, tím, že do nich strká. Snaží se je dostat na daná místa v co nejméně krocích.

![[Pasted image 20241001172406.png]]
![[Pasted image 20241001172517.png]]

Můžu si to reprezentovat tak, že řeším jen pohyby krabic, protože pohyby krabic jsou ekvivalentní s pohyby skladníka.
<!--ID: 1728921215321-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Co je problém minimum equivalent boolean formula?

Back:

![[Pasted image 20241001172903.png]]
<!--ID: 1728921215324-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

Do jakých tříd se dají rozdělit problémy?

Back:

Když dostanu nějaký problém, typicky ho můžu přirovnat k něčemu jinýmu.

![[Pasted image 20241001173147.png]]
<!--ID: 1728921215326-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

**Tipy na závěr:**

- **1. Když mám konstruktivní problém, tak ta konfigurace odpovídá tomu řešení. Tedy když hledám konfiguraci, kouknout na to řešení.**
  - **Když řešení je množina, tak konfigurace bude taky množina**
  - **Když je řešení permutace, tak konfigurace bude taky permutace**
  - Když je řešením automat, tak konfigurace bude taky automat atd.
- **2. Když mám odvodit konfigurační proměnný, tak mě optimalizační kritérium vůbec nezajímá!**

Back:
<!--ID: 1728921215329-->

END

---

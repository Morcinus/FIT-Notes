---
created: 2025-04-24T16:21:44
title: Datový sklad v organizaci
up:
  - "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska10 status-toReview


START
FIT-Card

Jaké jsou základní požadavky na datový sklad?

Back:

- ukládání dat
- reporting

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250424162241.png)
<!-- DetailInfoEnd -->

<!--ID: 1746599651518-->
END

---


START
FIT-Card

Jaké jsou nefunkční požadavky datových skladů?

Back:

![](../../Assets/Pasted%20image%2020250424162303.png)
<!--ID: 1746599651524-->
END

---


START
FIT-Card

Jaké jsou typy datové kvality? (2)

Back:

- technická - že to bude v určitém formátu, že to bude mít určité vlastnosti
- byznysová - např. když mají data určité hodnoty, které nejsou dobré pro byznys
<!--ID: 1746599651536-->
END

---


START
FIT-Card

Jaké jsou části Data warehouse?

Back:

- **Stage** - jen se tam nahrají data z jiných systémů
	- historizuje se, ale je to fakt drahý - každý den se to musí zálohovat
		- je to dobrý, když někdo zanese do dat chybu, tak se to dá díky tomu jednoduše fixnout
- **Jádro** - jednotný model, integrovaná data
- **Data marts** - data, reporty, analýzy typicky už pro konkrétní departmenty
- **Scheduler** - pravidelně přepočítává data


<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250424163241.png)
<!-- ImageEnd -->

<!--ID: 1746599651550-->
END

---


START
FIT-Card

Na co se dělí Stage?

Back:

- **Landing** - neřeší se tam datové typy
- **Stage** - tam se už řeší datové typy
<!--ID: 1746599651581-->
END

---


START
FIT-Card

Na co se dělí Core?

Back:

Buď je jen jedno historizované jádro.

Nebo se to dá takto rozdělit:
- **ActCore** - tam jsou jen aktuální data
- **HCore** (historizovaný) - je tam současnost i historie
- **Shop**
<!--ID: 1746599651597-->
END

---


START
FIT-Card

Je cílem do datového skladu nacpat všechna data firmy?

Back:

Nope, typicky pouze ta data, co jsou kritická pro byznys a pro reporting. Typicky bude hodně data ještě rozházených kolem.
<!--ID: 1746599651608-->
END

---


START
FIT-Card

Jaké jsou typy integrace DWH?

Back:

- Datová pumpa -  
- ETL nástroj - metadatový nástroj, umožňuje efektivně přepočítávat tabulky, které jsou na sobě závislé
<!--ID: 1746599651620-->
END

---


START
FIT-Card

Jak se modeluje core DWH?

Back:

Modelování core je typicky nejdražší a nejnáročnější, protože musí být vše namapováno na ten core. Musím zamezit duplikacím v systému.

- Typicky začnu tak, že vezmu nějaký už existující model z internetu (např. Teradata - FSLDM), některé entity tam vyškrtám a některé tam přidám
	- Nikdy není dobrý nápad začínat úplně od nuly

Pozn. datový model pak může sloužit i pro další systémy, nejen core datového skladu. Pak se to dobře integruje (levnější, lepší datová kvalita).

![](../../Assets/Pasted%20image%2020250424164836.png)
![](../../Assets/Pasted%20image%2020250424165631.png)
<!--ID: 1746599651632-->
END

---


START
FIT-Card

Jaký je rozdíl mezi faktem a dimenzí?

Back:

- **Fakty** - nějaké měřitelné číslo, nějaká _hodnota_ (dá se to počítat, agregovat)
- **Dimenze** - nad fakty jsou pak dimenze. Ty se typicky nedají dobře agregovat, např. adresa

![](../../Assets/Pasted%20image%2020250424170314.png)
<!--ID: 1746599651640-->
END

---


START
FIT-Card

Měl bych si v tabulkách ukládat procenta?

Back:

Ne, nedají se dobře agregovat, je lepší místo toho ukládat originální hodnoty
<!--ID: 1746599651651-->
END

---


START
FIT-Card

Jaké jsou 2 způsoby budování martů?

Back:

- **Kimbal** - tvrdí, že je dobré si udělat hierarchii - rok se dělí na dny, ty pak na hodiny atd. Pak se vytvéří "star schema". Z toho se pak joinama dají získat data podle toho, jak moc granulární je chci.
- **Druhý přístup** - udělat prostě obří plachtu (tabulku asi), kterou pak můžu prořezat podle toho, jaké dimenze potřebuju

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250424170650.png)
<!-- ImageEnd -->

<!--ID: 1746599651659-->
END

---


START
FIT-Card

Jak se dělí fakta?

Back:

![](../../Assets/Pasted%20image%2020250424170926.png)
<!--ID: 1746599651670-->
END

---


START
FIT-Card

Jaké jsou způsoby historizace dat?

Back:

- **Snapshoting** - udělám celou kopii těch dat např 1x za den (nedává moc smysl u dat, které se často nemění)
- **Slowly chaning dimenze** - uložím jednou, když vznikne změna, tak si uložím data
<!--ID: 1746599651680-->
END

---


START
FIT-Card

Jaké jsou typy slowly changing dimension?

Back:

![](../../Assets/Pasted%20image%2020250424171444.png)
<!--ID: 1746599651688-->
END

---


START
FIT-Card

Jak vypadá záznam v slowly changing dimension (SCD2)?

Back:

Když změním přijde změna, zapíšu do záznamu "end date", abych tím označil, do kdy je záznam platný a vytvořím nový se start datem

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250424171616.png)
![](../../Assets/Pasted%20image%2020250424171626.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599651699-->
END

---

### Shrnutí


START
FIT-Card

Jaké jsou jednotlivé kroky vytvoření datového skladu?

Back:

![](../../Assets/Pasted%20image%2020250424172247.png)
<!--ID: 1746599651706-->
END

---

![](../../Assets/Pasted%20image%2020250424172231.png)
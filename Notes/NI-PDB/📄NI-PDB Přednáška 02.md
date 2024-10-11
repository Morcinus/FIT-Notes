---
created: 2024-10-11T09:34:32
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB


START
Basic

Jak se dá znázornit SELECT při vyhodnocování?

Back:

Jako **strom**
- Kořen je select

![[Pasted image 20240923165757.png]]

END

---


START
Basic

Co je **optimalizace**?

Back:

Nacházení nejlepšího vyhodnocovacího plánu

END

---


START
Basic

Podle čeho se vyhodnocuje, který prováděcí plán je lepší?

Back:

![[Pasted image 20240923170923.png]]

Spočte se **cena** toho plánu a vybere se ten se nejnižší cenou.

Cena obsahuje (např.):
- **CPU** - jak moc musí procesor počítat, porovnávat atd.
- **Přístup k datům** - buď co cache nebo do storage (disk)

END

---


START
Basic

Opáčko: Jak se dají ukládat data? (4)

Back:

- **heap tabulka** - data jsou prostě v tabulce
- **index-organized table** - index, v listech má data
- **heap table with index** - index zvlášť a listy odkazují pomocí rowid na data
- **cluster** - shluk/bucker dat

![[Pasted image 20240923171047.png]]

END

---

> "Potom to začalo chytat Microsoftí vibe. Ty vole kámo na to nešahej, to si budeme dělat sami" - Valenta


START
Basic

Co jsou statistiky o tabulkách v Oraclu?

Back:

Oracle si u tabulek/stromů drží různé statistiky - např. počet hodnot atd.

![[Pasted image 20240923173735.png]]
![[Pasted image 20240923174138.png]]


END

---


START
Basic

Co je clustering factor?

Back:

Jak moc u sebe jsou data v heap tabulce (resp. jak moc je rozházená)

![[Pasted image 20240923174211.png]]

END

---



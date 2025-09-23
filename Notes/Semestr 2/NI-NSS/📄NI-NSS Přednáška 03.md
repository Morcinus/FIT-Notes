---
created: 2025-04-15T11:13:52
title: "Systems Development Methodologies"
up: "[[📖NI-NSS]]"
---

TARGET DECK: NI-NSS
FILE TAGS: NI-NSS prednaska02 status-toReview


START
FIT-Card

Jaký je rozdíl mezi metodologií, procesem, produktem, technique a notation?

Back:

- **Metodologie** - obecný postup při vývoji softwaru
- **Product** - to co se snažíme postavit
- **Technique** = co konkrétně udělat (např. princip antropomorfismu v OOP)
- **Notation** = vysvětluje jaké grafické symboly se používají
- **Tool**

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250415112313.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599654286-->
END

---


START
FIT-Card

Co je **coupling** a **cohesion**? Jakých vlastností chceme docílit?

Back:

- **Coupling** - kolik je dependencies mezi modulama
- **Cohesion** - jak silně spolu souvisí elementy v daném modulu

Cílem je **low coupling** a **high cohesion**!

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250415114505.png)
![](../../../Assets/Pasted%20image%2020250415114511.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599654293-->
END

---


START
FIT-Card

Co je **data coupling** (vs stamp coupling)?

Back:

**Data coupling:**
Myšlenka, že do modulu (funkce, classy) předám pouze ty informace, které jsou využívané v daném modulu a nic víc.

**Stamp coupling:**
Předáváme celou komplexní strukturu - např. celý Customer objekt

Např. nepředám "Customer" objekt, ale pouze "customerName".
<!--ID: 1746599654300-->
END

---


START
FIT-Card

Co je **antropomorfismus** v softwarovém inženýrství?

Back:

Myšlenka, že softwary a objekty by měly být modelovány podle toho, jak lidi vidí svět (např. OOP je docela antropomorfní).
<!--ID: 1746599654307-->
END

---


START
FIT-Card

Jaké byly původní metodologie SI?

Back:

1. **Waterfall**
2. **OOP**
3. **Iterativní development**
4. **Use-case driven development**
<!--ID: 1746599654313-->
END

---


START
FIT-Card

Co je myšlenka **design patternů**?

Back:

Když jsme po 25 letech nenašli univerzálně nejlepší metodologii, dává smysl se aspoň shodnout na malých patternech, na kterých se všichni shodnou, že to je kvalitní řešení.
<!--ID: 1746599654319-->
END

---


START
FIT-Card

Jaké jsou hlavní **nedostatky momentálních metodologií**? (4)

Back:

1. **Adoption of Methodologies** - různí vývojáři znají a používají různé design patterny atd.
	- I když je dobře sestavená teorie jak dobře budovat systémy, vývojáři to nedodržují konzistentně a proto není software tak kvalitní
2. **Vagueness** - metodologie a design patterny jsou furt hodně vágní a pořád lidi nejsou shodlý na tom, co přesně to znamená (např. loose coupling)
3. **Systematic Approach** - ne všichni aplikují good design systematicky
4. **Traceability** - metodologie nevynucují ani nepopisují přesně to, že by všechno mělo být traceable
<!--ID: 1746599654328-->
END

---

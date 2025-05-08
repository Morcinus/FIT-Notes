---
created: 2025-03-06T16:16:55
title: "Architektura a integrace"
up: "[[📖NI-PIS]]"
---

TARGET DECK: NI-PIS
FILE TAGS: NI-PIS prednaska03 status-toReview


START
FIT-Card

Jaké jsou typy architektury? (4)

Back:

![](../../Assets/Pasted%20image%2020250306162101.png)

Pozn. enterprise architektura obsahuje i organizaci podniku, i třeba uspořádání poboček apod.
<!--ID: 1746599651911-->
END

---


START
FIT-Card

Co je **software architektura**?

Back:

Architektura je "**znalost o systému**", kterou si lidé mezi sebou sdílí. Jsou tam ty **důležité věci** (to co ty lidi považujou za důležité).

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250306162129.png)
<!-- DetailInfoEnd -->

![](../../Assets/Pasted%20image%2020250306162927.png)
<!--ID: 1746599651918-->
END

---


START
FIT-Card

Co je SWEBOK?

Back:

Software Engineering Body of Knowledge
- Je to free knížka od IEEE, je tam kompletně popsný softwarové inženýrství.
- Prý to je dobrý, že tam jsou odkazy na další zdroje (**prý to nemá cenu číst**)
<!--ID: 1746599651925-->
END

---


START
FIT-Card

Co je C4 model?

Back:

Architekturu bychom měli zapisovat ve 4 různých úrovních.

Podobně jako mapy:
- kontinenty
- země
- části zemí
- street view
<!--ID: 1746599651933-->
END

---


START
FIT-Card

Co je Enterprise architecture?

Back:

![](../../Assets/Pasted%20image%2020250306164735.png)
<!--ID: 1746599651940-->
END

---


START
FIT-Card

Co je **TOGAF**?

Back:

Enterprise architecture framework

The Open Group Architecture Framework
- Je to popis jak dělat architekturu
- Je tam hromada různých doporučení atd.
	- Problém je, že tam není napsaný, jak to dělat
	- Těžko se to přímo aplikuje
- **Firmy se tím snaží řídit** (je to jednodušší, než se neřídit ničím)
<!--ID: 1746599651948-->
END

---


START
FIT-Card

Co je enterprise integration?

Back:

Propojování systémů vrámci podniku a mezi podnikem a externími systémy.

![](../../Assets/Pasted%20image%2020250306164751.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250306164801.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599651959-->
END

---


START
FIT-Card

Jaké jsou hlavní výzvy enterprise integrace? (5)

Back:

![](../../Assets/Pasted%20image%2020250306165806.png)
<!--ID: 1746599651967-->
END

---


START
FIT-Card

Co je shadow IT?

Back:

Když lidé používají IT systémy jinak, než je jak centrálně určeno, že se to má používat. 

Např. místo toho aby se začal používat nějaký nový informační systém, tak to někdo nabuší do excelu a rozpošle to mailem osatním. Ten excel pak je v tom podniku x let a lidi to furt používají.

![](../../Assets/Pasted%20image%2020250306170635.png)
<!--ID: 1746599651975-->
END

---


START
FIT-Card

Popiš následující obrázek
![](../../Assets/Pasted%20image%2020250306171016.png)

Back:

Vlevo jsou operační systémy
Vpravo je "svět analytiky/business intelligence"
<!--ID: 1746599651984-->
END

---


START
FIT-Card

Co je největší limitující hardwarový faktor v dnešní době?

Back:

**Propustnost (bandwidth)** je limitující.

- Storage ok
- CPU ok
<!--ID: 1746599651991-->
END

---


START
FIT-Card

Co je myšlenka Deploy není release?

Back:

Nemusím dělat release (např 1x za 4 týdny), ale můžu deployovat okamžitě a kdykoliv. Například 6x denně.

To může znamenat:
- Nasadím, ale pouze malé množství uživatelů má přístup k nové verzi
- Nebo nasadím a systém funguje duálně (obě verze)
- canary releases
- shadow releases
- apod.

Toho lze docílit pomocí Kubernetes
<!--ID: 1746599651999-->
END

---


START
FIT-Card

Kam se obecně pohybuje trend uchovávání dat?
![](../../Assets/Pasted%20image%2020250306171016.png)

Back:

Ten "datový svět" vpravo a "aplikační svět" vlevo se přibližují k sobě. Víc se míří k tomu, že bude jedno centrální místo na všechna data.
<!--ID: 1746599652006-->
END

---

---
created: 2025-03-04T10:20:51
title: "Náhodné vektory"
up: "[[📖NI-VSM]]"
---

TARGET DECK: NI-VSM
FILE TAGS: NI-VSM prednaska03 status-toReview


START
FIT-Card

Věta: **diskrétní náhodné veličiny jsou nezávislé** $\Leftrightarrow$
Back:

![](../../Assets/Pasted%20image%2020250304102407.png)

END

---


START
FIT-Card

Věta: **náhodné veličiny se druženým spojitým rozdělením jsou nezávislé** $\Leftrightarrow$

Back:

![](../../Assets/Pasted%20image%2020250304102402.png)

END

---


START
FIT-Card

Definice: diskrétní konvoluce

Back:

![](../../Assets/Pasted%20image%2020250304102443.png)

END

---


START
FIT-Card

Definice: **konvoluce**

Back:

![](../../Assets/Pasted%20image%2020250304102451.png)

![](../../Assets/Pasted%20image%2020250304112121.png)

END

---


START
FIT-Card

Věta: **Střední hodnota funkce** náhodného vektoru (pro diskrétní rozdělení)

Back:

![](../../Assets/Pasted%20image%2020250304102527.png)

Např. když mám náhodné veličiny výšku a váhu, tak můžu spočíst BMI index. Potom budu zkoumat rozdělení toho BMI indexu - například tu střední hodnotu.

END

---


START
FIT-Card

Věta: Střední hodnota funkce náhodného vektoru (pro spojité rozdělení)

Back:

![](../../Assets/Pasted%20image%2020250304102543.png)
![](../../Assets/Pasted%20image%2020250304102547.png)
END

---


START
FIT-Card

Co platí pro:
![](../../Assets/Pasted%20image%2020250304102614.png)

Back:

![](../../Assets/Pasted%20image%2020250304102617.png)

END

---


START
FIT-Card

Definice: **Kovariance**

Back:

![](../../Assets/Pasted%20image%2020250304102634.png)

Znaménko kovariance určuje, jeslti vztah těch náhodných veličin je "čím víc, tím míň" nebo "čím víc, tím víc"

END

---


START
FIT-Card

Definice: **korelační koeficient**

Back:

![](../../Assets/Pasted%20image%2020250304102647.png)

- Když to je 0, tak jsou nekorelované.
- Je to vždy mezi $-1$ a $1$

END

---


START
FIT-Card

Definice: **nekorelované** náhodné veličiny

Back:

![](../../Assets/Pasted%20image%2020250304102701.png)

END

---


START
FIT-Card

Vlastnost kovariance:
Nechť $X$ a $Y$ jsou náhodné veličiny s konečnými druhými momenty. Potom platí
![](../../Assets/Pasted%20image%2020250304102758.png)

Back:

![](../../Assets/Pasted%20image%2020250304102805.png)

END

---


START
FIT-Card

Vlastnost kovariance:
Nechť $X$ a $Y$ jsou náhodné veličiny s konečnými druhými momenty. Potom platí
![](../../Assets/Pasted%20image%2020250304102812.png)

Back:

![](../../Assets/Pasted%20image%2020250304102817.png)

END

---



START
FIT-Card

Vlastnost kovariance:
Nechť $X$ a $Y$ jsou náhodné veličiny s konečnými druhými momenty. Potom platí
![](../../Assets/Pasted%20image%2020250304102821.png)

Back:

![](../../Assets/Pasted%20image%2020250304102825.png)

END

---



START
FIT-Card

Vlastnost korelace:
Nechť $X$ a $Y$ jsou náhodné veličiny s konečnými druhými momenty. Potom platí
![](../../Assets/Pasted%20image%2020250304102849.png)

Back:

Prostě to je vždy mezi -1 a 1

![](../../Assets/Pasted%20image%2020250304102838.png)

END

---



START
FIT-Card

Vlastnost kovariance:
Nechť $X$ a $Y$ jsou náhodné veličiny s konečnými druhými momenty. Potom platí
![](../../Assets/Pasted%20image%2020250304102916.png)

Back:

![](../../Assets/Pasted%20image%2020250304102855.png)

Toto je prý důležitý.

Např. když měřím teplotu celsiích a změnu délky v metrech, tak pokud bych přecházel ke fahrenheitům a stopám, tak jen u obou veličin uděláme lineární transformaci a ten korelační koeficient zůstane stejný.

END

---



START
FIT-Card

Vlastnost kovariance:
Nechť $X$ a $Y$ jsou náhodné veličiny s konečnými druhými momenty. Potom platí

![](../../Assets/Pasted%20image%2020250304102948.png)

Back:

![](../../Assets/Pasted%20image%2020250304102921.png)

END

---


START
FIT-Card

Věta: nezávislost a nekorelovanost $X$ a $Y$

Back:

![](../../Assets/Pasted%20image%2020250304103007.png)

Tzn. korelace je 0

Pozor: Korelace odhaduje zejména **lineární závislost**. Může tam ale být jiná závislost a korelace to nemusí odhalit.

Kdyby ta závislost byla kvadratická, tak korelace mi řekne, že mezi tím není závislost.
![](../../Assets/Pasted%20image%2020250304113520.png)


END

---


START
FIT-Card

Co platí pro:
![](../../Assets/Pasted%20image%2020250304103023.png)

Back:

![](../../Assets/Pasted%20image%2020250304103028.png)

END

---


START
FIT-Card

Co platí pro:
![](../../Assets/Pasted%20image%2020250304103057.png)

Pokud $X$ a $Y$ jsou nekorelované

Back:

![](../../Assets/Pasted%20image%2020250304103052.png)

END

---


START
FIT-Card

Definice: **podmíněná distribuční funkce**

Back:

![](../../Assets/Pasted%20image%2020250304103118.png)

Např. zkoumám váhu studentů, kteří mají 180 cm.

END

---


START
FIT-Card

Jaký je rozdíl mezi **průměrem** a **střední** hodnotou?

Back:

Průměr je odhadem střední hodnoty.

Pokud vezmeme všechny jedince, tak teprve potom dostanu střední hodnotu.

Např. měřím výšku lidí na ČVUTu (získám průměr) to je pouze odhad. Pokud bych změřil všechny lidi, tak teprve získám střední hodnotu.

END

---


START
FIT-Card

Definice: **Podmíněná pravděpodobnost**

Back:

![](../../Assets/Pasted%20image%2020250304103132.png)

END

---


START
FIT-Card

Definice: **Podmíněná střední hodnota** pro **diskrétní** náhodné veličiny

Back:

![](../../Assets/Pasted%20image%2020250304103206.png)

END

---


START
FIT-Card

Definice: **Podmíněná hustota**

Back:

![](../../Assets/Pasted%20image%2020250304103218.png)

END

---


START
FIT-Card

Definice: **Podmíněná střední hodnota** pro **spojité** náhodné veličiny

Back:

![](../../Assets/Pasted%20image%2020250304103255.png)

![](../../Assets/Pasted%20image%2020250304103307.png)

END

---

## Charakterisitky náhodných veličin


START
FIT-Card

Definice: **Střední hodnota náhodného vektoru $X$**

Back:

![](../../Assets/Pasted%20image%2020250304103347.png)

END

---


START
FIT-Card

Definice: **střední hodnota náhodné matice $Z$**

Back:

![](../../Assets/Pasted%20image%2020250304103403.png)

END

---


START
FIT-Card

Věta: **Linearita střední hodnoty**

Back:

![](../../Assets/Pasted%20image%2020250304103436.png)

![](../../Assets/Pasted%20image%2020250304123800.png)
Jen tam jednoduše počítám lineární transformaci na prvcích té matice.

END

---


START
FIT-Card

Důsledek věty o linearitě střední hodnoty

![](../../Assets/Pasted%20image%2020250304103508.png)

Back:

![](../../Assets/Pasted%20image%2020250304103458.png)

END

---


START
FIT-Card

Definice: **variační matice**

Back:

![](../../Assets/Pasted%20image%2020250304103521.png)


![](../../Assets/Pasted%20image%2020250304103531.png)

END

---


START
FIT-Card

Věta: čemu se rovná variační matice náhodného vektoru $X$?

![](../../Assets/Pasted%20image%2020250304103621.png)

Back:

![](../../Assets/Pasted%20image%2020250304103603.png)

END

---


START
FIT-Card

Věta: Vztah variační matice k lineárním transformacím

Back:

![](../../Assets/Pasted%20image%2020250304103714.png)

END

---


START
FIT-Card

Věta: **symetričnost** a **definitnost** variační matice

Back:

![](../../Assets/Pasted%20image%2020250304103804.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250304103852.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Variační matice je symetrická právě když ...

Back:

![](../../Assets/Pasted%20image%2020250304103837.png)

END

---


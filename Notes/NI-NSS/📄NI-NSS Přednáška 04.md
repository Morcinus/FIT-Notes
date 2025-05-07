---
created: 2025-04-15T13:57:19
title: "Design Cycle"
up: "[[📖NI-NSS]]"
---

TARGET DECK: NI-NSS
FILE TAGS: NI-NSS prednaska04 status-toReview


START
FIT-Card

Kdy je systém považovaný za stabilní?

Back:

If a bounded input results in a bounded output.

Tzn. když mám např. konstantní vstup, tak i výstup je konstantní

Např. když je konzistentní vítr, tak se most víc a víc destabilizoval

Nebo když chci udělat malou změnu v softwarovém systém, tak ho to může totálně destabilizovat (pokud není vhodně navržen)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250415140116.png)
![](../../Assets/Pasted%20image%2020250415140211.png)
<!-- DetailInfoEnd -->

Příklad u softwaru:
![](../../Assets/Pasted%20image%2020250415140935.png)
<!--ID: 1746599654268-->
END

---


START
FIT-Card

Jak principielně fungují change ripples v softwarovém inženýrství?

Back:

Máme:
- Koncepty - data, akce atd.
- Implementace - konkrétní třídy, metody

Koncepty jsou jakoby požadavky na ten systém. Když se mi změní nějaký ten koncept (poždavek), tak se může stát, že je třeba změnit hromadu dalších věcí

![](../../Assets/Pasted%20image%2020250415140907.png)
<!--ID: 1746599654276-->
END

---


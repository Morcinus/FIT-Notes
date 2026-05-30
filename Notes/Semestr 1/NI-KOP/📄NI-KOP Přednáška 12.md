---
created: 2024-12-21T16:26:25
title: "Globální metody"
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP prednaska12 status-toReview


<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co jsou globální metody?

Back:

![](../../../Assets/Pasted%20image%2020241221171844.png)

Tags: core
<!--ID: 1736497489301-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak funguje dekompozice a kompozice v globálních metodách?

Back:

Rozdělím problém na menší problémy, ty vyřeším a pak to seskládám zpátky.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241221171935.png)

<!-- ImageEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241221172044.png)
![](../../../Assets/Pasted%20image%2020241221172601.png)
![](../../../Assets/Pasted%20image%2020241221172706.png)

<!-- ExampleEnd -->

Tags: core
<!--ID: 1736497489307-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti může mít kompozice?

Back:

- Když nějaká menší instance toho problému nemá řešení, tak je to ok a využiju řešení jiné
- Když nějaká menší instance toho problému nemá řešení, tak to celkově nemá řešení

![](../../../Assets/Pasted%20image%2020241221172901.png)
<!--ID: 1736497489311-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti může mít dekompozice problému?

Back:

Jakým způsobem rozděluju tu instanci.

- Např. na půl, nebo o jedno menší atd.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241221173107.png)

<!-- ExampleEnd -->
<!--ID: 1736497489315-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je přibližná dekompozice?

Back:

Když máme optimální řešení dílčích problémů, potom jsme schopni sestavit celkové řešení.

![](../../../Assets/Pasted%20image%2020241221173234.png)
<!--ID: 1736497489320-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je čistá dekompozice?

Back:

Když mám optimální řešení těch instancí, tak zvládnu sestavit **optimální** řešení celé instance. (tzn. zachovává se ta optimálnost)

![](../../../Assets/Pasted%20image%2020241221173301.png)

Tags: core
<!--ID: 1736497489325-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je přesná dekompozice?

Back:

Když mám všechny řešení podinstancí, tak z toho získám **všechny** optimální řešení celkových instancí. (Tzn. nejen že zachovávám optimálnost, ale najdu všechny ty optimální řešení)

Tags: core
<!--ID: 1736497489330-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou rozdíly mezi:

- přesnou dekompozicí
- přesnou a čistou dekompozicí

Back:

![](../../../Assets/Pasted%20image%2020241221173617.png)
<!--ID: 1736497489334-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak se počítá složitost kompozice a dekompozice?

Back:

Jako složitost průchodu tím stromem volání.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241221173733.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241221173825.png)
![](../../../Assets/Pasted%20image%2020241221174031.png)

<!-- ExampleEnd -->
<!--ID: 1736497489339-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je **redukce**?

Back:

Dekompozice, kde ten podproblém je vždy jen "o jedno menší". Tzn. ten strom volání je dost nevyvážený (např. protože to je jen jedna větev)

![](../../../Assets/Pasted%20image%2020241221174230.png)
<!--ID: 1736497489345-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je dynamické programování?

Back:

Je založené na čisté dekompozici.

![](../../../Assets/Pasted%20image%2020241221174250.png)

Tags: core
<!--ID: 1736497489349-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co jsou stupně v dekompozici?

Back:

![](../../../Assets/Pasted%20image%2020241221174337.png)
![](../../../Assets/Pasted%20image%2020241221174500.png)
<!--ID: 1736497489354-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 2 formulace dynamického programování?

Back:

![](../../../Assets/Pasted%20image%2020241221174520.png)

Tags: core
<!--ID: 1736497489359-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

U jakých problémů se vyplatí používat dynamické programování?

Back:

![](../../../Assets/Pasted%20image%2020241221174615.png)
<!--ID: 1736497489364-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Na čem obecně závisí složistost dopředného výpočtu?

Back:

![](../../../Assets/Pasted%20image%2020241221174731.png)
<!--ID: 1736497489368-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak funguje metoda rozděl a panuj?

Back:

Jsou to algoritmy založené na **přibližné dekompozici**

![](../../../Assets/Pasted%20image%2020241221175647.png)

Tags: core
<!--ID: 1736497489374-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jaké výsledky jsou, když použijeme globální metody složené z různých dekompozic?

Back:

![](../../../Assets/Pasted%20image%2020241221175920.png)
<!--ID: 1736497489379-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je splitting rule u dekompozice DPLL?

Back:

![](../../../Assets/Pasted%20image%2020241221180743.png)
<!--ID: 1736497489383-->

END

---

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Co je unity propagation u dekompozice DPLL?

Back:

![](../../../Assets/Pasted%20image%2020241221180810.png)
<!--ID: 1736497489387-->

END

---

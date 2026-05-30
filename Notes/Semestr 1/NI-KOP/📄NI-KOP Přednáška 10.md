---
created: 2024-12-08T13:46:14
title: Simulovaná evoluce 2
up:
  - "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP prednaska10 status-toReview


### Evoluční strategie

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak principielně funguje nasazení **evoluční strategie**?

Back:

- Použijeme ji, pokud máme jako konfiguraci vektor **reálných čísel**
- Máme parametry, které řídí **mutaci** (velikost kroků, standardní odchylky atd.)

Tags: core
<!--ID: 1735205749556-->

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

Jak se řídí populace při nasazení evoluční strategie?

Back:

![](../../../Assets/Pasted%20image%2020241208141020.png)
<!--ID: 1735205749558-->

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

Jak funguje rekombinace při nasazení evoluční strategie?

Back:

Mám 3 možnosti:

- **Diskrétní** - pro každou dimenzi je náhodně vybrán rodič
- **Střední** - vyberu si rodiče a ty zprůměruju
- **Vážená** - všech rodičů je zprůměrováno váženým průměrem

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241208141044.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749560-->

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

Co je **centroid** při nasazení evoluční strategie?

Back:

![](../../../Assets/Pasted%20image%2020241208141342.png)
![](../../../Assets/Pasted%20image%2020241208141351.png)

Tags: core
<!--ID: 1735205749563-->

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

Jak funguje **mutace** u evoluční strategie?

Back:

![](../../../Assets/Pasted%20image%2020241208141522.png)
![](../../../Assets/Pasted%20image%2020241208141527.png)

Tags: core
<!--ID: 1735205749565-->

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

Jak se vybírají jedinci **pro mutaci** při nasazení **evoluční strategie**? (2)

Back:

Několik možností:

- **vyberu nezávisle na zdatnosti**
  - Výhoda, že to je deterministický
  - Musím v následující selekci používat zdatnost
- **vyberu závisle na zdatnosti**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241208141551.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749568-->

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

Jaké jsou dvě adaptace při nasazení evoluční strategie?

Back:

- adaptace pravidlo 1/5
- adaptace: jedna generace

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241208141640.png)
![](../../../Assets/Pasted%20image%2020241208141645.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749570-->

END

---

### Genetické programování

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **genetické programování**? Jaké jsou 3 reprezentace?

Back:

- určeno k produkci spustitelných programů
- Reprezentace:
  - **strom výpočtu (výrazu)** - genetické programování
  - **řetěz jazyka** - lineární genetické programování
  - **orientovaný acyklický graf** - kartézské programování

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241208142755.png)

<!-- DetailInfoEnd -->

Tags: core
<!--ID: 1735205749573-->

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

Jaká je kostra genetického programování?

Back:

![](../../../Assets/Pasted%20image%2020241208142809.png)

Tags: core
<!--ID: 1735205749576-->

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

Jak funguje stromová reprezentace v genetickém programování?

Back:

![](../../../Assets/Pasted%20image%2020241208142952.png)

Tags: core
<!--ID: 1735205749578-->

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

Jak funguje **inicializace stromové reprezentace** v genetickém programování?

Back:

![](../../../Assets/Pasted%20image%2020241208143012.png)

Tags: core
<!--ID: 1735205749581-->

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

Jak funguje **křížení stromové reprezentace** v genetickém programování?

Back:

![](../../../Assets/Pasted%20image%2020241208143031.png)

Tags: core
<!--ID: 1735205749583-->

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

Jak funguje **mutace stromové reprezentace** v genetickém programování?

Back:

![](../../../Assets/Pasted%20image%2020241208143048.png)

Tags: core
<!--ID: 1735205749586-->

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

Co jsou automaticky definované funkce v genetickém programování?

Back:

![](../../../Assets/Pasted%20image%2020241208143117.png)
<!--ID: 1735205749588-->

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

Jak funguje kartézské genetické programování?

Back:

![](../../../Assets/Pasted%20image%2020241208143139.png)
![](../../../Assets/Pasted%20image%2020241208143145.png)
<!--ID: 1735205749591-->

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

Jak funguje mutace a rekombinace v genetickém programování?

Back:

![](../../../Assets/Pasted%20image%2020241208143209.png)

![](../../../Assets/Pasted%20image%2020241208143227.png)
<!--ID: 1735205749594-->

END

---

### Evoluční programování

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->
START
FIT-Card

(FIT-Notes flashcard)

Jak **funguje evoluční programování**?

Back:

![](../../../Assets/Pasted%20image%2020241208143253.png)
![](../../../Assets/Pasted%20image%2020241208143257.png)
![](../../../Assets/Pasted%20image%2020241208143302.png)

Tags: core
<!--ID: 1735205749596-->

END

---

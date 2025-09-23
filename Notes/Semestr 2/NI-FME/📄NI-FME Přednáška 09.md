---
created: 2025-04-16T11:01:30
title: Symbolic Execution, BMC
up:
  - "[[📖NI-FME]]"
---

TARGET DECK: archive
FILE TAGS: NI-FME prednaska09 status-toReview


START
FIT-Card

K čemu slouží Symbolické provádění programů?

Back:

K hledání bugů
<!--ID: 1746599654609-->
END

---


START
FIT-Card

Kdy program $P$ může sledovat cestu provádění?

Back:

![](../../../Assets/Pasted%20image%2020250416110731.png)
<!--ID: 1746599654615-->
END

---


START
FIT-Card

Jak se provádí Symbolické provádění programů?

Back:

![](../../../Assets/Pasted%20image%2020250416110825.png)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250416110842.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599654623-->
END

---


START
FIT-Card

Jak funguje nad-aproximace?

Back:

![](../../../Assets/Pasted%20image%2020250416110947.png)
<!--ID: 1746599654630-->
END

---


START
FIT-Card

Jak funguje pod-aproximace?

Back:

![](../../../Assets/Pasted%20image%2020250416111002.png)

<!-- ExerciseStart -->
![](../../../Assets/Pasted%20image%2020250416111028.png)
<!-- ExerciseEnd -->
<!--ID: 1746599654638-->
END

---


START
FIT-Card

Jak funguje Dynamic Test Generation?

Back:

![](../../../Assets/Pasted%20image%2020250416111133.png)
<!--ID: 1746599654646-->
END

---


START
FIT-Card

Pokrývá dynamic test generation všechny cesty kódem? 

Back:

Nope, pokryje se jen nějaký strom do určité hloubky

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250416111231.png)
![](../../../Assets/Pasted%20image%2020250416111237.png)
<!-- DetailInfoEnd -->
<!--ID: 1746599654653-->
END

---


START
FIT-Card

Co je Path Explosion Problem?

Back:

Cest v kódu je strašně moc a pokrýt všechny je prakticky nerealistický

![](../../../Assets/Pasted%20image%2020250416111309.png)
<!--ID: 1746599654661-->
END

---


START
FIT-Card

Co je Whitebox Fuzzing?

Back:

Hledá nové test cases, které by se daly otestovat.

Např. díky sousedům - bere testy co už existují a vymyslí nějakého souseda (blízký test, kde např. prohodí nějaký parametr).

![](../../../Assets/Pasted%20image%2020250416113512.png)
<!--ID: 1746599654668-->
END

---


START
FIT-Card

Jak funguje odvinutí smyček?

Back:

![](../../../Assets/Pasted%20image%2020250416111437.png)
![](../../../Assets/Pasted%20image%2020250416111444.png)
![](../../../Assets/Pasted%20image%2020250416111453.png)
![](../../../Assets/Pasted%20image%2020250416111459.png)
<!--ID: 1746599654675-->
END

---


START
FIT-Card

Jak funguje SSA v přítomnosti `if` a `if-then-else`

Back:

![](../../../Assets/Pasted%20image%2020250416111528.png)
![](../../../Assets/Pasted%20image%2020250416111539.png)
![](../../../Assets/Pasted%20image%2020250416111551.png)
<!--ID: 1746599654683-->
END

---


START
FIT-Card

Jaký je postup při ověření omezené správnosti programů?

Back:

![](../../../Assets/Pasted%20image%2020250416111642.png)
![](../../../Assets/Pasted%20image%2020250416111715.png)
![](../../../Assets/Pasted%20image%2020250416111729.png)
<!--ID: 1746599654690-->
END

---


START
FIT-Card

Co platí pro nalezení chyb?

Back:

![](../../../Assets/Pasted%20image%2020250416111824.png)
<!--ID: 1746599654697-->
END

---


START
FIT-Card

Jak se dá kombinovat BMC s testováním?

Back:

![](../../../Assets/Pasted%20image%2020250416111943.png)
<!--ID: 1746599654705-->
END

---


START
FIT-Card

Jaké techniky se používají pro ověřování správnosti programu automaticky?

Back:

![](../../../Assets/Pasted%20image%2020250416112021.png)
<!--ID: 1746599654712-->
END

---

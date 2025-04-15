---
created: 2025-04-15T15:22:21
title: "Dimensions of Variability and Evolvability"
up: "[[📖NI-NSS]]"
---

TARGET DECK: NI-NSS
FILE TAGS: NI-NSS prednaska08 status-toReview


START
FIT-Card

Co je Prime Radiant?

Back:

Tool, který mi umožňuje spravovat Mirrors, Skeletons, Utilities a Craftings

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250415152940.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jak se řeší změny v Mirrors?

Back:

Mirrors - Data
- Přidávat atributy Data entitám
- Je umožňeno přidávat nové Data entity

Mirrors - Task
- Je možné přidávat additional task implementations
- Je možné přidávat mandatory task implementations
- Je možné přidávat additional processing

Mirrors - Flow
- Je možné přidávat nebo modifikovat state transitions
- Je možné implementovat nové sequencing flow

END

---


START
FIT-Card

Jak se řeší změny v Utilities?

Back:

Utilities = např. externí knihovny, frameworky

- Je potřeba změnit pouze ty classy, které se týkají té konkrétní technologie
- Pokud máme k dispozici expansion, můžeme změnit pouze template nějakého elementu a díky tomu se to změní ve více třídách najednou

<!-- ImageStart -->
(1)
![](../../Assets/Pasted%20image%2020250415153749.png)

(2)
![](../../Assets/Pasted%20image%2020250415153953.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jak se řeší změny v skeletons?

Back:

- (1) Je možné přidat nový concern k elementu -> přidají se nové classy ke všem elementům

<!-- ImageStart -->
(1)
![](../../Assets/Pasted%20image%2020250415154158.png)
<!-- ImageEnd -->


END

---

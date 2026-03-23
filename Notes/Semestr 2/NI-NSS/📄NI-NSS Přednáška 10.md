---
created: 2025-04-15T16:15:02
title: "Project Walkthrough"
up: "[[📖NI-NSS]]"
---

TARGET DECK: archive
FILE TAGS: NI-NSS prednaska10 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Jak vypadá tým NS systému?

Back:

![](../../../Assets/Pasted%20image%2020250415161926.png)
<!--ID: 1746599654057-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká metodologie se používá při vývoji NS projects?

Back:

Agile nebo iterativní

Rozdíl je, že analyst má také jako práci vytvářet Models a Expanders
<!--ID: 1746599654073-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou hlavní NSX tools?

Back:

- NS Modeler - umožňuje modelovat věci vizuálně
- NS Prime Radiant - "meta-aplikace", která umožňuje vytvářet kód z modelů
<!--ID: 1746599654083-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak vypadá NS workflow?

Back:

1. Sestaví se requirements
2. Analytik sestaví Modely a Expanders
3. NS Prime Radiant vygeneruje skeleton
4. Skeleton se ukáže zákazníkovi
5. Zákazník dá feedback
6. Crafting Programmer pak kódí custom kód
7. Takto se pořád provádí iterace
8. Nakonec se rebuildne skeleton a deployne se
9. Po delivery: 1. Pravidelně se dělá Rejuvenation (třeba každý 3 měsíce) - díky tomu je aplikace furt aktuální 1. Harvesters collectnou custom kód 2. Přegeneruje se skeleton 3. Injectne se custom kód zpět
<!--ID: 1746599654091-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké metriky se průběžně sledují v NS systému?

Back:

Počet custom craftings - pokud to roste, znamená to, že si dělám moc custom kódu a měl bych spíš přidat nějaký expanders atd.
<!--ID: 1746599654100-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Vysvětli co je Expander MetaCircle a Developer MetaCircle

Back:

![](../../../Assets/Pasted%20image%2020250508145152.png)
<!--ID: 1746710070290-->

END

---

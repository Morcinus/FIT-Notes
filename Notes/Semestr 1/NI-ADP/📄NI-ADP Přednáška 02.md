---
created: 2024-10-11T09:28:33
up: "[[📖NI-ADP]]"
---

TARGET DECK: archive
FILE TAGS: NI-ADP prednaska02 status-toReview

START
Basic

Má cenu přepisovat software, když je ta codebase špatná?

Back:

Ve většině případů ne, měla by to být ta poslední možnost
<!--ID: 1728921214924-->

END

---

START
Basic

Jaké jsou základní programátorské principy?

Back:

- DRY
- KISS
- YAGNI
- SOLID
- SoC
- LoD
- Avoid premature optimization
- The boy scout rule
- Principle of least astonishment
  <!--ID: 1728921214927-->
  END

---

START
Basic

Jak využít DRY princip, když mám třídu Coffee a chci udělat Tea?

Back:

Typicky využít dědičnost, protože tam většina funkcí bude stejná
<!--ID: 1728921214930-->

END

---

START
Basic

Jaká je situace, kdy **nechci** použít DRY?

Back:

U testů bych např. neměl dělat funkce na setup toho testování, protože tím snižuju čitelnost těch testů.

Když budu volat různé metody, tak tím snížím čitelnost těch testů!
<!--ID: 1728921214933-->

END

---

START
Basic

Jak bych měl používat KISS princip?

Back:

- **Neměl bych vytvářet abstrakce "dopředu", pokud to není potřeba.**
- **Neměl** bych se vždy snažit "psát kód na méně řádků", protože to snižuje čitelnost

Když např. mám kavárnu a vím, že nebudu prodávat čaj, nemusím dělat nutně abstrakce.
<!--ID: 1728921214936-->

END

---

START
Basic

Jak bych měl používat princip YAGNI?

Back:

- Neměl bych se snažit do programu nacpat všechny ty cool nové věci (např. knihovny, zbytečný future proofing atd.) - Pokud ta věc je o trošku dražší a potenciálně nám to v budoucnu hodně pomůže, tak to udělat - Pokud ta věc je o dost dražší a potenciálně nám to v budoucnu hodně pomůže, kašlat na to
  <!--ID: 1728921214939-->
  END

---

START
Basic

Co je solid princip? (5)

Back:

- S - Single responsibility principle
  - Jedna metoda/třída by měla mít jednu zodpovědnost
  - Princip: Když chci dát do názvu "and", tak to znamená, že ta funkce dělá moc věcí.
- O - Open-closed principle
  - "Open for extension, closed for modification"
  - Když se např. rozhodnu vyměnit
- L - Liskov substitution principle
  - Všude kde používám rodiče můžu použít potomka
- I - Interface segregation principle
- D
  <!--ID: 1728921214942-->
  END

---

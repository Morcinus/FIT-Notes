---
created: 2024-11-07T10:12:34
title: "Stavový prostor a lokální heuristiky"
up: "[[📖NI-KOP]]"
---

TARGET DECK: archive
FILE TAGS: NI-KOP prednaska06 status-toReview

### Základní pojmy

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **globální metody**

Back:

Řešení zadané instance konstruujeme z řešení dílčích instancí.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241107103412.png)

<!-- ExampleEnd -->
<!--ID: 1730978213040-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: řešení **hrubou silou**

Back:

Řešení zadané instance konstruujeme procházením konfigurací

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241107103447.png)

<!-- ExampleEnd -->
<!--ID: 1730978213044-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **princip lokálních metod** (hladový algoritmus)

Back:

Algoritmus, ve kterém se věnujeme jedné (aktuální) konfiguraci a vybíráme příští z jejích sousedů).

Sousedé konfigurace, kam jsem schopný se dostat jedním krokem.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241107103735.png)

<!-- ExampleEnd -->
<!--ID: 1730978213048-->

END

---

### Stavový prostor

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **stav** systému/algoritmu? (obecně)

Back:

Obecně to jsou **všechny hodnoty, které ovlivňují chod algoritmu** (rozhodování, výběr možností).

<!-- ExampleStart -->

Příklad u problému batohu:

- Postupně přidávám věci (jakoby DFS v tom grafu) a testuju jeslti jsem nepřetekl batoh. - Např. na obrázku nejdřív například přidám druhou věc, to je ok, potom první, to je ok a pak třetí a to už jsem přetekl, takže jsem se dostal do nevalidního stavu. - Takhle postupně vyzkouším všechny kombinace
  ![](../../../Assets/Pasted%20image%2020241107103841.png)

Kompletní graf pak vypadá takhle:
![](../../../Assets/Pasted%20image%2020241107104027.png)

<!-- ExampleEnd -->
<!--ID: 1730978213052-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **stav** algoritmu

Back:

Stav je **ohodnocení konfiguračních proměnných**

![](../../../Assets/Pasted%20image%2020241107104804.png)

<!--ID: 1730978213055-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **operátory a stavový prostor**

Back:

![](../../../Assets/Pasted%20image%2020241107104840.png)

<!--ID: 1730978213059-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Akce** ve stavovém prostoru

Back:

![](../../../Assets/Pasted%20image%2020241107104918.png)

<!--ID: 1730978213063-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **graf stavového prostoru algoritmu**

Back:

![](../../../Assets/Pasted%20image%2020241107104935.png)

<!--ID: 1730978213066-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **okolí stavu**

Back:

![](../../../Assets/Pasted%20image%2020241107104951.png)

<!--ID: 1730978213070-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **$k$-okolí stavu**

Back:

![](../../../Assets/Pasted%20image%2020241107105010.png)

<!--ID: 1730978213074-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **sousední stavy (sousedé)**

Back:

![](../../../Assets/Pasted%20image%2020241107105038.png)

<!--ID: 1730978213077-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **inverzní operátor**?

Back:

Operátory, který jde opačným směrem než původní operátor

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241107105542.png)

<!-- ExampleEnd -->
<!--ID: 1730978213081-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké 2 základní vlastnosti může mít stavový prostor?

Back:

- Acyklický
- Cyklický

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107105951.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978213084-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Vzdálenost uzlu $s_2$ od $s_1$**

Back:

![](../../../Assets/Pasted%20image%2020241107110030.png)

<!--ID: 1730978213088-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **dostupný** graf?

Back:

Mezi **každými dvěma** uzly musí **existovat cesta**.

<!-- InformallySaidStart -->

Z každého stavu se dá dostat do každého stavu

<!-- InformallySaidEnd -->
<!--ID: 1730978213092-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **symetrický** graf?

Back:

Z **každého stavu** se do **každého stavu** dostanu po **stejně dlouhé cestě**.

![](../../../Assets/Pasted%20image%2020241107110149.png)

<!--ID: 1730978213096-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **relaxace stavu**?

Back:

V našem algoritmu povolíme, aby se dostával do neplatných stavů, ale tyto stavy **penalizujeme** tak, že **zhoršíme hodnotu optimalizačního kritéria** na nějakou **vzdálenost** od platného řešení.

![](../../../Assets/Pasted%20image%2020241107110828.png)

<!-- ExplanationStart -->

Jinými slovy penalizujeme stav podle toho "jak moc je blbě".

Např. u problému bahotu nám relaxace říká, jak moc je batoh přetížený (o jakou váhu)

Můžeme ve **vzorci** měnit koeficient a tím říkat "jak moc přísná" je ta pokuta.

Ten vzorec je typicky **součet** (nikoliv násobek)

<!-- ExplanationEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107110814.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241107111551.png)
![](../../../Assets/Pasted%20image%2020241107111556.png)
![](../../../Assets/Pasted%20image%2020241107111602.png)

<!-- ExampleEnd -->
<!--ID: 1730978213099-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **penalizace stavu**?

Back:

Povolíme neplatný řešení a nějak je **penalizujeme** konstantní hodnotou.

<!-- ExampleStart -->

Např. každému neplatnému stavu nastavíme hodnotu na nula.

<!-- ExampleEnd -->
<!--ID: 1730978213103-->

END

---

### Prostor prohledávání

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah **stavového prostoru** a **prostoru prohledávání**?

Back:

Každému bodu prostoru prohledávání odpovídá oblast stavového prostoru.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241107112141.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107112150.png)
![](../../../Assets/Pasted%20image%2020241107112155.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978213106-->

END

---

### Strategie pohybu ve stavovém a prohledávacím prostoru

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Z čeho se skládá pohyb ve stavovém prostoru?

Back:

- **Aktuální stav** - konfigurace příslušející aktuálnímu stavu
- **Transformace** aktuálního stavu pomocí operátorů
- **Strategie prohledávání** - to jaké transformace aplikuju (např. v jakém pořadí)
<!--ID: 1730978213109-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **úplná strategie**

Back:

![](../../../Assets/Pasted%20image%2020241107112547.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107112714.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978213113-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Definice: **Systematické strategie**

Back:

![](../../../Assets/Pasted%20image%2020241107112603.png)

<!--ID: 1730978213117-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **úplný algoritmus**?

Back:

![](../../../Assets/Pasted%20image%2020241107112730.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107112740.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978213120-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **systematická strategie**?

Back:

![](../../../Assets/Pasted%20image%2020241107112932.png)

Algoritmus:

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107113002.png)

![](../../../Assets/Pasted%20image%2020241107113155.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978213123-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jakou výhodu a nevýhodu mají **systematické strategie**?

Back:

- **Výhoda**: Naleznou **optimální řešení**, existuje-li
- **Nevýhoda**: Bez prořezávání má v nejhorším případě složitost rovnou **hrubé síle**
<!--ID: 1730978213126-->

END

---

#### Lokální heuristiky

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **lokální heuristika** v **systematické strategii**?

Back:

Lokální heuristika je funkce `try(state)`, která pomáhá najít nejlepšího kandidáta (stav) pro porovnání s best stavem v další iteraci.

Takto vypadá algoritmus využívající lokální heuristiku:
![](../../../Assets/Pasted%20image%2020241109155157.png)

<!--ID: 1730978213130-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **best only** lokální heurisitika u **systematické strategie**?

Back:

Jak funguje:

- Vybere **nejlepšího souseda daného stavu**.
- Pokud **žádný soused** není lepší než daný stav, **vrátí $\emptyset$**

![](../../../Assets/Pasted%20image%2020241107113911.png)
![](../../../Assets/Pasted%20image%2020241107113923.png)

Je to "nejmíň odfláknutá lokální heuristika".

<!--ID: 1730978213133-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Záleží u **first improvement** a **best only** lokální heuristiky na pořadí procházení sousedů? Ovlivní to výsledek

Back:

- U **best only** na tom nezáleží, neovlivní to výsledek (pokud nejlepších stavů není více!)
- U **first improvement** na tom záleží, ovlivní to výsledek (-> je to víc randomizovaný)
<!--ID: 1731175818734-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **first improvement** lokální heurisitika u **systematické strategie**?

Back:

Jakmile se najde soused, který je lepším řešením, řekne, že to je ten kandidát na nejlepší řešení.

![](../../../Assets/Pasted%20image%2020241107114138.png)

<!--ID: 1730978213137-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká je nevýhoda **first improvement** lokální heuristiky?

Back:

Při procházení preferuje ty stavy, které jsou nejblíže počátečnímu (resp. ty operátory).

To v některých algoritmech dělá neplechu, protože by výsledek algoritmu neměl záviset na uspořádání jednotlivých stavů/operátorů.

<!--ID: 1730978213141-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak bych měl správně navrhovat heuristiky a stavové prostory?

Back:

- Spíše používat mnoho jednoduchých, rychlých akcí
- Spíše používat mnoho akcí, které nemění konfiguraci drasticky

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241107114531.png)

<!-- ImageEnd -->
<!--ID: 1730978213145-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je "okolí heuristik Kerninghan-Lin"?

Back:

Prohledává se stavový prostor jedním směrem (jako větev DFS), potom se z celé větve vybere nejlepší řešení (stav) a ten se pak považuje za aktuální stav

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107114946.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978213481-->

END

---

#### Pohyb v prohledávacím prostoru

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **backtracking v prohledávacím prostoru**?

Back:

Možnost alogritmu se **vrátit v prohledávacím prostoru** (= odvolat nastavení proměnné), **aniž bych musel mít zadefinované inverzní operátory**, abych mohl skákat potřeboval "skákat zpět".

<!--ID: 1730978213543-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Z čeho se skládá krok prohledávání v prohledávacím prostoru?

Back:

1. vyber **proměnnou**
2. vyber **hodnotu** proměnné
<!--ID: 1730978213605-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Na co se vztahuje **prořezávání** v prohledávacím prostoru?

Back:

Prořezávání se vztahuje na **oblast stavového prostoru**

<!--ID: 1730978213610-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **prořezávání** v **prohledávacím prostoru**?

Back:

Prořezávání znamená, že **odstraním podprostory** v prohledávacím prostoru, které nemá smysl procházet.

<!-- ExampleStart -->

Problém batohu:
Když jsem došel do stavu, kdy už mám přeplněný batoh, tak nedává smysl zkoušet možnosti, jestli tam mám ještě něco přidávat nebo ne, protože v obou případech to furt bude přetížený (viz pravá větev na obrázku 2).
![](../../../Assets/Pasted%20image%2020241107120212.png)
![](../../../Assets/Pasted%20image%2020241107120318.png)

<!-- ExampleEnd -->
<!--ID: 1730978213614-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **problém zlomkového batohu**?

Back:

To samé jako problém batohu, ale můžu do batohu dát i jenom **část** nějaké věci.

Tzn. nejsem v celých číslech, ale v racionálních.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241107120736.png)

<!-- DetailInfoEnd -->
<!--ID: 1730978213617-->

END

---

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **prohledávání** v prohledávacím prostoru **problému zlomkového batohu**?

Back:

_Pozn. tímhle si nejsem úplně jistý, jestli jsem ten algoritmus správně pochopil/popsal (ale dávalo by mi to takhle největší smysl) -Morčín_

1. Pro každého souseda:
   1. Naplním batoh co nejvíce tím sousedem (tou věcí)
   2. Spočtu cenu toho batohu
2. Ze všech sousedů vyberu toho co naplnil batoh největší cenou
3. Jako novou velikost batohu označím velikost zbývajícího prostoru v batohu

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241107121014.png)

<!-- ImageEnd -->
<!--ID: 1730978213621-->

END

---

#### Prořezávání stavového prostoru

<!--
Exam Note ID: NI-SPOL-13
Exam Note Section Name: Princip lokálních heuristik
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje obecně **prořezávání stavového prostoru**?

Back:

Funguje podobně jako u prohledávacího prostoru.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241107121206.png)

![](../../../Assets/Pasted%20image%2020241107121215.png)
![](../../../Assets/Pasted%20image%2020241107121220.png)
![](../../../Assets/Pasted%20image%2020241107121227.png)

![](../../../Assets/Pasted%20image%2020241107121235.png)
![](../../../Assets/Pasted%20image%2020241107121246.png)

<!-- ExampleEnd -->
<!--ID: 1730978213625-->

END

---

![](../../../Assets/Pasted%20image%2020241107121253.png)

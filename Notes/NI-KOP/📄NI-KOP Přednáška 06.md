---
created: 2024-11-07T10:12:34
title: "Stavový prostor a lokální heuristiky"
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP prednaska06 status-toReview

### Základní pojmy

START
FIT-Card

Definice: **globální metody**

Back:

Řešení zadané instance konstruujeme z řešení dílčích instancí.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241107103412.png)
<!-- ExampleEnd -->


END

---


START
FIT-Card

Definice: řešení **hrubou silou**

Back:

Řešení zadané instance konstruujeme procházením konfigurací

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241107103447.png)
<!-- ExampleEnd -->


END

---

START
FIT-Card

Definice: **princip lokálních metod** (hladový algoritmus)

Back:

Algoritmus, ve kterém se věnujeme jedné (aktuální) konfiguraci a vybíráme příští z jejích sousedů).

Sousedé konfigurace, kam jsem schopný se dostat jedním krokem.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241107103735.png)
<!-- ExampleEnd -->

END

---

### Stavový prostor


START
FIT-Card

Co je **stav** systému/algoritmu? (obecně)

Back:

Obecně to jsou **všechny hodnoty, které ovlivňují chod algoritmu** (rozhodování, výběr možností).

<!-- ExampleStart -->
Příklad u problému batohu:
- Postupně přidávám věci (jakoby DFS v tom grafu) a testuju jeslti jsem nepřetekl batoh. 
	- Např. na obrázku nejdřív například přidám druhou věc, to je ok, potom první, to je ok a pak třetí a to už jsem přetekl, takže jsem se dostal do nevalidního stavu.
	- Takhle postupně vyzkouším všechny kombinace
![](../../Assets/Pasted%20image%2020241107103841.png)

Kompletní graf pak vypadá takhle:
![](../../Assets/Pasted%20image%2020241107104027.png)

<!-- ExampleEnd -->

END

---


START
FIT-Card

Definice: **stav** algoritmu

Back:

Stav je **ohodnocení konfiguračních proměnných**

![](../../Assets/Pasted%20image%2020241107104804.png)

END

---


START
FIT-Card

Definice: **operátory a stavový prostor**

Back:

![](../../Assets/Pasted%20image%2020241107104840.png)

END

---


START
FIT-Card

Definice: **Akce** ve stavovém prostoru 

Back:

![](../../Assets/Pasted%20image%2020241107104918.png)

END

---


START
FIT-Card

Definice: **graf stavového prostoru algoritmu**

Back:

![](../../Assets/Pasted%20image%2020241107104935.png)

END

---


START
FIT-Card

Definice: **okolí stavu**

Back:

![](../../Assets/Pasted%20image%2020241107104951.png)

END

---


START
FIT-Card

Definice: **$k$-okolí stavu**

Back:

![](../../Assets/Pasted%20image%2020241107105010.png)

END

---


START
FIT-Card

Definice: **sousední stavy (sousedé)**

Back:

![](../../Assets/Pasted%20image%2020241107105038.png)

END

---


START
FIT-Card

Co je **inverzní operátor**?

Back:

Operátory, který jde opačným směrem než původní operátor

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241107105542.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Jaké 2 základní vlastnosti může mít stavový prostor?

Back:

- Acyklický
- Cyklický

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107105951.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Definice: **Vzdálenost uzlu $s_2$ od $s_1$**

Back:

![](../../Assets/Pasted%20image%2020241107110030.png)

END

---


START
FIT-Card

Co je **dostupný** graf?

Back:

Z každého stavu se dá dostat do každého stavu

![](../../Assets/Pasted%20image%2020241107110135.png)

END

---


START
FIT-Card

Co je **syetrický** graf?

Back:

Z každého stavu se do každého dostanu po stejně dlouhé cestě

![](../../Assets/Pasted%20image%2020241107110149.png)

END

---


START
FIT-Card

Co je **relaxace stavu**?

Back:

V našem algoritmu povolíme, aby se dostával do neplatných stavů, ale tyto stavy **penalizujeme** tak, že **zhoršíme hodnotu optimalizačního kritéria** na nějakou **vzdálenost** od platného řešení.

![](../../Assets/Pasted%20image%2020241107110828.png)

<!-- ExplanationStart -->
Jinými slovy penalizujeme stav podle toho "jak moc je blbě".

Např. u problému bahotu nám relaxace říká, jak moc je batoh přetížený (o jakou váhu)

Můžeme ve **vzorci** měnit koeficient a tím říkat "jak moc přísná" je ta pokuta.

Ten vzorec je typicky **součet** (nikoliv násobek)
<!-- ExplanationEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107110814.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241107111551.png)
![](../../Assets/Pasted%20image%2020241107111556.png)
![](../../Assets/Pasted%20image%2020241107111602.png)
<!-- ExampleEnd -->

END

---


START
FIT-Card

Co je **penalizace stavu**?

Back:

Povolíme neplatný řešení a nějak je **penalizujeme** konstantní hodnotou. 

<!-- ExampleStart -->
Např. každému neplatnému stavu nastavíme hodnotu na nula.
<!-- ExampleEnd -->

END

---

### Prostor prohledávání


START
FIT-Card

Jaký je vztah stavového prostoru a prostoru prohledávání?

Back:

Každému bodu prostoru prohledávání odpovíd oblast stavového prostoru.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241107112141.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107112150.png)
![](../../Assets/Pasted%20image%2020241107112155.png)
<!-- DetailInfoEnd -->


END

---

### Strategie pohybu ve stavovém a prohledávacím prostoru


START
FIT-Card

Z čeho se skládá pohyb ve stavovém prostoru?

Back:

- **Aktuální stav** - konfigurace příslušející aktuálnímu stavu
- **Transformace** aktuálního stavu pomocí operátorů
- **Strategie prohledávání** - to jaké transformace aplikuju (např. v jakém pořadí)

END

---


START
FIT-Card

Definice: **úplná strategie**

Back:

![](../../Assets/Pasted%20image%2020241107112547.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107112714.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Definice: **Systematické strategie**

Back:

![](../../Assets/Pasted%20image%2020241107112603.png)

END

---


START
FIT-Card

Co je **úplný algoritmus**?

Back:

![](../../Assets/Pasted%20image%2020241107112730.png)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107112740.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jak funguje **systematická strategie**?

Back:

![](../../Assets/Pasted%20image%2020241107112932.png)

Algoritmus:
<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107113002.png)

![](../../Assets/Pasted%20image%2020241107113155.png)

<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jakou výhodu a nevýhodu mají **systematické strategie**?

Back:

- **Výhoda**: Naleznou **optimální řešení**, existuje-li
- **Nevýhoda**: Bez prořezávání má v nejhorším případě složitost rovnou **hrubé síle**

END

---

#### Lokální heuristiky


START
FIT-Card

Co je **lokální heuristika** v **systematické strategii**?

Back:

![](../../Assets/Pasted%20image%2020241107113835.png)

END

---


START
FIT-Card

Jak funguje **best only** lokální heurisitika u **systematické strategie**?

Back:

![](../../Assets/Pasted%20image%2020241107113911.png)
![](../../Assets/Pasted%20image%2020241107113923.png)

Je to "nejmíň odfláknutá lokální heuristika".

END

---


START
FIT-Card

Jak funguje **first improvement** lokální heurisitika u **systematické strategie**?

Back:

Jakmile se najde soused, který je lepším řešením, řekne, že to je ten kandidát na nejlepší řešení.

![](../../Assets/Pasted%20image%2020241107114138.png)

END

---


START
FIT-Card

Jaká je nevýhoda **first improvement** lokální heuristiky?

Back:

Při procházení preferuje ty stavy, které jsou nejblíže počátečnímu (resp. ty operátory).

To v některých algoritmech dělá neplechu, protože by výsledek algoritmu neměl záviset na uspořádání jednotlivých stavů/operátorů.

END

---


START
FIT-Card

Jak bych měl správně navrhovat heuristiky a stavové prostory?

Back:

- Spíše používat mnoho jednoduchých, rychlých akcí
- Spíše používat mnoho akcí, které nemění konfiguraci drasticky

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241107114531.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Co je "okolí heuristik Kerninghan-Lin"?

Back:

Prohledává se stavový prostor jedním směrem (jako větev DFS), potom se z celé větve vybere nejlepší řešení (stav) a ten se pak považuje za aktuální stav

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107114946.png)
<!-- DetailInfoEnd -->

END

---

#### Pohyb v prohledávacím prostoru

START
FIT-Card

Co je **backtracking v prohledávacím prostoru**?

Back:

Možnost alogritmu se **vrátit v prohledávacím prostoru** (= odvolat nastavení proměnné), **aniž bych musel mít zadefinované inverzní operátory**, abych mohl skákat  potřeboval "skákat zpět".

END

---

START
FIT-Card

Z čeho se skládá krok prohledávání v prohledávacím prostoru?

Back:

1. vyber **proměnnou**
2. vyber **hodnotu** proměnné

END

---


START
FIT-Card

Na co se vztahuje **prořezávání** v prohledávacím prostoru?

Back:

Prořezávání se vztahuje na **oblast stavového prostoru**

END

---


START
FIT-Card

Jak funguje **prořezávání** v **prohledávacím prostoru**?

Back:

Prořezávání znamená, že **odstraním podstromy** v prohledávacím prostoru, které nemá smysl procházet.

<!-- ExampleStart -->
Problém batohu:
Když jsem došel do stavu, kdy už mám přeplněný batoh, tak nedává smysl zkoušet možnosti, jestli tam mám ještě něco přidávat nebo ne, protože v obou případech to furt bude přetížený (viz pravá větev na obrázku 2).
![](../../Assets/Pasted%20image%2020241107120212.png)
![](../../Assets/Pasted%20image%2020241107120318.png)

<!-- ExampleEnd -->


END

---


START
FIT-Card

Co je **problém zlomkového batohu**?

Back:

To samé jako problém batohu, ale můžu do batohu dát i jenom **část** nějaké věci.

Tzn. nejsem v celých číslech, ale v racionálních.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241107120736.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Jak funguje prohledávání v prohledávacím prostoru problému zlomkového batohu? 

Back:

Pro každého souseda spočítám cenu celkového řešení zlomkového batohu. To použiju jako horní mez.
- Tzn. z tohoto souseda můžu dostat nejvýše takovou cenu.
- Díky tomu rychle zjistím, jestli má cenu uvažovat daného souseda nebo ne.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241107121014.png)
<!-- ImageEnd -->


END

---

#### Prořezávání stavového prostoru


START
FIT-Card

Jak funguje obecně prořezávání stavového prostoru?

Back:

Funguje podobně jako u prohledávacího prostoru.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241107121206.png)

![](../../Assets/Pasted%20image%2020241107121215.png)
![](../../Assets/Pasted%20image%2020241107121220.png)
![](../../Assets/Pasted%20image%2020241107121227.png)

![](../../Assets/Pasted%20image%2020241107121235.png)
![](../../Assets/Pasted%20image%2020241107121246.png)

<!-- ExampleEnd -->

END

---

![](../../Assets/Pasted%20image%2020241107121253.png)


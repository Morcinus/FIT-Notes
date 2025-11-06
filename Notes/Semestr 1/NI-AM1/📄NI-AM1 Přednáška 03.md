---
created: 2024-10-07T09:20:02
up: "[[📖NI-AM1]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM1 prednaska03 status-toReview


## Dokončení přednášky 02

### Softwarové architektury

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou typy softwarových architektur (monolit,...)? (5)

Back:

- **Monolit**
- **Two-Tier client/server**
- **Three-tier client/server**
- **Mutli-tier client/server**
- **Client/server** (microservices)
<!--ID: 1729237386393-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **monolit**?

Back:

Architektura, kde všechny vstvy jsou na jednom zařízení

Např. desktopové aplikace

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007092501.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007092310.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386396-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **two-tier client/server** architektura?

Back:

Tzv. **tlustý klient**

**Prezentační a aplikační vstva** je oddělená od **datové vrstvy**

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007092421.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007092429.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386398-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká je **nevýhoda** **two-tier client server** architecture?

Back:

- **Není sjednocená aplikační logika** - každý klient může mít u sebe jinou verzi aplikační vrstvy
- **Hůř se dělají upgrady aplikace** - klient si musí sám stáhnout aktualizaci, nebo tam musím vytvořit automatické aktualizace
<!--ID: 1729237386401-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **three-tier client/server architecture**?

Back:

**Každý layer je na jiném zařízený** (typicky)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007092715.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007092723.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386404-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaká je nevýhoda three-tier client/serveru?

Back:

Je třeba řešit **škálovatelnost**.

<!-- ExplanationStart -->

Oproti two-tier, kde si každý prostě stáhne program k sobě, tady musím rozkládat zátěž na servery, protože uživatel vždy používá server.

<!-- ExplanationEnd -->
<!--ID: 1729237386407-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Multi-tier client/server architecture** (vícevrstvá architektura)?

Back:

- Krom tří vrstev mám ještě middleware layer, který přidává další funkcionality.
- Middleware může být buď na zvláštním serveru, nebo u jiné vrstvy.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007093033.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007093040.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386409-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Client/Server Architecture (microservices)**?

Back:

Backend mám rozdělený do více **komponentů**, kde každý běží jako **samostatný proces**.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007093310.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007093318.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386412-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Proč firmy nerefaktorují svoje staré aplikace na microservice architekture?

Back:

Protože to je často **nákladné překódit** celou codebase.
<!--ID: 1729237386415-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **client/server NOT a microservice architecture**?

Back:

Vezme se monolit a pustí se v **Kubernetes**.

Má to výhody a je to podobné microservices, ale **není** to microservice architekture.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007094447.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007094458.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386418-->

END

---

### Types of Middleware

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **zaměření middlewarů**? (3)

Back:

- **škálovatelnost** - messaging servers, load balancers, proxy serves
- **functional** - integrace (propojování) severů a částí aplikace, repozitáře,...
- **security** - firewally, gateways,...
<!--ID: 1729237386420-->

END

---

## Přednáška 03

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou různé **pohledy na služby**? (5)

Back:

- **business** view
- **conceptual** view
- **logical** view
- **software architecture** view
- **technology architecture** view
<!--ID: 1729237386423-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **business view** náhled na služby?

Back:

Služba přináší nějakou byznys hodnotu uživateli té služby.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007095748.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386426-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **conceptual view** náhled na služby?

Back:

Pohled z hlediska návrhu, design patternů a principů.

![](../../../Assets/Pasted%20image%2020241007095755.png)
<!--ID: 1729237386429-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **logical view** náhled na služby? Jaké jsou 2 hlavní přístupy?

Back:

Interface služby, její popis a implementace

- **resource-oriented**
  - pracuje se zdrojema, např. REST
  - metody, co používám pro manipulaci dat jsou standardizovaný (POST, PUT, DELETE, atd.)
- **message-oriented** - zavádím operace, co jsou doménově závislé - např. SOAP - např. mám na rozhraní konkrétní metodu "createCustomer" - nevýhoda: je potřeba zavést nějaký standard pro vytváření metod, aby v tom nebyl chaos
<!--ID: 1729237386432-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **software architecture view** náhled na služby? (2 typy služeb)

Back:

- **business service**
  - Externí, exposuje funkcionalitu aplikace ostatním
- **middleware service**
  - Interní (middleware atd.)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007095811.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386434-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **technology architecture view** náhled na služby?

Back:

Protokoly a standardy, které se používají.

![](../../../Assets/Pasted%20image%2020241007095820.png)
<!--ID: 1729237386437-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Proč je výhoda oddělovat specifikaci rozhraní a samotnou implementaci?

Back:

Můžu pak mít **více implementací** daného rozhraní (např. v jiných jazycích, protokolech atd.)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007100632.png)

<!-- ImageEnd -->
<!--ID: 1729237386440-->

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

Co je **service interface**?

Back:

Návrh **rozhraní** service

<!-- DetailInfoStart -->

Toto je popsáno na jiné kartičce:
![](../../../Assets/Pasted%20image%2020241007100716.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386443-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Pomocí jakého **diagramu** se modeluje **fungování dané service**?

Back:

Pomocí **stavového diagramu**.
<!--ID: 1729237386445-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou části **procesu operace** dané service? (4)

Back:

1. Operace má definované **preconditions**
   - _Podmínky, co platí ve stavu aplikace před začátkm operace_
   - _Např. abych provedl platbu, musím mít na účtu dost peněz_
1. Do operace vejde **input**
1. Z operace vyjdou **outputs**
1. Operace má definované **effects**
   - _Podmínky, co platí ve stavu aplikace po dokončení operace_

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007101250.png)

<!-- ImageEnd -->
<!--ID: 1729237386448-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **charakteristiky services**? (7)

Back:

- **loose coupling** - requester nepotřebuje mít žádné "hard-wired" informace potřebné k používání služby
- **reusability** - služba by se měla dát používat pro různé scénáře
- **encapsulation** - služba poskytuje rozhraní a zvenku nikdo nemusí řešit, jak vypadá implementace
- **contracting** - služba poskytuje rozhraní a tím vytváří "kontrakt" mezi uživatelem služby a službou
- **abstraction** - interface je abstrahovaný (oddělený) od implementace i konkrétní softwarové/hardwarové technologie
- **composability** - služby lze skládat do komplexnějších služeb
- **discoverability** - služba musí být ideálně popsaná nějakým standardním jazykem (openapi, swagger)

Pomůcka: CLEARCD nebo LCDRACE

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007102911.png)

<!-- ImageEnd -->
<!--ID: 1729237386451-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **loose coupling** služeb (services)?

Back:

V klientovi není "pevně zadrátované", jaké endpointy se volají atd. (např. díky HATEOAS).
<!--ID: 1729237386454-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **reusability** služeb (services)?

Back:

Služba by měla být navržena tak, aby byla použitelná i jinýma klientama, ne jen jedním.

<!-- ExampleStart -->

Když dělám API, měl bych ho navrhovat tak, jako kdyby s ním v budoucnu komunikovalo více klientů, nepřizpůsobovat to jen na toho jednoho.

Samozřejmě je v tom tradeoff. Čím víc reusable to dělám, tím víc fičur tam musím dát, tím víc času mi to zabere.

<!-- ExampleEnd -->
<!--ID: 1729237386456-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Čeho je zkratka **SOA**?

Back:

**Service Oriented architecture**
<!--ID: 1729237386459-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **ESB**?

Back:

**Enterprise Service Bus** - systém komunikace mezi services
<!--ID: 1729237386462-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **Integration a Interoperability**?

Back:

- **Integrace** - proces propojování systémů, services
- **Interoperability** - schopnost dvou aplikací, aby si rozuměly
  - _Např. aby se transformovaly data aby se daly poslat dané službě. Např. XML -> JSON atd._

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007103247.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386465-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **SOA architektura**? Z čeho se skládá?

Back:

Service Oriented Architecture

- **Culture** - IT organizace je založena na byznysu
- **Methodology** - top-down, bottom-up
- **Technology** - ESB, interoperabilita, security

Pozn. je to trochu legacy, ale velké firmy ČEZ, banky atd. to používají.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007103545.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386468-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **one-to-one service integration**?

Back:

Mám hromadu systémy/services, komunikují vždy **jedna na jednu**.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007103648.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007103657.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386471-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je problém s **one-to-one service integration**?

Back:

Pokud je těch services více, je v tom pak hrozný **chaos**, používají se různé protokoly, špatně se to řídí atd.

_To se pak nazývá špagetová architektura :D_

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007103648.png)

<!-- ImageEnd -->
<!--ID: 1729237386474-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak vypadá **Many-To-Many service** integrace (=realizace SOA)? Jaký **problém** řeší?

Back:

Vytvoří se **Enterprise Service Bus** (ESB), který je middlewarem mezi jednotlivými systémy a dělá v tom **pořádek**.

**Řeší problém chaosu** u one-to-one service integrace

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241007104129.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241007104148.png)

<!-- DetailInfoEnd -->
<!--ID: 1729237386477-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: migrate
-->

START
FIT-Card

(FIT-Notes flashcard)

Proč není **many-to-many service** tak "růžový"?

Back:

Protože se tam často ten chaos zůstane, akorát se rodělí do menších podčástí.

(Ale aspoň ten hlavní flow dat je uspořádaný)
<!--ID: 1729237386480-->

END

---

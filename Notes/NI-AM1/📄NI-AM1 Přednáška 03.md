---
created: 2024-10-07T09:20:02
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1

## Dokončení přednášky 02
### Softwarové architektury

START
FIT-Card

Jaké jsou typy softwarových architektur? (5)

Back:

- Monolit
- Two-Tier client/server
- Three-tier client/server
- Mutli-tier client/server
- Client/server (microservices)

END

---



START
FIT-Card

Co je **monolit**?

Back:

Architektura, kde všechny vstvy jsou na jednom zařízení

Např. desktopové aplikace

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007092501.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007092310.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **two-tier client/server** architektura?

Back:

Tzv. **tlustý klient**

**Prezentační a aplikační vstva** je oddělená od **datové vrstvy**

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007092421.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007092429.png)
<!-- DetailInfoEnd -->


END

---



START
FIT-Card

Jaká je **nevýhoda** **two-tier client server** architecture?

Back:

- **Není sjednocená aplikační logika** - každý klient může mít u sebe jinou verzi aplikační vrstvy
- **Hůř se dělají upgrady aplikace** - klient si musí sám stáhnout aktualizaci, nebo tam musím vytvořit automatické aktualizace

END

---


START
FIT-Card

Co je **three-tier client/server architecture**?

Back:

**Každý layer je na jiném zařízený** (typicky)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007092715.png)
<!-- ImageEnd -->


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007092723.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaká je nevýhoda three-tier client/serveu?

Back:

Je třeba řešit **škálovatelnost**.

<!-- ExplanationStart -->
Oproti two-tier, kde si každý prostě stáhne program k sobě, tady musím rozkládat zátěž na servery, protože uživatel vždy používá server.
<!-- ExplanationEnd -->


END

---


START
FIT-Card

Co je **Multi-tier client/server architecture** (vícevrstvá architektura)?

Back:

- Krom tří vrstev mám ještě middleware layer, který přidává další funkcionality.
- Middleware může být buď na zvláštním serveru, nebo u jiné vrstvy.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007093033.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007093040.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Co je **Client/Server Architecture (microservices)**?

Back:

Backend mám rozdělený do více **komponentů**, kde každý běží jako **samostatný proces**.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007093310.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007093318.png)
<!-- DetailInfoEnd -->

END

---


START
FIT-Card

Proč firmy nerefaktorují celé aplikace na microservice architekture? Jaké je řešení

Back:

Protože to je často **nákladné překódit** celou codebase.

END

---


START
FIT-Card

Co je **client/server NOT a microservice architecture**?

Back:

Vezme se monolit a pustí se v **Kubernetes**.

Má to výhody a je to podobné microservices, ale **není** to microservice architekture.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007094447.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007094458.png)
<!-- DetailInfoEnd -->

END

---

### Types of Middleware


START
FIT-Card

Jaké jsou **zaměření middlewarů**?

Back:

- **škálovatelnost** - messaging servers, load balancers, proxy serves
- **functional** - integrace (propojování) severů a částí aplikace, repozitáře,...
- **security** - firewally, gateways,...

END

---

## Přednáška 03


START
FIT-Card

Jaké jsou různé **pohledy na služby**? (5)

Back:

- business view
- conceptual view
- logical view
- software architecture view
- technology architecture view

END

---


START
FIT-Card

Co je **business view** náhled na architekturu? 

Back:

![](../../Assets/Pasted%20image%2020241007095748.png)

END

---


START
FIT-Card

Co je **conceptual view** náhled na architekturu? 

Back:

![](../../Assets/Pasted%20image%2020241007095755.png)

END

---


START
FIT-Card

Co je **logical view** náhled na architekturu? 

Back:

![](../../Assets/Pasted%20image%2020241007095803.png)


<!-- DetailInfoStart -->
- **resource-oriented**
	- pracuje se zdrojema, např. REST
	- metody, co používám pro manipulaci dat jsou standardizovaný (POST, PUT, DELETE, atd.)
- **message-oriented**
	- zavádím operace, co jsou doménově závislé
	- např. SOAP
	- např. mám na rozhraní konkrétní metodu "createCustomer"
	- nevýhoda: je potřeba zavést nějaký standard pro vytváření metod, aby v tom nebyl chaos
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **software architecture view** náhled na architekturu? 

Back:

![](../../Assets/Pasted%20image%2020241007095811.png)

END

---


START
FIT-Card

Co je **technology architecture view** náhled na architekturu? 

Back:

![](../../Assets/Pasted%20image%2020241007095820.png)

END

---


START
FIT-Card

Proč je výhoda oddělovat specifikaci rozhraní a samotnou implementaci?

Back:

Můžu pak mít **více implementací** daného rozhraní (např. v jiných jazycích, protokolech atd.)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007100632.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Co je **service interface**?

Back:

Návrh **rozhraní** service


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007100716.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Pomocí jakého **diagramu** se modeluje **fungování dané service**? 

Back:

Pomocí **stavového diagramu**.

END

---


START
FIT-Card

Jaké jsou části **procesu operace** dané service? (4)

Back:

1. Operace má definované **preconditions**
	- _Podmínky, co platí ve stavu aplikace před začátkm operace_
	- _Např. abych provedl platbu, musím mít na účtu dost peněz_
1. Do operace vejde **input**
2. Z operace vyjdou **outputs**
3. Operace má definované **effects**
	- _Podmínky, co platí ve stavu aplikace po dokončení operace_

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007101250.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jaké jsou **charakteristiky services**? (8)

Back:

- **loose coupling**
- **reusability**
- **encapsulation**
- **contracting**
- **abstraction**
- **composability** - služba se skládá z komponentů
- **discoverability** - služba musí být ideálně popsaná nějakým standardním jazykem (openapi, swagger)


<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007102911.png)
<!-- ImageEnd -->


END

---


START
FIT-Card

Co je **loose coupling** služeb (services)?

Back:

_TODO tuhle kartičku trošku polishnout_

**Zkráceně**: Informace, kterou předávám klientovi, ale v klientovi to není pevně zadrátované.

**Podrobně:**
Když mám zdroj, co má nějakou reprezentaci (např. JSON), reprezentace obsahuje adresy a klient ví, kam může jít. 

Díky tomu zajišťuju loose coupling mezi klientem a serverem. Nedrátuju žádnou informaci do klienta, ale ta operace přechodů je definována těmi stavy a přechody.

Např. tohle se vyloženě používá na webových stránkách - každý HTML document je node ve stavovém grafu, URL linky v něm

Analogie:
- Mám HTML, v něm mám tagy s URL odkazama, ty odkazují na další dokumenty. Tím vytvářím jakoby "stavový prostor", kde každý HTML document reprezentuje jeden stav.
	- Odkazy - přechody ve stavovém diagramu
		- Každý odkaz můžu volat s různou metodou GET, POST atd.

END

---


START
FIT-Card

Co je **reusability** služeb (services)?

Back:

Služba by měla být navržena tak, aby použitelná i jinýma klientama, ne jen jedním.

<!-- ExampleStart -->
Když dělám API, měl bych ho navrhovat tak, jako kdyby s ním v budoucnu komunikovalo více klientů, nepřizpůsobovat to jen na toho jednoho.

Samozřejmě je v tom tradeoff. Čím víc reusable to dělám, tím víc fičur tam musím dát, tím víc času mi to zabere.
<!-- ExampleEnd -->

END

---


START
FIT-Card

Co je **SOA**?

Back:

**Service Oriented architecture**

END

---


START
FIT-Card

Co je **ESB**?

Back:

**Enterprise Service Bus** - systém komunikace mezi services

END

---


START
FIT-Card

Co jsou **Integration a Interoperability**?

Back:

- **Integrace** - proces propojování systémů, services
- **Interoperability** - schopnost dvou aplikací, aby si rozuměly 
	- _Např. aby se transformovaly data aby se daly poslat dané službě. Např. XML -> JSON atd._

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007103247.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **SOA architektura**? Z čeho se skládá?

Back:

Service Oriented Architecture
- **Culture**
- **Methodology** - 
- **Technology** - ESB, interoperabilita, security

Pozn. je to trochu legacy, ale velké firmy ČEZ, banky atd. to používají.


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007103545.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Co je **one-to-one service integration**? Jaký je s ní **problém**?

Back:

Mám hromadu systémy/services, komunikují vždy **jedna na jednu**.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007103648.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007103657.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Jaký je problém s **one-to-one service integration**?

Back:

Pokud je těch services více, je v tom pak hrozný **chaos** a špatně se to řídí.

_To se pak nazývá špagetová architektura :D_

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007103648.png)
<!-- ImageEnd -->

END

---


START
FIT-Card

Jak vypadá **Many-To-Many service** integrace (=realizace SOA)? Jaký **problém** řeší?

Back:

Vytvoří se **Enterprise Service Bus** (ESB), který je middlewarem mezi jednotlivými systémy a dělá v tom **pořádek**.

**Řeší problém chaosu** u one-to-one service integrace

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020241007104129.png)
<!-- ImageEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241007104148.png)
<!-- DetailInfoEnd -->


END

---


START
FIT-Card

Proč není **many-to-many service** tak "růžový"?

Back:

Protože se tam často ten chaos zůstane, akorát se rodělí do menších podčástí.

<!-- ExplanationStart -->
Tzn. ten hlavní workflow je spořádaný. Ale můůže být 
<!-- ExplanationEnd -->


END

---

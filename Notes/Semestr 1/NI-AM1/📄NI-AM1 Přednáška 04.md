---
created: 2024-10-14T17:17:17
up: "[[📖NI-AM1]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM1 prednaska04 status-toReview


### Přístupy integrací

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 3 typy integrací?

Back:

- **Data-oriented integration**
- **Service-oriented integration (1:1)**
- **Service-oriented integration (M:N)**

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241014172119.png)

<!-- ImageEnd -->
<!--ID: 1728921214954-->

END

---

#### Data-oriented Integrace

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **data-oriented integrace**?

Back:

Integrace, kde jedna aplikace přistupuje **přímo do databáze** druhé aplikace.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241014173914.png)

<!-- ImageEnd -->

<!-- ExplanationStart -->

Struktura moderní aplikace $A$ vypadá cca takto:

- **Backend API**
  - Byznys logika
  - Moje pravidla
  - ORM vrstva
- **Databázová vrstva**
  - Databáze

**Prolém** nastane, když aplikace $B$, co má stejnou strukturu potřebuje přímo přistupovat do databáze aplikace $A$ (tzn. nemůže použít APIčko - to se může někdy stát). Tím by obcházela ty pravidla.

Kdy takový stav může například nastat:

- Když potřebuju nahrát **obří množství dat** (a není rozumný to dělat přes API, protože to je třeba pomalé nebo )
- Když **není naimplementované API** pro přístup k dané tabulce

![](../../../Assets/Pasted%20image%2020241014172809.png)

![](../../../Assets/Pasted%20image%2020241014173734.png)

<!-- ExplanationEnd -->
<!--ID: 1728921214956-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **service-oriented integrace**?

Back:

Integrace dvou aplikací, kde mám **integrační middleware**.

Aplikace $A$ zavolá middleware, ten pak zavolá aplikaci $B$ a naopak.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241014174120.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241014174154.png)

<!-- DetailInfoEnd -->
<!--ID: 1728921214959-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **real-time (web services)** integrace?

Back:

**Service-oriented** integrace, která se používá pro **malá** data a v reálném čase.

<!-- InformallySaidStart -->

Tzn. synchronizuje např. dvě aplikace pomocí jejich APIs.

<!-- InformallySaidEnd -->
<!--ID: 1728921214962-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Bulk data (ETL)** integrace?

Back:

**Data-oriented** integrace, která používá **ETL** technologii pro integraci **velkého množství dat** (tzv. bulk data).

<!-- InformallySaidStart -->

Tzn. synchronizuje dvě aplikace na úrovni datové vrstvy (tzn. jejich databáze).

<!-- InformallySaidEnd -->

<!-- ExplanationStart -->

Tato synchronizace přenáší **bulk data**, tzn velké množství dat, které nedává smysl přenášet přes klasická API (ta jsou dělaná pro malé množství dat).

<!-- ExplanationEnd -->
<!--ID: 1728921214964-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Poskytuje SOA **web services** nebo **ETL** integraci?

Back:

**Obojí**
<!--ID: 1729236693071-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **integrační proces** a jakou klíčovou vlastnost má?

Back:

Proces, kdy se nějaká informace propíše pomocí integračního middlewaru do více systémů.

**Klíčová vlastnost**: musí to fungovat jako transakce v databází. Buď se propíše do všech systémů nebo vůbec.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241014180037.png)

<!-- ImageEnd -->
<!--ID: 1728921214967-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **rekonsiliační proces**?

Back:

Proces, co zkontroluje, jeslti jsou všechny systémy správně synchronizované.

Tento proces se spouští například jednou za den.
<!--ID: 1729236693079-->

END

---

### Enterprise Service Bus

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **Enterprise Service Bus**?

Back:

Aplikace, která běží na aplikačním serveru. Pomocí integračních vzorů v ní můžu vytvářet integrační procesy.
<!--ID: 1729236693087-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Integrační návrhové vzory
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **integrační vzory** a co znamenají? (4)

Back:

- **Technical-level interoperability - message broker** - middleware, který od jedné služby dostává data např. REST a posílá jiné službě v jiném formátu např. binárně
- **Session pooling** - pool je množina připojení do databáze. Middleware tenhle pool využívá. Když nepoužívá přístup, zase ho odevzdá session poolu. Je to rychlejší než kdybych to dělal bez toho.
- **Data transformation** - middleware přeloží data z jedné struktury do druhé. Např. mezi dvěma aplikacema, které používají XML.
- **Key mapping** - middleware, který má překladovou tabulku a mapuje identifikátory (např. id uživatelů) v jednom systému do druhého systému

<!-- DetailInfoStart -->

Další vzory:
![](../../../Assets/Pasted%20image%2020241014180425.png)

<!-- DetailInfoEnd -->
<!--ID: 1729236693096-->

END

---

### Integrační vzory

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Synchronní a asynchronní komunikace
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **synchronní a asynchronní** integrace?

Back:

- **Synchronní**
  - Vytvoří se jeden TCP socket, pošle se request a response.
  - Doba odezvy je velice **malá**
  - Např. client-server
- **Asynchronní**
  - Pro request se použije jeden socket
  - Pro response se použije druhý socket
  - Doba může být větší (hodiny, dny)
  - Tohle nemůžu dělat na client-serveru, protože by client musel taky otevřít server a poslouchat, jestli nepřišel response na nějaký jeho endpoint. Slouží to pro server-server komunikaci
    - Asynchronní integrace se takto přímo nedělá, dělá se to jinými způsoby (viz další kartičky)

![](../../../Assets/Pasted%20image%2020250111182953.png)

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241014182713.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241014182721.png)

<!-- DetailInfoEnd -->
<!--ID: 1729236693105-->

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

Co je **DNAT**?

Back:

Destination NAT - překládání komunikace na routeru, když vím adresu nějakého zařízení v privátní síti a chci s ním komunikovat z veřejné sítě.

Funguje na nižších vrstvách OSY modelu. Není to aplikační vrstva
<!--ID: 1729236693114-->

END

---

#### Asynchronní komunikace přes prostředníka

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Synchronní a asynchronní komunikace
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **asynchronní komunikace přes prostředníka**?

Back:

Máme prostředníka, co má u sebe dvě fronty (request queue a response queue).

1. Klient pošle do request queue zprávu
2. Server si vyzvedne request z queue
3. Server zpracuje požadavek
4. Server uloží response do response queue
5. Klient si z response queue vyzvedne response

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241014183234.png)

<!-- ImageEnd -->
<!--ID: 1729236693124-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Synchronní a asynchronní komunikace
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 2 režimy **asynchronní komunikace přes prostředníka**?

Back:

- **Message Queue** - jeden klient, jeden server
- **Publish/Subscribe** - jeden klient, z queue čte více serverů _(každý např. zaměřený na určitý task)_
<!--ID: 1729236693138-->

END

---

#### Asynchronní komunikace přes polling

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Synchronní a asynchronní komunikace
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **asynchronní komunikace přes polling**?

Back:

**Problém**: komunikace client-server s dlouhou odezvou, server se nemůže připojit na klienta a říct mu, že vykonal danou činnost, protože klient nemá žádné veřejné API.

**Řešení**: Polling

1. Klient **pošle request**
2. Server **začne zpracovávat**, updatuje svůj status na **status monitor** (nějaký API endpoint)
3. Klient se jednou za čas **dotáže na status monitor**, aby zjistil, jak na tom server je
4. Jakmile je server hotový, dá na status monitor adresu, kde si klient může vyzvednout response

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241014184213.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241014184223.png)

<!-- DetailInfoEnd -->
<!--ID: 1736674205790-->

END

---

<!--
Exam Note ID: NI-SI-10
Exam Note Section Name: Synchronní a asynchronní komunikace
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **long polling**?

Back:

Server si u sebe chvíli podrží ten request klienta, díky čemuž zamezí tomu, aby se furt klient dotazoval na status monitor.

Tzn. server si tím reguluje zátěž, protože schválně na každý request odpoví po nějakém čase.
<!--ID: 1729236693152-->

END

---

### Microservices

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura softwarového systému
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je rozdíl mezi SOA, Miscroservices a Kubernetes?

Back:

- **SOA** - starší legacy systém obecně na služby
  - Je to legacy (vznikli v roce 2005), už se toho lidi spíš zbavují
- **Mikroslužby** - relativně nový, populární
- **Kubernetes** - v tom běží (mimo jiné) mikroslužby
<!--ID: 1729236693163-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Pojem služba a její charakteristiky
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **The Scale Cube**?

Back:

Vyobrazení škálování:
![](../../../Assets/Pasted%20image%2020241014185045.png)

- **Osa X** - **instance**
  - mám např. web server, udělám si více **instancí**, čímž rozložím zátěž
- **Osa Z** - **data partitioning**
  - mám několik oddělených databází (jedna má např. záznamy od A-J, druhá od J-Z), mám systém, co mi rozhazuje data do těch databází, čímž opět rozložím zátěž
- **Osa Y** - **mikroservisy** - oddělím určitou funkci aplikace, čímž dělám "dekompozici funkcí"
<!--ID: 1729236693173-->

END

---

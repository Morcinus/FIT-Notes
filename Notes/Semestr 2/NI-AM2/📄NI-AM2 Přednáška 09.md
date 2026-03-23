---
created: 2025-04-14T11:38:44
title: Cloud Native and Microservices
up:
  - "[[📖NI-AM2]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM2 prednaska09 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Jak se u IaaS zajišťuje **High Availability**?

Back:

Pomocí floating IP, máme 2 load balancery ve 2 různých datových centrech, když jeden load balancer selže, tak ten druhý převezme jeho funkci.

Máme **aktivní** a **pasivní** load balancer. Pasivní nic nedělá, ale když aktivní vypadne, tak ten pasivní převezme jeho funkci.

Díky floating IP address se přehodí load balancer na ten druhý.
<!--ID: 1746518887376-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký **protokol** se používá při floating IP address?

Back:

ARP
<!--ID: 1746518887379-->

END

---

### Storage

START
FIT-Card

(FIT-Notes flashcard)

Co je **block storage**? Jaký **protokol** se používá?

Back:

Máme instanci (node), k ní potřebujeme:

- **boot volume** - to je malý block storage, kde máme image, ze kterýho node bootujeme
- **data volume** - tam máme file systém a perzistentní data

Tyto dva disky jsou v nějakém storage serveru, typicky to není fyzicky přímo u toho mého node. Proto se používá protokol **iSCSI**, který se používá pro komunikaci mezi nodem a diskem.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250414120505.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887382-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Když mám více nodů, jak se řeší jejich storage? Jaký protokol se pak používá pro komunikaci se storage?

Back:

Když máme **více nodů**, můžu pak mít třeba **sdílený disk** mezi více nodama. K tomu se používá služba **FSS**. Připojení k disku se pak děje pomocí protokolu **NFS** (místo iSCSI). Díky tomu pak mám např. sdílený adresář.
<!--ID: 1747037917191-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Mají **nody v infrastruktuře** vlastní **ssd disky**?

Back:

Ano, nody mohou mít vlastní SSD disky, díky tomu jsou zápisy mnohem rychlejší než přes protokol iSCSI.
<!--ID: 1746518887385-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Object storage**?

Back:

Typ storage v cloudu (nejznámější je např. S3 od AWS).

Umožňuje ukládání **nestrukturovaných dat** (souborů/objektů).

Např. obrázky, images (ve smyslu bootování z image), cokoliv dalšího

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250414120516.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887387-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **namespace** v object storage?

Back:

Top level container pro všechny buckety.

Každý tenant má 1 namespace.

Např. `/n/<namespace>/b/<bucket>/o/<object_name>`
<!--ID: 1747037917198-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **2 typy bucketů**?

Back:

- **Hot bucket** - standardní uložiště, můžu k tomu přistupovat kdykoliv
- **Cold bucket** - používá se typicky na archivaci, nepředpokládá se, že k tomu budu často přistupovat - TTFB - time to first byte - jak dlouho mi bude trvat, než se dostanu k datům - Levnější úložiště, ale dražší přístup
<!--ID: 1746518887390-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je u bucketů (nebo jiného úložiště) **TTFB**?

Back:

**Time To First Byte** - jak dlouho mi bude trvat, než se dostanu k datům

Např. cold bucket má TTFB vyšší než hot bucket
<!--ID: 1747037917204-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **IaC**?

Back:

**Infrastructure as Code** - myšlenka je, že infrastrukturu bych si měl moct zadefinovat v kódu (a ne že to jak retard musím naklikávat v GUI)
<!--ID: 1746518887393-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké **2 technologie** se používají pro **IaC**?

Back:

- **Configuration Management Tools** - konfiguruju si nody, jak mají vypadat
  - Např. Ansible, Chef, Puppet
- **Abstraction of cloud infrastructure** - můžu popsat celou infrastrukturu - Např. Terraform
<!--ID: 1746518887395-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Terraform**?

Back:

1. Zadefinuju si jak má vypadat infrastruktura (v souboru)
2. Nástroj (Terraform) pak zjistí, jak vypadá momentální infrastruktura
3. Pak se snaží přizpůsobit infrastrukturu tak, aby vypadala jako moje definice
<!--ID: 1746518887398-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

V jakém jazyce se u **Terraformu** definuje infrastruktura?

Back:

**HCL** - Hashicorp Configuration Language
<!--ID: 1746518887401-->

END

---

### Cloud Native

START
FIT-Card

(FIT-Notes flashcard)

Co znamená, že je aplikace **Cloud Native**?

Back:

Když vytvářím novou aplikaci, tak bych ji měl **vytvářet pomocí technologií**, které pak umožňují to **spustit v cloudu** (tzn. typicky je dobře škálovatelná a běží pomocí kubernetes)

V dnešní době je cloud native vpodstatě **synonymum pro Kubernetes**.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250414121929.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887404-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **CNCF**?

Back:

**Cloud Native Computing Foundation**

Je to odnož Linux foundation, je to obří open source komunita/organizace, co má na starost vyvíjet technologie pro cloud.
<!--ID: 1746518887407-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je prinicip **Lift and Shift**?

Back:

Umožňuje vzít on-premise aplikaci a spustit ji v cloudu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250414122131.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887409-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **CNCF Trail Map**? Jaké má části? (5)

Back:

Cesta, kterou organizace může podstoupit, aby nemusela "vyhodit" starou aplikaci, ale přizpůsobit ji na architekturu pomocí Kubernetes.

1. **Conteinarization** - převedu aplikaci tak, abych ji mohl spustit v containeru (tzn. vytvořím pro to image)
2. **CI/CD** - automatizuju workflow pomocí DevOps, často se využívá ArgoCD
3. **Orchestrace a application definition** - musím mít zprovozněný nějaký orchestrační nástroj na managování imagů a containerů (tzn. Kubernetes)
4. **Observability & Analysis** - setupne se monitoring, logging
5. **Service Proxy, Discovery & Mesh** - ???
6. ... a další, který nemusíme umět

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250414122453.png)

<!-- ImageEnd -->
<!--ID: 1746518887412-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **GitOps** a **ArgoCD**?

Back:

**GitOps** = pomocí manifestů/definicí zadefinuju infrastrukturu a zálohuju ji pomocí Gitu

**ArgoCD** = sleduje stav zdrojů v gitu a synchronizuje mi obsah s Kubernetes

- Tzn. když udělám např. push, tak se mi a podle toho skutečně změní infrastruktura
<!--ID: 1746518887414-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Dává smysl pustit **monolytickou** aplikaci v **Kubernetes**?

Back:

Ano dá se to tak udělat a dává to někdy smysl.

Kubernetes má hromadu různých užitečných fičur. Díky tomu že monolit hodím do kubernetes, tak to je takový mezikrok před vytvořením cloudové aplikace.
<!--ID: 1746518887417-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **hlavní charakteristiky mikroslužeb**? (5)

Back:

- **Loosely coupled** - dobře definovaný rozhraní mezi mikroslužbama
- **Technology-agnostic protocols**
- **Independently deployable and easy to replace** - můžu mikroslužby nezávisle na sobě škálovat
- **Organized around capabilities** - mikroslužba by měla mít na starost konkrétní věc (accounting, billing, recommendation,...)
- **Implemented using different technologies** - Každý jazyk se hodí na něco jiného

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250414131501.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887420-->

END

---

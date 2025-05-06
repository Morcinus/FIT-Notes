---
created: 2025-04-14T11:38:44
title: Cloud Native and Microservices
up:
  - "[[📖NI-AM2]]"
---
TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska09 status-toReview


START
FIT-Card

Jak se u IaaS zajišťuje High Availability?

Back:

Pomocí floating IP, máme 2 load balancery ve 2 různých datových centrech, když jeden load balancer selže, tak ten druhý převezme jeho funkci.

Máme **aktivní** a **pasivní** load balancer. Pasivní nic nedělá, ale když aktivní vypadne, tak ten pasivní převezme jeho funkci.

Díky floating IP address se přehodí load balancer na ten druhý.
<!--ID: 1746518887376-->
END

---


START
FIT-Card

Jaký protokol se používá při floating IP address?

Back:

ARP
<!--ID: 1746518887379-->
END

---

### Storage

START
FIT-Card

Co je block storage?

Back:

Máme instanci (node), k ní potřebujeme: 
- **boot volume** - to je malý block storage, kde máme image, ze kterýho node bootujeme
- **data volume** - tam máme file systém a perzistentní data

Tyto dva disky jsou v nějakém storage serveru, typicky to není fyzicky přímo u toho mého node. Proto se používá protokol iSCSI, který se používá pro komunikaci mezi nodem a diskem.

Když máme více nodů, můžu pak mít třeba sdílený disk mezi více nodama. K tomu se používá služba FSS. Připojení k disku se pak děje pomocí protokolu NFS (místo iSCSI). Díky tomu pak mám např. sdílený adresář.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250414120505.png)
<!-- DetailInfoEnd -->

<!--ID: 1746518887382-->
END

---


START
FIT-Card

Mají nody vlastní ssd disky?

Back:

Ano, nody mohou mít vlastní SSD disky, díky tomu jsou zápisy mnohem rychlejší než přes protokol iSCSI.
<!--ID: 1746518887385-->
END

---


START
FIT-Card

Co je Object storage?

Back:

Typ storage v cloudu (nejznámější je např. S3 od AWS).

Umožňuje ukládání různých souborů/objektů.

Např. obrázky, images (ve smyslu bootování z image), cokoliv dalšího

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250414120516.png)
<!-- DetailInfoEnd -->

<!--ID: 1746518887387-->
END

---


START
FIT-Card

Jaké jsou 2 typy bucketů?

Back:

- Hot bucket - standardní uložiště, můžu k tomu přistupovat kdykoliv
- Cold bucket - používá se typicky na archivaci, nepředpokládá se, že k tomu budu často přistupovat
	- TTFB - time to first byte - jak dlouho mi bude trvat, než se dostanu k datům
	- Levnější úložiště, ale dražší přístup
<!--ID: 1746518887390-->
END

---


START
FIT-Card

Co je IaC?

Back:

Infrastructure as Code - myšlenka je, že infrastrukturu bych si měl moct zadefinovat v kódu (a ne že to jak retard musím naklikávat v GUI)
<!--ID: 1746518887393-->
END

---


START
FIT-Card

Jaké 2 technologie se používají pro IaC?

Back:

- **Configuration Management Tools** - konfiguruju si nody, jak mají vypadat
	- Např. Ansible, Chef, Puppet
- **Abstraction of cloud infrastructure** - můžu popsat celou infrastrukturu
	- Např. Terraform
<!--ID: 1746518887395-->
END

---


START
FIT-Card

Jak funguje **Terraform**?

Back:

1. Zadefinuju si jak má vypadat infrastruktura
2. Nástroj (Terraform) pak zjistí, jak vypadá momentální infrastruktura
3. Pak se snaží přizpůsobit infrastrukturu tak, aby vypadala jako moje definice
<!--ID: 1746518887398-->
END

---


START
FIT-Card

V jakém jazyce se u **Terraformu** definuje infrastruktura?

Back:

**HCL** - Hashicorp Configuration Language
<!--ID: 1746518887401-->
END

---

### Cloud Native

START
FIT-Card

Co je Cloud Native?

Back:

Když vytvářím novou aplikaci, tak bych ji měl vytvářet pomocí technologií, které pak umožňují to spustit v cloudu (tzn. typicky je dobře škálovatelná a běží pomocí kubernetes)

V dnešní době je cloud native vpodstatě synonymum pro Kubernetes

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250414121929.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887404-->
END

---


START
FIT-Card

Co je CNCF?

Back:

Cloud Native Computing Foundation

Je to odnož Linux foundation, je to obří open source komunita/organizace, co má na starost vyvíjet technologie pro cloud.
<!--ID: 1746518887407-->
END

---


START
FIT-Card

Co je prinicip Lift and Shift?

Back:

Umožňuje vzít on-premise aplikaci a spustit ji v cloudu

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250414122131.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887409-->
END

---


START
FIT-Card

Co je CNCF Trail Map?

Back:

Cesta, kterou organizace může podstoupit, aby nemusela "vyhodit" starou aplikaci, ale přizpůsobit ji na architekturu pomocí Kubernetes.

1. **Conteinarization** - převedu aplikaci tak, abych ji mohl spustit v containeru (tzn. vytvořím pro to image)
2. **CI/CD** - automatizuju workflow pomocí DevOps, často se využívá ArgoCD
3. **Orchestrace a application definition** - musím mít zprovozněný nějaký orchestrační nástroj na managování imagů a containerů (tzn. Kubernetes)
4. **Observability & Analysis** - 
5. **Service Proxy, Discovery & Mesh**
6. ... a další, který nemusíme umět

![](../../Assets/Pasted%20image%2020250414122452.png)

<!--ID: 1746518887412-->
END

---


START
FIT-Card

Co je GitOps a ArgoCD?

Back:

GitOps = pomocí manifestů/definicí zadefinuju infrastrukturu a zálohuju ji pomocí Gitu

ArgoCD = sleduje stav zdrojů v gitu a synchronizuje mi obsah s Kubernetes
- Tzn. když udělám např. push, tak se mi a podle toho skutečně změní infrastruktura
<!--ID: 1746518887414-->
END

---


START
FIT-Card

Dává smysl pustit monolytickou aplikaci v Kubernetes?

Back:

Ano dá se to tak udělat a dává to někdy smysl.

Kubernetes má hromadu různých užitečných fičur. Díky tomu že monolit hodím do kubernetes, tak to je takový mezikrok před vytvořením cloudové aplikace.
<!--ID: 1746518887417-->
END

---


START
FIT-Card

Jaké jsou **hlavní charakteristiky mikroslužeb**? (5)

Back:

- **Loosely coupled** - dobře definovaný rozhraní mezi mikroslužbama
- **Technology-agnostic protocols**
- **Independently deployable and easy to replace** - můžu mikroslužby nezávisle na sobě škálovat 
- **Organized around capabilities** - mikroslužba by měla mít na starost konkrétní věc (accounting, billing, recommendation,...)
- **Implemented using different technologies** - Každý jazyk se hodí na něco jiného

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250414131501.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887420-->
END

---


START
FIT-Card

Co je virtual server vs container?

Back:

Virtual server/machine
- Máme operační systém (Host OS), na něm nám běží hypervizor, který umožňuje pak rozběhnout (Guest OS) - tzn. vytvořit virtual machine na který pak můžu instalovat aplikace.
	- Nevýhoda: když chci udělat více virtual servers s aplikacema co mají nějaký dependencies, tak to musím kopírovat pro každou instanci (protože jsou virtual servery oddělené), což je neefektivní

Container
- Máme bare metal nebo virtuální stroj, na něm běží host OS (typicky Linux)
- Vytváříme **Konteiner** = proces, který patří do daného namespace (úrovně izolace)
- Vrstvy image jsou read only, nejvyšší vrstva je na write i read.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250501130157.png)
<!-- ImageEnd -->
<!--ID: 1746518887422-->
END

---


START
FIT-Card

Jaké jsou vrstvy containerů?

Back:

![](../../Assets/Pasted%20image%2020250501130947.png)
<!--ID: 1746518887425-->
END

---


START
FIT-Card

Co je **image**?

Back:

Vrstvy **file systému**, které jsou složeny tak, aby tvořily file systém

Je immutable
<!--ID: 1746518887428-->
END

---


START
FIT-Card

Co je **container**?

Back:

Jeden (nebo více) **procesů** a množina **linux namespaces**
- Container je zařazený do namespacu, čímž se provádí izolace
<!--ID: 1746518887431-->
END

---


START
FIT-Card

Co je Container Engine/Runtime?

Back:

Core Process na host machine, který umožňuje spouštění/běh containerů.
<!--ID: 1746518887433-->
END

---


START
FIT-Card

Co je Client?

Back:

Aplikace, která komunikuje s container enginem přes jeho API
<!--ID: 1746518887436-->
END

---


START
FIT-Card

Co je **registry**?

Back:

Služba, která obsahuje image, mohu je tam pushovat a pullovat

Např. Docker Hub je defaultní Docker registry
<!--ID: 1746518887438-->
END

---


START
FIT-Card

Co je Swarm?

Back:

Cluster docker enginů, aby se daly spouštět docker containery v distribuovaném prostředí - pozn. v dnešní době se to moc nepoužívá, spíš by člověk sáhnul po Kubernetes
<!--ID: 1746518887441-->
END

---

### Linux namespaces

START
FIT-Card

Jaké jsou linux namespaces? (7)

Back:

- Mount
- UTS
- IPC
- PIC
- Network
- User
- Cgroup

Pomocí namespaces se určují úrovně izolovanosti.
<!--ID: 1746518887444-->
END

---


START
FIT-Card

K čemu je příkaz `lsns`?

Back:

Zobrazí mi na linuxu běžící procesy a v jakém namespacu běží.
<!--ID: 1746518887446-->
END

---


START
FIT-Card

Co je **Mount namespace**?

Back:

V namespacu existují mount pointy, což jsou připojený file systémy, které můžu využít v procesu.

Co je potřeba si uvědomit:
- Když spustím container, tak běží nad nějakým imagem, což je file systém (sestavený z vrstev file systémů).
- Když chci přistupovat do externího file systému (mimo image), tak si mountnu nějaký file systém

To je vyloženě to, když člověk dělá v Dockeru mountování nějaké složky

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501131918.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887449-->
END

---


START
FIT-Card

Co je UTS namespace?

Back:

Je to jakoby název hosta

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501132258.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887452-->
END

---


START
FIT-Card

Co je IPC namespace?

Back:

Řeší komunikaci mezi procesama - message queues, semafory, shared memory,...

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501132308.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887454-->
END

---


START
FIT-Card

Co je PID namespace?

Back:

Každý container má PID (process id).

Ten první proces má vždy `PID=1`.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501132317.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887457-->
END

---


START
FIT-Card

Co je net namespace?

Back:

Díky tomu lze izolovat komunikace s daným containerem.

Každý container má interně vlastní porty (tzn. každý container může uvnitř využívat např. port 5000). Díky networku můžu např. tyto porty navzájem namapovat. 

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501132337.png)
<!-- DetailInfoEnd -->

<!--ID: 1746518887459-->
END

---


START
FIT-Card

Co je user namespace?

Back:



<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501132353.png)
<!-- DetailInfoEnd -->

<!--ID: 1746518887462-->
END

---


START
FIT-Card

Co je cgroup namespace?

Back:

![](../../Assets/Pasted%20image%2020250501132405.png)
<!--ID: 1746518887465-->
END

---


START
FIT-Card

Co jsou **container images**?

Back:

Jsou to vrstvy file systému (adresáře) + ovladač, který sestaví file system z jednotlivých vrstev

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501140458.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887467-->
END

---


START
FIT-Card

Co je OverlayFS?

Back:

![](../../Assets/Pasted%20image%2020250501140722.png)
<!--ID: 1746518887470-->
END

---


START
FIT-Card

Jaké jsou vrstvy v image?

Back:

- merged - 
- upperdir - jsou to read/write vrstvy
- lowerdir - všechny vrstvy v rámci image (to se stahuje, když dám docker pull) 

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250501140722.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518887472-->
END

---

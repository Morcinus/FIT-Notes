---
created: 2025-04-13T13:17:04
title: "Cloud Computing"
up: "[[📖NI-AM2]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM2 prednaska08 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Co je **multitenancy** požadavek na aplikaci?

Back:

Aplikace už při návrhu a implementaci musí uživatele chápat tak, že využívají zdroje odděleně

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413145333.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887308-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **lift and shift** princip?

Back:

Když mi někde běží aplikace a chci ji přesunout do cloudu, měl bych být schopný ji jen "vzít a nainstalovat a spustit v cloudu" - tzn. neměl by být moc rozdíl jestli mi aplikace běží lokálně, na nějakém serveru nebo v cloudu.
<!--ID: 1746518887312-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je koncept **Shared Everything**?

Back:

Všechny zdroje jsou sdílené mezi tenantama nebo consumerama.

Typicky u SaaS aplikace máme pro všechny jednu web aplikaci, jednu databázi, jeden backend atd.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413145740.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887315-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Shared Infrastructure - Virtual Machines**?

Back:

Infrastruktura je sdílena přes virtual machines.

- Každý tenant má **svoje virtuální prostředí** (=virtual machines s vlastním OS)
- Prostředí jsou řízeny **hypervizorem** nad danou **shared infrastrukturou**

![](../../../Assets/Pasted%20image%2020250511144657.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413145831.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887318-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Shared Infrastructure - OS Virtualization**?

Back:

- Každý tenant má **svoje virtuální prostředí**
- Prostředí jsou řízeny **přímo operačním systémem** nad danou **shared infrastrukturou** (= OS virtualizace)

Tzn. Není žádná mezivrstva mezi operačním systémem a aplikací, sám OS poskytuje tu izolaci.

![](../../../Assets/Pasted%20image%2020250511144702.png)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413145857.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887320-->

END

---

### IaaS

START
FIT-Card

(FIT-Notes flashcard)

Co je **Infrastruktura** v Iaas? Co všechno zahrnuje? (5)

Back:

Prostředí ve kterém běží naše aplikace.

Zahrnuje to i:

- **servers**
- **connectivity** (networks, firewalls, route tables)
- **storage** (pro OS a app data)
- **identity management** (tenancy)
- **monitoring, logging, auditing**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413150232.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887323-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **region** v infrastruktuře? Proč je důležitý vybrat správný region? (2)

Back:

- **Region** = Kde se nachází moje aplikace
- Je důležit kvůli **latency** a **regulations**
<!--ID: 1746518887326-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Když mám data uživatelů, co jsou z Evropy, v jakém regionu můžu ukládat jejich data?

Back:

Obecně musím ukládat data v regionu odkud je daný uživatel (z hlediska práva)
<!--ID: 1746518887328-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **datové centrum**? Jaké jsou části **hierarchie**, ve které se nachází **datové centrum**?

Back:

Typicky budova, ve které jsou **výpočetní zdroje**.

- V rámci regionu je typicky více datových center poskytovatele (např. AWS, Azure,...).

**Hierarchie**:

- **Datová centra** (regiony)
- **Fyzická síť** - spojuje datová centra
- **Virtuální síť** - je nad fyzickou
- **Zdroje** (storage, databáze, security,...) - to běží až nad tou virtuální sítí (viz obrázek)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413151106.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887331-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší dřívější **Gen 1.0 Cloud** a nynější **Gen 2.0 Cloud**?

Back:

**Gen 1.0:**

- Máme fyzický stroj, na něm hypervizor (software), díky kterému máme virtuální servery
- Problém: Kvůli multitenancy se může stát, že pokud jeden stroj se se hodně zatíží zákazníkem, tak to může ovlivnit chod jiné aplikace (což porušuje izolaci tenantů)

**Gen 2.0:**

- Přesunula izolovanost na úroveň síťové karty
- Díky tomu se izolace posunula na úroveň hardwaru a vyřešil se tím ten problém

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413151419.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887334-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Čeho je zkratka **VCN**?

Back:

Virtual Cloud Network
<!--ID: 1746518887336-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **VCN**? Jak funguje?

Back:

VCN = privátní síť v rámci **jednoho regionu**, ve které nám běží naše instance

1. **Zadefinujeme si IP adresu sítě** - díky tomu máme adresu sítě a nějaký rozsah ve kterém mají adresy jednotlivá zařízení
2. Rozdělíme síť do **subnetů** (podsítí). V rámci podsítí pak teprve máme ty zařízení.

Pak pro ty jednotlivé **subnety** můžu definovat **pravidla** a **přístupy**.

V rámci VCN tedy máme typicky několik subnetů.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413151633.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887339-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší **public** a **private** subnet?

Back:

- **Public** subnet umožňuje přistupovat do sítě z vnějšku z internetu
  - To se dělá pomocí DNATu
- **Private** může být kompletně izolovaná a komunikuje pouze směrem do internetu
  - To se dělá pomocí SNATu

Typicky člověk na úrovni subnetů pak nastavuje firewally a routovací tabulky.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413152018.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887342-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co znamená pojem **Bastion**?

Back:

**Bastion** je "výčlenek" v rámci opevnění hradu, kde může sedět člověk a např. koukat, kde se co děje

V cloudu to je vstupní bod do dané infrastruktury.

Tzn. bastion je na public síti, z bastionu pak můžu přistupovat do té privátní sítě. (Jako na NI-PDP člověk má "frontend" node a přes něj se dají pouštět věci na dalších nodes.)
<!--ID: 1746518887345-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Peering**?

Back:

Může se stát, že máme 2 VCN a ty chci nějak propojit (např. každá VCN pro jiný region). Chci ale umět komunikovat z jedné VCN do druhé.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413152441.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887348-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší **local peering** a **remote peering**?

Back:

**Local Peering** = 2 VCN v rámci jednoho regionu
**Remote Peering** = 2 VCN v rámci více regionů
<!--ID: 1746518887351-->

END

---

#### Compute

START
FIT-Card

(FIT-Notes flashcard)

Co je "**shape**" v cloud computingu?

Back:

Množství paměti a CPU na dané instanci nodu v infrastruktuře.

<!-- DetailInfoStart -->

Typicky poskytovatel má předdefinované shapy a já si je vyberu

![](../../../Assets/Pasted%20image%2020250413152950.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887354-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Virtual Machine** (hosting/služba)?

Back:

**Multi-tenantní model**

- Hypervizor virtualizuje nad Bare Metal serverem a vytváří tím více Virtual Machines
<!--ID: 1746518887356-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Bare Metal** (hosting/služba)?

Back:

Služba **single-tenantního model**

- Můžu si pronajmout fyzický server (vyloženě mám hardware celý pro sebe)
- Mám přímý access k hardwaru (pro určté úlohy se to může hodit, můžu si nainstalovat vlastní hypervizor)
<!--ID: 1746518887359-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Dedicated VM Hosts** (DVM) (hosting/služba)?

Back:

Single-tenant model:

- Hypervizor je spravovaný poskytovatelem, ale mám fyzický server celý pro sebe.
- (Je to podobný jako Bare Metal, ale tady mi hypervizora spravuje poskytovatel)
<!--ID: 1746518887362-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Image** v kontextu infrastruktury?

Back:

Template pro virtuální hard drive s operačním systémem (podobně jako v dockeru).

- Je to uložené v boot volume

<!-- DetailInfoStart -->

Poskytovatel typicky poskytuje základní images - Ubuntu, Windows Server atd.

<!-- DetailInfoEnd -->
<!--ID: 1746518887365-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **autoškálování** v infrastruktuře?

Back:

1. Vytvořím **konfiguraci instance** (nodu) - image, shape, do jakých subnets instance patří atd.
2. Potom s danou konfigurací můžu **vytvářet další nody**
3. Potom můžu **definovat pravidla** - např. když vytížení CPU přesáhne 80%, tak chci aby se mi přidala další node

Díky tomu můžu takto infrastrukturu dynamicky nafukovat a vyfukovat.

<!-- DetailInfoStart -->

Typicky tam člověk má nastavený i limity, aby se to nenaškálovalo moc (kdyby byla aplikace pod útokem) atd.

![](../../../Assets/Pasted%20image%2020250413153952.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887368-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaká je **nevýhoda autoškálování** v IaaS?

Back:

Typicky to je míň efektivní než Kubernetes, protože když chci např. nahodit nový node, tak to nahazuju přímo v infrastruktuře a může trvat třeba 2 minuty, než se mi nakopne nový server.

V Kubernetes se to dá víc ošéfit
<!--ID: 1746518887371-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **Load Balancer v Iaas**? Jaké jsou 2 typy loadbalanceru?

Back:

Jsou 2 typy:

- **Síťový** - např. DNAT
  - Typicky to je součástí služby poskytovatele
  - Poskytovatel pak (přes smlouvu SLA) zaručuje, že load balancer zvládne určitý bandwidth
  - Typicky to funguje tak, že máme request, ten nám jde do "listeneru", ten pak rozhodne, do jakýho load balanceru se request pošle (ten je v datovém centru) a ten pak rozpošle request v rámci datového centra
- **Aplikační**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250413154752.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887373-->

END

---

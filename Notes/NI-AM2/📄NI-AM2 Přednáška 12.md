---
created: 2025-05-12T13:19:35
title: "Kubernetes"
up: "[[📖NI-AM2]]"
---

TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska12 status-toReview


START
FIT-Card

Co je **Automatic binpacking** v Kubernetes?

Back:

**Kubernetes automaticky** dává **containery** na nodes podle jejich **požadavků** na výkon a zdroje 
<!--ID: 1747064415887-->
END

---


START
FIT-Card

Co je **Horizontal scaling** v Kubernetes?

Back:

Kubernetes škáluje aplikaci pomocí příkazů, UI nebo automaticky podle CPU usage
<!--ID: 1747064415890-->
END

---


START
FIT-Card

Co je **Automated rollouts and rollbacks**

Back:

Změny se **postupně** rolloutují, monitoruje se health aplikace a provede se rollback pokud je něco špatně.
<!--ID: 1747064415893-->
END

---


START
FIT-Card

Co je **storage orchestration** v Kubernetes?

Back:

Automaticky se mountuje storage systém (lokální nebo cloudový)
<!--ID: 1747064415895-->
END

---


START
FIT-Card

Co je **self-healing** v Kubernetes?

Back:

- Když umře node, automaticky přehodí container na nějakou jinou node
- Automaticky killuje containery, které neodpovídají a třeba je restartuje
<!--ID: 1747064415898-->
END

---


START
FIT-Card

Co je **service discovery a load balancing** v Kubernetes?

Back:

- Dává containerům **IP adresy** (a některým **DNS názvy**)
- Provádí **loadbalancing**
<!--ID: 1747064415901-->
END

---

START
FIT-Card

Na jaké 2 hlavní části se dá rozdělit Kubernetes?

Back:

- **Control Plane** - služby, co zajišťují běh aplikací
- **Data Plane** - smotná aplikace (mikroslužby - databáze, nginx, jakékoliv služby)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250512163210.png)
<!-- ImageEnd -->
<!--ID: 1747064415903-->
END

---


START
FIT-Card

Co je v Kubernetes **Kubectl**?

Back:

CLI, skrze které můžu komunikovat s **API serverem** (`kube-apiserver`), který posílá příkazy do Control Plane
<!--ID: 1747064415906-->
END

---


START
FIT-Card

Co je **etcd** v Kubernetes?

Back:

Interní Databáze Kubernetes, která obsahuje informace o zdrojích.
<!--ID: 1747064415909-->
END

---


START
FIT-Card

Co je **kube-scheduler**?

Back:

Vybírá, jaké nody se budou používat pro využití zdrojů, snaží se to vymyslet tak, aby ty pody byly rovnoměrně rozmístěné na nodech podle toho jaké zdroje potřebují.

Jak to funguje:
- Máme **pody** = v rámci nich můžeme pak vytvářet containery
- Scheduler vybírá, na jaký node umístí jaký **pod**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512164018.png)
<!-- DetailInfoEnd -->
<!--ID: 1747064415911-->
END

---


START
FIT-Card

Co je **Pod** v Kubernetes?

Back:

Skupina jednoho nebo více containerů

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512173129.png)
<!-- DetailInfoEnd -->
<!--ID: 1747064415914-->
END

---


START
FIT-Card

Co je **kube-controller-manager**? Jaké má části?

Back:

Controller, co se stará o cluster objekty

- **Node controller** - řídí nodes (monitoruje a reaguje na jejich stav)
- **Job controller** - vytváří pody
- **Endpoints controller** - např. propojuje services a pody
<!--ID: 1747064415917-->
END

---


START
FIT-Card

Co je **cloud-controller-manager**?

Back:

Integrace kubernetes s cloud services

- **Node controller** - kontroluje jestli node byla deletnuta v cloudu, když neodpovídá
- **Route controller** - nastavuje routes v cloud infrastructure
- **Service controller** - řídí services
<!--ID: 1747064415920-->
END

---


START
FIT-Card

Co je **kubelet**?

Back:

Agent, co běží na každém nodu. Zajišťuje, že containers běží v Podech.
<!--ID: 1747064415923-->
END

---


START
FIT-Card

Co je **kube-proxy**?

Back:

Zajišťuje **communication rules** mezi Podama a clusterem
<!--ID: 1747064415926-->
END

---


START
FIT-Card

Co je **workload**? Jaké jsou typy?

Back:

Typ zdroje, který můžu v Kubernetes vytvářet:
- **Deployment** - volím, když máme stateless aplikaci (tzn. nemá další závislosti např. na databázi nebo jiných aplikacích)
- **Stateful set** - volím, když aplikace na něčem závisí (např. databáze). Kubernetes pak spravuje celou množinu těch závislostí a té aplikace najednou (protože se to nedá oddělit)
- **Daemon set** - mám víc nodů, chceme, aby se vytvořil pod na každém nodu clusteru. To se používá např. když chcem mít na každém nodu monitoring.
- **Cron / cronjob** - umožňují spouštět úkoly, které jsou spouštěny v časových intervalech

Vždy když udělám nějaký workload, tak mi kubernetes vytvoří pody a v nich rozběhne containery.

<!-- ExampleStart -->
Příklad deploymentu:
![](../../Assets/Pasted%20image%2020250512165142.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512173202.png)
<!-- DetailInfoEnd -->
<!--ID: 1747064415929-->
END

---


START
FIT-Card

Co jsou v kubernetes labely?

Back:

Jsou to dvojice `klíč: hodnota`, který můžu přirazovat podům. Pak v deploymentu můžu např. deploynout všechny pody, co mají tu kombinaci klíč hodnota.

<!-- ExampleStart -->
Např. zde labels v `template` mi definují tu hodnotu a pak v `selector` definuju co se má vybrat za pody ke spuštění.

![](../../Assets/Pasted%20image%2020250512165142.png)
<!-- ExampleEnd -->

<!--ID: 1747064415931-->
END

---


START
FIT-Card

Co je **overlay network**?

Back:

Když Kubernetes rozmístí několik podů na různé nody, tak síťové rozhraní těch podů mají adresy z rozsahu **overlay networku**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512170504.png)
<!-- DetailInfoEnd -->
<!--ID: 1747064415934-->
END

---



START
FIT-Card

Co jsou **služby/services** v rámci Kubernetes?

Back:

V Kubernetes to má specifický význam - jsou to programy, které **propojují síťové rozhraní nodu a síťové rozhraní podů**.

To je nutné, aby fungovala ta komunikace.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250512170504.png)
<!-- ImageEnd -->
<!--ID: 1747064415937-->
END

---


START
FIT-Card

Jaké jsou **typy služeb** v Kubernetes?

Back:

- **Nodeport** - propojuje síťové rozhraní node a síťové rozhraní podu
- **Loadbalancer** - requesty (např. z aplikace) se neposílají přímo na nodes, ale na load balancer, který je pak rozesílá do jednotlivých nodes. Load balancer je externí služba, není to součástí Kubernetes. Typicky v poskytovatel cloudu nabízí i tzv. "managed službu", což je právě třeba ten loadbalancer
- **ClusterIP** - umožňuje mi podům, které jsou v clusteru přistupovat k jiným podům, které běží v clusteru

<!-- ImageStart -->
**Nodeport**
![](../../Assets/Pasted%20image%2020250512171143.png)

**Loadbalancer**
![](../../Assets/Pasted%20image%2020250512171823.png)
<!-- ImageEnd -->

<!--ID: 1747064415940-->
END

---


START
FIT-Card

Co je **managed kubernetes**?

Back:

To, že využívám Kubernetes, ale poskytovatel cloudu se mi stará o některé části. Např. mi poskytuje i nějaké vlastní kubernetes služby (jako loadbalancer) a sám mi je propojuje.

Takže to je jakoby Kubernetes s tím že nějakou práci za mě udělá ten cloud provider.
<!--ID: 1747064415943-->
END

---

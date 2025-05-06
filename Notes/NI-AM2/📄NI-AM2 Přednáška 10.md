---
created: 2025-05-01T12:50:26
title: "Cloud Native"
up: "[[📖NI-AM2]]"
---
TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska10 status-toReview

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



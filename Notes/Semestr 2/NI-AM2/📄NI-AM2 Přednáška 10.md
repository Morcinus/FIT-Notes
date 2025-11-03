---
created: 2025-05-01T12:50:26
title: "Cloud Native"
up: "[[📖NI-AM2]]"
---

TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska10 status-toReview


START
FIT-Card

(FIT-Notes flashcard)

Co je **virtual server/machine** vs **container**?

Back:

**Virtual server/machine**

- Máme **operační systém** (Host OS), na něm nám běží **hypervizor**, který umožňuje pak rozběhnout další **operační systém** (Guest OS) - tzn. vytvořit virtual machine na který pak můžu instalovat aplikace.
  - Nevýhoda: když chci udělat více virtual servers s aplikacema co mají nějaký dependencies, tak to musím kopírovat pro každou instanci (protože jsou virtual servery oddělené), což je neefektivní

**Container**

- Máme **bare metal** nebo **virtuální stroj**, na něm běží **host OS** (typicky Linux)
- Vytváříme **Konteiner** = **proces**, který patří do daného namespace (úrovně izolace)
- Kontejnery tak **sdílí knihovny** (ty jsou na host OS)
- Vrstvy image jsou read only, nejvyšší vrstva je na write i read.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250501130157.png)

<!-- ImageEnd -->
<!--ID: 1746518887422-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké **programy se používají pro běh containerů** (Docker)? (2)

Back:

1. **Conteiner Runtime** (`runc` a `containerd`) = komunikuje s kernelem OS pro izolaci kontejnerů, zapíná a stará se o procesy containerů
2. **Container Engine** (např. Docker Engine) = spravuje containery, přijímá vstupy (CLI/API), pulluje images z registry, připravuje data, co předat runtimu atd.

Např. v dockeru je flow následující:
`docker` CLI
→ Docker Engine
→ `containerd`
→ `runc`
→ Linux kernel
→ Isolated container runs

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501130947.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887425-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **image**?

Back:

Vrstvy **file systému**, které jsou složeny tak, aby tvořily file systém

Je immutable
<!--ID: 1746518887428-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **container**?

Back:

Jeden (nebo více) **procesů**, který je zařazený do **linux namespaces**, čímž se provádí izolace
<!--ID: 1746518887431-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Container Engine/Runtime**?

Back:

Core Process na host machine, který umožňuje spouštění/běh containerů.
<!--ID: 1746518887433-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Client** v kontextu conteinerů?

Back:

Aplikace, která komunikuje s container enginem přes jeho API
<!--ID: 1746518887436-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **registry**?

Back:

Služba, která obsahuje image, mohu je tam pushovat a pullovat

Např. Docker Hub je defaultní Docker registry
<!--ID: 1746518887438-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Swarm**?

Back:

Cluster docker enginů, aby se daly spouštět docker containery v distribuovaném prostředí - pozn. v dnešní době se to moc nepoužívá, spíš by člověk sáhnul po Kubernetes
<!--ID: 1746518887441-->

END

---

### Linux namespaces

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **linux namespaces**? (7)

Back:

- **Mount**
- **UTS**
- **IPC**
- **PID**
- **Network**
- **User**
- **Cgroup**

Pomocí namespaces se určují úrovně izolovanosti.
<!--ID: 1746518887444-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

K čemu je příkaz `lsns`?

Back:

Zobrazí mi na linuxu běžící procesy a v jakém namespacu běží.
<!--ID: 1746518887446-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Mount namespace** (`mnt`)?

Back:

V namespacu existují **mount pointy**, což jsou připojený file systémy, které můžu využít v procesu.

Co je potřeba si uvědomit:

- Když spustím container, tak běží nad nějakým imagem, což je file systém (sestavený z vrstev file systémů).
- Když chci přistupovat do externího file systému (mimo image), tak si mountnu nějaký file systém

To je vyloženě to, když člověk dělá v Dockeru mountování nějaké složky

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501131918.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887449-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **UTS namespace**?

Back:

Izoluje se název hosta mezi UTS namespaces.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501132258.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887452-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **IPC namespace**?

Back:

Řeší komunikaci mezi procesama - message queues, semafory, shared memory,...

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501132308.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887454-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **PID namespace**?

Back:

Každý container má PID (process id).

Ten první proces má vždy `PID=1`.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501132317.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887457-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **net namespace**?

Back:

Každý **container** má vlastní **private network stack** (interfaces, routing tables, sockets,...) - tzn. každý container má vlastní porty.

Mezi externím networkem a containerem je **virtual ethernet bridge**, který mapuje jednotlivé porty.

Na host OS je pak **NAT**.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501132337.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887459-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **user namespace**?

Back:

Izoluje **user a group IDs** (UIDs/GIDs) mezi containerem a hostem.

Díky tomu může proces v containeru běžet jako root (UID 0), ale v host systému bude mít napamovaný jiný id, takže nepoběží jako root (např. UID 100)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501132353.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887462-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **cgroup namespace**?

Back:

Izoluje pohled na **contol groups** (=resource limitations) z pohledu containeru.

Např. host má přístup k 8 GB RAM, ale cgroup namespace nastaví containeru, že vidí a může využívat pouze 1 GB RAM.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501132405.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887465-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **container images**?

Back:

Jsou to vrstvy file systému (adresáře) + ovladač, který sestaví file system z jednotlivých vrstev

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501140458.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887467-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **OverlayFS**?

Back:

- Filesystem služba, která umožňuje složiz **nový file systém** z několika existujících file systémů.
- To využívá **Docker** pro sestavování file system struktur pro images a containers

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501140722.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887470-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou **vrstvy v OverlayFS**? Jak funguje jejich skládání? (3)

Back:

- **lowerdir** (Image Layer) - všechny vrstvy v rámci image (to se stahuje, když dám docker pull), jsou read only
- **upperdir** (Container Layer) - jsou to read/write vrstvy
- **merged** (Container Mount) - ???

Jak funguje skládání:

1. Vezmou se vrstvy z **image layers** (ty jsou read only)
2. Pokud existuje nějaký ekvivalent toho souboru v **container layeru**, tak se vezme ten (ty už jsou read/write)
3. Z toho vznikne výsledný **merged layer**, který se pak používá

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250501140722.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887472-->

END

---

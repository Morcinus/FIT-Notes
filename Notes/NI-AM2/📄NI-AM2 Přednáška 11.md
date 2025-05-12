---
created: 2025-05-12T13:19:21
title: Docker
up:
  - "[[📖NI-AM2]]"
---

TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska11 status-toReview


START
FIT-Card

Jak se dá pullnout image z registry v Dockeru?

Back:

`docker pull [název image]`

např.
`docker pull ubuntu`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512132155.png)
<!-- DetailInfoEnd -->
<!--ID: 1747051419658-->
END

---


START
FIT-Card

Co je Dockerfile?

Back:

Skript, který vytvoří nový **image**.

Každý řádek v dockerfilu vytváří intermediary layer.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512132216.png)
<!-- DetailInfoEnd -->
<!--ID: 1747051419663-->
END

---


START
FIT-Card

Příkaz: **zjištění verze docker enginu**

Back:

`docker version`
<!--ID: 1747051419666-->
END

---


START
FIT-Card

Příkaz: **vyhledání image v registry**

Back:

`docker search <image>`
<!--ID: 1747051419669-->
END

---


START
FIT-Card

Příkaz: **pullnutí image**

Back:

`docker pull <image[:version]>`

Stáhne image z registry, pokud není poskytnuta verze, stáhne poslední
<!--ID: 1747051419672-->
END

---


START
FIT-Card

Příkaz: **vypsání lokálních images**

Back:

`docker images`
<!--ID: 1747051419674-->
END

---


START
FIT-Card

Příkaz: **spuštění image a commandu uvnitř image**

Back:

`docker run -it <image[:version]> <command>`

- `-i` je interactive mode
- `-t` alokuje TTY

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512134853.png)
<!-- DetailInfoEnd -->
<!--ID: 1747051419677-->
END

---


START
FIT-Card

Příkaz: **zobrazení běžících containerů**

Back:

`docker ps [-as]`

- `-a` všechny containery i ty stopnutý
- `-s` vypíše container size

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512134933.png)
<!-- DetailInfoEnd -->
<!--ID: 1747051419680-->
END

---


START
FIT-Card

Příkaz: **odstranění containeru**

Back:

`docker rm <container>`

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250512135038.png)
<!-- DetailInfoEnd -->
<!--ID: 1747051419683-->
END

---


START
FIT-Card

Příkaz: **odstranění image**

Back:

`docker rmi <image>`
<!--ID: 1747051419685-->
END

---


START
FIT-Card

Příkaz: **vytvoření image z containeru**

Back:

`docker commit <container> <name[:version]>`
<!--ID: 1747051419688-->
END

---


START
FIT-Card

Příkaz: **zobrazení image history**

Back:

`docker history <image>`
<!--ID: 1747051419691-->
END

---


START
FIT-Card

Popiš **Docker Container State Diagram**

![](../../Assets/Pasted%20image%2020250512132557.png)

Back:

![](../../Assets/Pasted%20image%2020250512132602.png)
<!--ID: 1747051419693-->
END

---

### Networking and Linking

START
FIT-Card

Jaké jsou **3 default docker networky**?

Back:

- **bridge**
- **host**
- **none**
<!--ID: 1747051419696-->
END

---


START
FIT-Card

Co je **bridge** docker network?

Back:

Docker vytvoří **subnet** `172.17.0.0/16` a **gateway**.

Zapnuté containery jsou pak přidány do této podsítě, ve které mohou mezi sebou komunikovat (a mohou případně accessovat host's network).
<!--ID: 1747051419699-->
END

---


START
FIT-Card

Co je **host** docker network?

Back:

containeru jsou zpřístupněny všechny network interfaces hosta
<!--ID: 1747051419701-->
END

---


START
FIT-Card

Co je **none** docker network?

Back:

containeru je vytvořen vlastní network a nejsou nakonfigurované žádné interfaces
<!--ID: 1747051419704-->
END

---


START
FIT-Card

Jak funguje **custom network** v dockeru? 

Back:

Můžeme nakonfigurovat vlastní network a naházet do něj containery.

Ty pak mohou spolu komunikovat, ale nemohou komunikovat s hostem.
<!--ID: 1747051419707-->
END

---


START
FIT-Card

Příkaz: **vypsání dostupných networks** v dockeru

Back:

`docker network ls`
<!--ID: 1747051419709-->
END

---


START
FIT-Card

Příkaz: **vypsání detailů** specifického networku

Back:

`docker network inspect <network-id>`
<!--ID: 1747051419712-->
END

---


START
FIT-Card

Příkaz: **vytvoření izolovaného networku** v dockeru

Back:

`docker network create --driver bridge isolated_nw`
<!--ID: 1747051419715-->
END

---


START
FIT-Card

Příkaz: **zapnutí containeru a připojení do izolovaného networku**

Back:

`docker run -it --network=isolated_nw ubuntu bin/bash`
<!--ID: 1747051419718-->
END

---


START
FIT-Card

Co jsou v dockeru **Data Volumes**?

Back:

Úložiště, které může být využito více containery a persistuje i po smazání containeru.

Prostě klasicky to, když člověk mountuje volume (adresář).
<!--ID: 1747051419720-->
END

---


START
FIT-Card

Příkaz: **spuštění containeru s mountnutým volume**

Back:

`docker run -d -v /src/webapp:/webapp training/webapp python app.py`
<!--ID: 1747051419723-->
END

---

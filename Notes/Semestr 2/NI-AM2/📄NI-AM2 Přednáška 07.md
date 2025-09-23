---
created: 2025-03-31T13:08:10
title: "Cloud"
up: "[[📖NI-AM2]]"
---
TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska07 status-toReview

START
FIT-Card

Čeho jsou zkratky CAPEX a OPEX?

Back:
- **CAPEX** - Capital expanditure
- **OPEX** - Operational expenditure
<!--ID: 1746520168970-->
END

---


START
FIT-Card

Co je CAPEX?

Back:

Koupim něco, můžu si to odepsat z daní najednou (nebo třeba na splátky):
![](../../../Assets/Pasted%20image%2020250331133041.png)
<!--ID: 1746520168973-->
END 

---


START
FIT-Card

Co je OPEX?

Back:

Když nekoupím server, ale místo toho koupím cloud jako službu, tak si to můžu odepisovat pravidelně, protože to je operational cost.

OPEX je kompletně tax-deductible

![](../../../Assets/Pasted%20image%2020250331133214.png)
<!--ID: 1746520168977-->
END

---


START
FIT-Card

Jaký je vztah CAPEX, OPEX a cloudu?

Back:

Díky Cloudu můžu vyměnit CAPEX za OPEX.

<!-- ExplanationStart -->
Místo toho, abych si musel kupovat servery jako investici, můžu to používat jako službu, takže si to můžu pravidelně odepisovat z daní. 
<!-- ExplanationEnd -->
<!--ID: 1746520168980-->
END

---


START
FIT-Card

Co jsou IAAS, PAAS, SAAS?

Back:

- IaaS - Hardwarová vrstva (virtualizace, servers, storage, networking)
- PaaS - Softwarová vrstva (IaaS + OS, middlewares, runtime)
- SaaS - už konkrétní software (PaaS + data a aplikace)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250331134818.png)
![](../../../Assets/Pasted%20image%2020250331135516.png)
<!-- DetailInfoEnd -->
<!--ID: 1746520168982-->
END

---


START
FIT-Card

Co vysvětluje tento obrázek? V čem mi pomůže cloud?

![](../../../Assets/Pasted%20image%2020250331133635.png)

Back:

Na aplikaci mám nějaký hardware. Pak třeba mi začnou růst uživatelé a musím si koupit lepší hardware. Pak to zas třeba klesne, tak musím zase snížit hardware.

Opportunity costs = přicházím o peníze tím, že platím víc než potřebuju.

**Cloud tohle umožňuje optimalizovat**.
<!--ID: 1746520168985-->
END

---


START
FIT-Card

Co je **on-demand** a **self-service**?

Back:

- **on-demand** - využívám službu/zdroje když ji potřebuju, můžu si to v řádech minut měnit
- **self-service** - můžu si službu/zdroj řídit sám skrze nějaké GUI nebo CLI - nemusím např. volat do Googlu, aby mi to upravili oni (to samotné nastavení se pak udělá automatizovaně)
<!--ID: 1746520168988-->
END

---


START
FIT-Card

Co je **broad network access**?

Back:

- Přes síť můžu přistoupit k daným službám odkudkoliv
<!--ID: 1746520168991-->
END

---


START
FIT-Card

Co je **tenant** a **multitenant**?

Back:

- Tenant = **nájemník**
- **Multitenant** = více uživatelů (co se neznají) používají stejné zdroje. Např. stejný server v cloudu, každý si tam spustí vlastní docker například.
<!--ID: 1746520168994-->
END

---


START
FIT-Card

Co je Resource pooling?

Back:

- Zdroje jsou využívány více klientama (multitenancy)
- Zdroje se dynamicky přiřazují podle poptávky jednotlivých tenantů

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250331134205.png)
<!-- DetailInfoEnd -->
<!--ID: 1746520168997-->
END

---


START
FIT-Card

Co je **overcommitment**?

Back:

Nabízím více zdrojů, než mám.

Stejné jako u letenek. Nabídnou letenky více lidem než se vejde do letadla a až když se to letadlo fakt naplní, tak teprve začnou lidem nabízet odměnu za to, že nepoletí.

To samé u serverů - cloud provider nabídne víc zdrojů, než skutečně má, protože si to umí propočítat, aby se mu to vyplatilo
<!--ID: 1746520169000-->
END

---


START
FIT-Card

Co je **scalability and elasticity**?

Back:

- Aplikace se může škálovat (rozšiřovat/zúžovat)
- Automatizovaně nebo manuálně
<!--ID: 1746520169003-->
END

---


START
FIT-Card

Co je **measured service**?

Back:

Služby by měly být monitorovány, aby se vědělo, kolik čeho spotřebovávají
<!--ID: 1746520169006-->
END

---


START
FIT-Card

Co je **pay-per-use**?

Back:

![](../../../Assets/Pasted%20image%2020250331134800.png)
<!--ID: 1746520169008-->
END

---


START
FIT-Card

Co je FaaS?

Back:

Function as a service
- spouštím funkci a tu si pustím v cloudu

Např. Amazon Lambda, atd.
<!--ID: 1746520169011-->
END

---


START
FIT-Card

Co je public, private a hybrid cloud?

Back:

- public - ten klasický
- private - Cloud, který si provozuju u sebe (např. FIT infrastruktura)
- hybrid - spojení obou, část appky je někde, část je někde jinde
	- Např. produkci mám privátně, testovací mám veřejně (kvůli bezpečnosti) apod.
<!--ID: 1746520169014-->
END

---


START
FIT-Card

Co je vCPU?

Back:

**Virtuální CPU** - CPU, co mi je v cloudu přiřazený (nemusí to být 1:1 s reálným CPU)
<!--ID: 1746520169017-->
END

---


START
FIT-Card

Čím je definovaná IaaS? (2)

Back:

Typicky:
- **Paměť** (613 MB memory)
- **Storage** (1 TB block storage)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250331140135.png)
<!-- DetailInfoEnd -->
<!--ID: 1746520169020-->
END

---


START
FIT-Card

Co je v dnešní době prakticky PaaS?

Back:

Prakticky všichni cloud provideři používají Kubernetes.

Dřív se před Kubernetes ještě používal Google App Engine (první PaaS service)

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250331140405.png)
<!-- DetailInfoEnd -->
<!--ID: 1746520169022-->
END

---


START
FIT-Card

Co je SaaS?

Back:

Libovolná aplikace, co je služba, která běží přes webový prohlížeč

<!-- DetailInfoStart -->
![](../../../Assets/Pasted%20image%2020250331140445.png)
<!-- DetailInfoEnd -->
<!--ID: 1746520169025-->
END

---

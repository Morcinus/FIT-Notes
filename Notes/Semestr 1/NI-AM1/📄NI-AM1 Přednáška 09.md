---
created: 2024-11-25T12:16:57
title: "REST"
up: "[[📖NI-AM1]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM1 prednaska09 status-toReview

<!--
Exam Note ID: none
Exam Note Section Name: none
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je vztah RESTu a HTTP?

Back:

Protokol HTTP je podle Vitvara "konkrétní implementací" standardu REST.

(Čímž nejspíš myslel, že s využitím HTTP se dá implementovat REST)
<!--ID: 1735205749814-->

END

---

### REST

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Na co se dělí REST? (4)

Back:

- **Zdroje** (resource) 
- **Identifikátor** 
- **Data**
- **Metadata**
<!--ID: 1735205749817-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je **URI**?

Back:

Unified Resource Identifier = identifikuje zdroj
<!--ID: 1735205749820-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je URL?

Back:

Uniform Resource Locator = identifikuje zdroj + obsahuje jeho lokaci
<!--ID: 1735205749823-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je URN?

Back:

Uniform Resource Name = název, který je globálně unikátní
<!--ID: 1735205749825-->

END

---

#### URI

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou části URI? (4)

Back:

- `scheme` - např. http, ftp (pozor, schéma není protokol!)
- `authority` - doménové jméno nebo adresa serveru (např. example.com)
- `path and query` - např. `/users?page=1`
- `fragment` - odkazuje na sekundární zdroj (např. odstavec v html)

![](../../../Assets/Pasted%20image%2020241125122945.png)
<!--ID: 1735205749828-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Je good practice mít v RESTu 2 cesty k tomu samému zdroji?

Back:

Ano! Jednotlivé REST endpointy mi definují "pohledy" na ty moje zdroje.

Např. když mám orders, tak se k tomu můžu dostat mnoha způsoby. Tomu se potom říká **alias**.

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241125123335.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125123343.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749830-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

K čemu se používá **query** v RESTu? (3)

Back:

- **filtrace** (selekce) - chci vybrat jen nějaké položky
- **projekce** - chci vypsat jen nějaký fieldy těch položek
- **instrukce**
  - např. formát, klíč

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241125123518.png)

<!-- ExampleEnd -->
<!--ID: 1735205749833-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je fragment v URI adresách?

Back:

Používá se hash, znamená to "subresource". Díky tomu mohu odkazovat na konkrétní element např. v HTML nebo XML.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125123814.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749836-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou hlavní charakteristiky URI? (5)

Back:

- **Capability URL** - krátkodobá URL, která obsahuje i nějaký key, který slouží k autentizaci/verifikaci - například v emailu se odesílá URL na změnu hesla
- **URL Alias** - více pohledů nad jedním zdrojem
- **URI Opacity** - když jako součást URI mám i formát
- **Resource versions** - když mi URI definuje i verzi toho zdroje
- **Persistent URL** - adresa by měla být validní i když zdroj už neexistuje (neměl bych smazat URI, ale třeba přesměrovat člověka na novou URI)
<!--ID: 1735205749838-->

END

---

### Reprezentace zdrojů

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Z čeho se skládají zdroje v RESTu? (3)

Back:

- **Reprezentace** - JSON, XML, ...
- **Data**
- **Metadata** - v hlavičkách, např. kdy byl resource vytvořen atd.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125124328.png)
![](../../../Assets/Pasted%20image%2020241125124338.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749841-->

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

Co jsou media types a co u nich znamená `x-` a `vnd.`?

Back:

Definují mi typ contentu, o který žádám když se dotazuji nad REST zdrojem.

Např. `text/plain`, `text/html`, `application/json` atd.

`-x` znamená, že to není standard `application/x-latex`. Můžu si tak definovat vlastní hlavičky atd.
`vnd.` znamená, že si to zadefinovala nějaká společnost `application/vnd.ms-excel`
<!--ID: 1735205749843-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co je resource state?

Back:

Každý zdroj může mít jiný stav podle toho, kdy k němu přistupuju.

Tzn. když čtu data z REST zdroje, získám tím momentální **stav** toho zdroje.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125125038.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020241125125052.png)

<!-- ExampleEnd -->
<!--ID: 1735205749846-->

END

---

### Uniform interface

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Co znamená že má REST uniform interface?

Back:

- Mám omezené množství operací (POST, GET,...)
- Operace jsou **doménově nezávislé**
<!--ID: 1735205749848-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti mají operace RESTu? (2)

Back:

Safeness:

- **Safe** - operace nemění stav (např. GET)
- **Unsafe** - mohou měnit stav (např. POST, PUT, DELETE)

Idempotence:

- **Idempotent** - Když zavolám metodu na zdroji (na stejných datech/vstupech), bude výsledek vždy stejný (GET, PUT, DELETE)
  - Pozn. idempotence má obecně dost výhod - je to spolehlivější a předvídatelnější
- **Non-idempotent** - Když zavolám metodu na zdroji (na stejných datech/vstupech), může být stav jiný (POST)

Pozn. u idempotence se jedná o **state change**. Tzn. není stejný **výsledek** (data), ale změna **stavu**.

<!-- ExampleStart -->

Idempotence:

- Funkce, co mi vždy naplní databázi danými testovacími daty je idempotentní. Vím, že to např. smaže všechna data a naplní to databázi danými daty. Vím, že výsledek té funkce bude furt stejný.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125125926.png)
![](../../../Assets/Pasted%20image%2020241125125930.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749851-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaký je rozdíl mezi efektem a výsledkem v idempotenci?

Back:

- **efekt** = jak se změní stav zdroje
- **výsledek** = co je výsledkem operace

**Idempotence** je závislá na **efektu** a ne na výsledku.

<!-- ExplanationStart -->

Např. když udělám `DELETE /orders/1`
**Efekt** (stav) = objednávka neexistuje
**Výsledek** = smazali jsme objednávku

Delete je idempotentní, takže když to udělám znovu:
**Efekt** = objednávka neexistuje
**Výsledek** = nic jsme nesmazali

<!-- ExplanationEnd -->
<!--ID: 1735205749854-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké REST metody jsou a nejsou idempotentní podle standardu?

Back:

- GET, PUT, DELETE jsou idempotentní
- POST **není** idempotentní!

<!-- ExplanationStart -->

Např. u POSTu se může v databázi vytvořit nový záznam, který má random vygenerované idčko, tzn. když vícekrát zavolám POST, tak ten efekt může být jiný.

U GET, PUT a DELETE furt pracuju s těmi samými daty, takže v tom není problém a je to idempotentní.

<!-- ExplanationEnd -->
<!--ID: 1735205749856-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Když mám POST, co by mělo být v response?

Back:

Neměl by tam být nový stav, ale měl by tam být ODKAZ na nový stav (tzn. aby si ten klient musel fetchnout znovu ten zdroj).

Proč?
Protože POST je non-idempotentní.

<!-- ExampleStart -->

Když to dělám špatně:
Když mám např. formulář a provedu POST, a pak ho vyplním datama, ze serveru (co dostanu v odpovědi POSTu), tak potom když klient refreshne stránku, tak se znovu odešle ten POST request s těmi novými daty (což je špatně).

Správně by se měl provést POST, v tom by měl být odkaz na zdroj a klient si pak znovu fetchne pomocí GET. Díky tomu se POST provede pouze jednou.

<!-- ExampleEnd -->
<!--ID: 1735205749859-->

END

---

#### CRUD operace v RESTu

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti má GET? (safeness a idempotence)

Back:

- Je **safe**
- Je **idempotnentní**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125150154.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749862-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti má PUT? (safeness a idempotence)

Back:

- Je **unsafe**
- Je **idempotent**

Updatuje celý resource.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125150145.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749865-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti má PATCH? (safeness a idempotence)

Back:

- Je **unsafe**
- Je **idempotent**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125150219.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749867-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti má POST? (safeness a idempotence)

Back:

- Je **unsafe**
- Je **not-idempotent**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125150314.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749870-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti má DELETE? (safeness a idempotence)

Back:

- Je **unsafe**
- Je **idempotent**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125150340.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749872-->

END

---

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké vlastnosti mají HEAD a OPTIONS? (safeness a idempotence)

Back:

- Je **safe**
- Je **idempotentní**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125150802.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749875-->

END

---

### Status kódy

<!--
Exam Note ID: NI-SI-9
Exam Note Section Name: Architektura REST (vlastnosti, zdroj, srovnání se SOAP)
Migration Status: done
-->

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou třídy status kódů?

Back:

- `1xx` - něco se stalo, ale ne v aplikaci, moc se nevyužívá
- `2xx` - je to správně, nenastala chyba
- `3xx` - redirection
- `4xx` - chyba na straně klienta
- `5xx` - chyba na straně serveru

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020241125151055.png)
![](../../../Assets/Pasted%20image%2020241125151104.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749877-->

END

---

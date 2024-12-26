---
created: 2024-11-25T12:16:57
title: "REST"
up: "[[📖NI-AM1]]"
---

TARGET DECK: NI-AM1
FILE TAGS: NI-AM1 prednaska09 status-toReview


START
FIT-Card

Jaký je vztah RESTu a HTTP?

Back:

Protokol HTTP je konkrétní implementací standardu REST.
<!--ID: 1735205749814-->
END

---

### REST


START
FIT-Card

Na co se dělí REST? 

Back:

- Zdroj (resource)
	- Identifikátor
	- Data
	- Metadata
<!--ID: 1735205749817-->
END

---


START
FIT-Card

Co je URI?

Back:

Unified Resource Identifier = identifikuje zdroj

(může být )
<!--ID: 1735205749820-->
END

---


START
FIT-Card

Co je URL?

Back:

Uniform Resource Locator = identifikuje zdroj + obsahuje jeho lokaci
<!--ID: 1735205749823-->
END

---


START
FIT-Card

Co je URN?

Back:

Uniform Resource Name = název, který je globálně unikátní
<!--ID: 1735205749825-->
END

---

#### URI


START
FIT-Card

Jaké jsou části URI?

Back:

![](../../Assets/Pasted%20image%2020241125122945.png)
<!--ID: 1735205749828-->
END

---


START
FIT-Card

Je good practice mít v RESTu 2 cesty k tomu samému zdroji?

Back:

Ano! Jednotlivé REST endpointy mi definují "pohledy" na ty moje zdroje. 

Např. když mám orders, tak se k tomu můžu dostat mnoha způsoby. Tomu se potom říká **alias**.

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241125123335.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125123343.png)
<!-- DetailInfoEnd -->

<!--ID: 1735205749830-->
END

---


START
FIT-Card

K čemu se používá **query** v RESTu?

Back:

- **filtrace** (selekce) - chci vybrat jen nějaké položky
- **projekce** - chci vypsat jen nějaký fieldy těch položek
- **instrukce**
	- např. formát, klíč

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241125123518.png)
<!-- ExampleEnd -->
<!--ID: 1735205749833-->
END

---


START
FIT-Card

Co je fragment v URI adresách?

Back:

Používá se hash, znamená to "subresource". Díky tomu mohu odkazovat na konkrétní element např. v HTML nebo XML.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125123814.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749836-->
END

---


START
FIT-Card

Jaké jsou hlavní charakteristiky URI?

Back:

- Capability URL
- URL Alias - více pohledů nad jedním zdrojem
- URI Opacity - když jako součást URI mám i formát
- Resource versions - když mi URI definuje i verzi toho zdroje
- Persistent URL - adresa by měla být validní i když zdroj už neexistuje (neměl bych smazat URI, ale třeba přesměrovat člověka na novou URI) 
<!--ID: 1735205749838-->
END

---
### Reprezentace zdrojů


START
FIT-Card

Z čeho se skládají zdroje v RESTu?

Back:

- Reprezentace - JSON, XML, ...
- Data
- Metadata - v hlavičkách,

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125124328.png)
![](../../Assets/Pasted%20image%2020241125124338.png)
<!-- DetailInfoEnd -->

<!--ID: 1735205749841-->
END

---


START
FIT-Card

Co jsou media types a co u nich znamená `x-` a `.vnd`?

Back:

Definují mi typ contentu, o který žádám když se dotazuji nad REST zdrojem.

Např. `text/plain`, `text/html`, `application/json` atd.

`-x` znamená, že to není standard `application/x-latex`. Můžu si tak definovat vlastní hlavičky atd.
`vnd.` znamená, že si to zadefinovala nějaká společnost `application/vnd.ms-excel` 
<!--ID: 1735205749843-->
END

---


START
FIT-Card

Co je resource state?

Back:

Každý zdroj může mít jiný stav podle toho, kdy k němu přistupuju.

Tzn. když čtu data z REST zdroje, získám tím momentální **stav** toho zdroje.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125125038.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020241125125052.png)
<!-- ExampleEnd -->

<!--ID: 1735205749846-->
END

---

### Uniform interface


START
FIT-Card

Co znamená že má REST uniform interface?

Back:

- Mám omezené množství operací (POST, GET,...)
- Operace jsou doménově nezávislé
<!--ID: 1735205749848-->
END

---


START
FIT-Card

Jaké vlastnosti mají operace RESTu?

Back:

Safeness
- **Safe** - operace nemění stav (např. GET)
- **Unsafe** - mohou měnit stav (např. POST, PUT, DELETE)
Idempotence
- **Idempotent** - Když zavolám metodu na zdroji (na stejných datech/vstupech), bude výsledek vždy stejný (GET, PUT, DELETE)
	- Pozn. idempotence má obecně dost výhod - je to spolehlivější a předvídatelnější
- **Non-idempotent** - Když zavolám metodu na zdroji (na stejných datech/vstupech), může být stav jiný (POST)

Pozn. u idempotence se jedná o **state change**. Tzn. není stejný **výsledek** (data), ale změna **stavu**.

<!-- ExampleStart -->

Idempotence:
- Funkce, co mi vždy naplní databázi danými testovacími daty je idempotentní. Vím, že to např. smaže všechna data a naplní to databázi danými daty. Vím, že výsledek té funkce bude furt stejný.
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125125926.png)
![](../../Assets/Pasted%20image%2020241125125930.png)
<!-- DetailInfoEnd -->

<!--ID: 1735205749851-->
END

---


START
FIT-Card

Jaký je rozdíl mezi efektem a výsledkem v idempotenci?

Back:

Např. když udělám `DELETE /orders/1`
Efekt (stav) = objednávka neexistuje
Výsledek = smazali jsme objednávku

Delete je idempotentní, takže když to udělám znovu:
Efekt = objednávka neexistuje
Výsledek = nic jsme nesmazali

Tzn. **idempotence** je závislá na **efektu** a ne na výsledku.
<!--ID: 1735205749854-->
END

---



START
FIT-Card

Jaké REST metody jsou a nejsou idempotentní podle standardu?

Back:

- GET, PUT, DELETE jsou idempotentní
- POST **není** idempotentní!
<!--ID: 1735205749856-->
END

---


START
FIT-Card

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


START
FIT-Card

Jaké vlastnosti má GET?
- safe/unsafe
- idempotentní/non-idempotentní

Back:

- Je **safe**
- Je **idempotnentní**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125150154.png)
<!-- DetailInfoEnd -->

<!--ID: 1735205749862-->
END

---


START
FIT-Card

Jaké vlastnosti má PUT?

Back:

- Je **not safe**
- Je **idempotent**

Updatuje celý resource.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125150145.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749865-->
END

---


START
FIT-Card

Jaké vlastnosti má PATCH?

Back:


<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125150219.png)
<!-- DetailInfoEnd -->

<!--ID: 1735205749867-->
END

---


START
FIT-Card

Jaké vlastnosti má POST?

Back:

- Je **not safe**
- Je **not idempotent**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125150314.png)
<!-- DetailInfoEnd -->
<!--ID: 1735205749870-->
END

---


START
FIT-Card

Jaké vlastnosti má DELETE?

Back:

- **not safe**
- **idempotent**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125150340.png)
<!-- DetailInfoEnd -->

<!--ID: 1735205749872-->
END

---


START
FIT-Card

Jaké vlastnosti mají HEAD a OPTIONS?

Back:

- safe
- idempotentní

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125150802.png)
<!-- DetailInfoEnd -->

<!--ID: 1735205749875-->
END

---

### Status kódy


START
FIT-Card

Jaké jsou třídy status kódů?

Back:

- `1xx` - něco se stalo, ale ne v aplikaci, moc se nevyužívá
- `2xx` - je to správně, nenastala chyba
- `3xx` - redirection
- `4xx` - chyba na straně klienta
- `5xx` - chyba na straně serveru

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020241125151055.png)
![](../../Assets/Pasted%20image%2020241125151104.png)

<!-- DetailInfoEnd -->
<!--ID: 1735205749877-->
END

---

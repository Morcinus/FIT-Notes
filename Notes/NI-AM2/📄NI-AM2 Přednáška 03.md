---
created: 2025-03-04T08:49:56
title: "Browser Networking"
up: "[[📖NI-AM2]]"
---
TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska03 status-toReview


START
FIT-Card

Jakými mechanismy je zajištěna network security? (4)

Back:

- **Connection limits** - ochraňuje klienta i server proti přetížení
- **Request formatting and response processing** - vynucení správně zformátovaných zpráv, ochrana uživatele proti malicious serverům
- **TLS negotiation** - TLS handshake a kontrola certifikátů
- **Same-origin policy** - omezení odkud se mohou posílat requesty
<!--ID: 1746518365789-->
END

---


START
FIT-Card

Co jsou mashup aplikace?

Back:

Aplikace, co získávají data z více zdrojů
<!--ID: 1746518365791-->
END

---


START
FIT-Card

Jaké jsou **3 typy mashup** aplikací?

Back:

- **Data mashup** - agreguje data z více APIs (read only)
- **Service mashup** - více sofisitkovaný workflow (read and write)
- **Visualization** - zobrazuje data, např. Google mapy
<!--ID: 1746518365794-->
END

---


START
FIT-Card

Jaké jsou 2 typy mashups z hlediska client server?

Back:

- **client-side mashup** - je na klientovi
- **server-side mashup** - je na serveru
<!--ID: 1746518365796-->
END

---

### XHR


START
FIT-Card

Čeho je zkratka XHR?

Back:

XMLHttpRequest
<!--ID: 1746518365800-->
END

---


START
FIT-Card

Používá se v dnešní době XHR?

Back:

Ne. Ale ve starších aplikacích se to furt může vyskytovat.
<!--ID: 1746518365802-->
END

---


START
FIT-Card

Jak se typicky používá XHR?

Back:

1. Prohlížeč načte stránku s JS scriptem
2. Uživatel klikne na HTML element, který triggerne JS funkci
3. Funkce zavolá service skrze XHR
4. Funkce dostane data a modifikuje HTML (DOM)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304091521.png)
<!-- ImageEnd -->
<!--ID: 1746518365808-->
END

---


START
FIT-Card

Jaké jsou metody v XHR? (5)

Back:

- `open` - vytvoří request s parametry:
	- `method` (GET,PUT)
	- `url` - url zdroje
	- `asynch` - true aby to bylo asynchronní
	- `user, pass` - credentials
- `onReadyStateChange`
- `send, abort` - pošle nebo zruší request
- `status, statusTest` - získá status requestu
- `responseText, responseXML` - response jako text nebo XML
<!--ID: 1746518365813-->
END

---

### Fetch API

START
FIT-Card

Jaký je rozdíl mezi XHR a Fetch API?

Back:

- XHR je založeno na callback funkcích
- Fetch je založen na Promise objektech
<!--ID: 1746518365816-->
END

---


START
FIT-Card

Jaké jsou **3 základní rozhraní** v Fetch API?

Back:

- **Request** - reprezentuje požadavek
- **Response** - reprezentuje odpověď
- **Headers** - reprezentuje request/response headers

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250304091906.png)
![](../../Assets/Pasted%20image%2020250304091949.png)
<!-- ExampleEnd -->
<!--ID: 1746518365819-->
END

---


START
FIT-Card

Lze pomocí XHR používat stream dat?

Back:

Ne. Streamy dat jsou možné pouze v Fetch API.

Např. načítání velkých souborů
<!--ID: 1746518365822-->
END

---

### Bezpečnostní mechanismy

START
FIT-Card

Čemu zabraňuje **Same Origin policy**?

Back:

1. Klient načte HTML stránku s JavaScriptem z nějakého serveru
2. Same origin policy zabraňuje tomu, aby tento script mohl dělat requesty na jiný server (jiný origin)

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304092636.png)
<!-- ImageEnd -->
<!--ID: 1746518365825-->
END

---


START
FIT-Card

U jakých requestů se používá Same Origin policy?

Back:

U requestů, které dělá JavaScript se používá tato policy.

U requestů, které se přímo dělají z HTML bez JavaScript kódu (např. když mám image element) se to nepoužívá, protože tento request je read only a nemůže nic měnit. 

Např. když si HTML stránka načte obrázek z jiného serveru (GET), tak se na to neaplikuje policy, protože tam nemůžu nic měnit.
<!--ID: 1746518365827-->
END

---


START
FIT-Card

Jaké jsou 2 způsoby obejití Same Origin Policy?

Back:

- **Cross-origin Resource Sharing Protocol** (CORS) - preferovaný způsob
	- Můžu na serveru povolit, z jakých dalších originů se mohou klienti dotazovat na můj server
- **JSON a JSONP** (Get only)
<!--ID: 1746518365830-->
END

---


START
FIT-Card

Proč je potřeba Same Origin Policy? Popiš problém/útok, který by jinak mohl nastat. 

Back:

1. **Mallory** pošle **Alice** odkaz na stránku greatsite.com
2. **Alice** by si stránku stáhla a použávala by ji
3. Stránka by mezitím v pozadí poslala request na jinou stránku, kde by např. manipulovala s bank accountem.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304093755.png)
<!-- ImageEnd -->
<!--ID: 1746518365832-->
END

---


START
FIT-Card

Co je CSRF? Jak funguje?

Back:

Cross-Site Request forgery:
1. Mallory pošle link na stránku Alici. V HTML stránce je např. místo odkazu na obrázek odkaz na jinou stránku (viz obrázek)
2. **Alice si načte stránku a tím se zavolá request na jinou** (např. na banku)

Toto assumuje následující:
- Banka by pro změny používala GET requesty - toto se samozřejmě nesmí dělat
- Mallory nezjistí, že se request vykonal

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304094505.png)
<!-- ImageEnd -->
<!--ID: 1746518365835-->
END

---


START
FIT-Card

Jak funguje XSS?

Back:

Cross-Site scripting
1. Mallory pošle alice stránku, která má v sobě škodlivý kód
2. Alice si načte stránku, ovšem ta stránka je z jednoho originu, takže na ten škodlivý script se neaplikuje Same Origin Policy
3. Script pak může na daném serveru dělat requesty, aniž by to Alice věděla

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304094832.png)
<!-- ImageEnd -->
<!--ID: 1746518365838-->
END

---


START
FIT-Card

Kdy např. prakticky může nastat Cross-Site Scripting attack?

Back:

Když máme forum, kde můžou uživatelé vkládat komentáře a nemám tam filtr, který by zamezil vkládání kódu, tak tam pak někdo může vložit kód, který se bude spouštět.

Když se pak uživatel dostane na daný příspěvek, tak se mu spustí script.

Např. toto fungovalo v roce 2010 na Twitteru
<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304095038.png)
<!-- ImageEnd -->
<!--ID: 1746518365840-->
END

---

### CORS

START
FIT-Card

Co je obecně **CORS**?

Back:

Je to protokol, který je rozšířením HTTP protokolu. 
<!--ID: 1746518365843-->
END

---


START
FIT-Card

Popiš, jak funguje **GET s CORS** protokolem.

Back:

1. Zavolám GET na web server a dostanu HTML stránku
2. Stránka provede request na jiný server
	- Přidá header `Origin`, který identifikuje původní origin
3. Server ověří, jestli origin klienta (v headeru) má přístup k danému zdroji a odpoví
	- V headeru odpovědi je `Access-Control-Allow-Origin`, který definuje, kdo může přistupovat na daný zdroj 
4. Až browser potom rozhodne, jeslti výsledek předá JavaScriptu, podle toho, jestli tam má přístup.

Tzn. Request se **každopádně provede**, jen Browser rozhoduje, jestli uživateli zobrazí data. (Pozn. řešíme zatím jen GET)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250304095334.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365847-->
END

---


START
FIT-Card

Jakou hodnotu může mít `Access-Control-Allow-Origin`?

Back:

Buď
- adresa povoleného originu (např. `http.//prague.example.org`)
- nebo `*`, což je wildcard a může tam kdokoliv
<!--ID: 1746518365850-->
END

---


START
FIT-Card

Popiš, jak funguje **CORS s unsafe metodama** (např. POST).

Back:

1. Před posláním requestu prohlížeč provede **preflight request** pomocí `OPTIONS` metody.
2. V odpovědi server pošle `Access-Control-Allow-Origin`
3. Browser pak ví, jestli může poslat daný POST request. Pokud může, pošle ho.

Analogicky pro PUT a DELETE

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304100301.png)
<!-- ImageEnd -->
<!--ID: 1746518365853-->
END

---

### JSON a JSONP


START
FIT-Card

Co je JSONP?

Back:

Řeší stejný problém jako CORS.

Abych mohl pracovat s JSONem, musím ho nahrát do paměti.

1. Máme adresu a přistoupíme k ní pomocí GET a do parametrů dáme callback
2. Když dostaneme odpověď, nevrátí se nám JSON, ale volání té funkce s danými daty (viz obrázek).

Díky tomu mi zdroj nevrátí JSON data, ale rovnou volání funkce s danými parametry. 

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250304101202.png)
![](../../Assets/Pasted%20image%2020250304101220.png)
<!-- ImageEnd -->
<!--ID: 1746518365856-->
END

---


START
FIT-Card

Používá se JSONP?

Back:

V dnešní době už moc ne.
<!--ID: 1746518365859-->
END

---

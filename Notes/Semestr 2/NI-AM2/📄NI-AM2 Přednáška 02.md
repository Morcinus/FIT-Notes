---
created: 2025-02-28T12:56:16
title: "Asynchronní IO"
up: "[[📖NI-AM2]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM2 prednaska02 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Jaký je rozdíl mezi IO bound a CPU bound úlohama?

Back:

- **IO bound** - závisí na počtu IO operací, jsou omezeny časem
- **CPU bound** - závisí na počtu/výkonu procesorů
<!--ID: 1746519622602-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakým způsobem lze realizovat concurrency?

Back:

Pomocí více vláken - **multithreading**
<!--ID: 1746519622614-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **preemtive multitasking**?

Back:

OS přepíná vlákna na procesoru
<!--ID: 1746519622617-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **cooperative multitasking**?

Back:

Když úloha běží na procesoru, úloha si sama určí, kdy se vzdá procesoru. Tzn. sama si rozhodne, kdy skončí.

Je to jakoby o úroveň výš, než ten preemtive multitasking.
<!--ID: 1746519622620-->

END

---

### Asynchronní IO

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší asynchronní IO oproti multithreadingu?

Back:

U asynchronního IO máme jen _jedno vlákno_.
<!--ID: 1746519622623-->

END

---

### Asynchronní IO v Javascriptu

START
FIT-Card

(FIT-Notes flashcard)

Jak se liší Web 2.0 aplikace od normální webové aplikace?

Back:

Tyto aplikace umožňují spouštět AJAX (asynchronní javascript). Dynamicky se můžou spouštět javascript scripty a přerenderovávat části DOMu. Nemusí se přerenderovávat celá stránka.

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250303153106.png)

<!-- ImageEnd -->
<!--ID: 1746519622626-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké 2 API poskytuje prohlížeč pro AJAX?

Back:

Pro asynchronní calls na server se používají:

- **XHR** - starý, ale pořád jde používat
- **FetchAPI** - používá se běžně
<!--ID: 1746519622629-->

END

---

### JavaScript Runtime

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 3 základní komponenty JavaScript Runtime?

Back:

- **Call Stack** - zásobník s frames (funkční parametry, lokální variables)
- **Heap** - halda s objekty
- **MessageQueue** - list zpráv, co se mají zprocesovat - Zpráva jsou data a funkce, co se má nad těmi daty zavolat
<!--ID: 1746519622632-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je frame v Stacku v JS runtimu?

Back:

Frame je **execution context**

Frame je věc, co se ukládá na stack a obsahuje:

- lokální proměnný
- argumenty funkce
- - reference na další funkce

<!-- ExplanationStart -->

Celý program se dá představit jako strom volání funkcí. Stackem se prohledává tento strom do hloubky.

![](../../../Assets/Pasted%20image%2020250303154555.png)

<!-- ExplanationEnd -->
<!--ID: 1746519622635-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Čemu odpovídá vrchol stromu Stacku v JS runtimu?
![](../../../Assets/Pasted%20image%2020250303154555.png)

Back:

Vrchol je **callback funkce**.

Např. zavoláme IO funkci, která má po dokončení zavolat moji funkci. Tzn. té IO funkci předám ukazatel na vrchol v tom mém zásobníku (callback) a ona to pak zavolá s výstupama z té IO operace.
<!--ID: 1746519622638-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje Event Loop v JavaScriptu?

Back:

1. Z fronty vybere message
   - **Message** = (vstupní) data + callback
2. Zavolá danou funkci s danými vstupními daty

![](../../../Assets/Pasted%20image%2020250303154852.png)
<!--ID: 1746519622641-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co se stane když budu v kódu dlouho něco počítat (ve vztahu k Event Loopu)? Jak to vyřešit?
![](../../../Assets/Pasted%20image%2020250303154852.png)

Back:

Bude to blokovat další messages ve frontě.

Co s tím:
Proto je potřeba pro dlouhé počítání používat workery.
<!--ID: 1746519622644-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Popiš jak funguje volání funkce pomocí AJAXu na klientovi:
![](../../../Assets/Pasted%20image%2020250303155248.png)

Back:

1. Kliknu na **tlačítko**
2. Vytvořím **callback** a ten se předá **BrowserAPI** (FetchApi/XHR) funkci
3. Request se zařadí to **page request queue**
4. **Browser Socket Manager** až je volné TCP spojení, tak vytáhne z queue request a vykoná ho
5. Až **Browser Socket Manager** dostane odpověď, vytvoří v **Message queue** message (data, callback)
6. **Event Loop** potom vezme message z fronty a spustí kód s daty
<!--ID: 1746519622647-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kolik runtimů má spuštěný prohlížeč? (3 kategorie)

Back:

Může jich mít hodně.

- Každá **záložka** má vlastní JavaScript runtime.
- Každý **web worker** má vlastní rutime
- Každý **iframe** má vlastní runtime
<!--ID: 1746519622650-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Pomocí čeho spolu mohou komunikovat JS runtimy?

Back:

Pomocí `postMessage`

![](../../../Assets/Pasted%20image%2020250303155843.png)
<!--ID: 1746519622653-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují web workers?

Back:

Když mám úlohu, co vím, že mi zabere hodně času, tak vytvořím workera, který má vlastní JS runtime a běží nezávisle na té mojí aplikaci.

Díky tomu, že má každý worker vlastní runtime, může běžet každý worker v jiném vlákně, díky čemuž to neblokuje aplikaci

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250303155935.png)

<!-- DetailInfoEnd -->
<!--ID: 1746519622655-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké fáze má Event Loop v NodeJS?

Back:

1. **timers**
2. **IO callbacks**
3. **idle/prepare**
4. **poll**
5. **check**
6. **close callbacks**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250303160224.png)

<!-- DetailInfoEnd -->
<!--ID: 1746519622658-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co znamenají jednotlivé fáze Event Loopu v NodeJS?

1. **timers**
2. **IO callbacks**
3. **idle/prepare**
4. **poll**
5. **check**
6. **close callbacks**

Back:

1. **timers** - vykonají se `setTimeout` a `setInterval` funkce
2. **IO callbacks** - vykonají se callbacky předané IO funkcím
3. **idle/prepare** - používá se interně
4. **poll** - zkontroluje, jestli nejsou nové události na vstupu/výstupu
5. **check** - vykoná `setImmediate()` callbacky
6. **close callbacks** - vykoná callbacky, které uzavírají objekty (např. sockety)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250303160224.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250303160904.png)

<!-- ExampleEnd -->
<!--ID: 1746519622661-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Google Apps Script**?

Back:

Umožňuje mi spouštět javascript co automatizuje tasky v Google aplikacích. Například v **Google Spreadsheets**.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250303160937.png)

<!-- DetailInfoEnd -->
<!--ID: 1746519622664-->

END

---

### JavaScript Overview

START
FIT-Card

(FIT-Notes flashcard)

Jaký je rozdíl mezi callback a asynchronním IO?

Back:

Těm IO funkcím předávám callback
<!--ID: 1746519622667-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují Closures v javascriptu?

Back:

Funkce, která referencuje proměnné mimo její tělo

![](../../../Assets/Pasted%20image%2020250303162428.png)
<!--ID: 1746519622670-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje `this` v JS?

Back:

This mi odkazuje na daný objekt. Pozor, je to trošku neintuitivní:
![](../../../Assets/Pasted%20image%2020250303162645.png)
<!--ID: 1746519622673-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak fungují arrow funkce?

Back:

Umožňují mi přistupovat k `this` jednoduššeji:
![](../../../Assets/Pasted%20image%2020250303162701.png)
<!--ID: 1746519622675-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je callback hell? Jak ho vyřešit?

Back:

Jsou to zanořené callbacky.

Jak to vyřešit:

- Používat **Promise** nebo **async/await**

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250303162800.png)

<!-- DetailInfoEnd -->
<!--ID: 1746519622678-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je Promise Object?

Back:

Budoucí hodnota, která může skočit úspěchem nebo neúspěchem

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250303162936.png)

<!-- ImageEnd -->
<!--ID: 1746519622681-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje **async/await**?

Back:

- **async** - říká, že funkce vždy vrací promise
- **await** - říká, že se počká, až se promise zpracuje
  - Logicky to čeká, ale v pozadí to neblokuje ten runtime a probíhá to v pozadí asynchronně (i když to vypadá jako synchronní kód)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250303163011.png)

<!-- DetailInfoEnd -->
<!--ID: 1746519622684-->

END

---

## Browser networking

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou části browser networkingu?

Back:

- XHR a FetchAPI jsou v té horní červené vrstvě

![](../../../Assets/Pasted%20image%2020250303163920.png)

- Same origin policy - CORS
<!--ID: 1746519622686-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **socket management**?

Back:

Máme **Socket Manager**, který bere requesty z request queue

![](../../../Assets/Pasted%20image%2020250303164342.png)
<!--ID: 1746519622689-->

END

---

---
created: 2025-02-28T12:56:16
title: "Asynchronní IO"
up: "[[📖NI-AM2]]"
---
TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska02 status-toReview


START
FIT-Card

Jaký je rozdíl mezi IO bound a CPU bound úlohama?

Back:

- **IO bound** - závisí na počtu IO operací, jsou omezeny časem
- **CPU bound** - závisí na počtu/výkonu procesorů
<!--ID: 1746518365872-->
END

---


START
FIT-Card

Jakými způsoby lze realizovat concurrency?

Back:

Pomocí více vláken - multithreading
<!--ID: 1746518365875-->
END

---


START
FIT-Card

Co je **preemtive multitasking**?

Back:

OS přepíná vlákna na procesoru
<!--ID: 1746518365878-->
END

---


START
FIT-Card

Co je **cooperative multitasking**?

Back:

Když úloha běží na procesoru, úloha si sama určí, kdy se vzdá procesoru. Tzn. sama si rozhodne, kdy skončí.

Je to jakoby o úroveň výš, než ten preemtive multitasking.
<!--ID: 1746518365881-->
END

---

### Asynchronní IO


START
FIT-Card

Jak se liší asynchronní IO oproti multithreadingu?

Back:

U asynchronního IO máme jen _jedno vlákno_.
<!--ID: 1746518365884-->
END

---

### Asynchronní IO v Javascriptu


START
FIT-Card

Jak se liší Web 2.0 aplikace od normální webové aplikace?

Back:

Tyto aplikace umožňují spouštět AJAX (asynchronní javascript). Dynamicky se můžou spouštět javascript scripty a přerenderovávat části DOMu. Nemusí se přerenderovávat celá stránka.

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250303153106.png)
<!-- ImageEnd -->
<!--ID: 1746518365887-->
END

---


START
FIT-Card

Jaké 2 API poskytuje prohlížeč pro AJAX?

Back:

Pro asynchronní calls na server se používají:
- **XHR** - starý, ale pořád jde používat
- **FetchAPI** - používá se běžně
<!--ID: 1746518365890-->
END

---

### JavaScript Runtime
START
FIT-Card

Jaké jsou 3 základní komponenty JavaScript Runtime?

Back:

- **Stack** - zásobník s frames (funkční parametry, lokální variables)
- **Heap** - halda s objekty
- **Queue** - list zpráv, co se mají zprocesovat
	- Zpráva jsou data a funkce, co se má nad těmi daty zavolat
<!--ID: 1746518365892-->
END

---


START
FIT-Card

Co je frame v Stacku v JS runtimu?

Back:

Frame je **execution context**

Frame je věc, co se ukládá na stack a obsahuje:
- lokální proměnný
- argumenty funkce
- + reference na další funkce

<!-- ExplanationStart -->
Celý program se dá představit jako strom volání funkcí. Stackem se prohledává tento strom do hloubky.

![](../../Assets/Pasted%20image%2020250303154555.png)
<!-- ExplanationEnd -->
<!--ID: 1746518365895-->
END

---


START
FIT-Card

Čemu odpovídá vrchol stromu Stacku v JS runtimu?
![](../../Assets/Pasted%20image%2020250303154555.png)

Back:

Vrchol je **callback funkce**.

Např. zavoláme IO funkci, která má po dokončení zavolat moji funkci. Tzn. té IO funkci předám ukazatel na vrchol v tom mém zásobníku (callback) a ona to pak zavolá s výstupama z té IO operace.  
<!--ID: 1746518365898-->
END

---


START
FIT-Card

Jak funguje Event Loop v JavaScriptu?

Back:

1) Z fronty vybere message
	- **Message** = (vstupní) data + callback
2) Zavolá danou funkci s danými vstupními daty

![](../../Assets/Pasted%20image%2020250303154852.png)
<!--ID: 1746518365901-->
END

---


START
FIT-Card

Co se stane když budu v kódu dlouho něco počítat (ve vztahu k Event Loopu)? Jak to vyřešit?
![](../../Assets/Pasted%20image%2020250303154852.png)

Back:

Bude to blokovat další messages ve frontě.

Co s tím:
Proto je potřeba pro dlouhé počítání používat workery. 
<!--ID: 1746518365904-->
END

---


START
FIT-Card

Popiš jak funguje volání funkce pomocí AJAXu na klientovi:
![](../../Assets/Pasted%20image%2020250303155248.png)

Back:

1. Kliknu na **tlačítko**
2. Vytvořím **callback** a ten se předá **BrowserAPI** (FetchApi/XHR) funkci
3. Request se zařadí to **page request queue**
4. **Browser Socket Manager** až je volné TCP spojení, tak vytáhne z queue request a vykoná ho
5. Až **Browser Socket Manager** dostane odpověď, vytvoří v **Message queue** message (data, callback)
6. **Event Loop** potom vezme message z fronty a spustí kód s daty
<!--ID: 1746518365906-->
END

---


START
FIT-Card

Kolik runtimů má spuštěný prohlížeč?

Back:

Může jich mít hodně. 

- Každá **záložka** má vlastní JavaScript runtime.
- Každý **web worker** má vlastní rutime
- Každý **iframe** má vlastní runtime
<!--ID: 1746518365909-->
END

---


START
FIT-Card

Pomocí čeho spolu mohou komunikovat JS runtimy?

Back:

Pomocí `postMessage`

![](../../Assets/Pasted%20image%2020250303155843.png)
<!--ID: 1746518365912-->
END

---


START
FIT-Card

Jak fungují web workers?

Back:

Když mám úlohu, co vím, že mi zabere hodně času, tak vytvořím workera, který má vlastní JS runtime a běží nezávisle na té mojí aplikaci.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250303155935.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365914-->
END

---


START
FIT-Card

Jaké fáze má Event Loop v NodeJS?

Back:

1. **timers**
2. **IO callbacks**
3. **idle/prepare**
4. **poll**
5. **check**
6. **close callbacks**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250303160224.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365917-->
END

---


START
FIT-Card

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
![](../../Assets/Pasted%20image%2020250303160224.png)
<!-- DetailInfoEnd -->

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250303160904.png)
<!-- ExampleEnd -->
<!--ID: 1746518365920-->
END

---


START
FIT-Card

Co je **Google Apps Script**?

Back:

Umožňuje mi spouštět javascript co automatizuje tasky v Google aplikacích. Například v **Google Spreadsheets**.

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250303160937.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365922-->
END

---

### JavaScript Overview

START
FIT-Card

Jaký je rozdíl mezi callback a asynchronním IO?

Back:

Těm IO funkcím předávám callback
<!--ID: 1746518365925-->
END

---


START
FIT-Card

Jak fungují Closures v javascriptu?

Back:

Funkce, která referencuje proměnné mimo její tělo

![](../../Assets/Pasted%20image%2020250303162428.png)
<!--ID: 1746518365927-->
END

---


START
FIT-Card

Jak funguje `this` v JS? 

Back:

This mi odkazuje na daný objekt. Pozor, je to trošku neintuitivní:
![](../../Assets/Pasted%20image%2020250303162645.png)
<!--ID: 1746518365930-->
END

---


START
FIT-Card

Jak fungují arrow funkce?

Back:

Umožňují mi přistupovat k `this` jednoduššeji:
![](../../Assets/Pasted%20image%2020250303162701.png)
<!--ID: 1746518365933-->
END

---


START
FIT-Card

Co je callback hell? Jak ho vyřešit?

Back:

Jsou to zanořené callbacky.

Jak to vyřešit:
- Používat **Promise** nebo **async/await**

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250303162800.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365936-->
END

---


START
FIT-Card

Co je Promise Object?

Back:

Budoucí hodnota, která může skočit úspěchem nebo neúspěchem

<!-- ImageStart -->
![](../../Assets/Pasted%20image%2020250303162936.png)
<!-- ImageEnd -->
<!--ID: 1746518365938-->
END

---


START
FIT-Card

Jak funguje **async/await**?

Back:

- **async** - říká, že funkce vždy vrací promise
- **await** - říká, že se počká, až se promise zpracuje
	- Logicky to čeká, ale v pozadí to neblokuje ten runtime a probíhá to v pozadí asynchronně (i když to vypadá jako synchronní kód)

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250303163011.png)
<!-- DetailInfoEnd -->
<!--ID: 1746518365941-->
END

---

## Browser networking


START
FIT-Card

Jaké jsou části browser networkingu? 

Back:

- XHR a FetchAPI jsou v té horní červené vrstvě

![](../../Assets/Pasted%20image%2020250303163920.png)

- Same origin policy - CORS
<!--ID: 1746518365943-->
END

---


START
FIT-Card

Co je **socket management**?

Back:

Máme **Socket Manager**, který bere requesty z request queue

![](../../Assets/Pasted%20image%2020250303164342.png)
<!--ID: 1746518365946-->
END

---


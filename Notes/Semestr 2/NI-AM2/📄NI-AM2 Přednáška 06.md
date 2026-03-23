---
created: 2025-03-27T09:36:09
title: "Realtime web"
up: "[[📖NI-AM2]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM2 prednaska06 status-toReview

### Streaming a Long-polling

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou základní 4 protokoly pro komunikaci přes síť?

Back:

- **XMLHttpRequest** (XHR)
- **Fetch API**
- **Server-Sent Events**
- **WebSocket**

![](../../../Assets/Pasted%20image%2020250318144234.png)
<!--ID: 1746520169086-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Proč nemůže server normálně začínat komunikaci s klientem přes HTTP?

Back:

Protože HTTP je **request-response protokol**, takže "response" na klienta nemůže být poslána bez requestu.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122401.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169088-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **pushing** a **polling** při komunikaci client-server a jak se liší?

Back:

**Polling** - klient pravidelně checkuje, jestli na serveru nejsou nová data
**Pushing** - otevře se client-server spojení a server pošle data

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250318122306.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122310.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169091-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou 2 typy **pushingu** při komunikaci client-server?

Back:

- **long polling** - client pošle request, server podrží spojení otevřený, dokud nemá aktuální data, pak mu odpoví
- **streaming** - otevře se spojení mezi clientem a serverem, server průběžně posílá nová data
<!--ID: 1746882141302-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje HTTP streaming?

Back:

1. Client pošle request, čímž otevře komunikaci
2. Server průběžně posílá data
3. Server pak zavře connection

Takhle se např. streamují videa.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122429.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169094-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je Chunked Response? Jak funguje jejich posílání?

Back:

Response v průběhu streamingu je rozsekaná do chunků.

- Každý chunk začíná hexadecimální hodnotou jeho délky
- Pro ukončení spojení se použije hexadecimální hodnota `0`
- header `Transfer-Encoding: chunked`

**Jak to funguje**:

1. Server pošle HTTP headers a první chunk
2. Server posílá další chunky
3. Server ukončí spojení

![](../../../Assets/Pasted%20image%2020250318122449.png)
<!--ID: 1746520169096-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je rozdíl mezi Chunks a Events?

Back:

**Chunks** jsou prostě rozsekaná ta zpráva
**Events** jsou nějaký události/zprávy v systému

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122525.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169099-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je Client Buffering?

Back:

Klient (browser/appka) si ukládá všechny chunky, než to zobrazí klientovi.

Např. appka si počká, než má aspoň část dat a pak je teprve zobrazí uživateli.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122555.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169102-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je XHR Polling?

Back:

Klient v intervalu checkuje, jestli není update dat na serveru.

Je to prostě polling, kde se ty requesty posílají pomocí XHR. Nic spešl na tom není.

```javascript
function checkUpdates(url) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", url);
	xhr.onload = function() { ... };
	xhr.send()
}

setInterval(function() { checkUpdates("/updates", 60000) })
```

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122609.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169104-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je XHR Long Polling?

Back:

Je to jako XHR polling, ale server vždy chvíli podrží request na serveru. Pokud se data na serveru změní, okamžitě se pošlou klientovi. Pokud se za tu dobu držení requestu nic nezmění, tak se po vypršení času requestu pošle prázdná odpověď.

![](../../../Assets/Pasted%20image%2020250318122622.png)
<!--ID: 1746520169107-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co jsou **Server-Sent Events** (SSE)?

Back:

Něco jako web socket, akorát že probíhá čistě směrem ze serveru ke klientovi:

1. Klient otevře event stream pomocí `let src = new EventSource(url)`
2. Pak si typicky udělá listeners např.
   - `src.addEventListener("message", function(e) {...})`
3. Server posílá data v `text/event-stream` formátu (viz další kartičky)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327093759.png)

<!-- DetailInfoEnd -->

<!-- ExampleStart -->

![](../../../Assets/Pasted%20image%2020250327093806.png)

<!-- ExampleEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327093916.png)
![](../../../Assets/Pasted%20image%2020250327093921.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169110-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

V jakém formátu musí být Event Stream a jeho `content-type` u SSE?

Back:

`content-type` je `text/event-stream`

- Každý řádek musí začínat `data: [OBSAH]`
- Poslední data mají na konci řádku `\n\n`
- (optional) před každou message (sérií dat) může být `id: [ID ZPRÁVY]`

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327093843.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169113-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak u SSE funguje auto-reconnect?

Back:

Když se z nějakého důvodu zruší connection, `EventSource` ji automaticky obnoví:

1. Pošle serveru GET request s `Last-Event-ID` headerem s idčkem poslední message
2. Server začne znovu posílat od dané message

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327093901.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169115-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Streams API**?

Back:

API v Javascriptu, které umožňuje pracovat s HTTP streamama. Je k dispozici např. jako součást Fetch API - response je objekt `ReadableStream`.

Výhoda je, že umožňuje rovnou zpracovávat stream, aniž by se muselo čekat na celou resource.

![](../../../Assets/Pasted%20image%2020250327093935.png)
<!--ID: 1746520169118-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je Cross-document messaging?

Back:

Máme iframe, který furt načítá data v pozadí. Když data jsou celá načtená, pošlou se rodičovské stránce. To se používalo dřív, když nebyly k dispozici technologie co teď máme.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327093948.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169121-->

END

---

### WebSocket

START
FIT-Card

(FIT-Notes flashcard)

Co je **WebSocket**?

Back:

Protokol pro obousměrnou komunikaci mezi clientem a serverem.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327094003.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169123-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak u **WebSocketu** funguje connection upgrade **request**? Jaké má headers?

Back:

Klient pošle serveru HTTP požadavek o upgradnutí spojení na WebSocket:

- `Connection: Upgrade` - že chce upgradnout connection
- `Upgrade: websocket` - že chce upgradnout na websocket
- `Sec-WebSocket-Key` - klíč klienta pro validaci
- `Sec-WebSocket-Origin` - origin requestu
- `Sec-WebSocket-Protocol` - seznam sub-protokolů, co klient podporuje

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327094022.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169126-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak u WebSocketu funguje connection upgrade **response**?

Jaký má status?
Jaké má headery? (4)

Back:

Server pošle response se statusem `101 Switching Protocols` s těmito headery:

- `Connection: Upgrade`
- `Upgrade: websocket`
- `Sec-WebSocket-Accept` - klíč, aby dokázal, že dostal klientův klíč
- `Sec-WebSocket-Protocol` - protokol, který server vybral

![](../../../Assets/Pasted%20image%2020250327094035.png)
<!--ID: 1746520169132-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co se děje po tom, co se connection upgradne na websocket?

Back:

Klient i server můžou číst a psát do socketu

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327094149.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169137-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

V čem jsou zabalená data, co se posílají přes web socket?

Back:

V data framech.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327094243.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169140-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Frame ve WebSocketu**? Z čeho se skládá? (2)

Back:

Nejmenší jednotka komunikace ve WebSocketu. Skládá se z **headeru** a **payloadu**

![](../../../Assets/Pasted%20image%2020250327094250.png)
<!--ID: 1746520169143-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Message** ve WebSocketu?

Back:

Sekvence Framů, co dohromady sestavují nějakou zprávu.

Samotná aplikace ví jen o messages. Kompozice a dekompozice framů se dělá na nižší úrovni.

![](../../../Assets/Pasted%20image%2020250327094303.png)
<!--ID: 1746520169145-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Z čeho se skládá Frame ve WebSocketu? (6)

Back:

- `FIN` - informace jeslti je frame ve zprávě poslední
- `opcode` - typ framu (text, binary, ping, pong)
- **Maskovací bit** - jeslti jsou data maskovaný
- **payload length**
- **Maskovací klíč** (pokud je nastavený maskovací bit)
- **payload**

Maskování -

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327094328.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169148-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je maskování v WebSocket protokolu? Proč je důležité?

Back:

Proč je důležité:
Existuje útok cache poisioning, kde útočník upraví data v cache mezi klientem a serverem. Útočník může do TCP spojení, přes které probíhá WebSocket zapsat data ve formátu HTTP requestu/response a nějaká cachovací proxy by to mohla přečíst jako HTTP request (protože neví, že se nutně jedná o websocket).

Proto se ty data payloadu zamaskují, aby tam nešlo do toho zapsat zprávu co vypadá jako HTTP request
<!--ID: 1746889146182-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je Head-of-line blocking? Jaký je problém u WebSocketu?

Back:

U HTTP může nastat, že velký požadavek blokuje ostatní, co čekají ve frontě.

To samé může nastat u websocketu. Když je otevřený WebSocket ve kterém se posílá velká zpráva, musí se počkat, než se celá pošle nemůžou se prokládat framy jiných zpráv.

Proto je dobré neposílat velké messages, ale splitnout data do více malých messages.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327094354.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169151-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak vytvořím WebSocket v browseru?

Back:

Pomocí WebSocket Browser API.

```javascript
let connection = new WebSocket("ws://example.org/chat, "chat");

connection.onmessage = function(e) {
	console.log(e.data)
}

```

![](../../../Assets/Pasted%20image%2020250327094413.png)
<!--ID: 1746520169154-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou problémy s WebSocketem?

Back:

HTTP je dělaný na krátké transfers. Je možný, že některé networky budou WebSocket blokovat nebo hodně limitovat. Proto je potřeba mít ideálně i nějakou fallback metodu, jak přenášet data bez web socketu.

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250327094515.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169157-->

END

---

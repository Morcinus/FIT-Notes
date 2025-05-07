---
created: 2025-03-27T09:36:09
title: "Realtime web"
up: "[[📖NI-AM2]]"
---
TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska06 status-toReview

### Streaming a Long-polling

START
FIT-Card

Jaké jsou základní 4 protokoly pro komunikaci přes síť?

Back:

- XHR
- Fetch API
- Server-Sent Evens
- WebSocket

![](../../Assets/Pasted%20image%2020250318144234.png)
<!--ID: 1746520169086-->
END

---


START
FIT-Card

Proč nemůže server normálně začínat komunikaci s klientem přes HTTP?

Back:

Protože HTTP je **request-response protokol**.
![](../../Assets/Pasted%20image%2020250318122401.png)
<!--ID: 1746520169088-->
END

---


START
FIT-Card

Jaký je rozdíl mezi Pushing a Polling?

Back:

![](../../Assets/Pasted%20image%2020250318122310.png)
![](../../Assets/Pasted%20image%2020250318122306.png)
<!--ID: 1746520169091-->
END

---

START
FIT-Card

Jak funguje HTTP streaming?

Back:

![](../../Assets/Pasted%20image%2020250318122429.png)
<!--ID: 1746520169094-->
END

---



START
FIT-Card

Co je Chunked Response?

Back:

![](../../Assets/Pasted%20image%2020250318122449.png)
<!--ID: 1746520169096-->
END

---


START
FIT-Card

Jaký je rozdíl mezi Chunks a Events?

Back:

![](../../Assets/Pasted%20image%2020250318122525.png)
<!--ID: 1746520169099-->
END

---


START
FIT-Card

Co je Client Buffering?

Back:

![](../../Assets/Pasted%20image%2020250318122555.png)
<!--ID: 1746520169102-->
END

---

START
FIT-Card

Co je XHR Polling?

Back:

![](../../Assets/Pasted%20image%2020250318122609.png)
<!--ID: 1746520169104-->
END

---


START
FIT-Card

Co je XHR Long Polling?

Back:

Je to jako polling, ale server chvíli podrží request na serveru. Pokud se data na serveru změní, okamžitě se pošlou klientovi. Pokud se za tu dobu držení requestu nic nezmění, tak se po vypršení requestu pošle prázdná odpověď.

![](../../Assets/Pasted%20image%2020250318122622.png)
<!--ID: 1746520169107-->
END

---


START
FIT-Card

Co jsou Server-Sent Events (SSE)?

Back:

![](../../Assets/Pasted%20image%2020250327093759.png)

<!-- ExampleStart -->
![](../../Assets/Pasted%20image%2020250327093806.png)
<!-- ExampleEnd -->

<!-- DetailInfoStart -->
![](../../Assets/Pasted%20image%2020250327093916.png)
![](../../Assets/Pasted%20image%2020250327093921.png)
<!-- DetailInfoEnd -->
<!--ID: 1746520169110-->
END

---


START
FIT-Card

V jakém formátu musí být Event Stream u SSE?

Back:

![](../../Assets/Pasted%20image%2020250327093843.png)
<!--ID: 1746520169113-->
END

---


START
FIT-Card

Jak u SSE funguje auto-reconnect?

Back:

![](../../Assets/Pasted%20image%2020250327093901.png)
<!--ID: 1746520169115-->
END

---


START
FIT-Card

Co je Streams API?

Back:

![](../../Assets/Pasted%20image%2020250327093935.png)
<!--ID: 1746520169118-->
END

---


START
FIT-Card

Co je Cross-document messaging?

Back:

![](../../Assets/Pasted%20image%2020250327093948.png)
<!--ID: 1746520169121-->
END

---

### WebSocket


START
FIT-Card

Co je WebSocket?

Back:

![](../../Assets/Pasted%20image%2020250327094003.png)
<!--ID: 1746520169123-->
END

---


START
FIT-Card

Jak u WebSocketu funguje connection upgrade **request**?

Back:

![](../../Assets/Pasted%20image%2020250327094022.png)
<!--ID: 1746520169126-->
END

---


START
FIT-Card

Jak u WebSocketu funguje connection upgrade **response**?

Back:

![](../../Assets/Pasted%20image%2020250327094035.png)
<!--ID: 1746520169132-->
END

---


START
FIT-Card

Co se děje po tom, co se connection upgradne na websocket?

Back:

![](../../Assets/Pasted%20image%2020250327094149.png)
<!--ID: 1746520169137-->
END

---


START
FIT-Card

V čem se posílají data přes web socket?

Back:

V data framech
![](../../Assets/Pasted%20image%2020250327094243.png)
<!--ID: 1746520169140-->
END

---


START
FIT-Card

Co je Frame ve WebSocketu?

Back:

![](../../Assets/Pasted%20image%2020250327094250.png)
<!--ID: 1746520169143-->
END

---


START
FIT-Card

Co je Message ve WebSocketu?

Back:

![](../../Assets/Pasted%20image%2020250327094303.png)
<!--ID: 1746520169145-->
END

---


START
FIT-Card

Co je Frame on-the-wire ve Websocketu?

Back:

![](../../Assets/Pasted%20image%2020250327094328.png)
<!--ID: 1746520169148-->
END

---


START
FIT-Card

Co je Head-of-line blocking?

Back:

![](../../Assets/Pasted%20image%2020250327094354.png)
<!--ID: 1746520169151-->
END

---


START
FIT-Card

Jak vytvořím WebSocket v browseru?

Back:

Pomocí WebSocket Browser API

![](../../Assets/Pasted%20image%2020250327094413.png)
<!--ID: 1746520169154-->
END

---


START
FIT-Card

Jak funguje WebSocket Infrastructure?

Back:

![](../../Assets/Pasted%20image%2020250327094515.png)
<!--ID: 1746520169157-->
END

---

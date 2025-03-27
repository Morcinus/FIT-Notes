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

END

---


START
FIT-Card

Proč nemůže server normálně začínat komunikaci s klientem přes HTTP?

Back:

Protože HTTP je **request-response protokol**.
![](../../Assets/Pasted%20image%2020250318122401.png)

END

---


START
FIT-Card

Jaký je rozdíl mezi Pushing a Polling?

Back:

![](../../Assets/Pasted%20image%2020250318122310.png)
![](../../Assets/Pasted%20image%2020250318122306.png)

END

---

START
FIT-Card

Jak funguje HTTP streaming?

Back:

![](../../Assets/Pasted%20image%2020250318122429.png)


END

---



START
FIT-Card

Co je Chunked Response?

Back:

![](../../Assets/Pasted%20image%2020250318122449.png)

END

---


START
FIT-Card

Jaký je rozdíl mezi Chunks a Events?

Back:

![](../../Assets/Pasted%20image%2020250318122525.png)

END

---


START
FIT-Card

Co je Client Buffering?

Back:

![](../../Assets/Pasted%20image%2020250318122555.png)

END

---

START
FIT-Card

Co je XHR Polling?

Back:

![](../../Assets/Pasted%20image%2020250318122609.png)

END

---


START
FIT-Card

Co je XHR Long Polling?

Back:

![](../../Assets/Pasted%20image%2020250318122622.png)

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


END

---


START
FIT-Card

V jakém formátu musí být Event Stream u SSE?

Back:

![](../../Assets/Pasted%20image%2020250327093843.png)

END

---


START
FIT-Card

Jak u SSE funguje auto-reconnect?

Back:

![](../../Assets/Pasted%20image%2020250327093901.png)

END

---


START
FIT-Card

Co je Streams API?

Back:

![](../../Assets/Pasted%20image%2020250327093935.png)

END

---


START
FIT-Card

Co je Cross-document messaging?

Back:

![](../../Assets/Pasted%20image%2020250327093948.png)

END

---

### WebSocket


START
FIT-Card

Co je WebSocket?

Back:

![](../../Assets/Pasted%20image%2020250327094003.png)

END

---


START
FIT-Card

Jak u WebSocketu funguje connection upgrade **request**?

Back:

![](../../Assets/Pasted%20image%2020250327094022.png)

END

---


START
FIT-Card

Jak u WebSocketu funguje connection upgrade **response**?

Back:

![](../../Assets/Pasted%20image%2020250327094035.png)

END

---


START
FIT-Card

Co se děje po tom, co se connection upgradne na websocket?

Back:

![](../../Assets/Pasted%20image%2020250327094149.png)

END

---


START
FIT-Card

V čem se posílají data přes web socket?

Back:

V data framech
![](../../Assets/Pasted%20image%2020250327094243.png)

END

---


START
FIT-Card

Co je Frame ve WebSocketu?

Back:

![](../../Assets/Pasted%20image%2020250327094250.png)

END

---


START
FIT-Card

Co je Message ve WebSocketu?

Back:

![](../../Assets/Pasted%20image%2020250327094303.png)

END

---


START
FIT-Card

Co je Frame on-the-wire ve Websocketu?

Back:

![](../../Assets/Pasted%20image%2020250327094328.png)

END

---


START
FIT-Card

Co je Head-of-line blocking?

Back:

![](../../Assets/Pasted%20image%2020250327094354.png)

END

---


START
FIT-Card

Jak vytvořím WebSocket v browseru?

Back:

Pomocí WebSocket Browser API

![](../../Assets/Pasted%20image%2020250327094413.png)

END

---


START
FIT-Card

Jak funguje WebSocket Infrastructure?

Back:

![](../../Assets/Pasted%20image%2020250327094515.png)

END

---

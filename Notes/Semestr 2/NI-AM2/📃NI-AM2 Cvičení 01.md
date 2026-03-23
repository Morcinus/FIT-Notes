---
created: 2025-02-17T13:16:23
up: "[[📖NI-AM2]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM2 prednaska01 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Kolik vláken má NodeJS?

Back:

Má **jedno** vlákno.

<!-- DetailInfoStart -->

- Web server technology, very efficient and fast!
- Event-driven I/O framework, based on JavaScript V8 engine
- Only one worker thread
- Every I/O as an event
  - reading and writing from/to files
  - reading and writing from/to sockets

Vlákno postupně odbavuje následující události.
![](../../../Assets/Pasted%20image%2020250217131728.png)

<!-- DetailInfoEnd -->
<!--ID: 1746518887477-->

END

---

### Věci ze cvika

- `fs.stat` - můžeme zjistit status nějakého file system zdroje (file nebo directory)

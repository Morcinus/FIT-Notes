---
created: 2025-02-17T10:17:03
title: "Asynchronous IO"
up: "[[📖NI-AM2]]"
---

TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska02 status-toReview


START
FIT-Card

Co je aplikační server (vs web server vs http server)?

Back:

Aplikační server je obecně modulární prostředí, kde se dá spustit např. web server/http server.

END

---


START
FIT-Card

Jaké jsou 2 základní modely komunikace?

Back:

- **Blocking I/O** =synchronní I/O
- **Non-blocking I/O** =asynchronní I/O

END

---


START
FIT-Card

Co je **inbound** a **outbound** komunikace?

Back:

Máme nějakou aplikaci, která někam přistupuje (file system, externí služba, databáze).

- **Inbound komunikace** - příchozí do aplikace, každý požadavek je obsluhován jedním vláknem z _předvytvořeného poolu_ vláken
- **Outbound komunikace** - mezi aplikací a externí službou/db/file systémem

<!-- ExplanationStart -->
Reálně to, co zabírá nejvíce času je ta outbound komunikace (ta inbound je dost rychlá na zpracování).

Dělá se to tak, že když chci vytvořit outbound komunikaci, tak udělám callback funkci, kterou mi pak systém zavolá, jakmile jsou k dispozici výsledky. Díky tomu celý proces urychlím.
<!-- ExplanationEnd -->

END

---


START
FIT-Card

Co je concurrency?

Back:

To, že můžu řešit několik tasků najednou.

Pozor, neznamená to nutně, že bych dělal paralelismus.

END

---


START
FIT-Card

Jaký je rozdíl mezi multiprocessingem a multithreadingem?

Back:

- **Multiprocessing** - použiju více CPUs na řešení různých procesů
	- Vhodné pro CPU-bound tasky
- **Multithreading** - aplikace (proces) mi spuští více vláken
	- Vhodné pro IO bound tasky
	- Díky tomu dosáhnu concurrency

END

---

START
FIT-Card

Co je CPU-bound task?

Back:

Čas zpracování úlohy hodně závisí na množství/výkonu CPUs, které mám.

END

---


START
FIT-Card

Co jsou IO bound úlohy?

Back:

Ty, kde čas zpracování úlohy závisí na tom, jak dlouho trvá IO operace.

Na webu typicky řešíme IO bound úlohy.

END

---


START
FIT-Card

Jaký je vztah CPU bound/IO bound úloh a multiprocessingu/multithreadingu? (Jaký model je vhodný pro jaký typ úlohy?)

Back:

- **Multiprocessing** je vhodný pro CPU bound
- **Multithreading** je vhodný pro IO bound

END

---

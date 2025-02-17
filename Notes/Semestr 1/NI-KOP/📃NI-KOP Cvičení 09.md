---
created: 2024-11-26T16:26:59
up: "[[📖NI-KOP]]"
---

TARGET DECK: NI-KOP
FILE TAGS: NI-KOP cviceni10 status-toReview

Počet opakování 500x
Délka ekvilibria 100 (`-n`)
Zastavení po 1000 krocích (`-b`)
čas prostě ee inicializovat časem generátor

Počítáme:
- Kolikrát se povedlo splnit z 500
- Ze splněnejch kolik je průměrný počet kroků

| a/T     | 1        | 5         | 10        | 20        | 50        | 100        |
| ------- | -------- | --------- | --------- | --------- | --------- | ---------- |
| 0,6     | 421/363  | 419/633   | 425/761   | 409/890   | 417/1092  | 427/1213   |
| 0,7     | 431/371  | 451/811   | 441/991   | 438/1197  | 437/1449  | 454/1643   |
| 0,8     | 468/461  | 467/1259  | 475/1395  | 472/1755  | 470/2129  | 459/2450   |
| **0,9** | 496/662  | 493/1956  | 499/2587  | 498/3214  | 497/3985  | 499/4632   |
| 0,99    | 500/1142 | 500/9378  | 500/14646 | 500/19763 | 500/26299 | 500/14615  |
| 0,999   | 500/1356 | 500/23874 | 500/44704 | 500/69000 | 500/96000 | 500/103600 |

Tady bych potom vybral něco od 0,9 nahoru, protože .

Estimátor postupně zvyšuje teplotu, dokud neusoudí, že je teplota moc vysoká.
- měli bychom estimátor použít

Když je instance větší budem potřebovat pomalejší ochlazování.

Dá se krom teploty hýbat i `-n` kem.

> Může tam v tabulce nastat zlom - bude dobrý výsledek a najednou se to v řádku zhorší a pak musím výrazně zvýšit teplotu, abych to zlepšil. 
---
created: 2024-09-30T16:25:16
up: "[[📖NI-PDB]]"
---

TARGET DECK: NI-PDB
FILE TAGS: NI-PDB

START
FIT-Card

Kdy je dobré používat **B-tree** index?

Back:

Když je kardinalita dané hodnoty **vysoká**.

Např. když mám string, tak tam je kardinalita vysoká
<!--ID: 1728204724895-->
END

---

START
FIT-Card

Kdy je dobré používat **bitmapový** index?

Back:

Když je kardinalita **nízká**.

Např. když mám pohlaví, tak tam je kardinalita nízká
<!--ID: 1728204724899-->
END

---

### Odhad ceny

START
FIT-Card

Jaká bude **cena** u **full table scanu** (když nemám index)?

`select * from R where A = ’x’;`

Back:

Výsledek bude **pR** (počet bloků v tabulce)

![](../../Assets/Pasted%20image%2020240930164508.png)
<!--ID: 1728204724902-->
END

---

START
FIT-Card

Co se v databázi **automaticky** udělá, když nějakou hodnotu nastavím jako **unikátní/primární klíč**?

Back:

Automaticky se z toho udělá **index**, kde ta unikátní hodnota je klíč.
<!--ID: 1728204724905-->
END

---

START
FIT-Card

Jaká bude **cena** u **unique indexu na $R(A)$**?

`select * from R where A = ’x’;`

Back:

Projdu indexovým stromem dolu, dostanu `rowid` (pokud záznam existuje). Jakmile ho mám, tak je přístup k datům konstantní.

Celkem tedy $cost = I(A,R)$

![](../../Assets/Pasted%20image%2020240930164748.png)
<!--ID: 1728204724907-->
END

---

START
FIT-Card

Jaká bude **cena** u **non-unique indexu na $R(A)$**?

`select * from R where A = ’x’;`

Back:

Projdu indexovým stromem dolu, dostanu se do listu, v něm bude **neunikátní** hodnota. Pak musím procházet ty jednotlivé bloky a hledat tu hodnotu.

Celkem tedy $cost = I(A,R) + n(R(A=\text{'x'}))$

![](../../Assets/Pasted%20image%2020240930165102.png)
<!--ID: 1728204724910-->
END

---

START
FIT-Card

Jaká bude **cena** u **indexu na $R(A,B)$**?

`select B from R where A = ’x’;`

Back:

Celkem tedy $cost = I(R,(A,B)) + n(R(A=\text{'x'}))/bl(A,B)-1$

![](../../Assets/Pasted%20image%2020240930165132.png)

Vůbec nehledám v bázové tabulce, ale celý ten index vyhodnotíme nad indexem AB. Ta cena bude výrazně menší než když selectuju s `*`

![](../../Assets/Pasted%20image%2020240930165343.png)
<!--ID: 1728204724913-->
END

---

START
FIT-Card

Jaká bude **cena** u **indexu na $R(A,B)$**?

`select B from R where A < ’x’;`

Back:

![](../../Assets/Pasted%20image%2020240930165515.png)
<!--ID: 1728204724916-->
END

---

START
FIT-Card

Jaká bude **cena** u **bázové tabulky na $R(A,B)$**?

`select * from R where A < ’x’;`

Back:

![](../../Assets/Pasted%20image%2020240930165607.png)
<!--ID: 1728204724919-->
END

---

#### Příklady

![](../../Assets/Pasted%20image%2020240930165711.png)

- `V(sid,R)` - počet námořníků
- `V(bid,R)` - počet lodí

![](../../Assets/Pasted%20image%2020240930165942.png)

### Odhad ceny s řazením

START
FIT-Card

Co se používá v databázi jako **algoritmus** pro řazení?

Back:

**Merge Sort**
<!--ID: 1728204724922-->
END

---

START
FIT-Card

**Při jakých operacích** v databázi dochází k **řazení**?

Back:

`DISTINCT, ORDER BY, HAVING` a množinové operace
<!--ID: 1728204724924-->
END

---

START
FIT-Card

Jaké **statistiky** si databázový engine uchovává **o řazení**?

Back:

- **Multi run sorting** - ukládá si statistiky o předchozím řazení, protože nemá dost paměti na to, aby udělal celé řazení najednou - Když vidím, že má statisticky engine hodně multi run řazení, můžu mu navýšit nějaký parametry, aby byl efektivnější.
<!--ID: 1728204724927-->
END

---

START
FIT-Card

Příklad: **Jak seřadím tabulku pomocí 2-runs sortingu?**

- `pR=300` - 300 bloků tabulky
- `M=50` - do paměti se mi vejde 50 řádků najednou

Back:

![](../../Assets/Pasted%20image%2020240930171147.png)

Co když těch bloků bude fakt hodně ($5000$)?
-> Udělám víceběhové řazení

![](../../Assets/Pasted%20image%2020240930171316.png)

Další možnost:

- pro první běh použiju prioritní frontu
- díky tomu počet seřazených kousků prvního běhu bude méně
- Pozn. **z tohohle zkoušet nebude**
  ![](../../Assets/Pasted%20image%2020240930171633.png)
<!--ID: 1728204724930-->
END

---

### Odhad ceny operací join

START
FIT-Card

Jaké jsou **3 (+1) metody**, kterými engine dělá operace `JOIN`?

Back:

![](../../Assets/Pasted%20image%2020240930172116.png)

Ta poslední je taková víc spešl.

_Předpoklady:_
![](../../Assets/Pasted%20image%2020240930172307.png)
<!--ID: 1728204724933-->
END

---

#### Nested loops join

START
FIT-Card

Jak funguje **nested loops join**?

Back:

![](../../Assets/Pasted%20image%2020240930172453.png)

- $M=3$ - Minimální množství paměti je **3**
- $M >= pR+2$ - optimální varianta
- $M < pR+2$

![](../../Assets/Pasted%20image%2020240930172739.png)

**Cena na základě velikosti paměti** (Tohle bych tipnul, že nemusíme umět)
![](../../Assets/Pasted%20image%2020240930172712.png)
<!--ID: 1728204724936-->
END

---

START
FIT-Card

Kdy je dobrý použít **nested loop join**?

Back:

Když jedna z relací je **malá** tak, že se mi **vejde do paměti**.

<!--ID: 1728204724938-->
END

---

#### Merge join

START
FIT-Card

Jak funguje **merge join**?

Back:

1. Setřídím si relaci $R$ podle atributu $a$
2. Setřídím si relaci $S$ podle atributu $a$
3. Pak to jen jedním loopem přečtu a mergnu

![](../../Assets/Pasted%20image%2020240930173119.png)

(Tohle bych tipnul, že nemusíme umět)
![](../../Assets/Pasted%20image%2020240930173135.png)
<!--ID: 1728204724941-->
END

---

#### Hash join

START
FIT-Card

Jak funguje **hash join**?

Back:

Idea: snížit počet n-tic, které joinujeme

1. Vybere se hashovací funkce
2. Obě relace (tabulky) se zahešují
3. Porovnávají se pouze prvky se stejným hešem

Tím se mi zredujuje počet porovnání.

**Příklad který je dobrý umět ke zkoušece a státnicím:**
Máme šachovnici, a dál jsem to v přednášce nechytnul :)

![](../../Assets/Pasted%20image%2020240930173704.png)

![](../../Assets/Pasted%20image%2020240930173331.png)
<!--ID: 1728204724944-->
END

---

START
FIT-Card

Jak bych měl obecně optimaliovat tabulku?

Back:

1. Sledovat statistiky, které sbírá databázový engine
2. Vytvářet indexy a další věci pro zlepšení těch míst, kde to je pomalý
<!--ID: 1728204724946-->
END

---

START
FIT-Card

Měl by člověk obecně používat spíš SQL nebo NoSQL a jiné databáze?

Back:

Ve **většině případů** se hodí **SQL**.

Pouze když mě pálí nějaký konkrétní problém v konkrétním projektu, pak teprve použít nějaký třeba NoSQL engine.
<!--ID: 1728204724949-->
END

---


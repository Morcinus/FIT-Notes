---
created: 2025-03-26T12:55:36
up: "[[📖NI-VEM]]"
---

TARGET DECK: NI-VEM
FILE TAGS: NI-VEM cviceni03 status-toReview

Pravda:
- **Objektivní** - to co je skutečně pravda
- **Subjektivní** - jaký má kdo názor
- **Logická** - dedukce ze znalostí (tohle dělá AI a stroje)
	- Fun fact:
		- AI momentálně zvládá dělat dedukci (tzn. ze znalostí, co máme uložené vyvodí nějakou informaci co je v těch znalostí, ale neumí dělat emergenci - vymýšlení skutečně nových věcí)

$$((A \implies B) \land A )\implies B$$

| A   | B   | $A \implies B$ | $(A \implies B) \land A$ | $((A \implies B) \land A) \implies B$ |
| --- | --- | -------------- | ------------------------ | ------------------------------------- |
| 0   | 0   | 1              | 0                        | 1                                     |
| 0   | 1   | 1              | 0                        | 1                                     |
| 1   | 0   | 0              | 0                        | 1                                     |
| 1   | 1   | 1              | 1                        | 1                                     |

$$((A \implies B) \land B )\implies A$$
| A   | B   | $A \implies B$ | $(A \implies B) \land B$ | $((A \implies B) \land B) \implies A$ |
| --- | --- | -------------- | ------------------------ | ------------------------------------- |
| 0   | 0   | 1              | 0                        | 1                                     |
| 0   | 1   | 1              | 1                        | 1                                     |
| 1   | 0   | 0              | 0                        | 0                                     |
| 1   | 1   | 1              | 1                        | 1                                     |

$$((A \implies B) \land (\neg A \implies \neg B) )\implies A$$
| A   | B   | $A \implies B$ | $(\neg A \implies \neg B)$ | $((A \implies B) \land (\neg A \implies \neg B) )\implies A$ |
| --- | --- | -------------- | -------------------------- | ------------------------------------------------------------ |
| 0   | 0   | 1              | 1                          | 1                                                            |
| 0   | 1   | 1              | 1                          | 1                                                            |
| 1   | 0   | 0              | 0                          | 1                                                            |
| 1   | 1   | 1              | 1                          | 1                                                            |

$$((A \implies B) \land \neg B)\implies \neg A$$

| A   | B   | $A \implies B$ | $((A \implies B) \land \neg B)$ | $((A \implies B) \land \neg B)\implies \neg A$ |
| --- | --- | -------------- | ------------------------------- | ---------------------------------------------- |
| 0   | 0   | 1              | 1                               | 1                                              |
| 0   | 1   | 1              | 0                               | 1                                              |
| 1   | 0   | 0              | 0                               | 1                                              |
| 1   | 1   | 1              | 0                               | 1                                              |

Jestliže je gravitace taková jaká je, pak existuje lidský život




| $P(E\|H)=0.9$ | $P(E\|\neg H)=0.1$ |
| ------------- | ------------------ |
| $P(E\|H)=0.2$ | $P(E\|\neg H)=0.8$ |

$$P(H)=0.8$$

$$P(E) = $$

$$((A \implies B) \land (B \implies C) \implies) \implies (A \implies C)$$

| A   | B   | C   | $A \implies B$ | $(B \implies C)$ | $(A \implies B) \land (B \implies C)$ | A \implies C | $((A \implies B) \land (\neg A \implies \neg B) )\implies A$ |
| --- | --- | --- | -------------- | ---------------- | ------------------------------------- | ------------ | ------------------------------------------------------------ |
| 0   | 0   | 0   | 1              | 1                | 1                                     | 1            | 1                                                            |
| 0   | 0   | 1   | 1              | 1                | 1                                     | 1            | 1                                                            |
| 0   | 1   | 0   | 1              | 0                | 0                                     | 1            | 1                                                            |
| 0   | 1   | 1   | 1              | 1                | 1                                     | 1            | 1                                                            |
| 1   | 0   | 0   | 0              | 1                | 0                                     | 0            | 1                                                            |
| 1   | 0   | 1   | 0              | 1                | 0                                     | 1            | 1                                                            |
| 1   | 1   | 0   | 1              | 0                | 0                                     | 0            | 1                                                            |
| 1   | 1   | 1   | 1              | 1                | 1                                     | 1            | 1                                                            |

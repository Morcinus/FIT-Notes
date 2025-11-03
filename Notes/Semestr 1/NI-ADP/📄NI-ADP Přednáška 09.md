---
created: 2024-11-19T18:08:28
title: "Data Architectures"
up: "[[📖NI-ADP]]"
---

TARGET DECK: archive
FILE TAGS: NI-ADP prednaska09 status-toReview


### Data architectures (through time)

- Data warehouse
  - obsahuje různá data
  - periodically se do něj nahrávají data z různých databází
- Data mart
  - Do toho jdou data z data warehouse
  - Tam se denormalizují data (všechno se nabouchá do jedné tabulky)
    - data se tam pak opakují
  - Díky tomu se tam analýzy dělají velice rychle
- Conway's law
  - Organizations which design systems (in the broad sense used here) are constrained to produce designs which are copies of the communication structures of these organizations.
- Data lake (kolem roku 2000s)
  - něco jako warehouse, ale může obsahovat i images atd.
  - je to **cheap** storage (hromada harddrives) with some tooling
  - Je v tom mnohem větší bordel - hromada redundance atd.
  - "data swamp" - a lot of data, redundant data, nobody knows what it is for, nobody uses it etc.
  - Jsou tam části:
    - Landing - to co přistane do lake
    - Transform - různé procesování dat atd
    - Processed data - už nějak upravená a zprocesovaná data
- Query federation
  - Možnost dělat data queries pomocí jednoho query enginu, i když jsou data na různých místech
    - Díky tomu "nepotřebuju data warehouse", protože si to rovnou tahám přímo z těch zdrojů skrz jeden query engine
- Data mesh (tohle je state of the art)
  - Je to jakoby inverzní verze Conwoy's law
    - Snažím se nadesignovat data tak, abych tím zlepšil strukturu mojí organizace
  - Není žádný lake/warehouse
  - Hlavní princip - decentralizace
    - Ten tým/software, co produkuje ty data, tak je vlastní a spravuje
  - Princip - **data as a product**
    - Mám nějaký source dat
    - Potřebuju data z různých sources, tak se vytvoří další source, který dělá join z těch předchozích data sources - to se dá poskytovat jako služba ("data as a product")
    - Takhle se to pak hodně řetězí
  - Princip - **Governance as Code**
    - Pak se tam hrozně jednoduše propagují flags a policies.
    - Např. lidem z marketing teamu můžu zakázat přístup k určitým datům
  - Princip - **Self Service**
-

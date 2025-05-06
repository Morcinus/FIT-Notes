---
created: 2024-11-26T18:05:56
title: "Privacy"
up: "[[📖NI-ADP]]"
---

TARGET DECK: archive
FILE TAGS: NI-ADP prednaska10 status-toReview

START
FIT-Card

Co je information a data privacy?

Back:

Individuals should have some control over the collection and use of information/data.
<!--ID: 1736497489445-->

END

---

START
FIT-Card

Co jsou Fair Information Practice principles?

Back:

1. **Notice/Awareness** - uživatelé by měli vědět, kdy a za jakým účelem se jejich data zpracovávají
2. **Choice/consent** - uživatelé by měli moct vybrat, jaká data se mohou zpracovávat
3. **Access/participation** - uživatelé by si měli moct zobrazit data, co se zpracovávají
4. **Security/integrity** - data by měla být uložena bezpečně
5. **Enforcement** - privacy by měla být vynutitelná - ten co ukládá data by za to měl být zodpovědný
   <!--ID: 1736497489449-->
   END

---

START
FIT-Card

Jaký je rozdíl mezi **security** a **privacy**?

Back:

- security = data jsou bezpečně uložena
- privacy = jde hlavně o řízení přístupu
  <!--ID: 1736497489454-->
  END

---

START
FIT-Card

Co je CCPA?

Back:

Něco jako GDPR v Americe.

<!-- DetailInfoStart -->

Vztahuje se to na velké firmy. GDPR se vztahuje na každého.

<!-- DetailInfoEnd -->
<!--ID: 1736497489459-->

END

---

START
FIT-Card

Z čeho se zkládá GDPR? (2)

Back:

- **Controller** = Ten co rozhoduje, co se s daty děje
- **Processor** = Ten co zpracovává data

<!-- ExampleStart -->

Když mám Gmail, tak Google je controller i processor?

Když si koupím GSuite do firmy, tak Google už je jen processor a moje firma je controller.

<!-- ExampleEnd -->
<!--ID: 1736497489463-->

END

---

START
FIT-Card

Jaká může být pokuta za to když člověk nesplňuje GDPR?

Back:

4% z company revenue (což je faakt hodně)
<!--ID: 1736497489467-->

END

---

START
FIT-Card

Podle GDPR, jaké mám důvody pro sběr dat?

Back:

1. consent - uživatel mi to povolí
2. contract - ve smlouvě???
3. legal obligation - musím to zpracovávat
4. vital interests
5. public interests
6. legitimate business interests - např. když používám
   <!--ID: 1736497489472-->
   END

---

START
FIT-Card

Jaktože firmy mohou podnikat v Evropě i v USA, když jsou v obou místech jiná práva ohledně privacy?

Back:

- Shrems 1 - zákaz firmám podnikat v zemích, pokud nedodržují jejich podmínky
- Shrems 2 - to samé + pokud mám data uložená např. v USA, tak musím zajistit, že k tomu nemůže přijít ani FBI a CIA atd.
  <!--ID: 1736497489476-->
  END

---

### Privacy Engineering

START
FIT-Card

Co je Privacy Impact Assessment?

Back:

Je to systematický proces, kterým zjistíme jaký vliv na privacy bude mít daný projekt.

<!-- ExampleStart -->

Např. vyvíjím novou fičuru, tak provedu Privacy Impact Assessment a tím zjistím, co všechno budu muset v rámci privacy řešit.

Nebo např. když vláda chce něco začít používat, tak udělá assessment jestli používat produkt od Microsoftu nebo Googlu.

<!-- ExampleEnd -->
<!--ID: 1736497489480-->

END

---

START
FIT-Card

Jaké jsou typické otázky, které se snažím zodpovědět pomocí Privacy Impact Assessment?

Back:

- Co za informace je uloženo?
- Kdo sbírá informace a za jakým účelem?
- Jak dlouho jsou informace uloženy? (kdy se to smaže)
  <!--ID: 1736497489485-->
  END

---

START
FIT-Card

Co je Privacy Threat Modelling?

Back:

Zaměřujeme se na hrozby, kde bychom mohli porušovat privacy.

<!-- ExampleStart -->

Např. LINDDUN

Namodeluju si, kam se jaká data přesouvají
![](../../../Assets/Pasted%20image%2020241126190319.png)

<!-- ExampleEnd -->

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020241126190018.png)

<!-- ImageEnd -->
<!--ID: 1736497489490-->

END

---

START
FIT-Card

Co je Privacy Audit? Jaký je rozdíl mezi auditem a assessmentem?

Back:

- assessment = před tím, než začnu ten projekt dělat
- audit = už mám projekt hotový a chci zkontrolovat, jeslti to dodržuju
  <!--ID: 1736497489494-->
  END

---

### Privacy by Design

START
FIT-Card

Co je Privacy by Design?

Back:

Měl bych na privacy myslet v průběhu vývoje, ne až potom.

Např. před schválením fičury bych měl udělat privacy assessment.
<!--ID: 1736497489499-->

END

---

START
FIT-Card

Co je 7 principů Privacy by Design?

Back:

1. Proactive, not Reactivy
2. Privacy as the default setting
   - Např. location sharing by nemělo být zapnutý by default
3. Privacy Embedded into Design
4. Full Functionality - Positive-Sum, not Zero-sum
5. End-To-End Security - full lifecycle protection
6. Visibility and Transparency - Keep it open
7. Respect for User Privacy - Keep it user-centric
   <!--ID: 1736497489503-->
   END

---

START
FIT-Card

Jaké jsou strategie pro Privacy By Design?

Back:

Minimalizace

- Neukládat, co není potřeba

Separate

- Oddělit procesování dat, izolovat to
- Díky tomu to pak můžu lépe kontrolovat
- Např. Gmail, Drive, Kalendář každý mají vlastní databázi, analytics atd.
  - Díky tomu jsou data bezpečnější, splňují lépe privacy než když bych to všechno měl v jednom poolu/warehousu.

Abstract

Hide Information

Inform - informovat ostatní

Enforce - vynucovat

Demonstrate
<!--ID: 1736497489509-->

END

---

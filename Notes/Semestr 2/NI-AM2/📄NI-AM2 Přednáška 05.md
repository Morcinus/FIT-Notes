---
created: 2025-03-18T12:11:22
title: "Security"
up: "[[📖NI-AM2]]"
---

TARGET DECK: archive
FILE TAGS: NI-AM2 prednaska05 status-toReview

START
FIT-Card

(FIT-Notes flashcard)

Proč vzniklo OAuth2?

Back:

Většina aplikací je v cloudu
-> díky public APIs se aplikace dají rozšiřovat
-> ty rozšiřující aplikace potřebují přístup k soukromým datům uživatele
-> je potřeba systém, kde můžeme dát rozšiřujícím aplikacím přístup bez toho, abychom jim dali přihlašovací údaje (např. jméno a heslo) uživatele

Proč je hloupý to dělat přes jméno a heslo:

- Uživatel musí dát rozšiřující aplikaci heslo - což je samo o sobě stupidní, protože ta appka by toho mohla zneužít
- Uživatel nemůže jednoduše kontrolovat, po jakou dobu má aplikace přístup. Kdyby jí chtěl přístup odebrat, musel by změnit a znovu zadat heslo ve všech rozšiřujících aplikacích

![](../../../Assets/Pasted%20image%2020250318121217.png)
![](../../../Assets/Pasted%20image%2020250318121228.png)
<!--ID: 1746520169032-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaké jsou cíle OAuth 2.0?

Back:

- Poskytnout přístup third-party apps
- Uživatele mohou kdykoliv revokenout přístup
- support pro
  - server-side apps - authorization code
  - client-side apps - implicit grant
  - native (desktop) apps - authorization code

![](../../../Assets/Pasted%20image%2020250318121246.png)
<!--ID: 1746520169035-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Client** v OAuth2?

Back:

![](../../../Assets/Pasted%20image%2020250318121302.png)
<!--ID: 1746520169037-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Resource Owner** v OAuth2?

Back:

![](../../../Assets/Pasted%20image%2020250318121314.png)
<!--ID: 1746520169040-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Authorization and Token Endpoints** v OAuth2?

Back:

![](../../../Assets/Pasted%20image%2020250318121330.png)
<!--ID: 1746520169043-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Resource Server** v OAuth2?

Back:

![](../../../Assets/Pasted%20image%2020250318121407.png)
<!--ID: 1746520169046-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Authorization Code** v OAuth2?

Back:

![](../../../Assets/Pasted%20image%2020250318121402.png)
<!--ID: 1746520169049-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Co je **Access Token** v OAuth2?

Back:

![](../../../Assets/Pasted%20image%2020250318121358.png)
<!--ID: 1746520169051-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje OAuth2 Client-side Web Apps Protocol?

Back:

Začátek: uživatel je v rozšiřující aplikaci (=client)

1. Client redirectne uživatele na **authorization endpoint** (server)
2. Uživatel povolí přístup k resources
3. Auth server pošle klientovi `access_token` a `expires_in`
4. Client nyní může používat `access_token` (než se dovrší čas expirace, potom se celý proces musí udělat znovu)

Pokud access token expirene, resource server vrací `401 Unauthorized`

![](../../../Assets/Pasted%20image%2020250318121636.png)
![](../../../Assets/Pasted%20image%2020250318121646.png)
![](../../../Assets/Pasted%20image%2020250318121718.png)
![](../../../Assets/Pasted%20image%2020250318121726.png)
![](../../../Assets/Pasted%20image%2020250318121734.png)
<!--ID: 1746520169054-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jakými způsoby lze posílat `access_token` když přistupuju k Resource serveru? (2)

Back:

Buď jako query string - `.../data?oauth_token=[TOKEN]`

Nebo jako HTTP Header - `Authorization: OAuth [TOKEN]`
<!--ID: 1746871652334-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje Cross-Origin Resource Sharing proces u OAuth?

Back:

1. **Majitel clienta** (rozšiřující aplikace) zaregistruje aplikaci na Auth Serveru. Ten přidá aplikaci na seznam povolených originů.
2. Uživatel povolí access k resources pomocí OAuth
3. Auth Server řekne Resource serveru, že má povolit daný origin pro danou resource
4. Resource server pak bude mít v `Access-Control-Allow-Origin` také origin

![](../../../Assets/Pasted%20image%2020250318121757.png)
<!--ID: 1746520169057-->

END

---

### Server-side Web Apps

START
FIT-Card

(FIT-Notes flashcard)

Jaká je výhoda server-side OAuth?

Back:

Tokeny jsou bezpečně uloženy na serveru, uživatel musí být přihlášený, aby mohl využívat a získat přístup k tokenům.

(Na frontendu stačí otevřít cache/cookies/storage a člověk to vidí i když není přihlášený)

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318121902.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169063-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Popiš jak detailně funguje OAuth2.0 při server side komunikaci

(Server-side Web Apps Protocol)

Back:

1. Klient (server side) redirectne uživatele na auth server
2. Uživatel grantne access
3. Auth server řekne Resource serveru, aby povolil access s daným `access_token` a `expires_in`.
4. Auth server dá **authorization code** klientovi
5. Klient (server) pomocí authorization code requestne **access** a **refresh token** na token endpointu (na auth serveru) a dostane ho
6. Klient (server) pak accessuje resource s access tokenem
7. Pokud access token expirene, refreshne se s refresh tokenem na token endpointu

<!-- ImageStart -->

![](../../../Assets/Pasted%20image%2020250318121925.png)

<!-- ImageEnd -->

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318121931.png)
![](../../../Assets/Pasted%20image%2020250318121937.png)
![](../../../Assets/Pasted%20image%2020250318122002.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169066-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

K čemu je dobrý OpenID protokol?

Back:

Aby si člověk nemusel pamatovat hromadu hesel k aplikacím, tak je OpenID provider, který umožňuje se přihlašovat pomocí jednoho účtu k mnoha aplikacím.

Např. přes Google account se člověk může přihlašovat všude možně

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122056.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169069-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje OpenID protokol (jednotlivé kroky)?

Back:

1. Web Appka ukáže přihlašovací okénko
2. Uživatel vybere daného OpenID providera (např. Google)
3. **discovery** - appka pošle request providerovi
4. **XRDS document** - provider pošle dokument v němž jsou informace, kam se mají posílat login requesty (kam se má odkázat uživatel)
5. Web Appka redirectne uživatele na danou adresu OpenID providera
6. Provider redirectne uživatele na sign-in page
7. Uživatel se přihlásí a povolí přístup webové aplikaci k jeho identitě
8. OpenID provider redirectne uživatele zpět do web appky (a předá appce identitu)
9. Web appka nyní může využívat identitu

![](../../../Assets/Pasted%20image%2020250318122116.png)
![](../../../Assets/Pasted%20image%2020250318122123.png)
![](../../../Assets/Pasted%20image%2020250318122128.png)
<!--ID: 1746520169072-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kdo může číst a měnit JWT token?

Back:

- číst - kdokoliv
- měnit - pouze server

Tzn. nemůžu si jako hacker změnit v tokenu "admin: true", protože tam je ta signature, která by byla porušená
<!--ID: 1746520169074-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Kde bych měl mít uložený JWT token?

Back:

Jako nejlepší by bylo ho mít uložený na serveru a na klientovi ho nemít uložený vůbec.

Jde ale o to, že tak jako tak musím mít na klientovi něco, co mi umožní zůstat přihlášený, takže stejně dost aplikací ukládá JWT na frontendu
<!--ID: 1746520169077-->

END

---

### OpenID Connect

START
FIT-Card

(FIT-Notes flashcard)

Co je OpenID Connect?

Back:

Nadstavba nad OAuth 2.0, která umožňuje provádět funkcionality OpenID (aka získání identity a informací o uživateli).

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122148.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169080-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jaký je rozdíl mezi OpenID a OpenID Connect?

Back:

**OpenID** = původní standard asi z roku 2000
**Open ID Connect (OIDC)** = to co se prakticky používá, nadstavba OAuth 2.0, využívá JWT a lepší security

<!-- DetailInfoStart -->

![](../../../Assets/Pasted%20image%2020250318122206.png)

<!-- DetailInfoEnd -->
<!--ID: 1746520169083-->

END

---

START
FIT-Card

(FIT-Notes flashcard)

Jak funguje získání identity pomocí OIDC?

Back:

Uživatel na klientovi chce přistoupit k osobním datům.

1. **User** pošle request na **server**, že chce osobní data
2. **Server** zjistí, že uživatel není přihlášený, tak ho redirectne na OIDC
3. **Uživatel** na OIDC vyplní údaje a povolí access ke svým datům
4. **OIDC** uživatele redirectne na callback URL té aplikace společně s `authorization code`
5. **Server** z callback URL získá kód a pošle request na **OIDC**, aby mu kód vyměnil za `access token` a `refresh token`
6. **OIDC** pošle serveru `access token` a `refresh token`
7. **Server** už s access tokenem pošle requet na **OIDC** k získání osobních informací uživatele
8. **OIDC** vrátí informace
9. **Server** konečně servne požadované informace klientovi (uživateli)

Jednodušší by to být nemohlo :D

![](../../../Assets/Pasted%20image%2020250318122213.png)
<!--ID: 1746878348073-->

END

---

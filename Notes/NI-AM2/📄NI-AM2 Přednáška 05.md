---
created: 2025-03-18T12:11:22
title: "Security"
up: "[[📖NI-AM2]]"
---
TARGET DECK: NI-AM2
FILE TAGS: NI-AM2 prednaska05 status-toReview


START
FIT-Card

Proč vzniklo OAuth2?

Back:

Většina aplikací je v cloudu 
-> díky public APIs se aplikace dají rozšiřovat 
-> ty rozšiřující aplikace potřebují přístup k soukromým datům uživatele 
-> je potřeba systém, kde můžeme dát rozšiřujícím aplikacím přístup bez toho, abychom jim dali přihlašovací údaje (např. jméno a heslo) uživatele 

Proč je hloupý to dělat přes jméno a heslo:
- Uživatel musí dát rozšiřující aplikaci heslo - což je samo o sobě stupidní, protože ta appka by toho mohla zneužít
- Uživatel nemůže jednoduše kontrolovat, po jakou dobu má aplikace přístup. Kdyby jí chtěl přístup odebrat, musel by změnit a znovu zadat heslo ve všech rozšiřujících aplikacích

![](../../Assets/Pasted%20image%2020250318121217.png)
![](../../Assets/Pasted%20image%2020250318121228.png)
<!--ID: 1746520169032-->
END

---


START
FIT-Card

Jaké jsou cíle OAuth 2.0?

Back:

- Poskytnout přístup third-party apps
- Uživatele mohou kdykoliv revokenout přístup
- support pro
	- server-side apps - authorization code
	- client-side apps - implicit grant
	- native (desktop) apps - authorization code


![](../../Assets/Pasted%20image%2020250318121246.png)
<!--ID: 1746520169035-->
END

---


START
FIT-Card

Co je **Client** v OAuth2?

Back:

![](../../Assets/Pasted%20image%2020250318121302.png)
<!--ID: 1746520169037-->
END

---


START
FIT-Card

Co je **Resource Owner** v OAuth2?

Back:

![](../../Assets/Pasted%20image%2020250318121314.png)
<!--ID: 1746520169040-->
END

---


START
FIT-Card

Co je **Authorization and Token Endpoints** v OAuth2?

Back:

![](../../Assets/Pasted%20image%2020250318121330.png)
<!--ID: 1746520169043-->
END

---


START
FIT-Card

Co je **Resource Server** v OAuth2?

Back:

![](../../Assets/Pasted%20image%2020250318121407.png)
<!--ID: 1746520169046-->
END

---


START
FIT-Card

Co je **Authorization Code** v OAuth2?

Back:

![](../../Assets/Pasted%20image%2020250318121402.png)
<!--ID: 1746520169049-->
END

---


START
FIT-Card

Co je **Access Token** v OAuth2?

Back:

![](../../Assets/Pasted%20image%2020250318121358.png)
<!--ID: 1746520169051-->
END

---


START
FIT-Card

Jak funguje OAuth2 Client-side Web Apps Protocol?

Back:

Začátek: uživatel je v rozšiřující aplikaci (=client)
1. Client redirectne uživatele na **authorization endpoint** (server)
2. Uživatel povolí přístup k resources
3. Auth server pošle klientovi `access_token` a `expires_in`
4. Client nyní může používat `access_token` (než se dovrší čas expirace, potom se celý proces musí udělat znovu)

Pokud access token expirene, resource server vrací `401 Unauthorized`

![](../../Assets/Pasted%20image%2020250318121636.png)
![](../../Assets/Pasted%20image%2020250318121646.png)
![](../../Assets/Pasted%20image%2020250318121718.png)
![](../../Assets/Pasted%20image%2020250318121726.png)
![](../../Assets/Pasted%20image%2020250318121734.png)
<!--ID: 1746520169054-->
END

---


START
FIT-Card

Jakými způsoby lze posílat `access_token` když přistupuju k Resource serveru? (2)

Back:

Buď jako query string - `.../data?oauth_token=[TOKEN]`

Nebo jako HTTP Header - `Authorization: OAuth [TOKEN]`

END

---


START
FIT-Card

Jak funguje Cross-Origin Resource Sharing proces?

Back:

1. **Majitel clienta** (rozšiřující aplikace) zaregistruje aplikaci na Auth Serveru. Ten přidá aplikaci na seznam povolených originů.
2. Uživatel povolí access k resources pomocí OAuth
3. Auth Server řekne Resource serveru, že má povolit daný origin pro danou resource
4. Resource server pak bude mít v `Access-Control-Allow-Origin` také origin

![](../../Assets/Pasted%20image%2020250318121757.png)
<!--ID: 1746520169057-->
END

---

### Server-side Web Apps


START
FIT-Card

Jak funguje server-side OAuth2?

Back:

1. Klient (server side) redirectne uživatele na auth server
2. Uživatel grantne access
3. Auth server dá **authorization code**
4. Klient (server) requestne **access** a **refresh token** a dostane ho
5. Klient (server) pak accessuje resource s access tokenem
6. Pokud access token expirene, refreshne se s refresh tokenem

![](../../Assets/Pasted%20image%2020250318121845.png)
![](../../Assets/Pasted%20image%2020250318121836.png)
<!--ID: 1746520169060-->
END

---


START
FIT-Card

Jaká je výhoda server-side OAuth?

Back:

![](../../Assets/Pasted%20image%2020250318121902.png)
<!--ID: 1746520169063-->
END

---


START
FIT-Card

Popiš jak detailně funguje OAuth2.0 při server side komunikaci

Back:

![](../../Assets/Pasted%20image%2020250318121925.png)
![](../../Assets/Pasted%20image%2020250318121931.png)
![](../../Assets/Pasted%20image%2020250318121937.png)
![](../../Assets/Pasted%20image%2020250318122002.png)
<!--ID: 1746520169066-->
END

---


START
FIT-Card

K čemu je dobrý OpenID protokol?

Back:

![](../../Assets/Pasted%20image%2020250318122056.png)
<!--ID: 1746520169069-->
END

---


START
FIT-Card

Jak funguje OpenID protokol (jednotlivé kroky)?

Back:

![](../../Assets/Pasted%20image%2020250318122116.png)
![](../../Assets/Pasted%20image%2020250318122123.png)
![](../../Assets/Pasted%20image%2020250318122128.png)
<!--ID: 1746520169072-->
END

---



START
FIT-Card

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

Kde bych měl mít uložený JWT token?

Back:

Jako nejlepší by bylo ho mít uložený na serveru a na klientovi ho nemít uložený vůbec.

Jde ale o to, že tak jako tak musím mít na klientovi něco, co mi umožní
<!--ID: 1746520169077-->
END

---

### OpenID Connect

START
FIT-Card

Co je OpenID Connect?

Back:

![](../../Assets/Pasted%20image%2020250318122148.png)
<!--ID: 1746520169080-->
END

---


START
FIT-Card

Jaký je rozdíl mezi OpenID a OpenID Connect?

Back:

![](../../Assets/Pasted%20image%2020250318122206.png)
![](../../Assets/Pasted%20image%2020250318122213.png)
<!--ID: 1746520169083-->
END

---

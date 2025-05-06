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

![](../../Assets/Pasted%20image%2020250318121217.png)
![](../../Assets/Pasted%20image%2020250318121228.png)

<!--ID: 1746520169032-->
END

---


START
FIT-Card

Jaké jsou cíle OAuth 2.0?

Back:

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

Jak funguje OAuth2 u client-server komunikace?

Back:

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

Jak funguje Cross-Origin Resource Sharing proces?

Back:

![](../../Assets/Pasted%20image%2020250318121757.png)

<!--ID: 1746520169057-->
END

---

### Server-side Web Apps


START
FIT-Card

Jak funguje server-side OAuth2?

Back:

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

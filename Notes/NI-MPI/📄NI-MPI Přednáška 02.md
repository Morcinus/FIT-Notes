---
created: 2024-10-11T09:44:28
up: "[[📖NI-MPI]]"
---

TARGET DECK: NI-MPI
FILE TAGS: NI-MPI prednaska02 status-toReview analyza2

START
Basic

Co je parciální derivace druhého řádu?

Back:

![[Pasted image 20240930133125.png]]

<!-- InformallySaidStart -->
Parciálně zderivuju funkci v bodě, dostanu z toho zase funkci. Tu funkci pak znovu zderivuju podle jiné proměnné.
<!-- InformallySaidEnd -->
<!--ID: 1728921214784-->
END

---


START
Basic

Definice: **Hessova matice**

Back:

![[Pasted image 20240930133445.png]]

**Neformálně:**
Ukazuje, jak se mění sklon funkce ve všech směrech v daném bodě.

Tags: core
<!--ID: 1728921214787-->
END

---


START
Basic

Věta: pořadí parciálního derivování 

Back:

![[Pasted image 20240930133621.png]]

Pozn. tehle případ platí velice často.

Hessova matice je často symetrická - tzn. podle diagonály v matici.
<!--ID: 1728921214789-->
END

---


START
Basic

Definice: Druhá parciální derivace funkce $f$ ve směru v bodě $\textbf{b}$

Back:

![[Pasted image 20240930133700.png]]
<!--ID: 1728921214792-->
END

---


START
Basic

Věta: Jak se spočte druhá parciální derivace $f$ ve směru $v$ v bodě $b$

Back:

![[Pasted image 20240930133710.png]]

Jak se to používá:
![[Pasted image 20240930134257.png]]
Můžu potom provádět "ruské násobení":
1. Napíšu si vektor a tu matici
2. Vynásobím je a dostanu vektor
3. ten vektor potom pronásobím s dalším vektorem

Tags: core
<!--ID: 1735463085834-->
END

---


START
Basic

Definice: **definitnost matic**

Back:

![[Pasted image 20240930134711.png]]

5. **indefinitní:** V jednom směru druhá parciální derivace vychází kladně a v druhém záporně.

Pozn. obecně určování definitnosti je takový pracný a člověk si to musí určit příkladama/protipříkladama z definice

_Příklad indefinitního_:
![[Pasted image 20240930134809.png]]

Tags: core
<!--ID: 1728921214796-->
END

---


START
Basic

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![[Pasted image 20240930135010.png]]

Back:

![[Pasted image 20240930135024.png]]

Tags: core
<!--ID: 1728921214799-->
END

---

START
Basic

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![[Pasted image 20240930135037.png]]

Back:

![[Pasted image 20240930135029.png]]

Tags: core
<!--ID: 1728921214801-->
END

---

START
Basic

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![[Pasted image 20240930135042.png]]

Back:

![[Pasted image 20240930135046.png]]

Tags: core
<!--ID: 1728921214804-->
END

---

START
Basic

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![[Pasted image 20240930135055.png]]

Back:

![[Pasted image 20240930135050.png]]

Tags: core
<!--ID: 1728921214807-->
END

---

START
Basic

Buď $\textbf{A} \in \mathbb{R}^{n,n}$ **symetrická** matice. Potom platí následující:

![[Pasted image 20240930135103.png]]

Back:

![[Pasted image 20240930135107.png]]

Tags: core
<!--ID: 1728921214809-->
END

---


START
Basic

Věta: **Sylvestrovo kritérium**

Back:

![[Pasted image 20240930135304.png]]

Tags: core
<!--ID: 1728921214813-->
END

---


START
Basic

Věta: **diagonála matice** a **definitnost**

Back:

![[Pasted image 20240930135505.png]]

Tags: core
<!--ID: 1728921214815-->
END

---


START
Basic

Věta: **Postačující podmínka existence extrému a sedlového bodu**

Back:

![[Pasted image 20240930135358.png]]
![[Pasted image 20240930140831.png]]

Tags: core
<!--ID: 1728921214818-->
END

---


START
Basic

Věta: Nutná podmínka existence lokálního extrému (2)

Back:

![[Pasted image 20240930140823.png]]

Tags: core
<!--ID: 1728921214821-->
END

---


START
Basic

Postup: Jak najít extrémy funkce více proměnných?

Back:

1. Najdu **kritické body** (stacionární + ty, kde alespoň jedna parciální derivace neexistuje)
2. Pokud jsou **všechny 2. parciální derivace** v okolí stacionárního bodu $\textbf{b}$ spojité, najít **Hessovu matici**. Pokud je matice
	1. **pozitivně definitní**, pak je bod $\textbf{b}$ bodem ostrého lokálního **minima** 
	2. **negativně definitní**, pak je bod $\textbf{b}$ bodem ostrého lokálního **maxima**
	3. **indefinitní**, pak je bod $\textbf{b}$ sedlovým bodem (tj. není extrém)

<!-- DetailInfoStart -->
Pozn. Hledat kritické body je samo o sobě **velice obtížné** a není jednotný algoritmus, co by to jednoduše vyřešil. Najít přesné body je proto velice těžké. Samozřejmě ty řešení, co máme na tomto předmětu, jsou jednoduché.

![[Pasted image 20240930140745.png]]
<!-- DetailInfoEnd -->
<!--ID: 1728921214824-->
END

---


START
Basic

Definice: **konvexní a konkávní funkce**

Back:

![[Pasted image 20240930140715.png]]
<!--ID: 1728921214826-->
END

---


START
Basic

Doplň tvrzení: Lokální minimum konvexní funkce je $\dots$

Back:

Lokální minimum konvexní funkce je globálním minimem.
<!--ID: 1728921214829-->
END

---



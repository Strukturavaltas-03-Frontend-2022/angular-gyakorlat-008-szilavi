# Forms - Gyakorlat

**_Instrukciók_**: tedd lehetővé, hogy kattintásra egy külön oldalon megnyíló űrlapon lehessen szerkeszteni az eseményeket.

## Kezdő lépések
- Lépj be a letöltött mappába, és állítsd be a projektet:
- `cd <repo-name>`
- `code . -r`
- Telepítsd a függőségeket:
- `npm i`
- Indítsd el az Angular Development Server-t:
- `ng serve`

## Bevezetés
> Az alkalmazás szerkesztőfelülete készen van, az EditorComponent jeleníti meg. 
Teljes körű validációt kell készítened hozzá, majd lehetővé kell tenni, hogy 
új eseményeket is lehessen rögzíteni a programban. Végül mentetni is kell az 
eseményeket, és valós szerverrel kell kiszolgálni az adatokat.

## Feladatok

1. Validáld le az események szerkesztő űrlapján az adatokat a következő 
szabályok szerint:
- Minden mezőt kötelező kitölteni!
- name: legalább 8, maximum 25 karakter hosszú szöveg
- date: az angol dátum formátumot kövesse: `00/00/0000` nap/hó/év
- time: formátuma `00am` vagy `00pm` lehet, például `11am`
- location: legalább 5, maximum 25 karakter, nagybetűvel kezdődik
- Az összes szabályt patternként add meg a HTML-állományban.

1. Legyenek hibaüzenetek a hibás validáció esetén az adott mezők alatt. 
  - Akkor 
legyenek láthatók, ha nem valid a mező értéke. 
- A hibaüzenet szövege legyen 
összefüggésben a hibával, pontosan mondja meg, hogy hogyan kell kinéznie 
az adatnak. 
- Lehet magyar vagy angol nyelvű is.

3. Create metódus az EventService-ben.
- Hozd létre a create metódust, amely hozzáadja a kapott eseményt a list tömbhöz, 
majd a list$-on keresztül értesíti a feliratkozókat, hogy módosultak az adatok 
(az update metódushoz hasonlóan).

4. Remove metódus az EventService-ben.
- Hozd létre a remove metódust, amely eltávolít egy elemet a kapott id alapján 
a list tömbből, majd a list$-on keresztül értesíti a feliratkozókat, hogy 
módosultak az adatok (az update metódushoz hasonlóan).

5. Új esemény létrehozása.
- A listázó komponensben legyen egy nagy zöld gomb a táblázat felett az új esemény 
létrehozásához. Ha rákattintanak, akkor nyissa meg az editor-t 0 id-vel.  
- Az EditorComponent osztályában az onUpdate metódusban vizsgáld meg, hogy 
0-e az id-je az eseménynek, és ha igen, akkor az EventService create metódusát 
hívd meg, átadva neki az esemény adatait.

6. Esemény törlése.
- A listázó komponensben legyen minden sorban egy piros gomb a kék mellett, amely 
kattintásra meghív egy metódust a hozzá tartozó osztályban. 
Ez a metódus pedig meghívja az EventService remove metódusát a kattintott sor 
eseményének az id-jével.

## Extra feladatok
1. A hibaüzenetek az űrlapon animálva jelenjenek meg.
1. Ne lehessen többször a mentés gombra kattintani, a mentés megkezdésekor 
kerüljön a gomb letiltásra.
1. Tanulmányozd át az ngx-toaster nevű harmadik féltől származó Angular-kiegészítőt. Oldd meg a használatával, hogy sikeres mentés, módosítás és 
törlés esetén jelenjen meg 3s időtartamra toast üzenet, amely informálja 
a felhasználót az elvégzett műveletről.
1.  Az eseményeket mentsd ki egy JSON-állományba a tanult módon, és onnan kérd 
le őket, ott módosítsd és töröld a HttpClient segítségével (json-server).
Figyelem: A megadott adatok nem biztos, hogy megfelelnek a validációnak.

## Sok sikert!

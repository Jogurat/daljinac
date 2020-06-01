# Daljinac - PSI Projekat tima PAKT

![logo](/Dokumentacija/Faza5/img/Logo.png)

Ovaj repozitorijum predstavlja projektni zadatak tima **PAKT**.
Članovi tima su:

- **P**etar Ostojić - Jogurat
- **A**leksa Jovanović - Aleksa-Jovanovic
- **K**senija Mladenović - ksenijam14
- **T**eodora Nedeljković - teodoranedeljkovic355

Projekat je **hostovan** na platformi Heroku, i može se videti na sledećem [linku](https://daljinac-api.herokuapp.com/).

## [Live verzija projekta](https://daljinac-api.herokuapp.com/)

---

## Cilj projekta

Cilj ovog projekta je da olakša života ljudi koji žive u potkrovljima, a osuđeni su na život bez pametne klime. Kako leti temperature dostižu neverovatno visoke brojke, scenario vraćanja kući je sledeći:

Ući u stan -> Popeti se na potkrovlje -> Upaliti klimu -> Vratiti se dole -> Sačekati 5 minuta -> Popeti se na potkrovlje i nastaviti normalno dan

Mi želimo da ovaj scenario uprostimo, tako da 10ak minuta pre nego što dođete kući:

Na telefonu otvorite internet pretraživač -> Odete na [daljina.cc](https://daljinac-api.herokuapp.com) -> Ulogujete se na svoj nalog -> Upalite klimu preko jedne od kartica -> Dođete kući i pravo odete na potkrovlje 😊

---

## Hardver

![slika-hardvera](/Dokumentacija/Faza5/img/Arduino.png)
Za izradu ovog projekta korišćen je Arduino Mega. Od ostalih bitnih komponenti imamo:

- ESP8266-01 WiFi Modul
- Infrared dioda
- Infrared transmiter
- Senzor temperature

Slika iznad je pokaznog karaktera, neke od pasivnih komponenti su drugačije ili nisu prikazane.

(Slika generisana na sajtu circuito.io koji sam dodaje pasivne komponente i ne dozvoljava dodavanje drugih)

---

## Korišćene tehnologije i alati

| Tehnolgoija/Alat                                           | Opis                                                                                                                                                                                                 | Verzija |
| ---------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------: |
| [Node.js](https://nodejs.org/)                             | JS runtime okruženje, JS na serveru                                                                                                                                                                  |   12.17 |
| [Vue.js](https://vuejs.org/)                               | Frontend JS framework, za izradu veb aplikacija                                                                                                                                                      |  2.6.11 |
| [VueRouter](https://router.vuejs.org/)                     | Dodatak za Vue.js, za izradu Single Page Application-a (SPA)                                                                                                                                         |   3.6.1 |
| [Vuetify](https://vuetifyjs.com/)                          | UI biblioteka za Vue, bazirana na Material Design-u kompanije Google                                                                                                                                 |  2.2.11 |
| [MDI](https://materialdesignicons.com/)                    | Material Design Icons, ikonice                                                                                                                                                                       |
| [NPM](https://www.npmjs.com/)                              | Menadžer paketa za Node.js, za instaliranje biblioteka (dependency-a)                                                                                                                                |
| [MongoDB](https://www.mongodb.com/)                        | No-SQL (nerelaciona) baza podataka, brze real-time performanse                                                                                                                                       |
| [Mongoose](https://mongoosejs.com/)                        | Wrapper za MongoDB pisan za Node.js, modeliranje baze podataka                                                                                                                                       |   5.9.2 |
| [Express](https://expressjs.com/)                          | Minimalan framework za Node.js, za pravljenje API-a                                                                                                                                                  |  4.17.1 |
| [JsonWebToken](https://github.com/auth0/node-jsonwebtoken) | Enkripcija podataka o korisnicima, za autentikaciju korisnika                                                                                                                                        |   8.5.1 |
| [Bcrypt.js](https://github.com/kelektiv/node.bcrypt.js)    | Biblioteka za heširanje lozinki (ne čuvaju se u plain-text formatu)                                                                                                                                  |   2.4.3 |
| [Dotenv](https://github.com/motdotla/dotenv)               | Biblioteka koja omogućava korišćenje environment varijabli putem .env fajla (tajne promenljive koje ne želimo da se nađu na GitHub repo-u nalaze se ovde, poput tajnih klučeva za heširanje lozinki) |   8.2.0 |
| [Nodemailer](https://nodemailer.com/about/)                | Biblioteka za slanje mejlova, koristi se prilikom zahtevanja promene lozinke, šalje mejl koji sadrži HTML stranicu                                                                                   |   6.4.6 |
| [Axios](https://github.com/axios/axios)                    | HTTP klijent zasnovan na principu "Promise"-a (async JS), za slanje HTTP zahteva, "naslednik" AJAX-a                                                                                                 |  0.19.2 |
| [Mocha](https://mochajs.org/)                              | JS framework za testiranje                                                                                                                                                                           |   7.1.1 |
| [Chai](https://www.chaijs.com/)                            | Assertion biblioteka za JS, koristi se za preciznije assert-ovanje uz pomoć Mocha-e                                                                                                                  |   4.2.0 |
| [NYC](https://github.com/istanbuljs/nyc)                   | Code-coverage za testove                                                                                                                                                                             |    15.0 |
| [Nodemon](https://nodemon.io/)                             | Biblioteka koja automatski restartuje server pri promeni koda, veoma korisno 😊                                                                                                                      |   2.0.2 |

Neke verzije predstavljaju minimalnu kompatibilnu, više o verzijama može se videti u package.json fajlu [servera](/package.json) i [klijenta](/client/package.json).

### Ostalo

| Tehnologija/Alat                                                                           | Opis                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Heroku](https://www.heroku.com/)                                                          | Platforma za deploy-ovanje aplikacije, veoma lep besplatan tier, prati promene na Github repozitorijumu i servira index.html stranu iz /client/dist/ foldera                                                                                         |
| [Github](https://github.com)                                                               | Platforma za kolaboraciju, remote hostovanje Git repozitorijuma                                                                                                                                                                                      |
| [Github pages](https://pages.github.com/)                                                  | Besplatno hostovanje open-source static veb sajtova, za hostovanje prototipa                                                                                                                                                                         |
| [Github Actions](https://github.com/features/actions)                                      | Continious Integration (CI) "platforma" u okviru Github-a, automatsko testiranje na svakom pull request-u, testovi se nalaze u /test/ folderu, samo podešavanje Github Actions-a se radi u .yaml fajlu, koji se nalazi u /.github/workflows/ folderu |
| [Trello](https://trello.com/)                                                              | Sajt za upravljanje softverskim projektom, korišćenje Kanban principa, olakšana podela posla, svako zna ko šta radi... Mali pogled na našu tablu nalazi se [ovde](/Dokumentacija/Faza5/img/Trello.png)                                               |
| [Postman](https://www.postman.com/)                                                        | Alat za testiranje API-a, slanje HTTP request-ova                                                                                                                                                                                                    |
| [Visual Studio Code](https://code.visualstudio.com/)                                       | Najpopularniji code editor trenutno, veoma fleksibilan što se tiče podrške jezika, kao i personalizovanja samog okruženja                                                                                                                            |
| [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)     | Ekstenzija za VSCode, formatira kod prilikom svakog čuvanja                                                                                                                                                                                          |
| [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur)                  | Ekstenzija za VSCode, intellisense za Vue.js, omogućuje Prettier da radi za .vue fajlove                                                                                                                                                             |
| [MS Teams](https://www.microsoft.com/en/microsoft-365/microsoft-teams/group-chat-software) | Alat za kolaboraciju, video i audio sastanke, mogućnost deljenja ekrana...                                                                                                                                                                           |
| [Git Bash](https://git-scm.com/downloads)                                                  | Bolji shell program od Windows CMD-a, za korišćenje Git-a                                                                                                                                                                                            |

---

## Prototip

Prototip iz faze 2 našeg projekta možete videti [ovde](https://ksenijam14.github.io/) kao hostovanu verziju, ili u okviru foldera "Dokumentacija" ovog repo-a.

---

## Instalacija projekta

### Preduslovi:

- Instaliran [GIT CLI](https://git-scm.com/)
- Instaliran [NodeJS](https://nodejs.org/en/) (i npm koji ide uz njega)
- Instaliran [MongoDB](https://www.mongodb.com/)

---

Kloniranjem repo-a komandom

```bash
git clone https://github.com/Jogurat/daljinac .
```

Onda u okviru root foldera, pokretanje komande:

```bash
npm i
```

instalira sve dependecy-e koji se nalaze u package.json fajlu

Dalje, prelazimo u "client" folder i takodje instaliramo dependecy-e komandama:

```bash
cd client
npm i
```

---

## Pokretanje projekta

:warning: Za pravilno pokretanje projekta takodje su potrebna dva .env fajla. Za njih mi se obratite privatno (putem Githuba ili slicno).

### Pokretanje backend-a

Backend pokrecemo iz root foldera komandom:

```bash
npm start
```

### Pokretanje frontend-a

Frontend ispocetka build-ujemo iz "client" foldera komandama:

```bash
cd client
npm run watch
```

(Prva komanda prelazi iz root foldera u "client" folder)

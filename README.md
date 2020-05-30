# Daljinac - PSI Projekat tima PAKT

![logo](/Dokumentacija/Faza5/img/Logo.png)

Ovaj repozitorijum predstavlja projektni zadatak tima **PAKT**.
Članovi tima su:

- **P**etar Ostojić - Jogurat
- **A**leksa Jovanović - Aleksa-Jovanovic
- **K**senija Mladenović - ksenijam14
- **T**eodora Nedeljković - teodoranedeljkovic355

---

## Cilj projekta

Cilj ovog projekta je da olakša života ljudi koji žive u potkrovljima, a osuđeni su na život bez pametne klime. Kako leti temperature dostižu neverovatno visoke brojke, scenario vraćanja kući je sledeći:

Ući u stan -> Popeti se na potkrovlje -> Upaliti klimu -> Vratiti se dole ->

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

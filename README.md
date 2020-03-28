# Daljinac - PSI Projekat tima PAKT

Ovaj repozitorijum predstavlja projektni zadatak tima **PAKT**.
Članovi tima su:

- **P**etar Ostojić - Jogurat
- **A**leksa Jovanović - Aleksa-Jovanovic
- **K**senija Mladenović - ksenijam14
- **T**eodora Nedeljković - teodoranedeljkovic355

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

### Pokretanje backend-a

Backend pokrecemo iz root foldera komandom:

```bash
npm start
```

### Pokretanje frontend-a

Frontend pokrecemo iz "client" foldera komandama:

```bash
cd client
npm run serve
```

(Prva komanda prelazi iz root foldera u "client" folder)

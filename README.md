# Tesena workshop: Cypress
Repository for Tesena fest online workshop on the topic of test automation with Cypress.io

## Author
My name is Filip. I’m a QA lead in [Slido](https://www.sli.do/) and a [Cypress ambassador](https://cypress.io/ambassadors/)

## What you’l find here
You’ll find the application we are going to be testing and all education materials for the workshop.

## Trello app
App is a clone of popular application Trello. You can create boards, lists and tasks. You can change state of your board and task, set deadlines and upload pictures.

### Installation
Very simple:
1. `npm install`
2. `npm start`
3. Open the app on http://localhost:3000

### Database
Database is just a symple json file that you can find in `trelloapp/public/data/data.json`. Uploaded images are saved to `trelloapp/public/images`.

### Špeciálne API endpointy určené na uľahčenie práce s aplikáciou
- Toto je zoznam endpointov, ktoré nevolá samotná aplikácia, no umožňujú meniť stav databázy podľa požiadaviek
- tieto endpointy nevyžadujú autorizáciu
---
#### POST /reset
Odstráni všetky boardy, listy, tasky a userov

---
#### DELETE /boards
Odstráni všetky boardy, zoznamy a tasky

---
#### DELETE /lists
Odstráni všetky zoznamy a tasky

---
#### DELETE /tasks
Odstráni všetky tasky

---
#### DELETE /users
Odstráni všetkých userov

---
### Ostatné API endpointy
- zoznam štandardných endpointov, ktoré sa vyskytujú pri interakcii s aplikáciou
---
#### GET /boards
Vráti zoznam všetkých verejných a vlastných boardov.
##### príklad API odpovede (neautorizovaný user):
```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 27315982008,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 14254049205,
    "starred": true,
    "created": "2020-09-01"
  }
]
```
##### príklad API odpovede (neautorizovaný user):
```json
[
  {
    "name": "new project",
    "user": 0,
    "id": 27315982008,
    "starred": false,
    "created": "2020-09-01"
  },
  {
    "name": "moon landing 2",
    "user": 0,
    "id": 14254049205,
    "starred": true,
    "created": "2020-09-01"
  },
  {
    "name": "private board",
    "user": 1, // user id autora boardu
    "id": 6606529940,
    "starred": false,
    "created": "2020-09-01"
  }
]
```
---
#### POST /boards
Vytvorí nový board
##### príklad tela API volania:
```json
{
  "name": "moon landing 2"
}
```
##### príklad odpovede API:
```json
{
  "name": "moon landing 2",
  "user": 1,
  "id": 22559285486,
  "starred": false,
  "created": "2020-09-01",
  "lists": [],
  "tasks": []
}
```
---
#### GET /boards/{boardId}
Vráti detaily boardu s id `{boardId}` spolu s priradenými listami a taskami
##### príklad API odpovede (neautorizovaný user):
```json
{
  "name": "new project",
  "user": 0,
  "id": 27315982008,
  "starred": false,
  "created": "2020-09-01",
  "lists": [
    {
      "boardId": 27315982008,
      "title": "todo list",
      "id": 2576814910,
      "created": "2020-09-01"
    }
  ],
  "tasks": [
    {
      "boardId": 27315982008,
      "description": "",
      "completed": false,
      "listId": 2576814910,
      "title": "Buy milk",
      "id": 3403093058,
      "created": "2020-09-01",
      "deadline": "2020-09-04"
    }
  ]
}
```
---
#### PATCH /boards/{boardId}
Upraví board s ID `{boardId}`. Možno zmeniť názov, alebo ohviezdičkovanie boardu
##### príklad tela API volania:
```json
{
  "starred": true
}
```
---
#### DELETE /boards/{boardId}
Odstráni board s ID `{boardId}`

---
#### POST /lists
Vytvorí nový list (zoznam)
##### príklad tela API volania
```json
{
  "boardId": {boardId}, // povinný údaj
  "title": "to do"
}

```
---
#### PATCH /lists/{listId}
Upraví list s ID `{listId}`
##### príklad tela API volania
```json
{
  "title": "renamed list"
}

```
---
#### DELETE /lists/{listId}
Odstráni list s ID `{listId}`

---
#### POST /tasks
Vytvorí nový task
##### príklad tela API volania
```json
{
  "boardId": {boardId}, // povinný údaj
  "listId": {listId}, // povinný údaj
  "title": "buy milk"
}

```
---
#### PATCH /tasks/{taskId}
Upraví task s ID `{taskId}`
##### príklad tela API volania
```json
{
  "completed": true
}

```
---
#### DELETE /tasks/{taskId}
Odstráni task s ID `{taskId}`

---
#### GET /users
Vráti informácie o autorizovanom používateľovi.
##### príklad API odpovede (autorizovaný user):
```json
{
  "user": {
    "email": "filip@example.com",
    "password": "$2a$10$MV7UPL.5O8uoIUvdmCOXMuOIJ/mLA3FzWC3HsuYIwspKuEWe9Y6Ae",
    "id": 1
  }
}
```
---
#### POST /signup
Vytvorí nového používateľa
##### príklad tela API volania:
```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```
#### POST /welcomeemail
Odošle požiadavku na server o zaslanie uvítacieho emailu.
##### príklad tela API volania:
```json
{
  "email": "filip@example.com"
}
```
---
#### POST /login
Prihlási používateľa
##### príklad tela API volania:
```json
{
  "email": "filip@example.com",
  "password": "nbusr1234"
}
```
---
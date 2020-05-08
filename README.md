# idp

Aplciatie de vanzare-cumparare care permite vizualizarea anunturilor, inregistrare cont, logare, adaugare anunt, filtrare anunturi, stergere anunt.


Serviciile mele:

1) mongo

  -Serviciul pentru baza de date.
  -Foloseste serviciul extern Mongo.
  
2) mongo-express

  -Serviciu auxiliar pentru vizualizarea si editarea bazei de date.
  -Foloseste serviciul extern mongo-express.
  
3) backend_idp

  -Serviciu implementat.
  -Este serverul acestei aplicatii, realizat in nodejs.
  -Asculta la portul 3001, asteptand cereri, se conecteaza la baza de date si efectueaza operatii CRUD asupra acesteia.

4) frontend_idp

  -Serviciu implementat.
  -Realizat folosind React.
  -Reprezinta UI-ul aplicatiei si transmite cereri catre server.
  -Se poate accesa la adresa localhost:3000

5) helperdb

  -Serviciu implementat.
  -Realizat folosind nodejs. Se ocupa de initializarea/popularea bazei de date.
  
6) metrics_idp
  -Serviciu de monitorizare
  -Realizat folosing prometheus
  

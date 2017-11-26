# Front-end Test - Farm@

## Opis problema

Funkcionalnost koju treba realizovati je bazirana na postojecem proizvodu ING Software kompanije.
Proizvod u pitanju je Farm@, aplikacija koja se bavi monitoringom i vodjenjem stocarskih farmi.
Deo aplikacije koji je potrebno konkretno implementirati je podsekcija Feeds koja se nalazi u sekciji Nutritions.
Glavna funkcionalnost ove sekcije je regulisanje razlicitih tipova hraniva koja se koriste na stocarskoj farmi.

## Funckionalni zahtevi

* Korisnik se prvo mora ulogovati u aplikaciju
* Nakon pristupa sistemu korisnik vidi tabelu po uzoru na tabelu prisutnu na Feeds strani
* Potrebno je ispostovati sve mogucnosti filtriranja i pretrazivanja hraniva u tabeli kao i paginaciju kod tabele
* Klikom na "edit" opciju nekog od unosa u tabeli se pristupa formi za promenu informacija o hranivu
* Klikom na "Add feed" dugme se pristupa istom tipu forme kao i kod "edit" opcije, samo za dodavanje novog hraniva
* Kod forme za dodavanje(Add feed)/izmenu(edit) hraniva treba ispostovati zavisnosti izmedju polja u formi
* Kod Nutritions sekcije u formi za dodavanje/izmenu hraniva je potrebno dodati samo prvi red polja ostalo ignorisati radi sazetosti. Ova polja trebaju da imaju predefinisane vrednosti (po sopstvenom nahodjenju) u zavisnosti od toga sta je odabrano za Feed Category i Feed Name polja.
* Klikom na dugme "Add", na ovoj formi, korisnik se vraca na stranu sa tabelom svih hraniva gde se sada nalazi i novo dodato hranivo
* Potrebno je ispostovati layout aplikacije, sto ukljucuje header i sidebar (u sidebaru ce biti samo Nutritions sa Feeds podkategorijom), kao i prisutne stilizacije elemenata.
* Za sve nedoumice koristiti Farm@ aplikaciju kao vodic

## Ne-funkcionalni zahtevi

* Aplikacija mora biti full responsive sa minimalnom rezolucijom prikaza od 320px sirine. Responsive je moguce uraditi po sopstvenom nahodjenju.
* Koriscenje CSS preprocesora kao sto su SASS ili LESS nije obavezno ali ce se smatrati bonusom
* Moguce je koriscenje animacija po sopstvenom nahodjenju.
* Koriscenje aktuelnih biblioteka i framework-a (React, Angular, Vue) nije neophodno ali ce se smatrati bonusom
* Za skladistenje podataka potrebno je koristiti neki od postojecih Storage mehanizama na front-endu (localStorage, IndexedDB i sl)

## Pristup Farm@ aplikaciji

Uz pomoc sledecih kredencijala mozete pristupiti Development okruzenju Farm@ aplikacije gde je moguce upoznati se sa zatrazenim funkcionalnostima.

URL: http://dev.farm-at.com:9090/feeds/
Username: mailto:farm_owner@farm-at.com
Password: 123456

## Rezultat testa

Kao rezultat odradjenog testa potrebno je predati source code aplikacije putem nekog Git servisa (GitLab, GitHub, BitBucket ili sl)

## Kontakt

Za sva pitanja i nedoumice kontaktirati Nemanju na nemanja.nikolic@ingsoftware.com.
Postavljanje pitanja se nece smatati negativnom karakteristivom vec se ohrabruje u cilju sto boljeg upoznavanja kandidata i demonstriranja znanja.
Srecno :)
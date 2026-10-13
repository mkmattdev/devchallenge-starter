---
name: konwencje-projektu
description: Konwencje kodu devchallenge. Wczytaj przy podpowiedzi, review i ocenie rozwiązania kursanta.
---

# Konwencje projektu devchallenge

Poniższe zasady obowiązują w całym kodzie projektu od pierwszej lekcji.

## Nazwy i organizacja

- Projekt Nuxt jest w katalogu głównym repozytorium. Ścieżki kodu `app/`,
  `server/`, `shared/`, `db/` i testów są względem niego; tam też wykonujemy
  polecenia npm.
- Kod, identyfikatory, nazwy plików i ścieżki aplikacji są po angielsku.
  Polskie pozostają treści interfejsu i materiały dla kursanta.
- Nazwa wskazuje przedmiot: `isAnswerCorrect`, `challengeValidation`,
  `inputValue`, `selectedValue`, `creatorErrorMessage`. Nie używamy
  ogólników `isCorrect`, `validation` czy `model` dla własnego stanu.
- Boolean zaczyna się od `is`, `has` albo `was`. Funkcja logiczna może też
  zaczynać się od `matches` lub `have`.
- Bez własnych skrótów typu `i`, `idx`, `e`, `err`, `tmp`, `val`.
  Nazwy narzucone przez bibliotekę zachowujemy w jej kontrakcie. Lokalne wiązanie
  nazywamy dziedzinowo, np. `const { data: challengeRecord, error: databaseError }`.
- Composition API grupujemy według odpowiedzialności: stan, wartości pochodne
  i operacje jednej funkcji interfejsu pozostają blisko siebie. Nie tworzymy
  sekcji „wszystkie ref”, „wszystkie computed”, „wszystkie funkcje”.
- Nie wydzielamy dodatkowych composables wyłącznie dla porządku. Zależności są
  dostępne przed użyciem.
- Typy mają PascalCase, bez przedrostków `I` i `T`. Stałe mają
  `SCREAMING_SNAKE_CASE`; liczby z jednostką, np. `REQUEST_TIMEOUT_MS`.
- Plik testu nazywa sprawdzane zachowanie lub endpoint. Osobne scenariusze,
  przygotowanie, wykonanie i asercje muszą być łatwe do odczytania.

## TypeScript, walidacja i importy

- TypeScript jest od L01. Zaczynamy od wnioskowania typów i dodajemy adnotacje,
  kiedy są potrzebne. Każdy skrypt Vue używa `<script setup lang="ts">`.
- Nie stosujemy `any`, rzutowań `as`, `as const` ani rzutowań nawiasami ostrymi.
  Używamy adnotacji, `satisfies`, zawężania i walidacji nieznanych danych.
- Typ przy schemacie Zod pochodzi z `z.infer`; nie utrzymujemy drugiego modelu
  ręcznie. Przed wprowadzeniem Zod jeden typ opisuje już znane dane.
- Złożone schematy składamy z nazwanych reguł, np. `answerIndexSchema` i
  `correctAnswerIndexesSchema`. Nie chowamy reguł w wielopiętrowych łańcuchach.
- Importy między katalogami używają aliasów `#shared`, `#server`,
  `#test-support`, `#backend-test-support` i `#e2e-support`, gdy dany katalog
  pojawia się w kursie. `~/` wskazuje kod aplikacji. Importy wykonywane natywnie
  przez Node mają rozszerzenie `.ts`. Alias musi działać w uruchomieniu i testach.
- Używamy eksportów nazwanych. Wyjątkami są handlery Nitro oraz pliki
  konfiguracyjne, których narzędzia wymagają `export default`.

## Vue i formatowanie

- Tożsama nazwa propa i wartości używa skrótu, np. `:is-last-question`.
- Funkcje strzałkowe przypisujemy do `const`; `let` tylko dla zmiennej wartości.
- Używamy `===`. Nieużywany błąd to `catch` bez zmiennej; używany ma nazwę
  wskazującą operację, np. `saveError`.
- Podwójne cudzysłowy, średniki, 100 znaków, wcięcie 2 spacje — pilnuje Prettier.
  Zagnieżdżone elementy szablonu zapisujemy w osobnych liniach.
- Pustą linią oddzielamy deklaracje stanu oraz etapy funkcji: walidację,
  przygotowanie danych, żądanie i przyjęcie wyniku. Instrukcje jednego kroku
  zostają razem. Prettier zachowuje odstępy, ale sam ich nie wyznacza.
- W `<pre>` sprawdzamy również wynikowy tekst: formatowanie źródła nie może
  dodać spacji ani nowych linii do pokazywanego kodu.
- Komentarz wyjaśnia powód decyzji; nie powtarza instrukcji kodu.

## Ocena kodu

Czytaj kod przed oceną. Nie wymagaj wiedzy z przyszłej lekcji. Nie dodawaj
bibliotek ani abstrakcji dla samej wygody.

# DevChallenge: starter

Punkt startowy kursu DevChallenge: aplikacja quizowa w Nuxt 4, Vue i TypeScript,
rozwijana lekcja po lekcji. Na starcie jest tylko konfiguracja projektu i jeden nagłówek.

## Zanim zaczniesz

Potrzebujesz Node.js 24 lub nowszego, npm i Gita. Sprawdź, co masz:

```sh
node --version
git --version
```

Node pobierz z [nodejs.org](https://nodejs.org/en/download). Z `nvm` wystarczy `nvm install`,
wersja jest w `.nvmrc`.

## Start

Nie rób forka. Fork publicznego repozytorium też jest publiczny, a Twoje repozytorium ma być
prywatne.

1. Na GitHubie, na stronie `mkmattdev/devchallenge-starter`, kliknij **Use this template →
   Create a new repository**. Jako nazwę wpisz `devchallenge-starter`, zaznacz **Private**
   i kliknij **Create repository**.
2. W swoim nowym repozytorium dodaj prowadzącego jako współpracownika: **Settings →
   Collaborators → Add people** → `mkmattdev`. Dzięki temu kod kolejnych lekcji trafia prosto
   do Twojego repozytorium.
3. Sklonuj swoje repozytorium i uruchom aplikację:

```sh
git clone https://github.com/TWOJ_LOGIN/devchallenge-starter.git
cd devchallenge-starter
npm ci
npm run dev
```

Otwórz adres podany w terminalu. Zobaczysz stronę z nagłówkiem „Projekt gotowy do pierwszej
lekcji”. Ctrl+C zatrzymuje serwer.

Jeśli zaczynasz od Kursu 2 albo 4, zrób te same kroki. Potem prowadzący wyśle Ci jednym commitem
gotowy kod wcześniejszych kursów: zrób `git pull` i `npm ci`, a następnie zacznij od pierwszej
lekcji swojego kursu.

## Praca w kursie

Kod kolejnych lekcji dostajesz commitami prowadzącego. Pracujesz na gałęzi `main`, bez tagów
i innych gałęzi.

- Po swojej pracy: `git add -A`, `git commit -m "..."`, `git push`.
- Przed lekcją: `git status` ma być czysty, potem `git pull`.
- Pliki od prowadzącego do lekcji przychodzą tym samym `git pull`. Po zmianie bibliotek powtórz `npm ci`.

Swoją wersję zadania porównasz z wersją prowadzącego: jego commit na GitHubie pokazuje różnice.

## Sprawdzanie

```sh
npm run lint
npm run typecheck
npm run format:check
```

ESLint, typy i formatowanie (Prettier). Gdy `npm run format:check` wskaże pliki, `npm run format`
sam je poprawi. `npm run check` łączy te kontrole z testami i buildem, ale na starcie
kończy się komunikatem „No test files found”, bo testów jeszcze nie ma. Pierwszy test pojawi
się w kursie i od tej pory `npm run check` przechodzi w całości.

Konwencje kodu obowiązujące od pierwszej lekcji są w `.claude/skills/konwencje-projektu/SKILL.md`.

## Gdyby coś nie działało

- `git commit` prosi o imię i e-mail: ustaw podpis w tym repozytorium i powtórz commit.

  ```sh
  git config user.name "Twoje imię"
  git config user.email "twoj-adres@example.com"
  ```

- `git clone` albo `git push` pyta o hasło: na Windows otworzy się logowanie GitHub
  w przeglądarce; na macOS w miejscu hasła wklej token (GitHub → **Settings → Developer
  settings → Personal access tokens → Fine-grained tokens**, dostęp tylko do Twojego
  repozytorium, **Contents: Read and write**).
- `git pull` odmawia przez niezapisane zmiany: najpierw `git add -A`, `git commit`, `git push`.
- Windows, PowerShell blokuje npm: otwórz zwykły `cmd` zamiast PowerShella.
- Instalacja się wywala albo trwa bardzo długo: projekt na Pulpicie lub w Dokumentach może
  synchronizować OneDrive. Przenieś go na przykład do `C:\dev`.

---

DevChallenge · Mateusz Karwowski · mattdev.com.pl

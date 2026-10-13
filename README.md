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

1. Zrób forka tego repozytorium na swoje konto GitHub (**Fork → Create fork**).
2. W forku dodaj prowadzącego jako współpracownika: **Settings → Collaborators → Add people**
   → `mkmattdev`. Dzięki temu kod kolejnych lekcji trafia prosto do Twojego repozytorium.
3. Sklonuj forka i uruchom aplikację:

```sh
git clone https://github.com/TWOJ_LOGIN/devchallenge-starter.git
cd devchallenge-starter
npm ci
npm run dev
```

Otwórz adres podany w terminalu. Zobaczysz stronę z nagłówkiem „Projekt gotowy do pierwszej
lekcji”. Ctrl+C zatrzymuje serwer.

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
npm run format
```

ESLint, typy i Prettier. `npm run check` łączy te kontrole z testami i buildem, ale na starcie
kończy się komunikatem „No test files found”, bo testów jeszcze nie ma. Pierwszy test pojawi
się w kursie i od tej pory `npm run check` przechodzi w całości.

Konwencje kodu obowiązujące od pierwszej lekcji są w `.claude/skills/konwencje-projektu/SKILL.md`.

## Gdyby coś nie działało

- `git push` pyta o hasło: na Windows otworzy się logowanie GitHub w przeglądarce; na macOS
  w miejscu hasła wklej token (GitHub → **Settings → Developer settings → Fine-grained tokens**,
  dostęp tylko do tego repozytorium, **Contents: Read and write**).
- `git pull` odmawia przez niezapisane zmiany: najpierw `git add -A`, `git commit`, `git push`.
- Windows, PowerShell blokuje npm: otwórz zwykły `cmd` zamiast PowerShella.
- Instalacja się wywala albo trwa bardzo długo: projekt na Pulpicie lub w Dokumentach może
  synchronizować OneDrive. Przenieś go na przykład do `C:\dev`.

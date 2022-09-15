## Utilizando TS

- `npx tsc --init`

## Utilizando Prisma

no linux é necessário instalar o sqlite3

- `sudo apt install sqlite3` - Sugerido na instalação da extensão("alexcvzz.vscode-sqlite") do VSCode, isso para visualizar o banco no VSCode.

Comandos iniciais

- `npx prisma init -h`
- `npx prisma init -datasource-provider SQLite`

Quando adicionar o prisma ao projeto colocar o script de iniciar o servidor com o seguinte parâmetro:

- `"scripts": { "dev": "tsnd --exit-child src/server.ts" },`

Gerar as migrations que é a estrutura do banco

- `npx prisma migrate dev`

executar o prisma em um "playground"

- `npx prisma studio`

## Entidades

### Game

- id
- title
- bannerUrl

### Ads

- id
- gameId
- name
- yearsPlaying
- discord
- weekDays
- hourStart
- hourEnd
- useVoiceChannel
- createAt

## Casos de uso

- Listagem de games
- Criação de novo anúncio
- Listagem de anúncios por games
- Buscar discord pelo ID do anúncio

Fazer futuramente:

- Validações com ZOD (Javascript)

# LinkUp Landing Page — Next.js 15 (React 19)

Guia prático para rodar o projeto localmente e simular produção (o mesmo fluxo do deploy no Railway).

> **Stack:** Next.js 15 · React 19 · TypeScript · Tailwind CSS 4 · Radix UI

---

## Requisitos

* **Node.js** 20 **ou** 22 (LTS). Recomendo 22.
* Um gerenciador de pacotes: **npm** *ou* **pnpm** (use somente um).
* (Opcional) **nvm** para gerir a versão do Node.

### Usando nvm (opcional)

```bash
nvm install 22
nvm use 22
node -v
```

---

## 1) Instalação

> Escolha **um** gerenciador e siga apenas o bloco dele.

### Opção A — **npm** (recomendado se o repositório tem `package-lock.json`)

```bash
npm install
```

**Dica:** padronize no `package.json` (opcional):

```json
{
  "packageManager": "npm@11.5.2",
  "engines": { "node": ">=20.10" }
}
```

### Opção B — **pnpm**

```bash
corepack enable
corepack prepare pnpm@9.12.3 --activate
pnpm install
```

**Dica:** padronize no `package.json` (opcional):

```json
{
  "packageManager": "pnpm@9.12.3",
  "engines": { "node": ">=20.10", "pnpm": ">=9.0.0" }
}
```

> ⚠️ **Não misture** npm e pnpm. Se trocar, apague `node_modules` e o *lock* do gerenciador antigo antes de instalar de novo.

---

## 2) Variáveis de ambiente

Crie um arquivo **`.env.local`** na raiz. O Next carrega esse arquivo no `dev`, `build` e `start`.
Valores que começam com `NEXT_PUBLIC_` ficam disponíveis no browser.

```dotenv
# Exemplos — ajuste conforme seu caso
NEXT_PUBLIC_APP_NAME=LinkUp
# API_URL=http://localhost:3000/api
```

---

## 3) Execução local

### Desenvolvimento (HMR)

```bash
# npm
npm run dev
# ou pnpm
pnpm dev
```

Abrirá em **[http://localhost:3000](http://localhost:3000)**.

### Produção (simular ambiente do deploy)

```bash
# limpeza opcional
rm -rf .next node_modules

# npm
npm ci
npm run build
npm run start

# ou pnpm
pnpm install
pnpm build
pnpm start
```

#### Alterar a porta

```bash
# via env
PORT=4000 npm run start
# ou passando argumento ao next start
npm run start -- -p 4000
# pnpm start -- -p 4000
```

---

## 4) Scripts do projeto (package.json)

| Script    | Comando         | O que faz                                         |
| --------- | --------------- | ------------------------------------------------- |
| **dev**   | `npm run dev`   | Inicia o servidor de desenvolvimento (HMR).       |
| **build** | `npm run build` | Gera o build de produção do Next.                 |
| **start** | `npm run start` | Sobe o servidor em produção (usa o build gerado). |
| **lint**  | `npm run lint`  | Roda o ESLint.                                    |

> Se estiver usando **pnpm**, troque `npm run` por `pnpm` (ex.: `pnpm build`).

---

## 5) Problemas comuns e soluções

### A) `ERR_PNPM_OUTDATED_LOCKFILE` (CI/Railway)

O Railway executa `install` com **frozen-lockfile** por padrão. Se o *lock* não reflete o `package.json`, dá erro.

* **Com npm**:

  ```bash
  rm -rf node_modules package-lock.json
  npm install
  git add package-lock.json
  git commit -m "chore: update npm lockfile"
  ```
* **Com pnpm**:

  ```bash
  rm -rf node_modules pnpm-lock.yaml
  corepack enable
  corepack prepare pnpm@9.12.3 --activate
  pnpm install
  git add pnpm-lock.yaml
  git commit -m "chore: update pnpm lockfile"
  ```

> Em CI, **não** use `--no-frozen-lockfile` como solução permanente. Atualize e versione o *lockfile* corretamente.

### B) Conflitos de *peerDependencies* (ex.: React 19)

Se algum pacote não suportar React 19 oficialmente, atualize para uma versão compatível. Exemplo real do projeto:

```bash
npm i vaul@^1.1.2 react@^19 react-dom@^19
# ou pnpm add vaul@^1.1.2 react@^19 react-dom@^19
```

Depois, apague `node_modules` + lockfile e reinstale.

### C) Versão do Node diferente do Railway

Garanta Node 20/22 localmente e no deploy:

* crie um `.nvmrc` com `22` (opcional);
* defina `"engines"` no `package.json` (veja acima).

### D) Mistura de gerenciadores (npm ↔ pnpm)

Escolha **um** gerenciador e remova o lock do outro:

```bash
# se for usar npm
rm -f pnpm-lock.yaml
# se for usar pnpm
rm -f package-lock.json
```

---

## 6) Deploy rápido no Railway (resumo)

1. **Versione o lockfile** do gerenciador escolhido (`package-lock.json` ou `pnpm-lock.yaml`).
2. (Opcional) Adicione `"packageManager"` e `"engines"` no `package.json`.
3. Configure variáveis de ambiente no Railway (as do `.env.local`, exceto segredos).
4. O Nixpacks detecta Next.js automaticamente. Com `package-lock.json`, usará **npm**; com `pnpm-lock.yaml`, usará **pnpm**.
5. Comandos padrão:

    * Install: `npm ci` (ou `pnpm install --frozen-lockfile`)
    * Build: `npm run build` (ou `pnpm build`)
    * Start: `npm run start` (ou `pnpm start`)

---

## 7) Estrutura sugerida

```
.
├─ public/              # Assets estáticos
├─ src/                 # app, components, hooks, lib, styles, etc.
├─ package.json
├─ tsconfig.json
├─ next.config.js
├─ postcss.config.js
├─ tailwind.config.js
└─ .env.local           # Variáveis locais (não versionado)
```

---

## 8) Checklist

* [ ] Node 20/22 ativo (`node -v`)
* [ ] Apenas **um** gerenciador (npm **ou** pnpm)
* [ ] Lockfile versionado (coerente com o `package.json`)
* [ ] `.env.local` criado (se necessário)
* [ ] `npm run dev` acessível em [http://localhost:3000](http://localhost:3000)

---

Qualquer dúvida, abra uma issue ou me chame. Bom código! 🚀

<h1 align="center">exitqms.pages.dev</h1>

<p align="center">
  <b>See who's in line before you buy.</b><br>
  Live analytics for every <a href="https://qms.finance">QMS Network</a> launch.
</p>


<p align="center">
  <a href="https://exitqms.pages.dev"><b>exitqms.pages.dev</b></a> ·
  <a href="https://exitqms.pages.dev/methodology">Methodology</a> ·
  <a href="https://exitqms.pages.dev/state">State of QMS Network</a> ·
  <a href="https://x.com/ExitQms">X</a>
</p>

---

Charts show price. They don't show **people**. Every token on QMS Network is a line of real holders walking toward the same door: graduation into a Uniswap V4 pool. exitqms.pages.dev reads that line straight from the chain and tells you who stands in it: snipers, bundles, the dev's bag, real volume and how close the door is. It shows **signals, not verdicts**.

## Features

| | What you get |
|---|---|
| **Line Health** | A–F grade for the front of the line: known snipers and farm groups among the first 20 buyers, dev sells, early walk-outs. |
| **Bundle check** | Supply bought in the same transaction or block, launch-block and first-minute buyers, shared funders, with tx links as proof. |
| **Who's selling to you** | How much of the line sits in profit (1×, 2×, 3×+), the price if they all sold now, break-even after fees, price impact by size. |
| **Real volume** | Volume without wash trades and bots, buys per buyer, bot share over 1h / 24h / all time. |
| **Holders** | Top 10 without pool and plumbing, gifted vs bought supply, fresh wallets, funding clusters. |
| **Wallet profiles** | Any address: positions with cost and PnL, early entries, sniper / farm / dev tags, who funded it. |
| **Dev passport** | Every launch by a creator, how many graduated, whether and how fast they sold, linked wallets. |
| **Graduation watch** | Tokens close to the door with live progress and ETA, plus what happened right after graduation. |
| **State of QMS Network** | Launchpad-wide stats: launches and graduations per day, time to the door, sniper share, top volume. |
| **Share cards** | One-click pixel cards for any token, wallet or dev, ready to post. |

Every analytics view is open to everyone, with no wallet and no token required.

## How it works

- **Chain first.** Holders, entries, sells and bundles are rebuilt from QMS Network logs (bonding-curve and Uniswap V4 events). The QMS Network API is used for lists and metadata, Blockscout for wallet history and funders.
- **Early Index.** An hourly job reads the first buyers of every launch over the last 7 days and labels wallets that keep entering first without beating chance (snipers) or that keep entering together (farm groups).
- **Unknown is never zero.** If a source doesn't answer, the site says so and shows "—" with a reason. It never shows a clean 0.
- Details for every number: [exitqms.pages.dev/methodology](https://exitqms.pages.dev/methodology).

## Tech

Next.js 16 (App Router) · React 19 · TypeScript · CSS Modules · viem · Privy (optional sign-in) · Upstash Redis (optional cache) · `next/og` for share cards.

## Run locally

```bash
git clone https://github.com/IpongJkBase/ExitQms.git
cd ExitQms
npm install --legacy-peer-deps
cp .env.example .env.local   # everything in it is optional
npm run dev                  # http://localhost:3000
```

## Disclaimer

Independent community project on the QMS Network testnet. Not affiliated with QMS Network or QMS Network. Testnet tokens have no value. Nothing here is financial advice: these are signals, not verdicts.

## License

[MIT](LICENSE)
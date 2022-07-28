interface DBtype {
  logoPath: string;
  title: string;
  price: string;
  rate: number;
  popularPairs: string[];
}

const logoPaths = {
  bitcoin: "/logos/Bitcoin.svg",
  solana: "/logos/Solana.svg",
  etherium: "/logos/Ethereum.svg",
  binance: "/logos/Binance.svg",
  shiba: "/logos/SHIBA.svg",
};
export const db: DBtype[] = [
  {
    logoPath: logoPaths.bitcoin,
    title: "Bitcoin (BTC)",
    price: "$31,812.80",
    rate: 10,
    popularPairs: [logoPaths.solana, logoPaths.etherium, logoPaths.binance],
  },
  {
    logoPath: logoPaths.solana,
    title: "Solana (SOL)",
    price: "$32.83",
    rate: -12.32,
    popularPairs: [logoPaths.bitcoin, logoPaths.etherium, logoPaths.binance],
  },
  {
    logoPath: logoPaths.etherium,
    title: "Ethereum (ETH)",
    price: "$1,466.45",
    rate: -11.93,
    popularPairs: [logoPaths.solana, logoPaths.bitcoin, logoPaths.binance],
  },
  {
    logoPath: logoPaths.binance,
    title: "Binance USD (BUSD)",
    price: "$1,466.45",
    rate: 0.26,
    popularPairs: [logoPaths.solana, logoPaths.etherium, logoPaths.binance],
  },
  {
    logoPath: logoPaths.shiba,
    title: "Shiba Inu (SHIB)",
    price: "$0.00000001948",
    rate: -8.1,
    popularPairs: [logoPaths.solana, logoPaths.etherium, logoPaths.binance],
  },
];

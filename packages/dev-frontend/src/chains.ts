import { Chain } from '@wagmi/core'
 
export const base_goerli = {
  id: 84_531,
  name: '',
  network: 'base_goerli',
  nativeCurrency: {
    decimals: 18,
    name: 'Ethereum',
    symbol: 'ETH',
  },
  rpcUrls: {
    public: { http: ['https://goerli.base.org'] },
    default: { http: ['https://goerli.base.org'] },
  },
  blockExplorers: {
    etherscan: { name: 'BaseScan', url: 'https://goerli.basescan.org' },
    default: { name: 'BaseScan', url: 'https://goerli.basescan.org' },
  },
} as const satisfies Chain

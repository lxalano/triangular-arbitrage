import { ITriangle } from './trading';

export interface IRank {
  stepA: string;
  stepB: string;
  stepC: string;
  rate: number;
  fee: number[];
  profitRate: number[];
  ts: number;
}

/**
 * 三角组合边的成交记录
 */
export interface ITradeEdge {
  pair: string;
  side: 'buy' | 'sell';
  // 成交价格
  price: number;
  // 报单数量
  amount: number;
  // 手续费（未折扣）
  // 报单数量(BigNumber)
  bigAmount: BigNumber;
  fee: string;
  // 用时
  timecost: string;
}

export interface ITradeTriangle {
  _id?: string;
  a: ITradeEdge;
  b: ITradeEdge;
  c: ITradeEdge;
  // 套利货币
  coin: string;
  // 起始买入资金
  before: number;
  // 套利后获得资金
  after: number;
  profit: string;
  rate: string;
  ts: number;
}

import { Token } from '@uniswap/sdk-core';
import { FeeAmount } from '../constants';
export declare function computePoolAddress({ factoryAddress, tokenA, tokenB, fee, initCodeHashManualOverride }: {
    factoryAddress: string;
    tokenA: Token;
    tokenB: Token;
    fee: FeeAmount;
    initCodeHashManualOverride?: string;
}): string;

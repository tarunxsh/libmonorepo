import { isEven } from '@omgdev/is-even';

export function isOdd(i: number): boolean {
    return isEven(i) === false;
}
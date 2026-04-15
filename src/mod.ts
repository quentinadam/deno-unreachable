import { AssertionError } from '@quentinadam/assert';

export function unreachable(_: never): never {
  throw new AssertionError('Unreachable');
}

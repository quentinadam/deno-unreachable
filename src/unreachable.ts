import { AssertionError } from '@quentinadam/assert';

export default function unreachable(_: never): never {
  throw new AssertionError('Unreachable');
}

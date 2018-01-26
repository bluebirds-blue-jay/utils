import { Omit } from '../../src/types/omit';

type TOriginal = {
  forget: string;
  required: string;
  optional?: string;
};

type TOmitted = Omit<TOriginal, 'forget'>;

const test: TOmitted = { required: 'foo' }; // `optional` remains optional
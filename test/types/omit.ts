type TOriginal = {
  forget: string;
  required: string;
  optional?: string;
};

type TOmitted = Omit<TOriginal, 'forget'>;

const dummy: TOmitted = { required: 'foo' }; // `optional` remains optional
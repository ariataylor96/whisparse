import { split } from 'shlex';

const parse = (input = '', { prefix = '!' } = {}) => {
  if (!input || !input.startsWith(prefix)) {
    return null;
  }

  const parsed = split(input);

  if (!parsed.length) {
    return null;
  }

  const [command, ...args] = parsed;

  const argsString = input.replace(`${command} `, '');

  return { command: command.slice(1).toLowerCase(), args, argsString, message: input };
};

export default parse;

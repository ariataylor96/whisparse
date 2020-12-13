import { split } from 'shlex';

const parse = (input = '', { prefix = '!' } = {}) => {
  if (!input || !input.startsWith(prefix)) {
    return null;
  }

  let parsed = [];

  try {
    parsed = split(input);
  } catch {
    // Try our best if we can't get it
    parsed = input.split(' ');
  }

  if (!parsed.length) {
    return null;
  }

  const [command, ...args] = parsed;

  const argsString = input.replace(`${command}`, '').replace(/^\s?/, '');

  return { command: command.slice(1).toLowerCase(), args, argsString, message: input };
};

export default parse;

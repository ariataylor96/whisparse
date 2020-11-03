import { quote } from 'shlex';

import parse from '.';

test('detects the command prefix appropriately', () => {
  expect(parse('!command arg')).not.toBe(null);
  expect(parse('!command arg', { prefix: '%' })).toBe(null);
});

test('strips the command prefix', () => {
  const prefixes = ['!', '%', '$', 'w', '_'];
  const cmd = 'command';

  for (const prefix of prefixes) {
    expect(parse(prefix + cmd, { prefix }).command).toBe(cmd);
  }
});

test('parses arguments with shell standards', () => {
  const prelude = '!command';
  const args = ['This is one arg', 'second', '-b', '33'];

  const argsString = args.map(a => quote(a)).join(' ');

  expect(parse(`${prelude} ${argsString}`).args.length).toBe(args.length);
  expect(parse(`${prelude} this is four args`).args.length).toBe(4);
  expect(parse(`${prelude} "this is one arg"`).args.length).toBe(1);
});

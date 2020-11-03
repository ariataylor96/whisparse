# whisparse

Chat command parsing, used in [whisprite](https://github.com/markrawls/whisprite)

## Installation

With `npm`:
```bash
npm install --save whisparse
```

With `yarn`:
```bash
yarn add whisparse
```

## Usage:

```js
import parse from 'whisparse';

const chatMessage = '%cmdName arg1 "arg2 is here" arg3';

const parsed = parse(chatMessage, {prefix: '%'}); // Default prefix is '!'

console.log(parsed);
/*
{
 command: 'cmdname',
 args: ['arg1', 'arg2 is here', 'arg3'],
 argsString: 'arg1 "arg2 is here" arg3',
 message: '%cmdName arg1 "arg2 is here" arg3'
}
*/
```

Currently, `prefix` is the only option available to configure `whisparse`, but more will be added as needed.

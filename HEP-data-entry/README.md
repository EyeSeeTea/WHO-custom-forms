Generate custom forms for DHIS2 WHO Hepatitis data sets.

## Setup

```
$ yarn install
$ yarn build
```

## Usage

Example:

```
$ node lib/cli.js --url='https://admin:district@play.dhis2.org/2.30' --dataset-id='eZDhcZi6FLP'
```

You can also run code directly from sources using [ts-node](https://www.npmjs.com/package/ts-node):

```
$ sudo npm install -g ts-node
$ ts-node src/cli.ts [...]
```
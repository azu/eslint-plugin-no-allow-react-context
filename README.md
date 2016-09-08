# eslint-plugin-no-allow-react-context

Not allow to use React context in specific directory.

```js
class Component extends React.Component { 
    static contextTypes = {}; // <= Error
}
```

## Install

Install with [npm](https://www.npmjs.com/):

    npm install eslint-plugin-no-allow-react-context

## Usage

Add eslint-plugin-no-allow-react-context to `.eslintrc` 

```
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [
    "no-allow-react-context"
  ],
  "rules": {
    "no-allow-react-context/no-allow-react-context": [2, {
         "expect": ["expect/dir/pattern/**/*.js"]
     }]
  }
}
```

- `expect`: `string[]`
    - expect glob pattern
    - If the pattern match the file name, the file should be ignored.

## Changelog

See [Releases page](https://github.com/azu/eslint-plugin-no-allow-react-context/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm i -d && npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/eslint-plugin-no-allow-react-context/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu

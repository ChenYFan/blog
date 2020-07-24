# esformatter-limit-linebreaks

[esformatter](https://github.com/millermedeiros/esformatter) plugin for limiting maximal consecutive line breaks globally.

## Usage

install it:

```sh
npm install esformatter-limit-linebreaks
```

and add to your esformatter config file:

```js
{
  "plugins": [
    "esformatter-limit-linebreaks"
  ],
  "LimitLineBreaks": 2  // defaults to 2
}
```

## Examples

input:

```js
function bla() {
  return 1;
}




function hello() {
  return 2;
}
```

output:

```js
function bla() {
  return 1;
}

function hello() {
  return 2;
}
```


## Options

"LimitLineBreaks":  Number of maximal consecutive line breaks

## License

Released under the [MIT License](http://opensource.org/licenses/MIT).

# Core

Core Project

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install @js-omar/core.

```bash
npm install @js-omar/core
```

## Usage

```typescript
import {
  isUnAuthorizedStatus,
  getRandInt,
  isValidTokenFormat,
  isValidSlug,
} from '@js-omar/core';

console.log(isUnAuthorizedStatus(200)); // false
console.log(isUnAuthorizedStatus(403)); // true

console.log(getRandInt(20, 30)); // 22
console.log(getRandInt(20, -30)); // 4

console.log(isValidTokenFormat('21321.2323.232')); // true
console.log(isValidTokenFormat('omar')); // false

console.log(isValidSlug('new-slug-name-34')); // true
console.log(isValidSlug('-@)kad>.')); // false
```

## Development

To run this project in development use

Clone the project

```bash
  git clone https://github.com/js-omar/core.git
```

Install Packages

```bash
  npm install
```

Start the server

```bash
  npm run start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Authors

- [@omar-elsayed](https://github.com/omar-elsayed97)

## Hi, I'm Omar Elsayed! 👋

I'm a full stack javascript developer...

## 🛠 Skills

Typescript, Javascript, Angular, Ionic, Nest.js, Node.js, HTML, CSS...

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Feedback

If you have any feedback, please reach out to us at challengeromar97@gmail.com

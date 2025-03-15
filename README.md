# MicroMeow

MicroMeow is a customizable React component for rendering a stylized cat SVG with configurable features like eye color, fur color, tail length, and patterns.

## Installation

To install MicroMeow in your project, run:

```sh
npm install micromeow
```

or using Yarn:

```sh
yarn add micromeow
```

## Usage

Import and use Micromeow in your React application:

```tsx
import { Micromeow } from "micromeow";

export default function App() {
  return (
    <MicroMeow
      eyeColor="lightblue"
      color="gainsboro"
      mPattern="gray"
      furTip="gray"
      shortTail
      pose="sphinx"
    />
  );
}
```

### Props

| Prop        | Type    | Description                                      |
|------------|--------|--------------------------------------------------|
| `eyeColor` | string | Sets the eye color of the cat.                   |
| `color`    | string | Defines the base fur color.                      |
| `mPattern` | string | Sets the color of the "M" pattern on the head.   |
| `furTip`   | string | Defines the color of the fur tips.               |
| `shortTail`| boolean | Determines if the tail is short or long.         |
| `pose`     | string | Specifies the pose (`"sphinx"`, `"lowCrouch"`).   |

## Running the Example

To test Micromeow locally, run:

```sh
npm run dev
```

This will start a development server where you can view and interact with the component.

## Contributing

If you'd like to contribute, fork the repository and create a pull request with your changes.

## License

MicroMeow is licensed under the MIT License.


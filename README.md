# cardddd

The framework for 2D card game built over react and react-game-kit

## features

1. Declarative Rules
2. Animation Free!
3. Easy to extend!

## API

### Presentational Components

#### Game

props:
```ts
{
  className: string;
  winningCondition: gameState => bool;
  rules: Array<(action, gameState) => any>;
  players: Array<Player>;
  middleware: Array<any => void>
}
```

#### Field

#### Card

#### Deck

### Container

#### Game

#### Card

#### Deck

#### Field

### Models

#### Player

#### Card

#### Deck
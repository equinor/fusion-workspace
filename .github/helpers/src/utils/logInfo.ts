const ColorReset = '\x1b[0m';
type TextColor =
  | 'Red'
  | 'Green'
  | 'Black'
  | 'Yellow'
  | 'Blue'
  | 'Magenta'
  | 'Cyan'
  | 'White';

const textColor = {
  Red: '\x1b[31m',
  Black: '\x1b[30m',
  Green: '\x1b[32m',
  Yellow: '\x1b[33m',
  Blue: '\x1b[34m',
  Magenta: '\x1b[35m',
  Cyan: '\x1b[36m',
  White: '\x1b[37m',
} satisfies Record<TextColor, string>;

export function logInfo(message: string, color: TextColor): void {
    console.log(`${textColor[color]}${message}${ColorReset}`);
  }
  
export type BinaryPixel = boolean;
export type CharacterIndex = string;
export type CharacterDecimal = number;
export type CharacterBinaryPixel = BinaryPixel[];
export declare const CHARACTER_WIDTH = 6;
export declare const CHARACTER_HEIGHT = 8;
export declare function buildCharacterMap(): Record<string, CharacterBinaryPixel>;

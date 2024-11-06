import roguelikeitems from '../assets/images/roguelikeitems.png';
import { Position } from '../typings/position';

export type ItemType = 'Sword' | 'Ruby' | 'Key' | 'BTCs' | 'ManyBTCs' | 'Rooch';

interface Item {
  type: ItemType;
  spritePosition: Position;
  imageSrc: string;
  nameInSentence: string;
}

// TODO: Refactor using same pattern as in Conditions

export const ITEMS: Item[] = [
  {
    type: 'Sword',
    spritePosition: [2, 7],
    imageSrc: roguelikeitems,
    nameInSentence: 'a sword',
  },
  {
    type: 'Ruby',
    spritePosition: [3, 3],
    imageSrc: roguelikeitems,
    nameInSentence: 'a ruby',
  },
  {
    type: 'Key',
    spritePosition: [11, 3],
    imageSrc: roguelikeitems,
    nameInSentence: 'a key',
  },
  {
    type: 'BTCs',
    spritePosition: [8, 3],
    imageSrc: roguelikeitems,
    nameInSentence: 'small BitBTCs',
  },
  {
    type: 'ManyBTCs',
    spritePosition: [7, 3],
    imageSrc: roguelikeitems,
    nameInSentence: 'a lot of BitBTCs',
  },
  // Hint: Clever way to get the position in the sprite.
  {
    type: 'Rooch',
    spritePosition: [6, 12],
    imageSrc: roguelikeitems,
    nameInSentence: 'unique Rooch in a map',
  },
];

export const getItem = (itemType: ItemType): Item | undefined => {
  return ITEMS.find((item) => item.type === itemType);
};

export interface INote {
  text: string;
  id: string
}

export interface IState {
  notes: INote[];
  tempTags: string[];
  selectedTags: string[]
}
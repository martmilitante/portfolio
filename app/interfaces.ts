import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IDrawer {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
}

export interface IHeader {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

"use client";
import { IDrawer } from "../interfaces";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

const Drawer = ({ children, isOpen, setIsOpen }: IDrawer) => {
  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent
        side="right"
        className="w-[300px] sm:w-[400px] glass-card border-l border-white/10"
      >
        <SheetHeader>
          <SheetTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">
            Navigation
          </SheetTitle>
          <SheetDescription>Explore my portfolio sections</SheetDescription>
        </SheetHeader>
        <Separator className="my-4 bg-white/10" />
        <div className="flex flex-col gap-2 mt-6">{children}</div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;

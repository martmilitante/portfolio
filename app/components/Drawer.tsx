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
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle className="text-2xl gradient-text">Navigation</SheetTitle>
          <SheetDescription>
            Explore my portfolio sections
          </SheetDescription>
        </SheetHeader>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2 mt-6">
          {children}
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default Drawer;

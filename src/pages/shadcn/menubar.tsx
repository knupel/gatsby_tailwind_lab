
import React from "react";
// import Layout from "../../../components/struct/layout";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

 
const MenuEntree = () => {
  return (
    <div>
      <MenubarTrigger>Entrée</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Oeuf Mayo <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>Poulpe</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Radis Beurre</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Sardine</MenubarItem>
      </MenubarContent>
    </div>
  )
}

const MenuPrincipal = () => {
  return (
    <div>
      <MenubarTrigger>Principal</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Boeuf bourguignon <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>Choucroute</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Steak-Frite</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Sole Meunière</MenubarItem>
      </MenubarContent>
    </div>
  )
}


const MenuDessert = () => {
  return (
    <div>
      <MenubarTrigger>Déssert</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Crème brûlée <MenubarShortcut>⌘T</MenubarShortcut>
        </MenubarItem>
        <MenubarItem>Île flottantr</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Baba au rhum</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Tarte tatin</MenubarItem>
      </MenubarContent>
    </div>
  )
}

const MenuBar = () => {
  return (
    <div>
      <Menubar>
  <MenubarMenu>
    <MenuEntree/>
  </MenubarMenu>
  <MenubarMenu>
    <MenuPrincipal/>
  </MenubarMenu>
  <MenubarMenu>
    <MenuDessert/>
  </MenubarMenu>
</Menubar>
    </div>
  )
}

export default MenuBar;

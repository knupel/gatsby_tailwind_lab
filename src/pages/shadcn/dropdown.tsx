
import React, {FC} from "react";
// import Layout from "../../../components/struct/layout";
import { LinkOut, LinkIn } from "../../components/h"

import {
  Github,
  Home,
  Sunrise,
  Radiation,

} from "lucide-react"
 

import { Button } from "../../components/ui/button";
import {  DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, 
          DropdownMenuShortcut, DropdownMenuGroup, 
          DropdownMenuItem, DropdownMenuSeparator } from "../../components/ui/dropdown-menu";


interface DropdownProps {
  title: string,

}
const Dropdown: FC<DropdownProps> = ({title}) => {
  return <>
    <DropdownMenu>
      <div className="justify-start ...">
        <DropdownMenuTrigger asChild>
          <Button variant="outline">{title}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-90">
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Home className="mr-2 h-4 w-4" />
            <LinkIn to="/" info="??" title="Retour à la Maison"/>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator/>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Radiation className="mr-2 h-4 w-4" />
            <LinkOut href="https://www.knupel.art/" title="KNUPEL"/>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Sunrise className="mr-2 h-4 w-4" />
            <LinkOut href="https://www.olombelona.com/" title="OLOMBELONA"/>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Github className="mr-2 h-4 w-4" />
            <LinkOut href="https://github.com/knupel" title="github knupel"/>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        </DropdownMenuContent>
      </div>
    </DropdownMenu>
  </>
}

const Dropdowns = () => {
  return (
    <div>
      <div className="flex justify-start ...">
        <Dropdown title="mon_"/>
        <Dropdown title="labo_"/>
        <Dropdown title="fonctionne_"/>
        <Dropdown title="bien_"/>
      </div>
    </div>
  )
}

export default Dropdowns;

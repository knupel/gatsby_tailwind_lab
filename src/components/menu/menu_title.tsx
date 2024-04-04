import React, { FC } from "react";

interface MenuTitlePros {
  is:boolean,
  title:string,
}

export const MenuTitle: FC<MenuTitlePros> = ({is, title}) => {
  const close = "+ " + title;
  const open = "- " + title;
  return <>
    {is ? <div>{open}</div>: <div>{close}</div>}
    </>
}

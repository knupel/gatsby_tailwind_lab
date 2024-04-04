import React from "react";
import { useState} from "react";
// APP
import { MenuLink } from "../menu_link";
import { MenuTitle } from "../menu_title";

function Deploy() {
  return (
    <div>
      <MenuLink link="/shadcn/dropdown/" name={"SHAD CN: dropdown"}></MenuLink>
    </div>
  );
}


export const MenuShadcn = () => {
  const [is, set_is] = useState(false);

  function mouse_click(event:any) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<div>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="MISC"/></div>
      {is ? <Deploy/>: null}
    </div>
  );
}
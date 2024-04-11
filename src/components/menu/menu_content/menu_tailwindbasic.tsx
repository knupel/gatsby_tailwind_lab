import React from "react";
import { useState} from "react";
// APP
import { LinkIn } from "../../link_in";
import { MenuTitle } from "../menu_title";

function Deploy() {
  return (
    <div>
      <LinkIn to="/tailwind_basic/grid/" title={">> grid"}></LinkIn>

    </div>
  );
}


export const MenuTailwindBasic = () => {
  const [is, set_is] = useState(false);

  function mouse_click(event:any) {
    event.preventDefault();
    is ? set_is(false) : set_is(true);
  }

  return (<div>
      <div style={{cursor: 'pointer'}} onClick={mouse_click}><MenuTitle is={is} title="Tailwind Basic"/></div>
      {is ? <Deploy/>: null}
    </div>
  );
}
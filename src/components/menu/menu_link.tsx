import React, {FC} from "react"
import { Link } from "gatsby"

interface MenuLink {
  [props: string]: any;
}

export const MenuLink: FC<MenuLink> = (props) => {
  return (
    <div>
      <Link to={props.link} state={{ info: props.str }}>
        {props.name}
      </Link>
    </div>
  )
}

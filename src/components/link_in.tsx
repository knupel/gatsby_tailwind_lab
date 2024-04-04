import React, {FC} from "react"
import { Link } from "gatsby"

interface PropsLinkIn {
  to:string,
  info?:string,
  title:string,
}

export const LinkIn: FC<PropsLinkIn> = ({to, info, title}) => {
  return (
    <div>
      <Link to={to} state={{ info: info }}>
        {title}
      </Link>
    </div>
  )
}

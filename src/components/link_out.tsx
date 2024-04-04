import React, {FC} from "react"

interface PropsLinkExt {
  // [props: string]: any;
  href:string,
  title: string,
}

export const LinkOut: FC<PropsLinkExt> = ({href, title}) => {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href={href}>
        {title}
      </a>
      <br/>
    </div>
  )
}

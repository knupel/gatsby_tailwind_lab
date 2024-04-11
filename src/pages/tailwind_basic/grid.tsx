
import React, {FC} from "react";
// import Layout from "../../../components/struct/layout";
import { LinkOut, LinkIn } from "../../components/h"

import {
  Home,
} from "lucide-react"
 

import { Button } from "../../components/ui/button";


interface CompProps {
  title: string,

}
const Comp: FC<CompProps> = ({title}) => {
  return <>
  </>
}

const Grids = () => {
  return (
    <div className="p-2">
    <Button variant="outline">
      <Home className="mr-2 h-4 w-4" /><LinkIn to="/" info="??" title="À LA NICHE"/>
    </Button>
    <div className="grid grid-cols-6 gap-4">
      <div className="rounded-lg h-20 border-solid border-4 border-black bg-red-700 col-start-2 col-span-4 ...">111</div>
      <div className="rounded-lg h-20 border-solid border-4 border-black bg-red-700 col-start-1 col-end-3 ...">222</div>
      <div className="rounded-lg h-20 border-solid border-4 border-black bg-red-700 col-end-7 col-span-2 ...">333</div>
      <div className="rounded-lg h-20 border-solid border-4 border-black bg-red-700 col-start-1 col-end-5 ...">444</div>
    </div>
  </div>
  )
}

export default Grids;

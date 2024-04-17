
import React, {FC} from "react";
// import Layout from "../../../components/struct/layout";
import { LinkIn } from "../../components/h"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../components/ui/accordion"

interface AccordionLocalProps {
  title: string,
  content: string,
}


const AccordionLocal: FC<AccordionLocalProps> = ({title, content}) => {
  return <>
    <AccordionItem value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>
        <LinkIn to="/" info="??" title={content}/> 
      </AccordionContent>
      <AccordionContent>
        <LinkIn to="/" info="??" title={content}/> 
      </AccordionContent>
    </AccordionItem>
  </>
}

const AccordionLab = () => {
  return (
    <div>
      <Accordion type="multiple">
        <AccordionLocal title="Ivette" content="retourne à la maison"/>
        <AccordionLocal title="Horner" content="back to the bar"/>
      </Accordion>
    </div>
  )
}

export default AccordionLab;

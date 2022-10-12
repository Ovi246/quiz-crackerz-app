import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

export default function Example() {
  const [open, setOpen] = useState(1);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Fragment>
      <Accordion open={open === 1}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          Why use React Router?
        </AccordionHeader>
        <AccordionBody>
          Why use React Router? React Router, and dynamic, client-side routing,
          allows us to build a single-page web application with navigation
          without the page refreshing as the user navigates. React Router uses
          component structure to call components, which display the appropriate
          information
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2}>
        <AccordionHeader onClick={() => handleOpen(2)}>
          What is context in React?
        </AccordionHeader>
        <AccordionBody>
          React's context allows you to share information to any component, by
          storing it in a central place and allowing access to any component
          that requests it (usually you are only able to pass data from parent
          to child via props).
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3}>
        <AccordionHeader onClick={() => handleOpen(3)}>
          What is useRef in React?
        </AccordionHeader>
        <AccordionBody>
          Essentially, useRef is like a “box” that can hold a mutable value in
          its .current property. You might be familiar with refs primarily as a
          way to access the DOM. If you pass a ref object to React with , React
          will set its .current property to the corresponding DOM node whenever
          that node changes.
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
}

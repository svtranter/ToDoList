import React from "react";
import Nav from "react-bootstrap/Nav";
import LinkContainer from "./LinkContainer";
import { VisibilityFilters } from "./actions";

function Links(props) {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="All">
        <LinkContainer filter={VisibilityFilters.SHOW_ALL}>All</LinkContainer>
        <LinkContainer filter={VisibilityFilters.SHOW_ACTIVE}>
          In progress...
        </LinkContainer>
        <LinkContainer filter={VisibilityFilters.SHOW_COMPLETED}>
          Completed!
        </LinkContainer>
      </Nav>
    </>
  );
}

export default Links;

import React from "react";
import GetData from "../../src/GetData";

describe("Get Data />", () => {
  it("displays user information after data is fetched", () => {
    cy.mount(<GetData />);
    cy.get("h2").should("contain", "Name: Leanne Graham");
    cy.get("h2").should("contain", "Email: Sincere@april.biz");
    cy.get("h2").should("contain", "Username: Bret");
  });
});

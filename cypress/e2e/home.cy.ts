describe("testing the home page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://dummyjson.com/products?limit=24").as(
      "products"
    );
    cy.visit("/");
  });

  it("the feature section loads", () => {
    cy.contains(/Discover your next Great Read/i).should("be.visible");
  });


  it("the banner section loads", () => {
    cy.get('[data-test="banner-btn"]').should("contain.text", "Shop Now");
  });

  it("products endpoint is working properly", () => {
    cy.request("GET", "https://dummyjson.com/products?limit=24&skip=24").should(
      (response) => {
        expect(response.body).to.have.property("skip", 24);
        expect(response.body.products).to.have.length(24);
      }
    );
  });

  it("products are fetched properly", () => {
    cy.wait("@products").then((interception) => {
      expect(interception.response.body).to.not.be.empty;
      cy.contains(/Microsoft Surface Laptop 4/i).should("be.visible");
      cy.contains(/HP Pavilion 15-DK1056WM/i).should("be.visible");
    });
  });
});

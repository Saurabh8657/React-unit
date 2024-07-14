/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import data from "../../submissionData.json"; // do not create this file

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("React App", () => {
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
    let acc_score = 0;
    beforeEach(() => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`The product initialstate should match with the given initial state`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        console.log();
        expect(win.store.getState().products.isLoading).to.eq(false);
        expect(win.store.getState().products.isError).to.exist;
        expect(win.store.getState().products.products).to.exist;

        cy.then(() => {
          acc_score += 1;
        });
      });
    });

    it(`The cart initialstate should match with the given initial state`, () => {
      cy.window().then((win) => {
        console.log();
        expect(win.store.getState().cart).to.deep.equal([]);
        cy.then(() => {
          acc_score += 1;
        });
      });
    });

    it(`The wishlist initialstate should match with the given initial state`, () => {
      cy.window().then((win) => {
        console.log();
        expect(win.store.getState().wishlist).to.deep.equal([]);
        cy.then(() => {
          acc_score += 1;
        });
      });
    });

    it(`On homepage initially 10 items should be listed in grid fromat`, () => {
      cy.intercept("GET", "**/get-products**").as("getProducts");
      cy.visit(url);
      cy.wait("@getProducts").then(() => {
        cy.get(".products-list-container .product-card").should(
          "have.length",
          10
        );
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`User should be able to navigate to next and previous pages`, () => {
      cy.intercept("GET", "**/get-products?page=1&limit=10**").as(
        "getFirstPage"
      );
      cy.intercept("GET", "**/get-products?page=2&limit=10**").as(
        "getNextPage"
      );

      cy.visit(url);

      cy.wait("@getFirstPage").then(() => {
        cy.get(".page-number").should("have.text", 1);
        cy.get(".product-title")
          .eq(0)
          .should("have.text", "cotton Checked Casual Shirt");
        cy.get(".next-button").click();
        cy.wait("@getNextPage");
        cy.get(".page-number").should("have.text", 2);
        cy.get(".product-title")
          .eq(0)
          .should("have.text", "Men Linen Regular Fit");
        cy.get(".products-list-container .product-card").should(
          "have.length",
          10
        );
      });

      cy.get(".prev-button").click();
      cy.wait("@getFirstPage");
      cy.get(".page-number").should("have.text", 1);
      cy.get(".product-title")
        .eq(0)
        .should("have.text", "cotton Checked Casual Shirt");
      cy.get(".products-list-container .product-card").should(
        "have.length",
        10
      );

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`The product store should update as per the current page number`, () => {
      cy.intercept("GET", "**/get-products?page=1&limit=10**").as(
        "getFirstPage"
      );
      cy.intercept("GET", "**/get-products?page=2&limit=10**").as(
        "getNextPage"
      );

      cy.visit(url);
      cy.wait("@getFirstPage");
      cy.window().then((win) => {
        const products = win.store.getState().products.products;
        expect(products).to.exist;
        expect(products).to.have.length(10);
        expect(products[0].title).to.eq("cotton Checked Casual Shirt");
        expect(products[9].title).to.eq("Men Linen Regular Fit");
      });

      cy.get(".next-button").click();
      cy.wait("@getNextPage");
      cy.window().then((win) => {
        const products = win.store.getState().products.products;
        expect(products).to.exist;
        expect(products).to.have.length(10);
        expect(products[0].title).to.eq("Men Linen Regular Fit");
        expect(products[9].title).to.eq("Ethnic Embroidary Kurti");
      });

      cy.get(".prev-button").click();
      cy.wait("@getFirstPage");
      cy.wait(2000);
      cy.window().then((win) => {
        const products = win.store.getState().products.products;
        expect(products).to.exist;
        expect(products).to.have.length(10);
        expect(products[0].title).to.eq("cotton Checked Casual Shirt");
        expect(products[9].title).to.eq("Men Linen Regular Fit");
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`User should be able to add single item to cart store`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        expect(win.store.getState().cart).to.deep.equal([]);
      });
      cy.wait(2000);
      cy.get(".add-to-cart-btn").eq(2).click();
      cy.wait(2000);
      cy.window().then((win) => {
        const cart = win.store.getState().cart;
        expect(cart[0].title).to.eq("Regukar Fit Printed Shirt");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`User should be able to add multiple items to the cart store`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        expect(win.store.getState().cart).to.deep.equal([]);
      });
      cy.wait(2000);
      cy.get(".add-to-cart-btn").eq(2).click();
      cy.get(".add-to-cart-btn").eq(5).click();
      cy.get(".add-to-cart-btn").eq(7).click();
      cy.wait(2000);
      cy.window().then((win) => {
        const cart = win.store.getState().cart;
        expect(cart[0].title).to.eq("Regukar Fit Printed Shirt");
        expect(cart[1].title).to.eq("Checked Regular Fit Printed Shirt");
        expect(cart[2].title).to.eq("Men Linen Regular Fit");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`All the items added to the cart store should be shown on cart page`, () => {
      cy.get("#cart-link").click();
      cy.get(".product-title")
        .eq(0)
        .should("have.text", "Regukar Fit Printed Shirt");
      cy.get(".product-title")
        .eq(1)
        .should("have.text", "Checked Regular Fit Printed Shirt");
      cy.get(".product-title")
        .eq(2)
        .should("have.text", "Men Linen Regular Fit");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`User should be able to remove items from the cart store`, () => {
      cy.get("#cart-link").click();
      cy.get(".product-card").should("have.lengthOf", 3);
      cy.get(".remove-from-cart-btn").eq(1).click();
      cy.get(".product-card").should("have.lengthOf", 2);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`User should be able to add single item to wishlist store`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        expect(win.store.getState().wishlist).to.deep.equal([]);
      });
      cy.wait(2000);
      cy.get(".add-to-wishlist-btn").eq(2).click();
      cy.wait(2000);
      cy.window().then((win) => {
        const wishlist = win.store.getState().wishlist;
        expect(wishlist[0].title).to.eq("Regukar Fit Printed Shirt");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`User should be able to add multiple items to the wishlist store`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        expect(win.store.getState().wishlist).to.deep.equal([]);
      });
      cy.wait(2000);
      cy.get(".add-to-wishlist-btn").eq(2).click();
      cy.get(".add-to-wishlist-btn").eq(5).click();
      cy.get(".add-to-wishlist-btn").eq(7).click();
      cy.wait(2000);
      cy.window().then((win) => {
        const wishlist = win.store.getState().wishlist;
        expect(wishlist[0].title).to.eq("Regukar Fit Printed Shirt");
        expect(wishlist[1].title).to.eq("Checked Regular Fit Printed Shirt");
        expect(wishlist[2].title).to.eq("Men Linen Regular Fit");
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`All the items added to the wishlist store should be shown on wishlist page`, () => {
      cy.get("#wishlist-link").click();
      cy.get(".product-title")
        .eq(0)
        .should("have.text", "Regukar Fit Printed Shirt");
      cy.get(".product-title")
        .eq(1)
        .should("have.text", "Checked Regular Fit Printed Shirt");
      cy.get(".product-title")
        .eq(2)
        .should("have.text", "Men Linen Regular Fit");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`User should be able to remove items from the wishlist store`, () => {
      cy.get("#wishlist-link").click();
      cy.get(".product-card").should("have.lengthOf", 3);
      cy.get(".remove-from-wishlist-btn").eq(1).click();
      cy.get(".product-card").should("have.lengthOf", 2);
      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`User shoule be able to sort the items in ascending order`, () => {
      cy.visit(url);
      cy.get("#sort-select").select("asc");
      cy.wait(2000);
      cy.get(".product-title")
        .eq(0)
        .should("have.text", "Men Linen Regular Fit");
      cy.get(".product-title").eq(9).should("have.text", "A line kurta");

      cy.then(() => {
        acc_score += 1;
      });
    });
    it(`User shoule be able to sort the items in descending order`, () => {
      cy.visit(url);
      cy.get("#sort-select").select("desc");
      cy.wait(2000);
      cy.get(".product-title")
        .eq(0)
        .should("have.text", "Set of 3 wall paintings");
      cy.get(".product-title")
        .eq(9)
        .should("have.text", "Men Linen Regular Fit");

      cy.then(() => {
        acc_score += 1;
      });
    });
    it(`On sorting in ascending order product in store should also update sccordingly`, () => {
      cy.visit(url);
      cy.get("#sort-select").select("asc");
      cy.wait(2000);
      cy.window().then((win) => {
        const products = win.store.getState().products.products;
        expect(products).to.exist;

        expect(products[0].title).to.eq("Men Linen Regular Fit");
        expect(products[9].title).to.eq("A line kurta");
      });

      cy.then(() => {
        acc_score += 1;
      });
    });
    it(`On sorting in descending order product in store should also update sccordingly`, () => {
      cy.visit(url);
      cy.get("#sort-select").select("desc");
      cy.wait(2000);
      cy.window().then((win) => {
        const products = win.store.getState().products.products;
        expect(products).to.exist;

        expect(products[0].title).to.eq("Set of 3 wall paintings");
        expect(products[9].title).to.eq("Men Linen Regular Fit");
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    after(() => {
      let result = {
        id,
        marks: Math.ceil(acc_score),
      };
      console.log(result);
      result = JSON.stringify(result);
      cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
        if (err) {
          console.error(err);
        }
      });
      //////////////////
    });
  });
});

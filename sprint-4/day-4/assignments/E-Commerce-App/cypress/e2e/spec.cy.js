import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//   },
// ];
import { Initial } from "../fixtures/data.json";

C1Testcase();

function CheckCard(index, data) {
  cy.get("div[data-testid='product']>img").eq(index);
  cy.get("div[data-testid='product']").eq(index).contains("h3", data.brand);
  cy.get("div[data-testid='product']").eq(index).contains("h4", data.price);
  cy.get("div[data-testid='product']").eq(index).contains("p", data.category);
  cy.get("div[data-testid='product']").eq(index).contains("p", data.details);
}
const getState = (win) => win.store?.getState();

function C1Testcase() {
  describe("React-Redux-TS", () => {
    let acc_score = 1;

    data.forEach(({ submission_link: url, id }) => {
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      beforeEach(() => {
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });
      });

      it("Test the Fetch Request", () => {
        cy.visit(url);
        cy.intercept(
          "https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products",
          (req) => {
            req.reply({
              body: Initial,
            });
          }
        ).as("initialRequest");

        cy.wait("@initialRequest");
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it("Check the initial State of the redux store", () => {
        cy.window().then(getState).should("deep.equal", {
          cart: [],
        });
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it("Check the dom if the product cards are showing", () => {
        cy.get("div[data-testid='product']").should(
          "have.length",
          Initial.data.length
        );
        for (let i = 0; i < Initial.data.length; i++) {
          CheckCard(i, Initial.data[i]);
        }
        cy.then(() => {
          acc_score += 2;
        });
      }); //2

      it("Check if Cart Add works or not", () => {
        cy.get("#cart-count").should("have.text", "0");
        cy.get("div[data-testid='product'] button").eq(0).click();
        cy.wait(200);
        cy.get("#cart-count").should("have.text", "1");
        cy.get("div[data-testid='product'] button").eq(4).click();
        cy.wait(200);
        cy.get("#cart-count").should("have.text", "2");
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it("Check the Redux Store after adding products", () => {
        cy.window()
          .then(getState)
          .should("deep.equal", {
            cart: [Initial.data[0], Initial.data[4]],
          });
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it("Add Same product twice in cart", () => {
        cy.get("div[data-testid='product'] button").eq(4).click();
        cy.get("#cart-count").should("have.text", "2");
        cy.get("div[data-testid='product'] button").eq(0).click();
        cy.get("#cart-count").should("have.text", "2");
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it("Visit Cart page and check for no of Cart Products", () => {
        cy.get("nav a").eq(1).click();
        cy.get("#cart-count").should("have.text", "2");
        cy.then(() => {
          acc_score += 1;
        });
      }); //1
      it("Check the DOM of the Cart Page", () => {
        CheckCard(0, Initial.data[0]);
        CheckCard(1, Initial.data[4]);
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1
      it("Check the deletion of Products with redux store update", () => {
        cy.get("div[data-testid='product'] button").eq(0).click();
        cy.get("div[data-testid='product']").should("have.length", 1);
        cy.get("#cart-count").should("have.text", "1");
        cy.window()
          .then(getState)
          .should("deep.equal", {
            cart: [Initial.data[4]],
          });
        cy.get("div[data-testid='product'] button").eq(0).click();
        cy.get("div[data-testid='product']").should("have.length", 0);
        cy.get("#cart-count").should("have.text", "0");
        cy.window().then(getState).should("deep.equal", {
          cart: [],
        });
        cy.then(() => {
          acc_score += 4;
        });
      }); // 4
      it(`generate score`, () => {
        console.log("final score:", acc_score);
        ////////////// this should not be chnages
        let result = {
          id,
          marks: Math.ceil(acc_score),
        };
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
}

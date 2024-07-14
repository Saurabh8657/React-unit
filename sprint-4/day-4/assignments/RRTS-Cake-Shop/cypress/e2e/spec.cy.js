import data from "../../submissionData.json"; // do not create this file
// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "manish-local",
//   },
// ];

const Data = [
  {
    name: "C-1",
    description: "c-1 des",
    flavour: "Chocolate",
  },
  {
    name: "C-2",
    description: "c-2 des",
    flavour: "Vanilla",
  },
  {
    name: "C-3",
    description: "c-3 des",
    flavour: "Strawberry",
  },
];
C1Testcase();

function SubmitForm(data) {
  cy.get("form #cakename").clear().type(data.name);
  cy.get("form #description").clear().type(data.description);
  cy.get("form #flavour").select(data.flavour);
  cy.get("form").submit();
}
function CheckTable(data, index) {
  cy.get("tbody tr").eq(index).contains("td", data.name);
  cy.get("tbody tr").eq(index).contains("td", data.description);
  cy.get("tbody tr").eq(index).contains("td", data.flavour);
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

      it("Check if Submitting for updates the redux store", () => {
        cy.visit(url);
        SubmitForm(Data[0]);
        cy.window()
          .then(getState)
          .then((data) => {
            expect(data.cake.length).to.eq(1);
            expect(data.cake[0].name).to.eq(Data[0].name);
            expect(data.cake[0].description).to.eq(Data[0].description);
            expect(data.cake[0].flavour).to.eq(Data[0].flavour);
          });
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it("Check the redux store after multiple form submits", () => {
        SubmitForm(Data[1]);
        cy.window()
          .then(getState)
          .then((data) => {
            expect(data.cake.length).to.eq(2);
            expect(data.cake[1].name).to.eq(Data[1].name);
            expect(data.cake[1].description).to.eq(Data[1].description);
            expect(data.cake[1].flavour).to.eq(Data[1].flavour);
          });
        SubmitForm(Data[2]);
        cy.window()
          .then(getState)
          .then((data) => {
            expect(data.cake.length).to.eq(3);
            expect(data.cake[2].name).to.eq(Data[2].name);
            expect(data.cake[2].description).to.eq(Data[2].description);
            expect(data.cake[2].flavour).to.eq(Data[2].flavour);
          });
        cy.then(() => {
          acc_score += 1;
        });
      }); // 1

      it("Visit Cakes Page and check the table", () => {
        cy.get("nav a").eq(1).click();
        cy.get("tbody").children("tr").should("have.length", 3);
        CheckTable(Data[0], 0);
        CheckTable(Data[1], 1);
        CheckTable(Data[2], 2);

        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it("Check if Cake Buying works or not", () => {
        cy.get("tbody tr").eq(2).children("td").eq(4).click();
        cy.get("tbody").children("tr").should("have.length", 2);
        cy.window()
          .then(getState)
          .then((data) => {
            expect(data.cake.length).to.eq(2);
          });
        cy.get("tbody tr").eq(1).children("td").eq(4).click();
        cy.get("tbody").children("tr").should("have.length", 1);
        cy.window()
          .then(getState)
          .then((data) => {
            expect(data.cake.length).to.eq(1);
          });
        cy.then(() => {
          acc_score += 2;
        });
      }); // 2

      it("Visit Edit Page", () => {
        cy.get(`tbody tr:nth-child(1) a`).click();
        cy.get("#cakename")
          .invoke("val")
          .then((sometext) => {
            expect(sometext).to.eq(Data[0].name);
          });
        cy.get("#description")
          .invoke("val")
          .then((sometext) => {
            expect(sometext).to.eq(Data[0].description);
          });
        cy.get("#flavour")
          .invoke("val")
          .then((sometext) => {
            expect(sometext).to.eq(Data[0].flavour);
          });

        cy.then(() => (acc_score += 1));
      }); // 1

      it("Edit and Check the table", () => {
        cy.get("#cakename").clear().type("C-2");
        cy.get("form").submit();
        cy.get("nav a").eq(1).click();
        CheckTable({ ...Data[0], name: "C-2" }, 0);
        cy.window()
          .then(getState)
          .then((data) => {
            expect(data.cake[0].name).to.eq("C-2");
            expect(data.cake[0].description).to.eq(Data[0].description);
            expect(data.cake[0].flavour).to.eq(Data[0].flavour);
          });
        cy.then(() => (acc_score += 2));
      }); // 2
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

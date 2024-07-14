/* eslint-disable no-undef */

import data from "../../submissionData.json"; // do not create this file
import fixturesData from "../fixtures/todos.json";

// const data = [
//   {
//     submission_link: "http://localhost:3000",
//     id: "shanti-local",
//     json_server_link: `http://localhost:8080/`,
//   },
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
  describe("Todo-App-With-Drag-And-Drop", function () {
    let acc_score = 1;

    beforeEach(() => {
      cy.writeFile("db.json", fixturesData, (err) => {
        if (err) {
          console.error(err);
        }
      });
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
      if (server_url.charAt(server_url.length - 1) != "/") {
        server_url = server_url + "/";
      }

      Cypress.on("uncaught:exception", (err, runnable) => {
        // Handle the uncaught exception as needed
        // This prevents Cypress from failing the test automatically
        return false;
      });
    });

    it("should have a title of the application", () => {
      cy.visit(url);
      cy.get("h1").should("exist").and("contain", "Todo App");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should make a GET request when app loads", () => {
      cy.intercept("GET", "**/todos", (req) => {
        delete req.headers["if-none-match"];
      }).as("todos");
      cy.visit(url);

      cy.wait("@todos")
        .its("response")
        .should("deep.include", {
          statusCode: 200,
          statusMessage: "OK",
        })
        .and("have.property", "body") // yields the "response.body"
        .then((body) => {
          // since we do not know the number of items
          // just check if it is an array
          expect(body).to.be.an("array");
          expect(body.length).equal(10);
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should have all the todos visible for notStarted", () => {
      const notStartedData = fixturesData.todos.filter(
        (todo) => todo.status === "notStarted"
      );

      cy.get(".notStarted").within(() => {
        cy.get("h2").should("exist").and("contain", "notStarted");
        cy.get(".todo").should("have.length", 3);
        cy.get(".todo").each((el, i) => {
          cy.wrap(el).should("exist").and("contain", notStartedData[i].title);
        });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should have all the todos visible for inProgress", () => {
      const inProgressData = fixturesData.todos.filter(
        (todo) => todo.status === "inProgress"
      );
      cy.get(".inProgress").within(() => {
        cy.get("h2").should("exist").and("contain", "inProgress");
        cy.get(".todo").should("have.length", 4);
        cy.get(".todo").should("exist").children().should("have.length", 0);
        cy.get(".todo").each((el, i) => {
          cy.wrap(el).should("exist").and("contain", inProgressData[i].title);
        });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should have all the todos visible for completed", () => {
      const completed = fixturesData.todos.filter(
        (todo) => todo.status === "completed"
      );
      cy.get(".completed").within(() => {
        cy.get("h2").should("exist").and("contain", "completed");
        cy.get(".todo").should("have.length", 3);
        cy.get(".todo").should("exist").children().should("have.length", 0);
        cy.get(".todo").each((el, i) => {
          cy.wrap(el).should("exist").and("contain", completed[i].title);
        });
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("should have draggable attributes for all todos", () => {
      cy.intercept("GET", "**/todos").as("todos");
      cy.visit(url);
      cy.get("@todos");
      cy.get(".todo").and("have.length", 10).and("have.attr", "draggable");

      cy.then(() => {
        acc_score += 1;
      });
    });

    it("should change todo status if we drag it from notStarted to inProgress & make a PATCH request", () => {
      cy.intercept("GET", "**/todos").as("todos");
      cy.intercept("PATCH", "**/todos/*").as("updateTodo");
      cy.visit(url);
      cy.get("@todos");

      cy.get(".notStarted .todo").should("be.visible").should("have.length", 3);

      const dataTransfer = new DataTransfer();
      console.log(dataTransfer);
      cy.get(".notStarted .todo").eq(0).trigger("dragstart", {
        dataTransfer,
      });

      cy.get(".inProgress").trigger("drop", {
        dataTransfer,
      });

      cy.wait("@updateTodo");

      cy.get(".notStarted .todo").should("have.length", 2);
      cy.get(".inProgress .todo").should("have.length", 5);
      cy.get(".inProgress").should("contain", "Go for running today");

      cy.then(() => {
        acc_score += 3;
      });
    });

    it("should change todo status if we drag it from inProgress to completed & make a PATCH request", () => {
      cy.intercept("GET", "**/todos").as("todos");
      cy.intercept("PATCH", "**/todos/*").as("updateTodo");
      cy.visit(url);
      cy.get("@todos");

      cy.get(".inProgress .todo").should("have.length", 4);

      const dataTransfer = new DataTransfer();

      cy.get(".inProgress .todo").eq(3).trigger("dragstart", {
        dataTransfer,
      });

      cy.get(".completed").trigger("drop", {
        dataTransfer,
      });

      cy.wait("@updateTodo");

      cy.get(".inProgress .todo").should("have.length", 3);
      cy.get(".completed .todo").should("have.length", 4);
      cy.get(".completed").should(
        "contain",
        "Start reading Psychology of money book"
      );

      cy.then(() => {
        acc_score += 3;
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

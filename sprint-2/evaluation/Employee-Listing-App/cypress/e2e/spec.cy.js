/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import data from "../../submissionData.json"; // do not create this file

// const getAuth = window.AuthContext;
// const getAuth = (win) => win.store.getState().AuthContext;
// console.log(getAuth)

// const data = [{ submission_link: "http://localhost:5173/", id: "nishut" }];

let employeeData = [
  {
    id: 11,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Aridatha Boylund",
    gender: "female",
    department: "engineering",
    salary: 40000,
  },
  {
    id: 16,
    image: "https://i.imgur.com/9xEcfJj.jpg",
    name: "Pris Emms",
    gender: "others",
    department: "operations",
    salary: 66000,
  },
];

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

    // Check for home page

    it("Should make API call on home page to get list of all Employees", () => {
      cy.intercept(
        "GET",
        `https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees`
      ).as("getEmployees");
      cy.visit(url);
      cy.wait("@getEmployees").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should render the list of employees on home page", () => {
      cy.visit(url);

      cy.get(".employee-card").should("have.length", 100);

      cy.get(".employee-card")
        .first()
        .within(() => {
          cy.get(".employee-name").should("have.text", "Donald Surgen");
          cy.get(".employee-gender").should("have.text", "Gender: female");
        });

      cy.get(".employee-card")
        .eq(2)
        .within(() => {
          cy.get(".employee-name").should("have.text", "Etta McGairl");
          cy.get(".employee-gender").should("have.text", "Gender: male");
        });

      cy.get(".employee-card")
        .eq(99)
        .within(() => {
          cy.get(".employee-name").should("have.text", "Agatha Gullefant");
          cy.get(".employee-gender").should("have.text", "Gender: female");
        });

      cy.get(".employee-card")
        .eq(98)
        .within(() => {
          cy.get(".employee-name").should("have.text", "Hollis Matskevich");
          cy.get(".employee-gender").should("have.text", "Gender: male");
        });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Authentication should work properly`, () => {
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.visit(url + `login`);
      cy.get('input[id="username"]').type("eve.holt@reqres.in");
      cy.get('input[id="password"]').type("cityslicka");
      cy.get(".submit").click();
      cy.wait("@getAuth").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
      cy.then(() => {
        acc_score += 2;
      });
    });

    it(`Context should update on user Authentication`, () => {
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.visit(url + `login`);

      cy.get('input[id="username"]').type("eve.holt@reqres.in");
      cy.get('input[id="password"]').type("cityslicka");
      cy.window().then((win) => {
        console.log(win.myAuthContext);
        cy.wrap(win.myAuthContext).should("be.equal", false);
      });
      cy.get(".submit").click();
      cy.wait("@getAuth").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });

      cy.wait(4000);

      cy.window().then((win) => {
        console.log(win.myAuthContext);
        cy.wrap(win.myAuthContext).should("be.equal", true);
      });

      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Employee details page should not be accessible without authentication", () => {
      cy.visit(url + `employeeDetail/2`);
      cy.location("pathname").should("eq", "/login");
      cy.then(() => {
        acc_score += 2;
      });
    });

    it("Should able to visit Employee Detail page after successful login - I", () => {
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.visit(url + `login`);

      cy.get('input[id="username"]').type("eve.holt@reqres.in");
      cy.get('input[id="password"]').type("cityslicka");
      cy.window().then((win) => {
        console.log(win.myAuthContext);
        cy.wrap(win.myAuthContext).should("be.equal", false);
      });
      cy.get(".submit").click();
      cy.wait("@getAuth").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
      cy.get(".navbar").get("#home").click();
      cy.get(".employee-card").eq(1).click();
      cy.location("pathname").should("eq", "/employeeDetail/2");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should able to visit Employee Detail page after successful login - II", () => {
      cy.intercept("POST", `https://reqres.in/api/login`).as("getAuth");
      cy.visit(url + `login`);

      cy.get('input[id="username"]').type("eve.holt@reqres.in");
      cy.get('input[id="password"]').type("cityslicka");
      cy.window().then((win) => {
        console.log(win.myAuthContext);
        cy.wrap(win.myAuthContext).should("be.equal", false);
      });
      cy.get(".submit").click();
      cy.wait("@getAuth").then((interception) => {
        expect(interception.response.statusCode).to.equal(200);
      });
      cy.get(".navbar").get("#home").click();
      cy.get(".employee-card").eq(10).click();
      cy.location("pathname").should("eq", "/employeeDetail/11");
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should should display all the details of employee on employee details page - I", () => {
      cy.get(".navbar").get("#home").click();
      cy.get(".employee-card").eq(10).click();
      cy.get(".employee-name").should("have.text", employeeData[0].name);
      cy.get(".employee-id").should(
        "have.text",
        `Employee ID: ${employeeData[0].id}`
      );
      cy.get(".employee-gender").should(
        "have.text",
        `Gender: ${employeeData[0].gender}`
      );
      cy.get(".employee-department").should(
        "have.text",
        `Department: ${employeeData[0].department}`
      );
      cy.get(".employee-salary").should(
        "have.text",
        `Salary: $${employeeData[0].salary}`
      );
      cy.then(() => {
        acc_score += 1;
      });
    });

    it("Should should display all the details of employee on employee details page - II", () => {
      cy.get(".navbar").get("#home").click();
      cy.get(".employee-card").eq(15).click();
      cy.get(".employee-name").should("have.text", employeeData[1].name);
      cy.get(".employee-id").should(
        "have.text",
        `Employee ID: ${employeeData[1].id}`
      );
      cy.get(".employee-gender").should(
        "have.text",
        `Gender: ${employeeData[1].gender}`
      );
      cy.get(".employee-department").should(
        "have.text",
        `Department: ${employeeData[1].department}`
      );
      cy.get(".employee-salary").should(
        "have.text",
        `Salary: $${employeeData[1].salary}`
      );
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

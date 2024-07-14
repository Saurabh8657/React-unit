import data from "../../submissionData.json"; // do not create this file
// const data = [
//   { submission_link: "http://localhost:3000", id: "subhankar-local" },
// ];

describe("React useEffect cleanup timer", () => {
  let acc_score = 1;

  data.map(({ submission_link: url, id }) => {
    beforeEach(() => {
      cy.visit(url);
      cy.window().should("exist");
      if (url.charAt(url.length - 1) != "/") {
        url = url + "/";
      }
    });

    it(`App should have the basic structure`, () => {
      cy.visit(url);

      cy.get("#home").should("exist");
      cy.get("#home-timer").click({click:true});

      cy.get("#home").should("not.exist");
      cy.get('[data-cy="timer"]').should("exist");

      cy.get("#nav-home").click({click:true});
      cy.get("#home").should("exist");
      cy.get('[data-cy="timer"]').should("not.exist");

      cy.get("#nav-timer").click({click:true});
      cy.get("#home").should("not.exist");
      cy.get('[data-cy="timer"]').should("exist");

      cy.then(() => {
        acc_score += 1;
      });
    }); //1
    it(`Should able to cleanup intervals during unmount`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        cy.spy(win, "clearInterval").as("clearInterval");
      });

      cy.get("#home-timer").click({click:true});
      cy.get("#initial")
        .clear()
        .type(
          "{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}"
        );
      cy.get("#start").click({force:true});
  
      cy.wait(1000).then(() => {        
        cy.get("#timer").should("have.text", 6);
      });

      cy.get("#nav-home").click({click:true});

      cy.get("@clearInterval").should(stub => stub.callCount >= 1)

      cy.then(() => {
        acc_score += 3;
      });
    }); //1
    it(`If the timer is already over then the cleanup should not called during unmount`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        cy.spy(win, "clearInterval").as("clearInterval");
      });

      cy.get("#home-timer").click({click:true});
      cy.get("#initial").clear().type("{upArrow}{upArrow}{upArrow}");
      cy.get("#start").click({force:true});
      // cy.clock();
      cy.wait(3000).then(() => {
        cy.get("#timer").should("not.exist");
        cy.get("#timer-up").should("have.text", "Time's Up");
      });

      cy.get("@clearInterval").should(stub => stub.callCount >= 1);

      cy.get("#nav-home").click({force:true});

      cy.get("@clearInterval").should(stub => stub.callCount >= 1);

      cy.then(() => {
        acc_score += 2;
      });
    }); //2

    it(`Check if the timer is able to start`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        cy.spy(win, "clearInterval").as("clearInterval");
      });

      cy.get("#home-timer").click({force:true});
      cy.get("#initial").clear().type("{upArrow}{upArrow}{upArrow}");
      cy.get("#start").click({force:true});

      cy.wait(1000).then(() => {
        cy.get("#timer").contains("2");
      });
      cy.wait(1000).then(() => {
        cy.get("#timer").contains("1");
      });

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Check if after Clicking on Stop button the timer pauses and again click on start timer starts again`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        cy.spy(win, "clearInterval").as("clearInterval");
      });
      cy.window().then((win) => {
        cy.spy(win, "setInterval").as("setInterval");
      });

      cy.get("#home-timer").click({force:true});
      cy.get("#initial")
        .clear()
        .type("{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}");
      cy.get("#start").click({force:true});

      cy.wait(1000).then(() => {
        cy.get("#timer").contains("5");
      });
      cy.wait(1000).then(() => {
        cy.get("#timer").contains("4");
      });

      cy.get("#stop").click({force:true});

      cy.wait(3000).then(() => {
        cy.get("#timer").contains("4");
      });
      cy.get("#start").click({click:true});
      cy.get("@setInterval").should("have.callCount", 2);

      cy.then(() => {
        acc_score += 1;
      });
    });

    it(`Check if reset button resets the counter`, () => {
      cy.visit(url);
      cy.window().then((win) => {
        cy.spy(win, "clearInterval").as("clearInterval");
      });
      cy.window().then((win) => {
        cy.spy(win, "setInterval").as("setInterval");
      });
      cy.get("#home-timer").click({click:true});
      cy.get("#initial")
        .clear()
        .type("{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}{upArrow}");
      cy.get("#start").click({force:true});

      cy.wait(1000).then(() => {
        cy.get("#timer").contains("5");
      });
      cy.wait(1000).then(() => {
        cy.get("#timer").contains("4");
      });

      cy.get("#reset").click({force:true});

      cy.wait(3000).then(() => {
        cy.get("#timer").should("not.exist");
        cy.get("#timer-up").should("have.text", "Time's Up");
        cy.get("#initial").should('have.value', 0);
      });

      cy.get("@setInterval").should(stub => stub.callCount >= 1);
      cy.get("@clearInterval").should(stub => stub.callCount >= 1);

      cy.then(() => {
        acc_score += 1;
      });
    });

    after(() => {
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

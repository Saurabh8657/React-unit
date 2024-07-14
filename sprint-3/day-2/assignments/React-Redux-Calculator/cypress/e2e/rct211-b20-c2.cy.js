import data from "../../submissionData.json"; // do not create this file
//const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];

Cypress.on("uncaught:exception", (err, runnable) => {
	return false;
});

data.forEach(({ submission_link: url, id }) => {
	describe("Evaluation RCT-211-B120-E2", function () {
		let acc_score = 1;
		beforeEach(() => {
			cy.visit(url);
			cy.window().its("store").should("exist");
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
		});

		it(`Check Initial Redux Store Structure`, () => {
			cy.visit(url);
			cy.window()
				.then((getCurrentState) => {
					return getCurrentState.store.getState();
				})
				.should("deep.equal", {
					result: "0",
					operation: "",
					prevValue: "",
					nextValue: "",
				});
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("displays the initial value 0", () => {
			cy.visit(url);
			cy.get('[data-testid="display"]').should("have.text", "0");
			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should add two numbers", () => {
			cy.visit(url);
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-3").should("be.visible").click();
			cy.get("#button-add").should("be.visible").click();
			cy.get("#button-4").should("be.visible").click();
			cy.get("#button-5").should("be.visible").click();
			cy.get("#button-equals").should("be.visible").click();
			cy.get('[data-testid="display"]').should("have.text", "68");

			cy.window().then((getCurrentState) => {
				console.log(getCurrentState.store.getState());
				expect(getCurrentState.store.getState().result + "").to.eq("68");
			});

			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should subtract two numbers", () => {
			cy.visit(url);
			cy.get("#button-7").should("be.visible").click();
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-subtract").should("be.visible").click();
			cy.get("#button-3").should("be.visible").click();
			cy.get("#button-9").should("be.visible").click();
			cy.get("#button-equals").should("be.visible").click();
			cy.get('[data-testid="display"]').should("have.text", "33");
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should multiply two numbers", () => {
			cy.visit(url);
			cy.get("#button-3").should("be.visible").click();
			cy.get("#button-4").should("be.visible").click();
			cy.get("#button-multiply").should("be.visible").click();
			cy.window().then((getCurrentState) => {
				expect(getCurrentState.store.getState().operation + "").to.eq("*");
			});
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-5").should("be.visible").click();
			cy.get("#button-equals").should("be.visible").click();
			cy.get('[data-testid="display"]').should("have.text", "850");
			cy.window().then((getCurrentState) => {
				expect(getCurrentState.store.getState().result + "").to.eq("850");
			});
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should divide two numbers", () => {
			cy.visit(url);
			cy.get("#button-6").should("be.visible").click();
			cy.get("#button-8").should("be.visible").click();
			cy.get("#button-divide").should("be.visible").click();
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-equals").should("be.visible").click();
			cy.get('[data-testid="display"]').should("have.text", "34");
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should clear the display", () => {
			cy.visit(url);
			cy.get("#button-3").should("be.visible").click();
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-clear").should("be.visible").click();
			cy.get('[data-testid="display"]').should("have.text", "0");
			cy.window()
				.then((getCurrentState) => {
					return getCurrentState.store.getState();
				})
				.should("deep.equal", {
					result: "0",
					operation: "",
					prevValue: "",
					nextValue: "",
				});
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("performs complex mathematical operations", () => {
			// 1 + 2 * 3 - 4 / 2 = 5
			cy.get("#button-1").should("be.visible").click();
			cy.get("#button-add").should("be.visible").click();
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-multiply").should("be.visible").click();
			cy.window().then((getCurrentState) => {
				expect(getCurrentState.store.getState().operation + "").to.eq("*");
			});
			cy.get("#button-3").should("be.visible").click();
			cy.get("#button-subtract").should("be.visible").click();
			cy.get("#button-4").should("be.visible").click();
			cy.get("#button-divide").should("be.visible").click();

			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-equals").should("be.visible").click();
			cy.get('[data-testid="display"]').should("have.text", "5");
			cy.then(() => {
				acc_score += 3;
			});
		});

		it("checkwhether all other buttons is working fine or not", () => {
			cy.visit(url);
			cy.get("#button-1").should("be.visible").click();
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-3").should("be.visible").click();
			cy.get("#button-add").should("be.visible").click();
			cy.get("#button-4").should("be.visible").click();
			cy.get("#button-5").should("be.visible").click();
			cy.get("#button-6").should("be.visible").click();
			cy.get("#button-subtract").should("be.visible").click();
			cy.window().then((getCurrentState) => {
				expect(getCurrentState.store.getState().operation + "").to.eq("-");
			});
			cy.get("#button-7").should("be.visible").click();
			cy.get("#button-8").should("be.visible").click();
			cy.get("#button-9").should("be.visible").click();
			cy.get("#button-multiply").should("be.visible").click();
			cy.window().then((getCurrentState) => {
				expect(getCurrentState.store.getState().operation + "").to.eq("*");
			});
			cy.get("#button-0").should("be.visible").click();
			cy.get("#button-divide").should("be.visible").click();
			cy.get("#button-2").should("be.visible").click();
			cy.get("#button-equals").should("be.visible").click();
			cy.get("#button-add").should("be.visible").click();
			cy.get("#button-0").should("be.visible").click();
			cy.get("#button-decimal").should("be.visible").click();
			cy.get("#button-1").should("be.visible").click();
			cy.get("#button-equals").should("be.visible").click();
			cy.get('[data-testid="display"]').should("have.text", "579.1");
			cy.window().then((getCurrentState) => {
				expect(getCurrentState.store.getState().result + "").to.eq("579.1");
			});
			cy.then(() => {
				acc_score += 3;
			});
		});

		after(() => {
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
		});
	});
});
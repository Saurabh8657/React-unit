/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import data from "../../submissionData.json"; // do not create this file
import testData from "../fixtures/users.json";

// const data = [{ submission_link: "http://127.0.0.1:5173/", id: "nishut" }];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
	describe("React App", () => {
		Cypress.on("uncaught:exception", (err, runnable) => {
			return false;
		});
		// cy.intercept("GET", "https://dummyjson.com/users").as("getData");

		let acc_score = 0;
		beforeEach(() => {
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
			// cy.visit(url);
		});

		it("should have an heading", () => {
			cy.visit(url);
			cy.get("h1").should("contain", "Student Management System");
			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should make an API request on load and validate the response", () => {
			cy.visit(url);
			cy.intercept("GET", "https://dummyjson.com/users").as("getData");

			cy.wait("@getData").then((interception) => {
				expect(interception.response.statusCode).to.eq(200);

				expect(interception.response.body)
					.to.have.property("users")
					.and.to.be.an("array");
			});
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should display all student cards with correct information", () => {
			cy.visit(url);
			cy.wait(2000);
			cy.get(".student-container")
				.should("exist")
				.children()
				.should("have.length", 30);

			cy.get(".studentCard").each((child, index) => {
				if (index % 5 === 0) {
					cy.wrap(child)
						.find("img")
						.should("have.attr", "src", testData.users[index].image);

					cy.wrap(child)
						.find(".name")
						.should(
							"contain",
							testData.users[index].firstName +
								" " +
								testData.users[index].lastName
						);
					cy.wrap(child)
						.find(".email")
						.should("contain", testData.users[index].email);

					cy.wrap(child)
						.find(".phone")
						.should("contain", testData.users[index].phone);
				}
			});
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Toggle button should show timer when clicked and button text should change from Show to Hide", () => {
			cy.visit(url);
			cy.get("button").should("exist").and("contain", "Show");
			cy.get(".timerValue span").should("not.exist");
			cy.get("button").click().should("contain", "Hide");
			cy.get(".timerValue span").should("exist");
			cy.then(() => {
				acc_score += 1;
			});
		});
		it("Toggle button should hide timer when clicked and button text should change from Hide to Show and  also the timer need to get reset to 0", () => {
			cy.visit(url);
			cy.get("button").should("exist").and("contain", "Show");
			cy.get(".timerValue span").should("not.exist");
			cy.get("button").click().should("contain", "Hide").click();
			cy.get(".timerValue span").should("not.exist");
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("Timer should always start from 0 and get updated in every second", () => {
			// cy.visit(url)
			// cy.intercept("GET", "https://dummyjson.com/users").as("getData");
			// cy.wait("@getData").should("have.property", "response");
			cy.get("button").click();
			cy.get(".timerValue span").should("have.text", 0);
			cy.wait(1000);
			cy.get(".timerValue span").should("have.text", 1);
			cy.wait(1000);
			cy.get(".timerValue span").should("have.text", 2);
			cy.get("button").should("contain", "Hide").click();
			cy.get(".timerValue span").should("not.exist");
			cy.get("button").should("exist").and("contain", "Show");
			cy.get("button").click();
			cy.get(".timerValue span").should("have.text", 0);
			cy.get("button").should("contain", "Hide");

			cy.then(() => {
				acc_score += 2;
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

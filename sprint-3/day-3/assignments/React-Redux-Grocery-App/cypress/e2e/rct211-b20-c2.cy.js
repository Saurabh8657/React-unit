import data from "../../submissionData.json"; // do not create this file
// const data = [{ submission_link: "http://localhost:3000", id: "manish-local" }];

const getCurrentState = (win) => win.store.getState();

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
			cy.window()
				.then(getCurrentState)
				.should("deep.equal", {
					groceryData: [],
					isAuth: false,
					isLoading: false,
				})
				.then(() => {
					acc_score += 2;
				});
		});

		it(`Check if user gets redirected after login`, () => {
			cy.url().should("eq", url);

			cy.intercept("POST", `https://reqres.in/api/login`).as("auth");
			cy.visit(url);
			cy.get(".email").type("eve.holt@reqres.in");
			cy.get(".password").type("secret");
			cy.get(".submit").click();

			cy.url().should("eq", url + "dashboard");
			cy.then(() => (acc_score += 2));
		});

		it(`Check if store data is being updated when user logs in`, () => {
			cy.url().should("eq", url);

			cy.intercept("POST", `https://reqres.in/api/login`).as("auth");

			cy.window().then(getCurrentState).its("isAuth").should("equal", false);

			cy.get(".email").type("eve.holt@reqres.in");
			cy.get(".password").type("secret");
			cy.get(".submit").click();

			cy.url().should("eq", url + "dashboard");
			cy.window().then(getCurrentState).its("isAuth").should("equal", true);

			cy.then(() => {
				acc_score += 2;
			});
		});

		it(`Check if grocery data is updated in the store`, () => {
			cy.url().should("eq", url);
			cy.intercept("POST", `https://reqres.in/api/login`).as("auth");

			cy.intercept(
				"GET",
				`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`,
			).as("getGroceries");
			cy.visit(url);
			cy.window()
				.then(getCurrentState)
				.its("groceryData")
				.should("have.length", 0);

			cy.get(".email").type("eve.holt@reqres.in");
			cy.get(".password").type("secret");
			cy.get(".auth_form").submit();
			cy.wait("@auth");
			cy.wait("@getGroceries");
			cy.url().should("eq", url + "dashboard");
			cy.wait(500);

			cy.window()
				.then(getCurrentState)
				.its("groceryData")
				.should("have.length", 10);

			cy.then(() => {
				acc_score += 2;
			});
		});

		it(`Check if grocery data is updated on the DOM`, () => {
			cy.url().should("eq", url);
			cy.intercept("POST", `https://reqres.in/api/login`).as("auth");

			cy.intercept(
				"GET",
				`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-groceries`,
			).as("getGroceries");

			cy.window()
				.then(getCurrentState)
				.its("groceryData")
				.should("have.length", 0);

			cy.get(".email").type("eve.holt@reqres.in");
			cy.get(".password").type("secret");
			cy.get(".auth_form").submit();
			cy.wait("@auth");
			cy.wait("@getGroceries");
			cy.get(".grocery_data_cont").children().should("have.length", 10);

			cy.then(() => {
				acc_score += 2;
			});
		});

		// it(`generate score`, () => {
		// console.log("final score:", acc_score);
		// ////////////// this should not be chnages
		// let result = {
		// 	id,
		// 	marks: Math.ceil(acc_score),
		// };
		// result = JSON.stringify(result);
		// cy.writeFile("results.json", `\n${result},`, { flag: "a+" }, (err) => {
		// 	if (err) {
		// 		console.error(err);
		// 	}
		// });
		// //////////////////
		// });
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

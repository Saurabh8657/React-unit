import data from "../../submissionData.json"; // do not create this file
// const data = [
// 	{
// 		submission_link: "http://localhost:3001",
// 		id: "manish-local",
// 		json_server_link: "http://localhost:8080",
// 	},
// ];

data.forEach(({ submission_link: url, id, json_server_link: server_url }) => {
	describe("template spec", () => {
		let acc_score = 1;

		beforeEach(() => {
			cy.visit(url);
			if (url.charAt(url.length - 1) != "/") {
				url = url + "/";
			}
		});

		it("should render the Homepage by default", () => {
			cy.url().should("include", url);
			cy.get("[data-testid=home-page]").should("exist");
			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should navigate the user to the Products page, when clicked on the 'View All Products' button", () => {
			cy.url().should("include", url);
			cy.get("[data-testid=view-products-button]").should("exist");
			cy.get("[data-testid=view-products-button]").click();
			cy.url().should("include", "/products");
			cy.get("[data-testid=product-page]").should("exist");
			cy.then(() => {
				acc_score += 1;
			});
		});

		it("should fetch and render the products in the UI, using the ProductCard component", () => {
			cy.intercept("GET", "/products", {
				fixture: "productsData.json",
			}).as("getProducts");
			cy.visit(`${url}`);
			cy.get("[data-testid=view-products-button]").should("be.visible");
			cy.get("[data-testid=view-products-button]").click();

			cy.wait("@getProducts");
			cy.get("[data-testid=product-page]").should("exist");
			cy.get("[data-testid=product-card]").should("have.length", 20);
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should render the image, title and price inside the ProductCard component, for each product", () => {
			cy.intercept("GET", "/products", {
				fixture: "productsData.json",
			}).as("getProducts");
			cy.visit(`${url}`);
			cy.get("[data-testid=view-products-button]").should("be.visible");
			cy.get("[data-testid=view-products-button]").click();

			cy.wait("@getProducts");
			cy.fixture("productsData.json").then((products) => {
				products.forEach((product, index) => {
					cy.get("[data-testid=product-card]")
						.eq(index)
						.within(() => {
							cy.get("[data-testid=product-title]").should(
								"have.text",
								product.title,
							);
							cy.get("[data-testid=product-image]").should(
								"have.attr",
								"src",
								product.image,
							);

							cy.get("[data-testid=product-price]").should(
								"have.text",
								`$${product.price}`,
							);
						});
				});
			});
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should navigate the user to the SingleProduct page when clicked on the 'More Details' button", () => {
			cy.intercept("GET", "/products", {
				fixture: "productsData.json",
			}).as("getProducts");
			cy.visit(`${url}`);
			cy.get("[data-testid=view-products-button]").should("be.visible");
			cy.get("[data-testid=view-products-button]").click();
			cy.wait("@getProducts");
			cy.get("[data-testid=product-card]")
				.eq(0)
				.within(() => {
					cy.get("[data-testid=more-details-button]").should("exist");
					cy.get("[data-testid=more-details-button]").click();
				});
			cy.url().should("include", "/products/1");
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should make a GET request to fetch the product details, based on the URL productId", () => {
			cy.intercept("GET", "/products", {
				fixture: "productsData.json",
			}).as("getProducts");
			cy.intercept("GET", "/products/2", {
				id: 2,
				title: "Mens Casual Premium Slim Fit T-Shirts ",
				price: 22.3,
				description:
					"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
				category: "men's clothing",
				image:
					"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
				rating: { rate: 4.1, count: 259 },
			}).as("productRequest");
			cy.visit(`${url}`);
			cy.get("[data-testid=view-products-button]").should("be.visible");
			cy.get("[data-testid=view-products-button]").click();
			cy.wait("@getProducts");
			cy.get("[data-testid=more-details-button]").eq(1).should("be.visible");

			cy.get("[data-testid=more-details-button]").eq(1).click();
			cy.wait("@productRequest");
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should show all the required details, title, image, price, category, description on the page", () => {
			cy.intercept("GET", "/products", {
				fixture: "productsData.json",
			}).as("getProducts");
			const response = {
				id: 2,
				title: "Mens Casual Premium Slim Fit T-Shirts ",
				price: 22.3,
				description:
					"Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
				category: "men's clothing",
				image:
					"https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
				rating: { rate: 4.1, count: 259 },
			};
			cy.intercept("GET", "/products/2", response).as("productRequest");
			cy.visit(`${url}`);
			cy.get("[data-testid=view-products-button]").should("be.visible");
			cy.get("[data-testid=view-products-button]").click();
			cy.wait("@getProducts");
			cy.get("[data-testid=more-details-button]").eq(1).should("be.visible");

			cy.get("[data-testid=more-details-button]").eq(1).click();
			cy.wait("@productRequest");
			cy.get("[data-testid=single-product-page]").should(
				"contain",
				response.title,
			);
			cy.get("[data-testid=single-product-page]").should(
				"contain",
				response.price,
			);
			cy.get("[data-testid=single-product-page]").should(
				"contain",
				response.category,
			);
			cy.get("[data-testid=single-product-page]").should(
				"contain",
				response.description,
			);
			cy.then(() => {
				acc_score += 2;
			});
		});

		it("should show the 404 Page not found page, when visiting an unlisted route", () => {
			cy.visit(`${url}masai`);
			cy.get("[data-testid=page-not-found]").should("be.visible");
			cy.then(() => {
				acc_score += 2;
			});
		});

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

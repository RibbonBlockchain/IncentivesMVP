// const {
//     ether
// } = require('./helpers/ether');
// const {
//     expectThrow
// } = require('./helpers/expectThrow');
// const {
//     EVMRevert
// } = require('./helpers/EVMRevert');
// const { 
//     assertRevert 
// } = require('./helpers/assertRevert');

// var RibbonIncentive = artifacts.require("./ribbonincentive.sol");

// contract('Ribbon Incentive tests', function(accounts) {
//     const ProjectOwner = accounts[0];
//     const RibbonOwner = accounts[1];
//     const user = accounts[2];
//     const donator = accounts[3];
//     const projectOwnerTwo = accounts[4];
//     const practitioner = accounts[5];
//     const userTwo = accounts[6];
//     const userThree = accounts[7];
//     const userFour = accounts[8];
//     const practitionerTwo = accounts[9];

//     beforeEach(async function () {
//         ribbonIncentive = await RibbonIncentive.new({from: RibbonOwner});
//     });

//     it("Creating a project", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         let allData = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(allData[0], "Test001", "Name of program is the set name");
//         assert.equal(allData[1], ProjectOwner, "Project owner is the set address");
//         assert.equal(allData[5], 1000, "Balance set to value");
//         assert.equal(allData[6], 0, "Total donations empty");
//         await assertRevert(ribbonIncentive.createProgram("Test001", user, {from: user, value: 1000}),EVMRevert);
//     });

//     it("Checking deleting of a project", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.deleteProgram(0, {from: ProjectOwner});
//         let allData = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(allData[0], "", "Name of program is the set name");
//         assert.equal(allData[1], 0x0, "Project owner is the set address");
//         assert.equal(allData[5], 0, "Balance set to value");
//         assert.equal(allData[6], 0, "Total donations empty");
//         await ribbonIncentive.createProgram("Test002", projectOwnerTwo, {from: RibbonOwner, value: 1000});
//         await assertRevert(ribbonIncentive.deleteProgram(1, {from: ProjectOwner}), EVMRevert);
//     });

//     it("Changing name of project", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         let allDataBeforeChange = await ribbonIncentive.getProgramDetails(0);
//         await ribbonIncentive.changeProgramName(0, "Test002", {from: ProjectOwner});
//         let allDataAfterChange = await ribbonIncentive.getProgramDetails(0);
//         assert.notEqual(allDataBeforeChange, allDataAfterChange, "Data changed");
//         assert.notEqual(allDataBeforeChange[0], allDataAfterChange[0], "Name of program changed");
//     });

//     it("Changing program owner", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await assertRevert(ribbonIncentive.changeProgramOwner(0, projectOwnerTwo, {from: projectOwnerTwo}), EVMRevert);
//         await assertRevert(ribbonIncentive.deleteProgram(0, {from: projectOwnerTwo}), EVMRevert);
//         await ribbonIncentive.changeProgramOwner(0, projectOwnerTwo, {from: ProjectOwner});
//         let allData = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(allData[1], projectOwnerTwo, "The project owner has changed to the new address");
//         await assertRevert(ribbonIncentive.changeProgramOwner(0, ProjectOwner, {from: ProjectOwner}), EVMRevert);
//     });

//     it("Checking the project can recive donations", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         let AllDataBeforeDonation = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(AllDataBeforeDonation[0], "Test001", "Name of program is the set name");
//         assert.equal(AllDataBeforeDonation[1], ProjectOwner, "Project owner is the set address");
//         assert.equal(AllDataBeforeDonation[5], 1000, "Balance set to value");
//         assert.equal(AllDataBeforeDonation[6], 0, "Total donations empty");
//         await ribbonIncentive.donate(0, {from: donator, value: 5000000});
//         let allDataAfterDonation = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(allDataAfterDonation[0], "Test001", "Name of program is the set name");
//         assert.equal(allDataAfterDonation[1], ProjectOwner, "Project owner is the set address");
//         assert.equal(allDataAfterDonation[2], donator, "Project owner is the set address");
//         assert.equal(allDataAfterDonation[5], 5001000, "Balance set to donated balance");
//         assert.equal(allDataAfterDonation[6], 5000000, "Total donations set to donation amount");
//     });

//     it("Queries donation history", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         let beforeDonation = await ribbonIncentive.getAllDonations(0);
//         assert.equal(beforeDonation, 0, "Donations before donating empty");
//         await ribbonIncentive.donate(0, {from: donator, value: 5000000});
//         let afterDonation = await ribbonIncentive.getAllDonations(0);
//         assert.equal(afterDonation, 5000000, "Donation amount after ");
//         let donationHistory = await ribbonIncentive.getDonations(0, donator);
//         assert.notEqual(beforeDonation, afterDonation, "Donation amount changes");
//         assert.equal(donationHistory[0][0]["c"][0], 5000000, "The donation history is correct");
//         await ribbonIncentive.donate(0, {from: donator, value: 6290000});
//         let donationHistoryTwo = await ribbonIncentive.getDonations(0, donator);
//         assert.equal(donationHistoryTwo[0][0]["c"][0], 5000000, "First donation amount correct");
//         assert.equal(donationHistoryTwo[0][1]["c"][0], 6290000, "Seccond donation amount correct");
//         // assert.notEqual(donationHistoryTwo[1][0]["c"][0], donationHistoryTwo[1][1]["c"][0], "First and seccond donations time stamps differ");
//     });

//     it("Adding users", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.addUsers(0, [user, userTwo, userThree, userFour], {from: ProjectOwner});
//         let allData = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(allData[4][0], user, "The users are added to the project");
//         assert.equal(allData[4][1], userTwo, "The users are added to the project");
//         assert.equal(allData[4][2], userThree, "The users are added to the project");
//         assert.equal(allData[4][3], userFour, "The users are added to the project");
//         assertRevert(ribbonIncentive.addUsers(0, [user, userTwo, userThree, userFour], {from: projectOwnerTwo}), EVMRevert);
//     });

//     it("Queries user history & details", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.addUsers(0, [user, userTwo, userThree, userFour], {from: ProjectOwner});
//         let allUsers = await ribbonIncentive.getAllUsers(0);
//         assert.equal(allUsers[0], user, "The users are added to the project");
//         assert.equal(allUsers[1], userTwo, "The users are added to the project");
//         assert.equal(allUsers[2], userThree, "The users are added to the project");
//         assert.equal(allUsers[3], userFour, "The users are added to the project");
//         let usersData = await ribbonIncentive.getUser(0, userThree);
//         assert.equal(usersData[0], true, "The users details are correct");
//         assert.equal(usersData[1]["c"], 0, "The users details are correct");
//         assert.equal(usersData[2]["c"], 0, "The users details are correct");
//         assert.equal(usersData[3]["c"], 2, "The users details are correct");
//     });

//     it("Addiong practitioners and seting allowance", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.addPractitioners(0, [practitioner, practitionerTwo], 300, {from: ProjectOwner});        
//         let allData = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(allData[3][0], practitioner, "Practitioner set");
//         assert.equal(allData[3][1], practitionerTwo, "Practitioner set");
//         await ribbonIncentive.addUsers(0, [user, userTwo, userThree, userFour], {from: ProjectOwner});
//         let practitionerDataBefore = await ribbonIncentive.getPractitioner(0, practitioner);
//         assert.equal(practitionerDataBefore[0]["c"], 300, "Practitioner allowance correct");
//         assert.equal(practitionerDataBefore[1]["c"], 0, "Practitioner allowance correct");
//         await ribbonIncentive.userEarned(0, userTwo, 299, practitioner, {from: practitioner});
//         let practitionerDataAfter = await ribbonIncentive.getPractitioner(0, practitioner);
//         assert.notEqual(practitionerDataAfter[0]["c"], practitionerDataBefore[0]["c"], "Practitioner allowance has changed");
//         assert.notEqual(practitionerDataAfter[0]["c"], practitionerDataBefore[1]["c"], "Practitioner past tokens sent has changed");
//         assert.equal(practitionerDataAfter[0]["c"], 1, "Practitioner allowance subtracted from correctly");
//         assert.equal(practitionerDataAfter[1]["c"], 299, "Practitioner past tokens sent added to correctly");
//         assertRevert(ribbonIncentive.userEarned(0, userTwo, 50, practitioner, {from: practitioner}), EVMRevert);
//     });

//     it("User can be removed", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.addUsers(0, [user, userTwo, userThree, userFour], {from: ProjectOwner});
//         let allData = await ribbonIncentive.getProgramDetails(0);
//         assert.equal(allData[4][1], userTwo, "User data correct initially");
//         await ribbonIncentive.removeUser(0, userTwo, {from: ProjectOwner});
//         let allDataAfter = await ribbonIncentive.getProgramDetails(0);
//         assert.notEqual(allData, allDataAfter, "Program data changes");
//         assert.equal(0x0, allDataAfter[4][1], "User address removed");
//     });

//     it("User can withdraw", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.addUsers(0, [user, userTwo, userThree, userFour], {from: ProjectOwner});
//         await ribbonIncentive.addPractitioners(0, [practitioner, practitionerTwo], 300, {from: ProjectOwner});
//         await ribbonIncentive.userEarned(0, userTwo, 299, practitioner, {from: practitioner});
//         let userDataBefore = await ribbonIncentive.getUser(0, userTwo);
//         assert.equal(userDataBefore[1]["c"], 299, "User balance is correct");
//         assert.equal(userDataBefore[2]["c"], 299, "User total earned is correct");
//         await ribbonIncentive.userWithdraw(0, 200, {from: userTwo});
//         let userDataAfter = await ribbonIncentive.getUser(0, userTwo);
//         assert.equal(userDataAfter[1]["c"], 99, "User balance is correct");
//         assert.equal(userDataAfter[2]["c"], 299, "User total earned is correct");
//     });

//     it("Deleting practitioner", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.addPractitioners(0, [practitioner, practitionerTwo], 300, {from: ProjectOwner});
//         let allData = await ribbonIncentive.getProgramDetails(0);
//         await ribbonIncentive.removePractitioner(0, practitionerTwo, {from: ProjectOwner});
//         let allDataAfter = await ribbonIncentive.getProgramDetails(0);
//         assert.notEqual(allData, allDataAfter, "Data changes");
//         assert.notEqual(allData[3][1], allDataAfter[3][1], "Practitioner address no longer stored");
//         assert.equal(allDataAfter[3][1], 0x0, "Practitioner address no longer stored");
//     });

//     it("Changing practitioner allowance", async () => {
//         await ribbonIncentive.createProgram("Test001", ProjectOwner, {from: RibbonOwner, value: 1000});
//         await ribbonIncentive.addPractitioners(0, [practitioner, practitionerTwo], 300, {from: ProjectOwner});
//         let practitionerDataBefore = await ribbonIncentive.getPractitioner(0, practitioner);
//         await ribbonIncentive.changePractitionersAllowance(0, practitioner, 4000);
//         let practitionerDataAfter = await ribbonIncentive.getPractitioner(0, practitioner);
//         assert.notEqual(practitionerDataBefore[0]["c"], practitionerDataAfter[0]["c"], "Allowance changed");
//         assert.equal(practitionerDataAfter[0]["c"], 4300, "Allowance is set to new allowance ");
//     });

// })
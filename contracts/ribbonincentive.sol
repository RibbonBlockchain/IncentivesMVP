pragma solidity ^0.4.24;
pragma experimental ABIEncoderV2;

contract ribbonincentive {
    address private ribbonOwner;

    struct Donation {
        uint amount;
        uint timeStamp;    
    }

    struct Practitioner {
        uint allowance;
        uint pastSentTokens;
        uint arrayPosition;
    }

    struct User {
        bool registered;
        uint balance;
        uint totalEarned;
        uint arrayPosition;
    }

    struct Program {
        string name;
        address owner;
        mapping (address => Donation[]) sponsors;
        address[] allSponsors;
        mapping (address => Practitioner) practitioners;
        address[] allPractitioners;
        mapping (address => User) users;
        address[] allUsers;
        uint balance;
        uint totalDonated;
    }

    Program[] allPrograms;
    uint[] allDonationAmounts;
    uint[] allDonationTimeStamps;

    modifier onlyOwnerOfProgram(uint _programID) {
        require(msg.sender == allPrograms[_programID].owner, "Function is only accessable by program owner");
        _;
    }

    modifier onlyRibbon() {
        require(msg.sender == ribbonOwner, "Function is only accessable by Ribbon owner");
        _;
    }

    constructor()
        public
    {
        ribbonOwner = msg.sender;
    }

//PROGRAM functions

    function createProgram(string _name, address _owner) 
        public
        payable
        onlyRibbon()
        returns(uint programID)
    {
        address[] memory _allSponsors;
        address[] memory _allPractitioners;
        address[] memory _allUsers;
        programID = allPrograms.push(Program({
            name: _name,
            owner: _owner,
            allSponsors: _allSponsors,
            allPractitioners: _allPractitioners,
            allUsers: _allUsers,
            balance: msg.value,
            totalDonated: 0
        }));
    }

    function getProgramDetails(uint _programID)
        public
        view
        returns(
            string name, 
            address owner,
            address[] allSponsors,
            address[] allPractitioners,
            address[] allUsers,
            uint balance,
            uint totalDonated
        )
    {
        name = allPrograms[_programID].name;
        owner = allPrograms[_programID].owner;
        allSponsors = allPrograms[_programID].allSponsors;
        allPractitioners = allPrograms[_programID].allPractitioners;
        allUsers = allPrograms[_programID].allUsers;
        balance = allPrograms[_programID].balance;
        totalDonated = allPrograms[_programID].totalDonated;
    }

    function deleteProgram(uint _programID)
        public
        onlyOwnerOfProgram(_programID)
    {
        delete allPrograms[_programID];
    }

    function changeProgramName(uint _projectID, string _newName)
        public 
        onlyOwnerOfProgram(_projectID)
        returns(string projectName)
    {
        allPrograms[_projectID].name = _newName;
        return _newName; 
    }

    function changeProgramOwner(uint _projectID, address _newOwner)
        public
        onlyOwnerOfProgram(_projectID)
        returns(address newOwner)
    {
        allPrograms[_projectID].owner = _newOwner;
        return _newOwner;
    }

//DONOR functions

    function donate(uint _programID)
        public
        payable
    {
        uint donationAmount = msg.value;
        require(allPrograms[_programID].owner != 0x0, "Invalid program ID");
        if(allPrograms[_programID].sponsors[msg.sender].length == 0){
            allPrograms[_programID].allSponsors.push(msg.sender);
        }
        allPrograms[_programID].sponsors[msg.sender].push(Donation({
            amount: donationAmount,
            timeStamp: now
        }));
        allPrograms[_programID].balance += donationAmount;
        allPrograms[_programID].totalDonated += donationAmount;
    }

    function getAllDonations(uint _programID)
        public
        view
        returns(uint)
    {
        return allPrograms[_programID].totalDonated;
    }

    function getDonations(uint _programID, address _donor)
        public
        view
        returns(
            uint[],
            uint[]
        )
    {
        for(uint i = 0; i < allPrograms[_programID].sponsors[_donor].length; i++){
            allDonationAmounts.push((uint)(allPrograms[_programID].sponsors[_donor][i].amount));
            allDonationTimeStamps.push((uint)(allPrograms[_programID].sponsors[_donor][i].timeStamp)); 
        }
        return(allDonationAmounts, allDonationTimeStamps); 
    }

//USER functions

    function addUsers(uint _programID, address[] _users)
        public
        onlyOwnerOfProgram(_programID)
        returns(address[])
    {
        for(uint i = 0; i < _users.length; i++){
            allPrograms[_programID].users[_users[i]] = User({
                registered: true,
                balance: 0,
                totalEarned: 0,
                arrayPosition: i
            });
            allPrograms[_programID].allUsers.push(_users[i]);
        }
        return allPrograms[_programID].allUsers;
    }

    function getAllUsers(uint _programID)
        public
        view
        returns(address[])
    {
        return allPrograms[_programID].allUsers;
    }

    function getUser(uint _programID, address _user)
        public
        view
        returns(
            bool registered,
            uint balance,
            uint totalEarned,
            uint arrayPosition
        )
    {
        registered = allPrograms[_programID].users[_user].registered;
        balance = allPrograms[_programID].users[_user].balance;
        totalEarned = allPrograms[_programID].users[_user].totalEarned;
        arrayPosition = allPrograms[_programID].users[_user].arrayPosition;
    }

    function userEarned(
        uint _programID, 
        address _user, 
        uint _amountEarned, 
        address _practitioner
    )
        public
    {
        require(msg.sender == _practitioner);
        require(allPrograms[_programID].practitioners[_practitioner].allowance != 0);
        require(_amountEarned <= allPrograms[_programID].practitioners[_practitioner].allowance,"Exceeds your practitioner limit. Please request a rest");
        allPrograms[_programID].users[_user].balance += _amountEarned;
        allPrograms[_programID].users[_user].totalEarned += _amountEarned;
        allPrograms[_programID].practitioners[_practitioner].allowance -= _amountEarned;
        allPrograms[_programID].practitioners[_practitioner].pastSentTokens += _amountEarned;
        allPrograms[_programID].balance -= _amountEarned;
    }

    function userWithdraw(uint _programID, uint _amount)
        public
    {
        require(allPrograms[_programID].users[msg.sender].registered == true, "You are not registered");
        require( allPrograms[_programID].users[msg.sender].balance >= _amount, "Insufficient funds");
        allPrograms[_programID].users[msg.sender].balance -= _amount;
    }

    function removeUser(uint _programID, address _user)
        public
        onlyOwnerOfProgram(_programID)
    {
        require(allPrograms[_programID].users[_user].balance == 0, "Please withdraw remaining balance before removing user.");
        delete allPrograms[_programID].allUsers[allPrograms[_programID].users[_user].arrayPosition];
        allPrograms[_programID].users[_user] = User({
            registered: false,
            balance: 0,
            totalEarned: 0,
            arrayPosition: 999
        });
        //could refractor to move last position to removed position. 
    }

//PRACTITIONERS functions

    function addPractitioners(uint _programID, address[] _practitioners, uint _practitionerAllowance)
        public
        onlyOwnerOfProgram(_programID)
        returns(address[])
    {
        for(uint i = 0; i < _practitioners.length; i++){
            allPrograms[_programID].practitioners[_practitioners[i]] = Practitioner({
                allowance: _practitionerAllowance,
                pastSentTokens: 0,
                arrayPosition: i
            });
            allPrograms[_programID].allPractitioners.push(_practitioners[i]);
        }
        return allPrograms[_programID].allPractitioners;
    }

    function changePractitionersAllowance(uint _programID, address _practitioner, uint _newAllowance)
        public
        onlyOwnerOfProgram(_programID)
    {
        allPrograms[_programID].practitioners[_practitioner].allowance += _newAllowance;
    }

    function removePractitioner(uint _programID, address _practitioner)
        public
        onlyOwnerOfProgram(_programID)
    {
        delete allPrograms[_programID].allPractitioners[allPrograms[_programID].practitioners[_practitioner].arrayPosition];
        allPrograms[_programID].practitioners[_practitioner] = Practitioner({
            allowance: 0,
            pastSentTokens: 0,
            arrayPosition: 999
        });
    }

    function getAllPractitioners(uint _programID)
        public
        view
        returns(address[])
    {
        return allPrograms[_programID].allPractitioners;
    }

    function getPractitioner(uint _programID, address _practitioner)
        public
        view
        returns(
            uint allowance,
            uint pastSentTokens,
            uint arrayPosition
        )
    {
        allowance = allPrograms[_programID].practitioners[_practitioner].allowance;
        pastSentTokens = allPrograms[_programID].practitioners[_practitioner].pastSentTokens;
        arrayPosition = allPrograms[_programID].practitioners[_practitioner].arrayPosition;
    }
}
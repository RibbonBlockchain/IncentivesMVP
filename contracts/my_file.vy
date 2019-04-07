#Events
Deposit: event({amount: int128,owner: indexed(address)})         #Gets the amount deposited and the address that sent it
Withdrawal: event({amount: int128,owner: indexed(address)})      #Gets the amount withdrawn and the patient that withdrew it
TotalEarned: event({earned: uint256})                            #Gets the amount earned in total by a patient
UserCreated: event({registered:bool, date:timestamp, amountEarned:uint256, totalAmountEarned:uint256})

#Types
owner:address                          
amount: uint256
ownerBalance: uint256
total: uint256

#Structs
Patient:public({                       
    registered:bool,                       #Checks if the Patient is registered or not
    time: timestamp,                       #The timestamp of the patient registration completion
    earned: uint256,                       #The amount of tokens earned in a single transaction
    totalEarned:uint256                    #How many tokens was earned by the patient
}[address])                                #Maps the Patient struct to an address


#Functions
@public
@payable
def createUser(_owner: address) -> bool:                                 #Creates a new user and sends that user tokens
    self.total = self.Patient[_owner].earned                                       
    self.Patient[_owner] = {                                             #Gets the address of the owner
        registered : True,                                               #Sets the Patient Registration to true
        time : block.timestamp,                                          #Gets the time the user was created
        earned:convert(msg.value,uint256),                                                 #Gets the amount earned    
        totalEarned: self.total                                               #Gets the total amount earned
        }
    
    log.UserCreated(
        self.Patient.registration,             #Logs if the user is registered
        self.Patient.time,                     #Logs the time the user was created
        self.Patient.earned,                   #Logs the amount that was earned
        self.Patient.totalEarned               #Logs the total amount earned
        )
    return (True)                              #Returns a "True" value to state that the user was created successfully
    
@public                                                
def getBalance(_owner:address) -> bool:                  #Gets the address
    self.ownerBalance = Patient.owner.balance            #Gets the balance of the address
    log.Balance(self.ownerBalance)                       #logs the balance of the address
    return True                                          #Gets the balance of the address and returns it

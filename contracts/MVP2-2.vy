#Types
owner:address
amount: uint256

#Structs
Patient:{
    owner:address,                         #The address of the owner
    registered:bool,                       #Checks if the Patient is registered or not
    totalEarned:uint256,                   #How many tokens was earned by the patient
    date: timestamp,                       #The timestamp of the patient registration completion
    earned: uint256[],                     #The amount of tokens earned in a single transaction
    Earned: map(address,earned)            #Maps the owners address to the amount earned
}
#Mappings
patientData: map(address,Patient)          #Maps the owner address to the patient data

#Events
Deposit: event({amount: int128,owner: indexed(address)})         #Gets the amount deposited and the address that sent it
Withdrawal: event({amount: int128,owner: indexed(address)})      #Gets the amount withdrawn and the patient that withdrew it
TotalEarned: event({earned: uint256})                            #Gets the amount earned in total by a patient

#Constructor

@constant
@public
def __init__() => address:                 #This constructor sets the owner variable to the message.sender
    owner: msg.sender
    return owner

#Functions
    
@public
@payable
def deposit() => bool:
    assert msg.sender == self.owner
    self.amount = msg.value
    self.Patient.Earned[self.owner] = amount
    self.Patient.balance = self.owner.balance
    self.Patient.totalEarned = self.earned + amount
    
    for range(self.Patient.arrayPosition):
        
    log.Deposit(msg.value,msg.sender)
    return True

@public  
def getBalance() => uint256:
    return Patient.owner.balance
    
@public
def getPatientData() => (bool,uint256,timestamp):
    patientData[self.owner] = {
    self.Patient.registration = True,
    self.Patient.balance = balanceOf(self.owner),
    self.Patient.time = block.timestamp,
    }
    
    return (
        self.patientData[self.owner]
        )

@public
def amountEarned():
    self.amount

@public
def totalAmountEarned() => uint256:
    log.TotalEarned(self.Patient.totalEarned)
    return self.Patient.totalEarned
    
@public
def withdraw(_to:address,_amount:uint256) => (bool):
    assert msg.sender == self.owner
    send(_amount,_to)
    log.Withdrawal(_amount,_to)
    return True
export const getPatients = `query getPatients {
  getPatients{
    id
    firstName
    lastName
    phoneNumber
    walletAddress
    userId
  }
}`;
export const getPractitioners = `query getPractitioners {
  getPractitioners{
    id
    firstName
    lastName
    phoneNumber
    walletAddress
    userId
  }
}`;
export const getInteractions = `query getInteractions {
  getPractitioners{
    id
    ratings
    patient
    practitioner
    interaction
  }
}`;

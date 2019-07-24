export const createPatient = `mutation createPatient($id: ID, $firstName: String, $lastName: String, $phoneNumber: String, $walletAddress: String, $userId: String) {
  createPatient(id: $id, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, walletAddress: $walletAddress, userId: $userId) {
    id
    firstName
    lastName
    phoneNumber
    walletAddress
    userId
  }
}`;

export const createPractitioner = `
mutation createPractitioner($id: ID, $firstName: String, $lastName: String, $phoneNumber: String, $walletAddress: String, $userId: String) {
  createPractitioner(id: $id, firstName: $firstName, lastName: $lastName, phoneNumber: $phoneNumber, walletAddress: $walletAddress, userId: $userId) {
    id
    firstName
    lastName
    phoneNumber
    walletAddress
    userId
  }
}`;

export const createInteraction = `
mutation createInteraction($id: ID, $ratings: AWSJSON, $patient: String, $practitioner: String, $interaction: String) {
  createInteraction(id: $id, ratings: $ratings, patient: $patient, practitioner: $practitioner, interaction: $interaction) {
    id
    ratings
    patient
    practitioner
    interaction
  }
}`;

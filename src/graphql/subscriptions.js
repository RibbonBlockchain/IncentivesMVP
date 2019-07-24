export const onCreatePatient = `subscription onCreatePatient {
  onCreatePatient {
    id
    firstName
    lastName
    phoneNumber
    walletAddress
    userId
  }
}`;

export const onCreatePractitioner = `subscription onCreatePractitioner {
  onCreatePractitioner {
    id
    firstName
    lastName
    phoneNumber
    walletAddress
    userId
  }
}`;

export const onCreateInteraction = `subscription onCreateInteraction {
  onCreateInteraction {
    id
    ratings
    patient
    practitioner
    interaction
  }
}`;

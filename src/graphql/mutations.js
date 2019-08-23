// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPatient = `mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
    id
    firstName
    lastName
    walletAddress
    userId
    phoneNumber
    interactions {
      items {
        id
        interaction
        ratings
        prescriptions
      }
      nextToken
    }
  }
}
`;
export const updatePatient = `mutation UpdatePatient($input: UpdatePatientInput!) {
  updatePatient(input: $input) {
    id
    firstName
    lastName
    walletAddress
    userId
    phoneNumber
    interactions {
      items {
        id
        interaction
        ratings
        prescriptions
      }
      nextToken
    }
  }
}
`;
export const deletePatient = `mutation DeletePatient($input: DeletePatientInput!) {
  deletePatient(input: $input) {
    id
    firstName
    lastName
    walletAddress
    userId
    phoneNumber
    interactions {
      items {
        id
        interaction
        ratings
        prescriptions
      }
      nextToken
    }
  }
}
`;
export const createInteraction = `mutation CreateInteraction($input: CreateInteractionInput!) {
  createInteraction(input: $input) {
    id
    interaction
    ratings
    patient {
      id
      firstName
      lastName
      walletAddress
      userId
      phoneNumber
      interactions {
        nextToken
      }
    }
    prescriptions
    practitioner {
      id
      firstName
      lastName
      walletAddress
      userId
      phoneNumber
      interactions {
        nextToken
      }
    }
  }
}
`;
export const updateInteraction = `mutation UpdateInteraction($input: UpdateInteractionInput!) {
  updateInteraction(input: $input) {
    id
    interaction
    ratings
    patient {
      id
      firstName
      lastName
      walletAddress
      userId
      phoneNumber
      interactions {
        nextToken
      }
    }
    prescriptions
    practitioner {
      id
      firstName
      lastName
      walletAddress
      userId
      phoneNumber
      interactions {
        nextToken
      }
    }
  }
}
`;
export const deleteInteraction = `mutation DeleteInteraction($input: DeleteInteractionInput!) {
  deleteInteraction(input: $input) {
    id
    interaction
    ratings
    patient {
      id
      firstName
      lastName
      walletAddress
      userId
      phoneNumber
      interactions {
        nextToken
      }
    }
    prescriptions
    practitioner {
      id
      firstName
      lastName
      walletAddress
      userId
      phoneNumber
      interactions {
        nextToken
      }
    }
  }
}
`;
export const createChw = `mutation CreateChw($input: CreateCHWInput!) {
  createCHW(input: $input) {
    id
    email
    walletAddress
  }
}
`;
export const updateChw = `mutation UpdateChw($input: UpdateCHWInput!) {
  updateCHW(input: $input) {
    id
    email
    walletAddress
  }
}
`;
export const deleteChw = `mutation DeleteChw($input: DeleteCHWInput!) {
  deleteCHW(input: $input) {
    id
    email
    walletAddress
  }
}
`;
export const createPractitioner = `mutation CreatePractitioner($input: CreatePractitionerInput!) {
  createPractitioner(input: $input) {
    id
    firstName
    lastName
    walletAddress
    userId
    phoneNumber
    interactions {
      items {
        id
        interaction
        ratings
        prescriptions
      }
      nextToken
    }
  }
}
`;
export const updatePractitioner = `mutation UpdatePractitioner($input: UpdatePractitionerInput!) {
  updatePractitioner(input: $input) {
    id
    firstName
    lastName
    walletAddress
    userId
    phoneNumber
    interactions {
      items {
        id
        interaction
        ratings
        prescriptions
      }
      nextToken
    }
  }
}
`;
export const deletePractitioner = `mutation DeletePractitioner($input: DeletePractitionerInput!) {
  deletePractitioner(input: $input) {
    id
    firstName
    lastName
    walletAddress
    userId
    phoneNumber
    interactions {
      items {
        id
        interaction
        ratings
        prescriptions
      }
      nextToken
    }
  }
}
`;

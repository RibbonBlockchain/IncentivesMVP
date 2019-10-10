/* eslint-disable */
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
        owner
      }
      nextToken
    }
    owner
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
        owner
      }
      nextToken
    }
    owner
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
        owner
      }
      nextToken
    }
    owner
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
      owner
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
      owner
    }
    owner
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
      owner
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
      owner
    }
    owner
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
      owner
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
      owner
    }
    owner
  }
}
`;
export const createChw = `mutation CreateChw($input: CreateCHWInput!) {
  createCHW(input: $input) {
    id
    email
    walletAddress
    owner
  }
}
`;
export const updateChw = `mutation UpdateChw($input: UpdateCHWInput!) {
  updateCHW(input: $input) {
    id
    email
    walletAddress
    owner
  }
}
`;
export const deleteChw = `mutation DeleteChw($input: DeleteCHWInput!) {
  deleteCHW(input: $input) {
    id
    email
    walletAddress
    owner
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
        owner
      }
      nextToken
    }
    owner
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
        owner
      }
      nextToken
    }
    owner
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
        owner
      }
      nextToken
    }
    owner
  }
}
`;

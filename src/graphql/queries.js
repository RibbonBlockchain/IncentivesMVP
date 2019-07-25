// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPatient = `query GetPatient($id: ID!) {
  getPatient(id: $id) {
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
      }
      nextToken
    }
  }
}
`;
export const listPatients = `query ListPatients(
  $filter: ModelPatientFilterInput
  $limit: Int
  $nextToken: String
) {
  listPatients(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;
export const getInteraction = `query GetInteraction($id: ID!) {
  getInteraction(id: $id) {
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
export const listInteractions = `query ListInteractions(
  $filter: ModelInteractionFilterInput
  $limit: Int
  $nextToken: String
) {
  listInteractions(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
      }
      practitioner {
        id
        firstName
        lastName
        walletAddress
        userId
        phoneNumber
      }
    }
    nextToken
  }
}
`;
export const getPractitioner = `query GetPractitioner($id: ID!) {
  getPractitioner(id: $id) {
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
      }
      nextToken
    }
  }
}
`;
export const listPractitioners = `query ListPractitioners(
  $filter: ModelPractitionerFilterInput
  $limit: Int
  $nextToken: String
) {
  listPractitioners(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
  }
}
`;

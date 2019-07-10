// eslint-disable
// this is an auto generated file. This will be overwritten

export const getPatient = `query GetPatient($id: ID!) {
  getPatient(id: $id) {
    id
    firstName
    lastName
    phone
    walletAddress
    userId
    imageLink
    events {
      items {
        id
        eventType
        rating
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
      phone
      walletAddress
      userId
      imageLink
      events {
        nextToken
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
    phone
    userId
    walletAddress
    imageLink
    events {
      items {
        id
        eventType
        rating
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
      phone
      userId
      walletAddress
      imageLink
      events {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getEvent = `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    id
    eventType
    patient {
      id
      firstName
      lastName
      phone
      walletAddress
      userId
      imageLink
      events {
        nextToken
      }
    }
    rating
    practitioner {
      id
      firstName
      lastName
      phone
      userId
      walletAddress
      imageLink
      events {
        nextToken
      }
    }
  }
}
`;
export const listEvents = `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      eventType
      patient {
        id
        firstName
        lastName
        phone
        walletAddress
        userId
        imageLink
      }
      rating
      practitioner {
        id
        firstName
        lastName
        phone
        userId
        walletAddress
        imageLink
      }
    }
    nextToken
  }
}
`;

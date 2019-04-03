// eslint-disable
// this is an auto generated file. This will be overwritten

export const createPatient = `mutation CreatePatient($input: CreatePatientInput!) {
  createPatient(input: $input) {
    id
    phone
    countryCode
    events {
      items {
        id
        eventType
      }
      nextToken
    }
  }
}
`;
export const updatePatient = `mutation UpdatePatient($input: UpdatePatientInput!) {
  updatePatient(input: $input) {
    id
    phone
    countryCode
    events {
      items {
        id
        eventType
      }
      nextToken
    }
  }
}
`;
export const deletePatient = `mutation DeletePatient($input: DeletePatientInput!) {
  deletePatient(input: $input) {
    id
    phone
    countryCode
    events {
      items {
        id
        eventType
      }
      nextToken
    }
  }
}
`;
export const createEvent = `mutation CreateEvent($input: CreateEventInput!) {
  createEvent(input: $input) {
    id
    eventType
    patient {
      id
      phone
      countryCode
      events {
        nextToken
      }
    }
  }
}
`;
export const updateEvent = `mutation UpdateEvent($input: UpdateEventInput!) {
  updateEvent(input: $input) {
    id
    eventType
    patient {
      id
      phone
      countryCode
      events {
        nextToken
      }
    }
  }
}
`;
export const deleteEvent = `mutation DeleteEvent($input: DeleteEventInput!) {
  deleteEvent(input: $input) {
    id
    eventType
    patient {
      id
      phone
      countryCode
      events {
        nextToken
      }
    }
  }
}
`;

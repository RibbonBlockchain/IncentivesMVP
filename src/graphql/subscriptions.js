// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePatient = `subscription OnCreatePatient {
  onCreatePatient {
    id
    firstName
    lastName
    phone
    walletAddress
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
export const onUpdatePatient = `subscription OnUpdatePatient {
  onUpdatePatient {
    id
    firstName
    lastName
    phone
    walletAddress
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
export const onDeletePatient = `subscription OnDeletePatient {
  onDeletePatient {
    id
    firstName
    lastName
    phone
    walletAddress
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
export const onCreatePractitioner = `subscription OnCreatePractitioner {
  onCreatePractitioner {
    id
    firstName
    lastName
    phone
    walletAddress
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
export const onUpdatePractitioner = `subscription OnUpdatePractitioner {
  onUpdatePractitioner {
    id
    firstName
    lastName
    phone
    walletAddress
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
export const onDeletePractitioner = `subscription OnDeletePractitioner {
  onDeletePractitioner {
    id
    firstName
    lastName
    phone
    walletAddress
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
    id
    eventType
    patient {
      id
      firstName
      lastName
      phone
      walletAddress
      events {
        nextToken
      }
    }
    practitioner {
      id
      firstName
      lastName
      phone
      walletAddress
      events {
        nextToken
      }
    }
  }
}
`;
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
    id
    eventType
    patient {
      id
      firstName
      lastName
      phone
      walletAddress
      events {
        nextToken
      }
    }
    practitioner {
      id
      firstName
      lastName
      phone
      walletAddress
      events {
        nextToken
      }
    }
  }
}
`;
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
    id
    eventType
    patient {
      id
      firstName
      lastName
      phone
      walletAddress
      events {
        nextToken
      }
    }
    practitioner {
      id
      firstName
      lastName
      phone
      walletAddress
      events {
        nextToken
      }
    }
  }
}
`;

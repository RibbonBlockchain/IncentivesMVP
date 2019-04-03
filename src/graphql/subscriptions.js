// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePatient = `subscription OnCreatePatient {
  onCreatePatient {
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
export const onUpdatePatient = `subscription OnUpdatePatient {
  onUpdatePatient {
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
export const onDeletePatient = `subscription OnDeletePatient {
  onDeletePatient {
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
export const onCreateEvent = `subscription OnCreateEvent {
  onCreateEvent {
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
export const onUpdateEvent = `subscription OnUpdateEvent {
  onUpdateEvent {
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
export const onDeleteEvent = `subscription OnDeleteEvent {
  onDeleteEvent {
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

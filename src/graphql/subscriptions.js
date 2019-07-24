// eslint-disable
// this is an auto generated file. This will be overwritten

export const onCreatePatient = `subscription OnCreatePatient {
  onCreatePatient {
    id
    firstName
    lastName
    walletAddress
    userId
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
export const onUpdatePatient = `subscription OnUpdatePatient {
  onUpdatePatient {
    id
    firstName
    lastName
    walletAddress
    userId
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
export const onDeletePatient = `subscription OnDeletePatient {
  onDeletePatient {
    id
    firstName
    lastName
    walletAddress
    userId
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
export const onCreateInteraction = `subscription OnCreateInteraction {
  onCreateInteraction {
    id
    interaction
    ratings
    patient {
      id
      firstName
      lastName
      walletAddress
      userId
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
      interactions {
        nextToken
      }
    }
  }
}
`;
export const onUpdateInteraction = `subscription OnUpdateInteraction {
  onUpdateInteraction {
    id
    interaction
    ratings
    patient {
      id
      firstName
      lastName
      walletAddress
      userId
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
      interactions {
        nextToken
      }
    }
  }
}
`;
export const onDeleteInteraction = `subscription OnDeleteInteraction {
  onDeleteInteraction {
    id
    interaction
    ratings
    patient {
      id
      firstName
      lastName
      walletAddress
      userId
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
      interactions {
        nextToken
      }
    }
  }
}
`;
export const onCreatePractitioner = `subscription OnCreatePractitioner {
  onCreatePractitioner {
    id
    firstName
    lastName
    walletAddress
    userId
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
export const onUpdatePractitioner = `subscription OnUpdatePractitioner {
  onUpdatePractitioner {
    id
    firstName
    lastName
    walletAddress
    userId
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
export const onDeletePractitioner = `subscription OnDeletePractitioner {
  onDeletePractitioner {
    id
    firstName
    lastName
    walletAddress
    userId
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

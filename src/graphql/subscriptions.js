/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePatient = `subscription OnCreatePatient($owner: String) {
  onCreatePatient(owner: $owner) {
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
export const onUpdatePatient = `subscription OnUpdatePatient($owner: String) {
  onUpdatePatient(owner: $owner) {
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
export const onDeletePatient = `subscription OnDeletePatient($owner: String) {
  onDeletePatient(owner: $owner) {
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
export const onCreateInteraction = `subscription OnCreateInteraction($owner: String) {
  onCreateInteraction(owner: $owner) {
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
export const onUpdateInteraction = `subscription OnUpdateInteraction($owner: String) {
  onUpdateInteraction(owner: $owner) {
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
export const onDeleteInteraction = `subscription OnDeleteInteraction($owner: String) {
  onDeleteInteraction(owner: $owner) {
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
export const onCreateChw = `subscription OnCreateChw($owner: String) {
  onCreateCHW(owner: $owner) {
    id
    email
    walletAddress
    owner
  }
}
`;
export const onUpdateChw = `subscription OnUpdateChw($owner: String) {
  onUpdateCHW(owner: $owner) {
    id
    email
    walletAddress
    owner
  }
}
`;
export const onDeleteChw = `subscription OnDeleteChw($owner: String) {
  onDeleteCHW(owner: $owner) {
    id
    email
    walletAddress
    owner
  }
}
`;
export const onCreatePractitioner = `subscription OnCreatePractitioner($owner: String) {
  onCreatePractitioner(owner: $owner) {
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
export const onUpdatePractitioner = `subscription OnUpdatePractitioner($owner: String) {
  onUpdatePractitioner(owner: $owner) {
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
export const onDeletePractitioner = `subscription OnDeletePractitioner($owner: String) {
  onDeletePractitioner(owner: $owner) {
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

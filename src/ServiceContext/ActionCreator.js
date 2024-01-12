export const getServiceRequest = (payload) => {
  return { type: "GET_SERVICE_REQUEST", payload };
};
export const serviceDeleted = (payload) => {
  return { type: "DELETE_SERVICE", payload };
};

export const addNewService = (payload) => {
  return { type: "ADD_SERVICE", payload };
};

export const updateService = (payload) => {
  return { type: "UPDATE_SERVICE", payload };
};

export const deleteClient = (payload) => {
  return { type: "DELETE_CLIENT", payload };
};

export const editClient = (payload) => {
  return { type: "UPDATE_CLIENT", payload };
};
export const addNewClient = (payload) => {
  return { type: "ADD_CLIENT", payload };
};

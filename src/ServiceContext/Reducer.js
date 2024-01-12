export const reducer = (state, action) => {
  switch (action.type) {
    case "GET_SERVICE_REQUEST":
      return {
        ...state,
        data: action.payload,
      };
    case "DELETE_SERVICE":
      let newData = state.data.filter((el) => el.id !== action.payload);
      localStorage.setItem("services", JSON.stringify(newData));
      return {
        ...state,
        data: newData,
      };
    case "ADD_SERVICE":
      let newService = { ...action.payload, id: state.data.length + 1 };
      state.data.push(newService);
      localStorage.setItem("services", JSON.stringify(state.data));
      return {
        ...state,
        data: state.data,
      };
    case "UPDATE_SERVICE":
      let updatedServicesData = state.data.map((service) =>
        service.title === action.payload.title ? action.payload : service
      );
      localStorage.setItem("services", JSON.stringify(updatedServicesData));
      return {
        ...state,
        data: updatedServicesData,
      };
    case "DELETE_CLIENT":
      let newClientData = state.clients.filter(
        (el) => el.title !== action.payload
      );
      localStorage.setItem("clients", JSON.stringify(newClientData));
      return {
        ...state,
        clients: newClientData,
      };
    case "UPDATE_CLIENT":
      let updatedClientData = state.clients.map((service) =>
        service.id === action.payload.id ? action.payload : service
      );
      localStorage.setItem("clients", JSON.stringify(updatedClientData));
      return {
        ...state,
        clients: updatedClientData,
      };
    case "ADD_CLIENT":
      let newClient = { ...action.payload, id: state.data.length + 1 };
      state.clients.push(newClient);
      localStorage.setItem("clients", JSON.stringify(state.clients));
      return {
        ...state,
        clients: state.clients,
      };
    default:
      return state;
  }
};

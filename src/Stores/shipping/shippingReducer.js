import * as shippingActions from "./shippingAction";

const initialState = {
  cities: [],
  districts: [],
  wards: [],
  address: {
    city: {
      id: undefined,
      name: "",
    },
    district: {
      id: undefined,
      name: "",
    },
    ward: {
      id: undefined,
      name: "",
    },
    address: "",
    receiverName: "",
    receiverPhone: "",
  },
  service: [],
  shipFee: [],
  loading: false,
  error: null,
};

const shippingReducer = (state = initialState, action) => {
  switch (action.type) {
    case shippingActions.GET_CITY:
      return {
        ...state,
        loading: true,
      };
    case shippingActions.GET_CITY_SUCCESS:
      const cities = action.payload.map((item) => ({
        id: item.ProvinceID,
        name: item.ProvinceName,
      }));
      return {
        ...state,
        cities: cities,
        loading: false,
      };
    case shippingActions.GET_CITY_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case shippingActions.GET_DISTRICT:
      return {
        ...state,
        loading: true,
      };
    case shippingActions.GET_DISTRICT_SUCCESS:
      const districts = action.payload.map((item) => ({
        id: item.DistrictID,
        name: item.DistrictName,
      }));
      return {
        ...state,
        districts: districts,
        loading: false,
      };
    case shippingActions.GET_DISTRICT_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case shippingActions.GET_WARD:
      return {
        ...state,
        loading: true,
      };
    case shippingActions.GET_WARD_SUCCESS:
      const wards = action.payload.map((item) => ({
        id: item.WardCode,
        name: item.WardName,
      }));
      return {
        ...state,
        wards: wards,
        loading: false,
      };
    case shippingActions.GET_WARD_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    case shippingActions.GET_SHIP_FEE:
      return {
        ...state,
        loading: true,
      };
    case shippingActions.GET_SHIP_FEE_SUCCESS:
      return {
        ...state,
        shipFee: action.payload,
        loading: false,
      };
    case shippingActions.GET_SHIP_FEE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case shippingActions.GET_SERVICE:
      return {
        ...state,
        loading: true,
      };
    case shippingActions.GET_SERVICE_SUCCESS:
      return {
        ...state,
        service: action.payload,
        loading: false,
      };
    case shippingActions.GET_SERVICE_FAILURE:
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    case "SET_ADDRESS":
      return {
        ...state,
        address: action.payload,
      };

    default:
      return state;
  }
};

export default shippingReducer;

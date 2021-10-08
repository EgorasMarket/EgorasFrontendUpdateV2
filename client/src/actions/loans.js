import axios from "axios";
import { setAlert } from "./alert";
import {
  FETCH_LOAN_SUCCESS,
  FETCH_LOAN_FAILED,
  FETCH_COMPANIES_SUCCESS,
  FETCH_COMPANIES_FAILED,
  FETCH_REQUESTS_SUCCESS,
  FETCH_REQUESTS_FAILED,
  FETCH_STATISTICS_SUCCESS,
  FETCH_STATISTICS_FAILED,
  API_URL as api_url

} from "./types";

// Fetch Laons
export const fetch = (limit) => async (dispatch) => {

  const config = {
    headers: {
      "Content-Type": "application/json",
      'Access- Control - Allow - Origin': '*'
    },
  };
  try {
    const res = await axios.get(
      api_url + "/api/loans/" + limit,
      null,
      config
    );

    dispatch({
      type: FETCH_LOAN_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_LOAN_FAILED,
    });
  }
};


// Fetch Laons
export const fetchStats = () => async (dispatch) => {
  console.log("Fetching stats");
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      api_url + "/api/loans/get/statistics",
      null,
      config
    );

    dispatch({
      type: FETCH_STATISTICS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: FETCH_STATISTICS_FAILED,
    });
  }
};


export const fetchRequests = (limit) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      api_url + "/api/loans/requests/" + limit,
      null,
      config
    );
    console.log(res);
    dispatch({
      type: FETCH_REQUESTS_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_REQUESTS_FAILED,
    });
  }
};

export const fetchCompanies = (limit) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await axios.get(
      api_url + "/api/loans/companies/" + limit,
      null,
      config
    );
    console.log(res);
    dispatch({
      type: FETCH_COMPANIES_SUCCESS,
      payload: res.data,
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: FETCH_COMPANIES_FAILED,
    });
  }
};

// Upload image to imgur
export const image = (picture_of_director) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    picture_of_director
  });

  // console.log(body);


  try {
    const res = await axios.post(api_url + "/api/loans/image", body, config);

    // console.log(res);

    return res;
  } catch (err) {
    console.log(err, 'eeeerrr');

    return false;
  }
};

// Add Company
export const add = (cac, name_of_company, share_capital, location, company_offset_loan, board_of_directors, address, company_description, company_logo) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    cac, name_of_company, share_capital, location, company_offset_loan, board_of_directors, address, company_description, company_logo
  });
  // console.log(body);
  // localStorage.setItem("code", body);


  try {
    const res = await axios.post(
      api_url + "/api/loans/register/company",
      body,
      config
    );

    // dispatch(setAlert("Added Successfully!", "success"));
    // dispatch(fetch(3000));


    return {
      status: true
    };
  } catch (err) {
    console.log(err);

    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    return {
      status: false
    };
  }
};



// Add Company
export const messenger = (msg, type) => async (dispatch) => {

  dispatch(setAlert(msg, type));

};

// Add Company
export const test = () => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };




  try {
    // const res = await axios.post(
    //   api_url + "/api/loans/register/company",
    //   body,
    //   config
    // );

    // dispatch(setAlert("Added Successfully!", "success"));
    // dispatch(fetch(3000));


    return true;
  } catch (err) {
    console.log(err);

    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    return false;
  }
};




// Add Loan
export const loan = (loan_tile, cover_image, loan_duration, loan_category, country, loan_fees, loan_payable, story, loan_amount, address, payment_model) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const body = JSON.stringify({
    loan_tile, cover_image, loan_duration, loan_category, country, loan_fees, loan_payable, story, loan_amount, address, payment_model
  });
  console.log(body);

  try {
    const res = await axios.post(
      api_url + "/api/loans/add",
      body,
      config
    );
    console.log(res);
    //dispatch(setAlert("Added Successfully!", "success"));
    // dispatch(fetch(3000));


    return {
      status: true,
      id: res.id,
      cover_image: res.data.cover_image
    };
  } catch (err) {
    console.log(err);

    const errors = err.response.data.errors;
    console.log(errors);
    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "danger")));
    }

    return {
      status: false,
      id: null
    }
  }
};



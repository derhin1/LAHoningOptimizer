import axios from "axios";

// this file holds your frontend network request adapters
// think about each function as a service that provides data
// to your React UI through AJAX calls

// for example, if we need to display a list of users
// we'd probably want to define a getUsers service like this:

/* 
  export async function getUsers() {
    try {
      const { data: users } = await axios.get('/api/users')
      return users;
    } catch(err) {
      console.error(err)
    }
  }
*/

export async function getAPIHealth() {
  try {
    const { data } = await axios.get("/api/health");
    return data;
  } catch (err) {
    console.error(err);
    return { healthy: false };
  }
}

export async function updateExpectedCost_7_11(prices) {
  try {
    const { data } = await axios.patch(
      "/api/expectedCosts/addCost/7-11",
      prices
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateExpectedCost_12_17(prices) {
  try {
    const { data } = await axios.patch(
      "/api/expectedCosts/addCost/12-17",
      prices
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateExpectedCost_18_20(prices) {
  try {
    const { data } = await axios.patch(
      "/api/expectedCosts/addCost/18-20",
      prices
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExpectedArmorCost_7_11(level) {
  try {
    const { data } = await axios.post("/api/expectedCosts/armor/7-11", {
      level,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExpectedArmorCost_12_17(level) {
  try {
    const { data } = await axios.post("/api/expectedCosts/armor/12-17", {
      level,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExpectedArmorCost_18_20(level) {
  try {
    const { data } = await axios.post("/api/expectedCosts/armor/18-20", {
      level,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExpectedWeaponCost_7_11(level) {
  try {
    const { data } = await axios.post("/api/expectedCosts/weapon/7-11", {
      level,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExpectedWeaponCost_12_17(level) {
  try {
    const { data } = await axios.post("/api/expectedCosts/weapon/12-17", {
      level,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getExpectedWeaponCost_18_20(level) {
  try {
    const { data } = await axios.post("/api/expectedCosts/weapon/18-20", {
      level,
    });
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function updateMarketPrices(prices) {
  try {
    const { data } = await axios.patch(
      "/api/expectedCosts/market/update",
      prices
    );
    return data;
  } catch (error) {
    console.error(error);
  }
}

export async function getMarketPrices() {
  try {
    const { data } = await axios.get("/api/expectedCosts/market");
    return data;
  } catch (error) {
    console.error(error);
  }
}

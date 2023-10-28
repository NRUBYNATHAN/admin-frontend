import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./constants.js";

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

const apiSlice = createApi({
  baseQuery,
  tagTypes: ["users", "blog"],
  endpoints: (builder) => ({}),
});

export default apiSlice;

import { api } from "./api";

const BASE_URL = "/traffic-sources";

export const trafficSourceApi = api.injectEndpoints({
  overrideExisting: true,
  endpoints: (build) => ({
    createTrafficSource: build.mutation({
      query: (body: { cameFrom: string }) => ({
        url: `${BASE_URL}/create-traffic-source`,
        method: "POST",
        body,
      }),
      invalidatesTags: ["Traffic-Source"],
    }),
  }),
});

export const { useCreateTrafficSourceMutation } = trafficSourceApi;

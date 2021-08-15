import instance from "../../../utils/instance";

export const fetchAuth = async (logData: any) => {
  console.log(logData);
  const res = await instance.post("/auth", logData);

  const token = res.data.token;

  return token;
};

export const fetchCurrentUser = async (token: any) => {
  const res = await instance.get("auth/user", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return res.data;
};

import instance from "../../../utils/instance";

interface IPatchUser {
  name: string;
}

export const updateUser = async ({
  userId,
  values,
}: {
  userId: string;
  values: IPatchUser;
}) => {
  const res = await instance.patch(`/users/${userId}`, values);

  const data = res.data;

  return data;
};

export const deleteUser = async (userId: string) => {
  console.log(userId);
  const res = await instance.delete(`/users/${userId}`);

  const data = res.data;

  return data;
};

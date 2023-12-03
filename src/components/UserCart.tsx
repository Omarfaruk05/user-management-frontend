/* eslint-disable no-empty-pattern */
/* eslint-disable @typescript-eslint/no-floating-promises */

import { IUser } from "../interfaces/userInterface";
import { useDeleteUserMutation } from "../redux/features/user/userApi";
import { toast } from "react-toastify";

const UserCart = (user: IUser) => {
  const [deleteUserMutaion] = useDeleteUserMutation();

  const handleDeleteUser = async (id: string) => {
    try {
      const result = await deleteUserMutaion(id);
      if (result?.data?.data._id as string) {
        toast.success(result?.data?.message as string);
      }
    } catch (error) {
      toast.error("Failed to delete.");
    }
  };

  return (
    <div className="rounded-lg border p-2 bg-gradient-to-t">
      <div className="flex gap-1 items-center">
        <div>
          <img width={100} src={user?.avatar} alt="" />
        </div>
        <div>
          <h2 className="text-2xl">
            Name: {user?.first_name} {user?.last_name}
          </h2>
          <p>Domain: {user?.domain}</p>
          <p>Gender: {user?.gender}</p>
          <div className="mt-3">
            <button className="mx-1 py-1 px-2 font-semibold text-xs bg-teal-100 rounded-md">
              Add to Team
            </button>
            <button className="mx-1 py-1 px-2 font-semibold text-xs bg-lime-200 rounded-md">
              Update
            </button>
            <button
              onClick={() => handleDeleteUser(user?._id)}
              className="mx-1 py-1 px-2 font-semibold text-xs bg-red-300 rounded-md"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCart;

/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { Link } from "react-router-dom";
import { IUser } from "../interfaces/userInterface";
import { useDeleteUserMutation } from "../redux/features/user/userApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { addToTeam } from "../redux/features/team/teamSlice";

const UserCart = (user: IUser) => {
  const dispatch = useDispatch();
  const [deleteUserMutation] = useDeleteUserMutation();

  const handleDeleteUser = async (id: string) => {
    try {
      const result = await deleteUserMutation(id);

      if ("error" in result) {
        toast.error("Failed to delete.");
        return;
      }
      const userData = result?.data;
      if (userData?._id) {
        toast.success(userData?.message as string);
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
          <p className="text-sm">Available: {user?.available.toString()}</p>
          <div className="mt-3">
            <button
              onClick={() => dispatch(addToTeam(user))}
              className="mx-1 py-1 px-2 font-semibold text-xs bg-teal-100 rounded-md"
            >
              Add to Team
            </button>
            <Link to={`/update-user/${user?._id as string}`}>
              <button className="mx-1 py-1 px-2 font-semibold text-xs bg-lime-200 rounded-md">
                Update
              </button>
            </Link>
            <button
              onClick={() => handleDeleteUser(user?._id as string)}
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

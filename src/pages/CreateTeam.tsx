/* eslint-disable @typescript-eslint/no-misused-promises */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { useDispatch, useSelector } from "react-redux";
import { IUser } from "../interfaces/userInterface";
import { useCreateTeamMutation } from "../redux/features/team/teamApi";
import { toast } from "react-toastify";
import { resetTeam } from "../redux/features/team/teamSlice";

const CreateTeam = () => {
  const dispatch = useDispatch();
  const teamData = useSelector((state: any) => state?.team);

  const [createTeamMutation] = useCreateTeamMutation();

  const usersArray: string[] = [];

  teamData.users.map((user: IUser) => usersArray.push(user?._id as string));
  console.log(usersArray);

  const handleCreateTeam = async () => {
    try {
      const result = await createTeamMutation({ users: usersArray });
      if ("error" in result) {
        toast.error("Failed to create.");
        return;
      }
      if (result?.data?.data?._id) {
        toast.success(result?.data?.message as string);
        dispatch(resetTeam());
      }

      console.log(result);
    } catch (error) {
      toast.error("Somthing went wrong.");
    }
  };

  return (
    <div className="max-w-7xl mx-auto min-h-screen my-4 px-2">
      <h1 className="text-4xl font-serif text-center my-4">Team Member</h1>
      <div className="">
        {teamData &&
          teamData?.users?.map((user: IUser) => (
            <div className=" flex justify-between items-center border rounded-lg m-2 p-2 w-96 mx-auto bg-indigo-100">
              <div>
                {" "}
                <h4 className="text-xl font-semibold">
                  Name: {user?.first_name} {user?.last_name}
                </h4>
                <p>Domain: {user?.domain}</p>
                <small className="text-xs">
                  Available: {user?.available.toString()}
                </small>
              </div>
              <div>
                <img width={60} src={user?.avatar} alt="" />
              </div>
            </div>
          ))}
      </div>
      <div className="text-center">
        <button
          onClick={handleCreateTeam}
          className="my-4 px-3 py-1 rounded-md border bg-teal-600 text-white font-semibold"
        >
          Create Team
        </button>
      </div>
    </div>
  );
};

export default CreateTeam;

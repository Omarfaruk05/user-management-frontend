/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import LoadingCart from "../components/LoadingCart";
import { IUser } from "../interfaces/userInterface";
import { useGetAllTeamQuery } from "../redux/features/team/teamApi";

const AllTeam = () => {
  const { data } = useGetAllTeamQuery(undefined);
  const teams = data?.data;
  console.log(teams);

  const nums = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <div className="min-h-screen max-w-7xl mx-auto  px-2">
      <h1 className="text-4xl my-4 font-semibold font-serif text-center">
        Teams
      </h1>
      {teams ? (
        <div>
          {teams?.map((team: any) => (
            <div
              key={team?._id}
              className=" border w-fit rounded-md px-2 my-4  mx-auto"
            >
              <h3 className="text-green-600 text-xl font-semibold text-center">
                Team Member
              </h3>
              {team?.users?.map((user: IUser) => (
                <div
                  key={user?._id}
                  className=" bg-slate-100 my-2 p-2 w-[350px] rounded-lg"
                >
                  <h4 className="text-2xl">
                    {user?.first_name} {user?.last_name}
                  </h4>
                  <p>Domain: {user?.domain}</p>
                </div>
              ))}
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-96">
          {nums?.map((x) => (
            <LoadingCart key={x} />
          ))}
        </div>
      )}
    </div>
  );
};

export default AllTeam;

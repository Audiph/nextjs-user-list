import { LOAD_MORE, ADDITIONAL_USERS } from '@/common/constants';

type Props = {
  totalUsers: number;
  usersPerPage: number;
  setUsersPerPage: (usersPerPage: number) => void;
};

const LoadMore = ({ totalUsers, usersPerPage, setUsersPerPage }: Props) => {
  const handleLoadMore = () => {
    setUsersPerPage(usersPerPage + ADDITIONAL_USERS);
  };

  return (
    <div className="flexCenter pt-12">
      <button
        onClick={() => handleLoadMore()}
        type="button"
        className="rounded-lg border border-violet-500 bg-violet-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-violet-700 hover:bg-violet-700 focus:ring focus:ring-violet-200 disabled:cursor-not-allowed disabled:border-violet-300 disabled:bg-violet-300"
        disabled={usersPerPage < totalUsers ? false : true}
      >
        {LOAD_MORE}
      </button>
    </div>
  );
};

export default LoadMore;

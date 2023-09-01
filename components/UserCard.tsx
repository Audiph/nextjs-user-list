import Image from 'next/image';

type Props = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

const UserCard = ({ id, email, first_name, last_name, avatar }: Props) => {
  return (
    <div className="flexCenter flex-col rounded-2xl drop-shadow-card">
      <div className="relative overflow-hidden rounded-2xl shadow-lg-group">
        <Image
          src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          className="rounded-2xl"
          alt="Background Card"
          width={414}
          height={314}
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <Image
            src={avatar}
            width={70}
            height={70}
            className="rounded-full pl-4 pb-4"
            alt="user profile image"
          />
          <div className="p-4 text-white">
            <h3 className="xl:text-xl md:text-base sm:text-sm font-bold mb-1">
              {first_name} {last_name}, id: {id}
            </h3>
            <p className="xl:text-xl md:text-base sm:text-sm">{email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
